'use client';

import React, { useEffect, memo } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal, Form, CloseButton } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import { schema, TopicFormData } from './CreateTopicModal';
import { Box } from '@mui/material';
import UploadFile, {
  ImageType,
} from '@/shared/layouts-components/uploadFile/UploadFile';
import UseAppStore from '@/store/useAppStore';
import toast from 'react-hot-toast';
import SeoForm from '@/shared/layouts-components/seo-form/SeoForm';
import { getKeyWordsArray, getKeyWordsString } from '@/helper/keywords';
import { TopicData } from '@/types/topic.type';
import { updateTopic } from '@/services/topic.service';
import { refreshCacheClient } from '@/services/share.service';

interface UpdateTopicModalProps {
  item: TopicData | null;
  open: boolean;
  onClose: () => void;
}

function UpdateTopicModal({ item, open, onClose }: UpdateTopicModalProps) {
  const { setTopics, topics } = UseAppStore((state) => state);
  const method = useForm<TopicFormData>({
    resolver: zodResolver(schema),
  });
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = method;

  useEffect(() => {
    if (item) {
      reset({
        ...item,
        meta_data: {
          ...item.meta_data,
          keywords: getKeyWordsString(item.meta_data?.keywords || []),
        },
      });
    }
  }, [item]);
  const onSubmit = async (data: TopicFormData) => {
    if (item) {
      const payload = {
        ...data,
        meta_data: {
          ...data.meta_data,
          keywords: getKeyWordsArray(data.meta_data.keywords),
        },
      };
      toast.promise(updateTopic(item?.id, payload), {
        loading: 'Updating...!',
        success: (res) => {
          if (res.success && res.data) {
            setTopics(
              topics.map((cat) =>
                cat.id === item?.id ? { ...cat, ...res.data } : cat,
              ),
            );
            refreshCacheClient({
              paths: [`topics/${res.data.slug}`],
              tags: ['menu-data', 'topic-data']
            })
            return 'Updated success';
          }
          throw res.message;
        },
        error: (err) => err || 'Something wrong',
      });
    }
  };

  return (
    <Modal
      show={open}
      onHide={onClose}
      centered
      aria-labelledby="update-topic-modal"
      aria-describedby="modal-to-update-topic"
    >
      <Modal.Header className="d-flex justify-content-between align-items-center">
        <Modal.Title as="h6">Update Topic</Modal.Title>
        <CloseButton onClick={onClose} aria-label="close" />
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
                Update
              </SpkButton>
              <SpkButton
                Buttonvariant="primary-light"
                Buttontype="button"
                onClickfunc={onClose}
              >
                Cancel
              </SpkButton>
            </Box>
          </Form>
        </FormProvider>
      </Modal.Body>
    </Modal>
  );
}

export default memo(UpdateTopicModal);
