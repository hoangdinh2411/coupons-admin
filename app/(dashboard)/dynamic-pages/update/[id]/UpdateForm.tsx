'use client';
import React, { useEffect } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box } from '@mui/material';
import { Form } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';

import UploadFile, {
  ImageType,
} from '@/shared/layouts-components/uploadFile/UploadFile';
import toast from 'react-hot-toast';
import { getKeyWordsArray, getKeyWordsString } from '@/helper/keywords';
import SeoForm from '@/shared/layouts-components/seo-form/SeoForm';
import useRickTextEditor from '@/hooks/useRickTextEditor';
import Faqs from '@/shared/layouts-components/faqs/Faqs';
import useFaqs from '@/hooks/useFaqs';
import dynamic from 'next/dynamic';
import { PageData } from '@/types/page.type';
import UseAppStore from '@/store/useAppStore';
import UploadMultiFiles from '@/shared/layouts-components/uploadFile/UploadMultiFile';
import { DynamicPageFormData, schema } from '../../create/CreateForm';
import { updatePage } from '@/services/page.service';
import { refreshCacheClient } from '@/services/share.service';
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
  const { getContent, rteRef, setContent } = useRickTextEditor();
  const {
    getFaqsValues,
    faqList,
    handleAddFaq,
    handleRemoveAccordion,
    onCreateAccordion,
    setFaqList,
  } = useFaqs();
  const method = useForm<DynamicPageFormData>({
    resolver: zodResolver(schema),
  });
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = method;

  useEffect(() => {
    if (item) {
      reset({
        ...item,
        meta_data: {
          ...item.meta_data,
          keywords: getKeyWordsString(item?.meta_data?.keywords || ['']),
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
  }, [item, reset, setFaqList]);

  useEffect(() => {
    if (item && rteRef.current) {
      setContent(item.content);
    }
  }, [item, rteRef, setContent]);

  const onSubmit = async (data: DynamicPageFormData) => {
    if (item) {
      const content = await getContent();
      const payload = {
        ...data,
        content,
        meta_data: {
          ...data.meta_data,
          keywords: getKeyWordsArray(data.meta_data?.keywords ?? ''),
        },
        faqs: getFaqsValues(),
      };
      toast.promise(updatePage(+item.id, payload), {
        loading: 'Updating...!',
        success: (res) => {
          if (res.success && res.data) {
            refreshCacheClient({
              paths: [`/${res.data.slug}`],
              tags: []
            })
            return 'Updated success';
          }
          throw res.message;
        },
        error: (err) => err || 'Something wrong',
      });
    }
  };

  const handleChangeContent = (value: string) => {
    setValue('content', value);
  };

  return (
    <FormProvider {...method}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Box className="mb-3">
          <Form.Label className="fw-bold text-default">Page type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter page type"
            {...register('type')}
          />
          {errors.type && (
            <small className="text-danger">{errors.type.message}</small>
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
        <Box className="mb-3">
          <Form.Label className="text-default fw-bold">Content</Form.Label>
          <CustomRichTextEditor
            imageFolder="pages"
            ref={rteRef}
            onBlur={handleChangeContent}
            error={Boolean(errors.content)}
            helpText={errors.content?.message}
          />
        </Box>
        <Box mb={2}>
          <Form.Label className="fw-bold text-default">Thumbnail</Form.Label>
          <Box display="flex" alignItems="flex-start" flexDirection={'column'}>
            <Box position="relative" flex={1} width={'100%'}>
              <Controller
                control={control}
                name="thumbnail"
                render={({ field }) => (
                  <UploadFile
                    folder="pages"
                    newFile={field.value}
                    onUploadFile={(data: ImageType[]) =>
                      field.onChange(data[0])
                    }
                    id="update-page-thumbnail"
                  />
                )}
              />
            </Box>
          </Box>
          {errors.thumbnail && (
            <small className="text-danger">{errors.thumbnail.message}</small>
          )}
        </Box>
        <Box mb={2}>
          <Form.Label className="fw-bold text-default">Images</Form.Label>
          <Box display="flex" alignItems="flex-start" flexDirection={'column'}>
            <Box position="relative" flex={1} width={'100%'}>
              <Controller
                control={control}
                name="images"
                render={({ field }) => (
                  <UploadMultiFiles
                    folder="pages"
                    files={field.value || []}
                    onUploadFile={field.onChange}
                    id="update-page-images"
                    maxFiles={10}
                    label="Choose images..."
                  />
                )}
              />
            </Box>
          </Box>
          {errors.images && (
            <small className="text-danger">{errors.images.message}</small>
          )}
        </Box>
        <Faqs
          onAdd={onCreateAccordion}
          values={faqList}
          onChange={handleAddFaq}
          onRemove={handleRemoveAccordion}
        />
        <SeoForm />
        <Box display="flex" justifyContent="end" mt={4} gap={1}>
          <SpkButton Buttonvariant="primary" Buttontype="submit">
            Update
          </SpkButton>
          <SpkButton Buttonvariant="primary-light" Buttontype="button">
            Cancel
          </SpkButton>
        </Box>
      </Form>
    </FormProvider>
  );
}
