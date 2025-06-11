"use client"

import SpkDealscard from "@/shared/@spk-reusable-components/reusable-apps/spk-dealscard";
import SpkDatepickr from "@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { DealsCards, DealsCards1, DealsCards2, DealsCards3, DealsCards4, DealsCards5 } from "@/shared/data/apps/crm/dealsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Card, Col, Dropdown, Form, InputGroup, Modal, Row } from "react-bootstrap";

interface DealsProps {}

const Deals: React.FC<DealsProps> = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const slideArrow = (selector: any) => document.querySelector(selector)

    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: any) => {
        if (date) {
            setStartDate(date);
        }
    };

    const firstContainerRef = useRef(null);
    const secondContainerRef = useRef(null);
    const thirdContainerRef = useRef(null);
    const fourthContainerRef = useRef(null);
    const fifthContainerRef = useRef(null);
    const sixthContainerRef = useRef(null);


    useEffect(() => {
        if (typeof window !== "undefined") {
            const dragula = require("dragula");
            const windowElement = window;

            if (firstContainerRef.current && secondContainerRef.current) {
                const containers = [
                    firstContainerRef.current,
                    secondContainerRef.current,
                    thirdContainerRef.current,
                    fourthContainerRef.current,
                    fifthContainerRef.current,
                    sixthContainerRef.current,

                ];
                const drake = dragula(containers);

                if (slideArrow(".firstdrag")?.classList.contains("task-Null")) {
                    slideArrow(".view-more-button")?.classList.add("d-none");
                }
            }
        }
    }, []);

    const [selectedImage, setSelectedImage] = useState("../../../assets/images/faces/9.jpg");
    const fileInputRef: any = useRef(null);
    const openFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleImageChange = (e: any) => {
        const selectedFile = e.target.files && e.target.files[0];

        if (selectedFile) {
            // You can handle the file here, for example, upload it to a server.
            const reader = new FileReader();
            reader.onload = (event: any) => {
                setSelectedImage(event.target?.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-CRM Deals" />

            <Pageheader title="Apps" currentpage="CRM Deals" activepage="CRM Deals" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                <div className="d-flex align-items-center">
                                    <span className="fw-medium fs-16 me-2">CRM Deals</span><span className="badge bg-primary align-middle">15 Active Deals</span>
                                </div>
                                <div className="d-flex flex-wrap gap-2 align-items-center">
                                    <div className="d-flex flex-grow-1" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search Deal" aria-label="Search" />
                                        <SpkButton Buttontype="submit" Buttonvariant="secondary" Customclass="">Search</SpkButton>
                                    </div>
                                    <SpkButton Buttontype="button" onClickfunc={handleShow} Buttonvariant="primary" Customclass="" Buttontoggle="modal" Buttontarget="#create-deal"><i className="ri-add-line me-1 fw-medium align-middle"></i>Add New Deal</SpkButton>
                                    <SpkButton Buttontype="button" Buttonvariant="success" Customclass="">Download as CSV</SpkButton>
                                    <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-light btn-wave waves-effect waves-light no-caret" Toggletext="Filter By" Arrowicon={true}>
                                        <Dropdown.Item href="#!">Most Recent</Dropdown.Item>
                                        <Dropdown.Item href="#!">Last Modified</Dropdown.Item>
                                        <Dropdown.Item href="#!">Priority Level</Dropdown.Item>
                                    </SpkDropdown>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row className="mb-3">
                <Col xxl={2}>
                    <div className="bg-primary-transparent rounded p-3 pb-1">
                        <Card className="custom-card border border-primary border-opacity-50">
                            <Card.Body className=" p-3">
                                <div className="d-flex align-items-center flex-wrap justify-content-between">
                                    <div>
                                        <h6 className="fw-medium lead-discovered mb-0">Leads Discovered</h6>
                                        <span className="text-muted fs-11">Initial Contact</span>
                                    </div>
                                    <div className="ms-auto text-center">
                                        <span className=" badge bg-primary">24</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <div id="leads-discovered" ref={firstContainerRef}>
                            {DealsCards.map((idx, index) => (
                                <SpkDealscard key={index} deals={idx} />
                            ))}
                        </div>
                    </div>
                </Col>
                <Col xxl={2}>
                    <div className="bg-secondary-transparent rounded p-3 pb-1">
                        <Card className="custom-card border border-secondary border-opacity-50">
                            <Card.Body className=" p-3">
                                <div className="d-flex align-items-center flex-wrap justify-content-between">
                                    <div>
                                        <h6 className="fw-medium lead-qualified mb-0">Qualified Leads</h6>
                                        <span className="text-muted fs-11">Sales Qualified Lead (SQL)</span>
                                    </div>
                                    <div>
                                        <span className=" badge bg-secondary text-fixed-white">17</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <div id="leads-qualified" ref={secondContainerRef}>
                            {DealsCards1.map((idx, index) => (
                                <SpkDealscard key={index} deals={idx} />
                            ))}
                        </div>
                    </div>
                </Col>
                <Col xxl={2}>
                    <div className="bg-success-transparent rounded p-3 pb-1">
                        <Card className="custom-card border border-success border-opacity-50">
                            <Card.Body className=" p-3">
                                <div className="d-flex align-items-center flex-wrap justify-content-between">
                                    <div>
                                        <h6 className="fw-medium contact-initiated mb-0">Contact Initiated</h6>
                                        <span className="text-muted fs-11">First Interaction</span>
                                    </div>
                                    <div>
                                        <span className=" badge bg-success text-fixed-white">06</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <div id="contact-initiated" ref={thirdContainerRef}>
                            {DealsCards2.map((idx, index) => (
                                <SpkDealscard key={index} deals={idx} />
                            ))}
                        </div>
                    </div>
                </Col>
                <Col xxl={2}>
                    <div className="bg-info-transparent rounded p-3 pb-1">
                        <Card className="custom-card border border-info border-opacity-50">
                            <Card.Body className=" p-3">
                                <div className="d-flex align-items-center flex-wrap justify-content-between">
                                    <div>
                                        <h6 className="fw-medium need-identified mb-0">Needs Identified</h6>
                                        <span className="text-muted fs-11">Requirement Gathering</span>
                                    </div>
                                    <div>
                                        <span className=" badge bg-info text-fixed-white">33</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <div id="needs-identified" ref={fourthContainerRef}>
                            {DealsCards3.map((idx, index) => (
                                <SpkDealscard key={index} deals={idx} />
                            ))}
                        </div>
                    </div>
                </Col>
                <Col xxl={2}>
                    <div className="bg-danger-transparent rounded p-3 pb-1">
                        <Card className="custom-card border border-danger border-opacity-50">
                            <Card.Body className=" p-3">
                                <div className="d-flex align-items-center flex-wrap justify-content-between">
                                    <div>
                                        <h6 className="fw-medium negotiation mb-0">Negotiation</h6>
                                        <span className="text-muted fs-11">Deal Negotiation</span>
                                    </div>
                                    <div>
                                        <span className=" badge bg-danger text-fixed-white">22</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <div id="negotiation" ref={fifthContainerRef}>
                            {DealsCards4.map((idx, index) => (
                                <SpkDealscard key={index} deals={idx} />
                            ))}
                        </div>
                    </div>
                </Col>
                <Col xxl={2}>
                    <div className="bg-warning-transparent rounded p-3 pb-1">
                        <Card className="custom-card border border-warning border-opacity-50">
                            <Card.Body className=" p-3">
                                <div className="d-flex align-items-center flex-wrap justify-content-between">
                                    <div>
                                        <h6 className="fw-medium deal-finalized mb-0">Deal Finalized</h6>
                                        <span className="text-muted fs-11">Closed-Won Deal</span>
                                    </div>
                                    <div>
                                        <span className=" badge bg-warning text-fixed-white">53</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <div id="deal-finalized" ref={sixthContainerRef}>
                            {DealsCards5.map((idx, index) => (
                                <SpkDealscard key={index} deals={idx} />
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
            {/* <!-- End::row-2 --> */}

            {/* <!-- Start:: New Deal --> */}
            <Modal show={show} onHide={handleClose} className="fade" id="create-deal" tabIndex={-1} centered>
                <div className="modal-content">
                    <Modal.Header>
                        <h6 className="modal-title">New Deal</h6>
                        <SpkButton Buttonvariant="" Customclass="btn-close" onClickfunc={handleClose} Buttondismiss="modal" Buttonlabel="Close" />
                    </Modal.Header>
                    <div className="modal-body">
                        <Row className="gy-3">
                            <Col xl={12}>
                                <div className="mb-0 text-center">
                                    <span className="avatar avatar-xxl avatar-rounded">
                                        <Image width={80} height={80} src={selectedImage || ''} alt="" id="profile-img" />
                                        <span className="badge rounded-pill bg-primary avatar-badge" onClick={openFileInput}>
                                            <input type="file" name="photo" className="position-absolute w-100 h-100 op-0" id="profile-change" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }} />
                                            <i className="fe fe-camera"></i>
                                        </span>
                                    </span>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="deal-name" className="">Contact Name</Form.Label>
                                <Form.Control type="text" className="" id="deal-name" placeholder="Contact Name" />
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="deal-lead-score" className="">Deal Value</Form.Label>
                                <Form.Control type="number" className="" id="deal-lead-score" placeholder="Deal Value" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="company-name" className="">Company Name</Form.Label>
                                <Form.Control type="text" className="" id="company-name" placeholder="Company Name" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label className="">Last Contacted</Form.Label>
                                <InputGroup className="custom-input-group">
                                    <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                    <SpkDatepickr className="form-control breadcrumb-input border-1  " Timeinput="Time:" dateFormat="yy/MM/dd h:mm aa" selected={startDate} onChange={handleDateChange} placeholderText='Choose date and time' showTimeInput />
                                </InputGroup>
                            </Col>
                        </Row>
                    </div>
                    <Modal.Footer>
                        <SpkButton Buttonvariant="light" Buttontype="button" onClickfunc={handleClose}
                            Buttondismiss="modal">Cancel</SpkButton>
                        <SpkButton Buttonvariant="primary" Buttontype="button">Create Deal</SpkButton>
                    </Modal.Footer>
                </div>
            </Modal>
            {/* <!-- End:: New Deal --> */}
        </Fragment>
    );
};

export default Deals;