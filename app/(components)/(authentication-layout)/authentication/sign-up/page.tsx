"use client";

import { APP_ROUTE } from "@/app/constants/route";
import { registerSchema } from "@/helper/validation/auth.validation"; // Cập nhật đường dẫn nếu cần
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";

type SignUpInputsType = {
  email: string;
  password: string;
  confirmPassword: string;
};

function SignUpTemplate() {
  const [passwordVisibility, setPasswordVisibility] = useState<{
    password: boolean;
    confirmPassword: boolean;
  }>({ password: false, confirmPassword: false });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputsType>({
    resolver: zodResolver(registerSchema),
  });

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const onSubmit: SubmitHandler<SignUpInputsType> = async (data) => {
    console.log(data);
  };

  return (
    <div className="authentication-background">
      <div className="container-lg">
        <Row className="justify-content-center authentication authentication-SignUpTemplate align-items-center h-100">
          <Col xxl={7} sm={8} className="col-12">
            <Card className="custom-card my-4 border">
              <Card.Body>
                <Row className="mx-0 align-items-center">
                  <Col xl={6}>
                    <Form onSubmit={handleSubmit(onSubmit)} className="p-3">
                      <Row className="gy-3">
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
                            {...register("email")}
                            aria-invalid={!!errors.email}
                          />
                          {errors.email && (
                            <small className="text-danger mt-1">
                              {errors.email.message}
                            </small>
                          )}
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
                                passwordVisibility.password
                                  ? "text"
                                  : "password"
                              }
                              id="signup-password"
                              placeholder="Create a password"
                              className="signup-password-input"
                              {...register("password")}
                              aria-invalid={!!errors.password}
                            />
                            <SpkButton
                              Buttontype="button"
                              Buttonvariant="primary-light"
                              Customclass="show-password-button"
                              onClickfunc={() =>
                                togglePasswordVisibility("password")
                              }
                            >
                              <i
                                className={`ri-${
                                  passwordVisibility.password
                                    ? "eye-line"
                                    : "eye-off-line"
                                } align-middle`}
                              ></i>
                            </SpkButton>
                          </div>
                          {errors.password && (
                            <small className="text-danger mt-1">
                              {errors.password.message}
                            </small>
                          )}
                        </Col>

                        {/* Confirm Password */}
                        <Col xl={12} className="mb-2">
                          <label
                            className="form-label text-default"
                            htmlFor="create-confirmpassword"
                          >
                            Confirm Password
                            <sup className="fs-12 text-danger">*</sup>
                          </label>
                          <div className="input-group">
                            <Form.Control
                              type={
                                passwordVisibility.confirmPassword
                                  ? "text"
                                  : "password"
                              }
                              id="create-confirmpassword"
                              placeholder="Re-enter your password"
                              className="create-password-input"
                              {...register("confirmPassword")}
                              aria-invalid={!!errors.confirmPassword}
                            />
                            <SpkButton
                              Buttontype="button"
                              Buttonvariant="primary-light"
                              Customclass="show-password-button"
                              onClickfunc={() =>
                                togglePasswordVisibility("confirmPassword")
                              }
                            >
                              <i
                                className={`ri-${
                                  passwordVisibility.confirmPassword
                                    ? "eye-line"
                                    : "eye-off-line"
                                } align-middle`}
                              ></i>
                            </SpkButton>
                          </div>
                          {errors.confirmPassword && (
                            <small className="text-danger mt-1">
                              {errors.confirmPassword.message}
                            </small>
                          )}
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
                            Already have an account?{" "}
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
      </div>
    </div>
  );
}

export default SignUpTemplate;
