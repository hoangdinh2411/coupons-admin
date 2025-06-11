"use client"

import Spkapexcharts from '@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts';
import SpkSelect from '@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect';
import SpkSwiperJs from '@/shared/@spk-reusable-components/reusable-plugins/spk-swiperjs';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkButtongroup from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown';
import { Activitydata, Coindata, CryptoSwiper, Cryptocurrencydata, Currencydata, MarketCap, PaymentOptions, StaticOptions, StaticSeries, WalletBalance } from '@/shared/data/dashboards/cryptodata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card, Col, Dropdown, Nav, Pagination, Row, Tab } from 'react-bootstrap';

interface CryptoProps {}

const Crypto: React.FC<CryptoProps> = () => {

  const breakpoints = {
    500: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }

  return (
    <Fragment>

      {/* <!-- Page Header --> */}
      <Seo title="Dashboards-Crypto" />

      <Pageheader title="Dashboards" currentpage="Crypto" activepage="Crypto" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start::row-1 --> */}
      <Row>
        <Col xl={12}>
          <SpkSwiperJs slides={CryptoSwiper} className="crypto-swiper swiper-basic swiper-initialized swiper-horizontal swiper-backface-hidden" slidesPerView={1} spaceBetween={20} freemode={true} autoplay={true} breakpoint={breakpoints} />
        </Col>
      </Row>
      {/* <!-- End::row-1 --> */}

      {/* <!-- Start::row-2 --> */}
      <Row>
        <Col xxl={9}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between flex-wrap">
              <div className="card-title">
                Crypto Statistics
              </div>
              <SpkButtongroup Customclass="flex-wrap" Buttongrplabel="Basic example">
                <SpkButton Buttonvariant="primary" Buttontype="button">1W</SpkButton>
                <SpkButton Buttonvariant="primary-light" Buttontype="button">1M</SpkButton>
                <SpkButton Buttonvariant="primary-light" Buttontype="button">3M</SpkButton>
                <SpkButton Buttonvariant="primary-light" Buttontype="button">6M</SpkButton>
                <SpkButton Buttonvariant="primary-light" Buttontype="button">1Y</SpkButton>
              </SpkButtongroup>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="p-3 bg-light m-3 mb-0 rounded border">
                <div className="d-flex flex-wrap justify-content-sm-evenly flex-fill align-items-end">
                  <div className="d-flex gap-3 align-items-center">
                    <span className="avatar avatar-lg avatar-rounded p-1 bg-secondary-transparent border border-secondary border-opacity-25">
                      <Image fill src="../../assets/images/crypto-currencies/square-color/Bitcoin.svg" alt="Bitcoin" />
                    </span>
                    <div className="m-sm-0 m-2">
                      <span className="fs-14">Bitcoin</span>
                      <p className="fw-semibold mb-0 fs-15">BTC</p>
                    </div>
                  </div>
                  <div className="m-sm-0 m-2">
                    <span className="text-muted fs-12">Price</span>
                    <h4 className="mb-0">$34,283.53</h4>
                  </div>
                  <div className="m-sm-0 m-2">
                    <p className="text-success fw-semibold mb-0">+2.43% <i className="ti ti-arrow-big-up fs-16"></i></p>
                    <span className="text-muted fs-12">Change</span>
                  </div>
                  <div className="m-sm-0 m-2">
                    <p className="fw-medium fs-14 mb-0">$669.65B</p>
                    <span className="text-muted">Market Cap</span>
                  </div>
                  <div className="m-sm-0 m-2">
                    <span className="text-muted">24h Trading Volume</span>
                    <p className="fw-medium fs-14 mb-0">$32.58B</p>
                  </div>
                </div>
              </div>
              <div id="crypto" className="p-3">
                <Spkapexcharts chartOptions={StaticOptions} chartSeries={StaticSeries} type="candlestick" height={274} width={"100%"} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3}>
          <Row>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Body>
                  <Tab.Container defaultActiveKey={"buy"}>
                    <Nav className="nav-tabs tab-style-1 d-sm-flex d-block nav-justified p-1 rounded-3 bg-light" role="tablist">
                      <Nav.Item className="me-sm-2 me-0 nav-item mb-1 mb-sm-0">
                        <Nav.Link eventKey={"buy"} className="nav-link" data-bs-toggle="tab" data-bs-target="#buy-crypto"
                          aria-current="page" href="#buy-crypto">Buy</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="">
                        <Nav.Link eventKey={"sell"} className="nav-link" data-bs-toggle="tab" data-bs-target="#sell-crypto"
                          href="#sell-crypto">Sell</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey={"buy"} className="border-0 p-0" id="buy-crypto" role="tabpanel"
                        aria-labelledby="buy-crypto">
                        <div className="input-group d-flex flex-nowrap custom-buy-crypto">
                          <input type="text" className="form-control form-control-sm crypto-buy-sell-input" aria-label="crypto buy select" placeholder="Select Currency" />
                          <SpkSelect name="state" option={Coindata} mainClass="js-example-placeholder-multiple w-full js-states meter-select" defaultvalue={[Coindata[0]]}
                            menuplacement='auto' classNameprefix="Select2" searchable
                          />
                        </div>
                        <div className="text-center">
                          <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-secondary btn-icon btn-sm my-2 rounded-pill">
                            <i className="ti ti-arrows-down-up fs-16 align-middle"></i>
                          </Link>
                        </div>
                        <div className="input-group mb-3 d-flex flex-nowrap custom-sell-crypto">
                          <input type="text" className="form-control form-control-sm crypto-buy-sell-input" aria-label="crypto buy select" placeholder="36,335.00" />
                          <SpkSelect name="state" option={Currencydata} mainClass="js-example-placeholder-multiple w-full js-states meter-select" defaultvalue={[Currencydata[0]]}
                            menuplacement='auto' classNameprefix="Select2" searchable
                          />
                        </div>
                        <div className="bg-light p-3 rounded border">
                          <div className="pb-2">
                            <span className="fw-medium text-dark">Current Price:</span>
                            <span className="text-muted ms-2 d-inline-block">34,283.53</span>
                            <span className="text-dark fw-medium float-end">USD</span>
                          </div>
                          <div className="pb-2">
                            <span className="fw-medium text-dark">Amount:</span>
                            <span className="text-muted ms-2 d-inline-block">0.1</span>
                            <span className="text-dark fw-medium float-end">BTC</span>
                          </div>
                          <div className="fw-medium pb-2">Total: <span className="d-inline-block">3,428.35 USD</span></div>
                          <div className="fs-12 text-success">Additional Charges: 0.25% (0.00025 BTC)</div>
                        </div>
                        <div className="mb-3 mt-2">
                          <label className="fw-semibold fs-12 mb-2">SELECT PAYMENT METHOD:</label>
                          <SpkSelect name="state" option={PaymentOptions} mainClass="js-example-placeholder-multiple w-full js-states meter-select" defaultvalue={[PaymentOptions[0]]}
                            menuplacement='auto' classNameprefix="Select2" searchable
                          />
                        </div>
                        <div className="d-grid mt-3 pt-1">
                          <SpkButton Buttonvariant='primary' Customclass='btn-wave' Buttontype="button">
                            BUY
                          </SpkButton>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey={"sell"} className="border-0 p-0 custom-sell-crypto" id="sell-crypto" role="tabpanel"
                        aria-labelledby="sell-crypto">
                        <div className="input-group d-flex flex-nowrap">
                          <input type="text" className="form-control form-control-sm crypto-buy-sell-input" aria-label="crypto buy select" placeholder="Select Currency" />
                          <SpkSelect name="state" option={Coindata} mainClass="js-example-placeholder-multiple w-full js-states meter-select" defaultvalue={[Coindata[0]]}
                            menuplacement='auto' classNameprefix="Select2" searchable
                          />
                        </div>
                        <div className="text-center">
                          <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-secondary btn-icon btn-sm my-2 rounded-pill">
                            <i className="ti ti-arrows-down-up fs-16 align-middle"></i>
                          </Link>
                        </div>
                        <div className="input-group mb-3 d-flex flex-nowrap">
                          <input type="text" className="form-control form-control-sm crypto-buy-sell-input" aria-label="crypto buy select" placeholder="36,335.00" />
                          <SpkSelect name="state" option={Currencydata} mainClass="js-example-placeholder-multiple w-full js-states meter-select" defaultvalue={[Currencydata[0]]}
                            menuplacement='auto' classNameprefix="Select2" searchable
                          />
                        </div>
                        <div className="bg-light p-3 rounded border">
                          <div className="pb-2">
                            <span className="fw-medium text-dark">Current Price:</span>
                            <span className="text-muted ms-2 d-inline-block">34,283.53</span>
                            <span className="text-dark fw-medium float-end">USD</span>
                          </div>
                          <div className="pb-2">
                            <span className="fw-medium text-dark">Amount:</span>
                            <span className="text-muted ms-2 d-inline-block">0.1</span>
                            <span className="text-dark fw-medium float-end">BTC</span>
                          </div>
                          <div className="fw-medium pb-2">Total: <span className="d-inline-block">3,428.35 USD</span></div>
                          <div className="fs-12 text-danger">Additional Charges: 0.25% (0.00025 BTC)</div>
                        </div>
                        <div className="mb-3 mt-2">
                          <label className="fw-semibold fs-12 mb-2">SELECT PAYMENT METHOD:</label>
                          <SpkSelect name="state" option={PaymentOptions} mainClass="js-example-placeholder-multiple w-full js-states meter-select" defaultvalue={[PaymentOptions[0]]}
                            menuplacement='auto' classNameprefix="Select2" searchable
                          />
                        </div>
                        <div className="d-grid mt-3 pt-1">
                          <SpkButton Buttonvariant='success' Customclass='btn-wave' Buttontype="button">
                            SELL
                          </SpkButton>
                        </div>

                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <!--End::row-2 --> */}

      {/* <!-- Start:: row-3 --> */}
      <Row>
        <Col xxl={6} xl={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Activity
              </div>
              <SpkDropdown Id="dropdownMenuButton1" Togglevariant='' Menulabel="dropdownMenuButton1" IconClass="fe fe-more-vertical" Icon={true} Customtoggleclass="btn-icon btn-sm btn-light no-caret">
                <Dropdown.Item as="li" href="#!">Week</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Month</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Year</Dropdown.Item>
              </SpkDropdown>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables tBodyClass='active-tab' tableClass='card-table table-vcenter text-nowrap mb-0'>
                  {Activitydata.map((transaction, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex gap-2 align-items-center">
                          <div className={`avatar avatar-md p-1 bg-${transaction.color} bg-opacity-10 avatar-rounded border border-${transaction.color} border-opacity-10`}>
                            <i
                              className={`fe fe-arrow-${transaction.type === 'received' ? 'up-right' : 'down-left'
                                } text-${transaction.color}`}
                            ></i>
                          </div>
                          <div>
                            <h6 className="mb-0 fs-15">{transaction.direction}</h6>
                            <p className="mb-0 fs-11 text-muted">{transaction.source}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="text-muted fs-12">{transaction.date}</div>
                        <div className="fw-medium">{transaction.time}</div>
                      </td>
                      <td>
                        <p className="mb-0">
                          <span className={`fw-semibold ${transaction.type === 'received' ? 'text-success' : 'text-danger'}`}>
                            {transaction.amount}
                          </span>
                        </p>
                        <span className="fs-12 text-muted">Currency:</span> {transaction.currency}
                      </td>
                      <td>
                        <p className="mb-0 text-muted">
                          <span className={`fs-12 ${transaction.type === 'received' ? 'text-success' : 'text-danger'} fw-medium`}>
                            {transaction.type === 'received' ? 'Received' : 'Sent'}
                          </span>
                        </p>
                        <p className="mb-0 fw-medium fs-14">{transaction.name}</p>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={6}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between flex-wrap">
              <div className="card-title">
                Market Cap
              </div>
              <div className="d-flex">
                <SpkDropdown Id="dropdownMenuButton1" Togglevariant='' Menulabel="dropdownMenuButton1" IconClass="fe fe-more-vertical" Icon={true} Customtoggleclass="btn-icon btn-sm btn-light no-caret">
                  <Dropdown.Item as="li" href="#!">Week</Dropdown.Item>
                  <Dropdown.Item as="li" href="#!">Month</Dropdown.Item>
                  <Dropdown.Item as="li" href="#!">Year</Dropdown.Item>
                </SpkDropdown>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables tableClass="card-table table-vcenter text-nowrap mb-0" tBodyClass='active-tab' >
                  {MarketCap.map((crypto, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="lh-1">
                            <span className={`avatar avatar-md avatar-rounded me-2 p-2 bg-${crypto.bgColor}-transparent border border-${crypto.bgColor} border-opacity-25`}>
                              <Image fill src={crypto.image} alt={crypto.name} />
                            </span>
                          </div>
                          <div className="align-items-center">
                            <p className="fw-semibold mb-0">{crypto.name}</p>
                            <p className="mb-0 text-muted">{crypto.symbol}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 fs-15 fw-semibold">{crypto.amount}</p>
                        <p className="mb-0 text-muted fw-medium fs-12">{crypto.valueInUSD}</p>
                      </td>
                      <td>
                        <span className={`fw-medium text-${crypto.iconColor} fs-14`}>
                          {crypto.percentageChange}
                        </span>
                      </td>
                      <td>
                        <p className="mb-0 fw-semibold">Market Cap:</p>
                        <p className="mb-0 text-muted fs-12">{crypto.marketCap}</p>
                      </td>
                      <td>
                        <p className="mb-0 text-muted fs-12">{crypto.supply}</p>
                        <p className="mb-0 fw-medium">Supply:</p>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End:: row-3 --> */}

      {/* <!-- Start:: row-4 --> */}
      <Row>
        <Col xxl={9}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between flex-wrap">
              <div className="card-title mb-2 mb-sm-0">
                Cryptocurrency Market Overview
              </div>
              <SpkButtongroup Customclass="flex-wrap crypto-group" Buttongrplabel="Basic example">
                <SpkButton Buttonvariant="primary" Buttontype="button" Size="sm">1D</SpkButton>
                <SpkButton Buttonvariant="primary-light" Buttontype="button">1W</SpkButton>
                <SpkButton Buttonvariant="primary-light" Buttontype="button">1M</SpkButton>
                <SpkButton Buttonvariant="primary-light" Buttontype="button">3M</SpkButton>
                <SpkButton Buttonvariant="primary-light" Buttontype="button">6M</SpkButton>
                <SpkButton Buttonvariant="primary-light" Buttontype="button">1Y</SpkButton>
              </SpkButtongroup>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables tableClass='table-hover text-nowrap nft-table' header={[{ title: '#' }, { title: 'Coin' }, { title: 'Price' }, { title: 'Price Graph' }, { title: '24h Volume' }, { title: '24h Change' }, { title: 'Market Cap' }, { title: 'Actions' }]} >
                  {Cryptocurrencydata.map((crypto, index) => (
                    <tr key={index}>
                      <td>{crypto.rank}</td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="lh-1">
                            <span className="avatar avatar-sm">
                              <Image fill src={crypto.image} alt={crypto.name} />
                            </span>
                          </div>
                          <div className="fs-14 fw-medium">{`${crypto.name} - ${crypto.symbol}`}</div>
                        </div>
                      </td>
                      <td>{crypto.price}</td>
                      <td>
                        {crypto.chartoptions && crypto.chartseries ? (
                          <div id={crypto.graphId}>
                            <Spkapexcharts chartOptions={crypto.chartoptions} chartSeries={crypto.chartseries} type="line" height={20} width={120}
                            />
                          </div>
                        ) : (
                          <p>No chart data available</p>
                        )}
                      </td>
                      <td>{crypto.marketCap}</td>
                      <td>
                        <span
                          className={crypto.percentageChange.startsWith('+') ? 'text-success' : 'text-danger'}
                        >
                          <i
                            className={`ri-arrow-${crypto.percentageChange.startsWith('+') ? 'up' : 'down'}-s-fill me-1 fs-15 align-middle`}
                          ></i>
                          {crypto.percentageChange}
                        </span>
                      </td>
                      <td>{crypto.supply}</td>
                      <td>
                        <div className="btn-grp">
                          <button className="btn btn-sm btn-primary-light me-2">Buy</button>
                          <button className="btn btn-sm btn-success-light">Trade</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
            <Card.Footer className="border-top-0 py-2">
              <div className="d-flex align-items-center">
                <div>
                  Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                </div>
                <div className="ms-auto">
                  <nav aria-label="Page navigation" className="pagination-style-4">
                    <Pagination className="pagination mb-0 overflow-auto">
                      <Pagination.Item disabled>Prev</Pagination.Item>
                      <Pagination.Item active>1</Pagination.Item>
                      <Pagination.Item>2</Pagination.Item>
                      <Pagination.Item className="pagination-next text-primary">next</Pagination.Item>
                    </Pagination>
                  </nav>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xxl={3}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Wallet Balance
              </div>
              <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="View All" Customtoggleclass="p-2 fs-12 text-muted">
                <Dropdown.Item as="li" href="#!">Today</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">This Week</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Last Week</Dropdown.Item>
              </SpkDropdown>
            </Card.Header>
            <Card.Body>
              <div className="text-center p-2 border rounded bg-light mb-2">
                <p className="fw-medium mb-1 text-muted">Wallet Balance</p>
                <h4 className="mb-1">$8,720.45</h4>
                <p className="mb-0 text-success fw-medium">+ 01.82%</p>
              </div>
              <ul className="list-unstyled mb-0 pt-1">
                {WalletBalance.map((wallet) => (
                  <li className={`${wallet.balanceliclass}`} key={wallet.id}>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <div className="d-flex align-items-center gap-2">
                        <span className={`avatar avatar-lg p-1 flex-shrink-0 avatar-rounded bg-${wallet.bgcolor}-transparent`}>
                          <Image fill src={wallet.image} alt={wallet.name} />
                        </span>
                        <div>
                          <p className="mb-0 fw-semibold">{wallet.name}</p>
                          <p className="mb-0 text-muted fs-12">{`${wallet.name} Wallet`}</p>
                        </div>
                      </div>
                      <div className="ms-auto text-end">
                        <p className="mb-0 fw-semibold text-success">
                          {wallet.balance} <span className="text-default">- {wallet.symbol}</span>
                        </p>
                        <p className="mb-0 fs-12 text-muted">{wallet.currencyValue}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End:: row-4 --> */}

    </Fragment>
  )
}

export default Crypto;
