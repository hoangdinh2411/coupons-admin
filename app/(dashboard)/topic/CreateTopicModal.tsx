'use client';

import React, { useEffect } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { set, z } from 'zod';
import { Box, Paper } from '@mui/material';
import { Modal, Form } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';

import UploadFile, {
  ImageType,
} from '@/shared/layouts-components/uploadFile/UploadFile';
import toast from 'react-hot-toast';
import UseAppStore from '@/store/useAppStore';
import SeoForm, {
  seoDataSchema,
  seoDefaultValues,
} from '@/shared/layouts-components/seo-form/SeoForm';
import { getKeyWordsArray } from '@/helper/keywords';
import { createTopic } from '@/services/topic.service';
import { refreshCacheClient } from '@/services/share.service';

interface CreateTopicModalPropsType {
  open: boolean;
  onClose: () => void;
}

export const schema = z.object({
  ...seoDataSchema.shape,
  name: z.string().min(1, 'Topic name is required'),
  description: z.string().min(1, 'Topic name is required'),
  image: z.object({
    file_name: z.string(),
    url: z.string(),
    public_id: z.string(),
  }),
});

export const defaultValues = {
  ...seoDefaultValues,
  name: '',
  description: '',
  image: {
    file_name: '',
    url: '',
    public_id: '',
  },
};
export type TopicFormData = z.infer<typeof schema>;

export default function CreateTopicModal({
  open,
  onClose,
}: CreateTopicModalPropsType) {
  const method = useForm<TopicFormData>({
    resolver: zodResolver(schema),
    defaultValues,
  });
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = method;

  const { setTopics, topics } = UseAppStore((state) => state);
  useEffect(() => {
    if (!open) {
      reset(defaultValues);
    }
  }, [open]);
  const onSubmit = async (data: TopicFormData) => {
    const payload = {
      ...data,
      meta_data: {
        ...data.meta_data,
        keywords: getKeyWordsArray(data.meta_data.keywords),
      },
    };

    toast.promise(createTopic(payload), {
      loading: 'Creating...!',
      success: (res) => {
        if (res.success && res.data) {
          setTopics([...topics, res.data]);
          reset(defaultValues);
          refreshCacheClient({
            paths: [`/topics/${res.data.slug}`],
            tags: ['menu-data', 'topic-data','blogs-page']
          })
          return 'Created success';
        } else {
          throw res.message;
        }
      },
      error: (err) => err,
    });
  };

  return (
    <Modal
      centered
      show={open}
      onHide={() => {
        onClose();
      }}
      keyboard={false}
      className="modal fade"
    >
      <Modal.Header closeButton>
        <Modal.Title as="h6">Create Topic</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormProvider {...method}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Box className="mb-3">
              <Form.Label className="fw-bold text-default">
                Topic Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your topic name"
                {...register('name')}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </Box>
            <Box className="mb-3">
              <Form.Label className="fw-bold text-default">
                Topic description
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your topic name"
                {...register('description')}
              />
              {errors.description && (
                <small className="text-danger">{errors.description.message}</small>
              )}
            </Box>

            <Box mb={2}>
              <Form.Label className="fw-bold text-default">Image</Form.Label>
              <Box
                display="flex"
                alignItems="flex-start"
                flexDirection={'column'}
              >
                <Box position="relative" flex={1} width={'100%'}>
                  <Controller
                    control={control}
                    name="image"
                    render={({ field }) => (
                      <UploadFile
                        folder="topics"
                        newFile={field.value}
                        onUploadFile={(data: ImageType[]) =>
                          field.onChange(data[0])
                        }
                        id="create-topic"
                      />
                    )}
                  />
                </Box>
              </Box>
            </Box>
            <SeoForm />
            <Box display="flex" justifyContent="end" mt={4} gap={1}>
              <SpkButton Buttonvariant="primary" Buttontype="submit">
                Create
              </SpkButton>
            </Box>
          </Form>
        </FormProvider>
      </Modal.Body>
    </Modal>
  );
}
