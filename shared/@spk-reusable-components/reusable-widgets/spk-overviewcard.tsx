import React, { Fragment } from 'react'
import SpkDropdown from '../reusable-uiElements/spk-dropdown'
import { Dropdown } from 'react-bootstrap'

const SpkOverviewcard = () => {
    return (
        <Fragment>
            <div className="card custom-card">
                <div className="card-body p-4">
                    <div className="d-flex gap-3 align-items-center mb-2 justify-content-between">
                        <p className="mb-0 fw-semibold">Project Overview</p>
                        <div className="d-flex align-items-center lh-1">
                            <div className="stars-main me-3 text-muted">
                                <i className="ri-star-fill star"></i>
                            </div>
                            <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-sm btn-icon btn-primary-light rounded-circle no-caret" IconClass="bi bi-grid lh-1" Icon={true}>
                                <Dropdown.Item href="#!"><i className="ri-pencil-line me-1"></i>Edit</Dropdown.Item>
                                <Dropdown.Item href="#!"><i className="ri-share-forward-line me-1"></i>Share</Dropdown.Item>
                                <Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1"></i>Delete</Dropdown.Item>
                            </SpkDropdown>
                        </div>
                    </div>
                    <h3 className="d-inline-block me-2">45%</h3><span className="text-muted fs-12 align-middle">Completed Project</span>
                    <div className="d-flex align-items-center mb-1 justify-content-between">
                        <div>Project Progress</div>
                        <div className="fw-semibold">45%</div>
                    </div>
                    <div className="progress-stacked progress-sm mb-3 mt-2 gap-1">
                        <div className="progress-bar rounded" role="progressbar" style={{ width: "45%" }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}></div>
                        <div className="progress-bar bg-secondary rounded" role="progressbar" style={{ width: "25%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                        <div className="progress-bar bg-success rounded" role="progressbar" style={{ width: "30%" }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                    <div className="d-flex gap-3 align-items-start justify-content-between flex-wrap flex-xxl-nowrap">
                        <div className="text-center">
                            <div className="flex-shrink-0 avatar avatar-md bg-primary-transparent avatar-rounded mb-2">
                                <i className="ri-file-list-3-fill fs-15 lh-1"></i>
                            </div>
                            <div className="fw-semibold mb-1">
                                Completed
                            </div>
                            <span className="text-muted fs-14 fw-medium">45%</span>
                            <div className="fw-semibold mt-1">
                                25 Tasks
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="flex-shrink-0 avatar avatar-md bg-secondary-transparent avatar-rounded mb-2">
                                <i className="ri-file-list-3-fill fs-15 lh-1"></i>
                            </div>
                            <div className="fw-semibold mb-1">
                                Upcoming
                            </div>
                            <span className="text-muted fs-14 fw-medium">25%</span>
                            <div className="fw-semibold mt-1">
                                13 Tasks
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="flex-shrink-0 avatar avatar-md bg-success-transparent avatar-rounded mb-2">
                                <i className="ri-file-list-3-fill fs-15 lh-1"></i>
                            </div>
                            <div className="fw-semibold mb-1">
                                New
                            </div>
                            <span className="text-muted fs-14 fw-medium">30%</span>
                            <div className="fw-semibold mt-1">
                                03 Tasks
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SpkOverviewcard