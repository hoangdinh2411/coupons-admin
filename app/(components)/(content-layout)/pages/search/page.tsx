"use client"

import SpkBookscard from "@/shared/@spk-reusable-components/reusable-pages/spk-bookscard";
import SpkSearchCard from "@/shared/@spk-reusable-components/reusable-pages/spk-searchcard";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { BooksCardData, LightboxGallery, NewsCard, SearchAll } from "@/shared/data/pages/searchdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Dropdown, Nav, Pagination, Row, Tab } from "react-bootstrap";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Pages-Search" />

            <Pageheader title="Pages" currentpage="Search" activepage="Search" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Tab.Container defaultActiveKey="1">
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body className="p-0">
                                <div className="p-3 border-bottom">
                                    <div className="p-3 bg-light rounded-3">
                                        <div className="input-group mb-3 search-result-input gap-2 align-items-center">
                                            <input type="text" className="form-control form-control-lg rounded-pill w-auto" placeholder="Search Here ..." aria-label="Search Here ..." aria-describedby="button-addon1" />
                                            <SpkButton Buttontype="button" Buttonvariant="success" Id="button-addon1" Customclass="btn-icon btn-wave rounded-circle">
                                                <i className="ri-mic-line fs-15"></i>
                                            </SpkButton>
                                            <SpkButton Buttontype="button" Buttonvariant="primary" Id="button-addon2" Customclass="btn-wave btn-w-sm rounded-pill">
                                                Search
                                            </SpkButton>
                                        </div>
                                        <p className="text-muted ms-2 fw-medium">Recommended for You!</p>
                                        <div className="d-flex gap-2 flex-wrap">
                                            <span className="badge bg-white border border-primary border-opacity-25 text-default rounded-pill fs-11">Designs <Link href="#!"><i className="ri-close-line"></i></Link></span>
                                            <span className="badge bg-white border border-primary border-opacity-25 text-default rounded-pill fs-11">Template <Link href="#!"><i className="ri-close-line"></i></Link></span>
                                            <span className="badge bg-white border border-primary border-opacity-25 text-default rounded-pill fs-11">Dashboard <Link href="#!"><i className="ri-close-line"></i></Link></span>
                                            <span className="badge bg-white border border-primary border-opacity-25 text-default rounded-pill fs-11">Admin Templates <Link href="#!"><i className="ri-close-line"></i></Link></span>
                                            <span className="badge bg-white border border-primary border-opacity-25 text-default rounded-pill fs-11"> Templates <Link href="#!"><i className="ri-close-line"></i></Link></span>
                                            <span className="badge bg-white border border-primary border-opacity-25 text-default rounded-pill fs-11">Admin <Link href="#!"><i className="ri-close-line"></i></Link></span>
                                            <span className="badge bg-white border border-primary border-opacity-25 text-default rounded-pill fs-11">Hosting Templates <Link href="#!"><i className="ri-close-line"></i></Link></span>
                                            <span className="badge bg-white border border-primary border-opacity-25 text-default rounded-pill fs-11">Hosting <Link href="#!"><i className="ri-close-line"></i></Link></span>
                                            <span className="badge bg-white border border-primary border-opacity-25 text-default rounded-pill fs-11">Bootstrap <Link href="#!"><i className="ri-close-line"></i></Link></span>
                                            <span className="badge bg-white border border-primary border-opacity-25 text-default rounded-pill fs-11">Sales  <Link href="#!"><i className="ri-close-line"></i></Link></span>
                                            <div className="ms-auto">
                                                <Link href="#!" className="text-secondary text-decoration-underline fw-medium mx-2"> Clear All </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 d-flex gap-2 justify-content-between flex-wrap align-items-center pb-1">
                                    <div className="text-muted">57,894 results found for best.</div>
                                    <div className="ms-auto d-flex gap-2 flex-wrap">
                                        <SpkDropdown Id="dropdownMenuButton1" Togglevariant="light" Menulabel="dropdownMenuButton1" Toggletext="Sort By" Customtoggleclass="btn-sm btn-w-md text-muted">
                                            <li className="dropdown-item">Alphabets</li>
                                            <li className="dropdown-item">First Word</li>
                                            <li className="dropdown-item">Numeric</li>
                                        </SpkDropdown>
                                        <SpkDropdown Id="dropdownMenuButton1" Togglevariant="primary" Menulabel="dropdownMenuButton1" Toggletext="Filter By" Customtoggleclass="btn-sm btn-w-md">
                                            <li className="dropdown-item">Alphabets</li>
                                            <li className="dropdown-item">First Word</li>
                                            <li className="dropdown-item">Numeric</li>
                                        </SpkDropdown>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 px-3 pt-1 pb-3">
                                    <Nav as="ul" className=" nav-tabs tab-style-8 scaleX profile-settings-tab gap-2" role="tablist">
                                        <Nav.Item as="li" role="presentation">
                                            <Nav.Link as="a" eventKey="1" className="fs-15 fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-all" aria-selected="true"><i className="ti ti-search fs-15 text-success fw-medium me-2 d-inline-block"></i>All</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li" role="presentation">
                                            <Nav.Link as="a" eventKey="2" className="fs-15 fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-images" aria-selected="false" tabIndex={-1}><i className="ti ti-photo fs-15 text-success fw-medium me-2 d-inline-block"></i>Images</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li" role="presentation">
                                            <Nav.Link as="a" eventKey="3" className="fs-15 fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-news" aria-selected="false" tabIndex={-1}><i className="ti ti-news fs-15 text-success fw-medium me-2 d-inline-block"></i>News</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li" role="presentation">
                                            <Nav.Link as="a" eventKey="4" className="fs-15 fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-videos" aria-selected="false" tabIndex={-1}><i className="ti ti-video fs-15 text-success fw-medium me-2 d-inline-block"></i>Videos</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li" role="presentation">
                                            <Nav.Link as="a" eventKey="5" className="fs-15 fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-books" aria-selected="false" tabIndex={-1}><i className="ti ti-book fs-15 text-success fw-medium me-2 d-inline-block"></i>Books</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <!--End::row-1 --> */}

                {/* <!-- Start:: row-2 --> */}
                <Row>
                    <Col xl={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="1" className="p-0 border-0" id="search-all" role="tabpanel">
                                <Row>
                                    {SearchAll.map((idx, index) => (
                                        <Col xl={6} key={index}>
                                            <SpkSearchCard search={idx} />
                                        </Col>
                                    ))}
                                </Row>
                                <nav aria-label="Page navigation" className="pagination-style-4">
                                    <Pagination className="text-center justify-content-center gap-1">
                                        <Pagination.Item className="disabled">Prev</Pagination.Item>
                                        <Pagination.Item className="active">1</Pagination.Item>
                                        <Pagination.Item className="">2</Pagination.Item>
                                        <Pagination.Item className=""><i className="bi bi-three-dots"></i></Pagination.Item>
                                        <Pagination.Item className="">16</Pagination.Item>
                                        <Pagination.Item className="">17</Pagination.Item>
                                        <Pagination.Item className="">next</Pagination.Item>
                                    </Pagination>
                                </nav>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2" className=" border-0 p-0" id="search-images" role="tabpanel">
                                <Card className="custom-card">
                                    <Card.Body className="pb-0">
                                        <LightboxGallery />
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="3" className="border-0 p-0" id="search-books" role="tabpanel">
                                <Row>
                                    {NewsCard.map((card, index) => (
                                        <Col xl={6} key={index}>
                                            <Card className="custom-card">
                                                <Card.Body>
                                                    <div className="d-flex gap-2 align-items-start mb-1 flex-wrap flex-xl-nowrap">
                                                        <div>
                                                            <h6 className="mb-0">{card.title}</h6>
                                                            <span className="text-muted fs-12">{card.description}</span>
                                                        </div>
                                                        <SpkDropdown Id="dropdownMenuButton1" Arrowicon1={true} Customclass="ms-auto" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="" Customtoggleclass="btn btn-secondary-light btn-sm btn-wave waves-effect waves-light btn-icon rounded-circle show no-caret">
                                                            <Dropdown.Item as="li" href="#!">Week</Dropdown.Item>
                                                            <Dropdown.Item as="li" href="#!">Day</Dropdown.Item>
                                                            <Dropdown.Item as="li" href="#!">Year</Dropdown.Item>
                                                        </SpkDropdown>
                                                    </div>
                                                    <div className="d-flex gap-2 align-items-end justify-content-between flex-wrap">
                                                        <div className="fs-12 text-muted">
                                                            <i className="ri-calendar-line text-secondary rounded-circle lh-1"></i> Posted On {card.postedOn}
                                                        </div>
                                                        <div className="ms-auto d-flex gap-2 align-items-center justify-content-end text-end flex-wrap">
                                                            <div>
                                                                <div className="fw-medium fs-12">BY {card.author}</div>
                                                                <div className="text-muted fs-11">
                                                                    {card.location}
                                                                    <i className="ri-map-pin-line text-success lh-1 ms-1"></i>
                                                                </div>
                                                            </div>
                                                            <span className="avatar avatar-md p-1 bg-success bg-opacity-25 avatar-rounded flex-shrink-0">
                                                                <Image width={40} height={40} src={card.avatar} alt={card.author} />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                                <nav aria-label="Page navigation" className="pagination-style-4">
                                    <Pagination className="text-center justify-content-center gap-1">
                                        <Pagination.Item className="disabled">Prev</Pagination.Item>
                                        <Pagination.Item className="active">1</Pagination.Item>
                                        <Pagination.Item className="">2</Pagination.Item>
                                        <Pagination.Item className=""><i className="bi bi-three-dots"></i></Pagination.Item>
                                        <Pagination.Item className="">16</Pagination.Item>
                                        <Pagination.Item className="">17</Pagination.Item>
                                        <Pagination.Item className="">next</Pagination.Item>
                                    </Pagination>
                                </nav>
                            </Tab.Pane>
                            <Tab.Pane eventKey="4" className="border-0 p-0" id="search-news" role="tabpanel">
                                <Card className="custom-card">
                                    <Card.Body className="pb-1">
                                        <Row className="gy-4">
                                            <Col lg={4} md={3} sm={6} className="col-12">
                                                <div className="p-4 border border-success border-opacity-25 bg-success-transparent rounded-3">
                                                    <div className="ratio ratio-16x9">
                                                        <iframe src="https://www.youtube.com/embed/HWvHA2FY8Ok?si=Bf-6pyMAcBG-_dR0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                    </div>
                                                    <div className="p-2 pb-0">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <div className="figure-caption fs-13 fw-medium text-default text-truncate">Valex - Bootstrap 5 Admin & Dashboard HTML Template</div>
                                                        </div>
                                                        <Link href="https://www.spruko.com/demo/valex/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://www.spruko.com/demo/valex/</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={3} sm={6} className="col-12">
                                                <div className="p-4 border border-success border-opacity-25 bg-success-transparent rounded-3">
                                                    <div className="ratio ratio-16x9">
                                                        <iframe src="https://www.youtube.com/embed/Zx1HjMhcQdE?si=Nhbu6XA2PoyAlYhy" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                    </div>
                                                    <div className="p-2 pb-0">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <div className="figure-caption fs-13 fw-medium text-default text-truncate">Azea - Admin & Dashboard Bootstrap 5 HTML5 Template</div>
                                                        </div>
                                                        <Link href="https://spruko.com/demo/azea/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/azea/</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={3} sm={6} className="col-12">
                                                <div className="p-4 border border-success border-opacity-25 bg-success-transparent rounded-3">
                                                    <div className="ratio ratio-16x9">
                                                        <iframe src="https://www.youtube.com/embed/JP_os1DC1MQ?si=qyUJRBl7ZJBhR_P5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                    </div>
                                                    <div className="p-2 pb-0">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <div className="figure-caption fs-13 fw-medium text-default text-truncate">YNEX - HTML Installation & Usage process</div>
                                                        </div>
                                                        <Link href="https://spruko.com/demo/ynex/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/ynex/</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={3} sm={6} className="col-12">
                                                <div className="p-4 border border-success border-opacity-25 bg-success-transparent rounded-3">
                                                    <div className="ratio ratio-16x9">
                                                        <iframe src="https://www.youtube.com/embed/-lDlbQ7DiCI?si=-GRS_5Dco6Qc5ius" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                    </div>
                                                    <div className="p-2 pb-0">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <div className="figure-caption fs-13 fw-medium text-default text-truncate">Sash - Admin and Dashboard Multipurpose HTML Advanced Template</div>
                                                        </div>
                                                        <Link href="https://spruko.com/demo/sash/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/sash/</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={3} sm={6} className="col-12">
                                                <div className="p-4 border border-success border-opacity-25 bg-success-transparent rounded-3">
                                                    <div className="ratio ratio-16x9">
                                                        <iframe src="https://www.youtube.com/embed/JP_os1DC1MQ?si=qyUJRBl7ZJBhR_P5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                    </div>
                                                    <div className="p-2 pb-0">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <div className="figure-caption fs-13 fw-medium text-default text-truncate">Ynex - Bootstrap 5 Admin & Dashboard HTML5 Template</div>
                                                        </div>
                                                        <Link href="https://spruko.com/demo/ynex/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/ynex/</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={3} sm={6} className="col-12">
                                                <div className="p-4 border border-success border-opacity-25 bg-success-transparent rounded-3">
                                                    <div className="ratio ratio-16x9">
                                                        <iframe src="https://www.youtube.com/embed/bVRW4Li8inE?si=pOpS9ep2Hn3cGL3y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                    </div>
                                                    <div className="p-2 pb-0">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <div className="figure-caption fs-13 fw-medium text-default text-truncate">Zanex - Bootstrap 5 Admin & Dashboard HTML5 Template</div>
                                                        </div>
                                                        <Link href="https://spruko.com/demo/zanex/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/zanex/</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={12} className="my-3">
                                                <SpkButton Buttontype="button" Buttonvariant="info-light" Id="button-addon2" Customclass=" btn-loader mx-auto">
                                                    <span className="me-2">Loading</span>
                                                    <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                                                </SpkButton>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="5" className="border-0 p-0" id="search-videos" role="tabpanel">
                                <Row className="justify-content-center">
                                    {BooksCardData.map((idx) => (
                                        <Col xl={4} key={idx.id}>
                                            <SpkBookscard book={idx} />
                                        </Col>
                                    ))}
                                    <Col xl={12} className="mb-4">
                                        <SpkButton Buttontype="button" Buttonvariant="info-light" Id="button-addon2" Customclass=" btn-loader mx-auto">
                                            <span className="me-2">Loading</span>
                                            <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                                        </SpkButton>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
                {/* <!-- End:: row-2 --> */}

            </Tab.Container>
        </Fragment>
    );
};

export default Search;