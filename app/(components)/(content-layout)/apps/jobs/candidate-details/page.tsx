"use client"
import SpkDetailsCard from "@/shared/@spk-reusable-components/reusable-apps/spk-detailscard";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { ProfileData } from "@/shared/data/apps/jobs/candidatedetailsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import SimpleBar from "simplebar-react";

interface CandidateDetailsProps {}

const CandidateDetails: React.FC<CandidateDetailsProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-Candidate Details" />

            <Pageheader title="Apps" currentpage="Candidate Details" activepage="Candidate Details" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={8}>
                    <Card className=" custom-card job-candidate-details">
                        <Card.Body className=" border-bottom">
                            <div className="d-flex gap-2 flex-xl-nowrap flex-wrap">
                                <div className="lh-1 flex-shrink-0">
                                    <span className="avatar avatar-xxl avatar-rounded">
                                        <Image width={80} height={80} src="../../../assets/images/faces/1.jpg" className="rounded-circle img-fluid" alt="" />
                                    </span>
                                </div>
                                <div className="d-flex gap-2 flex-xl-nowrap flex-wrap mb-3 flex-grow-1">
                                    <div className="flex-fill">
                                        <h6 className="mb-1 fw-semibold"><Link href="#!" scroll={false}> Annika  <SpkTooltips placement="top" title="Verified candidate">
                                            <i className="bi bi-patch-check-fill text-success align-middle lh-1 mx-1"></i>
                                        </SpkTooltips> </Link></h6>
                                        <p className="mb-0 text-muted">Web Designer</p>
                                        <div className="d-flex flex-wrap gap-2 align-items-center fs-12 text-muted">
                                            <p className="mb-0">Ratings : </p>
                                            <div className="min-w-fit-content ms-2">
                                                <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                <span className="text-warning"><i className="ri-star-fill me-1"></i></span>
                                                <span className="text-warning"><i className="ri-star-half-fill"></i></span>
                                            </div>
                                            <Link href="#!" className="ms-1 min-w-fit-content text-muted">
                                                <span>(245)  </span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="btn-list ms-auto">
                                        <Link href="#!" scroll={false} className="btn btn-primary btn-wave waves-effect"><i className="ri-download-cloud-line me-1"></i> Download CV</Link>
                                        <Link href="#!" scroll={false} className="btn btn-success-light btn-icon btn-wave waves-effect waves-light align-middle">
                                            <i className="ri-bookmark-line lh-1 my-auto align-middle"></i>
                                        </Link>
                                        <Link href="#!" scroll={false} className="btn btn-icon btn-danger-light btn-wave waves-effect waves-light align-middle me-0">
                                            <i className="ri-share-line my-auto align-middle"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex fs-14 mt-3 mb-2 gap-4 flex-wrap">
                                <div className="fw-medium">
                                    <i className="ri-briefcase-line text-success fs-15"></i> Current: <span className="fw-normal">InnovaTech Solutions</span>
                                </div>
                                <div className="fw-medium">
                                    <i className="ri-map-pin-line text-danger fs-15"></i> Location:
                                    <span className="fw-normal">Silicon Valley, CA</span>
                                </div>
                                <div className="fw-medium">
                                    <i className="ri-briefcase-3-line text-secondary fs-15"></i> Experience:
                                    <span className="fw-normal">3 Years</span>
                                </div>
                                <div className="fw-medium">
                                    <i className="ri-money-rupee-circle-line text-info fs-15"></i> Annual Pay:
                                    <span className="fw-normal">$55,000 - $80,000</span>
                                </div>
                            </div>
                            <div className="d-flex fs-14 gap-3 align-items-center flex-wrap">
                                <div className="fw-medium">
                                    Availability:
                                </div>
                                <div className="popular-tags d-flex gap-1 flex-wrap">
                                    <span className="badge rounded-pill fs-11 bg-info"><i className="ri-remote-control-line me-1"></i>Full Time</span>
                                    <span className="badge rounded-pill fs-11 bg-success"><i className="ri-time-line me-1"></i>Immediate Joinee</span>
                                    <span className="badge rounded-pill fs-11 bg-secondary"><i className="ri-calendar-line me-1"></i>Flexible Schedule</span>
                                </div>
                                <button className="btn btn-info label-btn btn-sm ms-auto">
                                    <i className="ri-phone-line label-btn-icon me-2"></i>
                                    Contact Now
                                </button>
                            </div>
                        </Card.Body>
                        <Card.Body className="">
                            <div className="fw-medium mb-2 fs-14">
                                Skills:
                            </div>
                            <div className="popular-tags d-flex gap-2 flex-wrap">
                                <span className="badge rounded-pill bg-primary-transparent fs-11">JavaScript</span>
                                <span className="badge rounded-pill bg-secondary-transparent fs-11">React</span>
                                <span className="badge rounded-pill bg-success-transparent fs-11">HTML5</span>
                                <span className="badge rounded-pill bg-info-transparent fs-11">CSS3</span>
                                <span className="badge rounded-pill bg-pink-transparent fs-11">Responsive Design</span>
                                <span className="badge rounded-pill bg-warning-transparent fs-11">Node.js</span>
                                <span className="badge rounded-pill bg-primary-transparent fs-11">Git</span>
                                <span className="badge rounded-pill bg-success-transparent fs-11">Webpack</span>
                                <span className="badge rounded-pill bg-danger-transparent fs-11">API Integration</span>
                                <span className="badge rounded-pill bg-info-transparent fs-11">Cross-Browser Compatibility</span>
                            </div>
                        </Card.Body>
                    </Card>
                    <Row>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <Tab.Container defaultActiveKey="1">
                                    <Nav as="ul" className=" nav-tabs tab-style-1 d-sm-flex d-block bg-transparent mb-0 rounded-bottom-0" role="tablist">
                                        <Nav.Item as="li">
                                            <Nav.Link as="a" eventKey="1" data-bs-toggle="tab" data-bs-target="#profile" href="#profile">Profile Info</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Nav.Link as="a" eventKey="2" data-bs-toggle="tab" data-bs-target="#personalinfo" aria-current="page" href="#personalinfo">Personal Info</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="1" className="p-0 rounded-top-0" id="profile" role="tabpanel">
                                            <Card.Body className=" p-0 candidate-edu-timeline">
                                                <div className="p-3 border-bottom">
                                                    <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="ri-briefcase-4-line fs-13"></i></span> Career Objective :</h5>
                                                    <div className="ms-4 ps-3">
                                                        <p className="op-9">Innovative and detail-oriented Web Developer with a strong background in designing and implementing scalable web applications. Adept at using modern technologies and best practices to deliver responsive, high-performance websites and applications.</p>
                                                        <p className="mb-0 op-9">Seeking an exciting opportunity at a forward-thinking company where we can leverage my expertise in web development to build dynamic and user-centric web solutions. Committed to continuous learning and adapting to new technologies to drive success and achieve exceptional results.</p>
                                                    </div>
                                                </div>
                                                <div className="p-3 border-bottom">
                                                    <Row>
                                                        <Col xl={7}>
                                                            <h5 className="fw-medium fs-17 d-flex align-items-center gap-2">
                                                                <span className="avatar avatar-rounded bg-primary avatar-sm"><i className="ri-graduation-cap-line fs-13"></i></span>
                                                                Academic Background :
                                                            </h5>
                                                            <div className="ms-4 ps-3">
                                                                <div className="academic-item mb-3">
                                                                    <p className="fw-medium fs-14 mb-0">Bachelor of Science in Computer Science</p>
                                                                    <p className="text-muted mb-2">2020 Mar - 2024 Apr</p>
                                                                </div>
                                                                <div className="academic-item">
                                                                    <p className="fw-medium fs-14 mb-0">Intermediate (MPC)</p>
                                                                    <p className="text-muted mb-0">2017 Mar - 2020 Apr</p>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xl={5}>
                                                            <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="ri-graduation-cap-line fs-13"></i></span> Certifications :</h5>
                                                            <div className="ms-4 ps-3">
                                                                <p className=""><span className="fs-14 fw-medium">Web Development (3 Mo)</span> - EMC Solutions Pvt Ltd</p>
                                                                <p className="mb-0"><span className="fs-14 fw-medium">Python Development (6 Mo)</span> - Dabre Services Pvt Ltd</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className="p-3">
                                                    <h5 className="fw-medium fs-17 d-flex align-items-center gap-2 mb-3"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="ri-briefcase-4-line fs-13"></i></span> Experience :</h5>
                                                    <div className="ms-4 ps-3">
                                                        <h6 className="fw-medium fs-15 mb-1">Web Developer (2020 Mar - Present)</h6>
                                                        <p className="fw-medium mb-1">TechWave Solutions</p>
                                                        <p className="text-muted mb-3">Kondapur, Delhi</p>
                                                        <p className="fw-medium">Responsibilities:</p>
                                                        <ul className="list-unstyled mb-0">
                                                            <li><i className="ri-checkbox-circle-line text-success fs-14 me-2"></i> Develop and maintain web applications using modern web technologies, including HTML, CSS, and JavaScript frameworks.</li>
                                                            <li><i className="ri-checkbox-circle-line text-success fs-14 me-2"></i> Integrate APIs and third-party services to enhance application functionality.</li>
                                                            <li><i className="ri-checkbox-circle-line text-success fs-14 me-2"></i> Perform code reviews and maintain code quality standards to ensure high performance and reliability of web applications.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="2" className="p-0 rounded-top-0" id="personalinfo" role="tabpanel">
                                            <div className="personal-details p-3">
                                                <Row>
                                                    <div className="col-md-6">
                                                        <p className="mb-2 p-1"><span className="fw-medium fs-14">Full Name:</span> Sarah Williams</p>
                                                        <p className="mb-2 p-1"><span className="fw-medium fs-14">Date of Birth:</span> April 15, 1990</p>
                                                        <p className="mb-2 p-1"><span className="fw-medium fs-14">Gender:</span> Female</p>
                                                        <p className="mb-2 p-1"><span className="fw-medium fs-14">Nationality:</span> American</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p className="mb-2 p-1"><span className="fw-medium fs-14">Contact Number:</span> +1 123-456-7890</p>
                                                        <p className="mb-2 p-1"><span className="fw-medium fs-14">Email:</span> sarah.williams@email.com</p>
                                                        <p className="mb-2 p-1"><span className="fw-medium fs-14">LinkedIn:</span> <Link href="https://www.linkedin.com/in/sarahwilliams" target="_blank">linkedin.com/in/sarahwilliams</Link></p>
                                                        <p className="mb-0 p-1"><span className="fw-medium fs-14">Website:</span> <Link href="https://www.sarahwilliamsdesigns.com" target="_blank">sarahwilliamsdesigns.com</Link></p>
                                                    </div>
                                                </Row>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </Card>
                        </Col>
                    </Row>
                    <Card className=" custom-card">
                        <Card.Body className="">
                            <h6 className="fw-medium mb-3">Get Notified About New Job Opportunities</h6>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Enter Your Email Address" aria-label="job-email" aria-describedby="job-Signup" />
                                <button className="btn btn-primary" type="button" id="job-Signup">Sign Up</button>
                            </div>
                            <label className="form-check-label">
                                By signing up, you accept our <Link href="#!" scroll={false} className="text-success"><u>Terms of Service</u></Link> and <Link href="#!" className="text-success" scroll={false}><u>privacy policy</u></Link>.
                            </label>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <SimpleBar className="" id="related-profiles">
                        <h6 className="fw-medium mb-3">Related Profiles</h6>
                        {ProfileData.map((idx) => (
                            <SpkDetailsCard key={idx.id} cardClass="shadow-none border" details={idx} />
                        ))}
                    </SimpleBar>
                </Col>
            </Row>
            {/* <!-- End::row-1 --> */}
        </Fragment>
    );
};

export default CandidateDetails;