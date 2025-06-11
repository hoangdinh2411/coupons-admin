"use client"

import { GalleryList, GlightboxLatest, GlightboxPopular, GlightboxTabs } from "@/shared/data/apps/gallerydata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";

interface GalleryProps {}

const Gallery: React.FC<GalleryProps> = () => {

    return (

        <Fragment>

            {/* <!-- Page Header --> */}

            <Seo title="Apps-Gallery" />

            <Pageheader title="Apps" currentpage="Gallery" activepage="Gallery" />

            {/* <!-- Page Header Close --> */}

            <Row className="justify-content-center">
                <Col xl={10}>
                    <div className="d-md-flex d-block align-items-center justify-content-between my-4">
                        <div>
                            <p className="fw-semibold fs-18 mb-0">Glightbox Grid View</p>
                        </div>
                    </div>
                    {/* <!-- Start::row-1 --> */}
                    <GalleryList />
                    {/* <!--End::row-1 --> */}

                    <div className="d-md-flex d-block align-items-center justify-content-between my-4">
                        <div>
                            <p className="fw-semibold fs-18 mb-0">Glightbox Tabs View</p>
                        </div>
                    </div>

                    {/* <!-- Start::row-2 --> */}
                    <Row>
                        <Tab.Container defaultActiveKey="1">
                            <div className="text-center mb-5">
                                <div className="tab-style-5 p-1 rounded-4 d-inline-block bg-white shadow-sm">
                                    <Nav as="ul" className="nav-pills justify-content-center" role="tablist">
                                        <Nav.Item as="li" className="flex-fill" role="presentation">
                                            <Nav.Link as="button" eventKey="1" className="gallery-nav-link rounded-4 w-100 fs-15 px-5 me-2" data-bs-toggle="pill" data-bs-target="#All" aria-selected="true" role="tab">All</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li" className="flex-fill" role="presentation">
                                            <Nav.Link as="button" eventKey="2" className="gallery-nav-link rounded-4 w-100 fs-15 px-5" data-bs-toggle="pill" data-bs-target="#Popular" aria-selected="false" role="tab">Popular</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li" className="flex-fill" role="presentation">
                                            <Nav.Link as="button" eventKey="3" className="gallery-nav-link rounded-4 w-100 fs-15 px-5" data-bs-toggle="pill" data-bs-target="#Recent" aria-selected="false" role="tab">Latest</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </div>
                            <Tab.Content>
                                <Tab.Pane eventKey="1" className="gallery-tab-pane p-0 border-0 fade" id="All" role="tabpanel">
                                    <GlightboxTabs />
                                </Tab.Pane>
                                <Tab.Pane eventKey="2" className="gallery-tab-pane fade p-0 border-0" id="Popular" role="tabpanel">
                                    <GlightboxPopular />
                                </Tab.Pane>
                                <Tab.Pane eventKey="3" className="gallery-tab-pane fade p-0 border-0" id="Recent" role="tabpanel">
                                    <GlightboxLatest />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Row>
                    {/* <!-- End::row-2 --> */}

                </Col>
            </Row>
        </Fragment>
    );
};

export default Gallery;