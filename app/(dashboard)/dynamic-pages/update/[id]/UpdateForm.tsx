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
import { getKeyWordsArray, getKeyWordsString } from '@/helper/keywords';
import SeoForm from '@/shared/layouts-components/seo-form/SeoForm';
import useRickTextEditor from '@/hooks/useRickTextEditor';
import { FAQItem } from '../../../../../shared/layouts-components/faqs/AccordionFAQ';
import Faqs from '@/shared/layouts-components/faqs/Faqs';
import useFaqs from '@/hooks/useFaqs';
import dynamic from 'next/dynamic';
import { refreshCacheClient } from '@/services/share.service';
import { PageFormData, schema } from '../../CreatePageModal';
import { PageData, PagePayload } from '@/types/page.type';
import UseAppStore from '@/store/useAppStore';
const CustomRichTextEditor = dynamic(
  () => import('../../../../../shared/layouts-components/richtext-editor'),
  {
    ssr: false,
  },
);
type Props = {
  item: PageData | null;
};

export default function UpdateForm({ item }: Props) {
  if (!item) return null;
  const method = useForm<PageFormData>({
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

  const { pages, setPages } = UseAppStore((state) => state);
  const {
    getFaqsValues,
    faqList,
    handleAddFaq,
    handleRemoveAccordion,
    onCreateAccordion,
    setFaqList,
  } = useFaqs();

  useEffect(() => {
    if (item && rteRef.current) {
      setContent(item.description);
    }
  }, [rteRef.current]);

  useEffect(() => {
    if (item) {
      reset({
        ...item,
        keywords: getKeyWordsString(item.keywords || []),
        meta_data: {
          ...item.meta_data,
          keywords: getKeyWordsString(item.meta_data?.keywords || []),
        },
      });
      setFaqList(
        item.faqs
          ? item.faqs.map(({ question, answer }, index) => ({
              id: index,
              question,
              answer,
            }))
          : [],
      );
    }
  }, [item]);

  const onSubmit = async (data: PageFormData) => {
    const description = await getContent();

    if (item) {
      const payload: PagePayload = {
        ...data,
        description,
        keywords: getKeyWordsArray(data.keywords),
        meta_data: {
          ...data.meta_data,
          keywords: getKeyWordsArray(data.meta_data.keywords),
        },
        faqs: getFaqsValues(),
      };

      // toast.promise(updatePage(item.id, payload), {
      //   loading: 'Updating...!',
      //   success: (res) => {
      //     if (res.success && res.data) {
      //       const newPages = pages.map((s) =>
      //         s.id === item?.id ? { ...s, ...res.data } : s,
      //       );
      //       setPages(newPages);
      //       refreshCacheClient({
      //         paths: [`/Pages/${res.data.slug}`],
      //         tags: ['categories-data', 'menu-data', 'Pages-data'],
      //       });
      //       return 'Updated success';
      //     }
      //     throw res.message;
      //   },
      //   error: (err) => err || 'Something wrong',
      // });
    }
  };
  const handleChangeContent = (value: string) => {
    setValue('description', value);
  };

  return (
    <FormProvider {...method}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Page Name */}
        <Box className="mb-3">
          <Form.Label className="text-default">Page Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Page name"
            {...register('name')}
          />
          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
        </Box>
        {/* Description */}
        <Box className="mb-3">
          <Form.Label className="text-default fw-bold">Description</Form.Label>
          <CustomRichTextEditor
            imageFolder="Pages"
            ref={rteRef}
            onBlur={handleChangeContent}
            error={Boolean(errors.description)}
            helpText={errors.description?.message}
            // onChange={handleChangeContent}
            // placeholder="Write blog content here"
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
                    folder="Pages"
                    newFile={field.value}
                    onUploadFile={(data: ImageType[]) =>
                      field.onChange(data[0])
                    }
                    id="update-Page"
                  />
                )}
              />
            </Box>
          </Box>
        </Box>

        <Faqs
          onAdd={onCreateAccordion}
          values={faqList}
          onChange={handleAddFaq}
          onRemove={handleRemoveAccordion}
        />

        <SeoForm />
        {/* Submit */}
        <Box display="flex" justifyContent="end" mt={4} gap={1}>
          <SpkButton Buttonvariant="primary" Buttontype="submit">
            Update Page
          </SpkButton>
        </Box>
      </Form>
    </FormProvider>
  );
}
