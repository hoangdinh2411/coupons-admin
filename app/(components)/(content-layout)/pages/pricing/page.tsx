"use client"

import SpkPlansCard from "@/shared/@spk-reusable-components/reusable-pages/spk-plans-card";
import SpkPriceCard from "@/shared/@spk-reusable-components/reusable-pages/spk-pricecard";
import SpkPricingCard from "@/shared/@spk-reusable-components/reusable-pages/spk-pricingcard";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { Plans, PricingPlanYears, PricingPlans, YearlyPricings } from "@/shared/data/pages/pricingdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";

interface PricingProps {}

const Pricing: React.FC<PricingProps> = () => {

    const [isMonthly, setIsMonthly] = useState(true);

    const handleToggle = () => {
        setIsMonthly(!isMonthly);
    };

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Pages-Pricing" />

            <Pageheader title="Pages" currentpage="Pricing" activepage="Pricing" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row className=" mb-5">
                <Tab.Container defaultActiveKey="1">
                    <Col xl={12}>
                        <h5 className="fw-semibold text-center"> Easy Pricing Options </h5>
                        <p className="text-muted text-center">Pick the plan that fits your business, with flexible options that grow as you do.</p>
                        <div className="d-flex justify-content-center mb-4">
                            <Nav as="ul" className="nav nav-tabs mb-3 tab-style-6 bg-primary-transparent" id="myTab1" role="tablist">
                                <Nav.Item as="li" className="nav-item" role="presentation">
                                    <Nav.Link as="button" eventKey="1" className="nav-link" id="pricing-monthly1" data-bs-toggle="tab"
                                        data-bs-target="#pricing-monthly1-pane" type="button" role="tab"
                                        aria-controls="pricing-monthly1-pane" aria-selected="true">Monthly</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="nav-item" role="presentation">
                                    <Nav.Link as="button" eventKey="2" className="nav-link" id="pricing-yearly1" data-bs-toggle="tab"
                                        data-bs-target="#pricing-yearly1-pane" type="button" role="tab"
                                        aria-controls="pricing-yearly1-pane" aria-selected="false">Yearly</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Col>
                    <Col xl={12}>
                        <Tab.Content id="myTabContent1">
                            <Tab.Pane eventKey="1" className="tab-pane p-0 border-0" id="pricing-monthly1-pane" role="tabpanel" aria-labelledby="pricing-monthly1" tabIndex={0}>
                                <Row className=" justify-content-center">
                                    {PricingPlans.map((idx, index) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={12} key={index}>
                                            <SpkPricingCard cardClass="overflow-hidden" price={idx} />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2" className="tab-pane p-0 border-0" id="pricing-yearly1-pane" role="tabpanel" aria-labelledby="pricing-yearly1" tabIndex={0}>
                                <Row className=" justify-content-center">
                                    {PricingPlanYears.map((idx, index) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={12} key={index}>
                                            <SpkPricingCard cardClass="overflow-hidden" price={idx} />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Tab.Container>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row className=" justify-content-center">
                <Col xl={12} id="convertable-pricing">
                    <div className="d-flex justify-content-center mb-4">
                        <div className="switcher-box">
                            <span className="pricing-time-span">Monthly</span>
                            <div className="switcher-pricing text-center">
                                <input type="checkbox" className="pricing-toggle" checked={!isMonthly} onChange={handleToggle} />
                            </div>
                            <span className="pricing-time-span">Annually</span>
                        </div>
                    </div>
                    <div className={`tab-content ${isMonthly ? 'show' : ''}`} id="monthly1">
                        <Row className=" d-flex justify-content-center mb-5 align-items-center">
                            <Col xl={6} xxl={3}>
                                <Card className="custom-card">
                                    <div className="p-4">
                                        <h5 className="fw-semibold">Find the Perfect Plan for Your Business!</h5>
                                        <p className="fw-semibold mb-2">Tailored solutions to help you grow and scale.</p>
                                        <p className="text-muted fs-12">Whether you're a startup or an enterprise, choose from flexible plans that fit your needs and grow.</p>
                                        <div className="btn btn-primary mb-5"> Compare Plans </div>
                                        <div className="text-center pt-4 bg-primary-transparent p-2 pb-0 rounded">
                                            <Image fill src="../../assets/images/media/media-85.png" alt="" className="img-fluid mx-auto pt-2" />
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col xxl={9}>
                                <Row>
                                    <Col xl={6}>
                                    <SpkPlansCard defaulttitle="Business Starter Plan" prices="35" color="primary" description="Perfect for small businesses or individuals, offering essential features to kick-start."/>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <h6 className="fw-semibold">Features:</h6>
                                                <Row>
                                                    <Col xl={6}>
                                                        <ul className="list-unstyled mb-0">
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-14 lh-1">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span>
                                                                    <strong className="me-1 d-inline-block">Up to 5</strong> Team Members
                                                                </span>
                                                            </li>
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-14 lh-1">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span>
                                                                    <strong className="me-1 d-inline-block">Basic</strong> Project Management Tools
                                                                </span>
                                                            </li>
                                                            <li className="d-flex align-items-center">
                                                                <span className="me-2 fs-14 lh-1">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span>
                                                                    Email and Chat Support <SpkTooltips placement="top" title="Business Hours">
                                                                        <Link href="#!" scroll={false} className="align-middle"><i className="fe fe-info text-info fw-medium"></i></Link>
                                                                    </SpkTooltips>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <ul className="list-unstyled mb-0">
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-14 lh-1">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span> Standard Security Protocols </span>
                                                            </li>
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-11">
                                                                    <i className="fe fe-x fw-semibold text-danger"></i>
                                                                </span>
                                                                <span> API Access </span>
                                                            </li>
                                                            <li className="d-flex align-items-center">
                                                                <Link href="#!" scroll={false} className="text-primary text-decoration-underline fs-12 fw-medium">See More Features</Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={6}>
                                    <SpkPlansCard title="Enterprise Growth Plan  <span class='badge bg-pink fs-10 mx-1'><i className='fe fe-star me-1'></i>25% OFF</span>" prices="58" color="success" description="Ideal for large organizations, this plan offers essential tools to support high."/>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <h6 className="fw-semibold">Features:</h6>
                                                <Row>
                                                    <Col xl={6}>
                                                        <ul className="list-unstyled mb-1">
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-14 lh-1">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span>
                                                                    <strong className="me-1 d-inline-block">Unlimited</strong> Team Members
                                                                </span>
                                                            </li>
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-14 lh-1">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span>
                                                                    <strong className="me-1 d-inline-block">Advanced</strong>
                                                                    <SpkTooltips placement="top" title="Project Management and Collaboration Tools">
                                                                        <span className="align-middle"><i className="fe fe-info text-info fw-medium"></i></span>
                                                                    </SpkTooltips>
                                                                </span>
                                                            </li>
                                                            <li className="d-flex align-items-center">
                                                                <span className="me-2 fs-14 lh-1">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span>
                                                                    24/7 Dedicated Support
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <ul className="list-unstyled mb-0">
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-14 lh-1">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span> Custom API Access </span>
                                                            </li>
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-11">
                                                                    <i className="fe fe-x fw-semibold text-danger"></i>
                                                                </span>
                                                                <span> Enterprise-grade Security </span>
                                                            </li>
                                                            <li className="d-flex align-items-center">
                                                                <Link href="#!" scroll={false} className="text-success text-decoration-underline fs-12 fw-medium">See More Features</Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={6}>
                                    <SpkPlansCard defaulttitle="Corporate Plus Plan" prices="84" color="warning" description="Tailored for enterprises needing advanced features and customization."/>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <h6 className="fw-semibold">Features:</h6>
                                                <Row>
                                                    <Col xl={6}>
                                                        <ul className="list-unstyled mb-1">
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-14 lh-1">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span>
                                                                    <strong className="me-1 d-inline-block">Custom</strong> Solutions for Large Teams
                                                                </span>
                                                            </li>
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-14 lh-1">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span>
                                                                    <strong className="me-1 d-inline-block">Unlimited</strong> Storage Options
                                                                </span>
                                                            </li>
                                                            <li className="d-flex align-items-center">
                                                                <span className="me-2 fs-14 lh-1">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span>
                                                                    <span> 24/7 Support <SpkTooltips placement="top" title="VIP Support with Dedicated Account Manager">
                                                                        <span className="align-middle"><i className="fe fe-info text-info fw-medium"></i></span>
                                                                    </SpkTooltips>
                                                                    </span>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <ul className="list-unstyled mb-0">
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-14 lh-1">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span> Custom Integration and API Solutions </span>
                                                            </li>
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-11">
                                                                    <i className="fe fe-x fw-semibold text-danger"></i>
                                                                </span>
                                                                <span> Full Customization and White Labeling </span>
                                                            </li>
                                                            <li className="d-flex align-items-center">
                                                                <Link href="#!" scroll={false} className="text-secondary text-decoration-underline fs-12 fw-medium">See More Features</Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div className={`tab-content ${isMonthly ? '' : 'show'}`} id="yearly1">
                        <Row className=" d-flex justify-content-center mb-5 align-items-center">
                            <Col xl={6} xxl={3}>
                                <Card className="custom-card">
                                    <div className="p-4">
                                        <h5 className="fw-semibold">Find the Perfect Plan for Your Business!</h5>
                                        <p className="fw-semibold mb-2">Tailored solutions to help you grow and scale.</p>
                                        <p className="text-muted fs-12">Whether you're a startup or an enterprise, choose from flexible plans that fit your needs and grow.</p>
                                        <div className="btn btn-primary mb-5"> Compare Plans </div>
                                        <div className="text-center pt-4 bg-primary-transparent p-2 pb-0 rounded">
                                            <Image fill src="../../assets/images/media/media-85.png" alt="" className="img-fluid mx-auto pt-2" />
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col xxl={9}>
                                <Row>
                                    <Col xl={6}>
                                    <SpkPlansCard defaulttitle="Business Starter Plan" prices="350" color="primary" description="Perfect for small businesses or individuals, offering essential features to kick-start."/>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <h6 className="fw-semibold">Features:</h6>
                                                <Row>
                                                    <Col xl={6}>
                                                        <ul className="list-unstyled mb-0">
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-11">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span>
                                                                    <strong className="me-1 d-inline-block">Up to 12</strong> Team Members
                                                                </span>
                                                            </li>
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-11">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span>
                                                                    <strong className="me-1 d-inline-block">Basic</strong> Project Management Tools
                                                                </span>
                                                            </li>
                                                            <li className="d-flex align-items-center">
                                                                <span className="me-2 fs-11">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span>
                                                                    Email and Chat Support <Link href="#!" scroll={false} className="align-middle" data-bs-toggle="tooltip" data-bs-placement="top" title="Business Hours"><i className="fe fe-info text-info fw-medium"></i></Link>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <ul className="list-unstyled mb-0">
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-11">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span> Standard Security Protocols </span>
                                                            </li>
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-11">
                                                                    <i className="fe fe-x fw-semibold text-danger"></i>
                                                                </span>
                                                                <span> API Access </span>
                                                            </li>
                                                            <li className="d-flex align-items-center">
                                                                <Link href="#!" scroll={false} className="text-primary text-decoration-underline fs-12 fw-medium">See More Features</Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={6}>
                                    <SpkPlansCard title="Enterprise Growth Plan <span class='badge bg-pink fs-10 mx-1'><i className='fe fe-star me-1'></i>25% OFF</span>" prices="580" color="success" description="Ideal for large organizations, this plan offers essential tools to support growth."/>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <h6 className="fw-semibold">Features:</h6>
                                                <Row>
                                                    <Col xl={6}>
                                                        <ul className="list-unstyled mb-1">
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-11">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span>
                                                                    <strong className="me-1 d-inline-block">Unlimited</strong> Team Members
                                                                </span>
                                                            </li>
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-11">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span>
                                                                    <strong className="me-1 d-inline-block">Advanced</strong><span className="align-middle" data-bs-toggle="tooltip" data-bs-placement="top" title="Project Management and Collaboration Tools"><i className="fe fe-info text-info fw-medium"></i></span>
                                                                </span>
                                                            </li>
                                                            <li className="d-flex align-items-center">
                                                                <span className="me-2 fs-11">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span>
                                                                    24/7 Dedicated Support
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <ul className="list-unstyled mb-0">
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-11">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span> Custom API and API Access </span>
                                                            </li>
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-11">
                                                                    <i className="fe fe-x fw-semibold text-danger"></i>
                                                                </span>
                                                                <span> Enterprise-grade Security </span>
                                                            </li>
                                                            <li className="d-flex align-items-center">
                                                                <Link href="#!" scroll={false} className="text-success text-decoration-underline fs-12 fw-medium">See More Features</Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={6}>
                                    <SpkPlansCard defaulttitle="Corporate Plus Plan" prices="840" color="warning" description="Tailored for enterprises needing advanced features and customization."/>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <h6 className="fw-semibold">Features:</h6>
                                                <Row>
                                                    <Col xl={6}>
                                                        <ul className="list-unstyled mb-1">
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-11">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span>
                                                                    <strong className="me-1 d-inline-block">35</strong> Large Teams
                                                                </span>
                                                            </li>
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-11">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span>
                                                                    <strong className="me-1 d-inline-block">Unlimited</strong> Storage Options
                                                                </span>
                                                            </li>
                                                            <li className="d-flex align-items-center">
                                                                <span className="me-2 fs-11">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span>
                                                                    24/7 Support <span className="align-middle" data-bs-toggle="tooltip" data-bs-placement="top" title="VIP Support with Dedicated Account Manager"><i className="fe fe-info text-info fw-medium"></i></span>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <ul className="list-unstyled mb-0">
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-11">
                                                                    <i className="fe fe-check fw-semibold text-success"></i>
                                                                </span>
                                                                <span> Custom Integration and API Solutions </span>
                                                            </li>
                                                            <li className="d-flex align-items-center mb-3">
                                                                <span className="me-2 fs-11">
                                                                    <i className="fe fe-x fw-semibold text-danger"></i>
                                                                </span>
                                                                <span> Full Customization and White Labeling </span>
                                                            </li>
                                                            <li className="d-flex align-items-center">
                                                                <Link href="#!" scroll={false} className="text-secondary text-decoration-underline fs-12 fw-medium">See More Features</Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row className=" justify-content-center">
                <Col xl={12}>
                    <Tab.Container defaultActiveKey="1">
                        <div className="text-center mb-5">
                            <div className="tab-style-1 border p-1 bg-white shadow-sm rounded-pill d-inline-block">
                                <Nav as="ul" className="nav-pills">
                                    <Nav.Item>
                                        <Nav.Link as="button" eventKey="1" type="button" className="nav-link rounded-pill fw-medium" data-bs-toggle="pill" data-bs-target="#pills-monthly">Monthly</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as="button" eventKey="2" type="button" className="nav-link rounded-pill fw-medium" data-bs-toggle="pill" data-bs-target="#pills-yearly">Annually </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                        <Tab.Content>
                            <Tab.Pane eventKey="1" className="tab-pane p-0 border-0" id="pills-monthly">
                                <Row className=" justify-content-center">
                                    {Plans.map((idx, index) => (
                                        <div className="col-xxl-3 col-xl-6" key={index}>
                                            <SpkPriceCard pricing={idx} />
                                        </div>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2" className="tab-pane p-0 border-0" id="pills-yearly">
                                <Row className=" justify-content-center">
                                    {YearlyPricings.map((idx, index) => (
                                        <div className="col-xxl-3 col-xl-6" key={index}>
                                            <SpkPriceCard pricing={idx} />
                                        </div>
                                    ))}
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}
        </Fragment>
    );
};

export default Pricing;