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
import { createCategory } from '@/services/category.service';
import UseAppStore from '@/store/useAppStore';
import SeoForm, {
  seoDataSchema,
  seoDefaultValues,
} from '@/shared/layouts-components/seo-form/SeoForm';
import { getKeyWordsArray } from '@/helper/keywords';

interface CreateCategoryModalPropsType {
  open: boolean;
  onClose: () => void;
}

export const schema = z.object({
  ...seoDataSchema.shape,
  name: z.string().min(1, 'Category name is required').trim(),
  image: z.object({
    file_name: z.string().trim(),
    url: z.string().trim(),
    public_id: z.string().trim(),
  }),
});

export const defaultValues = {
  ...seoDefaultValues,
  name: '',
  image: {
    file_name: '',
    url: '',
    public_id: '',
  },
};
export type CategoryFormData = z.infer<typeof schema>;

export default function CreateCategoryModal({
  open,
  onClose,
}: CreateCategoryModalPropsType) {
  const method = useForm<CategoryFormData>({
    resolver: zodResolver(schema),
    defaultValues,
  });
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = method;

  const { setCategory, categories } = UseAppStore((state) => state);
  useEffect(() => {
    if (!open) {
      reset(defaultValues);
    }
  }, [open]);
  const onSubmit = async (data: CategoryFormData) => {
    const payload = {
      ...data,
      meta_data: {
        ...data.meta_data,
        keywords: getKeyWordsArray(data.meta_data.keywords),
      },
    };

    toast.promise(createCategory(payload), {
      loading: 'Creating...!',
      success: (res) => {
        if (res.success && res.data) {
          setCategory([...categories, res.data]);
          reset(defaultValues);
          return 'Created success';
        } else {
          throw res.message;
        }
      },
      error: (err) => err,
    });
  };

  // const handleUploadFile = (data: ImageType) => {
  //   console.log(data);
  //   setValue('image', data);
  // };

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
        <FormProvider {...method}>
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
                        folder="categories"
                        newFile={field.value}
                        onUploadFile={(data: ImageType[]) =>
                          field.onChange(data[0])
                        }
                        id="create-category"
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
