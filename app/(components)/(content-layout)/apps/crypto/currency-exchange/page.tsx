"use client"

import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { CryptoCurrencydata, Currencydata, Options1, Options2 } from "@/shared/data/apps/crypto/currencyexchangedata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

interface CurrenyExchangeProps {}

const CurrenyExchange: React.FC<CurrenyExchangeProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps- Currency Exchange" />

            <Pageheader title="Apps" currentpage=" Currency Exchange" activepage=" Currency Exchange" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={9}>
                    <Card className="custom-card currency-exchange-card">
                        <Card.Body className=" p-5 d-flex align-items-center justify-content-center z-1">
                            <div className="container">
                                <h3 className="text-fixed-white text-center">Buy and exchange coins with zero additional fees</h3>
                                <span className="d-block fs-14 text-fixed-white text-center op-8 mb-4">
                                    Buy and exchange coins with zero additional fees. Get a +50% bonus on purchases of 100 Crypto Coins or more. We accept BTC for easy transactions!
                                </span>
                                <div className="p-3 mb-4 rounded currency-exchange-area">
                                    <Row className="gy-3">
                                        <Col xxl={3} className="col-12">
                                            <input type="text" className="form-control" placeholder="Enter Amount" />
                                        </Col>
                                        <Col xxl={2} className="col-12">
                                            <div>
                                                <SpkSelect name="colors" option={Options1} placeholder="Bitcoin" classNameprefix='Select2' mainClass="multi-select" defaultvalue={[Options1[0]]} menuplacement='auto' />
                                            </div>
                                        </Col>
                                        <Col xxl={2} className="col-12 text-center">
                                            <Link aria-label="exchange" href="#!" className="btn btn-secondary lh-1 btn-icon btn-sm my-2">
                                                <i className="ti ti-arrows-exchange fs-19 align-middle"></i>
                                            </Link>
                                        </Col>
                                        <Col xxl={3} className="col-12">
                                            <input type="text" className="form-control" placeholder="Exchange Amount (in BTC)" />
                                        </Col>
                                        <Col xxl={2} className="col-12">
                                            <SpkSelect name="colors" option={Options2} mainClass="basic-multi-select " defaultvalue={[Options2[0]]} menuplacement='auto' classNameprefix="Select2" />
                                        </Col>
                                    </Row>
                                </div>
                                <div className="text-center">
                                    <SpkButton Buttontype="button" Buttonvariant="success" Customclass="btn-wave">Exchange Now</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" mb-2">
                            <Card.Title className="mb-0">Today's Cryptocurrency Prices</Card.Title>
                            <p className="mb-0 text-muted fs-11 op-6 fw-normal">Stay informed with the latest prices in the crypto market.</p>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables header={[{ title: 'Cryptocurrency' }, { title: 'Price' }, { title: 'Market Cap' }]} >
                                    {Currencydata.map((crypto, index) => (
                                        <tr key={index}>
                                            <td>{crypto.name}</td>
                                            <td>{crypto.price}</td>
                                            <td className="text-center">
                                                <span className="text-success">{crypto.marketCap}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row className="justify-content-center">
                <Col xxl={12}>
                    <Card className="custom-card overflow-hidden">
                        <div className="table-responsive">
                            <SpkTables header={[{ title: 'S.NO' }, { title: 'Cryptocurrency' }, { title: 'Symbol' }, { title: 'Change (24H)' }, { title: 'Chart' }, { title: 'Market Cap' }, { title: 'Price' }, { title: 'Volume (24H)' }]} >
                                {CryptoCurrencydata.map((crypto) => (
                                    <tr key={crypto.rank}>
                                        <td>{crypto.rank}.</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="avatar avatar-rounded avatar-sm">
                                                    <Image width={28} height={28} src={`../../../assets/images/crypto-currencies/square-color/${crypto.name}.svg`} alt={crypto.name} />
                                                </span>
                                                <div>
                                                    <h6 className="fw-medium mb-0">{crypto.name}</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{crypto.symbol}</td>
                                        <td>
                                            <div className="fs-20 d-flex align-items-center fw-medium">
                                                {crypto.change}
                                                <span className={`fs-12 text-${crypto.color} op-7 fw-normal ms-1`}>
                                                    {crypto.percent}
                                                    <i className={`ti ti-arrow-${crypto.icon} ms-1 d-inline-flex`}></i>
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <div id={crypto.chartId} className="">
                                                <Spkapexcharts chartOptions={crypto.chartOptions} chartSeries={crypto.chartSeries} type={crypto.type} width={"100"} height={"30"} />
                                            </div>
                                        </td>
                                        <td>
                                            <span className="fs-15">{crypto.marketCap}</span>
                                        </td>
                                        <td>
                                            <span className="fs-15 text-primary">{crypto.price.amount}</span>
                                            <span className="text-success ms-1 d-inline-block">{crypto.price.value}</span>
                                        </td>
                                        <td>
                                            <span className="fs-15">{crypto.totalMarketCap}</span>
                                        </td>
                                    </tr>
                                ))}
                            </SpkTables>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    );
};

export default CurrenyExchange;