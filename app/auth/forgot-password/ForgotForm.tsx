'use client';
import { forgetSchema } from '@/helper/schemas/auth.schema';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ForgotPagePropsType, TYPE_FORM } from './page';
import { Box } from '@mui/material';
import { forgetPassword } from '@/services/auth.service';

export type ForgotFormData = z.infer<typeof forgetSchema>;

function ForgotForm({
  onChangeCurrentForm,
  onChangeEmail,
}: ForgotPagePropsType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotFormData>({
    resolver: zodResolver(forgetSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: ForgotFormData) => {
    const response = await forgetPassword({ email: data.email });
    if (response && response.success) {
      
      onChangeEmail?.(data.email);
      onChangeCurrentForm(TYPE_FORM.VERIFY);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Box className="p-3">
        <Row className="gy-3">
          <Col xl={12}>
            <Form.Label className="form-label text-default" htmlFor="email">
              Email <sup className="fs-12 text-danger">*</sup>
            </Form.Label>
            <Box className="input-group">
              <Form.Control
                type="email"
                id="signup-email"
                placeholder="Enter your current email"
                className={`form-control signup-email-input ${errors.email ? 'is-invalid' : ''}`}
                {...register('email')}
              />
              {errors.email && (
                <Box className="invalid-feedback">{errors.email.message}</Box>
              )}
            </Box>
          </Col>
        </Row>

        <Box className="d-grid mt-4">
          <SpkButton Buttonvariant="primary" Buttontype="submit">
            <i className="ri-lock-2-line lh-1 me-2 align-middle"></i>
            Reset Password
          </SpkButton>
        </Box>

        <Box className="text-center">
          <p className="text-muted mt-3 mb-0">
            Want to go back?{' '}
            <Link
              className="text-primary fw-medium text-decoration-underline"
              href="/dashboards/sales"
            >
              Click here
            </Link>
          </p>
        </Box>
      </Box>
    </Form>
  );
}

export default ForgotForm;
