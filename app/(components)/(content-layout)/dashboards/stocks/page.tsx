"use client"

import Spkapexcharts from '@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts';
import SpkSwiperJs from '@/shared/@spk-reusable-components/reusable-plugins/spk-swiperjs';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown';
import { BalanceSummaryOptions, BalanceSummarySeries, MyStockssData, PerformerssData, StockCapOptions, StockCapSeries, StockOptions, StockSeries, StockSwiper, StockTransaction, StockWeeklyOptions, StockWeeklySeries, Watchlistdata } from '@/shared/data/dashboards/stocksdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card, Col, Dropdown, Row } from 'react-bootstrap';

interface StocksProps {}

const Stocks:React.FC<StocksProps> = () => {

  const breakpoints = {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1800: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }

  return (
    <Fragment>

      {/* <!-- Page Header --> */}
      <Seo title="Dashboards-Stocks" />

      <Pageheader title="Dashboards" currentpage="Stocks" activepage="Stocks" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start:: row-1 --> */}
      <Row>
        <Col xl={12}>
          <SpkSwiperJs slides={StockSwiper} className="swiper-basic swiper-initialized swiper-horizontal swiper-backface-hidden" slidesPerView={1} spaceBetween={20} freemode={true} autoplay={true} breakpoint={breakpoints} />
        </Col>
      </Row>
      {/* <!-- End:: row-1 --> */}

      {/* <!-- Start:: row-2 --> */}
      <Row>
        <Col xxl={3}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title>
                My Watchlist
              </Card.Title>
              <SpkButton Buttonvariant='light' Customclass='btn-sm' Buttontype="button">
                View All<i className="ti ti-arrow-narrow-right ms-1"></i>
              </SpkButton>
            </Card.Header>
            <Card.Body className="p-0">
              <ul className="list-group list-group-flush">
                {Watchlistdata.map((stock, index) => (
                  <li className="list-group-item d-flex gap-3 align-items-center" key={index}>
                    <span className={`avatar avatar-lg p-2 avatar-rounded border border-${stock.borderColor} border-opacity-10 bg-${stock.bgColor} flex-shrink-0`}>
                      <i className={`bi ${stock.icon} ${stock.iconClass}`}></i>
                    </span>
                    <div>
                      <div className="fs-14 fw-medium">{stock.name} ({stock.symbol})</div>
                      <span className="text-muted fs-12">Current Price: {stock.price}</span>
                    </div>
                    <span className={`ms-auto fw-semibold ${stock.change.includes('+') ? 'text-success' : 'text-danger'}`}>{stock.change}</span>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={9}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title>Stock Price Overview</Card.Title>
              <div className="d-flex gap-2">
                <SpkButton Buttontype="button" Buttonvariant="primary" Customclass=" btn-sm btn-wave waves-effect waves-light">1D</SpkButton>
                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-sm btn-wave waves-effect waves-light">1W</SpkButton>
                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-sm btn-wave waves-effect waves-light">1M</SpkButton>
                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-sm btn-wave waves-effect waves-light">3M</SpkButton>
                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-sm btn-wave waves-effect waves-light">6M</SpkButton>
                <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn-sm btn-wave waves-effect waves-light">1Y</SpkButton>
              </div>
            </Card.Header>
            <Card.Body className="pb-0">
              <div className="d-flex align-items-end gap-xl-5 gap-3 flex-wrap px-sm-3">
                <div className="min-w-fit-content me-sm-3">
                  <div className="d-flex align-items-end mb-1 gap-3 flex-wrap">
                    <span className="avatar avatar-sm bg-primary align-self-start">
                      <i className="ti ti-pig-money fs-16"></i>
                    </span>
                    <div>
                      <h4 className="fw-medium mb-1">$22,246.25</h4>
                      <p className="mb-0 fs-12">Total Investment</p>
                    </div>
                    <div>
                      <span className="text-success fw-semibold"> 1.8% <i className="ri-arrow-up-line lh-1 align-center fs-14 fw-normal"></i></span>
                      <span className="fw-medium fs-12 text-muted"> From Last Month</span>
                    </div>
                  </div>
                </div>
                <div className="min-w-fit-content">
                  <div className="d-flex align-items-end mb-1 gap-3 flex-wrap">
                    <span className="avatar avatar-sm bg-success align-self-start">
                      <i className="ti ti-chart-infographic fs-16"></i>
                    </span>
                    <div>
                      <h4 className="fw-medium mb-1">$110,784.06</h4>
                      <p className="mb-0 fs-12">Market Cap</p>
                    </div>
                    <div>
                      <span className="text-danger fw-semibold"> 0.28% <i className="ri-arrow-down-line lh-1 align-center fs-14 fw-normal"></i></span>
                      <span className="fw-medium fs-12 text-muted"> From Last Month</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-sm-end mt-2 mt-sm-0 ms-auto">
                  <Link href="#!" scroll={false} className="btn btn-w-lg btn-sm btn-secondary"><i className="ti ti-plus me-1"></i>Compare</Link>
                </div>
              </div>
              <div id="stockCap-area">
                <Spkapexcharts chartOptions={StockOptions} chartSeries={StockSeries} type="area" width={"100%"} height={230} />
              </div>
              <div id="stockCap">
                <Spkapexcharts chartOptions={StockCapOptions} chartSeries={StockCapSeries} type="bar" width={"100%"} height={105} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End:: row-2 --> */}

      {/* <!-- Start:: row-3 --> */}
      <Row>
        <Col xxl={4} lg={6}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Transaction History
              </Card.Title>
              <SpkDropdown Id="dropdownMenuButton1" Togglevariant="light" Menulabel="dropdownMenuButton1" Toggletext="All" Customtoggleclass="btn-sm">
                <Dropdown.Item as="li" href="#!">Buy</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Sell</Dropdown.Item>
              </SpkDropdown>
            </Card.Header>
            <Card.Body className="p-0 pt-2 pb-2 mb-1">
              <ul className="list-group list-group-flush">
                {StockTransaction.map((transaction, index) => (
                  <li className="list-group-item border-0 d-flex gap-3 align-items-center flex-wrap" key={index}>
                    <span className={`avatar flex-shrink-0 avatar-lg p-2 avatar-rounded border border-${transaction.borderColor} border-opacity-25 bg-${transaction.bgColor}`}>
                      <i className={`${transaction.icon} ${transaction.iconClass}`}></i>
                    </span>
                    <div>
                      <div className="fw-medium mb-1">{transaction.name} ({transaction.symbol})</div>
                      <span className="text-muted fs-12 fw-medium">
                        <i className="ri-calendar-line fs-14 me-1"></i>{transaction.date}
                      </span>
                    </div>
                    <div className="d-flex ms-auto align-items-end justify-content-between gap-4">
                      <span className={`badge ${transaction.badgeClass} me-2 fs-10 align-middle`}>{transaction.action}</span>
                      <div>
                        <div className="fw-semibold fs-14">{transaction.price}</div>
                        <div className="text-muted">Value: {transaction.value}</div>
                      </div>
                      <span className={`${transaction.changeClass} ms-auto fw-semibold`}>{transaction.change}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} lg={6}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <h6 className="card-title">Weekly Stock Earnings</h6>
              <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass=" btn-sm"><i className="ti ti-download me-1"></i> Report</SpkButton>
            </Card.Header>
            <Card.Body>
              <div className="px-2 d-flex gap-4 align-items-end mb-2">
                <div>
                  <p className="fw-semibold mb-0 fs-18">$2,624.00</p>
                  <span className="fs-12 text-muted">Profit Earned:</span>
                </div>
                <div className="ms-auto text-muted text-end">
                  <span className="fw-medium fs-12">From Last Week </span>
                  <span className="text-success fw-semibold fs-12"> 2.6% <i className="ri-arrow-up-line lh-1 align-center fs-14 fw-normal"></i></span>
                </div>
              </div>
              <div id="stocks-earnings">
                <Spkapexcharts chartOptions={StockWeeklyOptions} chartSeries={StockWeeklySeries} type="bar" width={"100%"} height={252} />
              </div>
              <div className="text-center d-flex gap-4 justify-content-center">
                <div>
                  <i className="ri-circle-fill lh-1 fs-11 rounded-2 bg-success-transparent text-success"></i>
                  <span className="text-muted fs-12 mb-1 rounded-dot dot-success d-inline-block ms-2 fw-medium">Profit Gained</span>
                </div>
                <div>
                  <i className="ri-circle-fill lh-1 fs-11 rounded-2 bg-danger-transparent text-danger"></i>
                  <span className="text-muted fs-12 mb-1 rounded-dot dot-danger d-inline-block ms-2 fw-medium">Loss</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={5}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Top Stock Performers
              </Card.Title>
              <Link href="#!" scroll={false} className="text-primary fw-medium text-decoration-underline"> View All<i className="ti ti-arrow-narrow-right ms-1"></i></Link>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables tableClass='text-nowrap' header={[{ title: 'Company' }, { title: 'Change' }, { title: 'Price' }, { title: '% Change' }]} >
                  {PerformerssData.map((stock, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex gap-3 align-items-center">
                          <span className={`avatar avatar-md p-2 avatar-rounded border border-secondary border-opacity-10 ${stock.badgeClass}`}>
                            <i className={`${stock.icon} ${stock.iconClass}`}></i>
                          </span>
                          <div>
                            <div className="fs-14 fw-medium mb-1">{stock.name} ({stock.symbol})</div>
                          </div>
                          <span className="text-muted fs-12">Vol: {stock.volume}</span>
                        </div>
                      </td>
                      <td><span className={stock.priceClass}>{stock.price}</span></td>
                      <td className="fw-medium fs-14">{stock.volumedata}</td>
                      <td><span className={stock.changeClass}>{stock.change}</span></td>
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
        <Col xl={9}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title>My Stocks</Card.Title>
              <SpkDropdown Id="dropdownMenuButton1" Togglevariant="light" Menulabel="dropdownMenuButton1" Toggletext="All Stocks" Customtoggleclass="btn-sm text-muted">
                <Dropdown.Item as="li" href="#!">All Stocks</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Wishlist</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Stocks</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Crypto</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">ETFs</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Bonds</Dropdown.Item>
              </SpkDropdown>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables tableClass='table-hover text-nowrap' header={[{ title: 'Stock',headerClassname: 'bg-light' }, { title: 'Quantity',headerClassname: 'bg-light' }, { title: 'Stock Price',headerClassname: 'bg-light' }, { title: 'Change',headerClassname: 'bg-light' }, { title: 'Total Value',headerClassname: 'bg-light' }, { title: 'Actions',headerClassname: 'bg-light' }]} >
                  {MyStockssData.map((stock, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex gap-3 align-items-center">
                          <span className={`avatar avatar-md p-2 avatar-rounded border border-${stock.color} border-opacity-10 bg-${stock.color}-transparent`}>
                            <i className={stock.iconClass}></i>
                          </span>
                          <div>
                            <div className="fw-medium mb-1">{stock.name} ({stock.symbol})</div>
                            <span className="text-muted fs-12">{stock.market}</span>
                          </div>
                        </div>
                      </td>
                      <td className="fw-medium">{stock.quantity}</td>
                      <td><span className={stock.priceClass}>{stock.price}</span></td>
                      <td><span className={stock.changeClass}>{stock.priceChange}</span></td>
                      <td className="fw-medium">{stock.totalValue}</td>
                      <td>
                        <button className="btn btn-primary btn-sm me-2">Buy</button>
                        <button className="btn btn-success btn-sm">Sell</button>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <h6 className="card-title">Balance Summary</h6>
              <SpkButton Buttontype="button" Buttonvariant="light" Customclass=" btn-sm">View All<i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
            </Card.Header>
            <Card.Body>
              <div>
                <div id="stock-balance">
                  <Spkapexcharts chartOptions={BalanceSummaryOptions} chartSeries={BalanceSummarySeries} type="donut" width={"100%"} height={197} />
                </div>
                <div className="p-3 text-default rounded border border-dashed flex-fill bg-light mt-3 d-flex align-items-end gap-2 justify-content-between flex-wrap">
                  <div className="flex-fill text-center">
                    <div className="avatar avatar-sm bg-primary avatar-rounded mb-3">
                      <i className="ti ti-currency-dollar fs-18 fw-medium lh-1"></i>
                    </div>
                    <p className="text-muted mb-2">My Balance</p>
                    <h5 className="fw-semibold lh-1 mb-2">$ 18,780.00</h5>
                    <span className="fs-11 text-success"> 1.52% <i className="ri-arrow-up-line lh-1 align-middle fw-normal"></i></span><span className="fw-medium fs-11 text-muted"> Last Month</span>
                  </div>
                  <div className="flex-fill text-center">
                    <div className="avatar avatar-sm bg-primary bg-opacity-10 avatar-rounded mb-3 text-primary">
                      <i className="ti ti-coins fs-18 fw-medium lh-1"></i>
                    </div>
                    <p className="text-muted mb-2">Investment </p>
                    <h5 className="fw-semibold lh-1 mb-2">$16,890.00</h5>
                    <span className="fs-11 text-danger"> 0.12% <i className="ri-arrow-down-line lh-1 align-middle fw-normal"></i></span><span className="fw-medium fs-11 text-muted"> Last Month</span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End:: row-4 --> */}

    </Fragment>
  )
}

export default Stocks;
