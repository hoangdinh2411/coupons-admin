"use client"

import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { AllShared, ProjectMessages, TeamData, TimelineData } from "@/shared/data/apps/projects/projectoverviewdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Nav, ProgressBar, Row, Tab } from "react-bootstrap";

interface ProjectOverviewProps {}

const ProjectOverview: React.FC<ProjectOverviewProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-Project Overview" />

            <Pageheader title="Apps" currentpage="Project Overview" activepage="Project Overview" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={8}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex gap-2 justify-content-between mb-3 flex-wrap">
                                <h6 className="mb-0 fw-semibold">Website Redesign</h6>
                                <div className="btn btn-primary btn-sm btn-wave"> <i className="fe fe-edit lh-1 me-1"></i> Edit Project</div>
                            </div>
                            <Row className="justify-content-between">
                                <Col xl={12}>
                                    <p><span className="text-muted fw-medium">Project Title:</span> Website Redesign</p>
                                    <p><span className="text-muted fw-medium">Synopsis:</span> This project involves redesigning the company website to enhance user experience and improve functionality.</p>
                                    <div className="mb-3">
                                        <span className="text-muted fw-medium">Tags : </span>
                                        <span className="badge rounded-pill bg-primary me-1">Design</span>
                                        <span className="badge rounded-pill bg-success me-1">Development</span>
                                        <span className="badge rounded-pill bg-info me-1">UX</span>
                                    </div>
                                    <Row className="gy-3 gy-xl-0">
                                        <Col xl={5}>
                                            <p><span className="text-muted fw-medium">Lastupdated Date :</span> 22 Sep, 2024</p>
                                            <div className="d-flex gap-2 align-items-center">
                                                <span className="text-muted fw-medium">Team:</span>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded align-center">
                                                        <Image height={28} width={28} src="../../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded align-center">
                                                        <Image height={28} width={28} src="../../../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded align-center">
                                                        <Image height={28} width={28} src="../../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded align-center">
                                                        <Image height={28} width={28} src="../../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={4}>
                                            <div className="d-flex gap-2 align-items-center mb-2">
                                                <span className="text-muted fw-medium">Created By:</span>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <span className="avatar avatar-sm avatar-rounded align-center">
                                                        <Image width={28} height={28} src="../../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span>Sonia Loe</span>
                                                </div>
                                            </div>
                                            <p className="mb-0"><span className="text-muted fw-medium">Total Tasks :</span> 84 Tasks (25 pending)</p>
                                        </Col>
                                        <Col xl={3}>
                                            <p className="mb-2"><span className="text-muted fw-medium">Priority :</span> <span className="badge bg-danger">High</span></p>
                                            <p className="mb-0"><span className="text-muted fw-medium">Created Date :</span> 05 Sep, 2024</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="border border-dashed">
                            <Row className="mx-0 rounded align-items-center">
                                <Col xl={5}>
                                    <p className="text-dark mb-1"><span className="text-muted fw-medium">Status:</span> <span className="badge bg-pink me-1 fs-11">Active</span></p>
                                    <p className="mb-0 fs-12"><span className="text-muted fw-medium">Total Tasks :</span> 84 Tasks (25 pending)</p>
                                </Col>
                                <Col xl={7}>
                                    <div className="d-flex align-items-center gap-3">
                                        <ProgressBar className="progress w-100 bg-info bg-opacity-25 progress-lg" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                            <ProgressBar className="progress-bar progress-bar-striped progress-bar-animated bg-info" now={75} ></ProgressBar>
                                        </ProgressBar>
                                        <div className="fw-medium text-dark text-nowrap fs-12">75% Completed</div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body className="border-bottom border-top border-block-start-dashed border-block-end-dashed">
                            <div className="d-flex gap-2 justify-content-between mb-3">
                                <h6 className="mb-0 fw-semibold">Highlights :</h6>
                            </div>
                            <Row className="gy-3 gy-xl-0">
                                <Col xl={6}>
                                    <Card className="custom-card border border-success border-opacity-10 mb-0 shadow-none overflow-hidden">
                                        <div className="d-flex gap-2 p-3 bg-success-transparent align-items-center">
                                            <h6 className="text-success mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 26 26"><g fill="currentColor"><path d="M26 14c0 6.627-5.373 12-12 12S2 20.627 2 14S7.373 2 14 2s12 5.373 12 12" opacity="0.2" /><path d="M9.5 9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" /><path fillRule="evenodd" d="M10.5 9.5A.5.5 0 0 1 11 9h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5" clipRule="evenodd" /><path fillRule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clipRule="evenodd" /></g></svg> Project Needs
                                            </h6>
                                            <div className="ms-auto">
                                                <Link href="#!" className="text-success"><i className="ri-edit-2-line me-1"></i>Edit</Link>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <ul className="task-details-key-tasks mb-0">
                                                <li className="fs-11"> User Experience (UX) Improvement: Enhance usability.</li>
                                                <li className="fs-11"> Visual Refresh: Modernize design to align with branding.</li>
                                                <li className="fs-11"> Performance Enhancement: Optimize speed and functionality.</li>
                                                <li className="fs-11"> Content Update: Revise content for relevance and readability.</li>
                                                <li className="fs-11"> SEO Optimization: Implement strategies for better search rankings.</li>
                                                <li className="fs-11"> Accessibility Compliance: Meet accessibility standards.</li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={6}>
                                    <Card className="custom-card border border-danger border-opacity-10 mb-0 shadow-none overflow-hidden">
                                        <div className="d-flex gap-2 p-3 bg-danger-transparent align-items-center">
                                            <h6 className="text-danger mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 26 26"><g fill="currentColor"><path d="M26 14c0 6.627-5.373 12-12 12S2 20.627 2 14S7.373 2 14 2s12 5.373 12 12" opacity="0.2" /><path fillRule="evenodd" d="M9.175 5.5a.5.5 0 0 1 .5-.5h6.643a.5.5 0 0 1 .5.5v3.875a.5.5 0 0 1-.5.5H9.675a.5.5 0 0 1-.5-.5zm1 .5v2.875h5.643V6z" clipRule="evenodd" /><path d="M7.5 8v12h11V8h-2V7h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2v1z" /><path fillRule="evenodd" d="M15.284 12.088a.5.5 0 0 1 .128.696l-1.767 2.564a1 1 0 0 1-1.437.222l-1.515-1.175a.5.5 0 1 1 .614-.79l1.514 1.175l1.767-2.564a.5.5 0 0 1 .696-.128" clipRule="evenodd" /><path fillRule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clipRule="evenodd" /></g></svg> Project Objectives
                                            </h6>
                                            <div className="ms-auto">
                                                <Link href="#!" className="text-danger"><i className="ri-edit-2-line me-1"></i>Edit</Link>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <ul className="task-details-key-tasks mb-0">
                                                <li> Enhance User Engagement: Increase interaction and conversion rates.</li>
                                                <li> Modernize Brand Presence: Reflect updated brand identity.</li>
                                                <li> Improve Website Performance: Achieve faster load times.</li>
                                                <li> Increase Organic Traffic: Boost search engine rankings.</li>
                                                <li> Ensure Accessibility: Make the site accessible to all users.</li>
                                                <li> Maintain Security: Protect user data and ensure cybersecurity.</li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Body>
                            <div className="d-flex gap-2 justify-content-between mb-3">
                                <h6 className="mb-0 fw-semibold">Activity :</h6>
                            </div>
                            <Tab.Container defaultActiveKey="1">
                                <Nav as="ul" className="nav-tabs tab-style-1 d-sm-flex d-block bg-primary-transparent mb-0 rounded-bottom-0" role="tablist">
                                    <Nav.Item as="li">
                                        <Nav.Link as="a" eventKey="1" data-bs-toggle="tab" data-bs-target="#recent-acivity" aria-current="page" href="#recent-acivity">Recent Acivity</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link as="a" eventKey="2" data-bs-toggle="tab" data-bs-target="#allfiles" href="#allfiles">All Shared Files</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="1" className="p-0 rounded-top-0" id="recent-acivity" role="tabpanel">
                                        <ul className="list-unstyled profile-timeline pt-3 pe-3 pb-3">
                                            {TimelineData.map((event) => (
                                                <li key={event.id}>
                                                    <div>
                                                        <span className={`avatar avatar-sm shadow-sm ${event.avatarBg} avatar-rounded profile-timeline-avatar`}>
                                                            {event.avatar}
                                                        </span>
                                                        <div className="mb-2 d-flex align-items-start gap-2 flex-wrap flex-xxl-nowrap">
                                                            <div>
                                                                <span className="fw-medium">{event.title}</span>
                                                            </div>
                                                            <span className="ms-auto bg-light text-muted badge">{event.date}</span>
                                                        </div>
                                                        <p className="text-muted mb-0">
                                                            {event.description} {event.link && <Link scroll={false} className="text-pink" href={event.link}>View Details Here</Link>}
                                                        </p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="2" className="p-0 rounded-top-0" id="allfiles" role="tabpanel">
                                        <ul className="list-group list-group-flush">
                                            {AllShared.map((file) => (
                                                <li key={file.id} className="list-group-item">
                                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                                        <span className={`avatar avatar-sm ${file.avatarColor} lh-1`}>
                                                            <Image height={28} width={28} src={file.avatarImg} alt={file.fileName} />
                                                        </span>
                                                        <div className="flex-fill">
                                                            <Link href={file.fileLink} scroll={false}>
                                                                <span className="d-block fw-medium">{file.fileName}</span>
                                                            </Link>
                                                            <span className="d-block text-muted fs-12 fw-normal">{file.fileSize}</span>
                                                        </div>
                                                        <div className="btn-list">
                                                            <SpkButton
                                                                Buttontype="button"
                                                                Buttonvariant="info-light"
                                                                Customclass="btn-sm btn-icon btn-wave waves-effect waves-light"
                                                            >
                                                                <i className="ri-edit-line"></i>
                                                            </SpkButton>
                                                            <SpkButton
                                                                Buttontype="button"
                                                                Buttonvariant="danger-light"
                                                                Customclass="btn-sm btn-icon btn-wave waves-effect waves-light"
                                                            >
                                                                <i className="ri-delete-bin-line"></i>
                                                            </SpkButton>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-xxl-4">
                    <Card className="custom-card justify-content-between">
                        <Card.Header className="">
                            <Card.Title>Project Messages</Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <ul className="list-unstyled mb-0">
                                {ProjectMessages.map((item) => (
                                    <li key={item.id} className={`${item.liClass} ${item.id % 2 === 0 ? '' : 'bg-light'} p-3`}>
                                        <div className="d-flex gap-2 flex-wrap">
                                            <span className={`avatar avatar-sm shadow-sm ${item.avatarColor} avatar-rounded flex-shrink-0`}>
                                                <Image width={28} height={28} src={item.avatarImg} alt={item.title} />
                                            </span>
                                            <div className="flex-grow-1">
                                                <div className="d-flex align-items-start gap-2 mb-2 flex-wrap">
                                                    <div className="fw-medium">
                                                        <div className="text-truncate mb-1">{item.title}</div>
                                                        <span className={`${item.avatarColor}-transparent badge`}>{item.timestamp}</span>
                                                    </div>
                                                    <span className="ms-auto fs-12 text-nowrap">{item.timeAgo}</span>
                                                </div>
                                                <p className="text-muted mb-0 fs-12">{item.description}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-sm-flex align-items-center lh-1">
                                <div className="me-sm-2 mb-2 mb-sm-0 rounded-circle bg-primary-transparent d-inline-block">
                                    <Image width={40} height={40} src="../../../assets/images/faces/5.jpg" alt="" className="avatar avatar-md avatar-rounded p-1 bg-primary-transparent" />
                                </div>
                                <div className="flex-fill">
                                    <div className="input-group flex-nowrap">
                                        <input type="text" className="form-control w-sm-50 border shadow-none" placeholder="Share your thoughts" aria-label="Recipient's username with two button addons" />
                                        <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-wave waves-effect waves-light">
                                            <i className="bi bi-emoji-smile"></i>
                                        </SpkButton>
                                        <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-wave waves-effect waves-light">
                                            <i className="bi bi-paperclip"></i>
                                        </SpkButton>
                                        <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-wave waves-effect waves-light">
                                            <i className="bi bi-camera"></i>
                                        </SpkButton>
                                        <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-wave waves-effect waves-light text-nowrap">
                                            Post
                                        </SpkButton>
                                    </div>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Team</Card.Title>
                            <div className="ms-auto">
                                <div className="badge bg-info rounded-pill ms-auto">4 People</div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {TeamData.map((member) => (
                                <div key={member.id} className="mb-3">
                                    <div className="d-flex gap-2 align-items-center">
                                        <span className="avatar avatar-md shadow-sm bg-primary avatar-rounded flex-shrink-0">
                                            <Image width={40} height={40} src={member.imageSrc} alt={member.name} />
                                        </span>
                                        <div className="flex-grow-1">
                                            <div className="d-flex align-items-start gap-2">
                                                <div className="fw-medium">
                                                    <div className="text-truncate mb-0">{member.name}</div>
                                                    <span className="text-muted fs-12">{member.role}</span>
                                                </div>
                                                <SpkButton Buttontype="button" Buttonvariant="success-light" Customclass="btn-icon rounded-circle ms-auto">
                                                    <i className="ri-mail-line lh-1 align-middle"></i>
                                                </SpkButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="btn btn-primary-light w-100">Invite New Member</div>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default ProjectOverview;