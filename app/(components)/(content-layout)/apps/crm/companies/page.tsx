"use client"

import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { CompaniesData, Selectdata1, Selectdata2 } from "@/shared/data/apps/crm/companydata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useRef, useState } from "react";
import { Card, Col, Dropdown, Form, Modal, Offcanvas, Pagination, Row } from "react-bootstrap";

interface CompaniesProps {}

const Companies: React.FC<CompaniesProps> = () => {

    const [show, setShow] = useState<{ [key: string]: boolean }>({});
    const handleShow = (offcanvasName: string) => {
        setShow((prevShow) => ({ ...prevShow, [offcanvasName]: true }));
    };
    const handleClose = (offcanvasName: string) => {
        setShow((prevShow) => ({ ...prevShow, [offcanvasName]: false }));
    };

    const [selectedImage, setSelectedImage] = useState("../../../assets/images/company-logos/3.png");
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

    const [areAllChecked, setAreAllChecked] = useState(false);
    const handleHeaderCheckboxChange = (e: any) => {
        setAreAllChecked(e.target.checked);

    };

    const [checkboxes, setCheckboxes] = useState(false);
    const handleRowCheckboxChange = (e: any) => {
        setCheckboxes(e.target.checked)
    };

    const [allData, setAlldata] = useState(CompaniesData);
    const handleremove = (id: string) => {
        const dataList = allData.filter((idx) => idx.id !== id);
        setAlldata(dataList)
    }

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-CRM Companies" />

            <Pageheader title="Apps" currentpage="CRM Companies" activepage="CRM Companies" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                CRM Companies <span className="badge bg-primary text-default rounded ms-2 fs-12 align-middle text-fixed-white">48</span>
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <SpkButton Buttonvariant="primary" Size="sm" onClickfunc={() => handleShow('modal')} Customclass="btn-wave" Buttontoggle="modal" Buttontarget="#create-company"><i className="ri-add-line me-1 fw-medium align-middle"></i>Add New Company</SpkButton>
                                <SpkButton Buttonvariant="success" Size="sm" Customclass="btn-wave">Download CSV</SpkButton>
                                <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <Dropdown.Item href="#!">Most Active</Dropdown.Item>
                                    <Dropdown.Item href="#!">Last Contacted</Dropdown.Item>
                                    <Dropdown.Item href="#!">By Company Size</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="text-nowrap" checked={areAllChecked} onChange={handleHeaderCheckboxChange} showCheckbox={true} Customcheckclass="check-all" header={[{ title: 'Client Company' }, { title: 'Contact Email' }, { title: 'Contact Number' }, { title: 'Employee Count' }, { title: 'Business Sector' }, { title: "Primary Contact" }, { title: 'No. of Deals' }, { title: 'Operations' }]} >
                                    {allData.map((company) => (
                                        <tr key={company.id} className="crm-contact companies-list">
                                            <td className="companies-checkbox">
                                                <input checked={areAllChecked} onChange={handleRowCheckboxChange} className="form-check-input" type="checkbox" id={`checkboxNoLabel${company.id}`} value="" aria-label="..." />
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm bg-light avatar-rounded">
                                                            <Image src={company.logo} alt={company.name} height={28} width={28} />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <Link onClick={() => handleShow('offcanvas')} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                                            {company.name}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="d-block mb-1">
                                                        <i className="ri-mail-line me-2 align-middle fs-14 text-info d-inline-block"></i>
                                                        {company.email}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="d-block">
                                                        <i className="ri-phone-line me-2 align-middle fs-14 text-pink d-inline-block"></i>
                                                        {company.phone}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center flex-wrap gap-1">
                                                    <span className={`badge ${company.size === '50-200' ? 'bg-info' : company.size === '200-500' ? 'bg-secondary' : company.size === '10-50' ? 'bg-pink' : company.size === 'Startup' ? 'bg-primary' : 'bg-success'}`}>
                                                        {company.size}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>{company.industry}</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <Image width={28} height={28} src={company.contactPersonAvatar} alt={company.contactPerson} />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-block fw-medium">{company.contactPerson}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center">{company.employees}</td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkButton Buttonvariant="primary-light" Navigate="#offcanvasExample" onClickfunc={() => handleShow('offcanvas')} Role="button" Size="sm" Customclass="btn-icon ">
                                                        <i className="ri-eye-line"></i></SpkButton>
                                                    <SpkButton Buttonvariant="info-light" Size="sm" Customclass="btn-icon"><i className="ri-pencil-line"></i></SpkButton>
                                                    <SpkButton Buttonvariant="danger-light" Size="sm" Customclass="btn-icon contact-delete" onClickfunc={() => handleremove(company.id)}><i className="ri-delete-bin-line"></i></SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
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
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: Company Details Offcanvas --> */}
            <Offcanvas show={show['offcanvas'] || false} onHide={() => handleClose('offcanvas')} placement='end' className=" offcanvas-end" tabIndex={-1} id="offcanvasExample"
                aria-labelledby="offcanvasExample">
                <Offcanvas.Body className=" p-0">
                    <div className="d-flex align-items-top p-3 border-bottom border-block-end-dashed">
                        <span className="avatar avatar-xxl avatar-rounded me-2 me-xl-3 p-2 bg-primary-transparent flex-shrink-0">
                            <Image width={80} height={80} src="../../../assets/images/company-logos/2.png" alt="" />
                        </span>
                        <div className="flex-fill main-profile-info">
                            <div className="d-flex gap-1 align-items-center justify-content-between">
                                <h6 className="fw-medium mb-1">Alpha Solutions
                                    <span className="badge bg-success-transparent fs-10 ms-1 d-inline-block"><i className="ri-circle-fill fs-8 text-success me-1 "></i> Active Client</span>
                                </h6>
                            </div>
                            <p className="mb-2 text-muted fs-12">Head of Business Development</p>
                            <div className="d-flex gap-2 fs-15 mt-1 flex-wrap flex-xl-nowrap">
                                <Link href="#!" className="btn btn-sm btn-info"><i className="ri-phone-line"></i> Call</Link>
                                <Link href="#!" className="btn btn-sm btn-primary"><i className="ri-mail-line"></i> Email</Link>
                                <Link href="#!" className="btn btn-sm btn-success"><i className="ri-message-line"></i> Message</Link>
                                <SpkDropdown toggleas="a" Navigate="#!" Customclass="ms-auto" Customtoggleclass="btn btn-icon btn-sm btn-warning-light no-caret" IconClass="ti ti-dots-vertical" Icon={true}>
                                    <li><Link scroll={false} className="dropdown-item" href="#!">Company Size</Link></li>
                                    <li><Link scroll={false} className="dropdown-item" href="#!">Deals</Link></li>
                                    <li><Link scroll={false} className="dropdown-item" href="#!">Status</Link></li>
                                </SpkDropdown>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-3 gap-3 p-1 py-0 border-bottom border-block-end-dashed">
                        <div className="p-2 text-center flex-fill">
                            <i className="ri-shake-hands-line p-2 fs-5 rounded-circle lh-1 text-fixed-white shadow-sm bg-primary"></i>
                            <p className="fw-semibold fs-20 text-shadow mb-0 mt-2">150</p>
                            <p className="mb-0 text-muted">Active Deals</p>
                        </div>
                        <div className="p-2 text-center flex-fill">
                            <i className="ri-money-dollar-circle-line p-2 fs-5 rounded-circle lh-1 text-fixed-white shadow-sm bg-primary"></i>
                            <p className="fw-semibold fs-20 text-shadow mb-0 mt-2">$25k</p>
                            <p className="mb-0 text-muted">Total Revenue</p>
                        </div>
                        <div className="p-2 text-center flex-fill">
                            <i className="ri-thumb-up-line p-2 fs-5 rounded-circle lh-1 text-fixed-white shadow-sm bg-primary"></i>
                            <p className="fw-semibold fs-20 text-shadow mb-0 mt-2">80%</p>
                            <p className="mb-0 text-muted">Deal Success Rate</p>
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed">
                        <div className="mb-0">
                            <p className="fs-15 mb-2 fw-medium">Professional Bio :</p>
                            <p className="text-muted mb-0">
                                I am <b className="text-default">Michael Johnson,</b> the lead account manager at Innovate Solutions, where I oversee client relationships and drive business growth as the Senior Account Manager.
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
                                    contact@crmcompany.com <SpkTooltips placement="top" title="Copy">
                                        <span className="bg-light p-1 text-muted lh-1 rounded-circle ms-1"><i className="ri-file-copy-line"></i></span>
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
                                    +(555) 123-4567
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-success-transparent">
                                        <i className="ri-map-pin-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div>
                                    4321 Maple Avenue, Suite 200, Metropolis, NY, 10001, USA
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Priority:</p>
                        <div className="badge bg-warning"><i className="ri-circle-fill lh-1 align-middle fs-9 me-1"></i> Medium Priority</div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center gap-3">
                        <div className="fs-14 fw-medium">Company Size:</div>
                        <div>
                            <span className="badge bg-primary">Enterprise</span> - 500+ Employees
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Created Date:</p>
                        <div>01-Sep-2024</div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Lead Source:</p>
                        <div><i className="ri-linkedin-line bg-info-transparent p-1 lh-1 align-middle fs-15 me-1 rounded"></i> LinkedIn</div>
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
                        <p className="fs-14 mb-0 fw-medium">Tags :</p>
                        <div>
                            <span className="badge bg-primary me-1">CRM User</span>
                            <span className="badge bg-primary">Potential Client</span>
                        </div>
                    </div>
                    <div className="p-3 d-flex align-items-center gap-3">
                        <div className="fs-14 fw-medium">
                            Key Contact :
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <div className="lh-1">
                                <span className="avatar avatar-rounded avatar-sm">
                                    <Image width={28} height={28} src="../../../assets/images/faces/3.jpg" alt="img" />
                                </span>
                            </div>
                            <div className="fw-medium">James Hartley</div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

            {/* <!-- End:: Company Details Offcanvas --> */}

            {/* <!-- Start:: Add Company --> */}

            <Modal show={show['modal'] || false} onHide={() => handleClose('modal')} className="fade" id="create-company" tabIndex={-1} centered>
                <div className="modal-content">
                    <Modal.Header className="">
                        <h6 className="modal-title">Add Company</h6>
                        <SpkButton Buttonvariant="" Customclass="btn-close crm-contact-close-btn" Buttondismiss="modal" Buttonlabel="Close" />
                    </Modal.Header>
                    <Modal.Body className="">
                        <div className="row gy-3">
                            <Col xl={12}>
                                <div className="mb-0 text-center">
                                    <span className="avatar avatar-xxl avatar-rounded p-2 bg-light">
                                        <Image width={80} height={80} src={selectedImage || ''} alt="" id="profile-img" />
                                        <SpkBadge Pill={true} variant="primary" Customclass="avatar-badge" Onclickfun={openFileInput}>
                                            <input type="file" name="photo" className="position-absolute w-100 h-100 op-0" id="profile-change" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }} />
                                            <i className="fe fe-camera"></i>
                                        </SpkBadge>
                                    </span>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="company-name">Company Name</Form.Label>
                                <Form.Control type="text" id="company-name" placeholder="Contact Name" />
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="company-lead-score">Total Deals</Form.Label>
                                <Form.Control type="number" id="company-lead-score" placeholder="Total Deals" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="company-mail">Email</Form.Label>
                                <Form.Control type="email" id="company-mail" placeholder="Enter Email" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="company-phone">Phone No</Form.Label>
                                <Form.Control type="tel" id="company-phone" placeholder="Enter Phone Number" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="key-contact">Key Contact</Form.Label>
                                <Form.Control type="text" id="key-contact" placeholder="Contact Name" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label>Industry</Form.Label>
                                <SpkSelect name="colors" option={Selectdata2} mainClass="basic-multi-select"
                                    menuplacement='auto' classNameprefix="Select2" placeholder="Select Industry" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label>Company Size</Form.Label>
                                <SpkSelect name="colors" option={Selectdata1} mainClass="basic-multi-select"
                                    menuplacement='auto' classNameprefix="Select2" defaultvalue={[Selectdata1[0]]} />
                            </Col>
                        </div>
                    </Modal.Body>
                    <div className="modal-footer">
                        <SpkButton Buttonvariant="light" Buttontype="button" onClickfunc={() => handleClose('modal')}
                            Buttondismiss="modal">Cancel</SpkButton>
                        <SpkButton Buttonvariant="primary" Buttontype="button">Create Contact</SpkButton>
                    </div>
                </div>
            </Modal>
            {/* <!-- End:: Add Company --> */}
        </Fragment>
    );
};

export default Companies;