import Image from 'next/image';
import React, { Fragment } from 'react'

interface Acuation {
    imgSrc?: string;
    avatarSrc?: any;
    title?: string;
    mail?: string;
    price?: string;
}

interface SpkAcuationcardProps {
    acuation?: Acuation;
}

const SpkAcuationcard: React.FC<SpkAcuationcardProps> = ({ acuation }) => {
    return (
        <Fragment>
            <div className="p-2 border rounded-3 card custom-card">
                <Image fill src={acuation?.imgSrc as string} alt="" className="img-fluid rounded-3 mb-3" />
                <div className="d-flex mb-2 align-items-center flex-wrap gap-2 mb-2">
                    <div className="lh-1">
                        <span className="avatar avatar-rounded avatar-sm">
                            <Image width={20} height={20} src={acuation?.avatarSrc } alt="" />
                        </span>
                    </div>
                    <div className="flex-fill">
                        <p className="mb-0 fw-medium">{acuation?.title} <i className="bi bi-patch-check-fill text-success align-middle lh-1"></i></p>
                        <p className="fs-11 text-muted mb-0">{acuation?.mail}</p>
                    </div>
                    <div>
                        <span className="text-muted">Bid: </span><span className="fs-14 fw-semibold ms-2">{acuation?.price}</span>
                    </div>
                </div>
                <div className="btn btn-sm btn-primary-light w-100">
                    Place a Bid
                </div>
            </div>
        </Fragment>
    )
}

export default SpkAcuationcard