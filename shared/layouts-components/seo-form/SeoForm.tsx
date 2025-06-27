'use client';
import { Box, Divider, Paper } from '@mui/material';
import { Form } from 'react-bootstrap';
import { FieldErrors, useFormContext } from 'react-hook-form';
import { z } from 'zod';

export const seoDataSchema = z.object({
  meta_data: z.object({
    title: z.string().trim().min(1, 'SEO title is required'),
    description: z.string().trim().min(1, 'SEO description is required'),
    keywords: z.string().trim().min(1, 'SEO keywords is required'),
  }),
});

export const seoDefaultValues = {
  meta_data: {
    title: '',
    description: '',
    keywords: '',
  },
};

export type SeoFormData = z.infer<typeof seoDataSchema>;
export default function SeoForm() {
  const formContext = useFormContext();
  if (!formContext) {
    throw new Error('SeoForm must be used inside a FormProvider');
  }
  const {
    register,
    formState: { errors },
  } = formContext;
  const seoErrors = errors?.meta_data as FieldErrors<SeoFormData['meta_data']>;
  return (
    <Box>
      <Divider sx={{ my: 2 }} />
      <Box display={'flex'} marginBottom={2} justifyContent={'space-between'}>
        <h6>
          {' '}
          <b>SEO info </b>
        </h6>
      </Box>
      <Box className="mb-3">
        <Form.Label className=" text-default">Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter seo title"
          {...register('meta_data.title')}
        />
        {seoErrors?.title && (
          <small className="text-danger">
            {seoErrors?.title.message as string}
          </small>
        )}
      </Box>

      <Box mb={2}>
        <Form.Label className=" text-default">Description</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Enter seo description"
          {...register('meta_data.description')}
        />
        {seoErrors?.description && (
          <small className="text-danger">
            {seoErrors?.description.message as string}
          </small>
        )}
      </Box>
      <Box className="mb-3">
        <Form.Label className="text-default">
          Keywords (comma separated)
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="e.g., AI, programming"
          {...register('meta_data.keywords')}
        />
        {seoErrors?.keywords && (
          <small className="text-danger">
            {seoErrors?.keywords.message as string}
          </small>
        )}
      </Box>
    </Box>
  );
}
