"use client"

import SpkDatepickr from "@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { Contactsdata, Data, Data1 } from "@/shared/data/apps/crm/contactdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useRef, useState } from "react";
import { Card, Col, Dropdown, Form, InputGroup, Modal, Offcanvas, Pagination, Row } from "react-bootstrap";

interface ContactProps {}

const Contacts: React.FC<ContactProps> = () => {

    const [startDate, setStartDate] = useState(new Date());
    const fileInputRef: any = useRef(null);
    const [selectedImage, setSelectedImage] = useState("../../../assets/images/faces/9.jpg");

    const [show, setShow] = useState<{ [key: string]: boolean }>({});
    const handleShow = (offcanvasName: string) => {
        setShow((prevShow) => ({ ...prevShow, [offcanvasName]: true }));
    };
    const handleClose = (offcanvasName: string) => {
        setShow((prevShow) => ({ ...prevShow, [offcanvasName]: false }));
    };

    //Delete function
    const [manageContactsData, setmanageContactsData] = useState([...Contactsdata]);
    const handleDelete = (idToRemove: string) => {
        const updatedInvoiceData = manageContactsData.filter((item) => item.id !== idToRemove);
        setmanageContactsData(updatedInvoiceData);
    };
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

    //Datepicker function
    const handleDateChange = (date: any) => {
        if (date) {
            setStartDate(date);
        }
    };

    const [areAllChecked, setAreAllChecked] = useState(false);
    const handleHeaderCheckboxChange = (e: any) => {
        setAreAllChecked(e.target.checked);

    };

    const [checkboxes, setCheckboxes] = useState({});
    const handleRowCheckboxChange = (e: any) => {
        const { id, checked } = e.target;
        setCheckboxes((prev) => ({
            ...prev,
            [id]: checked,
        }));
    };

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-CRM Contacts" />

            <Pageheader title="Apps" currentpage="CRM Contacts" activepage="CRM Contacts" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <Card.Title>
                                Contacts<span className="badge bg-primary rounded ms-2 fs-12 align-middle">58</span>
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <SpkTooltips placement="top" title="Last Contacted" tooltipClass="">
                                    <SpkButton Buttonvariant="success" onClickfunc={() => handleShow('modal')} Size="sm" Buttontoggle="modal" Buttontarget="#create-contact"><i className="ri-add-line me-1 fw-medium align-middle"></i>Add New Contact</SpkButton>
                                </SpkTooltips>
                                <SpkButton Buttonvariant="primary" Size="sm">Download as Excel</SpkButton>
                                <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <Dropdown.Item href="#!">Recently Modified</Dropdown.Item>
                                    <Dropdown.Item href="#!">Alphabetical Order</Dropdown.Item>
                                    <Dropdown.Item href="#!">Oldest First</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="text-nowrap table-hover" checked={areAllChecked} onChange={handleHeaderCheckboxChange} showCheckbox={true} Customcheckclass="check-all" header={[{ title: 'Full Name' }, { title: 'Email Address' }, { title: 'Contact Number' }, { title: 'Organization' }, { title: 'Deal Title' }, { title: 'Status' }, { title: 'Last Contacted' }, { title: 'Actions' }]} >
                                    {manageContactsData.map((contact) => (
                                        <tr key={contact.id} className="crm-contact contacts-list">
                                            <td className="contacts-checkbox">
                                                <input checked={areAllChecked} onChange={handleRowCheckboxChange} className="form-check-input" type="checkbox" id={`checkboxNoLabel${contact.id}`} value="" aria-label="..." />
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <Image src={contact.avatar} alt="" height={28} width={28} />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <Link onClick={() => handleShow('offcanvas')} scroll={false} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                                            <span className="d-block fw-medium">{contact.name}</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="d-block mb-1">
                                                    <i className="ri-mail-line me-2 align-middle fs-14 text-muted"></i>
                                                    {contact.email}
                                                </span>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="d-block">
                                                        <i className="ri-phone-line me-2 align-middle fs-14 text-muted"></i>
                                                        {contact.phone}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm bg-secondary-transparent avatar-rounded">
                                                            <Image width={28} height={28} src={contact.companyLogo} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>{contact.company}</div>
                                                </div>
                                            </td>
                                            <td>{contact.campaign}</td>
                                            <td>
                                                <span className={`badge ${contact.priority === 'Medium Priority' ? 'bg-warning' : contact.priority === 'High Priority' ? 'bg-info' : contact.priority === 'Critical Priority' ? 'bg-danger' : 'bg-success'}`}>
                                                    {contact.priority}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="d-block text-muted fs-11" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" title="Last Contacted">
                                                    {contact.lastContacted}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkButton Buttonvariant='primary-light' Buttontoggle="offcanvas" Size="sm" Navigate="#offcanvasExample" onClickfunc={() => handleShow('offcanvas')}
                                                        Role="button" Buttoncontrols="offcanvasExample" Customclass="btn-icon"><i className="ri-eye-line"></i></SpkButton>
                                                    <SpkButton Buttonvariant='info-light' Size="sm" Customclass="btn-icon"><i className="ri-pencil-line"></i></SpkButton>
                                                    <SpkButton Buttonvariant='danger-light' Size="sm" Customclass="btn-icon contact-delete"
                                                        onClickfunc={() => handleDelete(contact.id)}>
                                                        <i className="ri-delete-bin-line"></i></SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top-0">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 10 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                                </div>
                                <div className="ms-auto">
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
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: Contact Details Offcanvas --> */}
            <Offcanvas placement="end" show={show['offcanvas'] || false} onHide={() => handleClose('offcanvas')} className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample"
                aria-labelledby="offcanvasExample">
                <div className="offcanvas-body p-0">
                    <div className="d-flex align-items-top p-3 border-bottom border-block-end-dashed">
                        <span className="avatar avatar-xxl avatar-rounded me-2 me-xl-3 flex-shrink-0">
                            <Image width={80} height={80} src="../../../assets/images/faces/12.jpg" alt="" />
                        </span>
                        <div className="flex-fill main-profile-info">
                            <div className="d-flex gap-1 align-items-center justify-content-between">
                                <h6 className="fw-medium mb-1">Sophia Williams
                                    <span className="badge bg-info-transparent fs-10 ms-1 d-inline-block"><i className="ri-circle-fill fs-8 text-info me-1"></i> Follow Up Required</span>
                                </h6>
                            </div>
                            <p className="mb-2 text-muted fs-12">Marketing Director</p>
                            <div className="d-flex gap-2 fs-15 mt-1 flex-wrap flex-xl-nowrap">
                                <Link scroll={false} href="#!" className="btn btn-sm btn-secondary-light"><i className="ri-phone-line"></i> Call</Link>
                                <Link scroll={false} href="#!" className="btn btn-sm btn-primary-light"><i className="ri-mail-line"></i> Mail</Link>
                                <Link scroll={false} href="#!" className="btn btn-sm btn-success-light"><i className="ri-message-line"></i> Message</Link>
                                <SpkDropdown toggleas="a" Navigate="#!" Customclass="ms-auto" Customtoggleclass="btn btn-icon btn-sm btn-info-light no-caret" IconClass="ti ti-dots-vertical" Icon={true}>
                                    <li><Link scroll={false} className="dropdown-item" href="#!">Edit Profile</Link></li>
                                    <li><Link scroll={false} className="dropdown-item" href="#!">View Reports</Link></li>
                                    <li><Link scroll={false} className="dropdown-item" href="#!">Change Status</Link></li>
                                </SpkDropdown>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-3 gap-3 p-1 py-0 border-bottom border-block-end-dashed">
                        <div className="p-2 text-center flex-fill">
                            <i className="ri-shake-hands-line p-2 fs-5 rounded-circle lh-1 text-fixed-white shadow-sm bg-success"></i>
                            <p className="fw-semibold fs-20 text-shadow mb-0 mt-2">320</p>
                            <p className="mb-0 text-muted">Partnerships</p>
                        </div>
                        <div className="p-2 text-center flex-fill">
                            <i className="ri-money-dollar-circle-line p-2 fs-5 rounded-circle lh-1 text-fixed-white shadow-sm bg-success"></i>
                            <p className="fw-semibold fs-20 text-shadow mb-0 mt-2">$15k</p>
                            <p className="mb-0 text-muted">Investments</p>
                        </div>
                        <div className="p-2 text-center flex-fill">
                            <i className="ri-thumb-up-line p-2 fs-5 rounded-circle lh-1 text-fixed-white shadow-sm bg-success"></i>
                            <p className="fw-semibold fs-20 text-shadow mb-0 mt-2">$20k</p>
                            <p className="mb-0 text-muted">Goals Achieved</p>
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed">
                        <div className="mb-0">
                            <p className="fs-15 mb-2 fw-medium">Professional Bio :</p>
                            <p className="text-muted mb-0">
                                I am <b className="text-default">Sophia Williams,</b> the proud founder and CEO of Innovative Solutions, specializing in marketing strategies and business development.
                            </p>
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed">
                        <p className="fs-14 mb-2 fw-medium">Contact Information :</p>
                        <div className="">
                            <div className="d-flex align-items-center mb-2">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-primary-transparent">
                                        <i className="ri-mail-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div>
                                    sophiawilliams@example.com
                                    <SpkTooltips placement="top" title="Copy">
                                        <span className="text-muted lh-1 rounded-circle ms-1"><i className="ri-file-copy-fill"></i></span>
                                    </SpkTooltips>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-secondary-transparent">
                                        <i className="ri-phone-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div>
                                    +(444) 777-8901
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-success-transparent">
                                        <i className="ri-map-pin-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div>
                                    5678 Oak Avenue, Suite 200, Metropolis, IL, 62901, USA
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Priority:</p>
                        <div className="badge bg-info"><i className="ri-circle-fill lh-1 align-middle fs-9 me-1"></i> High Priority</div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Created Date:</p>
                        <div>10-Sep-2024</div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Social Networks :</p>
                        <div className="btn-list mb-0">
                            <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn-sm btn-icon btn-wave waves-effect waves-light mb-0"><i className="ri-facebook-line fw-medium"></i></SpkButton>
                            <SpkButton Buttonvariant="info-light" Buttontype="button" Customclass="btn-sm btn-icon btn-wave waves-effect waves-light mb-0"><i className="ri-linkedin-line fw-medium"></i></SpkButton>
                            <SpkButton Buttonvariant="secondary-light" Buttontype="button" Customclass="btn-sm btn-icon btn-wave waves-effect waves-light mb-0"> <i className="ri-twitter-x-line fw-medium"></i></SpkButton>
                            <SpkButton Buttonvariant="success-light" Buttontype="button" Customclass="btn-sm btn-icon btn-wave waves-effect waves-light mb-0">  <i className="ri-instagram-line fw-medium"></i></SpkButton>
                            <SpkButton Buttonvariant="danger-light" Buttontype="button" Customclass="btn-sm btn-icon btn-wave waves-effect waves-light mb-0">   <i className="ri-youtube-line fw-medium"></i></SpkButton>
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 me-4 fw-medium">Tags :</p>
                        <div>
                            <span className="badge bg-success-transparent me-1">VIP Client</span>
                            <span className="badge bg-warning-transparent">Pending Follow-Up</span>
                        </div>
                    </div>
                    <div className="p-3">
                        <p className="fs-14 mb-2 fw-medium">Relationship Manager :
                            <Link className="bg-success-transparent fs-12 p-1 pe-2 rounded mb-0 float-end" href="#!"><i className="ri-add-line me-1 align-middle"></i>Add Manager</Link>
                        </p>
                        <div className="avatar-list-stacked">
                            <span className="avatar avatar-sm avatar-rounded">
                                <Image height={28} width={28} src="../../../assets/images/faces/3.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-sm avatar-rounded">
                                <Image height={28} width={28} src="../../../assets/images/faces/5.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-sm avatar-rounded">
                                <Image height={28} width={28} src="../../../assets/images/faces/6.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-sm avatar-rounded">
                                <Image height={28} width={28} src="../../../assets/images/faces/7.jpg" alt="img" />
                            </span>
                        </div>
                    </div>
                </div>
            </Offcanvas>
            {/* <!-- End:: Contact Details Offcanvas --> */}

            {/* <!-- Start:: Create Contact --> */}

            <Modal show={show['modal'] || false} onHide={() => handleClose('modal')} className="modal fade" id="create-contact" tabIndex={-1} aria-hidden="true">
                <div className="modal-content">
                    <Modal.Header className="modal-header">
                        <h6 className="modal-title">Create Contact</h6>
                        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttondismiss="modal" Buttonlabel="Close" />
                    </Modal.Header>
                    <Modal.Body className="modal-body">
                        <Row className="gy-3">
                            <Col xl={12}>
                                <div className="mb-0 text-center">
                                    <span className="avatar avatar-xxl avatar-rounded">
                                        <Image width={80} height={80} src={selectedImage || ''} alt="" id="profile-img" />
                                        <SpkBadge variant="primary" Customclass="rounded-pill avatar-badge" Onclickfun={openFileInput}>
                                            <input type="file" name="photo" className="position-absolute w-100 h-100 op-0" id="profile-change" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }} />
                                            <i className="fe fe-camera"></i>
                                        </SpkBadge>
                                    </span>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="deal-title">Deal Title</Form.Label>
                                <Form.Control type="text" id="deal-title" placeholder="Deal Title" />
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="contact-lead-score">Lead Score</Form.Label>
                                <Form.Control type="number" id="contact-lead-score" placeholder="Lead Score" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="contact-mail">Email</Form.Label>
                                <Form.Control type="email" id="contact-mail" placeholder="Enter Email" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="contact-phone">Phone No</Form.Label>
                                <Form.Control type="tel" id="contact-phone" pattern="[0-9]*"
                                    placeholder="Enter Phone Number" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="company-name">Company Name</Form.Label>
                                <Form.Control type="text" id="company-name" placeholder="Company Name" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label>Lead Source</Form.Label>
                                <SpkSelect name="colors" option={Data1} mainClass="basic-multi-select"
                                    menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data1[0]]}
                                />
                            </Col>
                            <Col xl={6}>
                                <Form.Label>Last Contacted</Form.Label>
                                <div className="form-group">
                                    <InputGroup className="custom-input-group flex-nowrap">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                        <SpkDatepickr className="form-control breadcrumb-input border-1  " Timeinput="Time:" dateFormat="yy/MM/dd h:mm aa" selected={startDate} onChange={handleDateChange} placeholderText='Choose date and time' showTimeInput />
                                    </InputGroup>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <Form.Label>Tags</Form.Label>
                                <SpkSelect multi name="colors" option={Data} mainClass="basic-multi-select"
                                    menuplacement='auto' classNameprefix="Select2" placeholder="Select Tag"
                                />
                            </Col>
                        </Row>
                    </Modal.Body>
                    <div className="modal-footer">
                        <SpkButton onClickfunc={() => handleClose('modal')} Buttonvariant='light' Buttontype="button" Customclass=""
                        >Cancel</SpkButton>
                        <SpkButton Buttonvariant='primary' Buttontype="button">Create Contact</SpkButton>
                    </div>
                </div>
            </Modal>
            {/* <!-- End:: Create Contact --> */}
        </Fragment>
    );
};

export default Contacts;