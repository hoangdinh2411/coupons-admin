import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

interface SpkCustomercardProps {
    widget?: any;
}

const SpkCustomercard: React.FC<SpkCustomercardProps> = ({ widget }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body className="d-flex gap-3 align-items-center">
                    <div className={widget.avatarClass}>
                        <i className={widget.iconClass}></i>
                    </div>
                    <div>
                        <h6 className="fw-semibold mb-1">{widget.value}</h6>
                        <div className="text-muted mb-0 me-1 d-inline-block">{widget.label}</div>
                    </div>
                    <i className={`${widget.chartIconClass} align-self-end mb-1`}></i>
                    <span className={widget.badgeClass}>
                        {widget.badgeText}<i className={widget.badgeIcon}></i>
                    </span>
                </Card.Body>
            </Card>

        </Fragment>
    )
}

export default SpkCustomercard