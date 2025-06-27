'use client';
import React, { Fragment, useEffect } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Box } from '@mui/material';
import { Col, Form, Row } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import toast from 'react-hot-toast';
import UseAppStore from '@/store/useAppStore';
import 'react-datepicker/dist/react-datepicker.css';
import dynamic from 'next/dynamic';
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
const RichTextEditor = dynamic(
  () =>
    import(
      '../../../../shared/layouts-components/richtext-editor/RickTextEditor'
    ),
  {
    ssr: false,
  },
);
export const blogSchema = z.object({
  ...seoDataSchema.shape,
  title: z.string().min(1, 'Coupon title is required'),
  keywords: z.string(),
  topic_id: z.number({
    message: 'Select topic',
  }),
  image: z.object({
    file_name: z.string(),
    url: z.string().min(1, 'Need to upload image'),
    public_id: z.string(),
  }),
});

export const defaultValues: BlogFormData = {
  ...seoDefaultValues,
  title: '',
  keywords: '',
  topic_id: 0,
  image: {
    file_name: '',
    url: '',
    public_id: '',
  },
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
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = method;
  const [content, setContent] = React.useState<string>('');
  const { topics } = UseAppStore((state) => state);
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValues);
    }
  }, [isSubmitSuccessful]);

  const handleChangeContent = (value: string) => {
    console.log(value);
    setContent(value);
  };
  const onSubmit = async (data: any) => {
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
      loading: 'Pending...!',
      success: (res) => {
        if (res.success && res.data) {
          return 'Created successfully';
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
        <Box mb={2}>
          <Form.Label className="fw-bold text-default">Image</Form.Label>
          <Box display="flex" alignItems="flex-start" flexDirection={'column'}>
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
                    id="create-blog"
                  />
                )}
              />
            </Box>
            {errors.image?.url && (
              <small className="text-danger">{errors.image?.url.message}</small>
            )}
          </Box>
        </Box>
        <Box className="mb-3">
          <Form.Label className="">Blog content</Form.Label>
          <RichTextEditor
            content={content}
            onBlur={handleChangeContent}
            // onChange={handleChangeContent}
            // placeholder="Write blog content here"
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
