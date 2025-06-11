"use client"

import SpkHrmcard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-hrmcard';
import Spkapexcharts from '@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkButtongroup from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown';
import { Acquisitionsdata, Billsdata, EmployeeData, Hiringdata, HiringOptions, HiringSeries, HrmCarddata, PerformanceOptions, PerformanceSeries, RecentJobApplicationsdata, UpcomingInterviewsdata } from '@/shared/data/dashboards/hrmdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card, Col, Dropdown, Pagination, ProgressBar, Row } from 'react-bootstrap';

interface HrmProps {}

const Hrm: React.FC<HrmProps> = () => {

  return (

    <Fragment>

      {/* <!-- Page Header --> */}

      <Seo title="Dashboards-HRM" />

      <Pageheader title="Dashboards" currentpage="HRM" activepage="HRM" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start::row-1 --> */}

      <Row className="row">
        <Col xxl={9}>
          <Row className="row">
            {HrmCarddata.map((idx, index) => (
              <Col xl={3} key={index}>
                <SpkHrmcard hrm={idx} />
              </Col>
            ))}
            <Col xxl={7}>
              <Card className="custom-card">
                <div className="card-header justify-content-between align-items-center d-sm-flex d-block">
                  <div className="card-title mb-sm-0 mb-2">
                    Performance By Category
                  </div>
                  <SpkButtongroup Customclass="flex-wrap" Buttongrplabel="Basic example">
                    <SpkButton Buttonvariant="primary-light" Buttontype="button">1W</SpkButton>
                    <SpkButton Buttonvariant="primary-light" Buttontype="button">1M</SpkButton>
                    <SpkButton Buttonvariant="primary-light" Buttontype="button">6M</SpkButton>
                    <SpkButton Buttonvariant="primary" Buttontype="button">1Y</SpkButton>
                  </SpkButtongroup>
                </div>
                <Card.Body>
                  <div id="performanceReport">
                    <Spkapexcharts chartOptions={PerformanceOptions} chartSeries={PerformanceSeries} type={"bar"} height={321} width={"100%"} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={5}>
              <Card className="custom-card overflow-hidden">
                <div className="card-header justify-content-between align-items-center d-sm-flex d-block">
                  <div className="card-title mb-sm-0 mb-2">
                    Employee Performance
                  </div>
                  <div>
                    <SpkButton Buttonvariant='primary-light' Customclass='btn-sm btn-wave' Buttontype="button">View All</SpkButton>
                  </div>
                </div>
                <Card.Body className="p-0">
                  <div className="table-responsive">
                    <SpkTables tableClass='text-nowrap table-borderless' header={[{ title: 'Name', headerClassname: 'bg-light' }, { title: 'Score', headerClassname: 'bg-light' }, { title: 'Action', headerClassname: 'bg-light' }]} >
                      {EmployeeData.map((employee, index) => (
                        <tr key={index}>
                          <th scope="row">
                            <div className="d-flex align-items-center lh-1">
                              <div className="me-3">
                                <span className="avatar avatar-rounded avatar-sm">
                                  <Image src={employee.avatar} alt={employee.name} height={28} width={28} />
                                </span>
                              </div>
                              <div>
                                <span className="d-block fw-semibold mb-1">{employee.name}</span>
                                <span className="d-block text-muted fs-12">{employee.role}</span>
                              </div>
                            </div>
                          </th>
                          <td>
                            <div className="d-flex align-items-center gap-3 hrm-small-charts">
                              <span className="fs-12 text-muted">Score %:</span>
                              <span className="fw-semibold fs-14">{employee.score}%</span>
                              <div id={`employee${index + 1}`} className="hrm-employee-performance">
                                <Spkapexcharts chartOptions={employee.chartOptions} chartSeries={employee.chartSeries} type={"donut"} height={38} width={38} />
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="btn-list">
                              <button className="btn btn-sm btn-icon btn-primary-light"><i className="ri-pencil-line"></i></button>
                              <button className="btn btn-sm btn-icon btn-success-light"><i className="ri-delete-bin-line"></i></button>
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
        </Col>
        <Col xxl={3}>
          <Card className="custom-card overflow-hidden">
            <Card.Body className="text-center hrm-event-content">
              <Row className="row justify-content-center">
                <Col xl={8}>
                  <p className="fw-semibold mb-2 fs-15">
                    Upcoming Company Event
                  </p>
                  <p className="text-muted fs-12 fw-medium mb-3 ">
                    Join us for the annual team-building retreat on Nov 15th. <Link href="#!" className="text-success fw-medium text-decoration-underline">Create Now</Link>
                  </p>
                </Col>
                <Col xl={5} className="col-5">
                  <Image fill src="../../assets/images/media/media-69.png" alt="" className="img-fluid card-img-top" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>
                Acquisitions
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ProgressBar className="progress progress-xl mb-3">
                <ProgressBar className="progress-bar progress-bar-striped bg-primary" role="progressbar" now={45} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} label="45%" />
                <ProgressBar className="progress-bar progress-bar-striped bg-success" role="progressbar" now={25} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} label="25%" />
                <ProgressBar className="progress-bar progress-bar-striped bg-secondary bg-opacity-25 text-secondary" role="progressbar" now={15} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} label="15%" />
                <ProgressBar className="progress-bar progress-bar-striped bg-info bg-opacity-25 text-info" role="progressbar" now={12} aria-valuenow={12} aria-valuemin={0} aria-valuemax={100} label="12%" />
                <ProgressBar className="progress-bar progress-bar-striped bg-pink" role="progressbar" now={8} aria-valuenow={8} aria-valuemin={0} aria-valuemax={100} label="8%" />
              </ProgressBar>
              <ul className="list-group">
                {Acquisitionsdata.map((item, index) => (
                  <li key={index} className="list-group-item">
                    <i className={`${item.icon} me-2 ${item.color}`}></i>
                    <span className="fw-medium">{item.title}</span>
                    <span className={`badge float-end ${item.badgeColor}`}>{item.count}</span>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End::row-1 --> */}

      {/* <!-- Start::row-2 --> */}
      <Row className="row">
        <Col xxl={3} xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>
                Hiring Sources
              </Card.Title>
            </Card.Header>
            <div id="hiring-src" className="py-3">
              <Spkapexcharts chartOptions={HiringOptions} chartSeries={HiringSeries} type={"donut"} height={176} width={"100%"} />
            </div>
            <Card.Body>
              <Row className="row-cols-12">
                {Hiringdata.map((item, index) => (
                  <Col key={index} className="p-0">
                    <div className="text-center">
                      <div className="mb-2">
                        <i className={`${item.iconClass} p-2 fs-15 ${item.bgClass} rounded-circle lh-1 align-middle`} />
                      </div>
                      <div className={`text-muted fs-12 mb-1 hrm-jobs-legend ${item.label.toLowerCase()} d-inline-block ms-2`}>
                        {item.label}
                      </div>
                      <div>
                        <span className="fs-16 fw-semibold">{item.count}</span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={5} xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Recent Job Applications</Card.Title>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables tableClass='text-nowrap' header={[{ title: 'Applicant' }, { title: 'Position' }, { title: 'Status' }, { title: 'Applied' }, { title: 'Actions' }]} >
                  {RecentJobApplicationsdata.map((candidate, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center lh-1">
                          <div className="me-2">
                            <span className="avatar avatar-rounded avatar-sm">
                              <Image width={28} height={28} src={candidate.image} alt={candidate.name} />
                            </span>
                          </div>
                          <div className="fw-semibold">{candidate.name}</div>
                        </div>
                      </td>
                      <td className="fs-12 fw-medium">{candidate.position}</td>
                      <td>
                        <span className={`badge bg-${candidate.color}-transparent`}>
                          {candidate.status}
                        </span>
                      </td>
                      <td>{candidate.date}</td>
                      <td> <button className="btn btn-primary-light btn-sm btn-icon me-1"><i className="ri-eye-line"></i></button>
                        <button className="btn btn-danger-light btn-sm btn-icon"><i className="ri-delete-bin-line"></i></button> </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Upcoming Interviews</Card.Title>
            </Card.Header>
            <Card.Body className="p-0 py-1">
              <ul className="list-group list-group-flush my-1">
                {UpcomingInterviewsdata.map((person, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex gap-3 justify-content-between align-items-center flex-wrap"
                  >
                    <span className="avatar avatar-rounded flex-shrink-0 avatar-md">
                      <Image width={40} height={40} src={person.image} alt={person.name} />
                    </span>
                    <div>
                      <strong>{person.name}</strong><br />
                      <small className="text-muted">Position: {person.position}</small>
                    </div>
                    <div className="align-self-end">
                      <span className={`badge ${person.badgeClass} fs-11 fw-medium`}>{person.time}</span>
                    </div>
                    <div className="fw-medium fs-12 ms-auto">
                      <i className="ri-calendar-check-line text-pink fs-14 me-1"></i>
                      Date: {person.date}
                    </div>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End::row-2 --> */}

      {/* <!-- Start::row-3 --> */}
      <Row className="row">
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between flex-wrap">
              <Card.Title>
                Bills Summary
              </Card.Title>
              <div className="d-flex flex-wrap gap-2">
                <div className="me-3">
                  <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                </div>
                <SpkDropdown Id="dropdownMenuButton1" Togglevariant="primary" Menulabel="dropdownMenuButton1" Toggletext="Sort By" Customtoggleclass="btn-sm btn-wave waves-effect waves-light">
                  <Dropdown.Item as="li" href="#!">New</Dropdown.Item>
                  <Dropdown.Item as="li" href="#!">Popular</Dropdown.Item>
                  <Dropdown.Item as="li" href="#!">Relevant</Dropdown.Item>
                </SpkDropdown>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <SpkTables tableClass='table-hover text-nowrap table-bordered' header={[{ title: 'Bill ID' }, { title: 'Employee Name' }, { title: 'Department' }, { title: 'Bill Amount' }, { title: 'Status' }, { title: 'Due Date' }, { title: 'Payment Method' }, { title: 'Actions' }]} >
                  {Billsdata.map((payment, index) => (
                    <tr key={index}>
                      <td>{payment.id}</td>
                      <td>
                        <div className="d-flex align-items-center lh-1">
                          <div className="me-2">
                            <span className="avatar avatar-sm avatar-rounded">
                              <Image width={28} height={28}  src={payment.avatar} alt={payment.name} />
                            </span>
                          </div>
                          <div>
                            <span className="d-block fw-semibold mb-1">{payment.name}</span>
                            <span className="text-muted fs-12">{payment.email}</span>
                          </div>
                        </div>
                      </td>
                      <td className={`text-${payment.positionColor} fw-medium`}>{payment.position}</td>
                      <td className="fw-semibold">{payment.amount}</td>
                      <td>
                        <span className={`badge bg-${payment.color}-transparent`}>
                          {payment.status}
                        </span>
                      </td>
                      <td>{payment.date}</td>
                      <td>
                        <i className={`ri-${payment.paymentCard} me-1 fs-14 text-${payment.paymentColor}`}></i>
                        {payment.paymentMethod}
                      </td>
                      <td>
                        <button className="btn btn-primary-light btn-sm btn-icon me-1" type="button">
                          <i className="ri-eye-line"></i>
                        </button>
                        <button className="btn btn-success-light btn-sm btn-icon me-1" type="button">
                          <i className="ri-edit-line"></i>
                        </button>
                        <button className="btn btn-danger-light btn-sm btn-icon" type="button">
                          <i className="ri-delete-bin-line"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
            <Card.Footer>
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
      </Row>
      {/* <!-- End::row-3 --> */}

    </Fragment>
  )
}

export default Hrm;
