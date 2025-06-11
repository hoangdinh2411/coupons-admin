"use client"

import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { DayCounter } from "@/shared/data/authentication/comingsoondata";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { SnowOverlay } from 'react-snow-overlay';

interface ComingSoonProps {}

const ComingSoon: React.FC<ComingSoonProps> = () => {

    return (
        <Fragment>
            <Row className="authentication coming-soon-row mx-0">
                <Col xxl={12} className="px-0">
                    <div className="authentication-cover-comingsoon overflow-hidden flex-column">
                        <div className="coming-soon-logo">
                            <Link href="/dashboards/sales">
                                <Image fill src="../../assets/images/brand-logos/desktop-white.png" alt="" className="desktop-white" />
                            </Link>
                        </div>
                        <div className="coming-soon-maincontent">
                            <Row className="justify-content-center">
                                <Col xxl={10}>
                                    <div className="authentication-cover-content d-flex align-items-center justify-content-center text-center">
                                        <div>
                                            <h1 className="fw-medium text-fixed-white">We're Launching Soon!</h1>
                                            <h6 className=" mb-3 fw-medium text-fixed-white">Stay Tuned for Updates</h6>
                                            <p className=" mb-1 op-6 text-fixed-white">
                                                We are currently working hard to bring you a new and improved experience.
                                                Please provide your email below to be the first to know when we launch!
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <DayCounter />
                            <Row className="my-5 justify-content-center">
                                <Col xl={7}>
                                    <div className="input-group rounded-pill">
                                        <input type="email" className="form-control form-control-lg coming-soon-form shadow-sm" placeholder="your_email@example.com" aria-label="your_email@example.com" aria-describedby="button-addon2" />
                                        <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-lg" Id="button-addon2">
                                            Notify Me!
                                        </SpkButton>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div id="snow-container">
                            <SnowOverlay />
                        </div>
                        <div className="coming-soon-footer text-fixed-white">
                            <span>
                                Copyright © <span id="year"></span>
                                <Link href="#!" className="fw-semibold text-secondary">Rixzo</Link>.
                                Designed with <span className="bi bi-heart-fill text-danger"></span> by
                                <Link href="#!">
                                    <span className="fw-semibold text-primary text-decoration-underline"> Spruko</span>
                                </Link>. All rights reserved.
                            </span>
                            <span className="op-6">|</span>
                            <div className="d-flex gap-2 align-items-center">
                                <div>Follow Us:</div>
                                <div className="btn-list">
                                    <SpkButton Buttontype="button" Buttonvariant="outline-light" Customclass="btn-icon btn-sm btn-wave rounded-circle auth-social-icons text-fixed-white">
                                        <i className="ri-facebook-line lh-1 align-middle"></i>
                                    </SpkButton>
                                    <SpkButton Buttontype="button" Buttonvariant="outline-light" Customclass="btn-icon btn-sm btn-wave rounded-circle auth-social-icons text-fixed-white">
                                        <i className="ri-twitter-x-line lh-1 align-middle"></i>
                                    </SpkButton>
                                    <SpkButton Buttontype="button" Buttonvariant="outline-light" Customclass="btn-icon btn-sm btn-wave rounded-circle auth-social-icons text-fixed-white">
                                        <i className="ri-instagram-line lh-1 align-middle"></i>
                                    </SpkButton>
                                    <SpkButton Buttontype="button" Buttonvariant="outline-light" Customclass="btn-icon btn-sm btn-wave rounded-circle auth-social-icons text-fixed-white">
                                        <i className="ri-github-line lh-1 align-middle"></i>
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

export default ComingSoon;