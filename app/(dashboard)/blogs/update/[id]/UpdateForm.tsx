'use client';
import React, { Fragment, useEffect } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box } from '@mui/material';
import { Form } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import toast from 'react-hot-toast';
import UseAppStore from '@/store/useAppStore';
import 'react-datepicker/dist/react-datepicker.css';
import { updateBlog } from '@/services/blog';
import { BlogData, BlogPayload } from '@/types/blog.type';
import SeoForm from '@/shared/layouts-components/seo-form/SeoForm';
import {
  BlogFormData,
  blogSchema,
} from '../../create/CreateForm';
import { getKeyWordsArray, getKeyWordsString } from '@/helper/keywords';
import UploadFile, {
  ImageType,
} from '@/shared/layouts-components/uploadFile/UploadFile';
import useRickTextEditor from '@/hooks/useRickTextEditor';
import CustomRichTextEditor from '../../../../../shared/layouts-components/richtext-editor';

export default function UpdateForm({ item }: { item: BlogData }) {
  const method = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    mode: 'onChange',
  });
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = method;
  const { topics } = UseAppStore((state) => state);
  const { getContent, rteRef, setContent } = useRickTextEditor();

  const handleChangeContent = (value: string) => {
    setValue('content', value);
  };
  useEffect(() => {
    if (item) {
      reset({
        ...item,
        keywords: getKeyWordsString(item.keywords || []),
        meta_data: {
          ...item.meta_data,
          keywords: getKeyWordsString(item.meta_data?.keywords || []),

        },
        topic_id: item.topic?.id || -1
      });
    }
  }, [item]);
  useEffect(() => {
    if (item && rteRef.current) {
      setContent(item.content);
    }
  }, [rteRef.current, item]);
  const onSubmit = async (data: BlogFormData) => {
    const content = await getContent();

    const payload: BlogPayload = {
      ...data,
      content,
      keywords: getKeyWordsArray(data.keywords),
      meta_data: {
        ...data.meta_data,
        keywords: getKeyWordsArray(data.meta_data.keywords),
      },
    };
    toast.promise(updateBlog(item.id, payload), {
      loading: 'Pending...!',
      success: (res) => {
        if (res.success && res.data) {
          return 'Updated successfully';
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
          <Form.Label className="text-default">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter blog title"
            {...register('title')}
          />
          {errors.title && (
            <small className="text-danger">{errors.title.message}</small>
          )}
        </Box>
        <Box className="mb-3">
          <Form.Label className="text-default">Blog Slug</Form.Label>
          <Form.Control
            type="text"
            placeholder="Slug for blog"
            {...register('slug')}
          />
          {errors.slug && (
            <small className="text-danger">{errors.slug.message}</small>
          )}
        </Box>
        <Box mb={2}>
          <Form.Label className="text-default">Image</Form.Label>
          <Box display="flex" alignItems="flex-start" flexDirection={'column'} mb={1}>
            <Box position="relative" flex={1} width={'100%'}>
              <Controller
                control={control}
                name="image"
                render={({ field }) => (
                  <UploadFile
                    folder="blogs"
                    newFile={field.value}
                    onUploadFile={(data: ImageType[]) =>
                      field.onChange(data[0])
                    }
                    id="update-blog"
                  />
                )}
              />
            </Box>
          </Box>
        </Box>
        <Box className="mb-3">
          <Form.Label className="">Post content</Form.Label>
          <CustomRichTextEditor
            imageFolder="blogs"
            ref={rteRef}
            onBlur={handleChangeContent}
            error={Boolean(errors.content)}
            helpText={errors.content?.message}
          />
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
        <Box className="mb-3">
          <Form.Label className="text-default">Topic</Form.Label>
          <Controller
            control={control}
            name="topic_id"
            render={({ field: { onChange, value, ref } }) => {
              return (
                <Fragment>
                  <Form.Select
                    ref={ref}
                    value={Number(value ?? 0)}
                    onChange={(e) => onChange(Number(e.target.value))}
                  >
                    <option value={0}>Select topic</option>
                    {topics &&
                      topics.map((topic) => (
                        <option key={topic.id} value={Number(topic.id)}>
                          {topic.name}
                        </option>
                      ))}
                  </Form.Select>
                  {errors.topic_id && (
                    <small className="text-danger">
                      {errors.topic_id.message}
                    </small>
                  )}
                </Fragment>
              );
            }}
          />
        </Box>
        <SeoForm />

        <Box display="flex" justifyContent="end" mt={4} gap={1}>
          <SpkButton Buttonvariant="primary" Buttontype="submit">
            Create Blog
          </SpkButton>
        </Box>
      </Form>
    </FormProvider>
  );
}
