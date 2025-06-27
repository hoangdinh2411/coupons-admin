'use client';

import React, { useEffect, memo } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal, Form, CloseButton } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import { generateImageBytesObjectFromBase64 } from '@/helper/image';
import { ImageByte } from '@/helper/image';
import { CategoryFormData, schema } from './CreateCategoryModal';
import { Box, Paper } from '@mui/material';
import UploadFile, {
  ImageType,
} from '@/shared/layouts-components/uploadFile/UploadFile';
import { CategoryData } from '@/types/category.type';
import UseAppStore from '@/store/useAppStore';
import toast from 'react-hot-toast';
import { updateCategory } from '@/services/category.service';
import SeoForm from '@/shared/layouts-components/seo-form/SeoForm';
import { getKeyWordsArray, getKeyWordsString } from '@/helper/keywords';

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
  const method = useForm<CategoryFormData>({
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
        meta_data: {
          ...item.meta_data,
          keywords: getKeyWordsString(item.meta_data?.keywords || []),
        },
      });
    }
  }, [item]);
  const onSubmit = async (data: CategoryFormData) => {
    if (item) {
      const payload = {
        ...data,
        meta_data: {
          ...data.meta_data,
          keywords: getKeyWordsArray(data.meta_data?.keywords),
        },
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
                        id="update-category"
                      />
                    )}
                  />
                </Box>
                {errors.image?.url && (
                  <small className="text-danger">
                    {errors.image?.url.message}
                  </small>
                )}
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

export default memo(UpdateCategoryModal);
