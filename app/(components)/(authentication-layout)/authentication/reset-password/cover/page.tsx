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
                                        <div className="col-xl-12">
                                            <label className="form-label text-default" htmlFor="reset-password">Current Password<sup className="fs-12 text-danger">*</sup></label>
                                            <div className="input-group">
                                                <Form.Control type={passwordVisibility.password ? 'text' : 'password'} className="form-control signup-password-input" id="signup-password" placeholder="Enter your current password" />
                                                <SpkButton onClickfunc={() => togglePasswordVisibility('password')} Buttontype="button" Buttonvariant="primary-light" Customclass="show-password-button">
                                                    <i className={`${passwordVisibility.password ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                                </SpkButton>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <label className="form-label text-default" htmlFor="newpassword-password">New Password<sup className="fs-12 text-danger">*</sup></label>
                                            <div className="input-group">
                                                <Form.Control type={passwordVisibility.newpassword ? 'text' : 'password'} className="form-control create-password-input" id="create-confirmpassword" placeholder="Enter a new password" />
                                                <SpkButton onClickfunc={() => togglePasswordVisibility('newpassword')} Buttontype="button" Buttonvariant="primary-light" Customclass="show-password-button">
                                                    <i className={`${passwordVisibility.newpassword ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                                </SpkButton>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 mb-2">
                                            <label className="form-label text-default" htmlFor="create-confirmpassword">Confirm New Password<sup className="fs-12 text-danger">*</sup></label>
                                            <div className="input-group">
                                                <Form.Control type={passwordVisibility.confirmpasswords ? 'text' : 'password'} className="form-control create-password-input" id="create-confirmpassword" placeholder="Re-enter your new password" />
                                                <SpkButton onClickfunc={() => togglePasswordVisibility('confirmpasswords')} Buttontype="button" Buttonvariant="primary-light" Customclass="show-password-button">
                                                    <i className={`${passwordVisibility.confirmpasswords ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i>
                                                </SpkButton>
                                            </div>
                                        </div>
                                    </Row>
                                    <div className="d-grid mt-4">
                                        <Link href="/dashboards/sales" className="btn btn-primary"><i className="ri-lock-2-line lh-1 me-2 align-middle"></i>Reset Password</Link>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-muted mt-3 mb-0">Want to go back? <Link className="text-primary fw-medium text-decoration-underline" href="/dashboards/sales">Click here</Link></p>
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
                                <h4 className="text-fixed-white mb-2 fw-medium">Reset <span className="text-secondary text-shadow">Your Password</span></h4>
                                <h6 className="text-fixed-white mb-3 fw-medium">Choose a New Password</h6>
                                <p className="text-fixed-white mb-1 op-6">Please create a new password to secure your account.</p>
                                <p className="text-fixed-white op-6">Your new password should be strong and unique. Use a combination of letters, numbers, and special characters to maximize security. Avoid using personal information or passwords you've used before.</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Cover;