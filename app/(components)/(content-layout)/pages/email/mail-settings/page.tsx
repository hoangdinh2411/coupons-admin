"use client"

import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment, useState } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";

interface MailSettingsProps {}

const MailSettings: React.FC<MailSettingsProps> = () => {

    const [toggles, setToggles] = useState<{ [key: string]: string }>({});

    const toggle = (toggleKey: string) => {
        setToggles((prevState) => ({
            ...prevState,
            [toggleKey]: prevState[toggleKey] === 'on' ? 'off' : 'on',
        }));
    };

    const DefaultOptions = [
        { value: 'Default', label: 'Default' },
        { value: 'Dark Mode', label: 'Dark Mode' },
        { value: 'Light Mode', label: 'Light Mode' },
    ]
    const Security = [
        { value: 'Select a question...', label: 'Select a question...' },
        { value: 'What is your mothers maiden name?', label: 'What is your mothers maiden name?' },
        { value: 'What was the name of your first pet?', label: 'What was the name of your first pet?' },
        { value: 'What city were you born in?', label: 'What city were you born in?' },
    ]
    const Securitydata = [
        { value: 'Select a question...', label: 'Select a question...' },
        { value: 'What is your favorite book?', label: 'What is your favorite book?' },
        { value: 'What was your childhood nickname?', label: 'What was your childhood nickname?' },
        { value: 'What is the name of your best friend?', label: 'What is the name of your best friend?' },
    ]

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Pages-Mail Settings" />

            <Pageheader title="Pages" currentpage="Mail Settings" activepage="Mail Settings" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row className="mb-5 justify-content-center">
                <Col className="col-xl-9">
                    <Tab.Container defaultActiveKey="1">
                        <Card className="custom-card">
                            <Card.Body className="pb-0">
                                <Nav as="ul" className="nav nav-tabs tab-style-8 scaleX gap-xl-5 gap-2" role="tablist">
                                    <Nav.Item as="li" className="me-0">
                                        <Nav.Link as="a" eventKey="1" className=" pb-3 fs-14 fw-medium" data-bs-toggle="tab" role="tab" aria-current="page"
                                            href="#general-settings" aria-selected="true">
                                            <i className="ti ti-mail me-2 d-inline-block align-middle fs-16 lh-1 text-success"></i>General Settings
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="me-0">
                                        <Nav.Link as="a" eventKey="2" className=" pb-3 fs-14 fw-medium" data-bs-toggle="tab" role="tab" aria-current="page"
                                            href="#security" aria-selected="true">
                                            <i className="ti ti-lock me-2 d-inline-block align-middle fs-16 lh-1 text-success"></i>Security Settings
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="me-0">
                                        <Nav.Link as="a" eventKey="3" className=" pb-3 fs-14 fw-medium" data-bs-toggle="tab" role="tab" aria-current="page"
                                            href="#account-settings" aria-selected="true">
                                            <i className="ti ti-user-shield me-2 d-inline-block align-middle fs-16 lh-1 text-success"></i>Account Settings
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <Tab.Content>
                                    <Tab.Pane eventKey="1" className="tab-pane" id="general-settings" role="tabpanel">
                                        <div className="main-mail-settings">
                                            <div className="setting-item mb-4">
                                                <div className="d-flex pe-xl-3 align-items-center flex-wrap gap-2">
                                                    <div>
                                                        <h3 className="fs-16 fw-semibold">Notification Preferences</h3>
                                                        <p className="text-muted mb-0">Choose how you would like to receive notifications for new messages.</p>
                                                    </div>
                                                    <div className="form-check ms-auto">
                                                        <input className="form-check-input" type="checkbox" id="emailNotifications" defaultChecked />
                                                        <label className="form-check-label" htmlFor="emailNotifications">Email Notifications</label>
                                                    </div>
                                                    <div className="form-check ms-auto">
                                                        <input className="form-check-input" type="checkbox" id="smsNotifications" />
                                                        <label className="form-check-label" htmlFor="smsNotifications">SMS Notifications</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="setting-item mb-4">
                                                <h3 className="fs-16 fw-semibold">Email Signature</h3>
                                                <p className="text-muted">Create a custom email signature that will be added to the end of your messages.</p>
                                                <textarea className="form-control form-control-light border" rows={4} placeholder="Enter your email signature here..."></textarea>
                                            </div>

                                            <div className="setting-item mb-4">
                                                <div className="d-flex pe-xl-3 align-items-center flex-wrap gap-2">
                                                    <div>
                                                        <h3 className="fs-16 fw-semibold">Spam Filter Settings</h3>
                                                        <p className="text-muted mb-0">Manage your spam filter preferences to control what gets flagged as spam.</p>
                                                    </div>
                                                    <div className="form-check form-switch ms-auto">
                                                        <input className="form-check-input" type="checkbox" id="enableSpamFilter" defaultChecked />
                                                        <label className="form-check-label" htmlFor="enableSpamFilter">Enable Spam Filter</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="setting-item mb-4">
                                                <div className="d-flex pe-3 mb-2 flex-wrap">
                                                    <div>
                                                        <h3 className="fs-16 fw-semibold">Auto-Reply Settings</h3>
                                                        <p className="text-muted mb-0">Set up an automatic reply for when you are unavailable.</p>
                                                    </div>
                                                    <div className="form-check form-switch ms-auto">
                                                        <input className="form-check-input" type="checkbox" id="enableAutoReply" />
                                                        <label className="form-check-label" htmlFor="enableAutoReply">Enable Auto-Reply</label>
                                                    </div>
                                                </div>
                                                <textarea className="form-control form-control-light border mt-2" rows={4} placeholder="Enter your auto-reply message..."></textarea>
                                            </div>

                                            <div className="setting-item mb-4">
                                                <h3 className="fs-16 fw-semibold">Theme Settings</h3>
                                                <p className="text-muted">Choose a theme for your email interface.</p>
                                                <SpkSelect name="state" option={DefaultOptions} mainClass="basic-multi-select " menuplacement='auto' classNameprefix="Select2" defaultvalue={[DefaultOptions[0]]} />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="2" className="tab-pane" id="security" role="tabpanel">

                                        <div className="main-security-settings">
                                            <div className="setting-item mb-4">
                                                <div className="d-flex pe-xl-3 align-items-center flex-wrap gap-2">
                                                    <div>
                                                        <h3 className="fs-16 fw-semibold">Two-Factor Authentication</h3>
                                                        <p className="text-muted mb-0">Add an extra layer of security to your account by enabling two-factor authentication (2FA).</p>
                                                        <p className="text-muted mt-2 mb-0">Once enabled, you will receive a verification code via SMS or an authenticator app every time you log in.</p>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap ms-auto gap-3 justify-content-end text-end">
                                                        <div className={`toggle mb-0 float-sm-end  toggle-success ${toggles['success'] === 'on' || !toggles['success'] ? 'on' : ''}`} onClick={() => toggle('success')} >
                                                            <span></span>
                                                        </div>
                                                        <label className="form-check-label" htmlFor="enableSpamFilter">Enable Two-Factor Authentication</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="setting-item mb-4">
                                                <div className="d-flex pe-xl-3 align-items-center flex-wrap gap-2">
                                                    <div>
                                                        <h3 className="fs-16 fw-semibold">Password Management</h3>
                                                        <p className="text-muted mb-0">Ensure your password is strong and secure. Consider changing your password regularly.</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <button className="btn btn-secondary btn-sm btn-w-lg">Change Password</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="setting-item mb-4">
                                                <h3 className="fs-16 fw-semibold">Security Questions</h3>
                                                <p className="text-muted">Set security questions to help verify your identity if you forget your password.</p>
                                                <div className="mb-2 ps-3">
                                                    <label htmlFor="securityQuestion1" className="form-label">Security Question 1</label>
                                                    <SpkSelect name="state" option={Security} mainClass="basic-multi-select " searchable menuplacement='auto' classNameprefix="Select2" defaultvalue={[Security[0]]} />
                                                    <input type="text" className="form-control mt-3" placeholder="Answer" />
                                                </div>
                                                <div className="mb-2 ps-3">
                                                    <label htmlFor="securityQuestion2" className="form-label">Security Question 2</label>
                                                    <SpkSelect name="state" option={Securitydata} mainClass="basic-multi-select " searchable menuplacement='auto' classNameprefix="Select2" defaultvalue={[Securitydata[0]]} />
                                                    <input type="text" className="form-control mt-3" placeholder="Answer" />
                                                </div>
                                            </div>
                                            <div className="setting-item mb-4">
                                                <div className="d-flex pe-xl-3 align-items-center flex-wrap gap-2">
                                                    <div>
                                                        <h3 className="fs-16 fw-semibold">Recent Activity</h3>
                                                        <p className="text-muted mb-0">Review your recent login activity to ensure there are no unauthorized access attempts.</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <button className="btn btn-primary-light ">View Recent Activity</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="setting-item">
                                                <div className="d-flex pe-xl-3 align-items-center flex-wrap gap-2">
                                                    <div>
                                                        <h3 className="fs-16 fw-semibold">Logout from All Devices</h3>
                                                        <p className="text-muted mb-0">If you suspect any unauthorized access, you can log out from all devices.</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <button className="btn btn-danger-light ">Logout from All Devices</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="3" className="tab-pane" id="account-settings" role="tabpanel">
                                        <div className="main-account-settings">
                                            <div className="setting-item mb-4">
                                                <h3 className="fs-16 fw-semibold">Personal Information</h3>
                                                <p className="text-muted">Update your personal information to ensure accurate communication.</p>
                                                <form>
                                                    <div className="mb-2">
                                                        <label htmlFor="fullName" className="form-label">Full Name</label>
                                                        <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <label htmlFor="email" className="form-label">Email Address</label>
                                                        <input type="email" className="form-control" id="email" placeholder="Enter your email address" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <label htmlFor="phone" className="form-label">Phone Number</label>
                                                        <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                                                    </div>
                                                </form>
                                            </div>

                                            <div className="setting-item mb-4">
                                                <h3 className="fs-16 fw-semibold">Change Password</h3>
                                                <p className="text-muted">Update your password to maintain account security.</p>
                                                <form>
                                                    <div className="mb-2">
                                                        <label htmlFor="currentPassword" className="form-label">Current Password</label>
                                                        <input type="password" className="form-control" id="currentPassword" placeholder="Enter your current password" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <label htmlFor="newPassword" className="form-label">New Password</label>
                                                        <input type="password" className="form-control" id="newPassword" placeholder="Enter your new password" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                                                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your new password" />
                                                    </div>
                                                </form>
                                            </div>

                                            <div className="setting-item mb-4">
                                                <div className="d-flex pe-xl-3 align-items-center flex-wrap gap-2">
                                                    <div>
                                                        <h3 className="fs-16 fw-semibold">Account Preferences</h3>
                                                        <p className="text-muted mb-0">Customize your account settings according to your preferences.</p>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap ms-auto gap-3 justify-content-end text-end">
                                                        <div className={`toggle mb-0 float-sm-end  toggle-success ${toggles['account'] === 'on' || !toggles['account'] ? 'on' : ''}`} onClick={() => toggle('account')} >
                                                            <span></span>
                                                        </div>
                                                        <label className="form-check-label">Receive Promotional Emails</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="setting-item">
                                                <div className="d-flex pe-xl-3 align-items-center flex-wrap gap-2">
                                                    <div>
                                                        <h3 className="fs-16 fw-semibold">Delete Account</h3>
                                                        <p className="text-muted mb-0">If you wish to delete your account, please be aware that this action is irreversible.</p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <button className="btn btn-danger-light btn-sm btn-w-lg">Delete My Account</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                            <div className="p-3 border-top-0 d-flex justify-content-between gap-2 flex-wrap align-items-center bg-light m-3 rounded">
                                <div>
                                    <h3 className="fs-16 fw-semibold">Save Changes</h3>
                                    <p className="text-muted mb-0">Once you have made your changes, click the button below to save.</p>
                                </div>
                                <button className="btn btn-primary">Save Settings</button>
                            </div>
                        </Card>
                    </Tab.Container>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>

    );
};

export default MailSettings;