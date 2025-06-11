"use client"

import SpkCompanycard from "@/shared/@spk-reusable-components/reusable-apps/spk-companycard";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { Companiesdata, Developerdata } from "@/shared/data/apps/jobs/searchcompanydata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { ButtonGroup, Card, Col, Collapse, Dropdown, Pagination, Row } from "react-bootstrap";

interface SearchCompanyProps {}

const SearchCompany: React.FC<SearchCompanyProps> = () => {

    const [open, setOpen] = useState(false);
    const [opens, setOpens] = useState(false);
    const [openv, setOpenv] = useState(false);
    const [openemployee, setOpenemployee] = useState(false);

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-Search Company" />

            <Pageheader title="Apps" currentpage="Search Company" activepage="Search Company" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={3} lg={5}>
                    <Card className=" custom-card products-navigation-card">
                        <Card.Header className=" justify-content-between gap-1">
                            <Card.Title>
                                Filter
                            </Card.Title>
                            <Link href="#!" className="text-secondary text-decoration-underline fw-medium"> Clear All</Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Industry Type</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-1">
                                            Technology
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">3,214</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-2" />
                                        <label className="form-check-label" htmlFor="c-2">
                                            Finance
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">682</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-3">
                                            Healthcare
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">25,473</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-4">
                                            Education
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">4,326</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-5" />
                                        <label className="form-check-label" htmlFor="c-5">
                                            Retail
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">9,102</SpkBadge>
                                    </div>
                                    <Collapse in={open}>
                                        <div className="" id="category-more">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="cc-6" />
                                                <label className="form-check-label" htmlFor="cc-6">
                                                    Manufacturing
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default  float-end">7,889</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="cc-7" />
                                                <label className="form-check-label" htmlFor="cc-7">
                                                    Transportation
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default  float-end">3,214</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link scroll={false} className="ecommerce-more-link d-grid" onClick={() => setOpen(!open)} data-bs-toggle="collapse" href="#category-more" role="button" aria-expanded={open} aria-controls="category-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Location</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="available-1">
                                            Mumbai
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">1,024</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-2" />
                                        <label className="form-check-label" htmlFor="available-2">
                                            Delhi
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">3,547</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-3" />
                                        <label className="form-check-label" htmlFor="available-3">
                                            Bangalore
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">1,856</SpkBadge>
                                    </div>
                                    <Collapse in={opens}>
                                        <div className="" id="location-more">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="c-6" />
                                                <label className="form-check-label" htmlFor="c-6">
                                                    Hyderabad
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default  float-end">2,394</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="c-7" />
                                                <label className="form-check-label" htmlFor="c-7">
                                                    Singapore
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default  float-end">1,102</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link scroll={false} className="ecommerce-more-link d-grid" onClick={() => setOpens(!opens)} data-bs-toggle="collapse" href="#location-more" role="button" aria-expanded={opens} aria-controls="location-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Recruiter Type</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="recruiter-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="recruiter-1">
                                            Internal Recruitment
                                        </label>
                                        <span className="badge bg-light text-default float-end">1,345</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="recruiter-2" />
                                        <label className="form-check-label" htmlFor="recruiter-2">
                                            External Recruitment Agency
                                        </label>
                                        <span className="badge bg-light text-default float-end">785</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="recruiter-3" />
                                        <label className="form-check-label" htmlFor="recruiter-3">
                                            Headhunters
                                        </label>
                                        <span className="badge bg-light text-default float-end">567</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="r-4" />
                                        <label className="form-check-label" htmlFor="r-4">
                                            Online Job Portals
                                        </label>
                                        <span className="badge bg-light text-default float-end">2,125</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="r-5" />
                                        <label className="form-check-label" htmlFor="r-5">
                                            Recruitment Consultants
                                        </label>
                                        <span className="badge bg-light text-default float-end">1,678</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Job Vacancies</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="vacancy-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="vacancy-1">
                                            1 - 5 Vacancies
                                        </label>
                                        <span className="badge bg-light text-default float-end">1,234</span>
                                    </div>
                                    <Collapse in={openv}>
                                        <div className="" id="vacancy-more">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="v-4" />
                                                <label className="form-check-label" htmlFor="v-4">
                                                    21 - 50 Vacancies
                                                </label>
                                                <span className="badge bg-light text-default float-end">1,312</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="v-5" />
                                                <label className="form-check-label" htmlFor="v-5">
                                                    50+ Vacancies
                                                </label>
                                                <span className="badge bg-light text-default float-end">732</span>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link scroll={false} className="ecommerce-more-link d-grid" onClick={() => setOpenv(!openv)} data-bs-toggle="collapse" href="#vacancy-more" role="button" aria-expanded={openv} aria-controls="vacancy-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Employment Type</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="employment-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="employment-1">
                                            Full-Time
                                        </label>
                                        <span className="badge bg-light text-default float-end">1,890</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="employment-2" />
                                        <label className="form-check-label" htmlFor="employment-2">
                                            Part-Time
                                        </label>
                                        <span className="badge bg-light text-default float-end">1,234</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="employment-3" />
                                        <label className="form-check-label" htmlFor="employment-3">
                                            Contract
                                        </label>
                                        <span className="badge bg-light text-default float-end">876</span>
                                    </div>
                                    <Collapse in={openemployee}>
                                        <div className="" id="employment-more">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="e-4" />
                                                <label className="form-check-label" htmlFor="e-4">
                                                    Internship
                                                </label>
                                                <span className="badge bg-light text-default float-end">456</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="e-5" />
                                                <label className="form-check-label" htmlFor="e-5">
                                                    Freelance
                                                </label>
                                                <span className="badge bg-light text-default float-end">342</span>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link scroll={false} className="ecommerce-more-link d-grid" onClick={() => setOpenemployee(!openemployee)} data-bs-toggle="collapse" href="#employment-more" role="button" aria-expanded={openemployee} aria-controls="employment-more">MORE</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9} lg={7}>
                    <Row className=" align-items-center mb-4">
                        <Col lg={12}>
                            <div className="input-group companies-search-input">
                                <input type="text" className="form-control form-control-lg flex-fill" aria-label="Text input with segmented dropdown button" placeholder="Enter your keyword here" />
                                <input type="text" className="form-control form-control-lg flex-fill" aria-label="Text input with segmented dropdown button" placeholder="Search by location" />
                                <SpkSelect classNameprefix="Select2" mainClass='rounded-0 custom-select' name="form-field-name" option={Developerdata} placeholder="All categories" />
                                <button type="button" className="btn btn-primary"><i className="ri-search-line me-1"></i>Search</button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <Card.Body className="">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <h5 className="fw-medium mb-0 flex-grow-1">Found 3,678  <span className="fw-normal fs-18">companies based on your search.</span> </h5>
                                        <SpkDropdown as={ButtonGroup} Togglevariant="outline-light" Customtoggleclass="border no-caret" Toggletext="Sort By" Menuclass="dropdown-position" Menualign="end" Icon={true}
                                            IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                            <Dropdown.Item>Premium</Dropdown.Item>
                                            <Dropdown.Item>Newest</Dropdown.Item>
                                            <Dropdown.Item>Most Relevant</Dropdown.Item>
                                            <Dropdown.Item>Fresher</Dropdown.Item>
                                            <Dropdown.Item>Experienced</Dropdown.Item>
                                            <Dropdown.Item>Bond Agreement</Dropdown.Item>
                                            <Dropdown.Item>Flexible Shift</Dropdown.Item>
                                            <Dropdown.Item>Day Shift</Dropdown.Item>
                                        </SpkDropdown>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        {Companiesdata.map((idx, index) => (
                            <Col xl={12} key={index}>
                                <SpkCompanycard showCompany={true} company={idx} />
                            </Col>
                        ))}
                    </Row>
                    <Pagination className="mb-4 justify-content-end">
                        <Pagination.Item className="disabled">Prev</Pagination.Item>
                        <Pagination.Item className="active">1</Pagination.Item>
                        <Pagination.Item className="">2</Pagination.Item>
                        <Pagination.Item className="">3</Pagination.Item>
                        <Pagination.Item className="text-primary">next</Pagination.Item>
                    </Pagination>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    );
};

export default SearchCompany;