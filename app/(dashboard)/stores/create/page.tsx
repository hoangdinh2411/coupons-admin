'use client';

import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Box, Paper } from '@mui/material';
import { Form } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';

import UploadFile, {
  ImageByte,
} from '@/shared/layouts-components/uploadFile/UploadFile';
import toast from 'react-hot-toast';
import { createStore } from '@/app/actions/store.service';
import { StorePayload } from '@/types/store.type';
import UseAppStore from '@/store/useAppStore';

export const schema = z.object({
  name: z.string().min(1, 'Store name is required'),
  image: z.object({
    filename: z.string(),
    data: z.string(),
    type: z.string(),
  }),
  description: z.string().min(1, 'Description is required'),
  max_discount_pct: z
    .number({ invalid_type_error: 'Must be a number' })
    .min(0)
    .max(100),
  keywords: z.string(),
  url: z.string().url('Invalid URL'),
  category: z.number().min(1, 'Category is required'),
});

export const defaultValue: StoreFormData = {
  name: '',
  image: {
    filename: '',
    data: '',
    type: '',
  },
  description: '',
  max_discount_pct: 0,
  keywords: '',
  url: '',
  category: 0,
};

export type StoreFormData = z.infer<typeof schema>;

export default function CreateStoreTemplate() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm<StoreFormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });
  const { categories, setStores, stores } = UseAppStore((state) => state);
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValue);
    }
  }, [isSubmitSuccessful]);
  const onSubmit = async ({ image, ...rest }: StoreFormData) => {
    const payload: StorePayload = {
      ...rest,
      keywords: rest.keywords.split(',').map((k) => k.trim()),
      image_bytes: image.data,
    };
    toast.promise(createStore(payload), {
      loading: 'Creating...!',
      success: (res) => {
        if (res.success && res.data) {
          setStores([...stores, res.data]);
          return 'Created success';
        }
        throw res.message;
      },
    });
  };

  const handleUploadFile = (data: ImageByte) => {
    setValue('image', data);
  };
  return (
    <Paper
      sx={{
        p: 4,
      }}
    >
      <Box display={'flex'} mb={1} justifyContent={'space-between'}>
        <h6>Create store</h6>
      </Box>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Store Name */}
        <Box className="mb-3">
          <Form.Label className="text-default">Store Name</Form.Label>
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
          <Form.Label className="text-default">Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter Store description"
            {...register('description')}
          />
          {errors.description && (
            <small className="text-danger">{errors.description.message}</small>
          )}
        </Box>

        {/* Max Discount */}
        <Box className="mb-3">
          <Form.Label className="text-default">Max Discount (%)</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
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
          <Form.Label className="text-default">
            Keywords (comma separated)
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g., AI, programming"
            {...register('keywords')}
          />
          {errors.keywords && (
            <small className="text-danger">{errors.keywords.message}</small>
          )}
        </Box>

        {/* URL */}
        <Box className="mb-3">
          <Form.Label className="text-default">Website URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="https://example.com"
            {...register('url')}
          />
          {errors.url && (
            <small className="text-danger">{errors.url.message}</small>
          )}
        </Box>

        {/* Category */}
        <Box className="mb-3">
          <Form.Label className="text-default">Category</Form.Label>
          <Form.Select {...register('category', { valueAsNumber: true })}>
            <option value={0}>Select category</option>
            {categories &&
              categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
          </Form.Select>
          {errors.category && (
            <small className="text-danger">{errors.category.message}</small>
          )}
        </Box>

        {/* Image Upload */}
        <Box mb={2}>
          <Form.Label className="text-default">Image</Form.Label>
          <Controller
            control={control}
            name="image"
            render={({ field }) => (
              <UploadFile
                id="create-file-input"
                filename={field.value?.filename}
                onUploadFile={handleUploadFile}
              />
            )}
          />
          {errors.image?.message && (
            <small className="text-danger">Image required</small>
          )}
        </Box>

        {/* Submit */}
        <Box display="flex" justifyContent="end" mt={4} gap={1}>
          <SpkButton Buttonvariant="primary" Buttontype="submit">
            Create Store
          </SpkButton>
        </Box>
      </Form>
    </Paper>
  );
}
