"use client"

import { Timeline03, TimelineData } from "@/shared/data/pages/timelinedata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

interface TimelineProps {}

const Timeline: React.FC<TimelineProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Pages-Timeline" />

            <Pageheader title="Pages" currentpage="Timeline" activepage="Timeline" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row className="justify-content-center">
                <Col xxl={11}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header>
                            <Card.Title>
                                Timeline 01
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" pt-5">
                            <div className="timeline container">
                                <Row>
                                    <Col xl={12}>
                                        <div className="timeline-container">
                                            <div className="timeline-continue pt-0">
                                                {TimelineData.map((entry, index) => (
                                                    <div className={`timeline-right`} key={index}>
                                                        <div className="timeline-content">
                                                            <div
                                                                className={`d-flex gap-2 justify-content-between p-2 bg-light mb-3 flex-wrap rounded align-items-start bg-${entry.backgroundColor}-transparent`}
                                                            >
                                                                <div className="timeline-end">
                                                                    <span className={`p-1 fs-11 bg-${entry.backgroundColor} text-fixed-white text-center rounded-1 lh-1 fw-medium`}>
                                                                        {entry.date}
                                                                    </span>
                                                                </div>
                                                                <p className="timeline-date text-muted mb-0">{entry.time}</p>
                                                            </div>
                                                            <div className="timeline-box">
                                                                <p className="text-muted mb-2">
                                                                    <span className="text-default">
                                                                        <b>{entry.name}</b> {entry.action}{' '}
                                                                        <Link scroll={false} href="#!" className="text-success fw-medium text-decoration-underline">{entry.username}</Link>
                                                                        {entry.posts}
                                                                    </span>
                                                                </p>
                                                                <p className="text-muted mb-0">{entry.description}</p>
                                                                {entry.media && (
                                                                    <p className="profile-activity-media mb-0">
                                                                        {entry.media.map((imgSrc, idx) => (
                                                                            <Link scroll={false} href="#!" key={idx}>
                                                                                <Image width={64} height={48} src={imgSrc} alt={`media ${idx + 1}`} className="mb-0 img-fluid rounded-3" />
                                                                            </Link>
                                                                        ))}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row className="justify-content-center timeline-2">
                <Col xxl={11}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Timeline 02
                            </Card.Title>
                        </Card.Header>
                        <ul className="notification container px-3">
                            <li>
                                <Row>
                                    <Col xl={6}>
                                        <div className="notification-body">
                                            <div className="d-flex align-items-start gap-3 flex-wrap">
                                                <div className="avatar avatar-xl bg-primary bg-opacity-25 avatar-rounded">
                                                    <span className="avatar avatar-lg online avatar-rounded">
                                                        <Image width={48} height={48} src="../../assets/images/faces/2.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill w-50">
                                                    <h5 className="mb-1 fs-15 fw-bold">Initial Planning</h5>
                                                    <p className="mb-0 text-muted">
                                                        Created the <Link href="#!" scroll={false} className="text-info fw-medium">product roadmap</Link> with clear milestones for each stage.
                                                        <span className="fw-medium">Team Roles Assigned:</span> Allocated responsibilities to team.
                                                    </p>
                                                </div>
                                                <div>
                                                    <span className="badge bg-primary-transparent">Tuesday</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className="notification-time d-flex align-items-center gap-2 d-inline-flex p-1 bg-primary rounded-pill text-fixed-white op-8 px-2">
                                            <span className="date">12 April, 2024</span>
                                            <span className="time">10:00 AM</span>
                                        </div>
                                        <div className="notification-icon">
                                            <Link href="#!" scroll={false}></Link>
                                        </div>
                                    </Col>
                                </Row>
                            </li>
                            <li>
                                <Row>
                                    <Col xl={6} className="text-end">
                                        <div className="notification-time d-flex align-items-center gap-2 d-inline-flex p-1 bg-secondary rounded-pill text-fixed-white op-8 px-2 content-end">
                                            <span className="date">25 April, 2024</span>
                                            <span className="time">02:30 PM</span>
                                        </div>
                                        <div className="notification-icon">
                                            <Link href="#!" scroll={false} className="secondary"></Link>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className="notification-body notification-body-end secondary">
                                            <div className="d-flex align-items-start gap-3 flex-wrap">
                                                <div className="avatar avatar-xl bg-secondary bg-opacity-25 avatar-rounded">
                                                    <span className="avatar avatar-lg online avatar-rounded">
                                                        <Image width={48} height={48} src="../../assets/images/faces/3.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill w-50">
                                                    <h5 className="mb-1 fs-15 fw-bold">Marketing Strategy</h5>
                                                    <p className="mb-0 fs-13 text-muted">
                                                        <span className="fw-bold text-secondary">Campaigns Designed:</span> Created the <Link href="#!" scroll={false} className="text-secondary1 fw-medium">marketing materials</Link> for online and offline promotions.
                                                    </p>
                                                </div>
                                                <div>
                                                    <span className="badge bg-secondary-transparent">Friday</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </li>
                            <li>
                                <Row>
                                    <Col xl={6}>
                                        <div className="notification-body success">
                                            <div className="d-flex align-items-start gap-3 flex-wrap">
                                                <div className="avatar avatar-xl bg-success bg-opacity-25 avatar-rounded">
                                                    <span className="avatar avatar-lg online avatar-rounded">
                                                        <Image width={48} height={48} src="../../assets/images/faces/4.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill w-50">
                                                    <h5 className="mb-1 fs-15 fw-bold">Product Development</h5>
                                                    <p className="mb-0 text-muted">
                                                        <span className="fw-bold text-success">Final Prototypes:</span> Completed <Link href="#!" scroll={false} className="text-primary fw-medium">product prototypes</Link> and tested key functionalities.
                                                        Incorporated <Link href="#!" className="text-success fw-medium">feedback</Link> from internal testing.
                                                    </p>
                                                </div>
                                                <div>
                                                    <span className="badge bg-success-transparent">Monday</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className="notification-time d-flex align-items-center gap-2 d-inline-flex p-1 bg-success rounded-pill text-fixed-white op-8 px-2">
                                            <span className="date">10 May, 2024</span>
                                            <span className="time">01:45 PM</span>
                                        </div>
                                        <div className="notification-icon">
                                            <Link href="#!" className="success" scroll={false}></Link>
                                        </div>
                                    </Col>
                                </Row>
                            </li>
                            <li>
                                <Row>
                                    <Col xl={6} className="text-end">
                                        <div className="notification-time d-flex align-items-center gap-2 d-inline-flex p-1 bg-info rounded-pill text-fixed-white op-8 px-2 content-end">
                                            <span className="date">22nd Mar, 2024</span>
                                            <span className="time">10:55 PM</span>
                                        </div>
                                        <div className="notification-icon">
                                            <Link href="#!" className="info" scroll={false}></Link>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className="notification-body notification-body-end info">
                                            <div className="d-flex align-items-start gap-3 flex-wrap">
                                                <div className="avatar avatar-xl bg-info bg-opacity-25 avatar-rounded">
                                                    <span className="avatar avatar-lg online avatar-rounded">
                                                        <Image width={48} height={48} src="../../assets/images/faces/15.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill w-50">
                                                    <h5 className="mb-1 fs-15 fw-bold">Preparation and Organization</h5>
                                                    <p className="mb-0 fs-13 text-muted">
                                                        <span className="fw-semibold text-info">Venue Secured:</span> Finalized contracts with vendors.
                                                        <span className="fw-semibold text-success">Marketing:</span> Created event marketing materials and promotional strategies.
                                                    </p>
                                                </div>
                                                <div>
                                                    <span className="badge bg-info-transparent">Wednesday</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </li>
                            <li>
                                <Row>
                                    <Col xl={6}>
                                        <div className="notification-body danger">
                                            <div className="d-flex align-items-start gap-3 flex-wrap">
                                                <div className="avatar avatar-xl bg-danger bg-opacity-25 avatar-rounded">
                                                    <span className="avatar avatar-lg online avatar-rounded">
                                                        <Image width={48} height={48} src="../../assets/images/faces/5.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill w-50">
                                                    <h5 className="mb-1 fs-15 fw-bold text-dark">Pre-Launch Testing</h5>
                                                    <p className="mb-0 text-muted">
                                                        <span className="fw-bold text-success">Beta Version Released:</span> Released the <Link href="#!" scroll={false} className="text-success fw-medium">beta version</Link> to select users for feedback.
                                                        <span className="fw-bold">Bug Fixes:</span> Collected <Link href="#!" scroll={false} className="text-success fw-medium">user feedback</Link> and implemented fixes before launch.
                                                    </p>
                                                </div>
                                                <div>
                                                    <span className="badge bg-danger-transparent">Wednesday</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className="notification-time d-flex align-items-center gap-2 d-inline-flex p-1 bg-danger rounded-pill text-fixed-white op-8 px-2">
                                            <span className="date">22 May, 2024</span>
                                            <span className="time">03:20 PM</span>
                                        </div>
                                        <div className="notification-icon">
                                            <Link href="#!" scroll={false} className="danger"></Link>
                                        </div>
                                    </Col>
                                </Row>
                            </li>
                            <li>
                                <Row>
                                    <Col xl={6} className="text-end">
                                        <div className="notification-time d-flex align-items-center gap-2 d-inline-flex p-1 bg-warning rounded-pill text-fixed-white op-8 px-2 content-end">
                                            <span className="date">10 June, 2024</span>
                                            <span className="time">11:00 AM</span>
                                        </div>
                                        <div className="notification-icon">
                                            <Link href="#!" scroll={false} className="warning"></Link>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className="notification-body notification-body-end warning">
                                            <div className="d-flex align-items-start gap-3 flex-wrap">
                                                <div className="avatar avatar-xl bg-warning bg-opacity-25 avatar-rounded">
                                                    <span className="avatar avatar-lg online avatar-rounded">
                                                        <Image width={48} height={48} src="../../assets/images/faces/6.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill w-50">
                                                    <h5 className="mb-1 fs-15 fw-bold text-dark">Launch Day</h5>
                                                    <p className="mb-0 fs-13 text-muted">
                                                        <span className="fw-bold text-warning">Product Launched:</span> Officially <Link href="#!" scroll={false} className="text-info fw-medium">launched the product</Link> in the market with a successful virtual event.
                                                        <span className="fw-bold">Media Coverage:</span> Engaged with <Link href="#!" scroll={false} className="text-success fw-medium">media outlets</Link> for product reviews and interviews.
                                                    </p>
                                                </div>
                                                <div>
                                                    <span className="badge bg-warning-transparent">Monday</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </li>
                        </ul>
                        <div className="text-center mb-4">
                            <button className="btn btn-success-light btn-loader mx-auto">
                                <span className="me-2">Loading</span>
                                <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                            </button>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row className="justify-content-center timeline-3">
                <Col xxl={11}>
                    <Card className="custom-card bg-transparent shadow-none mt-3">
                        <Card.Header className="border-bottom-0">
                            <Card.Title>Timeline 03</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="timeline-steps">
                                {Timeline03.map((step, index) => (
                                    <div key={index} className="timeline-step">
                                        <div className="timeline-content" data-toggle="popover" data-placement="top" data-content={step.description} data-original-title={step.date}>
                                            <div className="inner-circle"></div>
                                            <Card className="custom-card mb-0 border">
                                                <Card.Body>
                                                    <div className={`p-2 ${step.bgColor} rounded d-flex gap-2 text-start align-items-center mb-2`}>
                                                        <span className="avatar avatar-md avatar-rounded shadow align-middle border bg-white border-opacity-75">
                                                            <Image width={40} height={40} src={step.image} alt={step.name} />
                                                        </span>
                                                        <div className="text-fixed-white">
                                                            <p className="fw-medium fs-12 op-9 mb-0">{step.name}</p>
                                                            <p className="fw-medium fs-11 op-6 mb-0">{step.date}</p>
                                                        </div>
                                                    </div>
                                                    <p className="mb-1 fw-semibold">{step.stepTitle}</p>
                                                    <p className="text-muted fw-normal mb-0">
                                                        {step.description}{" "}
                                                        <Link scroll={false} href={step.linkHref} className="text-primary fs-11 fw-medium">
                                                            {step.linkText}
                                                        </Link>
                                                    </p>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}
        </Fragment>
    );
};

export default Timeline;