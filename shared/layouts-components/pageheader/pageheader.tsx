"use client"

import Link from 'next/link'
import React, { Fragment } from 'react'

const Pageheader = (props: any) => {
    return (
        <Fragment>
            <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
                <h1 className="page-title fw-semibold fs-18 mb-0">{props.activepage}</h1>
                <div className="ms-md-1 ms-0">
                    <nav>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link scroll={false} href="#!">{props.title}</Link></li>
                            {props.subtitle && (
                                <li className="breadcrumb-item">
                                    <Link scroll={false} href="#!">{props.subtitle}</Link>
                                </li>
                            )}
                            <li className="breadcrumb-item active" aria-current="page">{props.currentpage}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </Fragment>
    )
}

export default Pageheader