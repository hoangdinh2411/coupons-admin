"use client"

import SpkAnalyticscard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-analyticscard';
import Spkapexcharts from '@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown';
import { AnalyticsData, AudienceOptions, AudienceSeries, AvgSessionsOptions, AvgSessionsSeries, BounceOptions, BounceSeries, BrowsersData, ImpressionOptions, ImpressionSeries, SessionsOptions, SessionsSeries, VisitorscountryData, VisitorstrafficData } from '@/shared/data/dashboards/analyticsdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import React, { Fragment } from 'react'
import { Card, Col, Dropdown, Pagination, ProgressBar, Row } from 'react-bootstrap';

interface AnalyticsProps {}

const Analytics: React.FC<AnalyticsProps> = () => {

  return (

    <Fragment>

      {/* <!-- Page Header --> */}

      <Seo title="Dashboards-Analytics" />

      <Pageheader title="Dashboards" currentpage="Analytics" activepage="Analytics" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start::row-1 --> */}
      <Row>
        <Col xxl={7}>
          <Row>
            <Col xl={5} className="col-xl-5">
              {AnalyticsData.map((idx, index) => (
                <SpkAnalyticscard key={index} analytics={idx} />
              ))}
            </Col>
            <div className="col-xl-7">
              <Card className="card custom-card">
                <Card.Header className=" justify-content-between">
                  <div className="card-title">
                    Audience Overview
                  </div>
                  <div>
                    <SpkButton Buttonvariant='primary-light' Customclass='btn-wave btn-sm' Buttontype="button">
                      <i className="ri-share-forward-line me-1 align-middle d-inline-block"></i>Export
                    </SpkButton>
                  </div>
                </Card.Header>
                <Card.Body className="pb-0">
                  <div id="audienceReport">
                    <Spkapexcharts chartOptions={AudienceOptions} chartSeries={AudienceSeries} type={"line"} height={328} width={"100%"} />
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Row>
        </Col>
        <Col xxl={5}>
          <Row>
            <div className="col-xxl-7 col-lg-6">
              <Card className="card custom-card">
                <Card.Header className=" justify-content-between">
                  <div className="card-title">Impression Overview</div>
                  <div>
                    <SpkButton Buttonvariant='primary-light' Customclass='btn-sm' Buttontype="button">View Details</SpkButton>
                  </div>
                </Card.Header>
                <Card.Body className=" px-0 pt-0 pb-0">
                  <div id="impression" className="my-2 py-1">
                    <Spkapexcharts chartOptions={ImpressionOptions} chartSeries={ImpressionSeries} type={"donut"} height={237} width={"100%"} />
                  </div>
                  <div className="pb-2 p-3 my-1">
                    <div className="row mb-3 gy-2 gy-md-0">
                      <div className="col-md-6 col-12 d-flex gap-2 align-items-center flex-wrap">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" className="avatar flex-shrink-0 avatar-sm avatar-rounded p-1 bg-primary-transparent text-primary" viewBox="0 0 24 24">
                          <rect width="16" height="12" x="4" y="6" fill="currentColor" fillOpacity="0.3" rx="2" />
                          <path fill="currentColor" d="M4 16V9.243a.15.15 0 0 1 .217-.134l6.441 3.22a3 3 0 0 0 2.684 0l6.44-3.22a.15.15 0 0 1 .218.134V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" />
                        </svg>
                        <div>
                          <div className="fw-medium text-muted">Email:</div>
                        </div>
                        <span className="fw-semibold fs-15 ms-auto">1800</span>
                      </div>
                      <div className="col-md-6 col-12 d-flex gap-2 align-items-center flex-wrap">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" className="avatar flex-shrink-0 avatar-sm avatar-rounded p-1 bg-success-transparent text-success" viewBox="0 0 24 24">
                          <g fill="none" stroke="currentColor" strokeWidth="1.2">
                            <circle cx="11" cy="11" r="6" fill="currentColor" fillOpacity="0.3" />
                            <path strokeLinecap="round" d="M11 8a3 3 0 0 0-3 3m12 9l-3-3" />
                          </g>
                        </svg>
                        <div>
                          <div className="fw-medium text-muted">Search:</div>
                        </div>
                        <span className="fw-semibold fs-15 ms-auto">987</span>
                      </div>
                    </div>
                    <div className="row gy-2 gy-md-0">
                      <div className="col-md-6 col-12 d-flex gap-2 align-items-center flex-wrap">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" className="avatar flex-shrink-0 avatar-sm avatar-rounded p-1 bg-secondary-transparent text-secondary" viewBox="0 0 24 24">
                          <path fill="currentColor" fillOpacity="0.3" d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z" />
                          <circle cx="17" cy="7" r="1" fill="currentColor" /><circle cx="12" cy="12" r="3" fill="currentColor" />
                        </svg>
                        <div>
                          <div className="fw-medium text-muted">Social:</div>
                        </div>
                        <span className="fw-semibold fs-15 ms-auto">752</span>
                      </div>
                      <div className="col-md-6 col-12 d-flex gap-2 align-items-center flex-wrap">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" className="avatar flex-shrink-0 avatar-sm avatar-rounded p-1 bg-info-transparent text-info" viewBox="0 0 24 24">
                          <g fill="none">
                            <path fill="currentColor" fillOpacity="0.3" fillRule="evenodd" d="M2.455 11.116C3.531 9.234 6.555 5 12 5c5.444 0 8.469 4.234 9.544 6.116c.221.386.331.58.32.868c-.013.288-.143.476-.402.852C20.182 14.694 16.706 19 12 19s-8.182-4.306-9.462-6.164c-.26-.376-.39-.564-.401-.852c-.013-.288.098-.482.318-.868M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clipRule="evenodd" /><path stroke="currentColor" strokeWidth="1.2" d="M12 5c-5.444 0-8.469 4.234-9.544 6.116c-.221.386-.331.58-.32.868c.013.288.143.476.402.852C3.818 14.694 7.294 19 12 19s8.182-4.306 9.462-6.164c.26-.376.39-.564.401-.852s-.098-.482-.319-.868C20.47 9.234 17.444 5 12 5Z" />
                            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" />
                          </g>
                        </svg>
                        <div>
                          <div className="fw-medium text-muted">Direct:</div>
                        </div>
                        <span className="fw-semibold fs-15 ms-auto">368</span>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <Col xxl={5} lg={6}>
              <Card className=" custom-card bg-primary text-fixed-white analytics-card">
                <div className="p-4 text-center text-fixed-white">
                  <Image fill src="../../assets/images/media/media-70.png" alt="" className="img-fluid mb-4 py-2" />
                  <p className="fw-medium mb-3 fs-18">
                    Unlock Premium Features for Enhanced Performance
                  </p>
                  <p className="fw-medium mb-4 op-5 text-fixed-white fs-12">
                    Upgrade now to access advanced tools and boost productivity.
                  </p>
                  <div className="btn btn-success mb-2">
                    <i className="ti ti-crown fs-16 text-secondary fw-semibold me-1 align-middle"></i>Upgrade to Pro
                  </div>
                </div>
                <div className="circles">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <!-- End::row-1 --> */}

      {/* <!-- Start::row-2 --> */}
      <Row>
        <Col xxl={3}>
          <Card className="custom-card">
            <Card.Header className=" justify-content-between">
              <div className="card-title">
                Activity
              </div>
            </Card.Header>
            <Card.Body>
              <div className="mb-2">
                <div className="d-flex mb-3 gap-2 align-items-center">
                  <div className="avatar avatar-md flex-shrink-0 avatar-rounded bg-danger-transparent">
                    <i className="ri ri-error-warning-line fs-15"></i>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex mb-1">
                      <div>Session Time</div>
                      <div className="ms-auto fs-14 fw-semibold"><span className="fs-12 text-muted fw-medium">Avg. Time:</span> 3m 1s</div>
                    </div>
                    <ProgressBar className="progress progress-md p-1">
                      <ProgressBar className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" now={55}> </ProgressBar>
                    </ProgressBar>
                  </div>
                </div>
                <div className="d-flex mb-3 gap-2 align-items-center">
                  <div className="avatar avatar-md flex-shrink-0 avatar-rounded bg-secondary-transparent">
                    <i className="ri ri-map-pin-line fs-15"></i>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex mb-1">
                      <div>Geo Area</div>
                      <div className="ms-auto fs-14 fw-semibold"><span className="fs-12 text-muted fw-medium">Top Location:</span> USA</div>
                    </div>
                    <ProgressBar className="progress progress-md p-1">
                      <ProgressBar className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" now={70}> </ProgressBar>
                    </ProgressBar>
                  </div>
                </div>
                <div className="d-flex mb-3 gap-2 align-items-center">
                  <div className="avatar avatar-md flex-shrink-0 avatar-rounded bg-purple-transparent">
                    <i className="ri ri-time-line fs-15"></i>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex mb-1">
                      <div>Bounce rate</div>
                      <div className="ms-auto fs-14 fw-semibold"><span className="fs-12 text-muted fw-medium">Rate:</span> 45%</div>
                    </div>
                    <ProgressBar className="progress progress-md p-1">
                      <ProgressBar className="progress-bar progress-bar-striped progress-bar-animated bg-purple" role="progressbar" now={45}></ProgressBar>
                    </ProgressBar>
                  </div>
                </div>
                <div className="d-flex mb-3 gap-2 align-items-center">
                  <div className="avatar avatar-md flex-shrink-0 avatar-rounded bg-success-transparent">
                    <i className="ri ri-walk-line fs-15"></i>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex mb-1">
                      <div>Returning-visitors</div>
                      <div className="ms-auto fs-14 fw-semibold"><span className="fs-12 text-muted fw-medium">Return:</span>1,250 </div>
                    </div>
                    <ProgressBar className="progress progress-md p-1">
                      <ProgressBar className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" now={60} />
                    </ProgressBar>
                  </div>
                </div>
                <div className="d-flex mb-3 gap-2 align-items-center">
                  <div className="avatar avatar-md flex-shrink-0 avatar-rounded bg-info-transparent">
                    <i className="ri ri-user-add-line fs-15"></i>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex mb-1">
                      <div>New-users</div>
                      <div className="ms-auto fs-14 fw-semibold"><span className="fs-12 text-muted fw-medium">Users: </span>500 </div>
                    </div>
                    <ProgressBar className="progress progress-md p-1">
                      <ProgressBar className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" now={40} />
                    </ProgressBar>
                  </div>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <div className="avatar avatar-md flex-shrink-0 avatar-rounded bg-warning-transparent">
                    <i className="ri ri-cursor-line fs-15"></i>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex mb-1">
                      <div>New-clicks</div>
                      <div className="ms-auto fs-14 fw-semibold"><span className="fs-12 text-muted fw-medium">Clicks: </span>800 </div>
                    </div>
                    <ProgressBar className="progress progress-md p-1">
                      <ProgressBar className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" now={50} />
                    </ProgressBar>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={5}>
          <Row>
            <Col xl={6}>
              <Card className="custom-card overflow-hidden">
                <Card.Body className=" mb-2 p-4">
                  <div className="mb-3 fs-16 fw-semibold">Bounce Rate :</div>
                  <div className="d-flex gap-3 flex-wrap align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" className="text-primary bg-primary-transparent rounded-1 px-1" viewBox="0 0 24 24"><g fill="currentColor"><path fillOpacity="0.5" d="M8 13h6v4H8z"></path><path d="M6 6H4v12h2zm14 1H8v4h12z"></path></g></svg>
                    <div>
                      <h6 className="fw-medium mb-0">76.5%</h6>
                    </div>
                    <div className="ms-auto text-muted fs-11 text-end">
                      <div className="fw-medium"> From Last Month</div>
                      <span className="text-success fw-semibold"> 5.3% <i className="ri-arrow-up-line lh-1 align-center fs-14 fw-normal"></i></span>
                    </div>
                  </div>
                </Card.Body>
                <div id="analytics-bouncerate" className="mt-1 w-100">
                  <Spkapexcharts chartOptions={BounceOptions} chartSeries={BounceSeries} type={"line"} height={66} />
                </div>
              </Card>
              <Card className="custom-card overflow-hidden">
                <Card.Body className=" mb-2 p-4">
                  <div className="mb-3 fs-16 fw-semibold">Sessions :</div>
                  <div className="d-flex gap-3 flex-wrap align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" className="text-success bg-success-transparent rounded-1 px-1" viewBox="0 0 24 24"><g fill="currentColor"><path fillOpacity="0.5" d="M8 13h6v4H8z"></path><path d="M6 6H4v12h2zm14 1H8v4h12z"></path></g></svg>
                    <div>
                      <h6 className="fw-medium mb-0">33.5K</h6>
                    </div>
                    <div className="ms-auto text-muted fs-11 text-end">
                      <div className="fw-medium"> From Last Month</div>
                      <span className="text-danger fw-semibold"> 1.25% <i className="ri-arrow-down-line lh-1 align-center fs-14 fw-normal"></i></span>
                    </div>
                  </div>
                </Card.Body>
                <div id="analytics-session" className="mt-1 w-100">
                  <Spkapexcharts chartOptions={SessionsOptions} chartSeries={SessionsSeries} type={"area"} height={66} />
                </div>
              </Card>
            </Col>
            <Col xl={6}>
              <Card className="custom-card overflow-hidden">
                <Card.Body className=" p-4 pb-2">
                  <div className="mb-3 fs-16 fw-semibold">Avg sessions :</div>
                  <div className="d-flex gap-3 flex-wrap align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" className="text-primary bg-primary-transparent rounded-1 px-1" viewBox="0 0 24 24"><g fill="currentColor"><path fillOpacity="0.5" d="M8 13h6v4H8z"></path><path d="M6 6H4v12h2zm14 1H8v4h12z"></path></g></svg>
                    <div>
                      <h6 className="fw-medium mb-0">3m 45s</h6>
                    </div>
                    <div className="ms-auto text-muted fs-11 text-end">
                      <div className="fw-medium"> From Last Week</div>
                      <span className="text-success fw-semibold"> 1.25% <i className="ri-arrow-up-line lh-1 align-center fs-14 fw-normal"></i></span>
                    </div>
                  </div>
                  <div id="analytics-avgsession" className="mt-4 w-100">
                    <Spkapexcharts chartOptions={AvgSessionsOptions} chartSeries={AvgSessionsSeries} type={"bar"} height={278} width={"100%"} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xxl={4}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className=" justify-content-between">
              <div className="card-title">
                Browser Usage
              </div>
              <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="View All" Customtoggleclass="btn-sm btn-wave fw-normal py-0 fs-12 text-muted">
                <Dropdown.Item as="li" href="#!">Download</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Import</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Export</Dropdown.Item>
              </SpkDropdown>
            </Card.Header>
            <Card.Body className="">
              <div className="table-responsive">
                <SpkTables tableClass='table-hover text-nowrap table-bordered' header={[{ title: 'Browser' }, { title: 'Sessions' }, { title: 'Traffic (%)' }, { title: 'Bounce (%)' }]} >
                  {BrowsersData.map((data, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className={`avatar avatar-rounded avatar-sm p-2 bg-${data.bgColor} me-2`}>
                            <i className={`${data.icon} fs-18 text-${data.iconColor}`}></i>
                          </span>
                          <div className="fw-semibold">{data.name}</div>
                        </div>
                      </td>
                      <td>
                        <span>
                          {data.usage}
                          <i className={`ri-arrow-${data.trend}-fill ms-1 text-${data.trend === 'up' ? 'success' : 'danger'} align-middle fs-14`}></i>
                        </span>
                      </td>
                      <td>
                        {data.progress}%
                        <ProgressBar className="progress progress-xs">
                          <ProgressBar className="progress-bar bg-primary" role="progressbar" now={data.progress} aria-valuenow={data.progress} aria-valuemin={0} aria-valuemax={100}
                          />
                        </ProgressBar>
                      </td>
                      <td>
                        {data.changePercentage}
                        <span className={`badge ${data.trend === 'up' ? 'bg-success' : 'bg-danger-transparent'} align-middle ms-2`}>
                          {data.changePercentage}
                        </span>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End::row-2 --> */}

      {/* <!-- Start::row-3 --> */}
      <Row>
        <Col xxl={9}>
          <Card className="custom-card">
            <Card.Header className=" justify-content-between">
              <div className="card-title">
                Visitors by Channel
              </div>
              <div className="d-flex flex-wrap align-items-center">
                <div className="me-3 my-1">
                  <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                </div>
                <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="Sort By" Customtoggleclass="my-2 btn-primary btn-sm btn-wave waves-effect waves-light">
                  <Dropdown.Item as="li" href="#!">New</Dropdown.Item>
                  <Dropdown.Item as="li" href="#!">Popular</Dropdown.Item>
                  <Dropdown.Item as="li" href="#!">Relevant</Dropdown.Item>
                </SpkDropdown>

              </div>
            </Card.Header>
            <Card.Body className="">
              <div className="table-responsive">
                <SpkTables tableClass='table-hover text-nowrap table-bordered' header={[{ title: 'S.No' }, { title: 'Channel' }, { title: 'Sessions' }, { title: 'Bounce Rate' }, { title: 'Avg Session Duration' }, { title: 'Goal Completed' }, { title: 'Pages/Visit' }, { title: '% Change' }]} >
                  {VisitorstrafficData.map((data) => (
                    <tr key={data.id}>
                      <th scope="row">{data.id}</th>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className={`avatar avatar-sm bg-${data.color}-transparent avatar-rounded`}>
                            <i className={`ri ${data.icon} fs-15 fw-semibold text-${data.color}`}></i>
                          </span>
                          <span className="ms-2">{data.source}</span>
                        </div>
                      </td>
                      <td className={`${data.trafficColor}`}>{data.traffic}</td>
                      <td className={`${data.percentageColor}`}>{data.percentage}</td>
                      <td className={`${data.durationColor}`}>{data.duration}</td>
                      <td className="text-center">
                        <span className={`badge bg-${data.badgeColor}`}>{data.badgeCount}</span>
                      </td>
                      <td>{data.score}</td>
                      <td>
                        <span className={`fw-semibold text-${data.change.startsWith('+') ? 'success' : 'danger'}`}>
                          {data.change}
                        </span>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex align-items-center pt-1">
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
            <Card.Header className=" justify-content-between">
              <div className="card-title">
                Visitors by Region
              </div>
              <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="View All" Customtoggleclass="p-2 fs-12 text-muted">
                <Dropdown.Item as="li" href="#!">Day</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Month</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Year</Dropdown.Item>
              </SpkDropdown>
            </Card.Header>
            <Card.Body className="">
              <div className="d-flex align-items-center p-3 bg-primary text-fixed-white rounded mb-4">
                <div>
                  <p className="mb-2 fs-13">Top Visitors</p>
                  <div className="d-flex gap-3 align-items-end">
                    <h4 className="mb-0 text-fixed-white">3,254</h4>
                    <div>
                      <span className="fw-semibold fs-12 mb-0 ms-1">+ 1.03%</span>
                      <span className="op-7 fw-medium fs-12"> last month</span>
                    </div>
                  </div>
                </div>
                <div className="ms-auto">
                  <span className="avatar avatar-md">
                    <Image width={40} height={40} src="../../assets/images/flags/us_flag.jpg" alt="" />
                  </span>
                </div>
              </div>
              <ul className="list-unstyled mb-0 analytics-visitors-countries">
                {VisitorscountryData.map((country) => (
                  <li key={country.id} className={`${country.liClass}`}>
                    <div className="d-flex align-items-center">
                      <div className="lh-1">
                        <span className="avatar avatar-sm avatar-rounded text-default">
                          <Image width={20} height={20} src={`../../assets/images/flags/${country.flag}`} alt={`${country.name} Flag`} />
                        </span>
                      </div>
                      <div className="ms-3 flex-fill lh-1">
                        <span className="fs-14 fw-medium">{country.name}</span>
                      </div>
                      <div>
                        <span className="text-default badge bg-light fw-medium mt-2 fs-11">{country.traffic}</span>
                        <span className={`fw-semibold fs-11 mb-0 ms-1 ${country.change.startsWith('+') ? 'text-success' : 'text-danger'}`}>
                          {country.change}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End::row-3 --> */}

    </Fragment>
  )
}

export default Analytics;
