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
                            <Card className=" custom-card my-auto border authentication-cover-right">
                                <Card.Body className="p-4">
                                    <div className="text-center mb-4 bg-primary-transparent rounded border border-primary border-opacity-10 pt-2 position-relative overflow-hidden">
                                        <i className="ri-lock-2-line position-absolute lock-icon-auth"></i>
                                        <Image fill src="../../../assets/images/authentication/6.png" alt="" className="img-fluid ms-4" />
                                    </div>
                                    <Row className="gy-3">
                                        <Col xl={12}>
                                            <label className="form-label text-default" htmlFor="lockscreen-password">Password<sup className="fs-12 text-danger">*</sup></label>
                                            <div className="input-group">
                                                <Form.Control type={(passwordshow) ? 'text' : "password"} className="form-control signin-password-input" id="create-confirmpassword" placeholder="Enter your password" />
                                                <SpkButton onClickfunc={() => setpasswordshow(!passwordshow)} Buttontype="button" Buttonvariant="primary-light" Customclass="show-password-button"
                                                ><i className={`${passwordshow ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></SpkButton>
                                            </div>
                                            <div className="mt-2">
                                                <div className="form-check">
                                                    <input className="form-check-input" id="rememberPassword" type="checkbox" value="" />
                                                    <label className="form-check-label text-muted fw-normal" htmlFor="rememberPassword">Remember your password?</label>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="d-grid mt-4">
                                        <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="show-password-button">
                                            <i className="ri-lock-unlock-line lh-1 me-2 align-middle"></i>Unlock Screen
                                        </SpkButton>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-muted mt-3 mb-0">Want to go back? <Link className="text-primary fw-medium text-decoration-underline" href="/dashboards/sales">Click Here</Link></p>
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
                                <h4 className="text-fixed-white mb-2 fw-medium">Unlock <span className="text-secondary text-shadow">Your Screen</span></h4>
                                <h6 className="text-fixed-white mb-3 fw-medium">Enter Your Password</h6>
                                <p className="text-fixed-white mb-1 op-6">Please enter your password to unlock the screen and continue.</p>
                                <p className="text-fixed-white op-6">Make sure you enter the correct password. If you have forgotten it, use the "Forgot Password" option to recover access.</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Cover;