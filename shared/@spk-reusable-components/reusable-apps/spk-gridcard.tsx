import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card, ProgressBar } from 'react-bootstrap'
import SpkButton from '../reusable-uiElements/spk-buttons'
import Image from 'next/image';

interface ProjectDetails {
    imgSrc?: string;
    title?: string;
    badgeColor?: string;
    subTitle?: string;
    avatars?: any;
    avatarText?: string;
    people?: number;
    startDate?: string;
    endDate?: string;
    percent?: string;
    levelColor?: string;
    level?: string;
}

interface SpkProjectListcardProps {
    obj: ProjectDetails;
};

const SpkGridcard: React.FC<SpkProjectListcardProps> = ({ obj }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body>
                    <div className="d-flex align-items-start mb-3 gap-1 flex-wrap">
                        <div className="me-2">
                            <span className="avatar avatar-lg avatar-rounded p-1 bg-info-transparent">
                                <Image width={48} height={48} src={obj.imgSrc as string} alt="" />
                            </span>
                        </div>
                        <div className="flex-fill">
                            <Link href="#!" className="fw-medium fs-14 d-block text-truncate project-list-title">{obj.title}</Link>
                            <span className={`badge bg-${obj.badgeColor}-transparent`}>{obj.subTitle}</span>
                        </div>
                        <div className="btn-list ms-auto">
                            <SpkButton Buttontype="submit" Buttonvariant="primary-light" Customclass="btn-sm btn-icon rounded-circle"> <i className="ri-eye-line"></i> </SpkButton>
                            <SpkButton Buttontype="submit" Buttonvariant="success-light" Customclass="btn-sm btn-icon rounded-circle"> <i className="ri-pencil-line"></i> </SpkButton>
                            <SpkButton Buttontype="submit" Buttonvariant="danger-light" Customclass="btn-sm btn-icon rounded-circle"> <i className="ri-delete-bin-line"></i> </SpkButton>
                        </div>
                    </div>
                    <div className="d-flex mb-3 justify-content-between gap-2">
                        <div className="flex-shrink-0">
                            <div className="fs-12"><span className="fw-semibold">Start Date:</span> {obj.startDate}</div>
                            <div className="fs-12"><span className="fw-semibold">End Date:</span> {obj.endDate}</div>
                        </div>
                        <div className="flex-shrink-0 text-end">
                            <div className="fs-12"><span className="fw-semibold">Priority Level:</span></div>
                            <div className={`badge bg-${obj.levelColor}`}>{obj.level}</div>
                        </div>
                    </div>
                    <div className="d-flex gap-1 flex-wrap">
                        <div>
                            <span className="mb-2"><span className="text-primary fw-medium">{obj.percent}</span> Completed</span>
                            <ProgressBar className="progress-stacked progress-xs my-auto gap-1">
                                <ProgressBar className="progress-bar bg-success rounded" role="progressbar" now={70} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                                <ProgressBar className="progress-bar bg-warning rounded" role="progressbar" now={20} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                <ProgressBar className="progress-bar bg-danger rounded" role="progressbar" now={10} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                            </ProgressBar>
                        </div>
                        <div className="avatar-list-stacked ms-auto">
                            {Array.isArray(obj.avatars) && obj.avatars.map((avatarImg, index) => (
                                <span key={index} className="avatar avatar-sm avatar-rounded">
                                    <Image width={20} height={20} src={avatarImg} alt={`img-${index}`} />
                                </span>
                            ))}
                            <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                {obj.avatarText}
                            </Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkGridcard