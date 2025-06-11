"use client"

import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

interface Error500Props {}

const Error500: React.FC<Error500Props> = () => {

    return (
        <Fragment>

            <div className="page error-bg">
                {/* <!-- Start::error-page --> */}
                <div className="error-page">
                    <div className="container">
                        <div className="my-auto">
                            <Row className="align-items-start justify-content-center h-100">
                                <Col xl={10} lg={5} md={6} className="col-12 text-fixed-white">
                                    <div>
                                        <p className="error-text">5<span className="text-secondary">0</span>0</p>
                                        <p className="fs-20 fw-semibold mb-0 op-9">Internal Server Error...</p>
                                        <p className="fs-14 mb-5 text-fixed-white op-7 fw-normal">Something went wrong on our end. Please try again later or contact support if the issue persists.</p>
                                        <Link href="/dashboards/sales" className="btn btn-primary me-2">
                                            <i className="ri-arrow-left-line align-middle me-1 d-inline-block"></i> Go Back
                                        </Link>
                                        <Link href="/dashboards/sales" className="btn btn-success">
                                            <i className="ri-information-line align-middle me-1 d-inline-block lh-1"></i> Learn More
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default Error500;