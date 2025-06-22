'use client';

import { APP_ROUTE } from '@/constants/route';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';

type SignUpInputsType = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  confirm_password: string;
};

function SignUpTemplate() {
  const [passwordVisibility, setPasswordVisibility] = useState<{
    password: boolean;
    confirm_password: boolean;
  }>({ password: false, confirm_password: false });

  const togglePasswordVisibility = (field: 'password' | 'confirm_password') => {
    setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const onSubmit: SubmitHandler<SignUpInputsType> = async (data) => {
    console.log(data);
  };

  return (
    <Row className="justify-content-center authentication authentication-SignUpTemplate align-items-center h-100">
      <Col xxl={7} sm={8} className="col-12">
        <Card className="custom-card my-4 border">
          <Card.Body>
            <Row className="mx-0 align-items-center">
              <Col xl={6}>
                <Form className="p-3">
                  <Row className="gy-3">
                    <Form.Group>
                      <label
                        className="form-label text-default"
                        htmlFor="signup-first_name"
                      >
                        First Name
                        <sup className="fs-12 text-danger">*</sup>
                      </label>
                      <Form.Control
                        type="text"
                        id="signup-first_name"
                        placeholder="Enter your first name"
                      />
                    </Form.Group>

                    <Form.Group>
                      <label
                        className="form-label text-default"
                        htmlFor="signup-last_name"
                      >
                        Last Name
                        <sup className="fs-12 text-danger">*</sup>
                      </label>
                      <Form.Control
                        type="text"
                        id="signup-last_name"
                        placeholder="Enter your last name"
                      />
                    </Form.Group>

                    {/* Email */}
                    <Col xl={12} className="mt-2">
                      <label
                        className="form-label text-default"
                        htmlFor="signup-email"
                      >
                        Email Address
                        <sup className="fs-12 text-danger">*</sup>
                      </label>
                      <Form.Control
                        type="email"
                        id="signup-email"
                        placeholder="Enter your email address"
                      />
                    </Col>

                    {/* Password */}
                    <Col xl={12}>
                      <label
                        className="form-label text-default"
                        htmlFor="signup-password"
                      >
                        Password
                        <sup className="fs-12 text-danger">*</sup>
                      </label>
                      <div className="input-group">
                        <Form.Control
                          type={
                            passwordVisibility.password ? 'text' : 'password'
                          }
                          id="signup-password"
                          placeholder="Create a password"
                          className="signup-password-input"
                        />
                        <SpkButton
                          Buttontype="button"
                          Buttonvariant="primary-light"
                          Customclass="show-password-button"
                          onClickfunc={() =>
                            togglePasswordVisibility('password')
                          }
                        >
                          <i
                            className={`ri-${
                              passwordVisibility.password
                                ? 'eye-line'
                                : 'eye-off-line'
                            } align-middle`}
                          ></i>
                        </SpkButton>
                      </div>
                    </Col>

                    {/* Confirm Password */}
                    <Col xl={12} className="mb-2">
                      <label
                        className="form-label text-default"
                        htmlFor="create-confirm_password"
                      >
                        Confirm Password
                        <sup className="fs-12 text-danger">*</sup>
                      </label>
                      <div className="input-group">
                        <Form.Control
                          type={
                            passwordVisibility.confirm_password
                              ? 'text'
                              : 'password'
                          }
                          id="create-confirm_password"
                          placeholder="Re-enter your password"
                          className="create-password-input"
                        />
                        <SpkButton
                          Buttontype="button"
                          Buttonvariant="primary-light"
                          Customclass="show-password-button"
                          onClickfunc={() =>
                            togglePasswordVisibility('confirm_password')
                          }
                        >
                          <i
                            className={`ri-${
                              passwordVisibility.confirm_password
                                ? 'eye-line'
                                : 'eye-off-line'
                            } align-middle`}
                          ></i>
                        </SpkButton>
                      </div>
                    </Col>

                    {/* Submit Button */}
                    <Col xl={12} className="d-grid mt-4 p-0">
                      <SpkButton Buttontype="submit">
                        <i className="ri-user-add-line lh-1 me-2 align-middle"></i>
                        Create Account
                      </SpkButton>
                    </Col>

                    {/* Sign In Link */}
                    <Col xl={12} className="text-center">
                      <p className="text-muted mt-3 mb-0">
                        Already have an account?{' '}
                        <Link
                          href={APP_ROUTE.SIGN_IN}
                          className="text-primary fw-medium text-decoration-underline"
                        >
                          Sign In
                        </Link>
                      </p>
                    </Col>
                  </Row>
                </Form>
              </Col>

              {/* Image + Welcome Text */}
              <Col
                xl={6}
                className="border rounded border-secondary border-opacity-10"
              >
                <div className="d-flex align-items-center justify-content-around flex-column gap-4 h-100">
                  <Image
                    fill
                    src="/assets/images/authentication/5.png"
                    alt="Sign Up"
                    className="img-fluid m-auto mb-3 flex-fill mt-4"
                  />
                  <div className="flex-fill text-center">
                    <h6 className="mb-2">Create Your Account</h6>
                    <p className="mb-0 text-muted fw-normal fs-12">
                      Join us and enjoy exclusive benefits!
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default SignUpTemplate;
