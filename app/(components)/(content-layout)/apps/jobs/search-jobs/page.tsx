"use client"

import SpkJobdetailscard from "@/shared/@spk-reusable-components/reusable-apps/spk-jobdetailscard";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { Searchjobdata } from "@/shared/data/apps/jobs/searchjobdata";
import LabeledTwoThumbs1 from "@/shared/data/pages/ecommerce/productsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { ButtonGroup, Card, Col, Collapse, Dropdown, Pagination, Row } from "react-bootstrap";
import { connect } from "react-redux";

interface SearchJobsProps {}

const SearchJobs: React.FC<SearchJobsProps> = ({ local_varaiable }: any) => {

    const [open, setOpen] = useState(false);
    const [opens, setOpens] = useState(false);

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-Search Jobs" />

            <Pageheader title="Apps" currentpage="Search Jobs" activepage="Search Jobs" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={3} xl={4}>
                    <Card className=" custom-card products-navigation-card">
                        <Card.Header className=" justify-content-between gap-1">
                            <Card.Title>
                                Filter
                            </Card.Title>
                            <Link href="#!" className="text-secondary text-decoration-underline fw-medium"> Clear All</Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Job Type</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="j-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-1">
                                            Full Time
                                        </label>
                                        <span className="badge bg-light text-default fw-medium fs-12 float-end">487</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="j-2" />
                                        <label className="form-check-label" htmlFor="j-2">
                                            Part Time
                                        </label>
                                        <span className="badge bg-light text-default fw-medium fs-12 float-end">1,245</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="j-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-3">
                                            Internship
                                        </label>
                                        <span className="badge bg-light text-default fw-medium fs-12 float-end">987</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="j-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-4">
                                            Freelancer
                                        </label>
                                        <span className="badge bg-light text-default fw-medium fs-12 float-end">08</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Salary Range</h6>
                                <div className="py-3 pb-0">
                                    <div id="nonlinear">
                                        <LabeledTwoThumbs1 rtl={local_varaiable.dir == 'rtl'} />
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Experience</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="e-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="e-1">
                                            Entry Level
                                        </label>
                                        <span className="badge bg-light text-default fw-medium fs-12 float-end">25,000</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="e-2" />
                                        <label className="form-check-label" htmlFor="e-2">
                                            Junior
                                        </label>
                                        <span className="badge bg-light text-default fw-medium fs-12 float-end">18,000</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="e-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="e-3">
                                            Mid Level
                                        </label>
                                        <span className="badge bg-light text-default fw-medium fs-12 float-end">17,500</span>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="e-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="e-4">
                                            Expert
                                        </label>
                                        <span className="badge bg-light text-default fw-medium fs-12 float-end">8,200</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Job Categories</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="c-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-1">
                                            Technology
                                        </label>
                                        <span className="badge bg-light text-default fw-medium fs-12 float-end">4,214</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="c-5" />
                                        <label className="form-check-label" htmlFor="c-5">
                                            Engineering
                                        </label>
                                        <span className="badge bg-light text-default fw-medium fs-12 float-end">8,213</span>
                                    </div>
                                    <Collapse in={opens}>
                                        <div className="" id="category-more">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="c-6" />
                                                <label className="form-check-label" htmlFor="c-6">
                                                    Sales
                                                </label>
                                                <span className="badge bg-light text-default fw-medium fs-12 float-end">5,342</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="c-2" />
                                                <label className="form-check-label" htmlFor="c-2">
                                                    Healthcare
                                                </label>
                                                <span className="badge bg-light text-default fw-medium fs-12 float-end">1,278</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="c-3" defaultChecked />
                                                <label className="form-check-label" htmlFor="c-3">
                                                    Education
                                                </label>
                                                <span className="badge bg-light text-default fw-medium fs-12 float-end">6,549</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="c-4" defaultChecked />
                                                <label className="form-check-label" htmlFor="c-4">
                                                    Finance
                                                </label>
                                                <span className="badge bg-light text-default fw-medium fs-12 float-end">3,876</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="c-7" />
                                                <label className="form-check-label" htmlFor="c-7">
                                                    Hospitality
                                                </label>
                                                <span className="badge bg-light text-default fw-medium fs-12 float-end">1,754</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="c-8" />
                                                <label className="form-check-label" htmlFor="c-8">
                                                    Legal
                                                </label>
                                                <span className="badge bg-light text-default fw-medium fs-12 float-end">3,091</span>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link scroll={false} onClick={() => setOpens(!opens)} className="ecommerce-more-link mt-3 d-grid" data-bs-toggle="collapse" href="#category-more" role="button" aria-expanded={opens} aria-controls="category-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Qualification</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="q-4" />
                                        <label className="form-check-label" htmlFor="q-4">
                                            Bachelor's Degree
                                        </label>
                                        <span className="badge bg-light text-default fw-medium fs-12 float-end">4,981</span>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="q-5" defaultChecked />
                                        <label className="form-check-label" htmlFor="q-5">
                                            Postgraduate &amp; above
                                        </label>
                                        <span className="badge bg-light text-default fw-medium fs-12 float-end">2,341</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3">
                                <h6 className="fw-medium mb-0">Skills</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="s-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="s-1">
                                            Python
                                        </label>
                                        <span className="badge bg-light text-default fw-medium fs-12 float-end">18,943</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="s-2" defaultChecked />
                                        <label className="form-check-label" htmlFor="s-2">
                                            JavaScript
                                        </label>
                                        <span className="badge bg-light text-default fw-medium fs-12 float-end">22,354</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="s-3" />
                                        <label className="form-check-label" htmlFor="s-3">
                                            Java
                                        </label>
                                        <span className="badge bg-light text-default fw-medium fs-12 float-end">12,789</span>
                                    </div>
                                    <Collapse in={open}>
                                        <div className="" id="skills-more">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="s-4" defaultChecked />
                                                <label className="form-check-label" htmlFor="s-4">
                                                    SQL
                                                </label>
                                                <span className="badge bg-light text-default fw-medium fs-12 float-end">9,214</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="s-5" />
                                                <label className="form-check-label" htmlFor="s-5">
                                                    C#
                                                </label>
                                                <span className="badge bg-light text-default fw-medium fs-12 float-end">6,032</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="s-6" />
                                                <label className="form-check-label" htmlFor="s-6">
                                                    Ruby
                                                </label>
                                                <span className="badge bg-light text-default fw-medium fs-12 float-end">4,761</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="s-7" />
                                                <label className="form-check-label" htmlFor="s-7">
                                                    Swift
                                                </label>
                                                <span className="badge bg-light text-default fw-medium fs-12 float-end">2,118</span>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link className="ecommerce-more-link mt-3 d-grid" onClick={() => setOpen(!open)} data-bs-toggle="collapse" href="#skills-more" role="button" aria-expanded={open} aria-controls="skills-more">MORE</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9} xl={8}>
                    <Card className=" custom-card p-3">
                        <div className="input-group companies-search-input mb-3">
                            <input type="text" className="form-control form-control-lg flex-fill" aria-label="Job title or keyword" placeholder="Job title or keyword" />
                            <input type="text" className="form-control form-control-lg flex-fill" aria-label="Location" placeholder="Location" />
                            <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="">
                                <i className="ri-search-line me-1"></i> Search
                            </SpkButton>
                        </div>
                        <Row className=" align-items-center p-2 bg-success-transparent rounded mx-0">
                            <Col sm={7}>
                                <div className="d-flex">
                                    <h6 className="fw-medium mb-0"><span className="fw-normal">Showing</span> 548 Jobs</h6>
                                </div>
                            </Col>
                            <Col sm={5} className="text-sm-end mt-3 mt-sm-0">
                                <SpkDropdown as={ButtonGroup} Toggletext="Sort By" Togglevariant="btn btn-success border dropdown-toggle no-caret" Arrowicon={true}>
                                    <Dropdown.Item as="li" href="#!">Featured</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Newest</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Most Relevant</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Best Rated</Dropdown.Item>
                                </SpkDropdown>
                            </Col>
                        </Row>
                    </Card>
                    <Row>
                        {Searchjobdata.map((idx, index) => (
                            <Col xl={4} key={index} >
                                <SpkJobdetailscard cardClass="featured-jobs" job={idx} />
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
            {/* <!-- End::row-1 --> */}
        </Fragment>
    );
};

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});
export default connect(mapStateToProps,)(SearchJobs);