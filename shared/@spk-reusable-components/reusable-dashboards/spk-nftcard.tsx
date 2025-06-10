import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

interface Nft {
    bgColor?: string;
    title?: string;
    price?: string;
    percentage?: string;
    color?: string;
    cardcustomclass?: string;
}

interface SpkNftcardProps {
    nft?: Nft;
}

const SpkNftcard: React.FC<SpkNftcardProps> = ({ nft }) => {
    return (
        <Fragment>
            <Card className={`custom-card shadow-none ${nft?.cardcustomclass}`}>
                <Card.Body className="p-0">
                    <div className={`d-flex p-3 flex-wrap border border-${nft?.bgColor} border-opacity-10 rounded-3 align-items-center gap-2`}>
                        <i className={`ti ti-coins fs-1 text-${nft?.bgColor}`}></i>
                        <div>
                            <p className="mb-1 fw-semibold">{nft?.title}</p>
                            <p className="mb-0 text-pink fw-semibold ms-2">{nft?.price}</p>
                        </div>
                        <div className="ms-auto text-end">
                            <p className={`text-${nft?.color} fw-semibold mb-0`}>{nft?.percentage}</p>
                            <span className="text-muted fw-medium fs-12">from last month</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkNftcard;
