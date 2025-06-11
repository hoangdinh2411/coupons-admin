"use client"

import SpkCrmcard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-crmcard';
import Spkapexcharts from '@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkTooltips from '@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips';
import { Activitycarddata, CRMCards, ClosedDeals, Dealsdata, ProfitOptions, ProfitSeries, RevenueStaticOptions, RevenueStaticSeries, Upcomingdata, WebsitetrafficeOptions, WebsitetrafficeSeries } from '@/shared/data/dashboards/crmdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap';

interface CrmProps {}

const Crm: React.FC<CrmProps> = () => {

  return (

    <Fragment>

      {/* <!-- Page Header --> */}

      <Seo title="Dashboards-CRM" />

      <Pageheader title="Dashboards" currentpage="CRM" activepage="CRM" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start::row-1 --> */}
      <Row>
        {CRMCards.map((idx, index) => (
          <Col xl={3} key={index}>
            <SpkCrmcard crm={idx} />
          </Col>
        ))}
      </Row>
      {/* <!-- End::row-1 --> */}

      {/* <!-- Start::row-2 --> */}
      <Row>
        <Col xxl={8}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Revenue Statistics
              </div>
            </Card.Header>
            <Card.Body className="card-body">
              <div className="d-flex p-3 border rounded-3 border-dashed align-items-center gap-4 mb-2 bg-light flex-wrap justify-content-center">
                <div className="d-flex gap-2 align-items-center">
                  <p className="mb-0 fw-semibold text-muted">Total Revenue: </p>
                  <div className="fs-22 fw-semibold text-success">$150.75k</div>
                </div>
                <div className="op-4 text-muted"> || </div>
                <div className="d-flex gap-2 align-items-center">
                  <p className="mb-0 fw-semibold text-muted">Total Income: </p>
                  <div className="fs-22 fw-medium">$45.30k</div>
                </div>
                <div className="op-4 text-muted"> || </div>
                <div className="d-flex gap-2 align-items-center">
                  <p className="mb-0 fw-semibold text-muted">Conversion Rate: </p>
                  <div className="fs-22 fw-medium">4.25%</div>
                </div>
                <div className="op-4 text-muted"> || </div>
                <div className="d-flex gap-2 align-items-center">
                  <p className="mb-0 fw-semibold text-muted">Change: </p>
                  <div className="fw-medium text-success fs-20">2.5% <i className="ri-arrow-up-line lh-1 align-center fs-14 fw-normal"></i></div>
                </div>
              </div>
              <div id="salerevenue">
                <Spkapexcharts chartOptions={RevenueStaticOptions} chartSeries={RevenueStaticSeries} type={"bar"} height={300} width={"100%"} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4}>
          <Card className="custom-card crm-upgrade-card">
            <Card.Body>
              <Row className="justify-content-center align-items-center">
                <Col sm={5}>
                  <Image fill src="../../assets/images/media/media-71.png" alt="" className="img-fluid" />
                </Col>
                <Col sm={7}>
                  <div className="text-end">
                    <p className="fw-semibold mb-1">
                      Unlock Premium Features for Enhanced Performance
                    </p>
                    <p className="text-muted fs-12 fw-medium mb-4 op-7">
                      Upgrade now to access advanced tools and boost productivity.
                    </p>
                    <div className="btn btn-success btn-w-lg">
                      <i className="ti ti-crown fs-18 text-secondary fw-semibold me-2 align-middle d-inline-block"></i>Upgrade to Pro
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Profit Report
              </div>
              <div>
                <SpkButton Buttonvariant='primary-light' Customclass='btn-sm' Buttontype="button">View Details</SpkButton>
              </div>
            </Card.Header>
            <Card.Body className="pe-xl-0">
              <Row className="align-items-center">
                <Col xl={6} md={6}>
                  <div className="d-flex gap-3 flex-wrap align-items-center mb-3 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" className="text-primary bg-primary-transparent" viewBox="0 0 24 24"><g fill="currentColor"><path fillOpacity="0.5" d="M8 13h6v4H8z" /><path d="M6 6H4v12h2zm14 1H8v4h12z" /></g></svg>
                    <div>
                      <h6 className="fw-semibold mb-1">$3.56K</h6>
                      <div className="text-muted mb-0">Profit</div>
                    </div>
                    <div className="ms-auto text-muted fs-11 text-end">
                      <div className="fw-medium">From Last Month</div>
                      <span className="text-success fw-semibold"> 5.3% <i className="ri-arrow-up-line lh-1 align-center fs-14 fw-normal"></i></span>
                    </div>
                  </div>
                  <div className="d-flex gap-3 flex-wrap align-items-center mb-3 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" className="text-success bg-success-transparent" viewBox="0 0 24 24"><g fill="currentColor"><path fillOpacity="0.5" d="M8 13h6v4H8z" /><path d="M6 6H4v12h2zm14 1H8v4h12z" /></g></svg>
                    <div>
                      <h6 className="fw-semibold mb-1">$4.25K</h6>
                      <div className="text-muted mb-0">Revenue</div>
                    </div>
                    <div className="ms-auto text-muted fs-11 text-end">
                      <div className="fw-medium">From Last Month</div>
                      <span className="text-danger fw-semibold"> 3.1% <i className="ri-arrow-down-line lh-1 align-center fs-14 fw-normal"></i></span>
                    </div>
                  </div>
                  <div className="d-flex gap-3 flex-wrap align-items-center pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" className="text-secondary bg-secondary-transparent" viewBox="0 0 24 24"><g fill="currentColor"><path fillOpacity="0.5" d="M8 13h6v4H8z" /><path d="M6 6H4v12h2zm14 1H8v4h12z" /></g></svg>
                    <div>
                      <h6 className="fw-semibold mb-1">$2.77K</h6>
                      <div className="text-muted mb-0">Expenses</div>
                    </div>
                    <div className="ms-auto text-muted fs-11 text-end">
                      <div className="fw-medium">From Last Month</div>
                      <span className="text-success fw-semibold"> 2.6% <i className="ri-arrow-up-line lh-1 align-center fs-14 fw-normal"></i></span>
                    </div>
                  </div>
                </Col>
                <Col xl={6} md={6}>
                  <div id="crmprofit-report">
                    <Spkapexcharts chartOptions={ProfitOptions} chartSeries={ProfitSeries} type={"donut"} height={150} width={"100%"} />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End::row-2 --> */}

      {/* <!-- Start::row-3 --> */}
      <Row>
        <Col xxl={3} xl={6}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Closed Deals
              </div>
              <div>
                <SpkButton Buttonvariant='primary-light' Customclass='btn-sm' Buttontype="button">View All</SpkButton>
              </div>
            </Card.Header>
            <Card.Body className="card-body">
              <ul className="list-unstyled mb-0">
                {ClosedDeals.map((deal) => (
                  <li key={deal.id} className={`d-flex justify-content-between align-items-center ${deal.liclass}`}>
                    <div className="d-flex gap-2 align-items-center">
                      <span className={`avatar avatar-md ${deal.id === 1 ? 'bg-primary' : deal.id === 2 ? 'bg-secondary' : deal.id === 3 ? 'bg-success' : deal.id === 4 ? 'bg-info' : deal.id === 5 ? 'bg-warning' : 'bg-pink'} p-2 avatar-rounded flex-shrink-0`}>
                        {deal.initials}
                      </span>
                      <div>
                        <div className="mb-1">
                          {deal.company}
                          <span className="fw-semibold"> - {deal.amount}</span>
                        </div>
                        <div className="fs-11 text-muted">{deal.date}</div>
                      </div>
                    </div>
                    <span className="badge bg-success">Closed</span>
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
                Website Traffic
              </div>
              <div>
                <SpkButton Buttonvariant='primary-light' Customclass='btn-sm' Buttontype="button">View Details</SpkButton>
              </div>
            </Card.Header>
            <div className="card-body pb-0">
              <div id="crm-webtraffic">
                <Spkapexcharts chartOptions={WebsitetrafficeOptions} chartSeries={WebsitetrafficeSeries} type={"bar"} height={343} width={"100%"} />
              </div>
            </div>
          </Card>
        </Col>
        <Col xxl={6} xl={12}>
          <Row>
            <Col xl={7}>
              <Card className="custom-card">
                <Card.Header className="justify-content-between">
                  <div className="card-title">
                    Recent Activity
                  </div>
                  <div>
                    <SpkButton Buttonvariant='primary-light' Customclass='btn-sm' Buttontype="button">View Details</SpkButton>
                  </div>
                </Card.Header>
                <Card.Body className="card-body">
                  <ul className="list-unstyled mb-0 crm-recent-activity">
                    {Activitycarddata.map((activity) => (
                      <li key={activity.id} className="d-flex mb-4">
                        <div className={`avatar-md p-1 ${activity.color}-transparent avatar avatar-rounded flex-shrink-0 me-3`}>
                          <span className={`avatar-sm avatar avatar-rounded ${activity.color}`}>
                            <i className={`ti ${activity.icon} fs-18`}></i>
                          </span>
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex flex-wrap flex-xxl-nowrap gap-1">
                            <div className="flex-grow-1">
                              <p className="mb-1 fs-14 fw-medium">{activity.title}</p>
                              <p className="text-muted fs-12 mb-0">{activity.description}</p>
                            </div>
                            <div className="ms-auto text-end flex-shrink-0">
                              <p className="text-muted fs-11 mb-0">{activity.user && `${activity.user} -`} <span className="d-block">{activity.timeAgo}</span></p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={5}>
              <Card className="custom-card">
                <Card.Header className="justify-content-between">
                  <div className="card-title">
                    Upcoming Meetings
                  </div>
                  <Link href="#!" scroll={false} className="btn btn-primary-light btn-wave btn-sm waves-effect waves-light">View All</Link>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled list-group my-1">
                    {Upcomingdata.map((event, index) => (
                      <li key={index} className={`list-group-item border-0 p-0 ${event.cardClass}`}>
                        <div className="d-flex align-items-center gap-3 text-truncate">
                          <div className="avatar bg-light border text-muted flex-shrink-0 flex-column">
                            <div className="fs-11">{event.date}</div>
                            <span className="fs-11">{event.month}</span>
                          </div>
                          <div className="text-truncate">
                            <div className="fw-medium text-truncate w-75">{event.title}</div>
                            <div className="fs-12 text-truncate w-75 text-muted">{event.description}</div>
                          </div>
                          <div className="text-muted ms-auto fs-12">{event.time}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <!-- End::row-3 --> */}

      {/* <!-- Start::row-4 --> */}
      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Recent Deals Status
              </div>
              <div>
                <SpkButton Buttonvariant='primary-light' Customclass='btn-sm' Buttontype="button">View Details</SpkButton>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <SpkTables tableClass='table-bordered table-hover' header={[{ title: 'Deal ID' }, { title: 'Client' }, { title: 'Deal Value' }, { title: 'Deal Status' }, { title: 'Closing Date' }, { title: 'Salesperson' }, { title: 'Actions' }]} >
                  {Dealsdata.map((row, index) => (
                    <tr key={index}>
                      <td className="fw-medium">{row.id}</td>
                      <td>
                        <div className="d-flex gap-2 align-items-center">
                          <span className="avatar avatar-xs flex-shrink-0 avatar-rounded bg-secondary-transparent">
                            <Image width={20} height={20} src={row.companyLogo} alt={row.companyName} />
                          </span>
                          <div className="fw-medium">{row.companyName}</div>
                        </div>
                      </td>
                      <td className="fw-medium fs-14">{row.revenue}</td>
                      <td>
                        <span className={`badge ${row.status === 'Closed' ? 'bg-success' : row.status === 'In Progress' ? 'bg-warning' : row.status === 'Lost' ? 'bg-danger' : 'bg-primary'}`}>
                          {row.status}
                        </span>
                      </td>
                      <td>{row.date}<i className="ri-calendar-check-line text-pink fs-14 ms-1"></i></td>
                      <td>
                        <div className="d-flex gap-2 align-items-center">
                          <span className="avatar avatar-xs flex-shrink-0 avatar-rounded">
                            <Image width={20} height={20} src={row.employeeImage} alt={row.employeeName} />
                          </span>
                          <div className="fw-medium">{row.employeeName}</div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex gap-2 align-items-center">
                          <SpkTooltips placement="top" title="View">
                            <Link href="#!" scroll={false} className="btn btn-sm btn-icon btn-primary">
                              <i className="ti ti-eye fs-16 align-middle"></i>
                            </Link>
                          </SpkTooltips>
                          <SpkTooltips placement="top" title="Download">
                            <Link href="#!" scroll={false} className="btn btn-sm btn-icon btn-success">
                              <i className="ti ti-download fs-16 align-middle"></i>
                            </Link>
                          </SpkTooltips>
                        </div>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End::row-4 --> */}

    </Fragment>
  )
}

export default Crm;
