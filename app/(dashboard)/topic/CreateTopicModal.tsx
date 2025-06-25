'use client';

import React, { useEffect } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { set, z } from 'zod';
import { Box, Paper } from '@mui/material';
import { Modal, Form } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';

import UploadFile, {
  ImageByte,
} from '@/shared/layouts-components/uploadFile/UploadFile';
import toast from 'react-hot-toast';
import UseAppStore from '@/store/useAppStore';
import SeoForm, {
  seoDataSchema,
  seoDefaultValues,
} from '@/shared/layouts-components/seo-form/SeoForm';
import { getKeyWordsArray } from '@/helper/keywords';
import { createTopic } from '@/services/topic.service';

interface CreateTopicModalPropsType {
  open: boolean;
  onClose: () => void;
}

export const schema = z.object({
  ...seoDataSchema.shape,
  name: z.string().min(1, 'Topic name is required'),
  image: z.object({
    filename: z.string(),
    data: z.string(),
    type: z.string(),
  }),
});

export const defaultValue = {
  ...seoDefaultValues,
  name: '',
  image: {
    filename: '',
    data: '',
    type: '',
  },
};
export type TopicFormData = z.infer<typeof schema>;

export default function CreateTopicModal({
  open,
  onClose,
}: CreateTopicModalPropsType) {
  const method = useForm<TopicFormData>({
    resolver: zodResolver(schema),
  });
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = method;

  const { setTopics, topics } = UseAppStore((state) => state);
  useEffect(() => {
    if (!open) {
      reset(defaultValue);
    }
  }, [open]);
  const onSubmit = async ({ image, ...rest }: TopicFormData) => {
    const payload = {
      ...rest,
      seo_keywords: getKeyWordsArray(rest.seo_keywords),
      image_bytes: image.data,
    };

    toast.promise(createTopic(payload), {
      loading: 'Creating...!',
      success: (res) => {
        if (res.success && res.data) {
          setTopics([...topics, res.data]);
          reset(defaultValue);

          return 'Created success';
        } else {
          throw res.message;
        }
      },
      error: (err) => err,
    });
  };

  const handleUploadFile = (data: ImageByte) => {
    setValue('image', data);
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

            <Box mb={2}>
              <Form.Label className="fw-bold text-default">Image</Form.Label>
              <Box display="flex" alignItems="center" gap={2}>
                <Box position="relative" flex={1}>
                  <Controller
                    control={control}
                    name="image"
                    render={({ field }) => (
                      <UploadFile
                        filename={field.value?.filename}
                        onUploadFile={handleUploadFile}
                        id="create-topic"
                      />
                    )}
                  />
                </Box>
                {errors.image && (
                  <small className="text-danger">{errors.image.message}</small>
                )}
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
