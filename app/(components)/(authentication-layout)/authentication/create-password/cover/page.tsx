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
                                            <label className="form-label text-default" htmlFor="create-password">Create Password<sup className="fs-12 text-danger">*</sup></label>
                                            <div className="input-group">
                                                <Form.Control type={passwordVisibility.password ? 'text' : 'password'} className="form-control signup-password-input" id="signup-password" placeholder="Enter your password" />
                                                <SpkButton onClickfunc={() => togglePasswordVisibility('password')} Buttontype="button" Buttonvariant="primary-light" Customclass="show-password-button">
                                                    <i className={`${passwordVisibility.password ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                                </SpkButton>
                                            </div>
                                        </Col>
                                        <Col xl={12} className="mb-2">
                                            <label className="form-label text-default" htmlFor="create-confirmpassword">Confirm Password<sup className="fs-12 text-danger">*</sup></label>
                                            <div className="input-group">
                                                <Form.Control type={passwordVisibility.passwords ? 'text' : 'password'} className="form-control signup-password-input" id="signup-password" placeholder="Re-enter your password" />
                                                <SpkButton onClickfunc={() => togglePasswordVisibility('passwords')} Buttontype="button" Buttonvariant="primary-light" Customclass="show-password-button">
                                                    <i className={`${passwordVisibility.passwords ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                                </SpkButton>
                                            </div>
                                            <div className="mt-2">
                                                <div className="form-check">
                                                    <input className="form-check-input" id="rememberPassword" type="checkbox" value="" />
                                                    <label className="form-check-label text-muted fw-normal" htmlFor="rememberPassword">Remember password?</label>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="d-grid mt-4">
                                        <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="">
                                            <i className="ri-lock-password-line lh-1 me-2 align-middle"></i>Save Password
                                        </SpkButton>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-muted mt-3 mb-0">Back to home ? <Link className="text-primary fw-medium text-decoration-underline" href="/dashboards/sales">Click Here</Link></p>
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
                                <h4 className="text-fixed-white mb-2 fw-medium">Create <span className="text-secondary text-shadow">Password!</span></h4>
                                <h6 className="text-fixed-white mb-3 fw-medium">Set Your New Password</h6>
                                <p className="text-fixed-white mb-1 op-6">Create a secure password for protection!</p>
                                <p className="text-fixed-white op-6">Your password should be unique and hard to guess. Avoid using easily accessible personal information.Consider using a mix of letters, numbers, and symbols to enhance security.</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Cover;