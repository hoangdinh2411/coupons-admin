'use client';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';

interface ForgotPasswordProps {}

function ForgotPasswordTemplate() {
  const [passwordVisibility, setPasswordVisibility] = useState<{
    [key: string]: boolean;
  }>({});

  const togglePasswordVisibility = (field: string) => {
    setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <Row className=" justify-content-center authentication authentication-ForgotPassword align-items-center h-100">
      <Col xxl={7} sm={8} className="col-12">
        <Card className="custom-card my-4 border">
          <Card.Body>
            <Row className=" mx-0 align-items-center">
              <Col xl={6}>
                <div className="p-3">
                  <Row className=" gy-3">
                    <Col xl={12}>
                      <label className="form-label text-default" htmlFor="reset-password">
                        Current Password
                        <sup className="fs-12 text-danger">*</sup>
                      </label>
                      <div className="input-group">
                        <Form.Control
                          type={passwordVisibility.password ? 'text' : 'password'}
                          className="form-control signup-password-input"
                          id="signup-password"
                          placeholder="Enter your current password"
                        />
                        <SpkButton
                          onClickfunc={() => togglePasswordVisibility('password')}
                          Buttontype="button"
                          Buttonvariant="primary-light"
                          Customclass="show-password-button"
                        >
                          <i
                            className={`${
                              passwordVisibility.password ? 'ri-eye-line' : 'ri-eye-off-line'
                            } align-middle`}
                          ></i>
                        </SpkButton>
                      </div>
                    </Col>
                    <Col xl={12}>
                      <label className="form-label text-default" htmlFor="newpassword-password">
                        New Password
                        <sup className="fs-12 text-danger">*</sup>
                      </label>
                      <div className="input-group">
                        <Form.Control
                          type={passwordVisibility.newpassword ? 'text' : 'password'}
                          className="form-control create-password-input"
                          id="create-confirmpassword"
                          placeholder="Enter a new password"
                        />
                        <SpkButton
                          onClickfunc={() => togglePasswordVisibility('newpassword')}
                          Buttontype="button"
                          Buttonvariant="primary-light"
                          Customclass="show-password-button"
                        >
                          <i
                            className={`${
                              passwordVisibility.newpassword ? 'ri-eye-line' : 'ri-eye-off-line'
                            } align-middle`}
                          ></i>
                        </SpkButton>
                      </div>
                    </Col>
                    <Col xl={12} className="mb-2">
                      <label className="form-label text-default" htmlFor="create-confirmpassword">
                        Confirm New Password
                        <sup className="fs-12 text-danger">*</sup>
                      </label>
                      <div className="input-group">
                        <Form.Control
                          type={passwordVisibility.confirmpasswords ? 'text' : 'password'}
                          className="form-control create-password-input"
                          id="create-confirmpassword"
                          placeholder="Re-enter your new password"
                        />
                        <SpkButton
                          onClickfunc={() => togglePasswordVisibility('confirmpasswords')}
                          Buttontype="button"
                          Buttonvariant="primary-light"
                          Customclass="show-password-button"
                        >
                          <i
                            className={`${
                              passwordVisibility.confirmpasswords
                                ? 'ri-eye-line'
                                : 'ri-eye-off-line'
                            } align-middle`}
                          ></i>
                        </SpkButton>
                      </div>
                    </Col>
                  </Row>
                  <div className="d-grid mt-4">
                    <Link href="/dashboards/sales" className="btn btn-primary">
                      <i className="ri-lock-2-line lh-1 me-2 align-middle"></i>
                      Reset Password
                    </Link>
                  </div>
                  <div className="text-center">
                    <p className="text-muted mt-3 mb-0">
                      Want to go back?{' '}
                      <Link
                        className="text-primary fw-medium text-decoration-underline"
                        href="/dashboards/sales"
                      >
                        Click here
                      </Link>
                    </p>
                  </div>
                </div>
              </Col>
              <div className="col-xl-6 border rounded bg-secondary-transparent border-secondary border-opacity-10">
                <div className="d-flex align-items-center justify-content-around flex-column gap-4 h-100">
                  <Image
                    fill
                    src="/assets/images/authentication/5.png"
                    alt="Reset Password"
                    className="img-fluid m-auto mb-3 flex-fill mt-4"
                  />
                  <div className="flex-fill text-center">
                    <h6 className="mb-2">Reset Password</h6>
                    <p className="mb-0 text-muted fw-normal fs-12">
                      Set a strong password to keep your account secure!
                    </p>
                  </div>
                  <Link href="/dashboards/sales">
                    <Image
                      fill
                      alt="logo"
                      className="toggle-logo mb-4 pb-2"
                      src="/assets/images/brand-logos/toggle-logo.png"
                    />
                  </Link>
                </div>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ForgotPasswordTemplate;
