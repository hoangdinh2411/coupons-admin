"use client"

import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

interface CoverProps {}

const Cover: React.FC<CoverProps> = () => {

    const [passwordVisibility, setPasswordVisibility] = useState<{ [key: string]: boolean }>({});

    const togglePasswordVisibility = (field: string) => {
        setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    return (
        <Fragment>
            <Row className=" authentication authentication-cover-main mx-0">
                <Col xxl={5} xl={7}>
                    <Row className=" justify-content-center align-items-center h-100">
                        <Col xxl={7} xl={9} lg={6} md={6} sm={8} className="col-12">
                            <Card className="custom-card my-auto border authentication-cover-right">
                                <Card.Body className="p-4">
                                    <div className="text-center mb-4 bg-primary-transparent rounded border border-primary border-opacity-10 pt-2 position-relative overflow-hidden">
                                        <i className="ri-lock-2-line position-absolute lock-icon-auth"></i>
                                        <Image fill src="../../../assets/images/authentication/6.png" alt="" className="img-fluid ms-4" />
                                    </div>
                                    <Row className=" gy-3">
                                        <Col xl={12} className="mt-2">
                                            <label className="form-label text-default" htmlFor="signup-email">Email Address<sup className="fs-12 text-danger">*</sup></label>
                                            <input className="form-control signup-email-input" id="signup-email" placeholder="Enter your email address" type="email" />
                                        </Col>
                                        <Col xl={12}>
                                            <label className="form-label text-default" htmlFor="signup-password">Password<sup className="fs-12 text-danger">*</sup></label>
                                            <div className="input-group">
                                                <Form.Control type={passwordVisibility.password ? 'text' : 'password'} className="form-control signup-password-input" id="signup-password" placeholder="Create a password" />
                                                <SpkButton onClickfunc={() => togglePasswordVisibility('password')} Buttontype="button" Buttonvariant="primary-light" Customclass="show-password-button">
                                                    <i className={`${passwordVisibility.password ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                                </SpkButton>
                                            </div>
                                        </Col>
                                        <Col xl={12} className="mb-2">
                                            <label className="form-label text-default" htmlFor="create-confirmpassword">Confirm Password<sup className="fs-12 text-danger">*</sup></label>
                                            <div className="input-group">
                                                <Form.Control type={passwordVisibility.confirmpasswords ? 'text' : 'password'} className="form-control create-password-input" id="create-confirmpassword" placeholder="Re-enter your password" />
                                                <SpkButton onClickfunc={() => togglePasswordVisibility('confirmpasswords')} Buttontype="button" Buttonvariant="primary-light" Customclass="show-password-button">
                                                    <i className={`${passwordVisibility.confirmpasswords ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                                </SpkButton>
                                            </div>
                                        </Col>
                                        <div className="form-check mt-3">
                                            <input className="form-check-input" type="checkbox" value="" id="termsCheck" />
                                            <label className="form-check-label text-muted fw-normal fs-11" htmlFor="termsCheck" >
                                                By creating an account, you agree to our
                                                <Link href="/pages/terms-conditions" className="text-success"> <u>Terms & Conditions</u> </Link> and
                                                <Link href="#!" className="text-success"> <u>Privacy Policy</u> </Link>
                                            </label>
                                        </div>
                                    </Row>
                                    <div className="d-grid mt-3">
                                        <Link href="/dashboards/sales" className="btn btn-primary"><i className="ri-user-add-line lh-1 me-2 align-middle"></i>Create Account</Link>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-muted mt-3 mb-0">Already have an account? <Link className="text-primary fw-medium text-decoration-underline" href="/authentication/sign-in/basic">Sign In</Link></p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={7} xl={5} lg={12} className="d-xl-block d-none px-0">
                    <div className="authentication-cover overflow-hidden">
                        <div className="aunthentication-cover-content d-flex align-items-center justify-content-center">
                            <div>
                                <Link href="/dashboards/sales">
                                    <Image fill src="../../../assets/images/brand-logos/toggle-white.png" alt="" className="authentication-brand toggle-white img-fluid mb-4" />
                                </Link>
                                <h4 className="text-fixed-white mb-2 fw-medium">Sign Up for <span className="text-secondary text-shadow">Your Account</span></h4>
                                <h6 className="text-fixed-white mb-3 fw-medium">Create Your Account Now</h6>
                                <p className="text-fixed-white mb-1 op-6">Fill in the details below to get started with your new account.</p>
                                <p className="text-fixed-white op-6 mb-5">Ensure you use a valid email address and create a strong password. Use a mix of letters, numbers, and symbols to protect your account from unauthorized access.</p>
                                <div className="d-flex mb-1 gap-2 flex-wrap flex-lg-nowrap">
                                    <SpkButton Buttontype="button" Buttonvariant="info" Customclass="btn-icon rounded-circle btn-sm d-flex align-items-center justify-content-center">
                                        <i className="ri-twitter-x-line"></i>
                                    </SpkButton>
                                    <SpkButton Buttontype="button" Buttonvariant="pink" Customclass="btn-icon rounded-circle btn-sm d-flex align-items-center justify-content-center">
                                        <i className="ri-google-line fs-16"></i>
                                    </SpkButton>
                                    <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-icon rounded-circle btn-sm d-flex align-items-center justify-content-center">
                                        <i className="ri-facebook-line fs-16"></i>
                                    </SpkButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Cover;