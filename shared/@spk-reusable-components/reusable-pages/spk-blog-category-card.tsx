"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

interface spkObject {
    obj: any
}

const SpkBlogCategoryCard: React.FC<spkObject> = ({ obj }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body className="">
                    <span className={`fs-11 badge ${obj.badgeClass} mb-2`}>{obj.category}</span>
                    <Link href="/pages/blog/blog-details" className="fw-semibold fs-18 text-dark mb-1 d-block">{obj.title}</Link>
                    <p className="card-text text-muted mb-3">
                        {obj.description}
                        <Link href="/pages/blog/blog-details" className="text-success text-decoration-underline fw-medium mx-1">Read More
                            <i className="ri-arrow-right-double-line d-inline-block rtl-icon-transform align-middle ms-1 d-inline-block"></i>
                        </Link>
                    </p>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm avatar-rounded me-2">
                                <Image height={28} width={28} src={obj.authorImage} alt="Sophia" />
                            </div>
                            <div>
                                <p className="mb-0 fw-semibold"> {obj.author}<i className="ti ti-writing ms-1 d-inline-block align-middle text-primary"></i></p>
                                <p className="text-muted fs-11 mb-0">{obj.date} - <span><i className="ti ti-clock me-1 text-muted d-inline-block"></i>{obj.time}</span>
                                </p>
                            </div>
                        </div>
                        <div className="d-flex gap-2 fs-11 ms-auto flex-wrap">
                            <div className="btn btn-sm btn-info-light"><i className="ti ti-message me-1"></i>{obj.comments}</div>
                            <div className="btn btn-sm btn-danger-light"><i className="ti ti-thumb-up me-1"></i>{obj.likes}</div>
                        </div>
                    </div>
                </Card.Body>
                <Link href="#!">
                    <Image fill src={obj.image} className="card-img-bottom" alt={obj.altText} />
                </Link>
            </Card>
        </Fragment>
    )
}

export default SpkBlogCategoryCard