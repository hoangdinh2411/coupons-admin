"use client"
import SpkDatepickr from "@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { ListViewCards, ListviewData, Listviewassigneddata, Prioritydata, Statusdata } from "@/shared/data/apps/tasks/listViewData";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, Form, Modal, Pagination, ProgressBar, Row } from "react-bootstrap";

const ListView = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [dates, setDates] = useState<{ [key: string]: Date | string }>({});
    const handleDateChange = (key: string, date: Date | null) => {
        if (date) {
            setDates((prevDates) => ({
                ...prevDates,
                [key]: date,
            }));
        } else {
            setDates((prevDates) => {
                const { [key]: removedKey, ...rest } = prevDates;
                return rest;
            });
        }
    };

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-List View" />

            <Pageheader title="Apps" currentpage="List View" activepage="List View" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row className=" mx-0 bg-white g-3 pb-3 px-2 mb-3 rounded-2 mt-2">
                {ListViewCards.map((task) => (
                    <Col key={task.id} xxl={3}>
                        <Card className={`custom-card mb-0 overflow-hidden rounded-pill shadow-none ${task.bgClass}`}>
                            <Card.Body className="p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="lh-1">
                                            <span className={`avatar avatar-sm avatar-rounded ${task.iconClass}`}>
                                                <i className={`ti ${task.icon} fs-15`}></i>
                                            </span>
                                        </div>
                                        <div>
                                            {task.title}
                                        </div>
                                    </div>
                                    <h5 className="fw-medium mb-0 ms-auto">{task.count}</h5>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row className="">
                <Col xxl={12} xl={12}>
                    <Card className="custom-card bg-primary bg-opacity-005 border border-primary border-opacity-10">
                        <Card.Header className=" justify-content-between border-bottom-0">
                            <Card.Title>
                                Tasks List
                                <SpkButton onClickfunc={handleShow} Buttontype="button" Buttonvariant="primary" Customclass="btn-sm btn-wave waves-light rounded-pill ms-2" Buttontoggle="modal" Buttontarget="#create-task">
                                    <i className="ri-add-line fw-medium align-middle me-1"></i> Create Task
                                </SpkButton>
                            </Card.Title>
                            <div className="d-flex gap-2 align-items-center">
                                <Modal show={show} onHide={handleClose} className="modal fade" id="create-task" tabIndex={-1} centered>
                                    <div className="modal-content">
                                        <Modal.Header>
                                            <h6 className="modal-title">Add Task</h6>
                                            <button type="button" onClick={handleClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Row className=" gy-2">
                                                <Col xl={6}>
                                                    <label htmlFor="task-name" className="form-label">Task Name</label>
                                                    <Form.Control type="text" className="" id="task-name" placeholder="Task Name" />
                                                </Col>
                                                <Col xl={6}>
                                                    <label htmlFor="task-id" className="form-label">Task ID</label>
                                                    <Form.Control type="text" className="" id="task-id" placeholder="Task ID" />
                                                </Col>
                                                <Col xl={6}>
                                                    <label className="form-label">Assigned Date</label>
                                                    <div className="form-group">
                                                        <div className="input-group flex-nowrap">
                                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                            <SpkDatepickr className="form-control breadcrumb-input border-1  " Timeinput="Time:" dateFormat="yy/MM/dd h:mm aa" selected={dates["startDate"] ? new Date(dates["startDate"]) : null} onChange={(date: Date | null) => handleDateChange("startDate", date)} placeholderText='Choose date and time' showTimeInput />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={6}>
                                                    <label className="form-label">Due Date</label>
                                                    <div className="form-group">
                                                        <div className="input-group flex-nowrap">
                                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                            <SpkDatepickr className="form-control breadcrumb-input border-1  " Timeinput="Time:" dateFormat="yy/MM/dd h:mm aa" selected={dates["dueDate"] ? new Date(dates["dueDate"]) : null} onChange={(date: Date | null) => handleDateChange("dueDate", date)} placeholderText='Choose date and time' showTimeInput />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={6}>
                                                    <label className="form-label">Status</label>
                                                    <SpkSelect name="state" option={Statusdata} mainClass="js-example-placeholder-multiple w-full js-states" menuplacement='auto' classNameprefix="Select2" defaultvalue={[Statusdata[0]]} />
                                                </Col>
                                                <Col xl={6}>
                                                    <label className="form-label">Priority</label>
                                                    <SpkSelect name="state" option={Prioritydata} mainClass="js-example-placeholder-multiple w-full js-states" menuplacement='auto' classNameprefix="Select2" defaultvalue={[Prioritydata[0]]} />
                                                </Col>
                                                <Col xl={12}>
                                                    <label className="form-label">Assigned To</label>
                                                    <SpkSelect multi name="state" option={Listviewassigneddata} mainClass="js-example-placeholder-multiple w-full js-states"
                                                        menuplacement='auto' classNameprefix="Select2" />
                                                </Col>
                                            </Row>
                                        </Modal.Body>
                                        <div className="modal-footer">
                                            <SpkButton Buttontype="button" onClickfunc={handleClose} Buttonvariant="light" Customclass="" Buttondismiss="modal">
                                                Cancel
                                            </SpkButton>
                                            <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="" >
                                                Add Task
                                            </SpkButton>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </Modal>
                                {/* <!-- End::add task modal --> */}
                                <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-icon btn-secondary btn-sm btn-wave waves-light no-caret" IconClass="ti ti-dots-vertical" Icon={true}>
                                    <li><Dropdown.Item href="#!">New Tasks</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Pending Tasks</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Completed Tasks</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Inprogress Tasks</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" pt-0">
                            <div className="d-flex gap-2 px-3 align-items-center mb-3">
                                <div className="form-check mb-0">
                                    <input className="form-check-input check-all" type="checkbox" name="all-tasks" id="all-tasks" />
                                    <label className="form-check-label fs-14 fw-medium" htmlFor="all-tasks">
                                        Select All Tasks
                                    </label>
                                </div>
                                <SpkButton Buttontype="button" Buttonvariant="danger-light" Customclass="ms-1 btn-sm ms-auto" >
                                    Delete All
                                </SpkButton>
                            </div>
                            {ListviewData.map((task) => (
                                <div key={task.id} className={`d-flex p-3 border rounded-4 align-items-center bg-white flex-wrap justify-content-between task-list ${task.cradClass}`}>
                                    <div className="form-check mb-0 task-checkbox">
                                        <input className="form-check-input me-2" type="checkbox" name={task.id} id={task.id} />
                                        <label className="form-check-label" htmlFor={task.id}>
                                            {task.title} <span className={`badge ${task.priority.color} ms-2 rounded-pill`}>{task.status}</span>
                                        </label>
                                    </div>

                                    <div>
                                        <div className="fw-medium">Due Date: <span className="text-muted mx-2">{task.dueDate}</span></div>
                                    </div>

                                    <div className="d-flex gap-1 flex-wrap">
                                        <div className="flex-shrink-0">
                                            <span className="text-primary fw-medium">{task.progress.success}%</span> Completed
                                        </div>
                                        <ProgressBar className="progress-stacked progress-xs flex-grow-1 w-100 flex-shrink-0 my-auto gap-1">
                                            <ProgressBar className="progress-bar bg-success rounded" role="progressbar" now={task.progress.success} aria-valuenow={task.progress.success} aria-valuemin={0} aria-valuemax={100} />
                                            <ProgressBar className="progress-bar bg-warning rounded" role="progressbar" now={task.progress.warning} aria-valuenow={task.progress.warning} aria-valuemin={0} aria-valuemax={100} />
                                            <ProgressBar className="progress-bar bg-danger rounded" role="progressbar" now={task.progress.danger} aria-valuenow={task.progress.danger} aria-valuemin={0} aria-valuemax={100} />
                                        </ProgressBar>
                                    </div>

                                    <div>
                                        <div className="fw-medium">Priority Level: <span className={`badge ${task.priority.badgeClass} ms-2 rounded-pill`}>{task.priority.level}</span></div>
                                    </div>

                                    <div>
                                        <div className="fw-medium">Assigned Date: <span className="text-muted mx-2">{task.assignedDate}</span></div>
                                    </div>

                                    <div className="avatar-list-stacked">
                                        {task.avatars.map((avatar, index) => (
                                            <span key={index} className="avatar avatar-sm avatar-rounded">
                                                <Image width={28} height={28} src={avatar} alt={`User Avatar ${index + 1}`} />
                                            </span>
                                        ))}
                                        {task.extraAvatars > 0 && (
                                            <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                +{task.extraAvatars}
                                            </Link>
                                        )}
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <button className="btn btn-success btn-icon btn-sm">
                                            <i className="ri-edit-line"></i>
                                        </button>
                                        <button className="btn btn-danger btn-icon ms-1 btn-sm task-delete-btn">
                                            <i className="ri-delete-bin-5-line"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </Card.Body>
                        <div className="card-footer border-top-0">
                            <nav aria-label="Page navigation">
                                <Pagination className="mb-0 float-end">
                                    <Pagination.Item className="disabled">Prev</Pagination.Item>
                                    <Pagination.Item className="">1</Pagination.Item>
                                    <Pagination.Item className="active">2</Pagination.Item>
                                    <Pagination.Item className="">3</Pagination.Item>
                                    <Pagination.Item className="">next</Pagination.Item>
                                </Pagination>
                            </nav>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-2 --> */}
        </Fragment>
    );
};

export default ListView;