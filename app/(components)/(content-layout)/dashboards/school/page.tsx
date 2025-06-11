"use client"

import SpkSchoolcard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-schoolcard';
import Spkapexcharts from '@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown';
import { Acitivitysdata, AttendanceSchoolOptions, AttendanceSchoolSeries, EarningsOptions, EarningsSeries, SchoolCard, SchoolCarddata, StarStudents, StudentsFee, Teachersinstructors } from '@/shared/data/dashboards/schooldata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card, Col, Dropdown, Pagination, ProgressBar, Row } from 'react-bootstrap';

interface SchoolProps {}

const School: React.FC<SchoolProps> = () => {

  return (

    <Fragment>

      {/* <!-- Page Header --> */}

      <Seo title="Dashboards-School" />

      <Pageheader title="Dashboards" currentpage="School" activepage="School" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start::Row-1 --> */}
      <Row>
        {SchoolCarddata.map((idx, index) => (
          <Col sm={6} xxl key={index}>
            <SpkSchoolcard cardClass="school-card" school={idx} />
          </Col>
        ))}
      </Row>
      {/* <!-- End::Row-1 --> */}

      {/* <!-- Start::Row-2 --> */}
      <Row>
        <Col xl={8}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Total Earnings
              </Card.Title>
              <SpkDropdown Id="dropdownMenuButton1" Togglevariant="light" Menulabel="dropdownMenuButton1" Toggletext="Sort By" Customtoggleclass="btn-sm">
                <Dropdown.Item as="li" href="#!">This Week</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Last Week</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">This Month</Dropdown.Item>
              </SpkDropdown>
            </Card.Header>
            <Card.Body className="ps-2 pb-0 text-center">
              <div className="d-inline-flex flex-wrap align-items-start gap-2 me-lg-5 me-sm-3 ps-lg-5 mb-3">
                <div className="lh-1">
                  <span className="avatar avatar-lg bg-primary-transparent">
                    <i className="ti ti-coins fs-19 lh-1"></i>
                  </span>
                </div>
                <div>
                  <div className="text-muted">Total Income</div>
                  <h5 className="fw-semibold mt-1 mb-0 lh-1">$56,897</h5>
                </div>
                <div className="text-end ms-auto align-self-end">
                  <span className="text-success fw-semibold fs-12 mb-0">+ 2.10%</span>
                  <span className="text-muted fw-medium fs-12"> last month</span>
                </div>
              </div>
              <div className="d-inline-flex flex-wrap align-items-start gap-2 me-xl-5">
                <div className="lh-1">
                  <span className="avatar avatar-lg bg-success-transparent">
                    <i className="ti ti-coins fs-19 lh-1"></i>
                  </span>
                </div>
                <div>
                  <div className="text-muted">Total Expenses</div>
                  <h5 className="fw-semibold mt-1 mb-0 lh-1">$35,578</h5>
                </div>
                <div className="text-end ms-auto align-self-end">
                  <span className="text-danger fw-semibold fs-12 mb-0">- 2.10%</span>
                  <span className="text-muted fw-medium fs-12"> last month</span>
                </div>
              </div>
              <div id="audienceMetric">
                <Spkapexcharts chartOptions={EarningsOptions} chartSeries={EarningsSeries} type={"area"} height={280} width={"100%"} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Today's Acitivity List
              </Card.Title>
              <Link scroll={false} href="#!" className="btn btn-sm btn-light text-default"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled mb-0">
                {Acitivitysdata.map((event) => (
                  <li key={event.id} className={`${event.liClass}`}>
                    <div className="d-flex align-items-start gap-2 flex-wrap mb-1">
                      <span className={`avatar avatar-md ${event.avatarColor}`}>
                        <i className={`fs-18 ${event.avatarIcon}`}></i>
                      </span>
                      <div className="ms-sm-2 mb-1 mb-sm-0">
                        <p className="mb-sm-1 mb-0 fw-medium">{event.title}</p>
                        <span className="text-muted">{event.grade}</span>
                      </div>
                      <div className="ms-auto">
                        <div className="min-w-fit-content d-flex align-items-center text-muted fs-12">
                          <span>
                            <i className="fe fe-clock me-1"></i>
                          </span>
                          <span>{event.startTime}</span>
                          <span className="mx-2 text-muted">-</span>
                          <span>{event.endTime}</span>
                        </div>
                        <div className="text-end mt-1">
                          <span className="badge bg-success-transparent">{event.studentCount}</span>
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
      {/* <!-- End::Row-2 --> */}

      {/* <!-- Start::Row-3 --> */}
      <Row>
        <Col xxl={5}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Teachers List
              </Card.Title>
              <Link scroll={false} href="#!" className="btn btn-sm btn-light text-default"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables tableClass="text-nowrap teachers-list" header={[{ title: 'Teacher', headerClassname: 'bg-light' }, { title: 'Subject', headerClassname: 'bg-light' }, { title: 'Qualification', headerClassname: 'bg-light' }, { title: 'Experience', headerClassname: 'bg-light' }, { title: 'Action', headerClassname: 'bg-light' },]} >
                  {Teachersinstructors.map((instructor) => (
                    <tr key={instructor.id}>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <Image width={28} height={28} src={instructor.avatar} alt={instructor.name} className="avatar avatar-sm avatar-rounded" />
                          <Link scroll={false} href="#!" className="fw-medium">
                            {instructor.name}
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className={`badge bg-${instructor.color}-transparent`}>
                          {instructor.subject}
                        </div>
                      </td>
                      <td>
                        <span className="fw-semibold">{instructor.degree}</span>
                      </td>
                      <td>
                        <span className="text-muted">{instructor.experience}</span>
                      </td>
                      <td>
                        <div className="btn-list">
                          <SpkButton Buttonvariant="primary-light" Customclass="btn-sm btn-icon rounded-circle" Buttontype="button">
                            <i className="ri-pencil-line lh-1 align-middle"></i>
                          </SpkButton>
                          <SpkButton Buttonvariant="success-light" Customclass="btn-sm btn-icon rounded-circle" Buttontype="button">
                            <i className="ri-delete-bin-line lh-1 align-middle"></i>
                          </SpkButton>
                        </div>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Attendance
              </Card.Title>
              <SpkDropdown Id="dropdownMenuButton1" Togglevariant="light" Menulabel="dropdownMenuButton1" Toggletext="Sort By" Customtoggleclass="btn-sm text-muted">
                <Dropdown.Item as="li" href="#!">This Week</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Last Week</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">This Month</Dropdown.Item>
              </SpkDropdown>
            </Card.Header>
            <Card.Body className="pb-1">
              <div id="attendance">
                <Spkapexcharts chartOptions={AttendanceSchoolOptions} chartSeries={AttendanceSchoolSeries} type={"donut"} height={225} width={"100%"} />
              </div>
            </Card.Body>
            <Card.Footer>
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="fw-semibold"><i className="ri-gradienter-fill fs-15 text-primary lh-1 me-2"></i>Students Present</div>
                    <div className="fw-semibold">
                      <span className="text-success fs-11 fw-medium me-2 d-inline-block"><i className="ti ti-arrow-up alilgn-middle me-1"></i>0.56%</span>
                      800
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="fw-semibold"><i className="ri-gradienter-fill fs-15 text-success lh-1 me-2"></i>Students Absent</div>
                    <div className="fw-semibold">
                      <span className="text-success fs-11 fw-medium me-2 d-inline-block"><i className="ti ti-arrow-up alilgn-middle me-1"></i>4.23%</span>
                      300
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="fw-semibold"><span className="text-primary"><i className="ri-gradienter-fill fs-15 lh-1 me-2 op-2"></i></span>On Leave</div>
                    <div className="fw-semibold">
                      <span className="text-danger fs-11 fw-medium me-2 d-inline-block"><i className="ti ti-arrow-down alilgn-middle me-1"></i>6.88%</span>
                      347
                    </div>
                  </div>
                </li>
              </ul>
            </Card.Footer>
          </Card>
        </Col>
        <Col xxl={4}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Star Students
              </Card.Title>
              <Link scroll={false} href="#!" className="btn btn-sm btn-light text-default"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables tableClass='text-nowrap' header={[{ title: 'S.ID', headerClassname: 'bg-light' }, { title: 'Student', headerClassname: 'bg-light' }, { title: 'Marks %', headerClassname: 'bg-light' }, { title: 'GPA', headerClassname: 'bg-light' }, { title: 'Actions', headerClassname: 'bg-light' },]} >
                  {StarStudents.map((student) => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link scroll={false} href="#!" className="avatar avatar-sm avatar-rounded me-2">
                            <Image width={28} height={28} src={student.avatar} alt="avatar" />
                          </Link>
                          <div>
                            <Link scroll={false} href="#!">{student.name}</Link>
                            <br />
                            <span className="text-muted fs-11">{student.grade}</span>
                          </div>
                        </div>
                      </td>
                      <td className="fw-semibold text-success">{student.percentage}</td>
                      <td>{student.score}</td>
                      <td>
                        <div className="btn-list">
                          <SpkButton Buttonvariant="primary-light" Customclass="btn-sm btn-icon rounded-circle" Buttontype="button">
                            <i className="ri-eye-line lh-1 align-middle"></i>
                          </SpkButton>
                          <SpkButton Buttonvariant="success-light" Customclass="btn-sm btn-icon rounded-circle" Buttontype="button">
                            <i className="ri-delete-bin-line lh-1 align-middle"></i>
                          </SpkButton>
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
      {/* <!-- End::Row-3 --> */}

      {/* <!-- Start::Row-4 --> */}
      <Row>
        <Col xl={8}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between border-bottom-0">
              <Card.Title>
                Students Fee Details
              </Card.Title>
              <Link scroll={false} href="#!" className="btn btn-sm btn-light text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables tableClass='table-striped table-bordered text-nowrap' header={[{ title: 'Student ID' }, { title: 'Name' }, { title: 'Standard' }, { title: 'Total Fee' }, { title: 'Status' }, { title: 'Paid' }, { title: 'Pending' }, { title: 'Actions' }]} >
                  {StudentsFee.map((student) => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.grade}</td>
                      <td>${student.totalAmount}</td>
                      <td>
                        <span className={`badge ${student.status === 'Paid' ? 'bg-success-transparent' : 'bg-warning-transparent'}`}>
                          {student.status}
                        </span>
                      </td>
                      <td>${student.paidAmount}</td>
                      <td>${student.balanceAmount}</td>
                      <td>
                        <div className="btn-list">
                          <SpkButton Buttonvariant="primary-light" Customclass="btn-sm" Buttontype="button">
                            <i className="ri-eye-line lh-1 align-middle"></i> View
                          </SpkButton>
                          <SpkButton Buttonvariant="secondary-light" Customclass="btn-sm" Buttontype="button">
                            <i className="ri-edit-line lh-1 align-middle"></i> Update
                          </SpkButton>
                        </div>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
            <Card.Footer className="border-top-0">
              <div className="d-flex align-items-center rounded">
                <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i> </div>
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
        <Col xl={4}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Exam Results
              </Card.Title>
              <Link scroll={false} href="#!" className="btn btn-sm btn-light text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled mb-0">
                {SchoolCard.map((result) => (
                  <li key={result.id} className={result.class}>
                    <div className="d-flex align-items-start gap-2 mb-3 flex-wrap">
                      <span className={`avatar avatar-md ${result.color}-transparent`}>
                        <i className="ri-pencil-fill fs-18"></i>
                      </span>
                      <div className="ms-sm-2 mb-1 mb-sm-0">
                        <p className="mb-sm-1 mb-0 fw-medium">{result.title}</p>
                        <span className="text-muted">{result.description}</span>
                      </div>
                      <div className="ms-auto">
                        <div className="btn btn-light btn-sm">
                          <i className="ri-download-cloud-2-line me-1"></i> Download Results
                        </div>
                      </div>
                    </div>
                    <ProgressBar className="progress progress-lg p-1">
                      <ProgressBar className={`progress-bar progress-bar-striped progress-bar-animated ${result.color}`} role="progressbar" now={result.progress} aria-valuenow={result.progress} aria-valuemin={0} aria-valuemax={100} />
                    </ProgressBar>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End::Row-4 --> */}

    </Fragment>
  )
}

export default School;
