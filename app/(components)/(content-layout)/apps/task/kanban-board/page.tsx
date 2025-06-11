
"use client";

import SpkKanbanCard from "@/shared/@spk-reusable-components/reusable-apps/spk-kanabancard";
import SpkDatepickr from "@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { Avatarsdata, Badgesdata, Kanbancarddata, Kanbancarddata1, Kanbancarddata2, Kanbancarddata3, NavItemsdata, Options } from "@/shared/data/apps/tasks/kanbanboarddata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Card, Col, Form, Modal, Row } from "react-bootstrap";
import { FilePond } from "react-filepond";
import SimpleBar from "simplebar-react";

interface KanbanBoardProps {}

const KanbanBoard: React.FC<KanbanBoardProps> = () => {

    const [files, setFiles] = useState<any>([]);
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

    const [show, setShow] = useState<{ [key: string]: boolean }>({});

    const handleShow = (offcanvasName: string) => {
        setShow((prevShow) => {
            // Only update the state if it's not already true
            if (prevShow[offcanvasName] !== true) {
                return { ...prevShow, [offcanvasName]: true };
            }
            return prevShow; // Prevent state change if already true
        });
    };

    const handleClose = (offcanvasName: string) => {
        setShow((prevShow) => {
            // Only update the state if it's not already false
            if (prevShow[offcanvasName] !== false) {
                return { ...prevShow, [offcanvasName]: false };
            }
            return prevShow; // Prevent state change if already false
        });
    };

    const leftContainerRef = useRef(null);
    const rightContainerRef = useRef(null);
    const topContainerRef = useRef(null);
    const bottomContainerRef = useRef(null);
    const lastContainerRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const dragula = require("dragula");

            if (leftContainerRef.current && rightContainerRef.current) {
                const containers = [
                    leftContainerRef.current,
                    rightContainerRef.current,
                    topContainerRef.current,
                    bottomContainerRef.current,
                    lastContainerRef.current,
                ];
                const drake = dragula(containers);
            }

            OnDivChange();
        }
    }, []);

    const leftButtonRef = useRef(null);
    const rightButtonRef = useRef(null);
    const topButtonRef = useRef(null);
    const bottomButtonRef = useRef(null);
    const lastButtonRef = useRef(null);

    const elementsToModify = [
        { containerRef: leftContainerRef, buttonRef: leftButtonRef },
        { containerRef: rightContainerRef, buttonRef: rightButtonRef },
        { containerRef: topContainerRef, buttonRef: topButtonRef },
        { containerRef: bottomContainerRef, buttonRef: bottomButtonRef },
        { containerRef: lastContainerRef, buttonRef: lastButtonRef },
    ];

    const OnDivChange = () => {
        elementsToModify.forEach(({ containerRef, buttonRef }) => {
            const element: any = containerRef.current;
            const button: any = buttonRef.current;

            if (element?.children.length <= 0) {
                element?.classList.add("task-Null");
                if (button?.children.length <= 0) {
                    button.classList.add("d-none");
                }
            } else {
                element?.classList.remove("task-Null");
                if (button) {
                    button.classList.remove("d-none");
                }
            }
        });
    };

    const Option1 = [
        { value: "Sort By", label: "Sort By" },
        { value: "Newest", label: "Newest" },
        { value: "Date Added", label: "Date Added" },
        { value: "Type", label: "Type" },
        { value: "A - Z", label: "A - Z" },
    ];

    const Option2 = [
        { value: "Angelina May", label: "Angelina May" },
        { value: "Kiara advain", label: "Kiara advain" },
        { value: "Hercules Jhon", label: "Hercules Jhon" },
        { value: "Mayor Kim", label: "Mayor Kim" },
    ];

    const Option3 = [
        { value: "Select Tag", label: "Select Tag" },
        { value: "UI/UX", label: "UI/UX" },
        { value: "Marketing", label: "Marketing" },
        { value: "Finance", label: "Finance" },
        { value: "Designing", label: "Designing" },
        { value: "Admin", label: "Admin" },
        { value: "Authentication", label: "Authentication" },
        { value: "Product", label: "Product" },
        { value: "Development", label: "Development" },
    ];

    const cars = [
        { value: 1, label: 'Admin' },
        { value: 2, label: 'Authentication' },
        { value: 3, label: 'Designing' },
        { value: 4, label: 'Development' },
        { value: 5, label: 'Finance' },
        { value: 5, label: 'Marketing' },
    ];

    const simpleItems1 = [
        { value: 1, label: 'Angelina May' },
        { value: 2, label: 'Hercules Jhon' },
        { value: 3, label: 'Kairar Advin' },
        { value: 4, label: 'Mayour Kim' },
    ];

    return (
        <Fragment>
            <Seo title="Apps-Kanban Board" />
            <Pageheader title="Apps" currentpage="Kanban Board" activepage="Kanban Board" />

            <Row>
                <Col xxl={10}>
                    <Card className="custom-card">
                        <Card.Body className=" p-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <div className="d-flex align-items-center flex-wrap gap-2 flex-xxl-nowrap" role="search">
                                    <span className="fw-medium fs-15 text-nowrap flex-nowrap me-2">WorkSpace :</span>
                                    <input className="form-control me-1" type="search" placeholder="Search Tasks" aria-label="Search" />
                                    <SpkButton Buttontype="submit" Buttonvariant="success-light" Customclass="btn-w-lg">
                                        Search
                                    </SpkButton>
                                </div>
                                <div className="ms-auto d-flex gap-4 align-items-center flex-wrap">
                                    <div className="d-flex gap-2 kanban-board flex-wrap">
                                        <div className="flex-fill">
                                            <SpkSelect name="colors" option={Options} mainClass="basic-multi-select tasks-sort" placeholder="Sort By" menuplacement="auto" classNameprefix="Select2" />
                                        </div>
                                        <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="">
                                            <i className="ri-filter-3-line me-1 fw-medium align-middle"></i>Filter
                                        </SpkButton>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    <div className="SPK-kanban-board">
                        {/* Todo Tasks */}
                        <div className="kanban-tasks-type todo">
                            <div>
                                <div className="d-flex justify-content-between align-items-center p-3 border-bottom border-primary border-block-end-dashed border-opacity-25 rounded-top bg-white">
                                    <div className="d-flex gap-1 align-items-center">
                                        <div className="d-block fw-medium fs-15 text-primary">Todo Tasks</div>
                                        <div className="text-muted fs-11">(50)</div>
                                    </div>
                                    <div>
                                        <Link scroll={false} href="#!" onClick={() => handleShow("taskmodal")} data-bs-toggle="modal" data-bs-target="#add-task" className="px-1 bg-primary text-fixed-white lh-1 rounded">
                                            <i className="ri-add-line lh-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <SimpleBar className="kanban-tasks rounded-bottom" id="todo-tasks">
                                <div id="todo-tasks-draggable" data-view-btn="todo-tasks" ref={leftContainerRef} onMouseEnter={OnDivChange}>
                                    {Kanbancarddata.map((idx, index) => (
                                        <SpkKanbanCard key={index} kanban={idx} />
                                    ))}
                                </div>
                            </SimpleBar>
                            <div className="d-flex view-more-button mt-3 gap-2 align-items-center">
                                <Link href="#!" scroll={false} className="btn btn-primary btn-wave flex-fill">View More</Link>
                            </div>
                        </div>

                        {/* In Progress Tasks */}
                        <div className="kanban-tasks-type in-progress">
                            <div>
                                <div className="d-flex justify-content-between align-items-center p-3 border-bottom border-secondary border-block-end-dashed border-opacity-25 rounded-top bg-white">
                                    <div className="d-flex gap-1 align-items-center">
                                        <div className="d-block fw-medium fs-15 text-secondary">In Progress Tasks</div>
                                        <div className="text-muted fs-11">(24)</div>
                                    </div>
                                    <div>
                                        <Link scroll={false} href="#!" data-bs-toggle="modal" onClick={() => handleShow("taskmodal")} data-bs-target="#add-task" className="px-1 bg-secondary text-fixed-white lh-1 rounded">
                                            <i className="ri-add-line lh-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <SimpleBar className="kanban-tasks rounded-bottom" id="inprogress-tasks">
                                <div id="inprogress-tasks-draggable" data-view-btn="inprogress-tasks" ref={rightContainerRef} onMouseEnter={OnDivChange}>
                                    {Kanbancarddata1.map((idx, index) => (
                                        <SpkKanbanCard key={index} kanban={idx} />
                                    ))}
                                </div>
                            </SimpleBar>
                            <div className="d-flex view-more-button mt-3 gap-2 align-items-center">
                                <Link href="#!" scroll={false} className="btn btn-secondary btn-wave flex-fill">View More</Link>
                            </div>
                        </div>

                        {/* In Review Tasks */}
                        <div className="kanban-tasks-type inreview">
                            <div>
                                <div className="d-flex justify-content-between align-items-center p-3 border-bottom border-success border-block-end-dashed border-opacity-25 rounded-top bg-white">
                                    <div className="d-flex gap-1 align-items-center">
                                        <div className="d-block fw-medium fs-15 text-success">In Review Tasks</div>
                                        <div className="text-muted fs-11">(67)</div>
                                    </div>
                                    <div>
                                        <Link scroll={false} href="#!" data-bs-toggle="modal" onClick={() => handleShow("taskmodal")} data-bs-target="#add-task" className="px-1 bg-success text-fixed-white lh-1 rounded">
                                            <i className="ri-add-line lh-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <SimpleBar className="kanban-tasks rounded-bottom" id="inreview-tasks">
                                <div id="inreview-tasks-draggable" data-view-btn="inreview-tasks" ref={topContainerRef} onMouseEnter={OnDivChange}>
                                    {Kanbancarddata2.map((idx, index) => (
                                        <SpkKanbanCard key={index} kanban={idx} />
                                    ))}
                                </div>
                            </SimpleBar>
                            <div className="d-flex view-more-button mt-3 gap-2 align-items-center">
                                <Link href="#!" scroll={false} className="btn btn-success btn-wave flex-fill">View More</Link>
                            </div>
                        </div>

                        {/* Completed Tasks */}
                        <div className="kanban-tasks-type completed">
                            <div>
                                <div className="d-flex justify-content-between align-items-center p-3 border-bottom border-danger border-block-end-dashed border-opacity-25 rounded-top bg-white">
                                    <div className="d-flex gap-1 align-items-center">
                                        <div className="d-block fw-medium fs-15 text-danger">Completed Tasks</div>
                                        <div className="text-muted fs-11">(57)</div>
                                    </div>
                                    <div>
                                        <Link scroll={false} href="#!" data-bs-toggle="modal" onClick={() => handleShow("taskmodal")} data-bs-target="#add-task" className="px-1 bg-danger text-fixed-white lh-1 rounded">
                                            <i className="ri-add-line lh-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <SimpleBar className="kanban-tasks rounded-bottom" id="completed-tasks">
                                <div id="completed-tasks-draggable" data-view-btn="completed-tasks" ref={lastContainerRef} onMouseEnter={OnDivChange}>
                                    {Kanbancarddata3.map((idx, index) => (
                                        <SpkKanbanCard key={index} kanban={idx} />
                                    ))}
                                </div>
                            </SimpleBar>
                            <div className="d-flex view-more-button mt-3 gap-2 align-items-center">
                                <Link href="#!" scroll={false} className="btn btn-danger btn-wave flex-fill">View More</Link>
                            </div>
                        </div>
                    </div>
                </Col>

                {/* Sidebar */}
                <div className="col-xxl-2">
                    <Card className="custom-card">
                        <Card.Body>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2">
                                    <div className="fs-14 fw-medium pb-2">Menu</div>
                                </li>
                                {NavItemsdata.map((item, index) => (
                                    <li key={index} className={`px-2 py-1 mb-2 ${item.title === "Board Tasks" ? "active bg-primary-transparent" : ""}`}>
                                        <Link href={item.href}>
                                            <div className="d-flex align-items-center flex-wrap">
                                                <div className="me-2">
                                                    <i className={`${item.icon}`} />
                                                </div>
                                                <span className={`flex-fill text-nowrap${item.title === "Board Tasks" ? " text-primary" : ""}`}>{item.title}</span>
                                                {item.badge && <span className="badge bg-primary ms-auto">{item.badge}</span>}
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>

                        <Card.Body className="border-top border-block-start-dashed">
                            <div className="fs-14 fw-medium pb-2">On Board Members</div>
                            <div className="p-3 bg-light rounded-3 mb-3">
                                <div>
                                    {Avatarsdata.map((avatar, index) => (
                                        <span key={index} className={`avatar avatar-sm avatar-rounded align-center ${avatar.isOnline ? "online" : ""}`}>
                                            <Image width={28} height={28} src={avatar.imgSrc} alt={`Avatar ${index}`} />
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="d-flex gap-2 text-nowrap flex-wrap">
                                <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="flex-fill">
                                    <i className="ri-add-line me-1 fw-medium align-middle"></i>Member
                                </SpkButton>
                                <SpkButton Buttontype="button" onClickfunc={() => handleShow("addmodal")} Buttonvariant="primary" Customclass="flex-fill" Buttontoggle="modal" Buttontarget="#add-board">
                                    <i className="ri-add-line me-1 fw-semibold align-middle"></i>Board
                                </SpkButton>
                            </div>
                        </Card.Body>

                        <Card.Body className="border-top border-block-start-dashed">
                            <div className="fs-14 fw-medium pb-2">Labels</div>
                            <div className="p-3 border border-dashed rounded-3 mb-3">
                                {Badgesdata.map((badge, index) => (
                                    <span key={index} className={`badge bg-${badge.color}-transparent me-1`}>
                                        {badge.label}
                                    </span>
                                ))}
                            </div>
                            <SpkButton Buttontype="button" Buttonvariant="success-light" Customclass="w-100">
                                <i className="ri-add-line me-1 fw-medium align-middle"></i>Add Label
                            </SpkButton>
                        </Card.Body>
                    </Card>
                </div>
            </Row>

            {/* Modal Code */}
            <Modal show={show["addmodal"] || false} onHide={() => handleClose("addmodal")} centered className="fade" id="add-board" tabIndex={-1} aria-hidden="true">
                <div className="modal-content">
                    <Modal.Header>
                        <h6 className="modal-title">Add Board</h6>
                        <SpkButton Buttonvariant="" Buttontype="button" onClickfunc={() => handleClose("addmodal")} Customclass="btn-close" Buttondismiss="modal" Buttonlabel="Close"></SpkButton>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col xl={12}>
                                <label htmlFor="board-title" className="form-label">Task Board Title</label>
                                <Form.Control type="text" className="" id="board-title" placeholder="Board Title" />
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <SpkButton Buttonvariant="light" Buttontype="button" onClickfunc={() => handleClose("addmodal")} data-bs-dismiss="modal">
                            Cancel
                        </SpkButton>
                        <SpkButton Buttonvariant="primary" Buttontype="button">
                            Add Board
                        </SpkButton>
                    </Modal.Footer>
                </div>
            </Modal>

            {/* <!-- Start::add task modal --> */}
            <Modal show={show["taskmodal"] || false} onHide={() => handleClose("taskmodal")} centered className="fade" id="add-task" tabIndex={-1}>
                <div className="">
                    <div className="">
                        <Modal.Header>
                            <Modal.Title as="h6" >Add Task</Modal.Title>
                            <SpkButton Buttontype="button" Buttonvariant="" Customclass="btn-close" data-bs-dismiss="modal"
                                aria-label="Close" onClickfunc={() => handleClose("taskmodal")} ></SpkButton>
                        </Modal.Header>
                        <Modal.Body className="px-4">
                            <Row className="gy-2">
                                <Col xl={6}>
                                    <Form.Label htmlFor="task-name" className="form-label">Task Name</Form.Label>
                                    <input type="text" className="form-control" id="task-name" placeholder="Task Name" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="task-id" className="form-label">Task ID</Form.Label>
                                    <input type="text" className="form-control" id="task-id" placeholder="Task ID" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="text-area" className="form-label">Task Description</Form.Label>
                                    <textarea className="form-control" id="text-area" rows={2}
                                        placeholder="Write Description"></textarea>
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="text-area" className="form-label">Task Images</Form.Label>
                                    <FilePond className="multiple-filepond" files={files} onupdatefiles={setFiles} allowMultiple={true} maxFiles={6} server="/api" name="files" labelIdle='Drag & Drop your file here or click' />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="form-label">Assigned To</Form.Label>
                                    <SpkSelect name="colors" option={simpleItems1} mainClass="basic-multi-select" placeholder="Sort By" menuplacement='auto' classNameprefix="Select2" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Target Date</Form.Label>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-text text-muted"> <i
                                                className="ri-calendar-line"></i> </div>
                                            <SpkDatepickr className="form-control breadcrumb-input border-1  " Timeinput="Time:" dateFormat="yy/MM/dd h:mm aa" selected={dates["TargetDate"] ? new Date(dates["TargetDate"]) : null} onChange={(date: Date | null) => handleDateChange("TargetDate", date)} placeholderText='Choose date and time' showTimeInput />
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Tags</Form.Label>
                                    <SpkSelect multi name="colors" option={cars} mainClass="w-full !rounded-md" menuplacement='top' classNameprefix="Select2" />
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <SpkButton Buttonvariant="light" Buttontype="button" Customclass="btn btn-light" data-bs-dismiss="modal" onClickfunc={() => handleClose("taskmodal")} >Cancel</SpkButton>
                            <SpkButton Buttonvariant='primary' Buttontype="button" Customclass="btn btn-primary">Add Task</SpkButton>
                        </Modal.Footer>
                    </div>
                </div>
            </Modal>
            {/* <!-- End::add task modal --> */}

        </Fragment>
    );
};

export default KanbanBoard
