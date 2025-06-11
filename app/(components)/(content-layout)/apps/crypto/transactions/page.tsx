"use client"

import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { Cryptotransactions } from "@/shared/data/apps/crypto/transactiondata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import React, { Fragment } from "react";
import { Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";

interface TransactionsProps {}

const Transactions: React.FC<TransactionsProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps- Crypto Transactions" />

            <Pageheader title="Apps" currentpage=" Crypto Transactions" activepage=" Crypto Transactions" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Crypto Transactions
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Transactions" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <Dropdown.Item href="#!">This Week</Dropdown.Item>
                                    <Dropdown.Item href="#!">This Month</Dropdown.Item>
                                    <Dropdown.Item href="#!">This Year</Dropdown.Item>
                                </SpkDropdown>
                                <div>
                                    <SpkButton Buttontype="button" Buttonvariant="success" Customclass="btn-sm btn-wave">View All Transactions</SpkButton>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="text-nowrap" header={[{ title: 'Hash ID' }, { title: 'Token' }, { title: 'Transaction Date' }, { title: 'Transaction Type' }, { title: 'Value (in USD)' }, { title: 'Current Status' }, { title: 'Wallet Address' }, { title: 'Options' }]} >
                                    {Cryptotransactions.map((transaction) => (
                                        <tr key={transaction.id} className="transaction-list">
                                            <td>{transaction.transactionHash}</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <Image width={20} height={20} src={transaction.cryptoLogo} alt={transaction.cryptoName} />
                                                    </span>
                                                    <div className="fw-medium">{transaction.cryptoName}</div>
                                                </div>
                                            </td>
                                            <td>{transaction.date}</td>
                                            <td className={`fw-medium ${transaction.type === 'Deposit' ? 'text-success' : 'text-danger'}`}>
                                                {transaction.type} <i className={`ri-arrow-right-${transaction.type === 'Deposit' ? 'up' : 'down'}-line`}></i>
                                            </td>
                                            <td>
                                                <span className="fw-medium fs-14">{transaction.amount}</span>
                                            </td>
                                            <td>
                                                <span className={`badge bg-${transaction.status === 'Successful' ? 'success' : transaction.status === 'Pending' ? 'warning' : 'danger'}-transparent`}>
                                                    {transaction.status}
                                                </span>
                                            </td>
                                            <td className="text-muted">{transaction.wallet}</td>
                                            <td>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <SpkTooltips placement="top" title="View Details">
                                                        <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-icon btn-sm">
                                                            <i className="ri-eye-line"></i>
                                                        </SpkButton>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Download">
                                                        <SpkButton Buttontype="button" Buttonvariant="success-light" Customclass="btn-icon btn-sm">
                                                            <i className="ri-download-2-line"></i>
                                                        </SpkButton>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Delete">
                                                        <SpkButton Buttontype="button" Buttonvariant="danger-light" Customclass="btn-icon btn-sm transactions-delete">
                                                            <i className="ri-delete-bin-5-line"></i>
                                                        </SpkButton>
                                                    </SpkTooltips>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top-0">
                            <nav aria-label="Page navigation">
                                <Pagination className="mb-0 float-end">
                                    <Pagination.Item className="disabled">Prev</Pagination.Item>
                                    <Pagination.Item className="">1</Pagination.Item>
                                    <Pagination.Item className="active">2</Pagination.Item>
                                    <Pagination.Item className="">3</Pagination.Item>
                                    <Pagination.Item className="">next</Pagination.Item>
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

export default Transactions;