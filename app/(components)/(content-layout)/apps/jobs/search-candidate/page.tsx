"use client"

import SpkCompanycard from "@/shared/@spk-reusable-components/reusable-apps/spk-companycard";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { Data, Data2, SearchCandidatedata } from "@/shared/data/apps/jobs/searchcandidatedate";
import LabeledTwoThumbs1 from "@/shared/data/pages/ecommerce/productsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { ButtonGroup, Card, Col, Collapse, Dropdown, Form, Pagination, Row } from "react-bootstrap";
import { connect } from "react-redux";

interface SearchCandidateProps {}

const SearchCandidate: React.FC<SearchCandidateProps> = ({ local_varaiable }: any) => {

    const [open, setOpen] = useState(false);
    const [opens, setOpens] = useState(false);

    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Seo title="Apps-Search candidate" />

            <Pageheader title="Apps" currentpage="Search candidate" activepage="Search candidate" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={3} xl={4} >
                    <Card className=" custom-card products-navigation-card">
                        <Card.Header className=" justify-content-between gap-1">
                            <Card.Title>
                                Filter
                            </Card.Title>
                            <Link href="#!" className="text-secondary text-decoration-underline fw-medium"> Clear All</Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Categories</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-1">
                                            Engineering
                                        </label>
                                        <span className="badge bg-light text-default  float-end">2,350</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-2" />
                                        <label className="form-check-label" htmlFor="c-2">
                                            Design
                                        </label>
                                        <span className="badge bg-light text-default  float-end">1,200</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-3">
                                            Sales
                                        </label>
                                        <span className="badge bg-light text-default  float-end">5,800</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-4">
                                            Finance & Accounting
                                        </label>
                                        <span className="badge bg-light text-default  float-end">3,000</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-5" />
                                        <label className="form-check-label" htmlFor="c-5">
                                            Customer Support
                                        </label>
                                        <span className="badge bg-light text-default  float-end">2,100</span>
                                    </div>
                                    <Collapse in={open}>
                                        <div className="" id="category-more">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="c-6" />
                                                <label className="form-check-label" htmlFor="c-6">
                                                    Operations Management
                                                </label>
                                                <span className="badge bg-light text-default  float-end">1,800</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="c-7" />
                                                <label className="form-check-label" htmlFor="c-7">
                                                    Project Management
                                                </label>
                                                <span className="badge bg-light text-default  float-end">1,500</span>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link scroll={false} className="ecommerce-more-link d-grid" onClick={() => setOpen(!open)} data-bs-toggle="collapse" href="#category-more" role="button" aria-expanded={open} aria-controls="category-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Availability</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="available-1">
                                            Immediate Availability
                                        </label>
                                        <span className="badge bg-light text-default  float-end">450</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-2" />
                                        <label className="form-check-label" htmlFor="available-2">
                                            2 Weeks Notice
                                        </label>
                                        <span className="badge bg-light text-default  float-end">1,320</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-3" />
                                        <label className="form-check-label" htmlFor="available-3">
                                            1 Month Notice
                                        </label>
                                        <span className="badge bg-light text-default  float-end">890</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Bond Agreement</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="bond-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="bond-1">
                                            6 Months
                                        </label>
                                        <span className="badge bg-light text-default  float-end">980</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="bond-2" />
                                        <label className="form-check-label" htmlFor="bond-2">
                                            1 Year
                                        </label>
                                        <span className="badge bg-light text-default  float-end">620</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="bond-3" />
                                        <label className="form-check-label" htmlFor="bond-3">
                                            2 Years
                                        </label>
                                        <span className="badge bg-light text-default  float-end">350</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Known Languages</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="languages-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="languages-1">
                                            Spanish
                                        </label>
                                        <span className="badge bg-light text-default  float-end">980</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="languages-2" />
                                        <label className="form-check-label" htmlFor="languages-2">
                                            Mandarin
                                        </label>
                                        <span className="badge bg-light text-default  float-end">540</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="languages-3" />
                                        <label className="form-check-label" htmlFor="languages-3">
                                            French
                                        </label>
                                        <span className="badge bg-light text-default  float-end">760</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Job Type</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-1">
                                            Remote
                                        </label>
                                        <span className="badge bg-light text-default  float-end">1,320</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-2" />
                                        <label className="form-check-label" htmlFor="j-2">
                                            Contract
                                        </label>
                                        <span className="badge bg-light text-default  float-end">850</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-3" />
                                        <label className="form-check-label" htmlFor="j-3">
                                            Temporary
                                        </label>
                                        <span className="badge bg-light text-default  float-end">420</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-4" />
                                        <label className="form-check-label" htmlFor="j-4">
                                            Volunteer
                                        </label>
                                        <span className="badge bg-light text-default  float-end">190</span>
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
                                <h6 className="fw-medium mb-0">Qualification</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="q-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="q-1">
                                            All Education Levels
                                        </label>
                                        <span className="badge bg-light text-default  float-end">30,000</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="q-2" />
                                        <label className="form-check-label" htmlFor="q-2">
                                            Diploma and Above
                                        </label>
                                        <span className="badge bg-light text-default  float-end">8,425</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="q-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="q-3">
                                            Bachelor's Degree
                                        </label>
                                        <span className="badge bg-light text-default  float-end">15,932</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="q-4" />
                                        <label className="form-check-label" htmlFor="q-4">
                                            Postgraduate +
                                        </label>
                                        <span className="badge bg-light text-default  float-end">4,210</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3">
                                <h6 className="fw-medium mb-0">Skills</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="s-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="s-1">
                                            JavaScript
                                        </label>
                                        <span className="badge bg-light text-default  float-end">28,492</span>
                                    </div>
                                    <Collapse in={opens}>
                                        <div className="" id="sizes-more">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="s-2" />
                                                <label className="form-check-label" htmlFor="s-2">
                                                    Node.js
                                                </label>
                                                <span className="badge bg-light text-default  float-end">12,654</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="s-3" />
                                                <label className="form-check-label" htmlFor="s-3">
                                                    Vue.js
                                                </label>
                                                <span className="badge bg-light text-default  float-end">9,831</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="s-4" />
                                                <label className="form-check-label" htmlFor="s-4">
                                                    TypeScript
                                                </label>
                                                <span className="badge bg-light text-default  float-end">6,217</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="s-5" />
                                                <label className="form-check-label" htmlFor="s-5">
                                                    jQuery
                                                </label>
                                                <span className="badge bg-light text-default  float-end">4,592</span>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link scroll={false} onClick={() => setOpens(!opens)} className="ecommerce-more-link d-grid" data-bs-toggle="collapse" href="#sizes-more" role="button" aria-expanded={opens} aria-controls="sizes-more">MORE</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9} xl={8}>
                    <Row className=" align-items-center">
                        <Col lg={12}>
                            <Card className=" custom-card">
                                <Card.Body className=" p-md-0">
                                    <div className="input-group companies-search-input companies-search-input1 flex-sm-nowrap">
                                        <Form.Control type="text" className="form-control-lg w-25" aria-label="Text input with segmented dropdown button" placeholder="Enter your keyword here" />
                                        <SpkSelect name="state" option={Data} mainClass="basic-multi-select " searchable menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data[0]]} />
                                        <Form.Control type="text" className="form-control-lg w-25" aria-label="Text input with segmented dropdown button" placeholder="Search by location" />
                                        <SpkSelect name="state" option={Data2} mainClass="basic-multi-select custom-select-searchcompany" searchable menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data2[0]]} />
                                        <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="text-nowrap">
                                            <i className="ri-search-line me-1"></i> Search
                                        </SpkButton>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <Card.Body className="">
                                    <div className="d-flex flex-wrap gap-2 align-items-center">
                                        <h5 className="fw-medium mb-0 flex-grow-1">3,562 <span className="fw-normal fs-16"> candidates are available based on your job search criteria</span> </h5>
                                        <SpkDropdown as={ButtonGroup} Customclass="ms-auto" Togglevariant="" Toggletext="Sort By" Customtoggleclass="btn btn-outline-light border"
                                            Menualign="end" Menuclass="dropdown-menu-end">
                                            <Dropdown.Item as="li" href="#!">Most Recent</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Highest Rated</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Top Companies</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Internships</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Full-Time</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Part-Time</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Freelance</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#!">Temporary</Dropdown.Item>
                                        </SpkDropdown>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        {SearchCandidatedata.map((idx, index) => (
                            <Col xl={12} key={index} >
                                <SpkCompanycard showCandidate={true} company={idx} />
                            </Col>
                        ))}
                    </Row>
                    <Pagination className="mb-4 justify-content-end">
                        <Pagination.Item className="disabled">Prev</Pagination.Item>
                        <Pagination.Item className="">1</Pagination.Item>
                        <Pagination.Item className="active">2</Pagination.Item>
                        <Pagination.Item className="">3</Pagination.Item>
                        <Pagination.Item className="">next</Pagination.Item>
                    </Pagination>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};
const mapStateToProps = (state: any) => ({
    local_varaiable: state
});
export default connect(mapStateToProps,)(SearchCandidate);