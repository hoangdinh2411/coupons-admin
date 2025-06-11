"use client"

import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

interface BasicProps {}

const Basic: React.FC<BasicProps> = () => {

    const [passwordVisibility, setPasswordVisibility] = useState<{ [key: string]: boolean }>({});

    const togglePasswordVisibility = (field: string) => {
        setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    return (
        <Fragment>
            <div className="authentication-background">
                <div className="container-lg">
                    <Row className="justify-content-center authentication authentication-basic align-items-center h-100">
                        <Col xxl={7} sm={8} className="col-12">
                            <Card className="custom-card my-4 border">
                                <Card.Body>
                                    <Row className="mx-0 align-items-center">
                                        <Col xl={6}>
                                            <div className="p-3">
                                                <Row className="gy-3">
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
                                                        <label className="form-label text-default" htmlFor="create-password">Confirm Password<sup className="fs-12 text-danger">*</sup></label>
                                                        <div className="input-group">
                                                            <Form.Control type={passwordVisibility.confirmpasswords ? 'text' : 'passwords'} className="form-control create-password-input" id="create-confirmpassword" placeholder="Re-enter your password" />
                                                            <SpkButton onClickfunc={() => togglePasswordVisibility('confirmpasswords')} Buttontype="button" Buttonvariant="primary-light" Customclass="show-password-button">
                                                                <i className={`${passwordVisibility.confirmpasswords ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                                            </SpkButton>
                                                        </div>
                                                    </Col>
                                                    <div className="form-check mt-3">
                                                        <input className="form-check-input" type="checkbox" value="" id="termsCheck" />
                                                        <label className="form-check-label text-muted fw-normal fs-11" htmlFor="termsCheck">
                                                            By creating an account, you agree to our
                                                            <Link href="/pages/terms-conditions" className="text-success"> <u>Terms & Conditions</u> </Link> and
                                                            <Link href="#!" className="text-success"><u> Privacy Policy </u></Link>
                                                        </label>
                                                    </div>
                                                </Row>
                                                <div className="d-grid mt-3">
                                                    <Link href="/dashboards/sales" className="btn btn-primary"><i className="ri-user-add-line lh-1 me-2 align-middle"></i>Create Account</Link>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-muted mt-3 mb-0">Already have an account? <Link className="text-primary fw-medium text-decoration-underline" href="/authentication/sign-in/basic">Sign In</Link></p>
                                                </div>
                                            </div>
                                        </Col>
                                        <div className="col-xl-6 border rounded bg-secondary-transparent border-secondary border-opacity-10">
                                            <div className="d-flex align-items-center justify-content-around flex-column gap-4 h-100">
                                                <Image fill src="../../../assets/images/authentication/5.png" alt="Sign Up" className="img-fluid m-auto mb-3 flex-fill mt-4" />
                                                <div className="flex-fill text-center">
                                                    <h6 className="mb-2">Create Your Account</h6>
                                                    <p className="mb-0 text-muted fw-normal fs-12">Join us and enjoy exclusive benefits!</p>
                                                </div>
                                                <div className="d-flex mb-1 justify-content-between gap-2 flex-wrap flex-lg-nowrap">
                                                    <SpkButton Buttontype="button" Buttonvariant="danger-light" Customclass="btn btn-sm d-flex align-items-center justify-content-center flex-fill">
                                                        <i className="ri-google-fill"></i>
                                                        <span className="ms-2">Google</span>
                                                    </SpkButton>
                                                    <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm d-flex align-items-center justify-content-center flex-fill">
                                                        <i className="ri-facebook-fill"></i>
                                                        <span className="ms-2">Facebook</span>
                                                    </SpkButton>
                                                    <SpkButton Buttontype="button" Buttonvariant="info-light" Customclass="btn btn-sm d-flex align-items-center justify-content-center flex-fill">
                                                        <i className="ri-twitter-x-line"></i>
                                                        <span className="ms-2">Twitter</span>
                                                    </SpkButton>
                                                </div>
                                                <Link href="/dashboards/sales">
                                                    <Image fill alt="logo" className="toggle-logo mb-4 pb-2" src="../../../assets/images/brand-logos/toggle-logo.png" />
                                                </Link>
                                            </div>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </Fragment>
    );
};

export default Basic;