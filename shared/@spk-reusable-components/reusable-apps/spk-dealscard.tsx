import React, { Fragment } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import SpkDropdown from '../reusable-uiElements/spk-dropdown';
import Link from 'next/link';
import SpkTooltips from '../reusable-uiElements/spk-tooltips';
import Image from 'next/image';

interface Deal {
    title: string;
    amount: string;
    date: string;
    btnTitle: string;
    imgSrc: string;
}

interface SpkDealsCardProps {
    deals: Deal;
    cardClass?: string;
}

const SpkDealscard: React.FC<SpkDealsCardProps> = ({ deals, cardClass = '' }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Body>
                    <div className="d-flex align-items-start gap-2 mb-3 flex-wrap">
                        <div>
                            <p className="fw-medium mb-1 fs-14 deal-title">{deals.title}</p>
                            <p className="fw-medium mb-1">
                                <span className="text-muted fw-normal">
                                    <i className="ri-money-dollar-circle-line text-success me-1 fs-14"></i>Amount:
                                </span>
                                {deals.amount}
                            </p>
                            <p className="fw-medium mb-0">
                                <span className="text-muted fw-normal">
                                    <i className="ri-calendar-line text-pink"></i> Date:
                                </span>
                                {deals.date}
                            </p>
                        </div>
                        <SpkDropdown Customclass="ms-auto" toggleas="a" Customtoggleclass="btn btn-light btn-icon rounded-pill btn-sm text-muted no-caret" Icon={true} IconClass="ri-more-line lh-1 align-middle fs-16" Align="end" Menuclass="dropdown-menu-end">
                            <Dropdown.Item as="li" href="#!">Edit</Dropdown.Item>
                            <Dropdown.Item as="li" href="#!">Delete</Dropdown.Item>
                            <Dropdown.Item as="li" href="#!">View Details</Dropdown.Item>
                        </SpkDropdown>
                    </div>
                    <div className="d-flex align-items-center gap-2 flex-wrap justify-content-between">
                        <div>
                            <SpkTooltips placement="top" title="Company">
                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Company" className="company-name px-2 rounded fs-10 py-1">
                                    {deals.btnTitle}
                                </Link>
                            </SpkTooltips>
                        </div>
                        <div className="lh-1">
                            <span className="avatar avatar-sm avatar-rounded">
                                <Image height={28} width={28} src={deals.imgSrc} alt="Company Representative" />
                            </span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    );
}

export default SpkDealscard;
