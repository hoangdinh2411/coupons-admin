"use client"

import SpkDatepickr from "@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { Completedtasks, Holdtasks, InProgress, Listviewassigneddata, Pendingtasks, Prioritydata, Statusdata, Tasks } from "@/shared/data/pages/todolistdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Modal, Nav, Pagination, ProgressBar, Row, Tab } from "react-bootstrap";

interface TodolistProps {}

const Todolist: React.FC<TodolistProps> = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [dates, setDates] = useState<{ [key: string]: Date | string | null }>({});
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

    const [selectedTasks, setSelectedTasks] = useState(
        Tasks.map((_, index) => index === 2 || index === 4)
    );

    const handleCheckboxChange = (index: number) => {
        const updatedSelectedTasks = [...selectedTasks];
        updatedSelectedTasks[index] = !updatedSelectedTasks[index];
        setSelectedTasks(updatedSelectedTasks);
    };

    const handleSelectAll = () => {
        const areAllSelected = selectedTasks.every((selected) => selected);
        setSelectedTasks(Tasks.map(() => !areAllSelected));
    };

    const [allData, setAllData] = useState(Tasks);
    const handleRemove = (id: number) => {
        const newList = allData.filter((idx) => idx.id !== id)
        setAllData(newList)
    }
    const [progress, setAllprogress] = useState(InProgress);
    const handleRemoveProgress = (id: number) => {
        const newList = progress.filter((idx) => idx.id !== id)
        setAllprogress(newList)
    }
    const [onhold, setAllonhold] = useState(Holdtasks);
    const handleRemoveHold = (id: number) => {
        const newList = onhold.filter((idx) => idx.id !== id)
        setAllonhold(newList)
    }
    const [pending, setAllpending] = useState(Pendingtasks);
    const handleRemovePending = (id: number) => {
        const newList = pending.filter((idx) => idx.id !== id)
        setAllpending(newList)
    }
    const [complete, setAllcomplete] = useState(Completedtasks);
    const handleRemoveComplete = (id: number) => {
        const newList = complete.filter((idx) => idx.id !== id)
        setAllcomplete(newList)
    }

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Pages-To-Do List" />

            <Pageheader title="Pages" currentpage="To-Do List" activepage="To-Do List" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={9}>
                    <Card className="custom-card">
                        <Tab.Container defaultActiveKey="1">
                            <Card.Header className=" d-block">
                                <Card.Title className="mb-3">
                                    Tasks List
                                </Card.Title>
                                <div>
                                    <Nav as="ul" className="nav-tabs tab-style-1 d-sm-flex d-block mb-0 align-items-center" role="tablist">
                                        <Nav.Item as="li" className="m-1">
                                            <Nav.Link as="a" eventKey="1" className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                                href="#all-tasks" aria-selected="true">All Tasks</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li" className="m-1">
                                            <Nav.Link as="a" eventKey="2" className="" data-bs-toggle="tab" role="tab"
                                                href="#in-progress-tasks" aria-selected="false">In Progress</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li" className="m-1">
                                            <Nav.Link as="a" eventKey="3" className="" data-bs-toggle="tab" role="tab"
                                                href="#on-hold-tasks" aria-selected="false">On-Hold</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li" className="m-1">
                                            <Nav.Link as="a" eventKey="4" className="" data-bs-toggle="tab" role="tab"
                                                href="#pending-tasks" aria-selected="false">Pending</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li" className="m-1">
                                            <Nav.Link as="a" eventKey="5" className="" data-bs-toggle="tab" role="tab"
                                                href="#completed" aria-selected="false">Completed</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li" className="ms-auto">
                                            <span className="btn btn-sm btn-success" onClick={handleShow} data-bs-toggle="modal" data-bs-target="#addtask"> <i className="fe fe-plus"></i> New Task </span>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </Card.Header>
                            <Tab.Content>
                                <Tab.Pane eventKey="1" className=" p-0 border-0" id="all-tasks" role="tabpanel">
                                    <div className="table-responsive">
                                        <SpkTables tableClass="table text-nowrap" showCheckbox={true} Customcheckclass="check-all" header={[{ title: '', headerClassname: 'todolist-handle-drag' }, { title: 'Task Title' }, { title: 'Priority' }, { title: 'Assigner' }, { title: 'Status' }, { title: 'Assigned To' }, { title: 'Deadline' }, { title: 'Progress', headerClassname: 'todolist-progress' }, { title: 'Action' }]} checked={selectedTasks.every((selected) => selected)} onChange={handleSelectAll}>
                                            {allData.map((task, index) => (
                                                <tr key={task.id} className="todo-box">
                                                    <td className="task-checkbox">
                                                        <input className="form-check-input" type="checkbox" checked={selectedTasks[index]} onChange={() => handleCheckboxChange(index)} aria-label={`Task ${task.id}`} />
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-icon btn-sm btn-wave btn-light todo-handle">: :</button>
                                                    </td>
                                                    <td>
                                                        <span className="fw-medium">{task.title}</span>
                                                    </td>
                                                    <td>
                                                        <span className={`badge ${task.priority === 'High' ? 'bg-pink' : task.priority === 'Medium' ? 'bg-warning' : task.priority === 'Urgent' ? 'bg-danger' : 'bg-success'}`}>
                                                            {task.priority}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="text-center d-flex gap-2 flex-wrap align-items-center fw-medium">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <Image height={28} width={28} src={task.imgSrc} alt={task.assignee} />
                                                            </span>
                                                            {task.assignee}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className={`fw-medium text-${task.status === 'In Progress' ? 'info' : task.status === 'Pending' ? 'warning' : task.status === 'Completed' ? 'success' : task.status === 'On Hold' ? 'danger' : 'default'}`}>
                                                            {task.status}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-list-stacked">
                                                            {task.assigneesAvatars.map((image, index) => (
                                                                <span key={index} className="avatar avatar-xs avatar-rounded">
                                                                    <Image width={20} height={20} src={image} alt="extra-assignee" />
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </td>
                                                    <td>{task.dueDate}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <ProgressBar className="progress progress-animate progress-xs w-100" role="progressbar" aria-valuenow={task.progress} aria-valuemin={0} aria-valuemax={100}>
                                                                <ProgressBar className={`progress-bar progress-bar-striped progress-bar-animated bg-${task.status === 'In Progress' ? 'warning' : task.status === 'Pending' ? 'danger' : task.status === 'On Hold' ? 'warning' : 'primary'}`} now={task.progress} />
                                                            </ProgressBar>
                                                            <div className="ms-2">{task.progress}%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <div className="d-flex gap-2">
                                                            <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                                                <i className="ri-edit-line"></i>
                                                            </Link>
                                                            <Link href="#!" scroll={false} onClick={() => handleRemove(task.id)} className="todo-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                                <i className="ri-delete-bin-line"></i>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </SpkTables>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2" className="p-0 border-0" id="in-progress-tasks"
                                    role="tabpanel">
                                    <div className="table-responsive">
                                        <SpkTables tableClass="table text-nowrap" header={[{ title: 'Task Title' }, { title: 'Priority' }, { title: 'Assigner' }, { title: 'Status' }, { title: 'Assigned To' }, { title: 'Deadline' }, { title: 'Progress', headerClassname: 'todolist-progress' }, { title: 'Action' }]}>
                                            {progress.map((task) => (
                                                <tr key={task.id} className="todo-box">
                                                    <td>
                                                        <span className="fw-medium">{task.title}</span>
                                                    </td>
                                                    <td>
                                                        <span className={`badge ${task.priority === 'High' ? 'bg-pink' : task.priority === 'Medium' ? 'bg-warning' : task.priority === 'Low' ? 'bg-success' : 'bg-danger'}`}>
                                                            {task.priority}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="text-center d-flex gap-2 flex-wrap align-items-center fw-medium">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <Image height={28} width={28} src={task.avatars[0]} alt={task.assignedTo} />
                                                            </span>
                                                            {task.assignedTo}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="fw-medium text-info">{task.status}</span>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-list-stacked">
                                                            {task.avatars.slice(1).map((avatar, index) => (
                                                                <span key={index} className="avatar avatar-xs avatar-rounded">
                                                                    <Image width={20} height={20} src={avatar} alt="img" />
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </td>
                                                    <td>{task.deadline}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <ProgressBar className="progress progress-animate progress-xs w-100" role="progressbar" aria-valuenow={task.progress} aria-valuemin={0} aria-valuemax={100}>
                                                                <ProgressBar className={`progress-bar progress-bar-striped progress-bar-animated bg-${task.ProgressBg}`} now={task.progress} />
                                                            </ProgressBar>
                                                            <div className="ms-2">{task.progress}%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <div className="d-flex gap-2">
                                                            <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                                                <i className="ri-edit-line"></i>
                                                            </Link>
                                                            <Link href="#!" scroll={false} onClick={() => handleRemoveProgress(task.id)} className="todo-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                                <i className="ri-delete-bin-line"></i>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </SpkTables>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3" className="p-0 border-0" id="on-hold-tasks"
                                    role="tabpanel">
                                    <div className="table-responsive">
                                        <SpkTables tableClass="table text-nowrap" header={[{ title: 'Task Title' }, { title: 'Priority' }, { title: 'Assigner' }, { title: 'Status' }, { title: 'Assigned To' }, { title: 'Deadline' }, { title: 'Progress', headerClassname: 'todolist-progress' }, { title: 'Action' }]}>
                                            {onhold.map((task, index) => (
                                                <tr className="todo-box" key={index}>
                                                    <td>
                                                        <span className="fw-medium">{task.title}</span>
                                                    </td>
                                                    <td>
                                                        <span className={`badge ${task.priorityClass}`}>{task.priority}</span>
                                                    </td>
                                                    <td>
                                                        <div className="text-center d-flex gap-2 flex-wrap align-items-center fw-medium">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <Image height={28} width={28} src={task.assignee.avatars} alt="task.assignee.name" />
                                                            </span>
                                                            {task.assignee.name}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="fw-medium text-danger">On Hold</span>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-list-stacked">
                                                            {task.team.slice(1).map((member, index) => (
                                                                <span key={index} className="avatar avatar-xs avatar-rounded">
                                                                    <Image width={20} height={20} src={member.avatar}  alt=""/>
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {task.dueDate}
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <ProgressBar className="progress progress-animate progress-xs w-100" role="progressbar" aria-valuenow={task.progress} aria-valuemin={0} aria-valuemax={100}>
                                                                <ProgressBar className={`progress-bar progress-bar-striped progress-bar-animated bg-${task.ProgressBg}`} now={task.progress} />
                                                            </ProgressBar>
                                                            <div className="ms-2">{task.progress}%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <div className="d-flex gap-2">
                                                            <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                                                <i className="ri-edit-line"></i>
                                                            </Link>
                                                            <Link href="#!" scroll={false} onClick={() => handleRemoveHold(task.id)} className="todo-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                                <i className="ri-delete-bin-line"></i>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </SpkTables>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="4" className="p-0 border-0" id="pending-tasks"
                                    role="tabpanel">
                                    <SpkTables tableClass="table text-nowrap" header={[{ title: 'Task Title' }, { title: 'Priority' }, { title: 'Assigner' }, { title: 'Status' }, { title: 'Assigned To' }, { title: 'Deadline' }, { title: 'Progress', headerClassname: 'todolist-progress' }, { title: 'Action' }]}>
                                        {pending.map((idx, index) => (
                                            <tr className="todo-box" key={index}>
                                                <td>
                                                    <span className="fw-medium">{idx.title}</span>
                                                </td>
                                                <td>
                                                    <span className={`badge ${idx.priorityClass}`}>{idx.priority}</span>
                                                </td>
                                                <td>
                                                    <div className="text-center d-flex gap-2 flex-wrap align-items-center fw-medium">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <Image height={28} width={28} src={idx.assignee.avatar} alt="task.assignee.name" />
                                                        </span>
                                                        {idx.assignee.name}
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="fw-medium text-warning">Pending</span>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        {idx.team.slice(0).map((member, index) => (
                                                            <span key={index} className="avatar avatar-xs avatar-rounded">
                                                                <Image width={20} height={20} src={member.avatar}  alt=""/>
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.dueDate}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <ProgressBar className="progress progress-animate progress-xs w-100" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                                            <ProgressBar className={`progress-bar progress-bar-striped progress-bar-animated bg-${idx.progressColor}`} now={idx.progress}></ProgressBar>
                                                        </ProgressBar>
                                                        <div className="ms-2">{idx.progress}%</div>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <div className="d-flex gap-2">
                                                        <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                                            <i className="ri-edit-line"></i>
                                                        </Link>
                                                        <Link href="#!" scroll={false} onClick={() => handleRemovePending(idx.id)} className="todo-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </SpkTables>
                                </Tab.Pane>
                                <Tab.Pane eventKey="5" className="p-0 border-0" id="completed"
                                    role="tabpanel">
                                    <div className="table-responsive">
                                        <SpkTables tableClass="table text-nowrap" header={[{ title: 'Task Title' }, { title: 'Priority' }, { title: 'Assigner' }, { title: 'Status' }, { title: 'Assigned To' }, { title: 'Deadline' }, { title: 'Progress', headerClassname: 'todolist-progress' }, { title: 'Action' }]}>
                                            {complete.map((idx, index) => (
                                                <tr className="todo-box" key={index}>
                                                    <td>
                                                        <span className="fw-medium">{idx.title}</span>
                                                    </td>
                                                    <td>
                                                        <span className={`badge ${idx.priorityClass}`}>{idx.priority}</span>
                                                    </td>
                                                    <td>
                                                        <div className="text-center d-flex gap-2 flex-wrap align-items-center fw-medium">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <Image height={28} width={28} src={idx.assignee.avatar} alt="task.assignee.name" />
                                                            </span>
                                                            {idx.assignee.name}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="fw-medium text-success">Completed</span>
                                                    </td>
                                                    <td>
                                                        <div className="avatar-list-stacked">
                                                            {idx.team.slice(0).map((member, index) => (
                                                                <span key={index} className="avatar avatar-xs avatar-rounded">
                                                                    <Image width={20} height={20} src={member.avatar}  alt=""/>
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {idx.dueDate}
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <ProgressBar className="progress progress-animate progress-xs w-100" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                                                <ProgressBar className={`progress-bar progress-bar-striped progress-bar-animated bg-${idx.progressColor}`} now={idx.progress}></ProgressBar>
                                                            </ProgressBar>
                                                            <div className="ms-2">{idx.progress}%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <div className="d-flex gap-2">
                                                            <Link href="#!" scroll={false} className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                                                <i className="ri-edit-line"></i>
                                                            </Link>
                                                            <Link href="#!" scroll={false} onClick={() => handleRemoveComplete(idx.id)} className="todo-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                                <i className="ri-delete-bin-line"></i>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </SpkTables>
                                    </div>
                                </Tab.Pane>
                                <Card.Footer className="border-top-0">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <div> Showing 10 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                        <div>
                                            <nav aria-label="Page navigation" className="pagination-style-4">
                                                <Pagination className="mb-0">
                                                    <Pagination.Item className="disabled">Prev</Pagination.Item>
                                                    <Pagination.Item className="active">1</Pagination.Item>
                                                    <Pagination.Item className="">2</Pagination.Item>
                                                    <Pagination.Item className="text-primary">next</Pagination.Item>
                                                </Pagination>
                                            </nav>
                                        </div>
                                    </div>
                                </Card.Footer>
                            </Tab.Content>
                        </Tab.Container>
                    </Card>
                </Col>
                <div className="col-xl-3">
                    <Card className="custom-card">
                        <Card.Header className=" gap-3 align-items-center pb-3 border-bottom border-block-end-dashed d-block text-center">
                            <div className="p-3 bg-primary-transparent rounded">
                                <Image fill src="../../assets/images/media/media-84.png" alt="" className="img-fluid todolist-img mb-3" />
                                <div className="card-title mb-3 text-default">
                                    Create New To-Do List
                                    <span className="text-muted d-block fs-12 fw-normal"> Create new list</span>
                                </div>
                                <button className="btn btn-secondary">
                                    <i className="ri-add-line me-1"></i> New To-Do List
                                </button>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="p-3 task-navigation">
                                <ul className="list-unstyled task-main-nav mb-0">
                                    <li className="px-0 pt-0">
                                        <span className="fs-11 text-muted op-7 fw-medium">Task Categories</span>
                                    </li>
                                    <li className="active">
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-checkbox-multiple-line align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    All Tasks
                                                </span>
                                                <span className="badge bg-info-transparent rounded-pill">84</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-checkbox-circle-line align-middle fs-14 text-success"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Completed
                                                </span>
                                                <span className="badge bg-success-transparent rounded-pill">04</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-calendar-line align-middle fs-14 text-warning"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Due Today
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-time-line text-info align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Pending Approval
                                                </span>
                                                <span className="badge bg-info-transparent rounded-pill">02</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-star-line text-warning align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Starred Tasks
                                                </span>
                                                <span className="badge bg-warning-transparent rounded-pill">05</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-user-line text-primary align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Personal Tasks
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-briefcase-line text-primary align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Work Tasks
                                                </span>
                                                <span className="badge bg-primary-transparent rounded-pill">06</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-delete-bin-5-line text-danger align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Deleted Tasks
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="list-unstyled task-main-nav mb-0">
                                    <li className="px-0 pt-2 d-flex justify-content-between gap-2 align-items-center">
                                        <span className="fs-11 text-muted op-7 fw-medium">Workspace Overview</span>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div><input className="form-check-input" type="checkbox" value="" aria-label="..." /></div>
                                            <div>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-medium"> Client Meeting Preparation...</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div><input className="form-check-input" type="checkbox" value="" aria-label="..." /></div>
                                            <div>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-medium">Feature Implementation Updates...</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div><input className="form-check-input" type="checkbox" value="" aria-label="..." /></div>
                                            <div>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-medium">Quality Assurance Testing...</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div><input className="form-check-input" type="checkbox" value="" aria-label="..." /></div>
                                            <div>
                                                <Link href="#!" scroll={false}>
                                                    <span className="fw-medium">Finalizing Project Deliverables...</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            {/* <!--End::row-1 --> */}

            <Modal show={show} onHide={handleClose} centered className="fade" id="create-task" tabIndex={-1}>
                <div className="modal-content">
                    <Modal.Header>
                        <h6 className="modal-title">Create Task</h6>
                        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttondismiss="modal" onClickfunc={handleClose}
                            Buttonlabel="Close"></SpkButton>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row gy-2">
                            <Col xl={12}>
                                <Form.Label htmlFor="task-name" className="">Task Name</Form.Label>
                                <Form.Control type="text" className="" id="task-name" placeholder="Task Name" />
                            </Col>
                            <Col xl={12}>
                                <label className="form-label">Assigned To</label>
                                <SpkSelect multi name="state" option={Listviewassigneddata} mainClass="js-example-placeholder-multiple w-full js-states" menuplacement='auto' classNameprefix="Select2" defaultvalue={[Listviewassigneddata[0]]} />
                            </Col>
                            <Col xl={6}>
                                <Form.Label className="">Assigned Date</Form.Label>
                                <div className="form-group">
                                    <div className="input-group custom-input-group flex-nowrap">
                                        <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                        <SpkDatepickr className="form-control" selected={dates["assigned"] ? new Date(dates["assigned"]) : null} onChange={(date: Date | null) => handleDateChange("assigned", date)} />
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <Form.Label className="">Target Date</Form.Label>
                                <div className="form-group">
                                    <div className="input-group custom-input-group flex-nowrap">
                                        <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                        <SpkDatepickr className="form-control" selected={dates["basicDate"] ? new Date(dates["basicDate"]) : null} onChange={(date: Date | null) => handleDateChange("basicDate", date)} />
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <label className="form-label">Status</label>
                                <SpkSelect name="state" option={Statusdata} mainClass="js-example-placeholder-multiple w-full js-states" menuplacement='auto' classNameprefix="Select2" placeholder="Select" />
                            </Col>
                            <Col xl={6}>
                                <label className="form-label">Priority</label>
                                <SpkSelect name="state" option={Prioritydata} mainClass="js-example-placeholder-multiple w-full js-states" menuplacement='auto' classNameprefix="Select2" placeholder="Select" />
                            </Col>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <SpkButton Buttonvariant="light" Buttontype="button" onClickfunc={handleClose}
                            Buttondismiss="modal">Cancel</SpkButton>
                        <SpkButton Buttonvariant="primary" Buttontype="button">Add Task</SpkButton>
                    </Modal.Footer>
                </div>
            </Modal>

        </Fragment>
    );
};

export default Todolist;