"use client"

import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { Data, Data1, Data2, LeadsCards } from "@/shared/data/apps/crm/leadsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, Form, Modal, Pagination, Row } from "react-bootstrap";

interface LeadsProps {}

const Leads: React.FC<LeadsProps> = () => {

    const [leadsloopData, setLeadsloopData] = useState(LeadsCards); // Initialize with your data

    const handleDelete = (id: number) => {
        const updatedData = leadsloopData.filter((idx) => idx.id !== id);
        setLeadsloopData(updatedData);

    };
    const [areAllChecked, setAreAllChecked] = useState(false);
    const handleHeaderCheckboxChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setAreAllChecked(e.target.checked);

    };

    const [checkboxes, setCheckboxes] = useState(false);
    const handleRowCheckboxChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setCheckboxes(e.target.checked)
    };

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    //image upload
    const [images1, setImages1] = useState<any>([]);
    const [selectedImage1, setSelectedImage1] = useState(null);

    const handleFileChange1 = (e: { target: { files: any[]; }; }) => {
        const file = e.target.files[0];
        if (file) {
            const reader: any = new FileReader();
            reader.onloadend = () => {
                setSelectedImage1(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-CRM Leads" />

            <Pageheader title="Apps" currentpage="CRM Leads" activepage="CRM Leads" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <Card.Title>
                                Leads<span className="badge bg-primary rounded ms-2 fs-12 align-middle">35</span>
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <SpkButton Buttontype="button" onClickfunc={handleShow} Buttonvariant="primary" Customclass="btn-sm" Buttontoggle="modal" Buttontarget="#create-contact"><i className="ri-add-line me-1 fw-medium align-middle"></i>Add New Lead</SpkButton>
                                <SpkButton Buttontype="button" Buttonvariant="success" Customclass="">Download as CSV</SpkButton>
                                <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-light btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <Dropdown.Item href="#!">Most Recent</Dropdown.Item>
                                    <Dropdown.Item href="#!">Date Created</Dropdown.Item>
                                    <Dropdown.Item href="#!">Name A - Z</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="text-nowrap" showCheckbox={true} checked={areAllChecked} onChange={handleHeaderCheckboxChange} Customcheckclass="check-all" header={[{ title: 'Contact Name' }, { title: "Company" }, { title: 'Email' }, { title: 'Tags' }, { title: 'Phone' }, { title: 'Lead Score' }, { title: 'Owner' }, { title: 'Created Date' }, { title: 'Actions' }]} >
                                    {leadsloopData.map((lead) => (
                                        <tr key={lead.id} className="crm-contact leads-list">
                                            <td className="leads-checkbox">
                                                <input className="form-check-input" checked={areAllChecked} onChange={handleRowCheckboxChange} type="checkbox" id={`checkboxNoLabel${lead.id}`} value="" aria-label="..." />
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-md p-1 bg-primary-transparent">
                                                            <Image width={40} height={40} src={lead.avatar} alt="Lead Avatar" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-block fw-medium">{lead.name}</span>
                                                        <span className="badge bg-success-transparent">{lead.status}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm bg-light avatar-rounded p-1">
                                                            <Image height={28} width={28} src={lead.companyLogo} alt="Company Logo" />
                                                        </span>
                                                    </div>
                                                    <div>{lead.companyName}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <i className="ri-mail-line me-2 align-middle fs-14 text-info d-inline-block lh-1"></i>{lead.email}
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="d-block"><i className="ri-phone-line me-2 align-middle fs-14 text-pink"></i>{lead.phone}</span>
                                                </div>
                                            </td>
                                            <td>
                                                {lead.tags.map((tag, index) => (
                                                    <span key={index} className={`badge bg-${lead.color[index]}-transparent me-1`}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </td>
                                            <td className="fw-medium">
                                                {lead.priority}
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <Image width={28} height={28} src={lead.assignedAvatar} alt="Assigned Avatar" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-block fw-medium">{lead.assignedTo}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="fw-medium">
                                                {lead.date}
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-primary-light btn-icon">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <SpkButton Buttontype="button" Buttonvariant="success-light" Customclass="btn-sm btn-icon">
                                                        <i className="ri-pencil-line"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttontype="button" onClickfunc={() => handleDelete(lead.id)} Buttonvariant="danger-light" Customclass="btn-sm btn-icon contact-delete">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </SpkButton>
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
                                    Showing 9 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
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

            {/* <!-- Start:: Create Contact --> */}
            <Modal className="fade" centered id="create-contact" tabIndex={-1} show={show} onHide={handleClose}>
                <div className="modal-content">
                    <Modal.Header>
                        <h6 className="modal-title">Create Lead</h6>
                        <SpkButton Buttontype="button" Buttonvariant="" onClickfunc={handleClose} Customclass="btn-close" Buttondismiss="modal" Buttonlabel="Close" />
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row gy-3">
                            <Col xl={12}>
                                <div className="mb-0 text-center">
                                    <span className="avatar avatar-xxl avatar-rounded">
                                        <Image width={80} height={80} src={selectedImage1 || "../../../assets/images/faces/9.jpg"} alt="" id="profile-img" />
                                        <SpkBadge variant="primary" Customclass="rounded-pill avatar-badge">
                                            <Form.Control onChange={(e: any) => {
                                                handleFileChange1(e);
                                                setImages1([...images1, e.target.files[0]]);
                                            }} type="file" name="photo" className="position-absolute w-100 h-100 op-0" id="profile-change" />
                                            <i className="fe fe-camera"></i>
                                        </SpkBadge>
                                    </span>
                                </div>
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="contact-name" className="">Contact Name</Form.Label>
                                <Form.Control type="text" className="" id="contact-name" placeholder="Contact Name" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="contact-mail" className="">Email</Form.Label>
                                <Form.Control type="email" className="" id="contact-mail" placeholder="Enter Email" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="contact-phone" className="">Phone No</Form.Label>
                                <Form.Control type="tel" className="" id="contact-phone" placeholder="Enter Phone Number" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="company-name" className="">Company Name</Form.Label>
                                <Form.Control type="text" className="" id="company-name" placeholder="Company Name" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label className="">Lead Status</Form.Label>
                                <SpkSelect name="colors" option={Data2} placeholder="Select Status" menuplacement='auto' classNameprefix="Select2" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label className="">Lead Source</Form.Label>
                                <SpkSelect name="colors" option={Data1} menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data1[0]]} />
                            </Col>
                            <Col xl={12}>
                                <Form.Label className="">Tags</Form.Label>
                                <SpkSelect multi name="colors" option={Data} menuplacement='auto' classNameprefix="Select2" placeholder="Select Tag" />
                            </Col>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <SpkButton Buttonvariant="warning" Buttontype="button" Customclass="m-0 me-2" onClickfunc={handleClose}
                            Buttondismiss="modal">Cancel</SpkButton>
                        <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="m-0 ">Create Contact</SpkButton>
                    </Modal.Footer>
                </div>
            </Modal>
            {/* <!-- End:: Create Contact --> */}
        </Fragment>
    );
};

export default Leads;