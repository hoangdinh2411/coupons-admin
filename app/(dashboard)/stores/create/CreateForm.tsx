'use client';
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Box, MenuItem, OutlinedInput, Select } from '@mui/material';
import { Form } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import { FAQItem } from '../../../../shared/layouts-components/faqs/AccordionFAQ';
import UploadFile, {
  ImageType,
} from '@/shared/layouts-components/uploadFile/UploadFile';
import toast from 'react-hot-toast';
import { createStore } from '@/services/store.service';
import { StorePayload } from '@/types/store.type';
import UseAppStore from '@/store/useAppStore';
import CustomRichTextEditor from '../../../../shared/layouts-components/richtext-editor';
import useRickTextEditor from '@/hooks/useRickTextEditor';
import { generateSlug } from '@/helper/generateSlug';
import SeoForm, { seoDataSchema, seoDefaultValues } from '@/shared/layouts-components/seo-form/SeoForm';
import { getKeyWordsArray } from '@/helper/keywords';
import Faqs from '@/shared/layouts-components/faqs/Faqs';
import useFaqs from '@/hooks/useFaqs';



export const schema = z.object({
  ...seoDataSchema.shape,
  name: z.string().min(1, 'Store name is required').trim(),
  description: z.string().min(1, 'Description is required').trim(),
  max_discount_pct: z
    .number({ invalid_type_error: 'Must be a number' })
    .min(1, 'Min discount is 1')
    .max(100, 'Max discount is 100'),
  keywords: z.string().trim(),
  url: z.string().url('Invalid URL').trim(),
  categories: z
    .array(z.number())
    .min(1, 'Need to select at least one category'),
  image: z.object({
    file_name: z.string().trim(),
    url: z.string().trim(),
    public_id: z.string().trim(),
  }),
  slug: z.string().min(1, 'Slug is required'),
});

export const defaultValues: StoreFormData = {
  ...seoDefaultValues,
  name: '',
  description: '',
  max_discount_pct: 0,
  keywords: '',
  url: '',
  categories: [],
  image: {
    file_name: '',
    url: '',
    public_id: '',
  },
  slug: '',
};
export type StoreFormData = z.infer<typeof schema>;

export default function CreateForm() {
  const method = useForm<StoreFormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues,
  });
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = method;

  const { categories, setStores, stores } = UseAppStore((state) => state);
  const { getContent, rteRef, clearAll } = useRickTextEditor();

  const { getFaqsValues, faqList, handleAddFaq, handleRemoveAccordion, onCreateAccordion, setFaqList } = useFaqs()

  const watchName = watch('name');

  useEffect(() => {
    setValue('slug', generateSlug(watchName));
  }, [watchName]);
  const handleChangeContent = (value: string) => {
    setValue('description', value);
  };
  const onSubmit = async (data: StoreFormData) => {
    const description = await getContent();
    const payload: StorePayload = {
      ...data,
      description,
      keywords: getKeyWordsArray(data.keywords),
      meta_data: {
        ...data.meta_data,
        keywords: getKeyWordsArray(data.meta_data.keywords),
      },
      faqs: getFaqsValues()
    };
    toast.promise(createStore(payload), {
      loading: 'Pending...!',
      success: (res) => {
        if (res.success && res.data) {
          setStores([...stores, res.data]);
          reset(defaultValues);
          clearAll();
          setFaqList([])
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
        <Box className="mb-3">
          <Form.Label className="text-default">Store Slug</Form.Label>
          <Form.Control
            type="text"
            placeholder="Slug for store"
            {...register('slug')}
          />
          {errors.slug && (
            <small className="text-danger">{errors.slug.message}</small>
          )}
        </Box>

        {/* Description */}
        <Box className="mb-3">
          <Form.Label className="text-default fw-bold">Description</Form.Label>
          <CustomRichTextEditor
            imageFolder="stores"
            ref={rteRef}
            onBlur={handleChangeContent}
            error={Boolean(errors.description)}
            helpText={errors.description?.message}
          />
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
            name="categories"
            render={({ field }) => {
              return (
                <Fragment>
                  <Select
                    fullWidth
                    size="small"
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={field.value ?? []}
                    onChange={(e) => {
                      const value = e.target.value;
                      field.onChange(
                        typeof value === 'string' ? value.split(',') : value,
                      );
                    }}
                    input={<OutlinedInput placeholder="Select categories" />}
                  >
                    {categories.map((name) => (
                      <MenuItem key={name.id} value={name.id}>
                        {name.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.categories && (
                    <small className="text-danger">
                      {errors.categories.message}
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
          </Box>
        </Box>
        <Faqs onAdd={onCreateAccordion} values={faqList} onChange={handleAddFaq} onRemove={handleRemoveAccordion} />
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
