import React from 'react'
import { Col } from 'react-bootstrap'

interface IncomeCardProps {
    title: string;
    amount: string;
    percentage: string;
    iconClass: string;
    bgClass: string;
    borderClass: string;
    textColor: string;
}

const IncomeCard: React.FC<IncomeCardProps> = ({ title, amount, percentage, iconClass, bgClass, borderClass, textColor }) => {
    return (
        <Col xl={6} sm={6}>
            <div className={`p-3 rounded bg-light border ${borderClass} border-opacity-10 bg-opacity-75`}>
                <div className="d-flex gap-2 align-items-center flex-wrap">
                    <div className={`flex-shrink-0 avatar avatar-lg ${bgClass} avatar-rounded`}>
                        <i className={`${iconClass} fs-25 lh-1`}></i>
                    </div>
                    <div>
                        <div className="fw-semibold mb-1">{title}</div>
                        <span className={`text-muted fw-medium ${textColor}`}>
                            {percentage}{' '}
                            <i className={`ri-arrow-up-s-fill fs-15 lh-1 align-middle ${textColor}`}></i>
                        </span>
                    </div>
                    <div className="fw-semibold ms-auto align-self-end fs-16 mb-2">{amount}</div>
                </div>
            </div>
        </Col>
    )
}
export default IncomeCard;