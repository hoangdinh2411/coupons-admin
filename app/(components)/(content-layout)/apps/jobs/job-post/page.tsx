"use client"

import SpkDatepickr from "@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import { Categorydata, Experiencedata, Jobtypedata, Languagesdata, Prioritydata, Qualificationdata, Salarydata, Skilldata, Vacanciesdata } from "@/shared/data/apps/jobs/searchjobdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

interface JobPostProps {}

const JobPost: React.FC<JobPostProps> = () => {

    const [dates, setDates] = useState<{ [key: string]: Date | string | null }>({});
    const handleDateChange = (key: string, date: Date | null) => {
        if (date) {
            setDates((prevDates) => ({
                ...prevDates,
                [key]: date,
            }));
        } else {
            setDates((prevDates) => {
                const { [key]: removedKey, ...rest } = prevDates;
                return rest;
            });
        }
    };

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-Job Post" />

            <Pageheader title="Apps" currentpage="Job Post" activepage="Job Post" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Post New Job
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-0 mt-2">Job Title :</label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" className="" id="job-title" placeholder="Job Title" defaultValue="Web Developer" />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-0 mt-2">Company Name :</label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" className="" id="job-title1" placeholder="Company Name" defaultValue="Techz Info Company" />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-0 mt-2">Job Description :</label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control className="form-control" as="textarea" id="job-description" rows={4} defaultValue={"We are seeking a talented Web Developer to join our team and help build dynamic, user-friendly websites. The ideal candidate will have experience with HTML, CSS, and JavaScript, and a strong understanding of responsive design principles."} />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-0 mt-2">Qualification :</label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect multi name="colors" option={Qualificationdata} mainClass="basic-multi-select" classNameprefix="Select2" defaultvalue={[Qualificationdata[0], Qualificationdata[2], Qualificationdata[3]]} />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-0 mt-2">Work Experience:</label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect name="colors" option={Experiencedata} mainClass="basic-multi-select" classNameprefix="Select2" defaultvalue={[Experiencedata[0]]}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-0 mt-2">Skills :</label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect multi name="colors" option={Skilldata} mainClass="basic-multi-select" classNameprefix="Select2"
                                        defaultvalue={[Skilldata[0], Skilldata[1], Skilldata[2]]} />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-0 mt-2">Job Type :</label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect name="colors" option={Jobtypedata} mainClass="basic-multi-select" classNameprefix="Select2" defaultvalue={[Jobtypedata[0]]}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-0 mt-2">Salary :</label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect option={Salarydata} classNameprefix='Select2' menuplacement='auto' mainClass="multi-select" placeholder="" defaultvalue={[Salarydata[0]]} />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-0 mt-2">Job Location :</label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" className="" id="job-title2" placeholder="Job Location" />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-0 mt-2">Job Deadline :</label>
                                </Col>
                                <Col md={10} className="custom-picker">
                                    <SpkDatepickr className="form-control" selected={dates["basicDate"] ? new Date(dates["basicDate"]) : null} onChange={(date: Date | null) => handleDateChange("basicDate", date)} />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-0 mt-2">Job Category :</label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect name="colors" option={Categorydata} mainClass="basic-multi-select" classNameprefix="Select2" defaultvalue={[Categorydata[0]]}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-0 mt-2">Priority :</label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect option={Prioritydata} classNameprefix='Select2' menuplacement='auto' mainClass="multi-select" placeholder="" defaultvalue={[Prioritydata[0]]} />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-0 mt-2">Vacancies :</label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect name="colors" option={Vacanciesdata} mainClass="basic-multi-select" classNameprefix="Select2" defaultvalue={[Vacanciesdata[0]]}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <label className="form-label mb-0 mt-2">Known Languages :</label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect multi name="colors" option={Languagesdata} mainClass="choices__item choices__item--selectable    " classNameprefix="Select2"
                                        defaultvalue={[Languagesdata[0], Languagesdata[3]]} />
                                </Col>
                            </Row>
                        </Card.Body>
                        <div className="card-footer text-end">
                            <Link href="#!" scroll={false} className="btn btn-primary btn-wave waves-effect waves-light">
                                <i className="bi bi-plus-circle"></i> Post Job
                            </Link>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default JobPost;