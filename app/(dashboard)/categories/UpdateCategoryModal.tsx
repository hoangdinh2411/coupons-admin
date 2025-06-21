'use client';

import React, { useEffect, memo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal, Form, CloseButton } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import { generateImageBytesObjectFromBase64 } from '@/helper/image';
import { ImageByte } from '@/helper/image';
import { CategoryFormData, schema } from './CreateCategoryModal';
import { Box, Paper } from '@mui/material';
import UploadFile from '@/shared/layouts-components/uploadFile/UploadFile';
import { CategoryData } from '@/types/category.type';
import UseAppStore from '@/store/useAppStore';
import toast from 'react-hot-toast';
import { updateCategory } from '@/app/services/category.service';

interface UpdateCategoryModalProps {
  item: CategoryData | null;
  open: boolean;
  onClose: () => void;
}

function UpdateCategoryModal({
  item,
  open,
  onClose,
}: UpdateCategoryModalProps) {
  const { setCategory, categories } = UseAppStore((state) => state);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (item) {
      setValue('name', item.name);
      if (item.image_bytes) {
        setValue(
          'image',
          generateImageBytesObjectFromBase64(item.image_bytes, item.name),
        );
      }
    }
  }, [item]);
  const onSubmit = async (data: CategoryFormData) => {
    if (item) {
      const payload = {
        name: data.name,
        image_bytes: data.image.data,
      };
      toast.promise(updateCategory(item?.id, payload), {
        loading: 'Updating...!',
        success: (res) => {
          if (res.success && res.data) {
            setCategory(
              categories.map((cat) =>
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
      aria-labelledby="update-category-modal"
      aria-describedby="modal-to-update-category"
    >
      <Modal.Header className="d-flex justify-content-between align-items-center">
        <Modal.Title as="h6">Update Category</Modal.Title>
        <CloseButton onClick={onClose} aria-label="close" />
      </Modal.Header>
      <Modal.Body>
        <Paper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Box className="mb-3">
              <Form.Label className="fw-bold text-default">
                Category Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your category name"
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
                        id="update-category"
                      />
                    )}
                  />
                </Box>
              </Box>
            </Box>

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

export default memo(UpdateCategoryModal);
