import React, { Fragment } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import SpkDropdown from '../reusable-uiElements/spk-dropdown';
import Link from 'next/link';
import Image from 'next/image';

interface Kanban {
    badgeColor?: string;
    badge?: string;
    title?: string;
    description?: string;
    priorityColor?: string;
    priority?: string;
    completed?: string;
    imgSrc?: string;
    name?: string;
    role?: string;
    user?: string;
    attachment?: string;
    badges?: any;
    message?: string;
}

interface SpkKanbanCardProps {
    kanban: Kanban;
    cardClass?: string;
}

const SpkKanbanCard: React.FC<SpkKanbanCardProps> = ({ kanban, cardClass }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Header className="justify-content-between">
                    <div className="task-badges">
                        <span className={`badge bg-${kanban.badgeColor}-transparent me-1`}>{kanban.badge}</span>
                        {kanban.badges}
                    </div>
                    <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-sm btn-light no-caret" IconClass="ri-more-2-fill" Icon={true}>
                        <li className=""><Dropdown.Item href="#!">View</Dropdown.Item></li>
                        <li className=""><Dropdown.Item href="#!">Edit</Dropdown.Item></li>
                        <li><Dropdown.Item href="#!">Delete</Dropdown.Item></li>
                    </SpkDropdown>
                </Card.Header>
                <Card.Body>
                    <Link scroll={false} href="#!" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <h6 className="fw-medium mb-1 fs-15">{kanban.title}</h6>
                    </Link>
                    <p className="kanban-task-description">{kanban.description}</p>
                    <div className="mb-1">
                        <span className="fw-medium">Priority: </span><span className={`badge bg-${kanban.priorityColor}`}>{kanban.priority}</span>
                    </div>
                    <div>
                        <span className="fw-medium">Status: </span><span className="fs-11 text-muted">{kanban.completed}<i className="bi bi-bar-chart-fill mx-1 text-pink"></i></span>
                    </div>
                </Card.Body>
                <div className="p-3 border-top border-block-start-dashed">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex gap-2 align-items-center">
                            <span className="avatar avatar-md avatar-rounded">
                                <Image width={40} height={40} src={kanban.imgSrc as string} alt="img" />
                            </span>
                            <div>
                                <div className="fw-medium">{kanban.name}</div>
                                <div className="text-muted fs-10">{kanban.role}</div>
                            </div>
                        </div>
                        <div>
                            <Link scroll={false} href="#!" className="me-2 text-success">
                                <span className="me-1"><i className="ri-user-line align-center fw-normal lh-1"></i></span><span className="fw-medium fs-12">{kanban.user}</span>
                            </Link>
                            <Link scroll={false} href="#!" className="me-2 text-secondary">
                                <span className="me-1"><i className="ri-attachment-line align-middle fw-normal"></i></span><span className="fw-medium fs-12">{kanban.attachment}</span>
                            </Link>
                            <Link scroll={false} href="#!" className="text-info">
                                <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-medium fs-12">{kanban.message}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>
        </Fragment>
    );
};

export default SpkKanbanCard;
