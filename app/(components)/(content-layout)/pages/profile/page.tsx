"use client"

import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { Followersdata, ProfileGallery, Skillsdata, Usersdata } from "@/shared/data/pages/profiledata";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, Form, Nav, Row, Tab } from "react-bootstrap";
const CreatableSelect = dynamic(() => import("react-select/creatable"), { ssr: false });
import Seo from "@/shared/layouts-components/seo/seo";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import dynamic from "next/dynamic";
import Image from "next/image";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {

    const components = {
        DropdownIndicator: null,
    };

    const createOption = (label: string) => ({
        label,
        value: label,
    });

    const [inputValue, setInputValue] = useState<any>("");
    const [value, setValue] = useState([
        createOption("UI/UX Design"),
        createOption("Product Design"),
        createOption("Prototyping"),
        createOption("User Research"),
        createOption("Design Systems"),
        createOption("Wireframing"),
        createOption("Agile Methodologies"),
        createOption("Collaboration"),
        createOption("Problem Solving"),
        createOption("Design Thinking"),
        createOption("Interaction Design"),
        createOption("Visual Communication")
    ]);
    const handleKeyDown = (event: { key: any; preventDefault: () => void; }) => {
        if (!inputValue) return;
        switch (event.key) {
            case "Enter":
            case "Tab":
                setValue((prev) => [...prev, createOption(inputValue)]);
                setInputValue("");
                event.preventDefault();
        }
    };

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Pages-Profile" />

            <Pageheader title="Pages" currentpage="Profile" activepage="Profile" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Card className="custom-card profile-card overflow-hidden">
                        <div className="main-profile-cover text-fixed-white">
                            <div className="p-xl-5 p-2 z-1">
                                <div className="p-4 bg-black-transparent rounded-3 border border-opacity-10 border-white">
                                    <div className="d-flex gap-3 align-items-center flex-wrap">
                                        <div>
                                            <Image fill src="../../assets/images/faces/14.jpg" alt="" className="img-fluid rounded-circle p-2 bg-success bg-opacity-25 shadow" />
                                        </div>
                                        <div>
                                            <h4 className="text-fixed-white mb-1">Ashwin Seth </h4>
                                            <p className="mb-1 op-6 fs-15"><i className="ri-briefcase-fill lh-1 align-middle me-2 d-inline-block"></i>Lead Product Designer</p>
                                            <div className="d-flex gap-3 align-items-center flex-wrap">
                                                <p className="mb-0 op-6 fs-15"><i className="ri-map-pin-line lh-1 align-middle me-2 d-inline-block"></i>settle, Usa</p>
                                                <span className="op-3">|</span>
                                                <p className="mb-0 op-6 fs-15"><i className="ri-mail-line lh-1 align-middle me-2 d-inline-block"></i>ashwinseth.mail.com</p>
                                            </div>
                                        </div>
                                        <div className="ms-auto align-self-end pb-2">
                                            <div className="d-flex flex-wrap gap-xl-5 gap-2">
                                                <div className="text-center">
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <i className="ri-user-add-line fs-11 lh-1 p-2 bg-info rounded-circle text-fixed-white"></i>
                                                        <div className="">
                                                            <p className="mb-0 op-7 fs-14">FOLLOWERS</p>
                                                        </div>
                                                    </div>
                                                    <p className="fw-semibold fs-25 mb-0">172</p>
                                                </div>
                                                <div className="d-flex gap-2 align-items-start">
                                                    <i className="ri-user-follow-line fs-11 lh-1 p-2 bg-secondary rounded-circle text-fixed-white"></i>
                                                    <div className="">
                                                        <p className="mb-0 op-7 fs-14">FOLLOWING</p>
                                                        <p className="fw-semibold fs-25 mb-0">37.1k</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex gap-2 align-items-start ms-auto">
                                                    <i className="ri-heart-line fs-11 lh-1 p-2 bg-danger rounded-circle text-fixed-white"></i>
                                                    <div className="">
                                                        <p className="mb-0 op-7 fs-14">LIKES</p>
                                                        <p className="fw-semibold fs-25 mb-0">200</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Card.Body className="position-relative p-0">
                            <div className="profile-content">
                                <Card className="custom-card rounded-0 mb-0">
                                    <Card.Body>
                                        <Tab.Container defaultActiveKey="3">
                                            <Nav as="ul" className=" nav-tabs tab-style-6 mb-3 p-0" id="myTab" role="tablist">
                                                <Nav.Item as="li" role="presentation">
                                                    <Nav.Link as="button" eventKey="1" className="w-100 text-start" id="edit-profile-tab" data-bs-toggle="tab"
                                                        data-bs-target="#edit-profile-tab-pane" type="button" role="tab"
                                                        aria-controls="edit-profile-tab-pane" aria-selected="true">Edit Profile</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li" role="presentation">
                                                    <Nav.Link as="button" eventKey="2" className="w-100 text-start" id="timeline-tab" data-bs-toggle="tab"
                                                        data-bs-target="#timeline-tab-pane" type="button" role="tab"
                                                        aria-controls="timeline-tab-pane" aria-selected="false">Timeline</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li" role="presentation">
                                                    <Nav.Link as="button" eventKey="3" className="" id="posts-tab" data-bs-toggle="tab"
                                                        data-bs-target="#posts-tab-pane" type="button" role="tab"
                                                        aria-controls="posts-tab-pane" aria-selected="false">Posts</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li" role="presentation">
                                                    <Nav.Link as="button" eventKey="4" className="w-100 text-start" id="gallery-tab" data-bs-toggle="tab"
                                                        data-bs-target="#gallery-tab-pane" type="button" role="tab"
                                                        aria-controls="gallery-tab-pane" aria-selected="false">Gallery</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li" role="presentation">
                                                    <Nav.Link as="button" eventKey="5" className="w-100 text-start" id="friends-tab" data-bs-toggle="tab"
                                                        data-bs-target="#friends-tab-pane" type="button" role="tab"
                                                        aria-controls="friends-tab-pane" aria-selected="false">Friends</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content id="profile-tabs">
                                                <Tab.Pane eventKey="1" className="tab-pane p-0 border-0" id="edit-profile-tab-pane" role="tabpanel"
                                                    aria-labelledby="edit-profile-tab" tabIndex={0}>
                                                    <ul className="list-group list-group-flush border rounded-3">
                                                        <li className="list-group-item p-3">
                                                            <span className="fw-medium fs-15 d-block mb-3">Personal Info :</span>
                                                            <Row className="gy-3 align-items-center">
                                                                <div className="col-xl-3">
                                                                    <div className="lh-1">
                                                                        <span className="fw-medium">Username :</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-9">
                                                                    <input type="text" className="form-control" placeholder="Placeholder" defaultValue="alex.mason" />
                                                                </div>
                                                                <div className="col-xl-3">
                                                                    <div className="lh-1">
                                                                        <span className="fw-medium">First Name :</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-9">
                                                                    <input type="text" className="form-control" placeholder="Placeholder" defaultValue="Alexandra" />
                                                                </div>
                                                                <div className="col-xl-3">
                                                                    <div className="lh-1">
                                                                        <span className="fw-medium">Last Name :</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-9">
                                                                    <input type="text" className="form-control" placeholder="Placeholder" defaultValue="Mason" />
                                                                </div>
                                                                <div className="col-xl-3">
                                                                    <div className="lh-1">
                                                                        <span className="fw-medium">Designation :</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-9">
                                                                    <input type="text" className="form-control" placeholder="Placeholder" defaultValue="Lead Product Designer" />
                                                                </div>
                                                                <div className="col-xl-3">
                                                                    <div className="lh-1">
                                                                        <span className="fw-medium">Years of Experience :</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-9">
                                                                    <input type="number" className="form-control" placeholder="Enter Ashwin Sethr experience" defaultValue="7" />
                                                                </div>
                                                                <div className="col-xl-3">
                                                                    <div className="lh-1">
                                                                        <span className="fw-medium">Date of Birth :</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-9">
                                                                    <input type="date" className="form-control" defaultValue="1994-10-15" />
                                                                </div>
                                                            </Row>
                                                        </li>
                                                        <li className="list-group-item p-3">
                                                            <span className="fw-medium fs-15 d-block mb-3">Social Info :</span>
                                                            <Row className="gy-3 align-items-center">
                                                                <div className="col-xl-3">
                                                                    <div className="lh-1">
                                                                        <span className="fw-medium">Github :</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-9">
                                                                    <input type="text" className="form-control" placeholder="Placeholder" defaultValue="github.com/alexmason" />
                                                                </div>
                                                                <div className="col-xl-3">
                                                                    <div className="lh-1">
                                                                        <span className="fw-medium">Twitter :</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-9">
                                                                    <input type="text" className="form-control" placeholder="Placeholder" defaultValue="twitter.com/alexdesigns" />
                                                                </div>
                                                                <div className="col-xl-3">
                                                                    <div className="lh-1">
                                                                        <span className="fw-medium">Portfolio :</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-9">
                                                                    <input type="text" className="form-control" placeholder="Placeholder" defaultValue="ashwinseth.design" />
                                                                </div>
                                                            </Row>
                                                        </li>
                                                        <li className="list-group-item p-3">
                                                            <span className="fw-medium fs-15 d-block mb-3">About Info :</span>
                                                            <Row className="gy-3 align-items-center">
                                                                <div className="col-xl-3">
                                                                    <div className="lh-1">
                                                                        <span className="fw-medium">Biographical Info :</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-9">
                                                                    <Form.Control as="textarea" className="form-control" id="text-area" rows={4} defaultValue={" Hi, I'm Ashwin Seth, a Senior Product Designer living in the vibrant city of San Francisco, USA. My passion lies in crafting seamless and visually appealing user experiences that make a real impact. With a focus on product design and UI/UX, I'm always looking for ways to innovate and enhance user interactions. Having led key design initiatives at Apple Inc., I'm driven by the challenge of pushing creative boundaries and look forward to new and exciting projects in the future."} />
                                                                </div>
                                                            </Row>
                                                        </li>
                                                        <li className="list-group-item p-3">
                                                            <span className="fw-medium fs-15 d-block mb-3">Skills :</span>
                                                            <Row className="gy-3 align-items-center">
                                                                <div className="col-xl-3">
                                                                    <div className="lh-1">
                                                                        <span className="fw-medium">Skills :</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-9">
                                                                    <CreatableSelect components={components} classNamePrefix='react-select' inputValue={inputValue} isClearable isMulti menuIsOpen={false} onChange={(newValue) => {
                                                                        if (Array.isArray(newValue)) {
                                                                            setValue(newValue);
                                                                        } else {
                                                                            setValue([]);
                                                                        }
                                                                    }} onInputChange={(newValue) => setInputValue(newValue)} onKeyDown={handleKeyDown} placeholder="Type something and press enter..." value={value} />
                                                                </div>
                                                            </Row>
                                                        </li>
                                                    </ul>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="2" className="tab-pane ps-0 pb-0" id="timeline-tab-pane" role="tabpanel"
                                                    aria-labelledby="timeline-tab" tabIndex={0}>
                                                    <ul className="list-unstyled profile-timeline">
                                                        <li>
                                                            <div>
                                                                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                    <Image height={28} width={28} src="../../assets/images/faces/4.jpg" alt="Ethan's hiking adventure" />
                                                                </span>
                                                                <div className="mb-3">
                                                                    <p className="mb-0">
                                                                        <span className="fw-semibold">Ethan </span>shared photos from his recent hiking adventure. "The view at the top was breathtaking! A much-needed escape from the city." <span className="text-primary fw-medium text-decoration-underline">#MountainViews</span>.
                                                                    </p>
                                                                    <span className="text-end ms-auto fs-11 text-muted"><i className="ri-calendar-line me-2"></i>12, Sep 2024 - 09:20AM</span>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <Link href="#!" scroll={false}>
                                                                        <span className="text-info me-1 fs-12">#OutdoorLife</span>
                                                                    </Link>
                                                                    <Link href="#!" scroll={false}>
                                                                        <span className="text-pink me-1 fs-12">#Adventure</span>
                                                                    </Link>
                                                                </div>
                                                                <p className="text-muted">
                                                                    “There's nothing like reaching the summit and soaking in the beauty of nature. Can't wait for the next adventure!”
                                                                </p>
                                                                <Image fill src="../../assets/images/media/media-48.jpg" alt="Hiking Adventure" className="img-fluid me-1 mb-1 rounded mb-1" />
                                                                <Image fill src="../../assets/images/media/media-52.jpg" alt="Mountain View" className="img-fluid me-1 mb-1rounded mb-1" />
                                                                <div className="d-flex align-items-end justify-content-between gap-2 flex-wrap mt-3">
                                                                    <div className="btn-list">
                                                                        <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-sm btn-wave waves-effect waves-light">
                                                                            <i className="ri-message-3-line"></i> 15 Comments
                                                                        </SpkButton>
                                                                        <SpkButton Buttontype="button" Buttonvariant="secondary-light" Customclass="btn-sm btn-wave waves-effect waves-light">
                                                                            <i className="ri-thumb-up-line"></i> 25 Likes
                                                                        </SpkButton>
                                                                    </div>
                                                                    <SpkButton Buttontype="button" Buttonvariant="success-light" Customclass="btn-sm btn-wave waves-effect waves-light">
                                                                        <i className="ri-share-line"></i> Share
                                                                    </SpkButton>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                    <Image height={28} width={28} src="../../assets/images/faces/6.jpg" alt="Oliver's cooking masterpiece" />
                                                                </span>
                                                                <div className="mb-3">
                                                                    <p className="mb-0">
                                                                        <span className="fw-semibold">Oliver </span>shared his latest cooking masterpiece. "Tried out a new recipe today, and it turned out amazing! Can't wait to experiment with more flavors." <span className="text-primary fw-medium text-decoration-underline">#FoodieLife</span>.
                                                                    </p>
                                                                    <span className="text-end ms-auto fs-11 text-muted"><i className="ri-calendar-line me-2"></i>21, Aug 2023 - 07:10PM</span>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <Link href="#!" scroll={false}>
                                                                        <span className="text-info me-1 fs-12">#HomeCooking</span>
                                                                    </Link>
                                                                    <Link href="#!" scroll={false} >
                                                                        <span className="text-pink me-1 fs-12">#ChefInTheMaking</span>
                                                                    </Link>
                                                                </div>
                                                                <p className="text-muted">
                                                                    “There's something special about creating delicious food from scratch. Here’s to many more culinary adventures!”
                                                                </p>
                                                                <Image fill src="../../assets/images/media/media-54.jpg" alt="Cooking Dish" className="img-fluid me-1 mb-1 rounded" />
                                                                <Image fill src="../../assets/images/media/media-55.jpg" alt="Kitchen Setup" className="img-fluid me-1 mb-1 rounded" />
                                                                <div className="d-flex align-items-end justify-content-between gap-2 flex-wrap mt-3">
                                                                    <div className="btn-list">
                                                                        <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-sm btn-wave waves-effect waves-light">
                                                                            <i className="ri-message-3-line"></i> 20 Comments
                                                                        </SpkButton>
                                                                        <SpkButton Buttontype="button" Buttonvariant="secondary-light" Customclass="btn-sm btn-wave waves-effect waves-light">
                                                                            <i className="ri-thumb-up-line"></i> 30 Likes
                                                                        </SpkButton>
                                                                    </div>
                                                                    <SpkButton Buttontype="button" Buttonvariant="success-light" Customclass="btn-sm btn-wave waves-effect waves-light">
                                                                        <i className="ri-share-line"></i> Share
                                                                    </SpkButton>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                    <Image height={28} width={28} src="../../assets/images/faces/8.jpg" alt="Ivy's art exhibition" />
                                                                </span>
                                                                <div className="mb-3">
                                                                    <p className="mb-0">
                                                                        <span className="fw-semibold">Ivy </span>shared photos from her recent art exhibition. "So thrilled to finally showcase my artwork! The support from everyone has been overwhelming." <span className="text-primary fw-medium text-decoration-underline">#ArtExhibition</span>.
                                                                    </p>
                                                                    <span className="text-end ms-auto fs-11 text-muted"><i className="ri-calendar-line me-2"></i>15, Jul 2023 - 02:45PM</span>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <Link href="#!" scroll={false}>
                                                                        <span className="text-info me-1 fs-12">#CreativeJourney</span>
                                                                    </Link>
                                                                    <Link href="#!" scroll={false}>
                                                                        <span className="text-pink me-1 fs-12">#Inspiration</span>
                                                                    </Link>
                                                                </div>
                                                                <p className="text-muted">
                                                                    “This has been such an exciting milestone for me as an artist. I’m incredibly grateful for the experience!”
                                                                </p>
                                                                <Image fill src="../../assets/images/media/media-56.jpg" alt="Art Display" className="img-fluid me-1 rounded" />
                                                                <Image fill src="../../assets/images/media/media-57.jpg" alt="Exhibition Setup" className="img-fluid me-1 rounded" />
                                                                <div className="d-flex align-items-end justify-content-between gap-2 flex-wrap mt-3">
                                                                    <div className="btn-list">
                                                                        <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-sm btn-wave waves-effect waves-light">
                                                                            <i className="ri-message-3-line"></i> 12 Comments
                                                                        </SpkButton>
                                                                        <SpkButton Buttontype="button" Buttonvariant="secondary-light" Customclass="btn-sm btn-wave waves-effect waves-light">
                                                                            <i className="ri-thumb-up-line"></i> 18 Likes
                                                                        </SpkButton>
                                                                    </div>
                                                                    <SpkButton Buttontype="button" Buttonvariant="success-light" Customclass="btn-sm btn-wave waves-effect waves-light">
                                                                        <i className="ri-share-line"></i> Share
                                                                    </SpkButton>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                    <Image height={28} width={28} src="../../assets/images/faces/5.jpg" alt="Sofia's yoga retreat" />
                                                                </span>
                                                                <div className="mb-3">
                                                                    <p className="mb-0">
                                                                        <span className="fw-semibold">Sofia </span>shared her experience from a recent yoga retreat. "The retreat was life-changing! Feeling so much more centered and calm." <span className="text-primary fw-medium text-decoration-underline">#YogaRetreat</span>.
                                                                    </p>
                                                                    <span className="text-end ms-auto fs-11 text-muted"><i className="ri-calendar-line me-2"></i>18, Jun 2023 - 07:30AM</span>
                                                                </div>
                                                                <p className="text-muted">
                                                                    “The yoga sessions, the peaceful surroundings, and the amazing group of people made this retreat unforgettable.”
                                                                    <Link href="#!" scroll={false}>
                                                                        <span className="text-pink me-1 fs-12">#Mindfulness</span>
                                                                    </Link>
                                                                </p>
                                                                <div className="d-flex align-items-end justify-content-between gap-2 flex-wrap mt-3">
                                                                    <div className="btn-list">
                                                                        <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-sm btn-wave waves-effect waves-light">
                                                                            <i className="ri-message-3-line"></i> 22 Comments
                                                                        </SpkButton>
                                                                        <SpkButton Buttontype="button" Buttonvariant="secondary-light" Customclass="btn-sm btn-wave waves-effect waves-light">
                                                                            <i className="ri-thumb-up-line"></i> 40 Likes
                                                                        </SpkButton>
                                                                    </div>
                                                                    <SpkButton Buttontype="button" Buttonvariant="success-light" Customclass="btn-sm btn-wave waves-effect waves-light">
                                                                        <i className="ri-share-line"></i> Share
                                                                    </SpkButton>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="3" className="tab-pane fade p-0 border-0" id="posts-tab-pane"
                                                    role="tabpanel" aria-labelledby="posts-tab" tabIndex={0}>
                                                    <ul className="list-group">
                                                        <li className="list-group-item bg-primary-transparent">
                                                            <Form.Control as="textarea" rows={4} className="form-control" placeholder="Write Something" aria-label="Write Something" defaultValue={""} />
                                                            <div className="d-flex gap-2 align-items-center lh-1 mt-3 flex-wrap">
                                                                <span className="avatar avatar-md avatar-rounded">
                                                                    <Image width={40} height={40} src="../../assets/images/faces/9.jpg" alt="" />
                                                                </span>
                                                                <div className="fw-semibold lh-1">Ashwin Seth</div>
                                                                <div className="ms-auto">
                                                                    <div className="btn-list">
                                                                        <SpkButton Buttontype="button" Buttonvariant="info" Customclass="btn btn-icon btn-sm rounded-circle  btn-wave">
                                                                            <i className="bi bi-camera"></i>
                                                                        </SpkButton>
                                                                        <SpkButton Buttontype="button" Buttonvariant="success" Customclass="btn btn-icon btn-sm rounded-circle  btn-wave">
                                                                            <i className="bi bi-emoji-smile"></i>
                                                                        </SpkButton>
                                                                        <SpkButton Buttontype="button" Buttonvariant="secondary" Customclass="btn btn-icon btn-sm rounded-circle  btn-wave">
                                                                            <i className="bi bi-paperclip"></i>
                                                                        </SpkButton>
                                                                        <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-sm btn-pill btn-wave btn-w-md">
                                                                            Post
                                                                        </SpkButton>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <Row className="gy-3">
                                                                <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
                                                                    <div className="rounded border">
                                                                        <div className="p-3 d-flex align-items-top flex-xl-nowrap flex-wrap">
                                                                            <div className="me-2">
                                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                                    <Image height={28} width={28} src="../../assets/images/faces/14.jpg" alt="Profile Image" />
                                                                                </span>
                                                                            </div>
                                                                            <div className="flex-fill">
                                                                                <div className="d-flex gap-2 flex-wrap">
                                                                                    <div>
                                                                                        <p className="mb-1 fw-semibold lh-1">Ashwin Seth</p>
                                                                                        <p className="fs-12 text-muted mb-0">Enjoying a great weekend at the beach with family. The view is amazing and the weather couldn't be better!</p>
                                                                                        <p className="fs-12 text-info mb-2">#WeekendVibes #BeachDay</p>
                                                                                        <p className="fs-12 text-muted fw-medium"><i className="ri-calendar-line me-2"></i>12, Oct - 02:14PM</p>
                                                                                    </div>
                                                                                    <div className="ms-auto">
                                                                                        <SpkDropdown Id="dropdownMenuButton1" Togglevariant="light" Menulabel="dropdownMenuButton1" Icon={true} IconClass="ti ti-dots-vertical" Customtoggleclass="btn-sm btn-icon btn-wave no-caret">
                                                                                            <Dropdown.Item as="li" href="#!">Delete Post</Dropdown.Item>
                                                                                            <Dropdown.Item as="li" href="#!">Edit Post</Dropdown.Item>
                                                                                            <Dropdown.Item as="li" href="#!">Hide from Timeline</Dropdown.Item>
                                                                                        </SpkDropdown>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="d-flex align-items-center justify-content-between mt-1 flex-wrap gap-2">
                                                                                    <div className="btn-list">
                                                                                        <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-sm btn-wave">
                                                                                            <i className="ri-message-line"></i> Comment
                                                                                        </SpkButton>
                                                                                        <SpkButton Buttontype="button" Buttonvariant="secondary" Customclass="btn-sm btn-wave">
                                                                                            <i className="ri-thumb-up-line"></i> Like
                                                                                        </SpkButton>
                                                                                    </div>
                                                                                    <SpkButton Buttontype="button" Buttonvariant="success" Customclass=" btn-sm btn-wave ms-auto">
                                                                                        <i className="ri-share-line"></i> Share
                                                                                    </SpkButton>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                                <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
                                                                    <div className="rounded border">
                                                                        <div className="p-3 d-flex align-items-top flex-xl-nowrap flex-wrap">
                                                                            <div className="me-2">
                                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                                    <Image height={28} width={28} src="../../assets/images/faces/7.jpg" alt="Profile Image" />
                                                                                </span>
                                                                            </div>
                                                                            <div className="flex-fill">
                                                                                <div className="d-flex gap-2 flex-wrap">
                                                                                    <div>
                                                                                        <p className="mb-1 fw-semibold lh-1">Lila Emerson</p>
                                                                                        <p className="fs-12 text-muted mb-0">Had an amazing time hiking with the family over the weekend. Nature at its best!</p>
                                                                                        <p className="fs-12 text-info mb-2">#HikingAdventures #FamilyTime</p>
                                                                                        <div className="d-flex gap-2 flex-wrap">
                                                                                            <Image fill src="../../assets/images/media/media-8.jpg" alt="Hiking Adventure" className="rounded mb-2 img-fluid me-2" />
                                                                                            <Image fill src="../../assets/images/media/media-9.jpg" alt="Hiking Adventure1" className="rounded mb-2 img-fluid me-2" />
                                                                                        </div>
                                                                                        <p className="fs-12 text-muted fw-medium"><i className="ri-calendar-line me-2"></i>10, Nov - 03:30PM</p>
                                                                                    </div>
                                                                                    <div className="ms-auto">
                                                                                        <SpkDropdown Id="dropdownMenuButton1" Togglevariant="light" Menulabel="dropdownMenuButton1" Icon={true} IconClass="ti ti-dots-vertical" Customtoggleclass="btn-sm btn-icon btn-wave no-caret">
                                                                                            <Dropdown.Item as="li" href="#!">Delete Post</Dropdown.Item>
                                                                                            <Dropdown.Item as="li" href="#!">Edit Post</Dropdown.Item>
                                                                                            <Dropdown.Item as="li" href="#!">Hide from Timeline</Dropdown.Item>
                                                                                        </SpkDropdown>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="d-flex align-items-center justify-content-between mt-1 flex-wrap gap-2">
                                                                                    <div className="btn-list">
                                                                                        <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-sm btn-wave">
                                                                                            <i className="ri-message-line"></i> Comment
                                                                                        </SpkButton>
                                                                                        <SpkButton Buttontype="button" Buttonvariant="secondary" Customclass="btn-sm btn-wave">
                                                                                            <i className="ri-thumb-up-line"></i> Like
                                                                                        </SpkButton>
                                                                                    </div>
                                                                                    <SpkButton Buttontype="button" Buttonvariant="success" Customclass=" btn-sm btn-wave ms-auto">
                                                                                        <i className="ri-share-line"></i> Share
                                                                                    </SpkButton>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                                <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
                                                                    <div className="rounded border">
                                                                        <div className="p-3 d-flex align-items-top flex-xl-nowrap flex-wrap">
                                                                            <div className="me-2">
                                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                                    <Image height={28} width={28} src="../../assets/images/faces/9.jpg" alt="Profile Image" />
                                                                                </span>
                                                                            </div>
                                                                            <div className="flex-fill">
                                                                                <div className="d-flex gap-2 flex-wrap">
                                                                                    <div className="flex-wrap">
                                                                                        <p className="mb-1 fw-semibold lh-1">Leo Finch</p>
                                                                                        <p className="fs-12 text-muted mb-0">The city looks absolutely stunning at night. Took a stroll and captured this beauty.</p>
                                                                                        <p className="fs-12 text-info mb-2">#CityNights #Photography</p>
                                                                                        <Image width={200} height={200} src="../../assets/images/media/media-55.jpg" alt="Cakes" className="rounded mb-2 img-fluid me-2 profile-img" />
                                                                                        <Image width={200} height={200} src="../../assets/images/media/media-56.jpg" alt="Icecream" className="rounded mb-2 img-fluid me-2 profile-img" />
                                                                                        <Image width={200} height={200} src="../../assets/images/media/media-57.jpg" alt="Icecream2" className="rounded mb-2 img-fluid me-2 profile-img" />
                                                                                        <p className="fs-12 text-muted fw-medium"><i className="ri-calendar-line me-2"></i>05, Oct - 09:00PM</p>
                                                                                    </div>
                                                                                    <div className="ms-auto">
                                                                                        <SpkDropdown Id="dropdownMenuButton1" Togglevariant="light" Menulabel="dropdownMenuButton1" Icon={true} IconClass="ti ti-dots-vertical" Customtoggleclass="btn-sm btn-icon btn-wave no-caret">
                                                                                            <Dropdown.Item as="li" href="#!">Delete Post</Dropdown.Item>
                                                                                            <Dropdown.Item as="li" href="#!">Edit Post</Dropdown.Item>
                                                                                            <Dropdown.Item as="li" href="#!">Hide from Timeline</Dropdown.Item>
                                                                                        </SpkDropdown>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="d-flex align-items-center justify-content-between mt-1 flex-wrap gap-2">
                                                                                    <div className="btn-list">
                                                                                        <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-sm btn-wave">
                                                                                            <i className="ri-message-line"></i> Comment
                                                                                        </SpkButton>
                                                                                        <SpkButton Buttontype="button" Buttonvariant="secondary" Customclass="btn-sm btn-wave">
                                                                                            <i className="ri-thumb-up-line"></i> Like
                                                                                        </SpkButton>
                                                                                    </div>
                                                                                    <SpkButton Buttontype="button" Buttonvariant="success" Customclass=" btn-sm btn-wave ms-auto">
                                                                                        <i className="ri-share-line"></i> Share
                                                                                    </SpkButton>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <div className="text-center mt-3">
                                                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-wave btn-sm"> Show More Posts</SpkButton>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="4" className="tab-pane p-0 border-0" id="gallery-tab-pane" role="tabpanel"
                                                    aria-labelledby="gallery-tab" tabIndex={0}>
                                                    <ProfileGallery />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="5" className="tab-pane p-0 border-0" id="friends-tab-pane" role="tabpanel"
                                                    aria-labelledby="friends-tab" tabIndex={0}>
                                                    <Row>
                                                        {Usersdata.map((user) => (
                                                            <Col key={user.id} xxl={3} xl={4} lg={6} md={6} sm={12}>
                                                                <Card className="custom-card shadow-none border">
                                                                    <Card.Body>
                                                                        <div className="text-center mb-3">
                                                                            <div className={`p-2 position-relative d-inline-block ${user.badgeColor}-transparent rounded-circle mb-2`}>
                                                                                <Image fill src={user.image} alt={user.name} className="rounded-circle" />
                                                                                <Link href="#!" scroll={false} className={`frd-profile ${user.badgeColor} text-fixed-white`}>
                                                                                    <i className={`fe fe-${user.status === "active" ? "check" : "plus"}`}></i>
                                                                                </Link>
                                                                            </div>
                                                                            <p className="fs-12 mb-1 text-muted">{user.role}</p>
                                                                            <h6 className="fw-semibold">
                                                                                <Link href="#!" scroll={false}>{user.name}</Link>
                                                                            </h6>
                                                                        </div>
                                                                        <div className="d-flex gap-2 flex-wrap justify-content-center w-100">
                                                                            <SpkButton Buttontype="button" Buttonvariant={user.buttonVariant} Customclass="btn-sm btn-wave me-0 flex-fill">
                                                                                {user.buttonText}
                                                                            </SpkButton>
                                                                            <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-sm btn-wave me-0 flex-fill">
                                                                                View Profile
                                                                            </SpkButton>
                                                                        </div>
                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                        ))}
                                                        <Col xl={12}>
                                                            <div className="text-center">
                                                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-wave">Show All</SpkButton>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <div className="list-group list-group-flush rounded-3">
                            <div className="list-group-item p-3">
                                <span className="fw-medium fs-15 d-block mb-3">About Info :</span>
                                <p className="text-muted mb-2">
                                    Hi, I'm Ashwin Seth, a Senior Product Designer living in the vibrant city of San Francisco, USA. My passion lies in crafting seamless and visually appealing user experiences that make a real impact.
                                </p>
                                <p className="text-muted mb-0">
                                    With a focus on product design and UI/UX, I'm always looking for ways to innovate and enhance user interactions. Having led key design initiatives at Apple Inc., I'm driven by the challenge of pushing creative boundaries and look forward to new and exciting projects in the future.
                                </p>
                            </div>
                            <div className="p-3 pb-1 d-flex flex-wrap justify-content-between">
                                <div className="fw-medium fs-15">
                                    Basic Info:
                                </div>
                            </div>
                            <Card.Body className="er-bottom border-block-end-dashed p-0">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item pt-2 border-0">
                                        <div><span className="fw-medium me-2">Full Name :</span><span className="text-muted">Ashwin Seth</span></div>
                                    </li>
                                    <li className="list-group-item pt-2 border-0">
                                        <div><span className="fw-medium me-2">Job Title :</span><span className="text-muted">Lead Product Designer</span></div>
                                    </li>
                                    <li className="list-group-item pt-2 border-0">
                                        <div><span className="fw-medium me-2">Years of Experience :</span><span className="text-muted">7 Years</span></div>
                                    </li>
                                    <li className="list-group-item pt-2 border-0">
                                        <div><span className="fw-medium me-2">Date of Birth :</span><span className="text-muted">October 15, 1994</span></div>
                                    </li>
                                </ul>
                            </Card.Body>
                            <div className="list-group-item p-3">
                                <span className="fw-medium fs-15 d-block mb-3">Contact Info :</span>
                                <div className="text-muted">
                                    <p className="mb-3">
                                        <i className="ri-mail-line align-middle fs-15 me-1 d-inline-block text-primary"></i>
                                        <span className="fw-medium text-default">Email : </span> alex.mason@example.com
                                    </p>
                                    <p className="mb-3">
                                        <i className="ri-building-line align-middle fs-15 me-1 d-inline-block text-success"></i>
                                        <span className="fw-medium text-default">Location : </span> San Francisco, USA
                                    </p>
                                    <p className="mb-3">
                                        <i className="ri-phone-line align-middle fs-15 me-1 d-inline-block text-info"></i>
                                        <span className="fw-medium text-default">Phone : </span> +1 (415) 987 - 6543
                                    </p>
                                    <p className="mb-0">
                                        <i className="ri-map-pin-line align-middle fs-15 me-1 d-inline-block text-secondary"></i>
                                        <span className="fw-medium text-default">Website : </span> www.ashwinseth.design
                                    </p>
                                </div>
                            </div>
                            <div className="list-group-item p-3">
                                <span className="fw-medium fs-15 d-block mb-3">Skills :</span>
                                <div>
                                    {Skillsdata.map((tag) => (
                                        <Link key={tag.id} href="#!" scroll={false}>
                                            <span className="badge bg-light text-muted m-1 me-1 border">{tag.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="list-group-item p-3">
                                <span className="fw-medium fs-15 d-block mb-3">Social Media :</span>
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <div className="d-flex align-items-center gap-3 me-2">
                                        <div>
                                            <span className="avatar avatar-md avatar-rounded bg-primary"><i className="ri-github-line fs-16"></i></span>
                                        </div>
                                        <div>
                                            <span className="d-block fw-medium text-primary">Github</span>
                                            <span className="text-muted fw-medium">github.com/alexmason</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-3 me-2">
                                        <div>
                                            <span className="avatar avatar-md avatar-rounded bg-secondary"><i className="ri-twitter-x-line fs-16"></i></span>
                                        </div>
                                        <div>
                                            <span className="d-block fw-medium text-secondary">Twitter</span>
                                            <span className="text-muted fw-medium">twitter.com/alexdesigns</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-3">
                                        <div>
                                            <span className="avatar avatar-md avatar-rounded bg-success"><i className="ri-briefcase-line fs-16"></i></span>
                                        </div>
                                        <div>
                                            <span className="d-block fw-medium text-success">Portfolio</span>
                                            <span className="text-muted fw-medium">ashwinseth.design</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-3">
                                        <div>
                                            <span className="avatar avatar-md avatar-rounded bg-info"><i className="ri-twitter-x-line fs-16"></i></span>
                                        </div>
                                        <div>
                                            <span className="d-block fw-medium text-info">Twitter</span>
                                            <span className="text-muted fw-medium">ashwinseth.design</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item p-3">
                                <span className="fw-medium fs-15 d-block mb-3">Links:</span>
                                <div className="mb-0">
                                    <p className="mb-2">
                                        <Link scroll={false} href="https://www.spruko.com/" className="text-primary"><u>https://www.spruko.com/</u></Link>
                                    </p>
                                    <p className="mb-0">
                                        <Link scroll={false} href="https://themeforest.net/user/spruko/portfolio" className="text-primary"><u>https://themeforest.net/user/spruko/portfolio</u></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Followers:
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="py-2 p-0">
                            <ul className="list-group list-group-flush">
                                {Followersdata.map((user) => (
                                    <li key={user.id} className="list-group-item border-0 py-2">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <Image height={28} width={28} src={user.imageSrc} alt={user.altText} />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="fw-medium">{user.name}</span>
                                                <p className="fs-12 text-muted mb-0">{user.role}</p>
                                            </div>
                                            <div>
                                                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-sm">
                                                    <i className="ri-add-line lh-1 align-middle"></i> Follow
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
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    );
};

export default Profile;