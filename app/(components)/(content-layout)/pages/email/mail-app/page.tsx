"use client"

import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons'
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown'
import Pageheader from '@/shared/layouts-components/pageheader/pageheader'
import Seo from '@/shared/layouts-components/seo/seo'
import Link from 'next/link'
import dynamic from "next/dynamic";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Dropdown, Form, Modal, Offcanvas } from "react-bootstrap";
const SimpleBar = dynamic(() => import("simplebar-react"), { ssr: false, });
import { Maildata, Mails, Mailsapp } from "@/shared/data/pages/email/mailappdata";
const SpkSelect = dynamic(() => import("@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect"), { ssr: false });
import SpkSunEditor from "@/shared/@spk-reusable-components/reusable-plugins/spk-suneditor";
import SpkTooltips from '@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips'
import Image from 'next/image'

interface MailAppProps {}

const MailApp: React.FC<MailAppProps> = () => {

    const [Mails1, setMails3] = useState(Mailsapp);
    const [checkAll, setCheckAll] = useState(false);

    const handleCheckAll = () => {
        setCheckAll((prevCheckAll) => {
            const newCheckAll = !prevCheckAll;
            setMails3((prevMails) =>
                prevMails.map((mail) => ({
                    ...mail,
                    checked: newCheckAll,
                }))
            );
            return newCheckAll;
        });
    };

    const handleSelectMessage = (id: number) => {
        setMails3((prevMails) =>
            prevMails.map((mail) =>
                mail.id === id ? { ...mail, checked: !mail.checked } : mail
            )
        );
    };

    const [show, setShow] = useState<{ [key: string]: boolean }>({});
    const handleShow = (offcanvasName: string) => {
        setShow((prevShow) => ({ ...prevShow, [offcanvasName]: true }));
    };
    const handleClose = (offcanvasName: string) => {
        setShow((prevShow) => ({ ...prevShow, [offcanvasName]: false }));
    };

    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleVisibility = () => {
        if (isMobile) {
            setIsVisible((prev) => !prev);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Pages-Mail App" />

            <Pageheader title="Pages" currentpage="Mail App" activepage="Mail App" />

            {/* <!-- Page Header Close --> */}

            <div className="main-mail-container mb-2 gap-2 d-flex">
                <div className="mail-navigation border" onClick={toggleVisibility} style={{ display: isMobile ? (isVisible ? 'block' : 'none') : 'block', }}>
                    <div className="d-grid align-items-top p-3 border-bottom border-block-end-dashed">
                        <SpkButton Buttonvariant='primary' Customclass='' Buttontype="button" Buttontoggle="modal" Buttontarget="#mail-Compose" onClickfunc={() => handleShow('modal')}>
                            <i className="ti ti-mail-plus fs-16 align-middle me-1"></i>Compose Mail
                        </SpkButton>
                        <Modal show={show['modal'] || false} onHide={() => handleClose('modal')} className="modal-lg fade" id="mail-Compose" tabIndex={-1} aria-labelledby="mail-ComposeLabel">
                            <Modal.Header>
                                <h6 className="modal-title" id="mail-ComposeLabel">Compose Mail</h6>
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" data-bs-dismiss="modal" onClickfunc={() => handleClose('modal')}
                                    aria-label="Close"></SpkButton>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="row">
                                    <Col xl={6} className=" mb-2">
                                        <Form.Label htmlFor="fromMail" className="">From<sup><i className="ri-star-s-fill text-success fs-8"></i></sup></Form.Label>
                                        <Form.Control type="email" className="" id="fromMail" defaultValue="henrymilo2345@gmail.com" />
                                    </Col>
                                    <Col xl={6} className=" mb-2">
                                        <Form.Label htmlFor="toMail" className="">To<sup><i className="ri-star-s-fill text-success fs-8"></i></sup></Form.Label>
                                        <SpkSelect id="blog-tags" multi name="blog-tags" option={Maildata} mainClass="block w-full text-[0.875rem] !rounded-md"
                                            menuplacement='auto' classNameprefix="Select2" placeholder="Select Category" defaultvalue={[Maildata[0]]}
                                        />
                                    </Col>
                                    <Col xl={6} className=" mb-2">
                                        <Form.Label htmlFor="mailCC" className=" text-dark fw-medium">Cc</Form.Label>
                                        <Form.Control type="email" className="" id="mailCC" />
                                    </Col>
                                    <Col xl={6} className=" mb-2">
                                        <Form.Label htmlFor="mailBcc" className=" text-dark fw-medium">Bcc</Form.Label>
                                        <Form.Control type="email" className="" id="mailBcc" />
                                    </Col>
                                    <Col xl={12} className="mb-2">
                                        <Form.Label htmlFor="Subject" className="">Subject</Form.Label>
                                        <Form.Control type="text" className="" id="Subject" placeholder="Subject" />
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label className="col-form-label">Content :</Form.Label>
                                        <div className="mail-compose">
                                            <div id="mail-compose-editor"> <SpkSunEditor height={'200px'} /></div>
                                        </div>
                                    </Col>
                                </div>
                            </Modal.Body>
                            <div className="modal-footer">
                                <SpkButton Buttonvariant="light" Buttontype="button" onClickfunc={() => handleClose('modal')}
                                    Buttondismiss="modal">Cancel</SpkButton>
                                <SpkButton Buttonvariant="primary" Buttontype="button">Send</SpkButton>
                            </div>
                        </Modal>
                    </div>
                    <div>
                        <SimpleBar>
                            <ul className="list-unstyled mail-main-nav" id="mail-main-nav">
                                <li className="px-0 py-1">
                                    <div className="d-flex gap-1 justify-content-between align-items-center">
                                        <div className="fs-11 fw-medium text-success">MAILS </div>
                                    </div>
                                </li>
                                {Mails.map((idx, index) => (
                                    <li className={`${idx.class1} mail-type`} key={index}>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className={`ti ti-${idx.icon} align-middle fs-16`}></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    {idx.text1}
                                                </span>
                                                <span className={idx.class}>{idx.text2}</span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                                <li className="px-0 mt-2 py-1">
                                    <div className="d-flex gap-1 justify-content-between align-items-center">
                                        <div className="fs-11 fw-medium text-success">FOLDER LABELS </div>
                                        <Link scroll={false} href="#!" className="fs-11 fw-medium text-primary"><i className="ri-add-line lh-1 align-middle me-1"></i>Add New</Link>
                                    </div>
                                </li>
                                <li>
                                    <Link href="#!" scroll={false}>
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i className="ri-circle-fill align-middle fs-10 fw-medium text-secondary"></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                Mail
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!" scroll={false}>
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i className="ri-circle-fill align-middle fs-10 fw-medium text-success"></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                Home
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!" scroll={false}>
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i className="ri-circle-fill align-middle fs-10 fw-medium text-info"></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                Work
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="px-0 mt-2 py-1">
                                    <div className="d-flex gap-1 justify-content-between align-items-center">
                                        <div className="fs-11 text-muted fw-medium text-success">CONTACTS</div>
                                        <span className="badge bg-info rounded-pill">2 online</span>
                                    </div>
                                </li>
                                <li>
                                    <Link href="#!" scroll={false}>
                                        <div className="d-flex align-items-top lh-1">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm online avatar-rounded">
                                                    <Image height={28} width={28} src="../../../assets/images/faces/7.jpg" alt="Sender Image" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-default fw-medium mb-1">Sophia</p>
                                                <p className="fs-12 text-muted mb-0 fw-normal">Just sent the presentation.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!" scroll={false}>
                                        <div className="d-flex align-items-top lh-1">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm offline avatar-rounded">
                                                    <Image height={28} width={28} src="../../../assets/images/faces/8.jpg" alt="Sender Image" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-default fw-medium mb-1">Michael</p>
                                                <p className="fs-12 text-muted mb-0 fw-normal">Will get back to you soon.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!" scroll={false}>
                                        <div className="d-flex align-items-top lh-1">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm online avatar-rounded">
                                                    <Image height={28} width={28} src="../../../assets/images/faces/9.jpg" alt="Sender Image" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-default fw-medium mb-1">Daniel</p>
                                                <p className="fs-12 text-muted mb-0 fw-normal">Let's meet tomorrow at 10.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </SimpleBar>
                    </div>
                </div>
                <div className="total-mails border" style={{ display: isMobile ? (isVisible ? 'none' : 'block') : 'block', }}>
                    <div className="p-3 d-flex align-items-center border-bottom border-block-end-dashed flex-wrap gap-2">
                        <div className="input-group">
                            <input type="text" className="form-control shadow-none" placeholder="Search Email" aria-describedby="button-addon" />
                            <SpkButton Buttonvariant='primary' Customclass='' Buttontype="button" >
                                <i className="ri-search-line me-1"></i> Search
                            </SpkButton>
                        </div>
                    </div>
                    <div className="p-3 d-flex align-items-center border-bottom flex-wrap gap-2">
                        <div className="me-3">
                            <input className="form-check-input check-all" type="checkbox" id="checkAll" value="" checked={checkAll}
                                onChange={handleCheckAll} aria-label="..." />
                        </div>
                        <div className="flex-fill">
                            <h6 className="fw-medium mb-0">Select All Mails
                                <SpkTooltips placement="top" title="Delete">
                                    <Link href="#!" data-bs-title="Delete" className="ms-2 text-danger"><i className="ri-delete-bin-line fs-15 lh-1"></i></Link>
                                </SpkTooltips>
                            </h6>
                        </div>
                        <div className="d-flex gap-2">
                            <SpkButton Buttonvariant='light' Customclass='btn-icon me-1 d-lg-none d-block total-mails-close btn-sm' Buttontype="button" onClickfunc={toggleVisibility} >
                                <i className="ri-close-line"></i>
                            </SpkButton>
                            <div className="d-flex gap-1 align-items-center flex-wrap">
                                <SpkButton Buttonvariant='secondary' Customclass='btn-sm btn-wave' Buttontype="button" >
                                    <i className="ri-mail-unread-line me-1"></i> unread <span className="ms-1 fs-12 op-7">(5)</span>
                                </SpkButton>
                                <SpkButton Buttonvariant='success' Customclass='btn-sm btn-wave' Buttontype="button" >
                                    <i className="ri-mail-line me-1"></i> Total Mails <span className="ms-1 fs-12 op-7">(2,275)</span>
                                </SpkButton>
                                <SpkDropdown Togglevariant='' Toggletext="" Customtoggleclass="btn btn-sm btn-icon btn-info btn-wave waves-effect waves-light no-caret" Id="navbarScrollingDropdown" Icon={true} IconClass="ti ti-dots-vertical" Menulabel="navbarScrollingDropdown">
                                    <Dropdown.Item as="li" className="dropdown-item">Recent</Dropdown.Item>
                                    <Dropdown.Item as="li" className="dropdown-item">Mark All Read</Dropdown.Item>
                                    <Dropdown.Item as="li" className="dropdown-item">Delete All</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </div>
                    </div>
                    <SimpleBar className="mail-messages" id="mail-messages">
                        <ul className="list-unstyled mb-0 mail-messages-container">
                            {Mails1.map((idx, index) => (
                                <li key={index} className={idx.bordercls}>
                                    <div className="d-sm-flex align-items-top">
                                        <div className="me-3 mt-1">
                                            <input defaultChecked={idx.checked} onChange={() => handleSelectMessage(idx.id)} className="form-check-input" type="checkbox" id={`checkbox-${idx.id}`} aria-label={`Checkbox for ${idx.name}`} />
                                        </div>
                                        <div className="me-1 lh-1 text-center d-flex flex-column justify-content-between">
                                            <span className="avatar avatar-md me-2 avatar-rounded mail-msg-avatar">
                                                <Image width={40} height={40} src={idx.img} alt="" />
                                            </span>
                                            <i className="ri-star-fill fs-14 d-block lh-1 text-warning mail-starred true pb-1" title="Starred"></i>
                                        </div>
                                        <div className="flex-fill text-truncate">
                                            <Link scroll={false} href="#!" data-bs-toggle="offcanvas" onClick={() => handleShow('offcanvas')}
                                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                <div className="d-flex gap-2 justify-content-between align-items-start flex-wrap mb-1">
                                                    <p className="mb-0 fw-medium text-primary">
                                                        {idx.name}   <i className={`ri-circle-fill text-${idx.color} fs-7 lh-1 align-middle`}></i>
                                                        <span className={idx.badge}>{idx.badgetxt}</span>
                                                    </p>
                                                    <span className="badge bg-primary-transparent border border-primary border-opacity-10 fs-11 fw-medium">
                                                        <i className="ri-time-line me-1 align-middle"></i>  {idx.time}</span>
                                                </div>

                                            </Link>
                                            <div className="mail-msg mb-0">
                                                <span className="d-block mb-1 fw-medium text-truncate w-75">{idx.title}</span>
                                                <div
                                                    className="fs-12 text-muted w-75 text-truncate mail-msg-content">{idx.text}
                                                </div>
                                            </div>
                                            <div className="fw-medium align-self-end fs-12">
                                                <span className="text-success"><i className="ri-attachment-2 align-middle fs-14 lh-1"></i> {idx.attachements} Attachments</span>
                                                <span className="text-info ms-3"><i className="ri-file-text-line align-middle fs-14 lh-1"></i> {idx.docs} Docs</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </SimpleBar>
                </div>
            </div>
            <Offcanvas placement="end" show={show['offcanvas'] || false} onHide={() => handleClose('offcanvas')} className="offcanvas-end mail-info-offcanvas" tabIndex="-1" id="offcanvasRight">
                <Offcanvas.Body className="p-0">
                    <div className="mails-information">
                        <div className="mail-info-header d-flex flex-wrap gap-2 align-items-center">
                            <span className="avatar avatar-md me-2 avatar-rounded mail-msg-avatar me-1"
                            > <Image width={40} height={40} src="../../../assets/images/faces/7.jpg" alt="" /> </span>
                            <div className="flex-fill">
                                <h6 className="mb-0 fw-medium">Emily Green</h6>
                                <span className="text-muted fs-11">emilygreen8792@gmail.com</span>
                            </div>
                            <div className="mail-action-icons">
                                <SpkTooltips placement="bottom" title="Starred">
                                    <SpkButton Size="sm" Buttonvariant="primary-light" Customclass="btn-icon border">
                                        <i className="ri-star-line"></i>
                                    </SpkButton>
                                </SpkTooltips>
                                <SpkTooltips placement="bottom" title="Archive">
                                    <SpkButton Size="sm" Buttonvariant="warning-light" Customclass="btn-icon border ms-2">
                                        <i className="ri-inbox-archive-line"></i>
                                    </SpkButton>
                                </SpkTooltips>
                                <SpkTooltips placement="bottom" title="Report sapm">
                                    <SpkButton Size="sm" Buttonvariant="success-light" Customclass="btn-icon border ms-2">
                                        <i className="ri-spam-2-line"></i>
                                    </SpkButton>
                                </SpkTooltips>
                                <SpkTooltips placement="bottom" title="Delete">
                                    <SpkButton Size="sm" Buttonvariant="info-light" Customclass="btn-icon border ms-2">
                                        <i className="ri-delete-bin-line"></i>
                                    </SpkButton>
                                </SpkTooltips>
                                <SpkTooltips placement="bottom" title="Reply">
                                    <SpkButton Size="sm" Buttonvariant="danger-light" Customclass="btn-icon border ms-2 me-1">
                                        <i className="ri-reply-line"></i>
                                    </SpkButton>
                                </SpkTooltips>
                                <SpkButton Buttonvariant="" Buttontype="button" Size="sm" Customclass="btn btn-outline-light border mail-offcanvas-close btn-icon" onClickfunc={() => handleClose('offcanvas')} data-bs-dismiss="offcanvas" aria-label="Close"><i className="ri-close-line lh-1 align-middle"></i></SpkButton>
                            </div>
                            <div className="responsive-mail-action-icons">
                                <SpkDropdown Togglevariant='' Toggletext="" Customtoggleclass="btn btn-icon btn-light btn-wave waves-light waves-effect no-caret" Id="navbarScrollingDropdown" Icon={true} IconClass="ti ti-dots-vertical" Menulabel="navbarScrollingDropdown">
                                    <Dropdown.Item as="li" className="dropdown-item"><i className="ri-inbox-archive-line me-1 align-middle d-inline-block"></i>Starred</Dropdown.Item>
                                    <Dropdown.Item as="li" className="dropdown-item"><i className="ri-inbox-archive-line me-1 align-middle d-inline-block"></i>Archive</Dropdown.Item>
                                    <Dropdown.Item as="li" className="dropdown-item"><i className="ri-spam-2-line me-1 align-middle d-inline-block"></i>Report Spam</Dropdown.Item>
                                    <Dropdown.Item as="li" className="dropdown-item"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                    <Dropdown.Item as="li" className="dropdown-item"><i className="ri-reply-line me-1 align-middle d-inline-block"></i>Reply</Dropdown.Item>
                                </SpkDropdown>
                                <button className="btn btn-icon btn-light ms-1 close-button" onClick={() => handleClose('offcanvas')} data-bs-dismiss="offcanvas" aria-label="Close"> <i className="ri-close-line"></i> </button>
                            </div>
                        </div>
                        <SimpleBar className="mail-info-body">
                            <div className="p-3">
                                <div className="mb-4">
                                    <p className="fs-20 fw-medium mb-1">Exciting News: Upcoming Product Launch!</p>
                                    <span className="fs-11 badge bg-primary-transparent">Date: Oct 22, 2024 | Time: 03:05 PM</span>
                                </div>
                                <div className="main-mail-content mb-3">
                                    <h2 className="fs-16 fw-semibold mb-3">Dear Mr. Jacksul Monish 🖐,</h2>
                                    <p className="mb-2 text-muted">We are thrilled to announce the launch of our latest product, <strong>"Innovative Solutions for Everyday Challenges."</strong> This cutting-edge solution is designed to enhance your productivity and streamline your workflow, making it an essential tool for professionals in today's fast-paced environment.</p>
                                    <h6 className="fw-semibold">Key Features of Our New Product:</h6>
                                    <ol className="text-muted my-3">
                                        <li className="mb-2">User-friendly interface for seamless navigation</li>
                                        <li className="mb-2">Advanced analytics to drive informed decision-making</li>
                                        <li className="mb-2">24/7 customer support to assist you anytime</li>
                                    </ol>
                                    <p className="mb-2 text-muted">We are excited to see how this new product will positively impact your daily tasks. May it bring you efficiency and success in all your endeavors!</p><div className="mb-0 mt-4 text-muted">
                                        <p className="fw-medium mb-3">Thank you for being a valued part of our community.</p>
                                    </div>
                                    <p className="mb-0 fw-medium ">Best regards,</p>
                                    <p className="mb-0">Emily Green</p>
                                </div>
                                <div className="mail-attachments mb-3">
                                    <div className="fw-medium mb-3 d-flex gap-3 align-items-center justify-content-between">
                                        <span className="text-success fs-14"><i className="ri-attachment-2 align-middle fs-14 lh-1"></i> 2 Attachment</span>
                                        <a className="btn-sm btn btn-info-light ms-auto">Download all</a>
                                    </div>
                                    <div className="mt-2 d-flex flex-wrap gap-3 p-2 bg-light rounded">
                                        <div className="d-flex align-items-center flex-wrap gap-3 border p-2 rounded-2 flex-fill bg-white">
                                            <div className="lh-1"> <span className="avatar avatar-md bg-primary-transparent avatar-rounded"> <i className="ri-file-pdf-2-line fs-18 lh-1 align-middle"></i> </span> </div>
                                            <div className="flex-fill"> <a href="javascript:void(0);"> <p className="mb-1 fs-12 fw-medium"> Instructions_file.pdf </p></a>
                                                <div className="fs-12 text-muted text-wrap">2.1KB</div>
                                            </div> <div className="ms-auto">
                                                <div className="btn btn-white border shadow-sm rounded-circle btn-icon me-1"> <i className="ri-eye-line text-info"></i> </div>
                                                <div className="btn btn-white border shadow-sm rounded-circle btn-icon"> <i className="ri-download-cloud-line text-success"></i> </div>

                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center flex-wrap gap-3 border p-2 rounded-2 flex-fill bg-white">
                                            <div className="me-1 lh-1"> <span className="avatar avatar-md bg-primary-transparent avatar-rounded">
                                                <i className="ri-file-pdf-line fs-18"></i> </span> </div>
                                            <div className="flex-fill"> <a href="javascript:void(0);">
                                                <p className="mb-1 fs-12 fw-medium"> Complete_Folder.doc </p></a>
                                                <div className="fs-12 text-muted text-wrap">1.5KB</div> </div>
                                            <div className="ms-auto"> <div className="btn btn-white border shadow-sm rounded-circle btn-icon me-1">
                                                <i className="ri-eye-line text-info"></i>
                                            </div>
                                                <div className="btn btn-white border shadow-sm rounded-circle btn-icon"> <i className="ri-download-cloud-line text-success"></i> </div> </div>
                                        </div> </div>
                                </div>
                                <div className="mb-3"> <span className="fs-14 fw-medium"><i className="ri-reply-all-line me-1 align-middle d-inline-block"></i>Reply:</span> </div>
                                <div id="mail-reply-editor"><SpkSunEditor height={'200px'} /></div>
                            </div>
                        </SimpleBar>
                        <div className="mail-info-footer d-flex flex-wrap gap-2 align-items-center justify-content-between">
                            <div>
                                <SpkTooltips placement="top" title="Print">
                                    <SpkButton Buttonvariant="primary-light" Customclass="btn-icon">
                                        <i className="ri-printer-line"></i>
                                    </SpkButton>
                                </SpkTooltips>
                                <SpkTooltips placement="top" title="Mark as read">
                                    <SpkButton Buttonvariant="secondary-light" Customclass="btn-icon ms-1">
                                        <i className="ri-mail-open-line"></i>
                                    </SpkButton>
                                </SpkTooltips>
                                <SpkTooltips placement="top" title="Reload">
                                    <SpkButton Buttonvariant="success-light" Customclass="btn-icon ms-1">
                                        <i className="ri-refresh-line"></i>
                                    </SpkButton>
                                </SpkTooltips>
                            </div>
                            <div>
                                <SpkButton Buttonvariant="secondary" Customclass="">
                                    <i className="ri-share-forward-line me-1 d-inline-block align-middle"></i>Forward
                                </SpkButton>
                                <SpkButton Buttonvariant="danger" Customclass="ms-1">
                                    <i className="ri-reply-all-line me-1 d-inline-block align-middle"></i>Reply
                                </SpkButton>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </Fragment>
    )
}

export default MailApp
