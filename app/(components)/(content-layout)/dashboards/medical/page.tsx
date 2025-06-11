"use client"

import SpkMedicalcard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-medicalcard';
import Spkapexcharts from '@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkButtongroup from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown';
import { DoctorsList, MedicalCard, MedicalrevenueOptions, MedicalrevenueSeries, PatientsOptions, PatientsSeries, Patientsdata, Treatmentsdata, Upcomingdata, Upcomingdata1, Upcomingdata2 } from '@/shared/data/dashboards/medicaldata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card, Col, Dropdown, Nav, Pagination, Row, Tab } from 'react-bootstrap';

interface MedicalProps {}

const Medical: React.FC<MedicalProps> = () => {

  return (

    <Fragment>

      {/* <!-- Page Header --> */}

      <Seo title="Dashboards-Medical" />

      <Pageheader title="Dashboards" currentpage="Medical" activepage="Medical" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start::Row-1 --> */}
      <Row>
        {MedicalCard.map((idx, index) => (
          <Col xxl={3} xl={6} key={index}>
            <SpkMedicalcard medical={idx} />
          </Col>
        ))}
      </Row>
      {/* <!-- End::Row-1 --> */}

      {/* <!-- Start::Row-2 --> */}
      <Row>
        <Col xl={5}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Doctors List
              </Card.Title>
              <SpkButton Buttonvariant='light' Customclass='btn-sm' Buttontype="button">View All<i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
            </Card.Header>
            <Card.Body className=" p-0">
              <div className="table-responsive">
                <SpkTables tableClass='text-nowrap' headerClass='bg-light' header={[{ title: 'Doctor', headerClassname: 'bg-light' }, { title: 'Status', headerClassname: 'bg-light' }, { title: 'Specialization', headerClassname: 'bg-light' }, { title: 'Action', headerClassname: 'bg-light' }]} >
                  {DoctorsList.map((doctor) => (
                    <tr key={doctor.id}>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <Image width={28} height={28} src={doctor.image} alt={doctor.name} className="avatar avatar-sm avatar-rounded" />
                          <div>
                            <span className="d-block fw-semibold lh-1">{doctor.name}</span>
                            <span className="text-muted fs-12">{doctor.qualifications}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span
                          className={`badge ${doctor.status === 'Available'
                            ? 'bg-success-transparent'
                            : doctor.status === 'Busy'
                              ? 'bg-warning-transparent'
                              : 'bg-danger-transparent'
                            }`}
                        >
                          {doctor.status}
                        </span>
                      </td>
                      <td>
                        <span className="fw-medium">{doctor.specialty}</span>
                      </td>
                      <td>
                        <div className="btn-list">
                          <Link scroll={false} aria-label="anchor" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View" className="btn btn-icon btn-sm rounded-pill btn-primary-light"><i className="ti ti-eye"></i></Link>
                          <Link scroll={false} aria-label="anchor" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Call" className="btn btn-icon btn-sm rounded-pill btn-secondary-light"> <i className="ti ti-phone"></i></Link>
                          <Link scroll={false} aria-label="anchor" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Delete" className="btn btn-icon btn-sm rounded-pill btn-danger-light"><i className="ti ti-trash"></i></Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={7}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Revenue Statistics
              </Card.Title>
              <SpkButtongroup Customclass="flex-wrap" Buttongrplabel="Basic example">
                <SpkButton Buttonvariant="primary" Buttontype="button">1M</SpkButton>
                <SpkButton Buttonvariant="primary-light" Buttontype="button">6M</SpkButton>
                <SpkButton Buttonvariant="primary-light" Buttontype="button">1Y</SpkButton>
              </SpkButtongroup>
            </Card.Header>
            <Card.Body className=" pb-2">
              <div className="p-3 bg-light d-flex gap-2 rounded align-items-center flex-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="flex-shrink-0 text-primary bg-primary-transparent rounded-circle" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path></svg>
                <div>
                  <h5 className="mb-0ld">$87,847.00</h5>
                  <div className="fw-medium text-muted">Total Revenue
                  </div>
                </div>
                <span className="fw-normal ms-1 badge bg-success ms-auto"> + 5.03% <i className="ri-arrow-up-s-fill"></i></span>
              </div>
              <div id="medical-revenue">
                <Spkapexcharts chartOptions={MedicalrevenueOptions} chartSeries={MedicalrevenueSeries} type={"bar"} height={336} width={"100%"} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End::Row-2 --> */}

      {/* <!-- Start::Row-3 --> */}
      <Row>
        <Col xxl={4} xl={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Patients Visits
              </Card.Title>
              <SpkDropdown Id="dropdownMenuButton1" Togglevariant="light" Menulabel="dropdownMenuButton1" Toggletext="This Week" Customtoggleclass="btn-sm text-muted">
                <Dropdown.Item as="li" href="#!">Today</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">This Week</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Last Week</Dropdown.Item>
              </SpkDropdown>
            </Card.Header>
            <Card.Body className=" ps-xl-0">
              <Row className=" align-items-center gx-xxl-0">
                <Col xl={8}>
                  <div id="patientsdailyvisit">
                    <Spkapexcharts chartOptions={PatientsOptions} chartSeries={PatientsSeries} type={"radialBar"} height={282} width={"100%"} />
                  </div>
                </Col>
                <Col xl={4}>
                  <div className="p-2 border-primary border-opacity-10 border border-dashed rounded-2 mb-4">
                    <div className="d-flex gap-2 align-items-start mb-1 justify-content-between">
                      <div>
                        <span className="avatar avatar-md avatar-rounded mb-3 bg-primary">
                          <i className="ti ti-gender-female fs-18"></i>
                        </span>
                        <div className="fw-medium">Female</div>
                      </div>
                      <div className="fs-18 fw-medium text-primary py-2 pe-2">15.5k</div>
                    </div>
                    <span className="text-muted fw-medium fs-12 opacity-1">from last month </span>
                    <span className="text-danger fw-medium fs-13 mb-2">
                      <i className="ti ti-arrow-down"></i>1.6%
                    </span>
                  </div>
                  <div className="p-2 border-success border-opacity-10 border border-dashed rounded-2">
                    <div className="d-flex gap-2 align-items-start mb-1 justify-content-between">
                      <div>
                        <span className="avatar avatar-md avatar-rounded mb-3 bg-success">
                          <i className="ti ti-gender-male fs-18"></i>
                        </span>
                        <div className="fw-medium">Male</div>
                      </div>
                      <div className="fs-18 fw-medium text-success py-2 pe-2">10.2k</div>
                    </div>
                    <span className="text-muted fw-medium fs-12 opacity-1">from last month </span>
                    <span className="text-danger fw-medium fs-13 mb-2">
                      <i className="ti ti-arrow-down"></i>1.6%
                    </span>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4} xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>Upcoming Appointments</Card.Title>
              <SpkDropdown Id="dropdownMenuButton1" Togglevariant="light" Menulabel="dropdownMenuButton1" Toggletext="View All" Customtoggleclass="border btn-full btn-sm">
                <Dropdown.Item as="li" href="#!">Download</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Import</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Export</Dropdown.Item>
              </SpkDropdown>
            </Card.Header>
            <Card.Body>
              <div className="upcoming-shedule">
                <Tab.Container defaultActiveKey={"day02"}>
                  <Nav className="nav nav-pills mb-3 justify-content-center gap-4 align-items-center pb-1" role="tablist">
                    <li>
                      <Link scroll={false} className="text-center text-muted fs-12" href="#!">
                        <i className="ri-arrow-left-line fw-normal me-1"></i>Back
                      </Link>
                    </li>
                    <Nav.Item className="fw-medium" role="presentation">
                      <Nav.Link eventKey={"day01"} href="#day01" className="nav-link sh-link text-center med-upcoming rounded-circle" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}>
                        <p className="sh-dt mb-0">01</p>
                        <span className="sh-day">Thu</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="fw-medium" role="presentation">
                      <Nav.Link eventKey={"day02"} href="#day02" className="nav-link sh-link text-center med-upcoming rounded-circle" data-bs-toggle="tab" aria-selected="true" role="tab">
                        <p className="sh-dt mb-0">02</p>
                        <span className="sh-day">Fri</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="fw-medium" role="presentation">
                      <Nav.Link eventKey={"day03"} href="#day03" className="nav-link sh-link text-center med-upcoming rounded-circle" data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex={-1}>
                        <p className="sh-dt mb-0">03</p>
                        <span className="sh-day">Sat</span>
                      </Nav.Link>
                    </Nav.Item>
                    <li>
                      <Link scroll={false} className="text-center fs-12" href="#!">
                        more<i className="ri-arrow-right-line fw-normal ms-1"></i>
                      </Link>
                    </li>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane className="p-0 border-0" id="day01" role="tabpanel" eventKey={"day01"}>
                      <ul className="list-unstyled mb-0 sh-shedule-container">
                        {Upcomingdata.map((schedule) => (
                          <li key={schedule.id} className="list-item">
                            <div className={`sh-shedule d-sm-flex flex-wrap align-items-start gap-2 ${schedule.scheduleClass} border rounded-3 bg-light p-2 bg-opacity-50`}>
                              <span className={`avatar avatar-md ${schedule.color}`}>
                                <i className="ri-calendar-line fs-16"></i>
                              </span>
                              <div className="ms-sm-2 mb-1 mb-sm-0">
                                <p className="mb-sm-1 mb-0 fw-medium">{schedule.title}</p>
                                <span className="text-muted">{schedule.subtitle}</span>
                              </div>
                              <div className="min-w-fit-content d-flex align-items-center text-muted ms-auto">
                                <span><i className="fe fe-clock me-1 fs-13"></i></span>
                                <span>{schedule.startTime}</span>
                                <span className="mx-2 text-muted">-</span>
                                <span>{schedule.endTime}</span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane className="p-0 border-0" id="day02" role="tabpanel" eventKey={"day02"}>
                      <ul className="list-unstyled mb-0 sh-shedule-container">
                        {Upcomingdata1.map((event) => (
                          <li key={event.id} className="list-item">
                            <div className={`sh-shedule d-sm-flex flex-wrap align-items-start gap-2 ${event.eventClass} border rounded-3 bg-light p-2 bg-opacity-50`}>
                              <span className={`avatar avatar-md flex-shrink-0 ${event.avatarColor}`}>
                                <i className="ri-calendar-line fs-16"></i>
                              </span>
                              <div className="ms-sm-2 mb-1 mb-sm-0">
                                <p className="mb-sm-1 mb-0 fw-medium">{event.title}</p>
                                <span className="text-muted">{event.subtitle}</span>
                              </div>
                              <div className="min-w-fit-content d-flex align-items-center text-muted ms-auto">
                                <span><i className="fe fe-clock me-1 fs-13"></i></span>
                                <span>{event.startTime}</span>
                                <span className="mx-2 text-muted">-</span>
                                <span>{event.endTime}</span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane className="p-0 border-0" id="day03" role="tabpanel" eventKey={"day03"}>
                      <ul className="list-unstyled mb-0 sh-shedule-container">
                        {Upcomingdata2.map((item) => (
                          <li key={item.id} className="list-item">
                            <div className={`sh-shedule d-sm-flex flex-wrap align-items-start gap-2 ${item.itemClass} border rounded-3 bg-light p-2 bg-opacity-50`}>
                              <span className={`avatar avatar-md flex-shrink-0 ${item.avatarColor}`}>
                                <i className="ri-calendar-line fs-16"></i>
                              </span>
                              <div className="ms-sm-2 mb-1 mb-sm-0">
                                <p className="mb-sm-1 mb-0 fw-medium">{item.title}</p>
                                <span className="text-muted">{item.subtitle}</span>
                              </div>
                              <div className="min-w-fit-content d-flex align-items-center text-muted ms-auto">
                                <span><i className="fe fe-clock me-1 fs-13"></i></span>
                                <span>{item.startTime}</span>
                                <span className="mx-2 text-muted">-</span>
                                <span>{item.endTime}</span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4} lg={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>Treatments</Card.Title>
              <SpkButton Buttonvariant='light' Customclass='btn-sm' Buttontype="button">View All<i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled my-2">
                {Treatmentsdata.map((specialty) => (
                  <li className={specialty.class} key={specialty.id}>
                    <div className="d-flex align-items-start flex-wrap">
                      <span className={`avatar avatar-md avatar-rounded ${specialty.iconBgColor}`}>
                        <i className={`fs-20 leading-none ${specialty.iconClass}`}></i>
                      </span>
                      <div className="flex-auto ms-3">
                        <span className="fw-semibold mb-0 d-block">{specialty.name}</span>
                        <span className="text-muted mb-0 d-block">{specialty.patientCount}</span>
                      </div>
                      <div className="ms-auto">
                        <div className="d-flex gap-5 align-items-center">
                          <div>
                            <h6 className={`mb-0 fw-semibold ${specialty.successRateColor}`}>{specialty.successRate}</h6>
                            <div className="fs-11 text-muted">Success Rate:</div>
                          </div>
                          <div>
                            <div className="mb-0 fw-medium">{specialty.sessions}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End::Row-3 --> */}

      {/* <!-- Start::Row-4 --> */}
      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Patients List
              </Card.Title>
              <div className="d-flex flex-wrap gap-2">
                <div>
                  <input className="form-control" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                </div>
                <SpkDropdown Id="dropdownMenuButton1" Togglevariant="primary" Menulabel="dropdownMenuButton1" Toggletext="Sort By" Customtoggleclass="btn-sm">
                  <Dropdown.Item as="li" href="#!">New</Dropdown.Item>
                  <Dropdown.Item as="li" href="#!">Popular</Dropdown.Item>
                  <Dropdown.Item as="li" href="#!">Relevant</Dropdown.Item>
                </SpkDropdown>
              </div>
            </Card.Header>
            <Card.Body className=" p-0">
              <div className="table-responsive">
                <SpkTables tableClass='text-nowrap table-striped' header={[{ title: 'S.No', headerClassname: 'text-center' }, { title: 'Patient ID' }, { title: 'Name' }, { title: 'Gender' }, { title: 'Age' }, { title: 'Doctor' }, { title: 'Disease' }, { title: 'Contact' }, { title: 'Appointment' }, { title: 'Room No' }, { title: 'Action' }]} >
                  {Patientsdata.map((patient) => (
                    <tr key={patient.id}>
                      <td className="text-center">{patient.id}</td>
                      <td>{patient.patientId}</td>
                      <td>
                        <div className="d-flex gap-2">
                          <span className="avatar avatar-xs avatar-rounded">
                            <Image width={20} height={20} src={patient.avatar} alt={patient.name} />
                          </span>
                          <div>
                            <span className="fw-medium mb-0 d-flex align-items-center">{patient.name}</span>
                          </div>
                        </div>
                      </td>
                      <td>{patient.gender}</td>
                      <td>{patient.age}</td>
                      <td>{patient.doctor}</td>
                      <td>
                        <span className={`badge bg-${patient.conditionBg}-transparent`}>{patient.condition}</span>
                      </td>
                      <td>
                        <i className="ri-phone-line fs-15 text-pink me-1"></i>
                        {patient.contact}
                      </td>
                      <td>{patient.appointmentDate}</td>
                      <td>{patient.roomNumber}</td>
                      <td>
                        <div className="btn-list">
                          <button className="btn btn-primary-light btn-sm btn-icon">
                            <i className="ri-eye-line"></i>
                          </button>
                          <button className="btn btn-success-light btn-sm btn-icon">
                            <i className="ri-edit-line"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
            <Card.Footer className="border-top-0">
              <div className="d-flex align-items-center">
                <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2ld"></i> </div>
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
      {/* <!-- End::Row-4 --> */}

    </Fragment>
  )
}

export default Medical;
