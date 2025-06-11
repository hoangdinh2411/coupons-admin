"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

interface BasicProps {}

const Basic: React.FC<BasicProps> = () => {

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
        <div className="authentication-background">
            <div className="container-lg">
                <Row className="justify-content-center authentication authentication-basic align-items-center h-100">
                    <div className="col-xxl-7 col-sm-8 col-12">
                        <div className="card custom-card my-4 border">
                            <div className="card-body">
                                <Row className="mx-0 align-items-center gx-0">
                                    <Col xl={6}>
                                        <div className="p-3">
                                            <p className="fs-14 mb-4 fw-medium">Enter Verification Code : </p>
                                            <Row className="gy-3">
                                                <Col xl={12} className="mb-2">
                                                    <Row>
                                                        <Col className="col-3">
                                                            <input type="text" className="form-control text-center" id="one" maxLength={1} value={verificationCode.one} onChange={(e) => handleInputChange(e, 'two')} />
                                                        </Col>
                                                        <Col className="col-3">
                                                            <input type="text" className="form-control text-center" id="two" maxLength={1} value={verificationCode.two} onChange={(e) => handleInputChange(e, 'three')} />
                                                        </Col>
                                                        <Col className="col-3">
                                                            <input type="text" className="form-control text-center" id="three" maxLength={1} value={verificationCode.three} onChange={(e) => handleInputChange(e, 'four')} />
                                                        </Col>
                                                        <Col className="col-3">
                                                            <input type="text" className="form-control text-center" id="four" maxLength={1} value={verificationCode.four} onChange={(e) => handleInputChange(e, '')} />
                                                        </Col>
                                                    </Row>
                                                    <div className="form-check mt-2">
                                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
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
                                        </div>
                                    </Col>
                                    <Col xl={6} className="border rounded bg-secondary-transparent border-secondary border-opacity-10">
                                        <div className="d-flex align-items-center justify-content-around flex-column gap-4 h-100">
                                            <Image fill src="../../../assets/images/authentication/5.png" alt="Verification Image" className="img-fluid m-auto mb-3 flex-fill mt-2" />
                                            <div className="flex-fill text-center">
                                                <h6 className="mb-2">Verification in Progress</h6>
                                                <p className="mb-0 text-muted fw-normal fs-12">
                                                    Please enter the code sent to your Email or phone.
                                                </p>
                                            </div>
                                            <Link href="/dashboards/sales">
                                                <Image fill alt="logo" className="toggle-logo mb-2 pb-2" src="../../../assets/images/brand-logos/toggle-logo.png" />
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default Basic;
