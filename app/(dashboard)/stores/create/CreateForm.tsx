'use client';
import React, { Fragment, useEffect } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Box } from '@mui/material';
import { Form } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';

import UploadFile, {
  ImageType,
} from '@/shared/layouts-components/uploadFile/UploadFile';
import toast from 'react-hot-toast';
import { createStore } from '@/services/store.service';
import { StorePayload } from '@/types/store.type';
import UseAppStore from '@/store/useAppStore';
import SeoForm, {
  seoDataSchema,
  seoDefaultValues,
} from '@/shared/layouts-components/seo-form/SeoForm';
import { getKeyWordsArray } from '@/helper/keywords';

export const schema = z.object({
  ...seoDataSchema.shape,
  name: z.string().min(1, 'Store name is required'),
  description: z.string().min(1, 'Description is required'),
  max_discount_pct: z
    .number({ invalid_type_error: 'Must be a number' })
    .min(0)
    .max(100),
  keywords: z.string(),
  url: z.string().url('Invalid URL'),
  category_id: z.number(),
  image: z.object({
    file_name: z.string(),
    url: z.string().min(1, 'Need to upload image'),
    public_id: z.string(),
  }),
});

export const defaultValue: StoreFormData = {
  ...seoDefaultValues,
  name: '',
  description: '',
  max_discount_pct: 0,
  keywords: '',
  url: '',
  category_id: 0,
  image: {
    file_name: '',
    url: '',
    public_id: '',
  },
};
export type StoreFormData = z.infer<typeof schema>;

export default function CreateForm() {
  const method = useForm<StoreFormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = method;

  const { categories, setStores, stores } = UseAppStore((state) => state);
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValue);
    }
  }, [isSubmitSuccessful]);

  const onSubmit = async (data: StoreFormData) => {
    const payload: StorePayload = {
      ...data,
      keywords: getKeyWordsArray(data.keywords),
      meta_data: {
        ...data.meta_data,
        keywords: getKeyWordsArray(data.meta_data.keywords),
      },
    };

    toast.promise(createStore(payload), {
      loading: 'Pending...!',
      success: (res) => {
        if (res.success && res.data) {
          setStores([...stores, res.data]);
          return 'Created success';
        }

        throw res.message;
      },
      error: (err) => err || 'Something wrong',
    });
  };

  return (
    <FormProvider {...method}>
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
          <Controller
            control={control}
            name="category_id"
            render={({ field: { onChange, value, ref } }) => {
              return (
                <Fragment>
                  <Form.Select
                    ref={ref}
                    value={Number(value ?? 0)}
                    onChange={(e) => onChange(Number(e.target.value))}
                  >
                    <option value={0}>Select category</option>
                    {categories &&
                      categories.map((cat) => (
                        <option key={cat.id} value={Number(cat.id)}>
                          {cat.name}
                        </option>
                      ))}
                  </Form.Select>
                  {errors.category_id && (
                    <small className="text-danger">
                      {errors.category_id.message}
                    </small>
                  )}
                </Fragment>
              );
            }}
          />
        </Box>

        {/* Image Upload */}
        <Box mb={2}>
          <Form.Label className="fw-bold text-default">Image</Form.Label>
          <Box display="flex" alignItems="flex-start" flexDirection={'column'}>
            <Box position="relative" flex={1} width={'100%'}>
              <Controller
                control={control}
                name="image"
                render={({ field }) => (
                  <UploadFile
                    folder="stores"
                    newFile={field.value}
                    onUploadFile={(data: ImageType[]) =>
                      field.onChange(data[0])
                    }
                    id="create-store"
                  />
                )}
              />
            </Box>
            {errors.image?.message && (
              <small className="text-danger">{errors.image.message}</small>
            )}
            {errors.image?.url && (
              <small className="text-danger">{errors.image?.url.message}</small>
            )}
          </Box>
        </Box>
        <SeoForm />
        {/* Submit */}
        <Box display="flex" justifyContent="end" mt={4} gap={1}>
          <SpkButton Buttonvariant="primary" Buttontype="submit">
            Create Store
          </SpkButton>
        </Box>
      </Form>
    </FormProvider>
  );
}
