'use client';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import Link from 'next/link';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { resetPasswordSchema } from '@/helper/schemas/auth.schema';
import { Box } from '@mui/material';
import { changePassword } from '@/services/auth.service';
import toast from 'react-hot-toast';
import { APP_ROUTE } from '@/constants/route';
import { useRouter } from 'next/navigation';

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

function ResetPassworForm({ token }: { token: string }) {
  const router = useRouter();

  const [passwordVisibility, setPasswordVisibility] = useState<{
    [key: string]: boolean;
  }>({
    password: false,
    confirm_password: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onTouched',
    defaultValues: {
      password: '',
      confirm_password: '',
    },
  });

  const togglePasswordVisibility = (field: string) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const onSubmit = async (data: ResetPasswordFormData) => {
    const response = await changePassword({
      confirm_password: data.confirm_password,
      password: data.password,
      reset_token: token,
    });
    if (response && response.success) {
      toast.success('Reset password success!');
      router.push(APP_ROUTE.SIGN_IN);
    }
  };

  return (
    <Col xl={12}>
      <Box className="p-3">
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Row className="gy-3">
            {/* Password */}
            <Col xl={12}>
              <Form.Label
                className="form-label text-default"
                htmlFor="password-password"
              >
                New Password
                <sup className="fs-12 text-danger">*</sup>
              </Form.Label>
              <Box className="input-group">
                <Form.Control
                  type={passwordVisibility.password ? 'text' : 'password'}
                  className={`form-control create-password-input ${errors.password ? 'is-invalid' : ''}`}
                  id="password-password"
                  placeholder="Enter a new password"
                  {...register('password')}
                />
                <SpkButton
                  onClickfunc={() => togglePasswordVisibility('password')}
                  Buttontype="button"
                  Buttonvariant="primary-light"
                  Customclass="show-password-button"
                >
                  <i
                    className={`${
                      passwordVisibility.password
                        ? 'ri-eye-line'
                        : 'ri-eye-off-line'
                    } align-middle`}
                  ></i>
                </SpkButton>
              </Box>
              {errors.password && (
                <div className="invalid-feedback d-block">
                  {errors.password.message}
                </div>
              )}
            </Col>

            {/* Confirm Password */}
            <Col xl={12}>
              <Form.Label
                className="form-label text-default"
                htmlFor="create-confirm_password"
              >
                Confirm New Password
                <sup className="fs-12 text-danger">*</sup>
              </Form.Label>
              <Box className="input-group">
                <Form.Control
                  type={
                    passwordVisibility.confirm_password ? 'text' : 'password'
                  }
                  className={`form-control create-password-input ${errors.confirm_password ? 'is-invalid' : ''}`}
                  id="create-confirm_password"
                  placeholder="Re-enter your new password"
                  {...register('confirm_password')}
                />
                <SpkButton
                  onClickfunc={() =>
                    togglePasswordVisibility('confirm_password')
                  }
                  Buttontype="button"
                  Buttonvariant="primary-light"
                  Customclass="show-password-button"
                >
                  <i
                    className={`${
                      passwordVisibility.confirm_password
                        ? 'ri-eye-line'
                        : 'ri-eye-off-line'
                    } align-middle`}
                  ></i>
                </SpkButton>
              </Box>
              {errors.confirm_password && (
                <div className="invalid-feedback d-block">
                  {errors.confirm_password.message}
                </div>
              )}
            </Col>
          </Row>

          {/* Submit */}
          <Box className="d-grid mt-4">
            <SpkButton
              Buttontype="submit"
              Buttonvariant="primary"
              Customclass="btn"
            >
              <i className="ri-lock-2-line lh-1 me-2 align-middle"></i>
              Reset Password
            </SpkButton>
          </Box>
        </Form>

        {/* Back Link */}
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
    </Col>
  );
}

export default ResetPassworForm;
