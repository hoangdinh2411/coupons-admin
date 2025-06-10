"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

interface spkObject {
    obj: any
}

const SpkBlogCard: React.FC<spkObject> = ({ obj }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body className="">
                    <Row className="align-items-center gy-3 gy-xl-0">
                        {obj.imageFirst === true ?
                            <Col xl={4}>
                                <div className="text-center">
                                    <Image fill src={obj.image} alt="" className="img-fluid rounded-3" />
                                </div>
                            </Col>
                            : ''
                        }
                        <Col xl={8}>
                            <span className={`fs-11 badge ${obj.badgeClass} mb-2`}>{obj.category}</span>
                            <Link href="/pages/blog/blog-details" className="fs-15 fw-semibold mb-1 d-block">{obj.title}</Link>
                            <p className="text-muted mb-2">
                                {obj.description}    <Link href="/pages/blog/blog-details" className="text-success text-decoration-underline fw-medium">Read More
                                    <i className="ri-arrow-right-double-line d-inline-block rtl-icon-transform align-middle ms-1 d-inline-block"></i>
                                </Link>
                            </p>
                            <div className="d-flex gap-1">
                                <div><i className="ti ti-writing me-1 d-inline-block align-middle text-primary"></i>By </div>
                                <Link href="#!" className=""><i className="ti ti-user-circle mx-1 lh-1 text-primary d-inline-block"></i>{obj.author}</Link>
                            </div>
                            <div className="d-flex gap-3 mt-1 fs-12 flex-wrap">
                                <div className="d-flex gap-3 align-self-end">
                                    <span><i className="ti ti-calendar me-1 text-muted d-inline-block"></i>{obj.date}</span>
                                    <span><i className="ti ti-clock me-1 text-muted d-inline-block"></i>{obj.time}</span>
                                </div>
                                <div className="d-flex gap-2 fs-11 ms-auto flex-wrap">
                                    <div className="btn btn-sm btn-info-light"><i className="ti ti-message me-1"></i>{obj.comments} Comments</div>
                                    <div className="btn btn-sm btn-danger-light"><i className="ti ti-thumb-up me-1"></i>{obj.likes} Likes</div>
                                </div>
                            </div>
                        </Col>
                        {obj.imageAfter === true ?
                            <Col xl={4}>
                                <div className="text-center">
                                    <Image fill src={obj.image} alt="" className="img-fluid rounded-3" />
                                </div>
                            </Col>
                            : ''
                        }
                    </Row>
                </Card.Body>
            </Card>

        </Fragment>
    )
}

export default SpkBlogCard