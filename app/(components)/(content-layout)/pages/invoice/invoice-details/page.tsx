"use client"

import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import React, { Fragment } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

interface InvoiceDetailsProps {}

const InvoiceDetails: React.FC<InvoiceDetailsProps> = () => {

    const print = () => {
        window.print();
    };

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Pages-Invoice Details" />

            <Pageheader title="Pages" currentpage="Invoice Details" activepage="Invoice Details" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row >
                <Col xl={9}>
                    <Card className="custom-card">
                        <Card.Header className="d-md-flex d-block">
                            <div className="ms-sm-2 ms-0 mt-sm-0 mt-2">
                                <h6 className="mb-1"><span className="fs-13">Invoice No :</span> <span className="text-success">#INV564321</span></h6>
                                <p className="fw-medium mb-0 fs-12">Issued Date : <span className="text-muted">15, April 2024</span></p>
                            </div>
                            <div className="ms-auto text-end">
                                <div className="avatar avatar-md mb-2 p-1">
                                    <Image fill src="../../../assets/images/brand-logos/toggle-logo.png" alt="Company Logo" />
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="p-4 bg-primary rounded mb-3 text-fixed-white">
                                <div className="d-flex justify-content-between gap-2 flex-wrap">
                                    <div>
                                        <h2 className="fw-semibold text-fixed-white">INVOICE <span className="op-7 fw-semibold">#1570</span></h2>
                                        <p className="fw-medium mb-1">Due Date : <span className="op-8 ms-1">15, July 2024</span></p>
                                        <p className="fw-medium mb-0">Invoice Date : <span className="op-8 ms-1">1, July 2024</span></p>
                                    </div>
                                    <div className="text-end">
                                        <p className="fw-medium fs-16 op-8 mb-4">Total Amount (Outstanding Amount in USD)</p>
                                        <h3 className="fw-semibold text-fixed-white align-end mb-0 mt-auto pt-3">$5487.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border bg-light rounded">
                                <div className="d-flex justify-content-between gap-5 flex-wrap">
                                    <Row className="row flex-fill">
                                        <Col xl={3}>
                                            <p className="mb-2 fw-semibold">
                                                Billing To:
                                            </p>
                                        </Col>
                                        <div className="col-xl-8">
                                            <p className="fw-bold mb-1">
                                                NEXTECH SOLUTIONS
                                            </p>
                                            <p className="mb-1 text-muted">
                                                1234, Elm Street, Suite 567
                                            </p>
                                            <p className="mb-1 text-muted">
                                                San Francisco, CA, USA, 94103
                                            </p>
                                            <p className="mb-1 text-muted">
                                                nextechsolutions@support.com
                                            </p>
                                            <p className="mb-1 text-muted">
                                                (415) 789-1234
                                            </p>
                                            <p className="text-muted mb-0">For more information, check <a href="javascript:void(0);" className="text-primary fw-medium"><u>Tax Details</u></a>.</p>
                                        </div>
                                    </Row>
                                    <Row className="row flex-fill text-end gx-0">
                                        <div className="col-xl-5">
                                            <p className="mb-2 fw-semibold">
                                                Billing From:
                                            </p>
                                        </div>
                                        <div className="col-xl-7">
                                            <p className="fw-bold mb-1">
                                                Priya Verma
                                            </p>
                                            <p className="text-muted mb-1">
                                                A-202, Zenith Towers
                                            </p>
                                            <p className="text-muted mb-1">
                                                Mumbai, India, 400001
                                            </p>
                                            <p className="text-muted mb-1">
                                                priya.verma@zenithmail.com
                                            </p>
                                            <p className="text-muted mb-0">
                                                +91 987-654-3210
                                            </p>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                            <Row className=" gy-3">
                                <Col xl={12} >
                                    <div className="table-responsive">
                                        <SpkTables tableClass="nowrap text-nowrap border mt-4 table-striped" header={[{ title: 'BRAND NAME' }, { title: 'DESCRIPTION' }, { title: 'QUANTITY' }, { title: 'PRICE PER UNIT' }, { title: 'TOTAL' }]} >
                                            <tr>
                                                <td>
                                                    <div className="fw-medium">
                                                        Stellar Audio (Earbuds)
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-muted">
                                                        Wireless in-ear design, noise isolation, long battery life.
                                                    </div>
                                                </td>
                                                <td className="product-quantity-container">
                                                    2
                                                </td>
                                                <td>
                                                    $120
                                                </td>
                                                <td>
                                                    $240
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="fw-medium">
                                                        Titan Wear (Smartwatch)
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-muted">
                                                        Heart rate monitoring, GPS tracking, water-resistant.
                                                    </div>
                                                </td>
                                                <td className="product-quantity-container">
                                                    1
                                                </td>
                                                <td>
                                                    $450
                                                </td>
                                                <td>
                                                    $450
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="fw-medium">
                                                        Luxe & Co (Handbag)
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-muted">
                                                        Premium leather, adjustable straps, multiple compartments.
                                                    </div>
                                                </td>
                                                <td className="product-quantity-container">
                                                    2
                                                </td>
                                                <td>
                                                    $350
                                                </td>
                                                <td>
                                                    $700
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="fw-medium">
                                                        Glow Essentials (Cosmetics Kit)
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-muted">
                                                        Complete makeup kit with daily essentials.
                                                    </div>
                                                </td>
                                                <td className="product-quantity-container">
                                                    1
                                                </td>
                                                <td>
                                                    $95
                                                </td>
                                                <td>
                                                    $95
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="fw-medium">
                                                        Breeze Wear (Jacket)
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-muted">
                                                        Windproof and waterproof material, lightweight.
                                                    </div>
                                                </td>
                                                <td className="product-quantity-container">
                                                    1
                                                </td>
                                                <td>
                                                    $180
                                                </td>
                                                <td>
                                                    $180
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={3}></td>
                                                <td colSpan={2}>
                                                    <table className="table table-sm text-nowrap mb-0 table-borderless">
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">
                                                                    <p className="mb-0">Sub Total :</p>
                                                                </th>
                                                                <td>
                                                                    <p className="mb-0 fw-medium fs-15">$1,665</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <p className="mb-0">Avail Discount :</p>
                                                                </th>
                                                                <td>
                                                                    <p className="mb-0 fw-medium fs-15">$25.00</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <p className="mb-0">Coupon Discount <span className="text-success">(5%)</span> :</p>
                                                                </th>
                                                                <td>
                                                                    <p className="mb-0 fw-medium fs-15">$83.25</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <p className="mb-0">Vat <span className="text-danger">(10%)</span> :</p>
                                                                </th>
                                                                <td>
                                                                    <p className="mb-0 fw-medium fs-15">$158.17</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <p className="mb-0">Due Till Date :</p>
                                                                </th>
                                                                <td>
                                                                    <p className="mb-0 fw-medium fs-15">$10.00</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <p className="mb-0 fs-14">Total :</p>
                                                                </th>
                                                                <td>
                                                                    <p className="mb-0 fw-medium fs-16 text-success">$1,824.92</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </SpkTables>
                                    </div>
                                </Col>
                                <Col xl={12} >
                                    <div>
                                        <label htmlFor="invoice-note" className="form-label">Note:</label>
                                        <Form.Control as="textarea" className="form-control form-control-light" id="invoice-note" rows={3} defaultValue="Please ensure that the invoice amount is paid by the due date to avoid late fees or service disruptions. If you have any questions regarding the invoice or need assistance, feel free to contact our billing support. For more details on payment options and terms, visit the official website."/>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="text-end d-flex gap-2 flex-wrap justify-content-end">
                            <SpkButton onClickfunc={print} Buttontype="button" Buttonvariant="secondary" Customclass="me-1">
                                Print<i className="ri-printer-line ms-1 align-middle d-inline-block"></i>
                            </SpkButton>
                            <SpkButton Buttontype="button" Buttonvariant="info" Customclass="me-1">
                                Save As PDF<i className="ri-file-pdf-line ms-1 align-middle d-inline-block"></i>
                            </SpkButton>
                            <SpkButton Buttontype="button" Buttonvariant="success" Customclass="me-1">
                                Download <i className="ri-download-2-line ms-1 align-middle"></i>
                            </SpkButton>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Mode Of Payment
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="gy-3">
                                <Col xl={12} >
                                    <p className="fs-14 fw-medium">
                                        UPI Payment
                                    </p>
                                    <p>
                                        <span className="fw-medium text-muted fs-12">UPI ID :</span> Spruko@upi
                                    </p>
                                    <p>
                                        <span className="fw-medium text-muted fs-12">Name on UPI Account :</span> Henry Milo
                                    </p>
                                    <p>
                                        <span className="fw-medium text-muted fs-12">Total Amount :</span> <span className="text-success fw-medium fs-14">$3,846.53</span>
                                    </p>
                                    <p>
                                        <span className="fw-medium text-muted fs-12">Due Date :</span> 28 June, 2024 - <span className="text-danger fs-12 fw-medium">18 days due</span>
                                    </p>
                                    <p>
                                        <span className="fw-medium text-muted fs-12">Invoice Status : <span className="badge bg-secondary-transparent fs-12">Processing</span></span>
                                    </p>
                                    <div className="alert alert-success" role="alert">
                                        Please make sure to pay the invoice bill using UPI within 120 days.
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default InvoiceDetails;