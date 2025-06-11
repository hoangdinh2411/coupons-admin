"use client"

import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { DayCounter } from "@/shared/data/authentication/comingsoondata";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { SnowOverlay } from "react-snow-overlay";

interface UnderMaintenanceProps {}

const UnderMaintenance: React.FC<UnderMaintenanceProps> = () => {

    return (
        <Fragment>
            <Row className="authentication coming-soon-row mx-0">
                <Col xxl={12} className=" px-0">
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
                                            <h1 className="text-fixed-white mb-1 fw-medium">We're Currently Under Maintenance</h1>
                                            <h6 className="text-fixed-white mb-3 fw-medium">Please Check Back Soon</h6>
                                            <p className="text-fixed-white mb-1 op-6">
                                                Our website is undergoing scheduled maintenance to enhance your experience.
                                                We appreciate your patience and understanding during this time.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <DayCounter />
                            <Row className="my-5 justify-content-center">
                                <Col xl={7}>
                                    <div className="input-group">
                                        <input type="email" className="form-control form-control-lg bg-light" placeholder="your_email@example.com" aria-label="your_email@example.com" aria-describedby="button-addon2" />
                                        <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn btn-lg">
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
                                <Link href="#!"> <span className="fw-semibold text-primary text-decoration-underline">Spruko</span> </Link>.
                                All rights reserved.
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

export default UnderMaintenance;