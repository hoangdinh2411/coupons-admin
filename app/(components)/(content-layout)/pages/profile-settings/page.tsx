"use client"

import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Nav, Row, Tab } from "react-bootstrap";

interface ProfileSettingsProps {}

const ProfileSettings: React.FC<ProfileSettingsProps> = () => {

    interface Languageoptions {
        value: string;
        label: string;
    }
    const Languagedata: Languageoptions[] = [
        { value: 'Arabic', label: 'Arabic' },
        { value: 'Us English', label: 'Us English' },
        { value: 'French', label: 'French' },
        { value: 'German', label: 'German' },
        { value: 'Spanish', label: 'Spanish' },

    ];

    const [toggles, setToggles] = useState<{ [key: string]: string }>({});

    const toggle = (toggleKey: string) => {
        setToggles((prevState) => ({
            ...prevState,
            [toggleKey]: prevState[toggleKey] === 'on' ? 'off' : 'on',
        }));
    };

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Pages-Profile Settings" />

            <Pageheader title="Pages" currentpage="Profile Settings" activepage="Profile Settings" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row className="gap-3 justify-content-center">
                <Col xl={9}>
                    <Card className="custom-card">
                        <Tab.Container defaultActiveKey="1">
                            <Nav as="ul" className=" nav-tabs tab-style-8 scaleX rounded m-3 mb-0 profile-settings-tab gap-3" id="myTab4" role="tablist">
                                <Nav.Item as="li" className="me-1" role="presentation">
                                    <Nav.Link as="a" href="#!" eventKey="1" className="fs-16 fw-medium" id="edit-profile" data-bs-toggle="tab" data-bs-target="#edit-profile-pane" role="tab" aria-controls="edit-profile-pane" aria-selected="true">Edit Profile</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="me-1" role="presentation">
                                    <Nav.Link as="a" href="#!" eventKey="2" className=" fs-16 fw-medium" id="Other-settings-tab" data-bs-toggle="tab" data-bs-target="#Other-settings-tab-pane" role="tab" aria-controls="Other-settings-tab-pane" aria-selected="false">Other Settings</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className="p-3 border-bottom border-top border-block-end-dashed">
                                <Tab.Pane eventKey="1" className="tab-pane pt-3  overflow-hidden p-0 border-0" id="edit-profile-pane" role="tabpanel" aria-labelledby="edit-profile" tabIndex={0}>
                                    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1 p-2 bg-primary-transparent rounded">
                                        <div className="fw-semibold d-block fs-17">Edit Profile </div>
                                        <div className="btn btn-primary btn-sm"><i className="ri-loop-left-line lh-1 me-2"></i>Restore Changes</div>
                                    </div>
                                    <Row className="mb-3">
                                        <Col md={3}>
                                            <label className="form-label">Profile Picture :</label>
                                        </Col>
                                        <Col md={9}>
                                            <div className="d-flex align-items-center flex-wrap gap-3 p-2 border border-dashed bg-light rounded-3">
                                                <div>
                                                    <span className="avatar avatar-xxl avatar-rounded">
                                                        <Image width={80} height={80} src="../../assets/images/faces/9.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="btn-list mb-1">
                                                        <SpkButton Buttontype="button" Buttonvariant="info" Customclass="btn-sm rounded-pill btn-wave"><i className="ri-upload-2-line me-1"></i>Change Image </SpkButton>
                                                        <SpkButton Buttontype="button" Buttonvariant="danger-light" Customclass="btn-sm rounded-pill btn-wave"><i className="ri-delete-bin-line me-1"></i>Remove </SpkButton>
                                                    </div>
                                                    <span className="d-block fs-12 text-muted">Supported formats: JPEG, PNG, GIF. Recommended size: 200x200 pixels. Maximum file size: 5MB</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col md={3}>
                                            <label htmlFor="profile-user-name" className="form-label">User Name :</label>
                                        </Col>
                                        <Col md={9}>
                                            <input type="text" className="form-control" id="profile-user-name" defaultValue="" placeholder="Enter Name" />
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col md={3}>
                                            <label htmlFor="profile-email" className="form-label">Email :</label>
                                        </Col>
                                        <Col md={9}>
                                            <input type="email" className="form-control" id="profile-email" defaultValue="" placeholder="Enter Email" />
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col md={3}>
                                            <label htmlFor="profile-designation" className="form-label">Designation :</label>
                                        </Col>
                                        <Col md={9}>
                                            <input type="text" className="form-control" id="profile-designation" defaultValue="" placeholder="Enter Designation" />
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col md={3}>
                                            <label htmlFor="profile-language" className="form-label">Language :</label>
                                        </Col>
                                        <Col md={9}>
                                            <SpkSelect searchable name="colors" option={Languagedata} menuplacement='auto' classNameprefix="Select2" defaultvalue={[Languagedata[3]]} />
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col md={3}>
                                            <label htmlFor="profile-phn-no" className="form-label">Phone No :</label>
                                        </Col>
                                        <Col md={9}>
                                            <input type="text" className="form-control" id="profile-phn-no" defaultValue="" placeholder="Enter Number" />
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col md={3}>
                                            <label htmlFor="website" className="form-label">Website :</label>
                                        </Col>
                                        <Col md={9}>
                                            <input type="url" className="form-control bg-light" id="website" placeholder="Enter your website URL" defaultValue="https://www.website.com" />
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col md={3}>
                                            <label htmlFor="profile-address" className="form-label">Address :</label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Control as="textarea" className="form-control" id="profile-address" rows={3} placeholder="Address" defaultValue={""} />
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2" className="tab-pane pt-3 overflow-hidden p-0 border-0" id="Other-settings-tab-pane" role="tabpanel" aria-labelledby="Other-settings-tab" tabIndex={0}>
                                    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1 p-2 bg-primary-transparent rounded">
                                        <div className="fw-semibold d-block fs-17">Notifications Settings </div>
                                        <div className="btn btn-primary btn-sm"><i className="ri-loop-left-line lh-1 me-2"></i>Restore Changes</div>
                                    </div>
                                    <Row className="gx-5 gy-3">
                                        <Col xl={12}>
                                            <div className="d-flex align-items-top justify-content-between px-3">
                                                <div className="mail-notification-settings">
                                                    <p className="fs-14 mb-1 fw-medium">Enable Push Alerts</p>
                                                    <p className="fs-12 mb-0 text-muted">Stay updated with real-time notifications on your mobile or desktop.</p>
                                                </div>
                                                <div className={`toggle mb-0 float-sm-end  toggle-success ${toggles['success'] === 'on' || !toggles['success'] ? 'on' : ''}`} onClick={() => toggle('success')} >
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-top justify-content-between px-3 mt-3">
                                                <div className="mail-notification-settings">
                                                    <p className="fs-14 mb-1 fw-medium">Receive Email Alerts</p>
                                                    <p className="fs-12 mb-0 text-muted">Get important updates sent directly to your email.</p>
                                                </div>
                                                <div className={`toggle mb-0 float-sm-end  toggle-success ${toggles['receive'] === "on" ? 'on' : ''}`} onClick={() => toggle('receive')} >
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-top justify-content-between px-3 mt-3">
                                                <div className="mail-notification-settings">
                                                    <p className="fs-14 mb-1 fw-medium">Activate SMS Alerts</p>
                                                    <p className="fs-12 mb-0 text-muted">Receive text message alerts on your mobile phone.</p>
                                                </div>
                                                <div className={`toggle mb-0 float-sm-end  toggle-success ${toggles['activate'] === 'on' || !toggles['activate'] ? 'on' : ''}`} onClick={() => toggle('activate')} >
                                                    <span></span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1 p-2 bg-primary-transparent rounded mt-4">
                                        <div className="fw-semibold d-block fs-17">Security Settings </div>
                                        <div className="btn btn-primary btn-sm"><i className="ri-loop-left-line lh-1 me-2"></i>Restore Changes</div>
                                    </div>
                                    <div className="d-sm-flex d-block align-items-top justify-content-between px-3">
                                        <div className="w-50">
                                            <p className="fs-14 mb-1 fw-medium">Profile Verification</p>
                                            <p className="fs-12 mb-0 text-muted">Choose how you'd like to verify your profile information for added security and identity confirmation.</p>
                                        </div>
                                        <div className="d-flex gap-4">
                                            <div className="form-check">
                                                <input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="email-notifications01" defaultChecked />
                                                <label className="form-check-label" htmlFor="email-notifications01">
                                                    Email
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="sms-notifications01" />
                                                <label className="form-check-label" htmlFor="sms-notifications01">
                                                    SMS
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="phone-notifications" />
                                                <label className="form-check-label" htmlFor="phone-notifications">
                                                    Phone Call
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-sm-flex d-block align-items-top justify-content-between px-3 mt-3">
                                        <div className="w-50">
                                            <p className="fs-14 mb-1 fw-medium">Two-Factor Authentication</p>
                                            <p className="fs-12 mb-0 text-muted">Enable two-factor authentication to protect your account from unauthorized access, even if your password is compromised.</p>
                                        </div>
                                        <Link href="#!" scroll={false} className="link-info text-decoration-underline fw-medium">Set Up Two-Factor Authentication</Link>
                                    </div>

                                    <div className="d-sm-flex d-block align-items-top justify-content-between px-3 mt-3">
                                        <div className="w-50">
                                            <p className="fs-14 mb-1 fw-medium">Password Protection</p>
                                            <p className="fs-12 mb-0 text-muted">Enable additional verification when changing account settings to ensure the rightful account owner is making modifications.</p>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="personal-details" />
                                            <label className="form-check-label" htmlFor="personal-details">
                                                Require Identity Confirmation
                                            </label>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                        <Card.Footer className="border-top-0">
                            <div className="p-2 bg-light d-flex gap-2 justify-content-between rounded">
                                <SpkButton Buttontype="button" Buttonvariant="danger-light" Customclass="btn-wave">Deactivate Account</SpkButton>
                                <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn-wave">Save Changes</SpkButton>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default ProfileSettings;