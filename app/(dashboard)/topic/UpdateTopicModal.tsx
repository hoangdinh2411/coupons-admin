'use client';

import React, { useEffect, memo } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal, Form, CloseButton } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import { generateImageBytesObjectFromBase64 } from '@/helper/image';
import { ImageByte } from '@/helper/image';
import { schema, TopicFormData } from './CreateTopicModal';
import { Box } from '@mui/material';
import UploadFile from '@/shared/layouts-components/uploadFile/UploadFile';
import UseAppStore from '@/store/useAppStore';
import toast from 'react-hot-toast';
import SeoForm from '@/shared/layouts-components/seo-form/SeoForm';
import { getKeyWordsArray, getKeyWordsString } from '@/helper/keywords';
import { TopicData } from '@/types/topic.type';
import { updateTopic } from '@/services/topic.service';

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
    setValue,
    reset,
    formState: { errors },
  } = method;

  useEffect(() => {
    if (item) {
      reset({
        ...item,
        seo_keywords: getKeyWordsString(item.meta_data?.keywords || []),
        image: generateImageBytesObjectFromBase64(item.image_bytes, item.name),
      });
    }
  }, [item]);
  const onSubmit = async ({ image, ...data }: TopicFormData) => {
    if (item) {
      const payload = {
        ...data,
        name: data.name,
        image_bytes: image.data,
        seo_keywords: getKeyWordsArray(data.seo_keywords),
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
            return 'Updated success';
          }
          throw res.message;
        },
        error: (err) => err || 'Something wrong',
      });
    }
  };
  const handleUploadFile = (data: ImageByte) => {
    setValue('image', data);
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
                        id="update-topic"
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
