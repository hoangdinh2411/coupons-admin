'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Divider, Paper } from '@mui/material';
import { is } from 'immutable';
import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';

export const seoDataSchema = z.object({
  seo_title: z.string().trim().min(1, 'SEO title is required'),
  seo_description: z.string().trim().min(1, 'SEO description is required'),
  seo_keywords: z.string().trim().min(1, 'SEO keywords is required'),
});

export const seoDefaultValues = {
  seo_title: '',
  seo_description: '',
  seo_keywords: '',
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
          {...register('seo_title')}
        />
        {errors.seo_title && (
          <small className="text-danger">
            {errors.seo_title.message as string}
          </small>
        )}
      </Box>

      <Box mb={2}>
        <Form.Label className=" text-default">Description</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Enter seo description"
          {...register('seo_description')}
        />
        {errors.seo_description && (
          <small className="text-danger">
            {errors.seo_description.message as string}
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
          {...register('seo_keywords')}
        />
        {errors.seo_keywords && (
          <small className="text-danger">
            {errors.seo_keywords.message as string}
          </small>
        )}
      </Box>
    </Box>
  );
}
