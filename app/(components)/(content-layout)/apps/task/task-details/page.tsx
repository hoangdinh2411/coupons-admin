"use client"

import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { Commentstaskdata, FileData, Tasks, TasktimelineData } from "@/shared/data/apps/tasks/taskdetailsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, ProgressBar, Row } from "react-bootstrap";

interface TaskDetailsProps {}

const TaskDetails: React.FC<TaskDetailsProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-Task Details" />

            <Pageheader title="Apps" currentpage="Task Details" activepage="Task Details" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex gap-2 mb-4 align-items-center">
                                <h5 className="fw-medium mb-0">
                                    Upgrade Web Performance <span className="badge bg-success align-middle fs-10 fw-medium">Active</span>
                                </h5>
                                <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-sm btn-wave waves-effect waves-light ms-auto">
                                    <i className="ri-edit-line"></i> Edit Task
                                </SpkButton>
                            </div>
                            <div className="fs-15 fw-medium mb-2">Task Description :</div>
                            <p className="text-muted mb-4">Enhance the website's overall performance by optimizing loading times, improving security, and ensuring a seamless user experience. Focus on implementing advanced performance metrics and security features.</p>
                            <Row className="mb-3">
                                <Col xl={6}>
                                    <div className="fs-15 fw-medium mb-2">Key Tasks :</div>
                                    <ul className="task-details-key-tasks mb-0">
                                        <li>Analyze current website performance and identify bottlenecks.</li>
                                        <li>Implement caching strategies to speed up page load times.</li>
                                        <li>Upgrade security protocols to safeguard user data.</li>
                                        <li>Optimize images and media for faster loading.</li>
                                        <li>Conduct performance testing and adjust configurations as needed.</li>
                                        <li>Deploy improvements and monitor impact on user experience.</li>
                                    </ul>
                                </Col>
                                <Col xl={6}>
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="fs-15 fw-medium">Sub Tasks :</div>
                                        <Link href="#!" scroll={false} className="btn btn-info-light btn-wave btn-sm waves-effect waves-light">See More</Link>
                                    </div>
                                    <ul className="list-group mb-0">
                                        {Tasks.map((task, index) => (
                                            <li key={index} className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <i className="ti ti-check fs-15 text-secondary lh-1 p-1 bg-secondary-transparent rounded-circle"></i>
                                                    </div>
                                                    <div className="fw-medium">{task.description}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </Col>
                            </Row>
                            <Row className="pt-1 gy-3 gy-xl-0">
                                <Col xl={6}>
                                    <div className="fs-15 fw-medium mb-2">Uploads :</div>
                                    <div className="d-flex gap-2 mb-0 flex-wrap">
                                        <Link aria-label="anchor" href="#!" scroll={false} className="avatar avatar-xl">
                                            <Image width={64} height={64} src="../../../assets/images/media/media-37.jpg" alt="File 1" />
                                        </Link>
                                        <Link aria-label="anchor" href="#!" scroll={false} className="avatar avatar-xl">
                                            <Image width={64} height={64} src="../../../assets/images/media/media-38.jpg" alt="File 2" />
                                        </Link>
                                        <Link aria-label="anchor" href="#!" scroll={false} className="avatar avatar-xl">
                                            <Image width={64} height={64} src="../../../assets/images/media/media-39.jpg" alt="File 3" />
                                        </Link>
                                        <Link aria-label="anchor" href="#!" scroll={false} className="avatar avatar-xl">
                                            <Image width={64} height={64} src="../../../assets/images/media/media-40.jpg" alt="File 4" />
                                        </Link>
                                        <Link aria-label="anchor" href="#!" scroll={false} className="avatar avatar-xl">
                                            <Image width={64} height={64} src="../../../assets/images/media/media-41.jpg" alt="File 5" />
                                        </Link>
                                        <Link aria-label="anchor" href="#!" scroll={false} className="avatar avatar-xl bg-primary text-fixed-white">
                                            +2
                                        </Link>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="d-flex gap-2 mb-3">
                                        <div className="fs-14 fw-medium">Created Date :</div>
                                        <div className="text-muted">10 September,2024</div>
                                    </div>
                                    <div className="d-flex gap-2 mb-3">
                                        <div className="fs-14 fw-medium">Last Updated Date :</div>
                                        <div className="text-muted">18 September,2024</div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <div className="fs-14 fw-medium">Total Attachments :</div>
                                        <div className="text-muted">6 Attachments</div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-xxl-3">
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Comments
                            </Card.Title>
                            <div className="badge bg-success">3 New</div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <ul className="list-group list-group-flush">
                                {Commentstaskdata.map((comment) => (
                                    <li key={comment.id} className="list-group-item mb-1">
                                        <div className="d-flex align-items-start gap-3 flex-wrap">
                                            <div>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <Image width={28} height={28} src={comment.image} alt={comment.name} />
                                                </span>
                                            </div>
                                            <div className="flex-fill w-50 text-truncate">
                                                <span className="fw-medium d-block">{comment.name}</span>
                                                <span className="d-block mb-3 text-muted fs-12 text-truncate">{comment.description}</span>
                                                {comment.file && (
                                                    <div className="d-flex align-items-center gap-2 mb-3">
                                                        <Link aria-label="anchor" href="#!" className="avatar avatar-md">
                                                            <Image width={40} height={40} src={comment.file.src} alt="Document" />
                                                        </Link>
                                                        <span className="fs-11 text-muted">{comment.file.size}</span>
                                                    </div>
                                                )}
                                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                                    <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-sm btn-wave waves-effect waves-light">
                                                        Reply <i className="ri-reply-line ms-1"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttontype="button" Buttonvariant="secondary-light" Customclass="btn-sm btn-wave waves-effect waves-light">
                                                        View Details <i className="ri-eye-line ms-1"></i>
                                                    </SpkButton>
                                                </div>
                                            </div>
                                            <div className="btn-list">
                                                <SpkButton Buttontype="button" Buttonvariant="success-light" Customclass="btn-icon btn-sm btn-wave waves-effect waves-light">
                                                    <i className="ri-thumb-up-line"></i>
                                                </SpkButton>
                                                <SpkButton Buttontype="button" Buttonvariant="secondary-light" Customclass="btn-icon btn-sm btn-wave waves-effect waves-light">
                                                    <i className="ri-thumb-down-line"></i>
                                                </SpkButton>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                        <Card.Footer className=" rounded">
                            <div className="d-sm-flex align-items-center lh-1">
                                <div className="me-sm-3 mb-2 mb-sm-0">
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <Image width={28} height={28} src="../../../assets/images/faces/9.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill me-sm-2">
                                    <div className="input-group">
                                        <input type="text" className="form-control shadow-none border" placeholder="Write Comment" aria-label="Recipient's username with two button addons" />
                                        <SpkButton Buttontype="button" Buttonvariant="outline-light" Customclass="border btn-wave waves-effect waves-light">
                                            <i className="bi bi-paperclip"></i>
                                        </SpkButton>
                                        <SpkButton Buttontype="button" Buttonvariant="outline-light" Customclass="border btn-wave waves-effect waves-light">
                                            <i className="bi bi-camera"></i>
                                        </SpkButton>
                                        <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-wave waves-effect waves-light">
                                            Send
                                        </SpkButton>
                                    </div>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!--Start::row-2 --> */}
            <Row>
            <Col xxl={6}>
    <Card className="custom-card">
        <Card.Header className="justify-content-between border-bottom-0 pb-0">
            <Card.Title>
                Recent Activity
            </Card.Title>
        </Card.Header>
        <Card.Body className="ps-0">
            <ul className="list-unstyled profile-timeline mb-3">
                {TasktimelineData.map((item) => (
                    <li key={item.id}>
                        <div>
                            <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                <Image width={28} height={28} src={item.avatar} alt={item.name} />
                            </span>
                            <p className="text-muted mb-2">
                                <span className="text-default">
                                    <span className="fw-medium">{item.name}</span> {item.action}
                                </span>
                                <span className="float-end fs-11 badge bg-light text-muted">{item.date}</span>
                            </p>

                            {item.description && (
                                <p className="text-muted mb-2 fs-12">{item.description}</p>
                            )}
                            {item.media?.map((media: any, index) => (
                                <div key={index} className="profile-activity-media mb-0"> {/* Changed <p> to <div> */}
                                    {media.type === 'image' ? (
                                        <Link aria-label="anchor" href="#!">
                                            <Image width={64} height={48} src={media.src} alt={media.alt} className="bg-light mb-0" />
                                        </Link>
                                    ) : (
                                        <div className="d-flex align-items-center gap-2">
                                            <Link aria-label="anchor" href="#!" scroll={false} className="avatar avatar-sm">
                                                <Image width={28} height={28} src={media.src} alt={media.alt} className="m-0 mt-1 custom-images" />
                                            </Link>
                                            <span className="fs-11 text-muted">{media.size}</span>
                                        </div>
                                    )}
                                    <span className="fs-11 text-muted">{item.data}</span>
                                </div> 
                            ))}
                            {item.reactions && (
                                <p className="text-muted mb-0 fs-12">
                                    <span className="avatar-list-stacked ms-2">
                                        {item.reactions.map((reaction, idx) => (
                                            <span key={idx} className="avatar avatar-xs avatar-rounded">
                                                <Image width={20} height={20} src={`../../../assets/images/faces/${idx + 1}.jpg`} alt={reaction} />
                                            </span>
                                        ))}
                                        {item.reactions.length} Team members reacted
                                    </span>
                                </p>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </Card.Body>
    </Card>
</Col>

                <Col xxl={3} xl={6}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="">
                            <Card.Title>
                                Task Info
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <tbody>
                                        <tr>
                                            <td><span className="fw-medium">Task ID :</span></td>
                                            <td>#SPRU667</td>
                                        </tr>
                                        <tr>
                                            <td><span className="fw-medium">Task Tags :</span></td>
                                            <td>
                                                <span className="badge bg-info-transparent me-1">Marketing</span>
                                                <span className="badge bg-success-transparent">UI</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="fw-medium">Assigned By :</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <Image width={28} height={28} src="../../../assets/images/faces/3.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <span className="d-block fs-14 fw-medium">Glory</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="fw-medium">Progress :</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <ProgressBar className="progress progress-sm progress-animate flex-fill me-2" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                                        <ProgressBar className="progress-bar bg-primary progress-bar-striped progress-bar-animated" now={75}></ProgressBar>
                                                    </ProgressBar>
                                                    <div className="text-muted fs-11">75%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="fw-medium">Status :</span></td>
                                            <td>
                                                <span className="fw-medium text-muted">Inprogress<i className="bi bi-bar-chart-fill mx-1 text-pink"></i></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="fw-medium">Priority :</span></td>
                                            <td>
                                                <span className="badge bg-success"><i className="ti ti-pennant-2 fs-12"></i> Low</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="fw-medium">Start Date :</span></td>
                                            <td>
                                                13, June 2024
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="fw-medium">End Date :</span></td>
                                            <td>
                                                31, Dec 2024
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="fw-medium">Assignees :</span></td>
                                            <td>
                                                <div className="avatar-list-stacked mb-1">
                                                    <span className="avatar avatar-xs avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Simon">
                                                        <Image width={20} height={20} src="../../../assets/images/faces/4.jpg" alt="Sony" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Sasha">
                                                        <Image width={20} height={20} src="../../../assets/images/faces/12.jpg" alt="Vinnu" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Hishen">
                                                        <Image width={20} height={20} src="../../../assets/images/faces/6.jpg" alt="kaithi" />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="">
                            <Card.Title>
                                Attachments list
                            </Card.Title>
                            <Link href="#!" className="btn btn-primary-light ms-auto btn-sm mt-1"> View More</Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <ul className="list-group list-group-flush">
                                {FileData.map((file) => (
                                    <li key={file.id} className="list-group-item">
                                        <div className="d-flex align-items-center flex-wrap gap-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm">
                                                    <Image width={20} height={20} src={file.image} alt={file.name} />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link href="#!"><span className="d-block fw-medium">{file.name}</span></Link>
                                                <span className="d-block text-muted fs-12 fw-normal">{file.size}</span>
                                            </div>
                                            <div className="btn-list">
                                                <SpkButton Buttontype="button" Buttonvariant="info-light" Customclass="btn-sm btn-icon btn-wave">
                                                    <i className="ri-edit-line"></i>
                                                </SpkButton>
                                                <SpkButton Buttontype="button" Buttonvariant="danger-light" Customclass="btn-sm btn-icon btn-wave">
                                                    <i className="ri-delete-bin-line"></i>
                                                </SpkButton>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-2 --> */}
        </Fragment>
    );
};

export default TaskDetails;