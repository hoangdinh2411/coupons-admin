"use client"

import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

interface BasicProps {}

const Basic: React.FC<BasicProps> = () => {

    const [passwordshow, setpasswordshow] = useState(false);

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
                                                    <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="">
                                                        <i className="ri-lock-unlock-line lh-1 me-2 align-middle"></i>Unlock Screen
                                                    </SpkButton>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-muted mt-3 mb-0">Want to go back? <Link className="text-primary fw-medium text-decoration-underline" href="/dashboards/sales">Click Here</Link></p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={6} className="border rounded bg-secondary-transparent border-secondary border-opacity-10">
                                            <div className="d-flex align-items-center justify-content-around flex-column gap-4 h-100">
                                                <Image fill src="../../../assets/images/authentication/5.png" alt="" className="img-fluid m-auto mb-3 flex-fill mt-2" />
                                                <div className="flex-fill text-center">
                                                    <h6 className="mb-2">Lock Screen</h6>
                                                    <p className="mb-0 text-muted fw-normal fs-12">Secure your account with a password!</p>
                                                </div>
                                                <Link href="/dashboards/sales"><Image fill alt="logo" className="toggle-logo mb-2 pb-2" src="../../../assets/images/brand-logos/toggle-logo.png" /></Link>
                                            </div>
                                        </Col>
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