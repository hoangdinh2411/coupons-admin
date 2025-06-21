'use client';

import React, { useEffect, useTransition } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Box, Paper } from '@mui/material';
import { Modal, Form } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';

import UploadFile, {
  ImageByte,
} from '@/shared/layouts-components/uploadFile/UploadFile';
import toast from 'react-hot-toast';
import { createCategory, updateCategory } from '@/app/actions/category.service';
import UseAppStore from '@/store/useAppStore';

interface CreateCategoryModalPropsType {
  open: boolean;
  onClose: () => void;
}

export const schema = z.object({
  name: z.string().min(1, 'Category name is required'),
  image: z.object({
    filename: z.string(),
    data: z.string(),
    type: z.string(),
  }),
});

export const defaultValue = {
  name: '',
  image: {
    filename: '',
    data: '',
    type: '',
  },
};
export type CategoryFormData = z.infer<typeof schema>;

export default function CreateCategoryModal({
  open,
  onClose,
}: CreateCategoryModalPropsType) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(schema),
  });

  const { setCategory, categories } = UseAppStore((state) => state);
  useEffect(() => {
    if (isSubmitSuccessful || !open) {
      reset(defaultValue);
    }
  }, [isSubmitSuccessful, open]);
  const onSubmit = async (data: CategoryFormData) => {
    const payload = {
      name: data.name,
      image_bytes: data.image.data,
    };

    toast.promise(createCategory(payload), {
      loading: 'Creating...!',
      success: (res) => {
        if (res.success && res.data) {
          setCategory([...categories, res.data]);
          return 'Created success';
        }
        throw res.message;
      },
      error: (err) => err || 'Something wrong',
    });
  };

  const handleUploadFile = (data: ImageByte) => {
    console.log(data);
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
        <Modal.Title as="h6">Create Category</Modal.Title>
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
                        id="create-category"
                      />
                    )}
                  />
                </Box>
              </Box>
            </Box>

            <Box display="flex" justifyContent="end" mt={4} gap={1}>
              <SpkButton Buttonvariant="primary" Buttontype="submit">
                Create Category
              </SpkButton>
            </Box>
          </Form>
        </Paper>
      </Modal.Body>
    </Modal>
  );
}
