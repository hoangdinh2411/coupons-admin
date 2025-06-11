"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

interface CoverProps {}

const Cover: React.FC<CoverProps> = () => {

    const [verificationCode, setVerificationCode] = useState({
        one: "",
        two: "",
        three: "",
        four: "",
    });

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, nextInputId: string | undefined) => {
        const { id, value } = e.target;
        setVerificationCode((prevState) => ({
            ...prevState,
            [id]: value,
        }));

        // Move focus to next input field if current field is filled
        if (value && nextInputId) {
            const nextInput = document.getElementById(nextInputId);
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    return (
        <Row className="authentication authentication-cover-main mx-0">
            <Col xxl={5} xl={7}>
                <Row className="justify-content-center align-items-center h-100">
                    <Col xxl={7} xl={9} lg={6} md={6} sm={8} className="col-12">
                        <Card className="custom-card my-auto border authentication-cover-right">
                            <Card.Body className="p-4">
                                <div className="text-center mb-4 bg-primary-transparent rounded border border-primary border-opacity-10 pt-2 position-relative overflow-hidden">
                                    <i className="ri-lock-2-line position-absolute lock-icon-auth"></i>
                                    <Image fill src="../../../assets/images/authentication/6.png" alt="Lock Icon" className="img-fluid ms-4"/>
                                </div>
                                <p className="fs-14 mb-4 fw-medium">Enter Verification Code : </p>
                                <Row className="gy-3">
                                    <Col xl={12} className="mb-2">
                                        <Row>
                                            <Col className="col-3">
                                                <input type="text" className="form-control text-center" id="one" maxLength={1} value={verificationCode.one} onChange={(e) => handleInputChange(e, 'two')}/>
                                            </Col>
                                            <Col className="col-3">
                                                <input type="text" className="form-control text-center" id="two" maxLength={1} value={verificationCode.two} onChange={(e) => handleInputChange(e, 'three')}/>
                                            </Col>
                                            <Col className="col-3">
                                                <input type="text" className="form-control text-center" id="three" maxLength={1} value={verificationCode.three} onChange={(e) => handleInputChange(e, 'four')}/>
                                            </Col>
                                            <Col className="col-3">
                                                <input type="text" className="form-control text-center" id="four" maxLength={1} value={verificationCode.four} onChange={(e) => handleInputChange(e, '')}/>
                                            </Col>
                                        </Row>
                                        <div className="form-check mt-2">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                            <label className="form-check-label fs-14" htmlFor="defaultCheck1">
                                                Didn't receive a code?{" "}
                                                <Link href="/dashboards/sales" className="text-primary ms-2 d-inline-block">
                                                    Resend
                                                </Link>
                                            </label>
                                        </div>
                                    </Col>
                                    <Col xl={12} className="d-grid mt-3">
                                        <Link href="/dashboards/sales" className="btn btn-primary">
                                            Verify
                                        </Link>
                                    </Col>
                                </Row>
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
                                <Image fill src="../../../assets/images/brand-logos/toggle-white.png" alt="Brand Logo" className="authentication-brand toggle-white img-fluid mb-4"/>
                            </Link>
                            <h4 className="text-fixed-white mb-2 fw-medium">
                                Verify Your <span className="text-secondary text-shadow">Identity</span>
                            </h4>
                            <h6 className="text-fixed-white mb-3 fw-medium">Enter the Verification Code</h6>
                            <p className="text-fixed-white mb-1 op-6">
                                We have sent a verification code to your email or phone. Please enter the code to proceed.
                            </p>
                            <p className="text-fixed-white op-6">
                                If you didn't receive the code, check your spam folder or request a new one. This extra step helps keep your account secure.
                            </p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Cover;
