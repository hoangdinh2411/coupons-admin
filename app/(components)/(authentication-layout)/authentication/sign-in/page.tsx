"use client";

import { APP_ROUTE } from "@/app/constants/route";
import { authLoginSchema } from "@/helper/validation/auth.validation";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";

type SignInInputsType = {
  email: string;
  password: string;
};

function SignInTemplate() {
  const [passwordShow, setPasswordShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputsType>({
    resolver: zodResolver(authLoginSchema),
  });

  const onSubmit: SubmitHandler<SignInInputsType> = async (data) => {
    console.log(data);
  };

  return (
    <div className="authentication-background">
      <div className="container-lg">
        <Row className="justify-content-center authentication authentication-basic align-items-center h-100">
          <Col xxl={7} sm={8} className="col-12">
            <Card className="custom-card my-4 border">
              <Card.Body>
                <Row className="mx-0 align-items-center">
                  {/* Login Form Section */}
                  <Col xl={6}>
                    <Form onSubmit={handleSubmit(onSubmit)} className="p-3">
                      <Row className="gy-2">
                        {/* Email */}
                        <label
                          htmlFor="signin-email"
                          className="text-default px-0"
                        >
                          Email Address{" "}
                          <sup className="fs-12 text-danger">*</sup>
                        </label>
                        <Form.Control
                          type="email"
                          id="signin-email"
                          placeholder="Enter your email address"
                          {...register("email")}
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <small className="text-danger mt-1">
                            {errors.email.message}
                          </small>
                        )}

                        {/* Password */}
                        <div className="mt-2"></div>
                        <label
                          htmlFor="signin-password "
                          className="text-default px-0"
                        >
                          Password <sup className="fs-12 text-danger">*</sup>
                        </label>
                        <div className="input-group p-0">
                          <Form.Control
                            type={passwordShow ? "text" : "password"}
                            id="signin-password"
                            placeholder="Enter your password"
                            className="signin-password-input"
                            {...register("password")}
                          />
                          <SpkButton
                            Buttontype="button"
                            Buttonvariant="primary-light"
                            Customclass="show-password-button"
                            onClickfunc={() => setPasswordShow(!passwordShow)}
                          >
                            <i
                              className={`ri-${
                                passwordShow ? "eye-line" : "eye-off-line"
                              } align-middle`}
                            ></i>
                          </SpkButton>
                        </div>
                        {errors.password && (
                          <small className="text-danger mt-1">
                            {errors.password.message}
                          </small>
                        )}

                        {/* Forgot Password */}
                        <Col
                          xl={12}
                          className="d-flex p-0 mt-2 justify-content-end"
                        >
                          <Link
                            href={APP_ROUTE.FORGOT}
                            className="text-success fw-medium fs-12"
                          >
                            Forgot Password?
                          </Link>
                        </Col>

                        {/* Submit Button */}
                        <Col xl={12} className="d-grid mt-4 p-0">
                          <SpkButton Buttontype="submit">
                            <i className="ri-login-circle-line lh-1 me-2 align-middle"></i>
                            Sign In
                          </SpkButton>
                        </Col>

                        {/* Sign Up Link */}
                        <Col xl={12} className="text-center">
                          <p className="text-muted mt-3 mb-0">
                            Don't have an account?{" "}
                            <Link
                              href="/authentication/sign-up"
                              className="text-primary fw-medium text-decoration-underline"
                            >
                              Sign Up
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
                        alt="Sign In"
                        className="img-fluid m-auto mb-3 flex-fill mt-4"
                      />
                      <div className="flex-fill text-center">
                        <h6 className="mb-2">Welcome Back!</h6>
                        <p className="mb-0 text-muted fw-normal fs-12">
                          Sign in to your account to continue.
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

export default SignInTemplate;
