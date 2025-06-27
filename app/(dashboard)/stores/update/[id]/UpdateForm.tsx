'use client';
import React, { Fragment, useEffect } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box } from '@mui/material';
import { Form } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';

import UploadFile, {
  ImageType,
} from '@/shared/layouts-components/uploadFile/UploadFile';
import toast from 'react-hot-toast';
import { createStore, updateStore } from '@/services/store.service';
import { StoreData, StorePayload } from '@/types/store.type';
import UseAppStore from '@/store/useAppStore';
import { generateImageBytesObjectFromBase64 } from '@/helper/image';
import { defaultValue, schema, StoreFormData } from '../../create/CreateForm';
import { getKeyWordsArray, getKeyWordsString } from '@/helper/keywords';
import SeoForm from '@/shared/layouts-components/seo-form/SeoForm';

type Props = {
  item: StoreData | null;
};

export default function UpdateForm({ item }: Props) {
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

  useEffect(() => {
    if (item !== null) {
      reset({
        ...item,
        max_discount_pct: Number(item.max_discount_pct),
        keywords: getKeyWordsString(item.keywords || []),
        meta_data: {
          ...item.meta_data,
          keywords: getKeyWordsString(item.meta_data?.keywords || []),
        },
      });
    }
  }, [item]);

  const onSubmit = async (data: StoreFormData) => {
    if (item) {
      const payload: StorePayload = {
        ...data,
        keywords: getKeyWordsArray(data.keywords),
        meta_data: {
          ...data.meta_data,
          keywords: getKeyWordsArray(data.meta_data.keywords),
        },
      };

      toast.promise(updateStore(item.id, payload), {
        loading: 'Updating...!',
        success: (res) => {
          if (res.success && res.data) {
            const newStores = stores.map((s) =>
              s.id === item?.id ? { ...s, ...res.data } : s,
            );
            setStores(newStores);
            return 'Updated success';
          }
          throw res.message;
        },
        error: (err) => err || 'Something wrong',
      });
    }
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
          <Form.Label className="text-default">Image</Form.Label>
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
                    id="update-store"
                  />
                )}
              />
            </Box>
            {errors.image?.url && (
              <small className="text-danger">{errors.image?.url.message}</small>
            )}
          </Box>
        </Box>
        <SeoForm />
        {/* Submit */}
        <Box display="flex" justifyContent="end" mt={4} gap={1}>
          <SpkButton Buttonvariant="primary" Buttontype="submit">
            Update Store
          </SpkButton>
        </Box>
      </Form>
    </FormProvider>
  );
}
