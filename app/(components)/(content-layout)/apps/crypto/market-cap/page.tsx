"use client"

import SpkMarketCapcard from "@/shared/@spk-reusable-components/reusable-apps/spk-marketcapcard";
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { CryptoMarketData, MarketTabledata } from "@/shared/data/apps/crypto/marketcapdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";

interface MarketCapProps {}

const MarketCap: React.FC<MarketCapProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps- Market Cap" />

            <Pageheader title="Apps" currentpage=" Market Cap" activepage=" Market Cap" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                {CryptoMarketData.map((idx, index) => (
                    <Col xxl={3} xl={6} lg={12} key={index}>
                        <SpkMarketCapcard cap={idx} />
                    </Col>
                ))}
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2  --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Crypto MarketCap
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                    <li><Dropdown.Item href="#!">Market Cap</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Price</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Trading Volume</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Price Change (24h)</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Rank</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">A - Z</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">All-Time High (ATH)</Dropdown.Item></li>
                                </SpkDropdown>
                                <div>
                                    <SpkButton Buttonvariant="secondary" Size="sm" Customclass="btn-wave waves-effect waves-light">View All</SpkButton>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="text-nowrap" header={[{ title: "" }, { title: '#' }, { title: 'Crypto Name' }, { title: 'Price (USD)' }, { title: 'Market Cap' }, { title: '24h Change' }, { title: '1h Change' }, { title: 'Volume (24h)' }, { title: 'Last 1 Week' }, { title: 'Graph' }, { title: 'Trade' }]} >
                                    {MarketTabledata.map((crypto, index) => (
                                        <tr key={index}>
                                            <td className="text-center">
                                                <Link href="#!"><i className="ri-star-line fs-16 text-muted"></i></Link>
                                            </td>
                                            <td>{crypto.rank}</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <Image height={20} width={20} src={`../../../assets/images/crypto-currencies/square-color/${crypto.name}.svg`} alt={crypto.name} />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium">
                                                        <Link href="#!">{crypto.name} <span className="text-muted">({crypto.symbol})</span></Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-medium">{crypto.price}</span>
                                            </td>
                                            <td>
                                                <span className="fw-medium">{crypto.marketCap}</span>
                                            </td>
                                            <td>
                                                <span className={`fw-medium text-${crypto.priceColor}`}>
                                                    <i className={`ti ti-arrow-narrow-${crypto.priceIcon}`}></i>
                                                    {crypto.priceChange}
                                                </span>
                                            </td>
                                            <td>
                                                <span className={`fw-medium text-${crypto.marketColor}`}><i className={`ti ti-arrow-narrow-${crypto.marketIcon} fs-15 fw-medium`}></i> {crypto.marketChange}</span>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="d-block fw-medium">{crypto.tradingVolume}</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <div className="fw-medium d-block fs-12 flex-fill">
                                                    Last 1 Week: <span className={crypto.weekChange.startsWith('+') ? 'text-success' : 'text-pink'}>
                                                        {crypto.weekChange}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div id={crypto.chartId}>
                                                    <Spkapexcharts chartOptions={crypto.chartOptions} chartSeries={crypto.chartSeries} type={"line"} width={"100"} height={"30"} />
                                                </div>
                                            </td>
                                            <td>
                                                <SpkButton Buttonvariant="success-light" Size="sm" Customclass="">Trade</SpkButton>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <nav aria-label="Page navigation">
                                <Pagination className="mb-0 float-end">
                                    <Pagination.Item className="disabled">Prev</Pagination.Item>
                                    <Pagination.Item className="">1</Pagination.Item>
                                    <Pagination.Item className="active">2</Pagination.Item>
                                    <Pagination.Item className="">3</Pagination.Item>
                                    <Pagination.Item className="">next</Pagination.Item>
                                </Pagination>
                            </nav>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-2  --> */}
        </Fragment>
    );
};

export default MarketCap;