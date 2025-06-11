"use client"

import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import React, { Fragment, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Shepherd from 'shepherd.js';

interface TourProps {}

const Tour: React.FC<TourProps> = () => {

    useEffect(() => {
        const tour = new Shepherd.Tour({
            defaultStepOptions: {
                cancelIcon: {
                    enabled: true
                },
                classes: 'className-1 className-2',
                scrollTo: { behavior: 'smooth', block: 'center' }
            },
            useModalOverlay: true
        });

        tour.addStep({
            id: 'step-1',
            title: "Welcome to the Knowledge Base",
            text: 'Explore helpful resources, articles, and solutions designed to assist you with various topics and issues.',
            attachTo: {
                element: '#step-1',
                on: 'bottom',
            },
            buttons: [
                {
                    text: 'Next',
                    action: () => {
                        tour.next();
                    },
                },
            ],
        });

        tour.addStep({
            id: 'step-2',
            title: "Search for Topics",
            text: 'Find articles and tutorials by searching for keywords, categories, or frequently asked questions.',
            attachTo: {
                element: '#step-2',
                on: 'bottom',
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next,
                },
            ],
        });
        tour.addStep({
            id: 'step-3',
            title: "FAQ Section",
            text: 'Our FAQ section covers common questions and provides quick answers to help resolve common issues.',
            attachTo: {
                element: '#step-3',
                on: 'bottom',
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next,
                },
            ],
        });

        tour.addStep({
            id: 'step-4',
            title: "Step-by-Step Guides",
            text: 'Access detailed guides to help you solve specific problems or complete tasks efficiently.',
            attachTo: {
                element: '#step-4',
                on: 'bottom',
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next,
                },
            ],
        });

        tour.addStep({
            id: 'step-5',
            title: "Community Support",
            text: 'Join discussions, ask questions, and share insights with other users in the community forum.',
            attachTo: {
                element: '#step-5',
                on: 'bottom',
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next,
                },
            ],
        });

        tour.addStep({
            id: 'step-6',
            title: "Support Tickets",
            text: 'Submit a support ticket for personalized help from our team if you can’t find the solution you need.',
            attachTo: {
                element: '#step-6',
                on: 'bottom',
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next,
                },
            ],
        });

        tour.addStep({
            id: 'step-7',
            title: "Stay Updated",
            text: 'Check out the latest updates, new features, and improvements to keep your knowledge current.',
            attachTo: {
                element: '#step-7',
                on: 'bottom',
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next,
                },
            ],
        });

        tour.start();
    }, []);

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Seo title={"Tour"} />

            <Pageheader title="Advanced UI" currentpage="Tour" activepage="Tour" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                SHEPHERD JS
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-5 text-center">
                            <Row className="justify-content-center">
                                <Col xl={7} className="mb-5 pb-3">
                                    <span className="avatar avatar-xxl p-2 bg-light">
                                        <span className="avatar avatar-xl p-2 bg-white">
                                            <Image width={64} height={64} src="../../assets/images/company-logos/7.png" alt="" id="step-1" />
                                        </span>
                                    </span>
                                    <h5 className="fw-semibold mt-2">Welcome to Tour App</h5>
                                    <span className="text-muted">Embark on a journey of discovery with our exclusive tour experiences. Whether you're a solo adventurer, a couple seeking romance, or a group of friends ready for excitement, we've curated the perfect tours for you. Create memories that last a lifetime.</span>
                                </Col>
                            </Row>
                            <Row className="justify-content-center gap-4">
                                <Col xxl={3}>
                                    <Card className="card custom-card shadow-none border border-primary border-opacity-25 text-start">
                                        <Card.Body className=""> <div className="">
                                            <span className="avatar avatar-md avatar-rounded bg-primary svg-white mb-3 shadow-primary" id="step-2">
                                                <i className="ri-search-line fs-18"></i>
                                            </span>
                                            <div>
                                                <h6 className="fw-semibold mb-2">Search for Topics.</h6> <span className="text-muted">Find articles and tutorials by searching for keywords, categories, or FAQs.</span>
                                            </div>
                                        </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={3}>
                                    <Card className="custom-card shadow-none border border-secondary border-opacity-25 text-start">
                                        <Card.Body className="">
                                            <div className="">
                                                <span className="avatar avatar-md bg-secondary svg-white mb-3 avatar-rounded shadow-secondary" id="step-3">
                                                    <i className="ri-question-line fs-20"></i>
                                                </span>
                                                <div>
                                                    <h6 className="fw-semibold mb-2">FAQ Section</h6>
                                                    <span className="text-muted">Our FAQ section covers common questions and provides quick answers to help resolve issues.</span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={3}>
                                    <Card className="custom-card shadow-none border border-success border-opacity-25 text-start">
                                        <Card.Body className="">
                                            <div className="">
                                                <span className="avatar avatar-md bg-success svg-white mb-3 avatar-rounded shadow-success" id="step-4">
                                                    <i className="ri-guide-line fs-18"></i> </span>
                                                <div> <h6 className="fw-semibold mb-2">Step-by-Step Guides</h6> <span className="text-muted">Access detailed guides to help you solve specific problems or complete tasks efficiently.</span> </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={3}>
                                    <Card className="custom-card shadow-none border border-info border-opacity-25 text-start">
                                        <Card.Body className="">
                                            <div className="">
                                                <span className="avatar avatar-md bg-info svg-white mb-3 avatar-rounded shadow-info" id="step-5">
                                                    <i className="ri-user-community-line fs-20"></i> </span>
                                                <div> <h6 className="fw-semibold mb-2">Community Support</h6> <span className="text-muted">Join discussions, ask questions, and share insights with other users in the community forum.</span> </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={3}>
                                    <Card className="custom-card shadow-none border border-pink border-opacity-25 text-start">
                                        <div className="card-body">
                                            <div className="">
                                                <span className="avatar avatar-md bg-pink svg-white mb-3 avatar-rounded shadow-pink" id="step-6">
                                                    <i className="ri-ticket-2-line fs-20"></i> </span>
                                                <div> <h6 className="fw-semibold mb-2">Support Tickets</h6> <span className="text-muted">Submit a support ticket for personalized help from our team if you can't find the solution you need.</span> </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                        <div className="card-footer">
                            <div className="d-sm-flex justify-content-end">
                                <SpkButton Buttonvariant='primary-light' Buttontype="button" Customclass="m-1">Cancel Journey</SpkButton>
                                <SpkButton Buttonvariant='success-light' Buttontype="button" Customclass="m-1" Id="step-7">Start Your Journey</SpkButton>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    )
};

export default Tour;