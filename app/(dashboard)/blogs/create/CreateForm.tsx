'use client';
import React, { Fragment, useEffect } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Box } from '@mui/material';
import { Form } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import toast from 'react-hot-toast';
import UseAppStore from '@/store/useAppStore';
import 'react-datepicker/dist/react-datepicker.css';
import { createBlog } from '@/services/blog';
import { BlogPayload } from '@/types/blog.type';
import SeoForm, {
  seoDataSchema,
  seoDefaultValues,
} from '@/shared/layouts-components/seo-form/SeoForm';
import { getKeyWordsArray } from '@/helper/keywords';
import UploadFile, {
  ImageType,
} from '@/shared/layouts-components/uploadFile/UploadFile';
import dynamic from 'next/dynamic';
import useRickTextEditor from '@/hooks/useRickTextEditor';
import { generateSlug } from '@/helper/generateSlug';
const CustomRichTextEditor = dynamic(() => import('../../../../shared/layouts-components/richtext-editor'), {
  ssr: false
})
export const blogSchema = z.object({
  ...seoDataSchema.shape,
  title: z.string().min(1, 'Coupon title is required'),
  keywords: z.string(),
  topic_id: z
    .number({
      message: 'Select topic',
    })
    .positive('Topic is required'),
  content: z.string().min(1, 'Content is required'),
  image: z.object({
    file_name: z.string(),
    url: z.string(),
    public_id: z.string(),
  }),
  slug: z.string().min(1, 'Slug is required'),
});

export const defaultValues: BlogFormData = {
  ...seoDefaultValues,
  title: '',
  keywords: '',
  content: '',
  topic_id: -1,
  image: {
    file_name: '',
    url: '',
    public_id: '',
  },
  slug: '',
};
export type BlogFormData = z.infer<typeof blogSchema>;

export default function CreateForm() {
  const method = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues,
    mode: 'onChange',
  });
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    watch,
    formState: { errors },
  } = method;
  const { topics } = UseAppStore((state) => state);
  const { getContent, rteRef, clearAll } = useRickTextEditor();
  const handleChangeContent = (value: string) => {
    setValue('content', value);
  };
  const watchName = watch('title');

  useEffect(() => {
    setValue('slug', generateSlug(watchName));
  }, [watchName]);
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
    toast.promise(createBlog(payload), {
      loading: 'Creating...!',
      success: (res) => {
        if (res.success && res.data) {
          reset(defaultValues);
          clearAll();
          reset(defaultValues);

          return 'Created successfully';
        }
        throw res.message;
      },
      error: (err) => err || 'Something wrong',
    });
  };
  console.log(errors)

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
                    multiple={false}
                    newFile={field.value}
                    onUploadFile={(data: ImageType[]) =>
                      field.onChange(data[0])
                    }
                    id="create-blog"
                  />
                )}
              />
            </Box>
          </Box>

        </Box>
        <Box className="mb-3">
          <Form.Label className="">Blog content</Form.Label>
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
