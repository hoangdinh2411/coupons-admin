'use client';

import React, { useEffect, memo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal, Form, CloseButton } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import { generateImageBytesObjectFromBase64, ImageByte } from '@/helper/image';
import { Box, Paper } from '@mui/material';
import UploadFile from '@/shared/layouts-components/uploadFile/UploadFile';
import { z } from 'zod';
import { IStore } from '@/types/store.type';

const schema = z.object({
  name: z.string().min(1, 'Store name is required'),
  description: z.string().min(1, 'Description is required'),
  image: z
    .object({
      filename: z.string().optional(),
      content: z.string().optional(),
    })
    .optional(),
  max_discount_pct: z
    .number()
    .min(0)
    .max(100, 'Discount must be between 0 and 100'),
  keywords: z.array(z.string()).min(1, 'At least one keyword is required'),
  url: z.string().url('Invalid URL format'),
  id: z.number().min(1, 'Store ID is required'),
});

type StoreFormData = z.infer<typeof schema>;

const defaultValue: StoreFormData = {
  name: '',
  description: '',
  image: undefined,
  max_discount_pct: 0,
  keywords: [],
  url: '',
  id: 1,
};

interface UpdateStoreModalProps {
  item: IStore | null;
  open: boolean;
  onClose: () => void;
}

function UpdateStoreModal({ item, open, onClose }: UpdateStoreModalProps) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm<StoreFormData>({
    resolver: zodResolver(schema),
    defaultValues: defaultValue,
  });

  useEffect(() => {
    if (isSubmitSuccessful || !open) {
      reset(defaultValue);
    }
  }, [isSubmitSuccessful, open, reset]);

  useEffect(() => {
    if (item) {
      setValue('name', item.name);
      setValue('description', item.description);
      if (item.image) {
        setValue(
          'image',
          generateImageBytesObjectFromBase64(item.image, item.name),
        );
      }
      setValue('max_discount_pct', item.max_discount_pct);
      setValue('keywords', item.keywords);
      setValue('url', item.url);
      setValue('id', item.id);
    }
  }, [item, setValue]);

  const onSubmit = async (data: StoreFormData) => {
    console.log('Form data submitted:', data);
    onClose();
  };

  const handleUploadFile = (data: ImageByte) => {
    setValue('image', data);
  };

  const handleKeywordsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keywords = e.target.value
      .split(',')
      .map((keyword) => keyword.trim())
      .filter((keyword) => keyword.length > 0);
    setValue('keywords', keywords);
  };

  return (
    <Modal
      show={open}
      onHide={onClose}
      centered
      aria-labelledby="update-Store-modal"
      aria-describedby="modal-to-update-Store"
    >
      <Modal.Header className="d-flex justify-content-between align-items-center">
        <Modal.Title as="h6">Update Store</Modal.Title>
        <CloseButton onClick={onClose} aria-label="close" />
      </Modal.Header>
      <Modal.Body>
        <Paper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Store Name */}
            <Box className="mb-3">
              <Form.Label className="fw-bold text-default">
                Store Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Store name"
                {...register('name')}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </Box>

            {/* Description */}
            <Box className="mb-3">
              <Form.Label className="fw-bold text-default">
                Description
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Store description"
                {...register('description')}
              />
              {errors.description && (
                <small className="text-danger">
                  {errors.description.message}
                </small>
              )}
            </Box>

            {/* Image Upload */}
            <Box mb={2}>
              <Form.Label className="fw-bold text-default">Image</Form.Label>
              <Box display="flex" alignItems="center" gap={2}>
                <Box position="relative" flex={1}>
                  <Controller
                    control={control}
                    name="image"
                    render={({ field }) => (
                      <UploadFile
                        filename={`${field.value?.filename}`}
                        onUploadFile={handleUploadFile}
                        id="update-Store"
                      />
                    )}
                  />
                </Box>
              </Box>
              {errors.image && (
                <small className="text-danger">{errors.image.message}</small>
              )}
            </Box>

            {/* Max Discount Percentage */}
            <Box className="mb-3">
              <Form.Label className="fw-bold text-default">
                Max Discount (%)
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter max discount percentage"
                {...register('max_discount_pct', { valueAsNumber: true })}
              />
              {errors.max_discount_pct && (
                <small className="text-danger">
                  {errors.max_discount_pct.message}
                </small>
              )}
            </Box>

            {/* Keywords */}
            <Box className="mb-3">
              <Form.Label className="fw-bold text-default">Keywords</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter keywords (comma-separated)"
                onChange={handleKeywordsChange}
                defaultValue={item?.keywords.join(', ')}
              />
              {errors.keywords && (
                <small className="text-danger">{errors.keywords.message}</small>
              )}
            </Box>

            {/* URL */}
            <Box className="mb-3">
              <Form.Label className="fw-bold text-default">
                Website URL
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter URL"
                {...register('url')}
              />
              {errors.url && (
                <small className="text-danger">{errors.url.message}</small>
              )}
            </Box>

            {/* Store ID */}
            <Box className="mb-3">
              <Form.Label className="fw-bold text-default">Store ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Store ID"
                disabled
                {...register('id', { valueAsNumber: true })}
              />
              {errors.id && (
                <small className="text-danger">{errors.id.message}</small>
              )}
            </Box>

            {/* Form Actions */}
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
        </Paper>
      </Modal.Body>
    </Modal>
  );
}

export default memo(UpdateStoreModal);
