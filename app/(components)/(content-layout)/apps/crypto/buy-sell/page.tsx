"use client"

import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import { Buydata, PaymentSelect, SellCrypto, SellCrypto1, Staticoptions, Staticseries } from "@/shared/data/apps/crypto/buyselldata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

interface BuySellProps {}

const BuySell: React.FC<BuySellProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps- Buy and Sell" />

            <Pageheader title="Apps" currentpage=" Buy and Sell" activepage=" Buy and Sell" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Buy Cryptocurrency
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <Row>
                                    <Col xl={12}>
                                        <div className="form-label mb-1">Asset:</div>
                                        <div className="input-group mb-3 flex-nowrap crypto-data buy-crypto">
                                            <input type="text" className="form-control" aria-label="Select Currency" placeholder="Enter Cryptocurrency Amount" />
                                            <SpkSelect name="colors" option={SellCrypto} mainClass="basic-multi-select buysell custom-buy-sell" placeholder="BTC" menuplacement='auto' classNameprefix="Select2" />
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className="form-label mb-1">Amount:</div>
                                        <div className="input-group mb-3 flex-nowrap crypto-data buy-crypto">
                                            <input type="text" className="form-control" aria-label="Enter Amount" placeholder="Enter Amount" />
                                            <SpkSelect name="colors" option={SellCrypto1} mainClass="basic-multi-select buysell custom-buy-sell" placeholder="BTC" menuplacement='auto' classNameprefix="Select2" />
                                        </div>
                                    </Col>
                                </Row>
                                <div className="form-label mb-2">Summary:</div>
                                <div className="bg-light pt-2 p-3 rounded border">
                                    <div className="fs-14 py-2">
                                        <span className="fw-medium text-dark">Current Price:</span>
                                        <span className="text-muted ms-2 fs-14 d-inline-block">35,000.00</span>
                                        <span className="text-dark fw-medium float-end">USD</span>
                                    </div>
                                    <div className="fs-14 py-2">
                                        <span className="fw-medium text-dark">Amount:</span>
                                        <span className="text-muted ms-2 fs-14 d-inline-block">0.1</span>
                                        <span className="text-dark fw-medium float-end">BTC</span>
                                    </div>
                                    <div className="fw-medium fs-14 py-2">Total: <span className="fs-14 d-inline-block">3,500.00 USD</span></div>
                                    <div className="fs-12 text-success">Additional Charges: 0.25% (0.00025 BTC)</div>
                                </div>
                                <label className="form-label mt-4 mb-2">Select Payment Method:</label>
                                <Row className="g-2">
                                    <Col xl={12}>
                                        <SpkSelect name="colors" option={PaymentSelect} mainClass="basic-multi-select buysell" placeholder="BTC" menuplacement='auto' classNameprefix="Select2" />
                                    </Col>
                                </Row>
                                <div className="d-grid mt-3 pt-1">
                                    <button type="button" className="btn btn-primary btn-wave">BUY NOW</button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Sell Crypto
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={12}>
                                    <div className="mb-1">
                                        <label className="form-label" htmlFor="crypto-select">Select Cryptocurrency:</label>
                                    </div>
                                    <div className="input-group mb-3 flex-nowrap crypto-data buy-crypto">
                                        <input type="text" className="form-control" aria-label="Enter Amount" placeholder="Enter Amount" />
                                        <SpkSelect name="colors" option={SellCrypto} mainClass="basic-multi-select buysell custom-buy-sell" placeholder="BTC" menuplacement='auto' classNameprefix="Select2" />
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <div className="mb-1">
                                        <label className="form-label" htmlFor="currency-select">Select Currency:</label>
                                    </div>
                                    <div className="input-group mb-3 flex-nowrap crypto-data buy-crypto">
                                        <input type="text" className="form-control" aria-label="Enter Amount" placeholder="Enter Amount" />
                                        <SpkSelect name="colors" option={SellCrypto1} mainClass="basic-multi-select buysell custom-buy-sell" placeholder="BTC" menuplacement='auto' classNameprefix="Select2" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div className="form-label">Sell To:</div>
                                <Col xxl={6}>
                                    <div className="mb-3">
                                        <div className="position-relative">
                                            <div className="p-2 border rounded d-flex align-items-center gap-2">
                                                <div className="lh-1">
                                                    <span className="avatar bg-info-transparent p-2">
                                                        <i className="ri-bank-fill text-info fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="fw-medium d-block">Banking</span>
                                                    <span className="text-muted fs-11">0.254 USD/BTC</span>
                                                </div>
                                                <input id="shipping-method1" name="shipping-methods" type="radio" className="form-check-input ms-auto" defaultChecked />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={6}>
                                    <div className="mb-3">
                                        <div className="position-relative">
                                            <div className="p-2 border rounded d-flex align-items-center gap-2">
                                                <div className="lh-1">
                                                    <span className="avatar bg-secondary-transparent p-2">
                                                        <i className="ri-bank-card-fill text-secondary fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="fw-medium d-block">Credit/ Debit Card</span>
                                                    <span className="text-muted fs-11">0.266 USD/BTC</span>
                                                </div>
                                                <input id="shipping-method2" name="shipping-methods" type="radio" className="form-check-input ms-auto" />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="bg-light pt-2 p-3 rounded border">
                                <div className="fs-14 py-2">
                                    <div className="d-inline-flex">
                                        <span className="fw-medium text-dark">Price:</span>
                                        <span className="text-muted ms-2 fs-14">35,000.00</span>
                                    </div>
                                    <span className="text-dark fw-medium float-end">USD</span>
                                </div>
                                <div className="fs-14 py-2">
                                    <div className="d-inline-flex">
                                        <span className="fw-medium text-dark">Amount:</span>
                                        <span className="text-muted ms-2 fs-14">0.5</span>
                                    </div>
                                    <span className="text-dark fw-medium float-end">BTC</span>
                                </div>
                                <div className="d-flex justify-content-between pb-2 pt-2">
                                    <div className="fw-medium fs-14">Receive: </div>
                                    <span className="fs-18 d-inline-block fw-medium">$17,500.00</span>
                                </div>
                                <div className="fs-12 text-success">Additional Charges: 0.25% ($43.75)</div>
                            </div>
                            <div className="d-grid mt-3">
                                <button type="button" className="btn btn-success btn-wave">SELL</button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Quick Secure Transfer
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={12}>
                                    <div className="mb-1">
                                        <label className="form-label" htmlFor="crypto-transfer-select">Select Cryptocurrency:</label>
                                    </div>
                                    <div className="input-group mb-3 flex-nowrap quick-transfer crypto-data buy-crypto">
                                        <input type="text" className="form-control" aria-label="Enter Amount" placeholder="Enter Amount" />
                                        <SpkSelect name="colors" option={SellCrypto} mainClass="basic-multi-select buysell custom-buy-sell" placeholder="BTC"
                                            menuplacement='auto' classNameprefix="Select2"
                                        />
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <div className="mb-1">
                                        <label className="form-label" htmlFor="recipient-address">Recipient Address:</label>
                                    </div>
                                    <div className="input-group mb-3 flex-nowrap quick-transfer">
                                        <input type="text" className="form-control form-control-lg" id="recipient-address" placeholder="Enter Recipient Address" />
                                    </div>
                                </Col>
                            </Row>
                            <div className="mb-3 mt-2">
                                <span className="form-label">Deposit To:</span>
                                <div className="position-relative">
                                    <Link href="#!" className="stretched-link"></Link>
                                    <div className="p-2 border rounded d-flex align-items-center gap-2 mt-1">
                                        <div className="lh-1">
                                            <span className="avatar bg-light avatar-md p-2">
                                                <i className="ri-bank-line text-info fs-20"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="fw-medium d-block">Bank Account</span>
                                            <span className="text-muted">0.254 USD/USDT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <span className="d-block fw-semibold">Amount :</span>
                                <div className="d-flex align-items-center justify-content-between text-muted">
                                    <div>Transfer Limit</div>
                                    <div>10,000 TL remaining</div>
                                </div>
                            </div>
                            <div className="bg-light pt-2 p-3 rounded border">
                                <div className="fs-14 py-2">
                                    <div className="d-inline-flex">
                                        <span className="fw-medium text-dark">Estimated Fees:</span>
                                        <span className="text-muted ms-2 fs-14">0.001 BTC</span>
                                    </div>
                                    <span className="text-dark fw-medium float-end">~$35.00</span>
                                </div>
                                <div className="d-flex justify-content-between pb-1 pt-2">
                                    <div className="fw-medium fs-14">Total Amount:</div>
                                    <span className="fs-18 d-inline-block fw-medium">0.5 BTC</span>
                                </div>
                            </div>
                            <div className="d-grid mt-3">
                                <button type="button" className="btn btn-info btn-wave">Transfer Now</button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Buy & Sell Statistics
                            </Card.Title>
                            <div className="btn-group flex-wrap" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-primary btn-sm btn-wave">1D</button>
                                <button type="button" className="btn btn-primary-light btn-sm btn-wave">1W</button>
                                <button type="button" className="btn btn-primary-light btn-sm btn-wave">1M</button>
                                <button type="button" className="btn btn-primary-light btn-sm btn-wave">3M</button>
                                <button type="button" className="btn btn-primary-light btn-sm btn-wave">6M</button>
                                <button type="button" className="btn btn-primary-light btn-sm btn-wave">1Y</button>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-xl-0">
                            <Row className="align-items-center">
                                <Col xxl={3} className="pe-xl-0">
                                    <div className="p-3">
                                        {Buydata.map((crypto) => (
                                            <Card key={crypto.id} className="custom-card border shadow-none mb-4">
                                                <Card.Body>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h5 className="fw-medium mb-1">
                                                                {crypto.price}
                                                                <span className="ms-2 d-inline-block text-muted mb-2 fs-12 fw-normal">{crypto.symbol}</span>
                                                            </h5>
                                                            <span className={`d-block fs-12 mt-1 ${crypto.change.startsWith('+') ? 'text-success' : 'text-danger'}`}>
                                                                {crypto.change}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="avatar avatar-xl avatar-rounded">
                                                                <Image width={64} height={64} src={crypto.imageUrl} alt={crypto.symbol} />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between mt-3 mb-2">
                                                        <div>
                                                            <span className="d-block text-muted mb-1">Avail. Balance:</span>
                                                            <h6 className="fw-medium mb-1">{crypto.availableBalance}</h6>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted mb-1 text-end">Asset Value:</span>
                                                            <h6 className="fw-medium mb-1">{crypto.assetValue}</h6>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2 justify-content-between">
                                                        <div className="me-2 fw-medium text-muted">
                                                            Total Buy: <div className="text-primary">{crypto.totalBuy}</div>
                                                        </div>
                                                        <div className="fw-medium text-muted text-end">
                                                            Total Sell: <div className="text-danger">{crypto.totalSell}</div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        ))}
                                    </div>
                                </Col>
                                <Col xxl={9} className="ps-0">
                                    <div id="buy_sell-statistics" className="px-3">
                                        <Spkapexcharts chartOptions={Staticoptions} chartSeries={Staticseries} type="bar" width={"100%"} height="316" />
                                    </div>
                                    <div className="d-flex flex-wrap align-items-center border-top border-block-start-dashed mt-3 p-4 gap-4 justify-content-between">
                                        <div>
                                            <span className="d-block mb-1">Total Buy</span>
                                            <span className="d-block fw-medium fs-16 text-success">$600.00 USD</span>
                                        </div>
                                        <div>
                                            <span className="d-block mb-1">Total Sell</span>
                                            <span className="d-block fw-medium fs-16 text-danger">$2,500.00 USD</span>
                                        </div>
                                        <div>
                                            <span className="d-block mb-1">Available Balance</span>
                                            <span className="d-block fw-medium fs-16 text-primary">$18,250.00 USD</span>
                                        </div>
                                        <div>
                                            <span className="d-block mb-1">Total Crypto Asset Value</span>
                                            <span className="d-block fw-medium fs-16 text-warning">$100,000.00 USD</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    );
};

export default BuySell;