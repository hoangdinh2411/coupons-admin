import Image from 'next/image';
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

interface Company {
    imgSrc?: string | any;
    title?: string;
    job?: string;
    location?: string;
    vacancies?: number;
    salary?: string;
    type?: string;
    badges?: any;
    language?: string;
    qualification?: string;
    experience?: string;
    time?: string;
}

interface SpkCompanyCardProps {
    company: Company;
    carClass?: string;
    bodyClass?: string;
    showCompany?: boolean;
    showCandidate?: boolean;
}

const SpkCompanycard: React.FC<SpkCompanyCardProps> = ({ company, carClass, bodyClass, showCandidate, showCompany }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${carClass}`}>
                <Card.Body className={bodyClass}>
                    <div className="float-end d-flex gap-2 align-items-center flex-wrap">
                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-success-light">
                            <i className="ri-eye-line fs-13 lh-1 align-middle"></i>
                        </Link>
                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-danger-light">
                            <i className="ri-bookmark-line fs-13 lh-1 align-middle"></i>
                        </Link>
                    </div>
                    <div className="d-flex align-items-start flex-wrap gap-2 mb-2">
                        <span className="avatar avatar-lg bg-light shadow-sm border border-primary border-opacity-10 p-1 avatar-rounded">
                            <Image width={48} height={48} src={company.imgSrc} alt="" />
                        </span>
                        <div className="ms-2">
                            <h6 className="fw-medium mb-1 d-flex align-items-center">
                                {company.title}
                                <i className="bi bi-patch-check-fill text-success align-middle lh-1 mx-1" data-bs-toggle="tooltip" title="Verified"></i>
                            </h6>
                            <div className="d-flex gap-2 align-items-center">
                                <div className="fw-medium fs-12">
                                    <i className="ri-briefcase-line text-muted fs-13"></i> Job:
                                    <span className="fw-normal">   {company.job}</span>
                                </div>
                                <div className="popular-tags d-flex gap-1 flex-wrap flex-xxl-nowrap">
                                    {company.badges}
                                </div>
                            </div>
                        </div>
                    </div>
                    {showCompany &&
                        <Row className=" gy-3 gy-xxl-0">
                            <Col xl={5}>
                                <div className="fw-medium mb-1">
                                    <i className="ri-pushpin-line text-danger fs-15"></i> Location : <span className="fw-normal">{company.location}</span>
                                </div>
                                <div className="fw-medium">
                                    <i className="ri-group-2-line text-primary fs-15"></i> Vacancies : <span className="fw-normal">{company.vacancies}</span>
                                </div>
                            </Col>
                            <Col xl={5}>
                                <div className="fw-medium mb-1">
                                    <i className="ri-wallet-3-line text-info fs-15"></i> Salary : <span className="fw-normal">{company.salary}</span>
                                </div>
                                <div className="fw-medium">
                                    <i className="ri-time-line text-success fs-15"></i> Type : <span className="fw-normal">{company.type}</span>
                                </div>
                            </Col>
                            <Col xxl={2} className=" align-self-end">
                                <Link scroll={false} href="#!" className="btn-sm btn btn-wave btn-primary float-end w-100">
                                    Apply Now <i className="ri-arrow-right-line align-middle"></i>
                                </Link>
                            </Col>
                        </Row>
                    }

                    {showCandidate &&
                        <Row className=" gy-3 gy-xxl-0">
                            <Col xxl={3} xl={4} >
                                <div className="fw-medium mb-1">
                                    <i className="ri-map-pin-line text-danger fs-15"></i> Location:
                                    <span className="fw-normal">  {company.location}</span>
                                </div>
                                <div className="fw-medium">
                                    <i className="ri-book-open-line text-primary fs-15"></i> Qualification:
                                    <span className="fw-normal">  {company.qualification}</span>
                                </div>
                            </Col>
                            <Col xxl={3} xl={4} >
                                <div className="fw-medium mb-1">
                                    <i className="ri-wallet-3-line text-info fs-15"></i> Expected Salary:
                                    <span className="fw-normal">  {company.salary}</span>
                                </div>
                                <div className="fw-medium">
                                    <i className="ri-time-line text-pink fs-15"></i> Employment Type:
                                    <span className="fw-normal">  {company.type}</span>
                                </div>
                            </Col>
                            <Col xxl={3} xl={4} >
                                <div className="fw-medium mb-1">
                                    <i className="ri-global-line text-warning fs-15"></i> Known Languages:
                                    <span className="fw-normal">  {company.language}</span>
                                </div>
                                <div className="fw-medium">
                                    <i className="ri-briefcase-3-line text-success fs-15"></i> Experience:
                                    <span className="fw-normal">  {company.experience}</span>
                                </div>
                            </Col>
                            <Col xxl={3} className=" align-self-end">
                                <Link href="#!" scroll={false} className="btn btn-primary btn-sm w-100">
                                    <i className="ri-download-cloud-line fs-14 me-2 d-inline-block"></i>
                                    Download Resume
                                </Link>
                            </Col>
                        </Row>
                    }
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkCompanycard
