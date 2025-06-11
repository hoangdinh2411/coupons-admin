"use client"

import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";
import { Accountsetiing, Billingdata, Privacydata } from "@/shared/data/pages/faqsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import React, { Fragment } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";

interface FaqsProps {}

const Faqs: React.FC<FaqsProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Pages-FAQ's" />

            <Pageheader title="Pages" currentpage="FAQ's" activepage="FAQ's" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row className=" justify-content-center">
                <Col xl={11}>
                    <Card className="custom-card">
                        <Card.Body className="card-body">
                            <Row className=" justify-content-center border-bottom border-block-end-dashed mb-4 p-3 mx-0 bg-primary rounded text-fixed-white">
                                <Col xxl={12}>
                                    <div className="py-2">
                                        <div className="text-center">
                                            <h3 className="text-fixed-white mb-3">Frequently Asked Questions</h3>
                                            <h5 className="d-block text-fixed-white op-8">Require assistance? Here are some of our commonly asked questions!</h5>
                                            <p className="op-7 mb-2 px-4 text-fixed-white">Discover answers to common queries and find solutions to your concerns with our comprehensive list of frequently asked questions.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className=" gy-3 gy-xxl-0">
                                <Col xxl={8}>
                                    <Tab.Container defaultActiveKey="1">
                                        <Nav as="ul" className="nav-tabs tab-style-1 d-sm-flex d-block bg-transparent border border-dashed" role="tablist">
                                            <Nav.Item as="li" className="nav-item" role="presentation">
                                                <Nav.Link as="a" eventKey="1" className="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#account-settings" aria-selected="false" tabIndex={-1}>Account Settings</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li" className="nav-item" role="presentation">
                                                <Nav.Link as="a" eventKey="2" className="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#privacy-and-security" aria-selected="true">Privacy & Security</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li" className="nav-item" role="presentation">
                                                <Nav.Link as="a" eventKey="3" className="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#billing-and-payments" aria-selected="false" tabIndex={-1}>Billing & Payments</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content >
                                            <Tab.Pane eventKey="1" className="tab-pane border-0 bg-primary-transparent " id="account-settings" role="tabpanel">
                                                <SpkAccordions bodyClass="ps-3 m-3 my-3 border-success border-3 border-start text-default bg-success bg-opacity-10" items={Accountsetiing} defaultActiveKey={1} accordionClass="accordion-customicon1 faq-accordion accordion-primary accordions-items-separate" />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="2" className="tab-pane border-0 bg-primary-transparent" id="privacy-and-security" role="tabpanel">
                                                <SpkAccordions bodyClass="ps-3 m-3 my-3 border-success border-3 border-start text-default bg-success bg-opacity-10" items={Privacydata} defaultActiveKey={1} accordionClass="accordion-customicon1 faq-accordion accordion-primary accordions-items-separate" />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="3" className="tab-pane border-0 bg-primary-transparent" id="billing-and-payments" role="tabpanel">
                                                <div className="accordion accordion-customicon1 faq-accordion accordion-primary accordions-items-separate" id="accordionFAQ3">
                                                    <SpkAccordions bodyClass="ps-3 m-3 my-3 border-success border-3 border-start text-default bg-success bg-opacity-10" items={Billingdata} defaultActiveKey={1} accordionClass="accordion-customicon1 faq-accordion accordion-primary accordions-items-separate" />
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Col>
                                <div className="col-xxl-4">
                                    <div className="p-4 border border-secondary border-opacity-50 rounded-3">
                                        <div className="text-center">
                                            <Image fill src="../../assets/images/media/media-81.png" alt="" className="img-fluid mb-3" />
                                            <div>
                                                <h5 className="fw-semibold mb-2">Any Questions?</h5>
                                                <span className="d-block fs-12 text-muted">
                                                    Write your question below and we'll get back to you shortly.
                                                </span>
                                            </div>
                                        </div>
                                        <Row className=" gy-3 mt-3">
                                            <Col xl={3}>
                                                <label htmlFor="user-name" className="form-label">Your Name</label>
                                            </Col>
                                            <Col xl={9}>
                                                <input type="text" className="form-control form-control-light border" id="user-name" placeholder="Enter Your Name" />
                                            </Col>
                                            <Col xl={3}>
                                                <label htmlFor="user-email" className="form-label">Email Id</label>
                                            </Col>
                                            <Col xl={9}>
                                                <input type="text" className="form-control form-control-light border" id="user-email" placeholder="Enter Email" />
                                            </Col>
                                            <Col xl={3}>
                                                <label htmlFor="text-area" className="form-label">Textarea</label>
                                            </Col>
                                            <div className="col-xl-9 text-start">
                                                <textarea className="form-control form-control-light border" placeholder="Enter your query here" id="text-area" rows={3}></textarea>
                                                <button className="btn btn-primary btn-wave waves-effect waves-light mt-3" type="button" id="send">Send your question</button>
                                            </div>
                                        </Row>
                                    </div>
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    );
};

export default Faqs;