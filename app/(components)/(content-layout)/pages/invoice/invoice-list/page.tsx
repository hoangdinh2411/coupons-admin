"use client"

import SpkInvoicecard from "@/shared/@spk-reusable-components/reusable-pages/spk-invoicecard";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { InvoiceCards, InvoiceData } from "@/shared/data/pages/invoicelistdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";

interface InvoiceListProps {}

const InvoiceList: React.FC<InvoiceListProps> = () => {

    const [invoice, setInvoice] = useState(InvoiceData);

    const handleremove = (id: string) => {
        const invoiceList = invoice.filter((idx) => idx.id !== id);
        setInvoice(invoiceList)
    }

    const print = () => {
        window.print();
    };

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Pages-Invoice List" />

            <Pageheader title="Pages" currentpage="Invoice List" activepage="Invoice List" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                {InvoiceCards.map((idx, index) => (
                    <Col xxl={3} key={index}>
                        <SpkInvoicecard invoice={idx} />
                    </Col>
                ))}
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Invoice Management
                            </Card.Title>
                            <div className="d-flex">
                                <Link href="/pages/invoice/create-invoice" className="btn btn-sm btn-primary btn-wave waves-light me-2">
                                    <i className="ri-add-line fw-medium align-middle me-1"></i> Generate Invoice
                                </Link>
                                <SpkDropdown toggleas="button" Navigate="#!" Customtoggleclass="btn btn-icon btn-secondary-light btn-sm btn-wave waves-light waves-effect waves-light no-caret" Icon={true} IconClass="ti ti-dots-vertical" Toggletext="">
                                    <Dropdown.Item as="li" href="#!">View All Invoices</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Completed Payments</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Pending Payments</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Overdue Payments</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </Card.Header>

                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="text-nowrap" header={[{ title: 'Client Name' }, { title: 'Invoice Number' }, { title: 'Date Issued' }, { title: 'Amount Due' }, { title: 'Payment Status' }, { title: 'Due Date' }, { title: 'Actions' }]} >
                                    {invoice.map((invoice, index) => (
                                        <tr className="invoice-list" key={index}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <Image height={28} width={28} src={invoice.avatarSrc} alt={`${invoice.name} avatar`} />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-medium">{invoice.name}</p>
                                                        <p className="mb-0 fs-11 text-muted">{invoice.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <Link href="#!" className="fw-medium text-primary">
                                                    {invoice.id}
                                                </Link>
                                            </td>
                                            <td>{invoice.date}</td>
                                            <td className="fw-semibold">{invoice.amount}</td>
                                            <td>
                                                <span className={`badge ${invoice.status === 'Paid' ? 'bg-success' : invoice.status === 'Pending' ? 'bg-warning' : 'bg-danger'}`}>
                                                    {invoice.status}
                                                </span>
                                            </td>
                                            <td>{invoice.dueDate}</td>
                                            <td>
                                                <SpkButton onClickfunc={print} Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-primary-light btn-icon btn-sm me-2">
                                                    <i className="ri-printer-line"></i>
                                                </SpkButton>
                                                <SpkButton onClickfunc={() => handleremove(invoice.id)} Buttontype="button" Buttonvariant="danger-light" Customclass="btn btn-primary-light btn-icon btn-sm">
                                                    <i className="ri-delete-bin-5-line"></i>
                                                </SpkButton>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>

                        <div className="card-footer border-top-0">
                            <nav aria-label="Page navigation">
                                <Pagination className="mb-0 float-end">
                                    <Pagination.Item className="disabled">Previous</Pagination.Item>
                                    <Pagination.Item className="active">1</Pagination.Item>
                                    <Pagination.Item className="">2</Pagination.Item>
                                    <Pagination.Item className="">3</Pagination.Item>
                                    <Pagination.Item className="">Next</Pagination.Item>
                                </Pagination>
                            </nav>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default InvoiceList;