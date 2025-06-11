"use client"

import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { Filecards, Files, Foldersdata, ListItem, StorageOptions, StorageSeries } from "@/shared/data/pages/filemanagerdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Modal, Offcanvas, Pagination, ProgressBar, Row } from "react-bootstrap";

interface FileManagerProps {}

const FileManager: React.FC<FileManagerProps> = () => {

    const [files, setFiles] = useState<any>([]);

    const [show, setShow] = useState<{ [key: string]: boolean }>({});
    const handleShow = (offcanvasName: string) => {
        setShow((prevShow) => ({ ...prevShow, [offcanvasName]: true }));
    };
    const handleClose = (offcanvasName: string) => {
        setShow((prevShow) => ({ ...prevShow, [offcanvasName]: false }));
    };

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Pages-File Manager" />

            <Pageheader title="Pages" currentpage="File Manager" activepage="File Manager" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Body className="p-0">
                            <div className="file-manager-folders">
                                <div className="d-flex p-3 flex-wrap gap-2 align-items-center justify-content-between border-bottom">
                                    <div className="flex-fill">
                                        <h6 className="fw-medium mb-0">All Folders</h6>
                                    </div>
                                    <div className="d-flex gap-2 flex-lg-nowrap flex-wrap justify-content-sm-end w-75">
                                        <div className="input-group">
                                            <input type="text" className="form-control w-50" placeholder="Search File" aria-describedby="button-addon01" />
                                            <SpkButton Buttonvariant="primary-light" Buttontype="button" Id="button-addon01"><i className="ri-search-line"></i></SpkButton>
                                        </div>
                                        <SpkButton Buttonvariant="primary" onClickfunc={() => handleShow('fileModal')} Customclass="btn-w-md d-flex align-items-center justify-content-center btn-wave waves-light text-nowrap"
                                            data-bs-toggle="modal" data-bs-target="#create-folder">
                                            <i className="ri-add-circle-line align-middle me-1"></i>Create Folder
                                        </SpkButton>
                                        <Modal show={show['fileModal'] || false} onHide={() => handleClose('fileModal')} centered className="fade" id="create-folder" tabIndex={-1} aria-labelledby="create-folder" data-bs-keyboard="false">
                                            <Modal.Header>
                                                <h6 className="modal-title" id="staticBackdropLabel">Create Folder
                                                </h6>
                                                <SpkButton Buttonvariant="" onClickfunc={() => handleClose('fileModal')} Buttontype="button" Customclass="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></SpkButton>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <label htmlFor="create-folder1" className="form-label">Folder Name</label>
                                                <input type="text" className="form-control" id="create-folder1" placeholder="Folder Name" />
                                            </Modal.Body>
                                            <div className="modal-footer">
                                                <SpkButton Buttonvariant="light" Buttontype="button" Size="sm" Customclass="btn-icon" onClickfunc={() => handleClose('fileModal')}
                                                    data-bs-dismiss="modal"><i className="ri-close-fill"></i></SpkButton>
                                                <SpkButton Buttonvariant="success" Buttontype="button" Size="sm" >Create</SpkButton>
                                            </div>
                                        </Modal>
                                        <SpkButton Buttonvariant="" onClickfunc={() => handleShow('careteModal')} Customclass="btn btn-warning-light btn-w-md d-flex align-items-center justify-content-center btn-wave waves-light"
                                            data-bs-toggle="modal" data-bs-target="#create-file">
                                            <i className="ri-add-circle-line align-middle me-1"></i>Create File
                                        </SpkButton>
                                        <Modal show={show['careteModal'] || false} onHide={() => handleClose('careteModal')} centered className="fade" id="create-file" tabIndex={-1} aria-labelledby="create-file" data-bs-keyboard="false">
                                            <Modal.Header>
                                                <h6 className="modal-title" id="staticBackdropLabel1">Create File
                                                </h6>
                                                <SpkButton Buttonvariant="" Buttontype="button" onClickfunc={() => handleClose('careteModal')} Customclass="btn-close" Buttondismiss="modal"
                                                    Buttonlabel="Close"></SpkButton>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <label htmlFor="create-file1" className="form-label">File Name</label>
                                                <input type="text" className="form-control" id="create-file1" placeholder="File Name" />
                                            </Modal.Body>
                                            <div className="modal-footer">
                                                <SpkButton Buttonvariant="light" Buttontype="button" Size="sm" Customclass="btn-icon" onClickfunc={() => handleClose('careteModal')}
                                                    data-bs-dismiss="modal"><i className="ri-close-fill"></i></SpkButton>
                                                <SpkButton Buttonvariant="success" Buttontype="button" Size="sm">Create</SpkButton>
                                            </div>
                                        </Modal>
                                    </div>
                                </div>
                                <div className="p-3 file-folders-container">
                                    <div className="d-flex mb-3 align-items-center justify-content-between">
                                        <p className="mb-0 fw-semibold fs-15">Favourites</p>
                                        <Link href="#!" scroll={false} className="fs-12 text-muted btn btn-light btn-sm"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                    </div>
                                    <Row className="mb-3">
                                        {Filecards.map((folder, index) => (
                                            <Col xl={3} key={index}>
                                                <Card className={`custom-card border shadow-none ${folder.bgColor} ${folder.borderColor} border-opacity-10`}>
                                                    <Card.Body className="text-center">
                                                        <div className="mb-1 folder-svg-container d-flex flex-wrap justify-content-between align-items-top">
                                                            <i className="ri-star-fill fs-14 lh-1 text-warning"></i>
                                                            <div>
                                                                <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="p-0 lh-1 no-caret text-muted" Toggletext="" Arrowicon1={true}>
                                                                    <Dropdown.Item href="#!">Delete</Dropdown.Item>
                                                                    <Dropdown.Item href="#!">Rename</Dropdown.Item>
                                                                    <Dropdown.Item href="#!">Hide Folder</Dropdown.Item>
                                                                </SpkDropdown>
                                                            </div>
                                                        </div>
                                                        {folder.iconPath}
                                                        <p className="mb-1 fw-semibold text-default fs-14">{folder.title}</p>
                                                        <p className="mb-0 fs-12 text-muted">{folder.fileCount}</p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                    <div className="d-flex mb-3 align-items-center justify-content-between">
                                        <p className="mb-0 fw-semibold fs-15">Folders</p>
                                        <Link href="#!" scroll={false} className="fs-12 text-muted btn btn-light btn-sm"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                    </div>
                                    <Row className="mb-2">
                                        {Foldersdata.map((folder, index) => (
                                            <Col xxl={3} sm={6} key={index}>
                                                <Card className="custom-card shadow-none border">
                                                    <Card.Body>
                                                        <div className="mb-4 folder-svg-container d-flex flex-wrap justify-content-between align-items-top">
                                                            <div className="avatar">
                                                                <Image fill src={folder.image} alt={folder.title} className="img-fluid" />
                                                            </div>
                                                            <div>
                                                                <SpkDropdown Togglevariant="light" Toggletext="" Arrowicon1={true} Customclass="no-caret" Id="navbarScrollingDropdown" Customtoggleclass="btn-sm rounded-circle btn-icon no-caret" Menulabel="navbarScrollingDropdown">
                                                                    <Dropdown.Item as="li" className="dropdown-item">
                                                                        Delete
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item as="li" className="dropdown-item">
                                                                        Rename
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item as="li" className="dropdown-item">
                                                                        Hide Folder
                                                                    </Dropdown.Item>
                                                                </SpkDropdown>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                            <div>
                                                                <p className="fs-14 fw-medium mb-1 lh-1">
                                                                    <Link href="#!" scroll={false}>{folder.title}</Link>
                                                                </p>
                                                                <span className="text-muted fs-12">{folder.filesCount} Files</span>
                                                            </div>
                                                            <div>
                                                                <div className="avatar-list-stacked">
                                                                    {folder.avatars.map((avatar, avatarIndex) => (
                                                                        <span className="avatar avatar-sm avatar-rounded" key={avatarIndex}>
                                                                            <Image height={28} width={28} src={avatar} alt="avatar" />
                                                                        </span>
                                                                    ))}
                                                                    <span className="avatar avatar-sm avatar-rounded lh-1 fs-12 align-middle bg- border border-dashed fw-medium shadow-sm bg-primary">
                                                                        <i className="ri-add-line align-middle fs-14"></i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                    <div className="d-flex mb-3 align-items-center justify-content-between">
                                        <p className="mb-0 fw-semibold fs-15">Recent Files</p>
                                        <Link href="#!" scroll={false} className="fs-12 text-muted btn btn-light btn-sm"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                    </div>
                                    <Row>
                                        <Col xl={12}>
                                            <div className="table-responsive border border-bottom-0">
                                                <SpkTables tBodyClass="files-list" tableClass="text-nowrap table-hover" header={[{ title: 'File Name' }, { title: 'Category' }, { title: 'Size' }, { title: 'Date Modified' }, { title: 'Action' }]} >
                                                    {Files.map((file, index) => (
                                                        <tr key={index} className={index === 3 ? 'table-active' : ''}>
                                                            <th scope="row">
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <div className="me-0">
                                                                        <span className={`avatar avatar-md ${file.avatarClass} avatar-rounded`}>
                                                                            {file.svgIcon}
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <Link href={file.link} data-bs-toggle="offcanvas" onClick={() => handleShow('offcanvas')} data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                                            {file.fileName}
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </th>
                                                            <td>{file.category}</td>
                                                            <td>{file.size}</td>
                                                            <td>{file.date}</td>
                                                            <td>
                                                                <div className="hstack gap-2 fs-15">
                                                                    <Link scroll={false} href={file.link} className="btn btn-icon btn-sm btn-success rounded-circle">
                                                                        <i className="ri-eye-line"></i>
                                                                    </Link>
                                                                    <Link scroll={false} href={file.link} className="btn btn-icon btn-sm btn-secondary rounded-circle">
                                                                        <i className="ri-delete-bin-line"></i>
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    <tr>
                                                        <td colSpan={5}>
                                                            <nav aria-label="Page navigation">
                                                                <nav aria-label="Page navigation" className="pagination-style-4 float-end">
                                                                    <Pagination className="mb-0">
                                                                        <Pagination.Item className="disabled">Prev</Pagination.Item>
                                                                        <Pagination.Item className="active">1</Pagination.Item>
                                                                        <Pagination.Item className="">2</Pagination.Item>
                                                                        <Pagination.Item className="">next</Pagination.Item>
                                                                    </Pagination>
                                                                </nav>
                                                            </nav>
                                                        </td>
                                                    </tr>
                                                </SpkTables>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} >
                    <Card className="custom-card overflow-hidden">
                        <Card.Body>
                            <div className="d-flex align-items-center gap-3 p-3 bg-light rounded border mb-3">
                                <div>
                                    <span className="avatar avatar-md bg-primary">
                                        <i className="ri-hard-drive-2-line fs-16"></i>
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <div> Storage
                                        <p className="mb-0"><span className="fw-bold fs-14">68.12GB</span> Used</p>
                                    </div>
                                </div>
                                <div className="ms-auto text-end">
                                    <p className="fs-12 text-success fw-semibold mb-0">21.35GB free space</p>
                                    <p className="fs-12 text-muted fw-medium mb-0">Available:</p>
                                </div>
                            </div>
                            <div id="file-manager-storage">
                                <Spkapexcharts chartOptions={StorageOptions} chartSeries={StorageSeries} type={"donut"} height="220" width={"100%"} />
                            </div>
                        </Card.Body>
                        <Card.Footer className="p-0">
                            <div className="m-3 mb-0">
                                <span className="fs-12 text-muted">Storage Details</span>
                            </div>
                            <ul className="list-group list-group-flush mb-3">
                                {ListItem.map((item, index) => (
                                    <li key={index} className="list-group-item">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className={`main-card-icon ${item.iconClass}`}>
                                                <div className={`p-1 rounded-circle ${item.colorClass}-transparent border ${item.colorClass} border-opacity-10`}>
                                                    <div className={`avatar avatar-sm text-${item.iconClass}`}>
                                                        <i className={item.icon}></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="fw-medium">{item.title}</span>
                                                <span className="text-muted fs-12 d-block">{item.fileCount} files</span>
                                            </div>
                                            <div>
                                                <span className={`fw-medium text-${item.iconClass} mb-0 fs-14`}>{item.size}</span>
                                            </div>
                                        </div>
                                        <ProgressBar className={`progress progress-md p-1 ${item.colorClass} bg-opacity-10 mt-2`} role="progressbar" aria-valuenow={item.progress} aria-valuemin={0} aria-valuemax={100}>
                                            <ProgressBar className={`progress-bar progress-bar-striped bg-${item.iconClass} progress-bar-animated`} now={item.progress} />
                                        </ProgressBar>
                                    </li>
                                ))}
                            </ul>
                        </Card.Footer>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="filemanager-upgrade-storage w-100 text-center">
                                <span className="d-block mb-3 pb-3 bg-success-transparent rounded-2">
                                    <Image fill src="../../assets/images/media/file-manager/2.png" alt="" className="img-fluid" />
                                </span>
                                <span className="fs-16 fw-semibold text-default">Unlock Premium Features Today!</span>
                                <span className="d-block text-muted mt-2 fs-12">Upgrade now to enjoy unlimited storage and advanced tools for better management.</span>
                                <div className="mt-3 d-grid">
                                    <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="btn-lg btn-wave waves-effect waves-light">
                                        <i className="ri-vip-crown-line lh-1 text-warning me-1 fs-16 fw-medium"></i>Upgrade to Premium
                                    </SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}
            <Offcanvas className="offcanvas-end" placement="end" tabIndex="-1" id="offcanvasRight" show={show['offcanvas'] || false} onHide={() => handleClose('offcanvas')}>
                <Offcanvas.Body className=" p-0">
                    <div className="selected-file-details">
                        <div className="d-flex p-3 align-items-center justify-content-between border-bottom">
                            <div>
                                <h6 className="fw-medium mb-0">File Details</h6>
                            </div>
                            <div className="d-flex align-items-center">
                                <Dropdown className="me-1">
                                    <Dropdown.Toggle as="button" variant="btn-primary-light" className="btn btn-sm btn-icon  btn-wave waves-light waves-effect waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <li><Dropdown.Item as="a" >Share</Dropdown.Item></li>
                                        <li><Dropdown.Item as="a" >Copy</Dropdown.Item></li>
                                        <li><Dropdown.Item as="a" >Move</Dropdown.Item></li>
                                        <li><Dropdown.Item as="a" >Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item as="a" >Raname</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button type="button" variant="btn-outline-light" className="btn btn-sm btn-icon  border" data-bs-dismiss="offcanvas"
                                    aria-label="Close" onClick={() => handleClose('offcanvas')}><i className="ri-close-line"></i></Button>
                            </div>
                        </div>
                        <div className="filemanager-file-details" id="filemanager-file-details">
                            <div className="p-3 text-center border-bottom border-block-end-dashed">
                                <div className="file-details mb-3">
                                    <Image fill src="../../../assets/images/media/blog/9.jpg" alt="" />
                                </div>
                                <div>
                                    <p className="mb-0 fw-medium fs-16">IMG-09123878-SPK734.jpeg</p>
                                    <p className="mb-0 text-muted fs-10">422KB | 23,Nov 2024</p>
                                </div>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <div>
                                            <span className="fw-medium">File Format : </span><span className="fs-12 text-muted">jpeg</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div>
                                            <p className="fw-medium mb-0">File Description : </p>
                                            <span className="fs-12 text-muted">This file contains 3 folder Xintra.main & Xintra.premium & Xintra.featured and 42 images and layout styles are added in this update.</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <p className="fw-medium mb-0">File Location : </p>
                                        <span className="fs-12 text-muted">Device/Storage/Archives/IMG-09123878-SPK734.jpeg</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <p className="mb-1 fw-medium fs-14">Downloaded from :</p>
                                <Link className="text-primary fw-medium text-break" href="https://themeforest.net/user/spruko/portfolio" target="_blank">
                                    <u>https://themeforest.net/user/spruko/portfolio</u>
                                </Link>
                            </div>
                            <div className="p-3">
                                <p className="mb-2 fw-medium fs-14">Shared With :</p>
                                <Link href="#!" scroll={false}>
                                    <div className="d-flex align-items-center p-2 mb-1">
                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                            <Image height={28} width={28} src="../../../assets/images/faces/1.jpg" alt="" />
                                        </span>
                                        <span className="fw-medium flex-fill">Akira Susan</span>
                                        <span className="badge bg-success-transparent fw-normal">28,Nov 2024</span>
                                    </div>
                                </Link>
                                <Link href="#!" scroll={false}>
                                    <div className="d-flex align-items-center p-2 mb-1">
                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                            <Image height={28} width={28} src="../../../assets/images/faces/15.jpg" alt="" />
                                        </span>
                                        <span className="fw-medium flex-fill">Khalid Ahmad</span>
                                        <span className="badge bg-success-transparent fw-normal">16,Oct 2024</span>
                                    </div>
                                </Link>
                                <Link href="#!" scroll={false}>
                                    <div className="d-flex align-items-center p-2 mb-1">
                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                            <Image height={28} width={28} src="../../../assets/images/faces/8.jpg" alt="" />
                                        </span>
                                        <span className="fw-medium flex-fill">Jeremiah Jackson</span>
                                        <span className="badge bg-success-transparent fw-normal">05,Dec 2024</span>
                                    </div>
                                </Link>
                                <Link href="#!" scroll={false}>
                                    <div className="d-flex align-items-center p-2">
                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                            <Image height={28} width={28} src="../../../assets/images/faces/13.jpg" alt="" />
                                        </span>
                                        <span className="fw-medium flex-fill">Brigo Jhonson</span>
                                        <span className="badge bg-success-transparent fw-normal">26,Apr 2024</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </Fragment>
    );
};

export default FileManager;