"use client"

import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { JobListdata } from "@/shared/data/apps/jobs/joblistdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";

interface JobListProps {}

const JobList: React.FC<JobListProps> = () => {

    const [allData, setAllData] = useState(JobListdata);
    const [selectAll, setSelectAll] = useState(false);

    useEffect(() => {
        setAllData((prevData) =>
            prevData.map((item) => ({
                ...item,
                checked: item.checked || false,
            }))
        );
    }, [JobListdata]);

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setAllData((prevData) =>
            prevData.map((item) => ({
                ...item,
                checked: !selectAll,
            }))
        );
    };

    const handleCheckboxToggle = (id: number) => {
        setAllData((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    const handleRemove = (id: number) => {
        setAllData((prevData) => prevData.filter((item) => item.id !== id));
    };

    useEffect(() => {
        const allChecked = allData.every((item) => item.checked);
        setSelectAll(allChecked);
    }, [allData]);

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-Jobs List" />

            <Pageheader title="Apps" currentpage="Jobs List" activepage="Jobs List" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title className="">
                                All Jobs List
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown Customtoggleclass="btn btn-primary btn-sm btn-wave no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <Dropdown.Item as='li' href="#!">Posted Date</Dropdown.Item>
                                    <Dropdown.Item href="#!">Status</Dropdown.Item>
                                    <Dropdown.Item href="#!">Department</Dropdown.Item>
                                    <Dropdown.Item href="#!">Job Type</Dropdown.Item>
                                    <Dropdown.Item href="#!">Newest</Dropdown.Item>
                                    <Dropdown.Item href="#!">Oldest</Dropdown.Item>
                                </SpkDropdown>
                                <Link href="/apps/jobs/job-post" className="btn btn-success btn-wave btn-sm">
                                    <i className="ri-add-line me-1 align-middle"></i>Post a Job
                                </Link>
                            </div>
                        </Card.Header>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <SpkTables checked={selectAll} onChange={handleSelectAll} tableClass="table-hover text-nowrap" Customcheckclass="ps-4" showCheckbox={true} header={[{ title: 'Position' }, { title: 'Department' }, { title: 'Company Name' }, { title: 'Applications' }, { title: 'Status' }, { title: 'Posted' }, { title: 'Slots' }, { title: 'Type' }, { title: 'Closing Date' }, { title: 'Options' },]}>
                                    {allData.map((job) => (
                                        <tr key={job.id} className="joblist-list">
                                            <td className="ps-4 joblist-checkbox">
                                                <input className="form-check-input" type="checkbox" id={`checkboxNoLabeljob${job.id}`} checked={job.checked} onChange={() => handleCheckboxToggle(job.id)} />
                                            </td>
                                            <td>
                                                <p className="fw-medium mb-0 d-flex align-items-center">
                                                    <Link href="/apps/jobs/job-details/">{job.title}</Link>
                                                </p>
                                                <span className="fs-12 text-muted">
                                                    <i className="ri-pushpin-line"></i> {job.location}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className={`avatar avatar-sm p-1 me-1 bg-${job.bgLogo}-transparent avatar-rounded d-inline-flex`}>
                                                        <Image src={job.companyLogo} alt={job.company} height={28} width={28}/>
                                                    </span>
                                                    <Link href="#!" scroll={false} className="fw-medium mb-0">
                                                        {job.company}
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>{job.category}</td>
                                            <td>
                                                <span className="ms-3">{job.applicants}</span>
                                            </td>
                                            <td>
                                                <span className={`badge ${job.status === 'Open' ? 'bg-success' : job.status === 'Closed' ? 'bg-danger' : 'bg-warning'}`}>
                                                    {job.status}
                                                </span>
                                            </td>
                                            <td>{job.postDate}</td>
                                            <td>{job.interviewCount}</td>
                                            <td>{job.jobType}</td>
                                            <td>
                                                <i className="ri-close-circle-fill text-pink mx-1"></i>
                                                {job.closeDate}
                                            </td>
                                            <td>
                                                <Link href="/apps/jobs/job-details/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                    <i className="ri-eye-line"></i>
                                                </Link>
                                                <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-success-light btn-wave waves-effect waves-light me-1">
                                                    <i className="ri-edit-line"></i>
                                                </Link>
                                                <Link scroll={false} href="#!" onClick={() => handleRemove(job.id)} className="joblist-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                    <i className="ri-delete-bin-line"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </div>
                        <div className="card-footer border-top-0">
                            <div className="d-flex align-items-center flex-wrap overflow-auto">
                                <div className="mb-2 mb-sm-0">
                                    Showing <b>1</b> to <b>7</b> of <b>25</b> entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                                </div>
                                <div className="ms-auto">
                                    <Pagination className="mb-0 overflow-auto">
                                        <Pagination.Item className="disabled">Prev</Pagination.Item>
                                        <Pagination.Item className="active">1</Pagination.Item>
                                        <Pagination.Item className="">2</Pagination.Item>
                                        <Pagination.Item className="">3</Pagination.Item>
                                        <Pagination.Item className="">4</Pagination.Item>
                                        <Pagination.Item className="">5</Pagination.Item>
                                        <Pagination.Item className="">next</Pagination.Item>
                                    </Pagination>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default JobList;