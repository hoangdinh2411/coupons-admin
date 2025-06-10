import React, { Fragment } from 'react'
import { Card, Dropdown } from 'react-bootstrap'
import SpkDropdown from '../reusable-uiElements/spk-dropdown'
import Image from 'next/image';

interface SpkEventscardProps {
    eventTitle?: string;
    clientName?: string;
    startTime?: string;
}

const SpkEventscard: React.FC<SpkEventscardProps> = ({
    eventTitle,
    clientName,
    startTime,
}) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body className="p-4">
                    <div className="d-flex gap-2 align-items-start justify-content-between">
                        <div>
                            <div className="text-muted fs-12">{eventTitle}</div>
                            <h6 className="fw-semibold my-1">{clientName}</h6>
                        </div>
                        <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-sm btn-icon btn-primary-light rounded-circle no-caret" IconClass="bi bi-grid lh-1" Icon={true}>
                            <Dropdown.Item><i className="ri-pencil-line me-1"></i>Edit</Dropdown.Item>
                            <Dropdown.Item><i className="ri-share-forward-line me-1"></i>Share</Dropdown.Item>
                            <Dropdown.Item><i className="ri-delete-bin-line me-1"></i>Delete</Dropdown.Item>
                        </SpkDropdown>
                    </div>
                    <div className="text-primary fw-semibold mb-4 mt-2 fs-14">
                        <i className="ri-time-line lh-1 align-middle me-1"></i>{startTime}
                    </div>
                    <div className="avatar-list-stacked">
                        <span className="avatar avatar-md avatar-rounded p-1 bg-primary-transparent"> <Image width={40} height={40} src="../assets/images/faces/12.jpg" alt="img" /> </span>
                        <span className="avatar avatar-md avatar-rounded p-1 bg-primary-transparent"> <Image width={40} height={40} src="../assets/images/faces/8.jpg" alt="img" /> </span>
                        <span className="avatar avatar-md avatar-rounded p-1 bg-primary-transparent"> <Image width={40} height={40} src="../assets/images/faces/2.jpg" alt="img" /> </span>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkEventscard;
