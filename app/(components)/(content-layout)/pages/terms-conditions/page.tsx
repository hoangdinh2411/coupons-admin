"use client"

import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

interface TermsConditionsProps {}

const TermsConditions: React.FC<TermsConditionsProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Pages-Terms & Conditions" />

            <Pageheader title="Pages" currentpage="Terms & Conditions" activepage="Terms & Conditions" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row className="justify-content-center">
                <Col xl={9}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Body className="mb-3 bg-primary p-4 d-flex terms-header">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="checklist" width="55px" height="55px">
                                <linearGradient id="a" x1="29.343" x2="29.343" y1="9.87" y2="64" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#fff" stopOpacity=".25"></stop>
                                    <stop offset="1" stopColor="#9495fa"></stop>
                                </linearGradient>
                                <path fill="url(#a)" d="M46.6 31.1c-.8-3.1-1-6.3-1.6-9.4-.6-3.1-1.8-6.3-4.2-8.4-2.7-2.3-6.5-2.8-10.1-3.1-4.2-.4-8.7-.8-12.3 1.3-4.1 2.4-6 7.2-7.1 11.8-1.1 4.6-1.7 9.5-4.3 13.4-2 3-5.2 5.3-6.3 8.8-1 3.3.2 7 2.4 9.6 2.2 2.6 5.3 4.4 8.5 5.7C24.3 66 39.4 64.9 51.3 58c2.4-1.4 4.7-3.1 6.1-5.5 1.1-2 1.4-4.4.6-6.5-.7-1.9-2.1-2.5-3.7-3.7-3.7-2.8-6.5-6.7-7.7-11.2z"></path>
                                <path fill="#fed3be" stroke="#0000db" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.421" d="M50.9 2.5v48.2c0 1.4-1.1 2.5-2.5 2.5H13.1c-1.4 0-2.5-1.1-2.5-2.5V7.3h4.8c1.4 0 2.5-1.1 2.5-2.5V0h30.5c1.4 0 2.5 1.1 2.5 2.5z"></path>
                                <path fill="#fff" d="M16.6 3.9h29.2c1.2 0 2.2 1 2.2 2.2v41.2c0 1.2-1 2.2-2.2 2.2H15.7c-1.2 0-2.2-1-2.2-2.2V6.4l3.1-2.5z"></path>
                                <path fill="#ff9d23" stroke="#0000db" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.421" d="M17.8 0v4.8c0 1.4-1.1 2.5-2.5 2.5h-4.8L17.8 0z"></path>
                                <path fill="#fff" stroke="#0000db" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.421" d="M10.6 7.3h-.1"></path>
                                <path fill="#9495fa" stroke="#0000db" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.421" d="m46.6 42.7-5.8 3.1 1.4-6.4z"></path>
                                <path fill="#ff9d23" stroke="#0000db" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.421" d="m63.4 20.6-1.7 2.2-4.4-3.4 1.7-2.2c.4-.6 1.3-.7 1.9-.3l2.3 1.7c.6.5.7 1.4.2 2z"></path>
                                <path fill="#f86c66" stroke="#0000db" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.421" d="M61.8 22.7 50.2 38.1l-1.4 1.7-2.2 2.9-4.4-3.3 2.2-2.9 1.3-1.8 11.7-15.3z"></path>
                                <path fill="none" stroke="#0000db" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.421" d="M27.8 7.9h14.9M27.8 15.4h14.9M27.8 22.9h14.9M18.8 30.4h23.9M35.7 36.3H18M18.8 45.4h17.7M18.8 15.6l1.2 1.2 2.9-2.9M18.8 23.1l1.2 1.2 2.9-2.9"></path>
                                <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
                                    <path stroke="#ff9d23" strokeWidth="1.555" d="m1.4 15.4 2.2-2.2 1.9 1.9"></path>
                                    <path stroke="#9495fa" strokeWidth="1.421" d="m59.9 38.9 2-2 1.7 1.8"></path>
                                    <path stroke="#ff4b4d" strokeWidth="1.421" d="M3.5 23.7.6 26.5M59.5 7.3l-3.1 3"></path>
                                    <path stroke="#0000db" strokeWidth="1.421" d="m18.7 57.5-3.1 3.1"></path>
                                    <path stroke="#ff9d23" strokeWidth="1.421" d="M54.7 59.9 51.6 63"></path>
                                </g>
                            </svg>
                            <div className="text-fixed-white ms-4 ps-2">
                                <h4 className="mb-2 text-fixed-white">Terms and Conditions</h4>
                                <div><span className="fw-semibold op-7">Last Updated:</span> 5 days ago</div>
                            </div>
                        </Card.Body>
                        <Row className="justify-content-center">
                            <Col xl={11} className="col-11">
                                <div className="terms-list-content rounded mt-3 mb-2">
                                    <Card.Body className="p-4">
                                        <h6 className="fw-semibold mb-3 highlighted-title">1. Terms of Use</h6>
                                        <p>By accessing and using this admin template, you agree to comply with these Terms of Use. The terms apply to all users who access, browse, or utilize any part of the template. If you disagree with any of the terms, you must discontinue using the template immediately.</p>
                                        <ul className="terms-list">
                                            <li>
                                                <div className="fs-14 fw-medium">Usage Rights:</div>
                                                <p>You are granted a limited, non-exclusive right to use the admin template for personal or internal business purposes. You are not allowed to:</p>
                                                <ul className="mb-3">
                                                    <li>Sell, sublicense, or redistribute the template.</li>
                                                    <li>Modify or adapt the template for purposes other than your own use.</li>
                                                    <li>Use the template for unlawful purposes or activities.</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="fs-14 fw-medium">Updates and Changes:</div>
                                                <p>We reserve the right to modify, update, or discontinue any part of the template at any time without prior notice. Your continued use of the template after changes signifies your acceptance of those changes.</p>
                                            </li>
                                            <li>
                                                <div className="fs-14 fw-medium">User Content:</div>
                                                <p>You may not upload, share, or post any content within the template that:</p>
                                                <ul className="mb-3">
                                                    <li>Violates any law, regulation, or third-party rights.</li>
                                                    <li>Contains malware, viruses, or any harmful software.</li>
                                                </ul>
                                            </li>
                                        </ul>

                                        <h6 className="fw-semibold mb-3 highlighted-title">2. Privacy Policy</h6>
                                        <p>We value your privacy and are committed to protecting your personal data. This section outlines how we collect, use, and safeguard your information.</p>
                                        <ul className="terms-list mb-3">
                                            <li>
                                                <div className="fs-14 fw-medium">Data Collection:</div>
                                                <p>You may not upload, share, or post any content within the template that:</p>
                                                <ul className="mb-3">
                                                    <li>We may collect personal information such as your name, email address, and usage data when you interact with the template.</li>
                                                    <li>Non-personal data such as browser type, IP address, and activity logs may be collected for analytics and to improve user experience.</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="fs-14 fw-medium">Use of Information:</div>
                                                <ul className="mb-3">
                                                    <li>The collected information is used solely to improve the performance and functionality of the admin template, provide customer support, and communicate with users when necessary.</li>
                                                    <li>We do not sell, rent, or share your personal information with third parties unless required by law.</li>
                                                </ul>
                                            </li>
                                        </ul>

                                        <h6 className="fw-semibold mb-3 highlighted-title">3. Cookies</h6>
                                        <p>Cookies are small text files stored on your device that help us improve your experience with the admin template.</p>
                                        <ul className="terms-list mb-3">
                                            <li>
                                                <div className="fs-14 fw-medium">Cookie Usage:</div>
                                                <ul className="mb-3">
                                                    <li>We use cookies to remember your preferences, customize content, and gather analytical data to optimize the template's performance.</li>
                                                    <li>Cookies help track the usage of features within the template, such as user login sessions and analytics.</li>
                                                </ul>
                                            </li>
                                        </ul>

                                        <h6 className="fw-semibold mb-3 highlighted-title">4. License</h6>
                                        <p>The admin template is provided under a license that defines how you can use the product. By using the template, you agree to adhere to the terms of this license.</p>
                                        <ul className="terms-list mb-3">
                                            <li>
                                                <div className="fs-14 fw-medium">License Grant:</div>
                                                <ul className="mb-3">
                                                    <li>You are granted a limited, non-exclusive, non-transferable license to use the admin template for internal use.</li>
                                                    <li>The license allows you to customize the template to fit your business or personal needs, but you are not allowed to redistribute or resell the template or its derivatives without explicit permission.</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="fs-14 fw-medium">Permitted Uses:</div>
                                                <ul className="mb-3">
                                                    <li>You may use the template to build and manage internal systems, dashboards, or applications for your company or personal use.</li>
                                                    <li>You can modify the template to suit your project needs but must not remove or alter any copyright or licensing notices.</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="fs-14 fw-medium">Restrictions:</div>
                                                <ul className="mb-3">
                                                    <li>You cannot sell, sublicense, or lease the template to third parties.</li>
                                                    <li>You cannot claim ownership of the template or use it for illegal purposes.</li>
                                                    <li>Redistribution of the template as part of another software, even in modified form, is prohibited.</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="fs-14 fw-medium">Termination of License:</div>
                                                <ul className="mb-3">
                                                    <li>We reserve the right to revoke the license if you violate any of the terms, misuse the template, or engage in unauthorized distribution.</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </Card.Body>

                                </div>
                                <div className="card-footer border-top-0 d-flex justify-content-between gap-2 flex-wrap pb-4 mb-2">
                                    <div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="acceptance1" />
                                            <label className="form-check-label text-muted fw-normal" htmlFor="acceptance1">
                                                I have read and accept the <span className="text-default fw-medium">Terms of Service</span>
                                            </label>
                                        </div>
                                        <div className="form-check mb-0">
                                            <input className="form-check-input" type="checkbox" value="" id="acceptance2" />
                                            <label className="form-check-label text-muted fw-normal" htmlFor="acceptance2">
                                                I acknowledge and accept the <span className="text-default fw-medium">Privacy Policy</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2 flex-wrap align-items-center justify-content-end ms-auto">
                                        <div className="btn btn-success btn-w-lg">
                                            I Decline
                                        </div>
                                        <div className="btn btn-primary btn-w-lg">
                                            I Accept
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default TermsConditions;