import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

interface SpkNumbercardProps {
    cardNumber: string;
    number: string;
    holderName: string;
    title: string;
    valid: string;
    date: string;
}
const SpkNumbercard: React.FC<SpkNumbercardProps> = ({ cardNumber, number, holderName, title, valid, date }) => {
    return (
        <Fragment>
            <Card className="custom-card widget-card-balance">
                <Card.Body className="text-fixed-white">
                    <div className="d-flex justify-content-between gap-2 mb-3">
                        <i className="ri-mastercard-fill fs-1 text-fixed-white op-8 "></i>
                        <div className="text-end">
                            <div className="op-6 fs-12">{cardNumber}</div>
                            <div className="fs-5 fw-medium">{number} </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between gap-2">
                        <div className="">
                            <div className="op-6 fs-12">{holderName}</div>
                            <div className="fs-18 fw-medium">{title}</div>
                        </div>
                        <div className="text-end">
                            <div className="op-6 fs-12">{valid}</div>
                            <div className="fs-18 fw-medium">{date}</div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkNumbercard