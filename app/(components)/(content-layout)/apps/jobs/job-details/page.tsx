"use client"

import SpkJobdetailscard from "@/shared/@spk-reusable-components/reusable-apps/spk-jobdetailscard";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { JobData } from "@/shared/data/apps/jobs/jobdetailsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import SimpleBar from "simplebar-react";

interface JobDetailsProps {}

const JobDetails: React.FC<JobDetailsProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-Job Details" />

            <Pageheader title="Apps" currentpage="Job Details" activepage="Job Details" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Body>
                            <div className="d-flex gap-3 flex-wrap">
                                <div className="adds-card rounded-3 overflow-hidden flex-shrink-0">
                                    <Image fill src="../../../assets/images/media/media-88.jpg" alt="" className="img-fluid" />
                                </div>
                                <div className="flex-fill">
                                    <div className="d-flex flex-wrap align-items-top justify-content-between gap-2">
                                        <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="#!" className="fw-semibold">UX/UI Developer</Link></h5>
                                        <div className="text-end ms-auto">
                                            <Link href="#!" className="btn mb-0 btn-primary btn-w-lg btn-sm me-1"> Apply Now</Link>
                                            <Link href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Save" className="btn btn-sm mb-0 btn-icon btn-success btn-wave me-1">
                                                <i className="ri-bookmark-line"></i>
                                            </Link>
                                            <Link href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Share" className="btn btn-sm mb-0 btn-icon btn-info btn-wave me-0">
                                                <i className="ri-share-line"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-3 align-items-start gap-2 flex-wrap">
                                        <div className="avatar avatar-xl bg-secondary-transparent avatar-rounded border border-secondary border-opacity-10 flex-shrink-0">
                                            <Image width={64} height={64} src="../../../assets/images/company-logos/3.png" alt="" />
                                        </div>
                                        <div>
                                            <h6 className="mb-2">Info. Techz Company <i className="bi bi-patch-check-fill text-success align-middle lh-1"></i></h6>
                                            <span className="badge rounded-pill me-1 bg-light text-default fs-11 border">Expert</span>
                                            <span className="badge rounded-pill me-1 bg-light text-default fs-11 border">Freelancer</span>
                                            <span className="badge rounded-pill bg-light text-default fs-11 border">$15K-$20K</span>
                                            <div className="popular-tags mt-3 d-flex gap-1 flex-wrap">
                                                <span className="badge rounded-pill bg-info fs-11"><i className="ti ti-clock-hour-8 me-1"></i>Full Time</span>
                                                <span className="badge rounded-pill bg-secondary fs-11"><i className="ti ti-briefcase me-1"></i>8 Openings</span>
                                                <span className="badge rounded-pill bg-success fs-11"><i className="ti ti-building-skyscraper me-1"></i>Onsite</span>
                                            </div>
                                        </div>
                                        <div className="ms-auto align-self-end text-end">
                                            <span className="ms-3 fw-medium"><i className="ri-pushpin-fill text-danger fs-15"></i> Location: <Link href="#!" className="fw-normal">Los Angeles, CA. </Link></span>
                                            <span className="ms-3 fw-medium"><i className="ri-global-fill text-info fs-15 me-1 d-inline-block"></i>Website: <Link href="#!" className="text-decoration-underline text-info fw-normal">www.infotechzcompy.com </Link></span>
                                            <p className="mb-0 mt-3"><i className="bi bi-info-circle text-warning fw-semibold" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="20 days left"></i> <span className="fw-medium">20 days</span> remaining to apply for this job.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="job-details">
                                <div className="fs-15 fw-medium mb-2">Job Description:</div>
                                <p className="text-muted mb-4">
                                    We are seeking a skilled UI Developer to join our dynamic team. The ideal candidate will play a crucial role in designing and implementing user interfaces for our web applications. This role requires a deep understanding of user-centered design principles and the ability to translate complex business requirements into intuitive and visually appealing web interfaces.
                                </p>
                                <p className="text-muted mb-4">
                                    As a UI Developer, you will work closely with our design and development teams to create responsive and interactive user interfaces. You will be responsible for ensuring that the web applications meet high standards of usability and performance. Your work will involve not only implementing designs but also iterating on them based on user feedback and usability testing.
                                </p>
                                <p className="text-muted mb-4">
                                    The successful candidate will have experience with modern frontend technologies, including HTML, CSS, JavaScript, and popular frameworks like React or Angular. You should also be familiar with version control systems and best practices for web development. Strong problem-solving skills and a keen eye for detail are essential for this role.
                                </p>
                                <p className="text-muted mb-4">
                                    If you are passionate about creating exceptional user experiences and thrive in a collaborative environment, we would love to hear from you. Join us and contribute to building innovative web applications that make a difference.
                                </p>
                                <Row className=" mb-4">
                                    <Col xl={6}>
                                        <div className="fs-15 fw-medium mb-2">Key Responsibilities:</div>
                                        <ul className="job-details-responsibilities mb-0 list-unstyled">
                                            <li className="mb-3"> <i className="ri-speed-fill fs-13 text-muted me-2"></i>Develop and implement UI components using modern frontend technologies.</li>
                                            <li className="mb-3"> <i className="ri-speed-fill fs-13 text-muted me-2"></i>Collaborate with designers to translate wireframes and mockups into functional web interfaces.</li>
                                            <li className="mb-3"> <i className="ri-speed-fill fs-13 text-muted me-2"></i>Optimize web pages for maximum speed and scalability.</li>
                                            <li className="mb-3"> <i className="ri-speed-fill fs-13 text-muted me-2"></i>Conduct user research and usability testing to refine and enhance user interfaces.</li>
                                            <li> <i className="ri-speed-fill fs-13 text-muted me-2"></i>Ensure cross-browser compatibility and mobile responsiveness.</li>
                                        </ul>
                                    </Col>
                                    <Col xl={6}>
                                        <div className="fs-15 fw-medium mb-2">Qualifications:</div>
                                        <ul className="list-group mb-0 list-group-flush">
                                            <li className="list-group-item border-0 pb-1"><i className="ri-graduation-cap-fill fs-15 text-primary me-2"></i>Bachelor's degree in Computer Science or a related field.</li>
                                            <li className="list-group-item border-0 pb-1"><i className="ri-code-fill fs-15 text-danger me-2"></i>Proficiency in HTML, CSS, JavaScript, and modern frameworks (e.g., React, Angular).</li>
                                            <li className="list-group-item border-0 pb-1"><i className="ri-git-branch-fill fs-15 text-success me-2"></i>Experience with version control systems (e.g., Git).</li>
                                            <li className="list-group-item border-0"><i className="ri-lightbulb-fill fs-15 text-secondary me-2"></i>Strong problem-solving skills and attention to detail.</li>
                                        </ul>
                                    </Col>
                                </Row>
                                <div className="d-flex align-items-center">
                                    <div className="flex-fill w-50">
                                        <span className="fw-medium d-block mb-1">Application Deadline:</span>
                                        <span className="d-block mb-0 text-muted fs-12">20 days remaining to apply.</span>
                                    </div>
                                    <div className="btn-list ms-auto">
                                        <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-sm btn-wave waves-effect waves-light">
                                            Apply Now <i className="ri-file-download-line ms-1"></i>
                                        </SpkButton>
                                        <SpkButton Buttontype="button" Buttonvariant="secondary-light" Customclass="btn-sm btn-wave waves-effect waves-light">
                                            More Details <i className="ri-eye-line ms-1"></i>
                                        </SpkButton>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card career-card">
                        <Card.Body>
                            <Row className=" align-items-center">
                                <Col lg={6} className="">
                                    <h5 className="fw-semibold mb-3 text-fixed-white">Find Your Next Career Opportunities</h5>
                                    <span className="text-muted mb-0 fs-14 text-fixed-white op-5">Find exciting job opportunities that match your skills and interests. Join us to make a difference!</span>
                                </Col>
                                <Col lg={6} className=" text-end">
                                    <Link href="#!" scroll={false} className="btn btn-success btn-lg" role="button">
                                        <i className="ri-search-line me-2 align-middle d-inline-block"></i>Browse Jobs
                                    </Link>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <div className="mb-1">
                        <h6 className="fw-medium mb-3">Similar Jobs</h6>
                        <SimpleBar id="similar-jobs" className="">
                            {JobData.map((idx, index) => (
                                <SpkJobdetailscard key={index} job={idx} />
                            ))}
                            <div className="btn btn-primary mb-3 d-grid">Load More Jobs</div>
                        </SimpleBar>
                    </div>
                    <Card className="custom-card mt-3">
                        <Card.Body>
                            <h6 className="fw-medium mb-3">Get Notified About New Job Opportunities</h6>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Enter your email address" aria-label="job-email" aria-describedby="job-subscribe" />
                                <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="">
                                    Sign Up
                                </SpkButton>
                            </div>
                            <label className="form-check-label fs-13">
                                By signing up, you agree to our <Link href="#!" scroll={false} className="text-success"><u>Terms of Service</u></Link>.
                            </label>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-1 --> */}
        </Fragment>
    );
};

export default JobDetails;