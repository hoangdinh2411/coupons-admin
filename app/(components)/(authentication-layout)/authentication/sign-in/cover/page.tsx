"use client"

import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

interface CoverProps {}

const Cover: React.FC<CoverProps> = () => {

    const [passwordshow, setpasswordshow] = useState(false);

    return (
        <Fragment>
            <Row className="authentication authentication-cover-main mx-0">
                <Col xxl={5} xl={7}>
                    <Row className="justify-content-center align-items-center h-100">
                        <Col xxl={7} xl={9} lg={6} md={6} sm={8} className="col-12">
                            <Card className="custom-card my-auto border authentication-cover-right">
                                <Card.Body className="p-4">
                                    <div className="text-center mb-4 bg-primary-transparent rounded border border-primary border-opacity-10 pt-2 position-relative overflow-hidden">
                                        <i className="ri-lock-2-line position-absolute lock-icon-auth"></i>
                                        <Image fill src="../../../assets/images/authentication/6.png" alt="" className="img-fluid ms-4" />
                                    </div>
                                    <Row className="gy-3">
                                        <Col xl={12}>
                                            <label className="form-label text-default" htmlFor="signin-email">Email Address<sup className="fs-12 text-danger">*</sup></label>
                                            <input className="form-control signin-email-input" id="signin-email" placeholder="Enter your email address" type="email" />
                                        </Col>
                                        <Col xl={12}>
                                            <label className="form-label text-default" htmlFor="signin-password">Password<sup className="fs-12 text-danger">*</sup></label>
                                            <div className="input-group">
                                                <Form.Control type={(passwordshow) ? 'text' : "password"} className="form-control signin-password-input" id="create-confirmpassword" placeholder="Enter your password" />
                                                <SpkButton onClickfunc={() => setpasswordshow(!passwordshow)} Buttontype="button" Buttonvariant="primary-light" Customclass="show-password-button"
                                                ><i className={`${passwordshow ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></SpkButton>
                                            </div>
                                        </Col>
                                        <Col xl={12}>
                                            <div className="form-check d-flex justify-content-between">
                                                <div>
                                                    <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                                                    <label className="form-check-label text-muted fw-normal fs-12" htmlFor="rememberMe">
                                                        Remember me
                                                    </label>
                                                </div>
                                                <Link href="/authentication/reset-password/basic" className="text-success fw-medium fs-12">Forgot Password?</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="d-grid mt-4">
                                        <Link href="/dashboards/sales" className="btn btn-primary"><i className="ri-login-circle-line lh-1 me-2 align-middle"></i>Sign In</Link>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-muted mt-3 mb-0">Don't have an account? <Link className="text-primary fw-medium text-decoration-underline" href="/authentication/sign-up/basic">Sign Up</Link></p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <div className="col-xxl-7 col-xl-5 col-lg-12 d-xl-block d-none px-0">
                    <div className="authentication-cover overflow-hidden">
                        <div className="aunthentication-cover-content d-flex align-items-center justify-content-center">
                            <div>
                                <Link href="/dashboards/sales">
                                    <Image fill src="../../../assets/images/brand-logos/toggle-white.png" alt="" className="authentication-brand toggle-white img-fluid mb-4" />
                                </Link>
                                <h4 className="text-fixed-white mb-2 fw-medium">Welcome Back! <span className="text-secondary text-shadow">Sign In</span></h4>
                                <h6 className="text-fixed-white mb-3 fw-medium">Access Your Account</h6>
                                <p className="text-fixed-white mb-1 op-6">Please enter your email and password to continue.</p>
                                <p className="text-fixed-white op-6 mb-5">If you've forgotten your password, use the "Forgot Password" option to reset it. Make sure your login details are secure and up to date.</p>
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
                </div>
            </Row>
        </Fragment>
    );
};

export default Cover;