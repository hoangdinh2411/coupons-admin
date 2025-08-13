'use client';
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, MenuItem, OutlinedInput, Select } from '@mui/material';
import { Form } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';

import UploadFile, {
  ImageType,
} from '@/shared/layouts-components/uploadFile/UploadFile';
import toast from 'react-hot-toast';
import { updateStore } from '@/services/store.service';
import { StoreData, StorePayload } from '@/types/store.type';
import UseAppStore from '@/store/useAppStore';
import { schema, StoreFormData } from '../../create/CreateForm';
import { getKeyWordsArray, getKeyWordsString } from '@/helper/keywords';
import SeoForm from '@/shared/layouts-components/seo-form/SeoForm';
import useRickTextEditor from '@/hooks/useRickTextEditor';
import { FAQItem } from '../../../../../shared/layouts-components/faqs/AccordionFAQ';
import Faqs from '@/shared/layouts-components/faqs/Faqs';
import useFaqs from '@/hooks/useFaqs';
import dynamic from 'next/dynamic';
const CustomRichTextEditor = dynamic(() => import('../../../../../shared/layouts-components/richtext-editor'), {
  ssr: false
})
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
    // watch,
    setValue,
    reset,
    formState: { errors },
  } = method;
  const { getContent, rteRef, setContent } = useRickTextEditor();

  const { categories, setStores, stores } = UseAppStore((state) => state);
  const { getFaqsValues, faqList, handleAddFaq, handleRemoveAccordion, onCreateAccordion, setFaqList } = useFaqs()

  useEffect(() => {
    if (item && rteRef.current) {
      setContent(item.description);
    }
  }, [rteRef.current]);

  useEffect(() => {
    if (item) {
      reset({
        ...item,
        categories: item.categories ? item.categories.map((c) => c.id) : [],
        keywords: getKeyWordsString(item.keywords || []),
        meta_data: {
          ...item.meta_data,
          keywords: getKeyWordsString(item.meta_data?.keywords || []),
        },

      });
      setFaqList(item.faqs ? item.faqs.map(({ question, answer }, index) => ({
        id: index,
        question,
        answer
      })) : [])
    }
  }, [item]);

  const onSubmit = async (data: StoreFormData) => {
    const description = await getContent();

    if (item) {
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
  const handleChangeContent = (value: string) => {
    setValue('description', value);
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
          <Form.Label className="text-default fw-bold" >Description</Form.Label>
          <CustomRichTextEditor
            imageFolder="stores"
            ref={rteRef}
            onBlur={handleChangeContent}
            error={Boolean(errors.description)}
            helpText={errors.description?.message}
          // onChange={handleChangeContent}
          // placeholder="Write blog content here"
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
          </Box>
        </Box>

        <Faqs onAdd={onCreateAccordion} values={faqList} onChange={handleAddFaq} onRemove={handleRemoveAccordion} />

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
