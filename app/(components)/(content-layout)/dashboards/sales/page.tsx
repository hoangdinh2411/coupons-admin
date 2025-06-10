"use client"

import SpkBrowsecard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-browsecard';
import SpkCountrycard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-countrycard';
import SpkRecentactivecard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-recentactivecard';
import SpkSalesdashboard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-salesdashboard';
import Spkapexcharts from '@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts';
import SpkDatepickr from '@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown';
import { activityData, analysis1Options, analysis1Series, analysis2Options, analysis2Series, analysisOptions, analysisSeries, browserData, cardData, countryData, customerData, expenseBackgroundOptions, expenseBackgroundSeries, expenseOptions, expenseSeries, IncomeBackgroundOptions, IncomeBackgroundSeries, inComeOptions, inComeSeries, orderData, revenueOptions, revenueOptions1, revenueSeries, revenueSerirs1, SalesByTraffic, sellingProductData, statisticsOptions, statisticsSeries } from '@/shared/data/dashboards/salesdata';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react'
import { Card, Col, Dropdown, Pagination, ProgressBar, Row } from 'react-bootstrap';

interface SalesProps {}

const Sales: React.FC<SalesProps> = () => {

  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);

  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([today, nextWeek]);
  const [startDate, endDate] = dateRange;

  const [orderDataList, setOrderDataList] = useState(orderData);
  const handleRemove = (id: any) => {
    const list = orderDataList.filter((idx: any) => idx.id !== id)
    setOrderDataList(list);
  }

  const [areAllChecked, setAreAllChecked] = useState(false);
  const handleHeaderCheckboxChange = (e: any) => {
    setAreAllChecked(e.target.checked);
  };

  const [checkboxes, setCheckboxes] = useState(false);
  const handleRowCheckboxChange = (e: any) => {
    setCheckboxes(e.target.checked)
  };

  return (
    <Fragment>
      <Seo title="Dashboards-Sales" />
      {/* <!-- Start::page-header --> */}
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <div>
          <p className="fw-semibold fs-18 mb-0">Welcome back, Json Taylor !</p>
          <span className="text-muted">Track your sales activity, leads and deals here.</span>
        </div>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-text bg-white border"> <i className="ri-calendar-line"></i> </div>
              <SpkDatepickr className="form-control datepicker-input" placeholderText="Select date range" startDate={startDate} endDate={endDate} selectsRange={true}  onChange={(update:any) => setDateRange(update)} />
            </div>
          </div>
          <button className="btn btn-primary btn-wave">
            <i className="ri-share-forward-line me-1 rtl-icon-transform lh-1 d-inline-block"></i> Export
          </button>
        </div>
      </div>
      {/* <!-- End::page-header --> */}

      <Row >
        <Col xxl={9} >
          <Row>
            {cardData.map((idx, index) => (
              <Col xl={3} className="" key={index}>
                <SpkSalesdashboard object={idx} />
              </Col>
            ))}
            <Col xl={3} >
              <Card className="custom-card profit-analysis-card">
                <Card.Body className="p-0">
                  <div className="p-4 pb-1">
                    <h4 className="mb-1 d-flex align-items-center fw-semibold flex-wrap">$32,198<span className="text-success fw-medium fs-12 ms-2"><i className="ti ti-arrow-up align-middle me-1"></i>0.25%</span> </h4>
                    <span className="fs-14 d-block">Profit Earned</span>
                  </div>
                  <div id="profit-analysis">
                    <Spkapexcharts chartOptions={analysisOptions} chartSeries={analysisSeries} type="area" width={"100%"} height={120} />
                  </div>
                  <div id="profit-analysis1">
                    <Spkapexcharts chartOptions={analysis1Options} chartSeries={analysis1Series} type="bar" width={"100%"} height={90} />
                  </div>
                  <div id="profit-analysis2">
                    <Spkapexcharts chartOptions={analysis2Options} chartSeries={analysis2Series} type="area" width={"100%"} height={140} />
                  </div>
                </Card.Body>
              </Card>
              <Card className="custom-card">
                <div className="card-header">
                  <div className="card-title">
                    Sales By Traffic
                  </div>
                </div>
                <Card.Body>
                  <ProgressBar className="progress-stacked progress-sm mb-4 mt-2 gap-1">
                    <ProgressBar className="progress-bar rounded" now={45} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                    <ProgressBar className="progress-bar bg-secondary rounded" now={25} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    <ProgressBar className="progress-bar bg-success rounded" now={30} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                  </ProgressBar>
                  <ul className="list-unstyled sales-traffic-list">
                    {SalesByTraffic.map((item, index) => (
                      <li key={index}>
                        <div className="d-flex align-items-center flex-wrap justify-content-between">
                          <div className="fw-semibold">{item.type}</div>
                          <div className="fw-semibold">
                            <span className={`fs-11 fw-medium me-2 d-inline-block ${item.isPositive ? 'text-success' : 'text-danger'}`}>
                              <i className={`ti ${item.isPositive ? 'ti-arrow-up' : 'ti-arrow-down'} alilgn-middle me-1`}></i>
                              {item.percentage}%
                            </span>
                            {item.count.toLocaleString()}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={9}>
              <Card className="custom-card">
                <Card.Header className="justify-content-between">
                  <div className="card-title">
                    Sales Statistics
                  </div>
                  <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="View All" Customtoggleclass="btn-sm btn-light btn-wave fs-12 text-muted">
                    <Dropdown.Item as="li" href="#!">Download</Dropdown.Item>
                    <Dropdown.Item as="li" href="#!">Import</Dropdown.Item>
                    <Dropdown.Item as="li" href="#!">Export</Dropdown.Item>
                  </SpkDropdown>
                </Card.Header>
                <Card.Body className="p-0">
                  <div id="sales-statistics" className="p-3">
                    <Spkapexcharts chartOptions={statisticsOptions} chartSeries={statisticsSeries} type="line" width={"100%"} height={334} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xxl={3}>
          <Row >
            <Col xl={12}>
              <Card className="custom-card overflow-hidden">
                <Card.Header className="justify-content-between">
                  <Card.Title>
                    Revenue Statistics
                  </Card.Title>
                  <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="View All" Customtoggleclass="btn-sm btn-light btn-wave fs-12 text-muted">
                    <Dropdown.Item as="li" href="#!">Download</Dropdown.Item>
                    <Dropdown.Item as="li" href="#!">Import</Dropdown.Item>
                    <Dropdown.Item as="li" href="#!">Export</Dropdown.Item>
                  </SpkDropdown>
                </Card.Header>
                <Card.Body className="text-center p-0">
                  <div id="revenue-statistics1">
                    <Spkapexcharts chartOptions={revenueOptions1} chartSeries={revenueSerirs1} type="area" width={"100%"} height={250} />
                  </div>
                  <div className="revenue-statistics">
                    <div id="revenue-statistics">
                      <Spkapexcharts chartOptions={revenueOptions} chartSeries={revenueSeries} type="radialBar" width={"100%"} height={225} />
                    </div>
                    <div className="chart-circle-value"></div>
                  </div>
                  <div className="row justify-content-center mt-4 p-3 gx-xl-1 gx-xxl-3">
                    <div className="col col-xl-4 border-end border-inline-end-dashed">
                      <span className="d-block text-muted mb-1 fs-12">Today</span>
                      <span className="fw-semibold h6 mb-0 text-center">$0.65k<i className="ti ti-arrow-up text-success"></i></span>
                    </div>
                    <div className="col col-xl-4 border-end border-inline-end-dashed">
                      <span className="d-block text-muted mb-1 fs-12">Target</span>
                      <span className="fw-semibold h6 mb-0 text-center">$0.55k<i className="ti ti-arrow-down text-danger"></i></span>
                    </div>
                    <div className="col col-xl-4">
                      <span className="d-block text-muted mb-1 fs-12">This Year</span>
                      <span className="fw-semibold h6 mb-0 text-center">$0.36M<i className="ti ti-arrow-up text-success"></i></span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Card className="custom-card income-card">
                <Card.Body className="p-0">
                  <div className="d-flex align-items-center flex-wrap gap-2 lh-1 p-3">
                    <div className="circle-content">
                      <div id="income">
                        <Spkapexcharts chartOptions={inComeOptions} chartSeries={inComeSeries} type="radialBar" width={65} height={65} />
                      </div>
                      <i className='bx bx-wallet fs-5 text-success'></i>
                    </div>
                    <div className="d-flex flex-column flex-fill">
                      <span className="fw-semibold h6 mb-2">+12,345$</span>
                      <p className="fs-13 mb-0">Total Income Earned</p>
                    </div>
                    <div className="text-end">
                      <span className="d-block text-danger fw-medium fs-13 mb-2">
                        <i className="ti ti-arrow-down"></i>0.96%
                      </span>
                      <span>This Month</span>
                    </div>
                  </div>
                  <div id="income-chart">
                    <Spkapexcharts chartOptions={IncomeBackgroundOptions} chartSeries={IncomeBackgroundSeries} type="area" width={"100%"} height={80} />
                  </div>
                </Card.Body>
              </Card>
              <Card className="custom-card expense-card">
                <Card.Body className="p-0">
                  <div className="d-flex align-items-center flex-wrap gap-2 lh-1 p-3">
                    <div className="circle-content">
                      <div id="expense">
                        <Spkapexcharts chartOptions={expenseOptions} chartSeries={expenseSeries} type="radialBar" width={65} height={65} />
                      </div>
                      <i className='bx bx-dollar-circle fs-5 text-secondary'></i>
                    </div>
                    <div className="d-flex flex-column flex-fill">
                      <span className="fw-semibold h6 mb-2">-16,345$</span>
                      <p className="fs-13 mb-0">Total Expenditure</p>
                    </div>
                    <div className="text-end">
                      <span className="d-block text-success fw-medium fs-13 mb-2">
                        <i className="ti ti-arrow-up"></i>4.27%
                      </span>
                      <span>This Month</span>
                    </div>
                  </div>
                  <div id="expenditure-chart">
                    <Spkapexcharts chartOptions={expenseBackgroundOptions} chartSeries={expenseBackgroundSeries} type="bar" width={"100%"} height={50} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row >
        <Col xxl={3} xl={6}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <div className="card-title"> Browser Statistics </div>
              <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="View All" Customtoggleclass="btn-sm btn-light btn-wave fs-12 text-muted">
                <Dropdown.Item as="li" href="#!">Download</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Import</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Export</Dropdown.Item>
              </SpkDropdown>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled browser-statistics-list">
                {browserData.map((idx, index) => (
                  <SpkBrowsecard ShowSales={true} key={index} dashboard={idx} />
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={6}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Top Selling Products
              </div>
              <Link href="#!" scroll={false} className="btn btn-light btn-wave btn-sm text-muted waves-effect waves-light">View All</Link>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled top-products-list">
                {sellingProductData.map((idx, index) => (
                  <li key={index} >
                    <div className="d-flex align-items-center gap-3">
                      <div className="lh-1">
                        <span className="avatar avatar-md bg-light">
                          <Image width={40} height={40} src={idx.imageUrl} alt="" />
                        </span>
                      </div>
                      <div className="flex-fill">
                        <span className="d-block fw-semibold">{idx.name}</span>
                        <span className="text-muted fs-12">
                          {idx.category}
                        </span>
                      </div>
                      <div className="text-end">
                        <span className="fw-semibold d-block">{idx.sales}</span>
                        <span className="text-muted fs-12 d-block">Sales</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={6}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Recent Activity
              </div>
              <Link href="#!" scroll={false} className="btn btn-light btn-wave btn-sm text-muted waves-effect waves-light">View All</Link>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled recent-activity-list">
                {activityData.map((idx, index) => (
                  <SpkRecentactivecard key={index} dashboard={idx} />
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={6}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Country Statistics
              </div>
              <Link href="#!" scroll={false} className="btn btn-light btn-wave btn-sm text-muted waves-effect waves-light">Export</Link>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled country-stats-list">
                {countryData.map((idx, index) => (
                  <SpkCountrycard key={index} dashboard={idx} />
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row >
        <Col xxl={9} >
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Products Summary
              </div>
              <div className="d-flex flex-wrap ms-auto gap-2">
                <div className="me-1">
                  <input className="form-control form-control-sm" type="text" placeholder="Search" aria-label=".form-control-sm example" />
                </div>
                <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="Sort By" Customtoggleclass="btn-primary btn-sm btn-wave waves-effect waves-light">
                  <Dropdown.Item as="li" href="#!">New</Dropdown.Item>
                  <Dropdown.Item as="li" href="#!">Popular</Dropdown.Item>
                  <Dropdown.Item as="li" href="#!">Relevant</Dropdown.Item>
                </SpkDropdown>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables tableClass="text-nowrap" Customcheckclass="text-center" showCheckbox={true} checked={areAllChecked} onChange={handleHeaderCheckboxChange} header={[{ title: 'Client Name' }, { title: 'Date' }, { title: 'Product' }, { title: 'Transaction ID' }, { title: 'Status' }, { title: 'Cost' }, { title: 'Actions' },]}>
                  {orderDataList.map((idx, index) => (
                    <tr key={index} >
                      <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob2" value="" defaultChecked={idx.checked || areAllChecked}
                        onChange={handleRowCheckboxChange} aria-label="..." /></td>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <div className="lh-1">
                            <span className="avatar avatar-sm shadow">
                              <Image src={idx.avatarSrc} width={28} height={28} alt=""/>
                            </span>
                          </div>
                          <div>
                            <span className="d-block fw-semibold">{idx.customerName}</span>
                            <span className="fs-12 text-muted">{idx.customerEmail}</span>
                          </div>
                        </div>
                      </td>
                      <td>{idx.orderDate}</td>
                      <td>
                        {idx.product}
                      </td>
                      <td>{idx.orderNumber}</td>
                      <td>
                        <span className={`badge badge-pill bg-${idx.statusColor}-transparent`}>{idx.status}</span>
                      </td>
                      <td>{idx.amount}</td>
                      <td>
                        <div className="btn-list">
                          <Link href="#!" scroll={false}
                            className="btn btn-sm btn-success-light btn-icon btn-wave"><i
                              className="fe fe-edit"></i></Link>
                          <Link href="#!" scroll={false}
                            className="btn btn-sm btn-icon btn-danger-light btn-wave" onClick={() => handleRemove(idx.id)} ><i
                              className="fe fe-trash"></i></Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
            <div className="card-footer border-top-0">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    Showing 5 Entries
                  </div>
                  <div className="transform-arrow ms-2">
                    <i className="bi bi-arrow-right fw-semibold"></i>
                  </div>
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
            </div>
          </Card>
        </Col>
        <Col xxl={3}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Valuable Customers
              </div>
              <Link href="#!" scroll={false} className="btn btn-light btn-wave btn-sm text-muted waves-effect waves-light">View All</Link>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled valuable-customers-list">
                {customerData.map((idx, index) => (
                  <SpkBrowsecard key={index} ShowBadge={true} dashboard={idx} />
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Sales;
