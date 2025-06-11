"use client"

import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import { invoiceCurrencydata2 } from "@/shared/data/invoice/createinvoice";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import Image from "next/image";

interface CreateInvoiceProps {}

const CreateInvoice: React.FC<CreateInvoiceProps> = () => {

    const products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Product description 1',
            quantity: 1,
            price: '$84.00',
            total: '$251.00',
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Product description 2',
            quantity: 1,
            price: '$90.00',
            total: '$270.00',
        },
    ]

    function dec(el: any) {
        let unit = el.currentTarget.parentElement.querySelector("input");
        let currentValue = Number(unit.value);

        if (currentValue <= 0) {
            return;
        } else {
            unit.value = currentValue - 1;
        }
    }
    function inc(el: any) {
        el.currentTarget.parentElement.querySelector("input").value++;
    }

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Pages- Create Invoice" />

            <Pageheader title="Pages" currentpage=" Create Invoice" activepage=" Create Invoice" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={9}>
                    <Card className="custom-card">
                        <Card.Header className=" d-md-flex d-block">
                            <div className="ms-sm-2 ms-0 mt-sm-0 mt-2">
                                <div className="d-flex gap-1 mb-1 align-items-center">
                                    <span className="fs-13 text-nowrap">Invoice No </span>
                                    <div className="mx-2">:</div>
                                    <input type="text" className="form-control form-control-sm" placeholder="Invoice ID" defaultValue="INV ID" />
                                </div>
                                <div className="d-flex gap-1 mb-1 align-items-center">
                                    <span className="fs-13 text-nowrap">Issued Date </span>
                                    <div className="mx-2">:</div>
                                    <input type="text" className="form-control form-control-sm" placeholder="Invoice ID" defaultValue="INV ID" />
                                </div>
                            </div>
                            <div className="ms-auto text-end">
                                <div>
                                    <Image fill src="../../../assets/images/brand-logos/toggle-logo.png" alt="Company Logo" className="img-fluid" />
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="p-4 bg-primary rounded mb-3 text-fixed-white">
                                <div className="d-flex justify-content-between gap-2 flex-wrap">
                                    <div>
                                        <div className="d-flex gap-1 mb-1 align-items-center">
                                            <h2 className="text-nowrap fw-semibold text-fixed-white">INVOICE </h2>
                                            <div className="mx-2">:</div>
                                            <input type="text" className="form-control" placeholder="Invoice ID" defaultValue="INV ID" />
                                        </div>
                                        <div className="d-flex gap-1 mb-1 align-items-center">
                                            <p className="text-nowrap fw-semibold text-fixed-white mb-0">Due Date </p>
                                            <div className="mx-2">:</div>
                                            <input type="text" className="form-control form-control-sm" placeholder="Invoice Date" defaultValue="Invoice Date" />
                                        </div>
                                        <div className="d-flex gap-1 align-items-center">
                                            <p className="text-nowrap fw-semibold text-fixed-white mb-0">Invoice  </p>
                                            <div className="mx-2">:</div>
                                            <input type="text" className="form-control form-control-sm" placeholder="Invoice Date" defaultValue="Invoice Date" />
                                        </div>
                                    </div>
                                    <div className="text-end">
                                        <p className="fw-medium fs-16 op-8 mb-4">Total Amount (Outstanding Amount in USD)</p>
                                        <div className="d-flex gap-1 align-items-center mt-auto pt-4">
                                            <input type="text" className="form-control" placeholder="Invoice Amount" defaultValue="INV Amount" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border bg-light rounded pb-2">
                                <div className="d-flex justify-content-between gap-5 flex-wrap">
                                    <Row className="flex-fill">
                                        <Col xl={3}>
                                            <p className="mb-2 fw-semibold">
                                                Billing To:
                                            </p>
                                        </Col>
                                        <div className="col-xl-8">
                                            <div className="col-xl-12 mb-1">
                                                <input type="text" className="form-control" id="Company-Name" placeholder="Company Name" defaultValue="NEXTECH SOLUTIONS" />
                                            </div>
                                            <p className="fw-bold mb-1">
                                                <Form.Control as="textarea" className="form-control" id="company-address" placeholder="Enter Address" rows={3} defaultValue={""}/>
                                            </p>
                                            <p className="mb-1 text-muted">
                                                <input type="text" className="form-control" id="company-mail" placeholder="Company Email" defaultValue="" />
                                            </p>
                                            <p className="mb-1 text-muted">
                                                <input type="text" className="form-control" id="company-phone" placeholder="Phone Number" defaultValue="" />
                                            </p>
                                            <p className="mb-0 text-muted">
                                                <Form.Control as="textarea" className="form-control" id="invoice-subject" placeholder="Subject" rows={3} defaultValue={""}/>
                                            </p>
                                        </div>
                                    </Row>
                                    <Row className="flex-fill text-end">
                                        <div className="col-xl-5">
                                            <p className="mb-2 fw-semibold">
                                                Billing From:
                                            </p>
                                        </div>
                                        <div className="col-xl-7">
                                            <div className="col-xl-12 mb-1">
                                                <input type="text" className="form-control" id="Company-Name11" placeholder="Company Name" defaultValue="Priya Verma" />
                                            </div>
                                            <p className="fw-bold mb-1">
                                                <input type="text" className="form-control" id="customer-mail" placeholder="Customer Email" defaultValue="" />
                                            </p>
                                            <p className="mb-1 text-muted">
                                                <Form.Control as="textarea" className="form-control" id="customer-address" placeholder="Enter Address" rows={3} defaultValue={""}/>
                                            </p>
                                            <p className="mb-1 text-muted">
                                                <input type="text" className="form-control" id="customer-phone" placeholder="Phone Number" defaultValue="" />
                                            </p>
                                            <p className="mb-1 text-muted">
                                                <input type="text" className="form-control" id="zip-code" placeholder="Zip Code" defaultValue="" />
                                            </p>
                                            <div className="text-start">
                                                <p className="fw-semibold mb-2 mt-2 text-start">
                                                    Currency :
                                                </p>
                                                <SpkSelect name="colors" option={invoiceCurrencydata2} mainClass="basic-multi-select"
                                                    menuplacement='auto' classNameprefix="Select2" placeholder="Select Currency" />
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                            <Row className="gy-3">
                                <Col xl={12}>
                                    <div className="table-responsive">
                                        <SpkTables tableClass="nowrap text-nowrap border mt-3 table-striped" header={[{ title: 'PRODUCT NAME' }, { title: 'DESCRIPTION' }, { title: 'QUANTITY' }, { title: 'PRICE PER UNIT' }, { title: 'TOTAL' }, { title: 'ACTION' }]} >
                                            {products.map((product) => (
                                                <tr key={product.id}>
                                                    <td>
                                                        <input type="text" className="form-control" placeholder="Enter Product Name" defaultValue={product.name} />
                                                    </td>
                                                    <td>
                                                        <Form.Control as="textarea" rows={1} className="form-control" placeholder="Enter Description" defaultValue={product.description} />
                                                    </td>
                                                    <td className="invoice-quantity-container">
                                                        <div className="input-group border rounded flex-nowrap">
                                                            <SpkButton Buttonvariant="primary" onClickfunc={dec} Customclass="btn-icon input-group-text flex-fill product-quantity-minus" Buttontype="button">
                                                                <i className="ri-subtract-line"></i>
                                                            </SpkButton>
                                                            <input type="text" className="form-control form-control-sm border-0 text-center w-100" aria-label="quantity"
                                                                defaultValue={product.quantity} />
                                                            <SpkButton Buttonvariant="primary" onClickfunc={inc} Customclass="btn-icon input-group-text flex-fill product-quantity-plus" Buttontype="button">
                                                                <i className="ri-add-line"></i>
                                                            </SpkButton>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <input className="form-control" defaultValue={product.price} type="text" />
                                                    </td>
                                                    <td>
                                                        <input className="form-control" defaultValue={product.total} type="text" />
                                                    </td>
                                                    <td>
                                                        <SpkButton Buttonvariant="danger-light" Customclass="btn-sm btn-icon" Buttontype="button">
                                                            <i className="ri-delete-bin-5-line"></i>
                                                        </SpkButton>
                                                    </td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td colSpan={6} className="border-bottom-0"><Link className="btn btn-light" href="#!"><i className="bi bi-plus-lg"></i> Add Product</Link></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={4}></td>
                                                <td colSpan={2}>
                                                    <table className="table table-sm text-nowrap mb-0 table-borderless">
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="fw-medium">Sub Total :</div>
                                                                </th>
                                                                <td>
                                                                    <input type="text" className="form-control invoice-amount-input" placeholder="Enter Amount" defaultValue="$2519.89" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="fw-medium">Avail Discount :</div>
                                                                </th>
                                                                <td>
                                                                    <input type="text" className="form-control invoice-amount-input" placeholder="Enter Amount" defaultValue="$15.58" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="fw-medium">Coupon Discount <span className="text-success">(3.5%)</span> :</div>
                                                                </th>
                                                                <td>
                                                                    <input type="text" className="form-control invoice-amount-input" placeholder="Enter Amount" defaultValue="$112.00" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="fw-medium">Vat <span className="text-danger">(7.5%)</span> :</div>
                                                                </th>
                                                                <td>
                                                                    <input type="text" className="form-control invoice-amount-input" placeholder="Enter Amount" defaultValue="$214.00" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="fw-medium">Due Till Date :</div>
                                                                </th>
                                                                <td>
                                                                    <input type="text" className="form-control invoice-amount-input" placeholder="Enter Amount" defaultValue="$2.00" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="fs-14 fw-medium">Total :</div>
                                                                </th>
                                                                <td>
                                                                    <input type="text" className="form-control invoice-amount-input" placeholder="Enter Amount" defaultValue="$2,106.68" />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </SpkTables>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <div>
                                        <label htmlFor="invoice-note" className="form-label">Note:</label>
                                        <Form.Control as="textarea" className="form-control form-control-light" id="invoice-note" rows={3} defaultValue={"If you're not satisfied with the product, you can return the unused item within 10 days of the delivery date. For refund options, please visit the official website and review the available refund policies."}/>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className=" d-flex align-items-center gap-2 flex-wrap">
                            <div className="d-flex gap-2 flex-wrap">
                                <SpkButton Buttonvariant="primary" Customclass="" Buttontype="button">Save As PDF<i className="ri-file-pdf-line ms-1 align-middle d-inline-block"></i></SpkButton>
                                <SpkButton Buttonvariant="secondary" Customclass="btn-icon" Buttontype="button"><i className="bi bi-plus-lg"></i></SpkButton>
                                <SpkButton Buttonvariant="success" Customclass="btn-icon me-2" Buttontype="button"><i className="bi bi-download"></i></SpkButton>
                            </div>
                            <div className="ms-auto d-flex gap-2 flex-wrap">
                                <SpkButton Buttonvariant="secondary" Customclass="" Buttontype="button"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>Preview</SpkButton>
                                <SpkButton Buttonvariant="primary" Customclass="" Buttontype="button">Send Invoice <i className="ri-send-plane-2-line ms-1 align-middle d-inline-block"></i></SpkButton>
                            </div>
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
                            <Tab.Container defaultActiveKey="1">
                                <Nav as="ul" className="nav-style-1 nav-pills mb-3 gap-2 flex-wrap" id="paymentMethodTabs" role="tablist">
                                    <Nav.Item as="li" className="me-0" role="presentation">
                                        <Nav.Link as="button" eventKey="1" className="nav-link" id="credit-tab" data-bs-toggle="tab" data-bs-target="#credit" type="button" role="tab" aria-controls="credit" aria-selected="true">Credit/Debit Card</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="me-0" role="presentation">
                                        <Nav.Link as="button" eventKey="2" className="nav-link" id="upi-tab" data-bs-toggle="tab" data-bs-target="#upi" type="button" role="tab" aria-controls="upi" aria-selected="false">UPI Payment</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="paymentMethodTabContent">
                                    <Tab.Pane eventKey="1" className="tab-pane fade" id="credit" role="tabpanel" aria-labelledby="credit-tab">
                                        <input type="text" className="form-control mb-3" id="invoice-payment-cardname" placeholder="Card Number" defaultValue="1323 3213 4546 XXXX" />
                                        <label htmlFor="invoice-payment-cardname" className="form-label mb-0">
                                            <Link className="text-muted fs-11" href="#!">Enter valid card number
                                                <sup className="fs-12 text-danger align-middle"> *</sup>
                                            </Link>
                                        </label>
                                        <input type="text" className="form-control mb-3" placeholder="Card Holder Name" />
                                        <input type="password" className="form-control mb-2" placeholder="Enter OTP" />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="2" className="tab-pane fade" id="upi" role="tabpanel" aria-labelledby="upi-tab">
                                        <input type="text" className="form-control mb-3" id="invoice-payment-upiid" placeholder="UPI ID" defaultValue="user@upi" />
                                        <label htmlFor="invoice-payment-upiid" className="form-label mb-0">
                                            <Link className="text-muted fs-11" href="#!">Enter valid UPI ID
                                                <sup className="fs-12 text-danger align-middle"> *</sup>
                                            </Link>
                                        </label>
                                        <input type="text" className="form-control mb-3" placeholder="UPI Account Holder Name" />
                                        <input type="password" className="form-control mb-2" placeholder="Enter UPI PIN" />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                            <div className="alert alert-success mt-3" role="alert">
                                Please Make sure to pay the invoice bill within 120 days.
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default CreateInvoice;