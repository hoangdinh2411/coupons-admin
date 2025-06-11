"use client"

import SpkCoursecard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-coursecard'
import Spkapexcharts from '@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkButtongroup from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup'
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons'
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown'
import { CardData, CoursesCard, EarningsOptions, EarningsSeries, FinancialOptions, FinancialSeries, Instructorss, MonthlyOptions, MonthlySeries, NewStudentss, Trendingcourses, VisitorsOptions, VisitorsSeries } from '@/shared/data/dashboards/coursedata'
import Pageheader from '@/shared/layouts-components/pageheader/pageheader'
import Seo from '@/shared/layouts-components/seo/seo'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card, Col, Dropdown, Pagination, Row } from 'react-bootstrap'

interface CoursesProps {}

const Courses: React.FC<CoursesProps> = () => {

  return (

    <Fragment>

      {/* <!-- Page Header --> */}

      <Seo title="Dashboards-Courses" />

      <Pageheader title="Dashboards" currentpage="Courses" activepage="Courses" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start::row-1 --> */}
      <Row >
        <Col xxl={9}>
          <Row >
            <Col xxl={6}>
              <Card className="custom-card overflow-hidden">
                <div className="course-card">
                  <div className="p-4 ps-0 pb-0">
                    <div className="d-flex gap-2 justify-content-between align-items-center flex-wrap">
                      <div>
                        <Image width={177.92} height={177.92} src="../../assets/images/media/media-66.png" alt="" className="img-fluid course-card-img" />
                      </div>
                      <div className="flex-grow-1 text-end">
                        <h5 className="fw-semibold mb-2 fs-18">Hi, Welcome Back, <span className="text-primary">Ashwin Seth! </span></h5>
                        <p className="text-muted text-wrap">You're just 10% away from completing your goal<br /> this month!
                          Explore more courses today.</p>
                        <SpkButton Buttonvariant='primary' Customclass='btn-w-md mb-3 mt-2' Buttontype="button"> View Courses </SpkButton>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xxl={6}>
              <Row >
                {CardData.map((idx, index) => (
                  <Col xxl={6} xl={6} lg={6} md={6} sm={12} key={index} >
                    <SpkCoursecard course={idx} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <Row >
            <Col xl={4}>
              <Card className="custom-card">
                <Card.Header className="justify-content-between">
                  <Card.Title>Top Instructors</Card.Title>
                  <SpkButton Buttonvariant='light' Customclass='btn-sm' Buttontype="button"> View All </SpkButton>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled courses-instructors mb-0">
                    {Instructorss.map((teacher) => (
                      <li className={teacher.class} key={teacher.id}>
                        <div className="d-flex flex-wrap">
                          <div className="d-flex flex-fill align-items-center">
                            <div className="me-2">
                              <span className={`avatar avatar-md p-1 ${teacher.bgColor} bg-opacity-25 avatar-rounded`}>
                                <Image width={40} height={40} src={teacher.image} alt={teacher.name} />
                              </span>
                            </div>
                            <div>
                              <div className="fw-semibold">{teacher.name}</div>
                              <span className="text-muted fs-12">{teacher.degree}</span>
                            </div>
                          </div>
                          <div className="text-end">
                            <p className="text-success mb-0 fw-semibold">{teacher.rating}</p>
                            <span>{teacher.coursesCount}</span>
                            <span className="text-muted"> Courses</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={8}>
              <Card className="custom-card">
                <Card.Header className="justify-content-between">
                  <Card.Title>Earnings Report</Card.Title>
                  <SpkButtongroup Customclass="flex-wrap" Buttongrplabel="Basic example">
                    <SpkButton Buttonvariant="primary" Buttontype="button">1M</SpkButton>
                    <SpkButton Buttonvariant="primary-light" Buttontype="button">6M</SpkButton>
                    <SpkButton Buttonvariant="primary-light" Buttontype="button">1Y</SpkButton>
                    <SpkButton Buttonvariant="primary-light" Buttontype="button">All</SpkButton>
                  </SpkButtongroup>
                </Card.Header>
                <Card.Body>
                  <div id="courses-earnings">
                    <Spkapexcharts chartOptions={EarningsOptions} chartSeries={EarningsSeries} type={"line"} height={309} width={"100%"} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xxl={3}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Financial Summary
              </Card.Title>
              <div>
                <SpkButton Buttonvariant='primary-light' Customclass='btn-sm btn-icon' Buttontype="button"><i className="ri-download-line"></i> </SpkButton>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="d-flex flex-wrap align-items-center gap-2 p-2 border border-dashed rounded-2">
                <div>
                  <span className="avatar avatar-md  bg-pink bg-opacity-10 text-pink">
                    <i className="ti ti-wallet fs-20"></i>
                  </span>
                </div>
                <div>
                  <p className="mb-0">Your Balance</p>
                </div>
                <h5 className="fw-semibold mb-0 ms-auto">
                  $66,784.00
                </h5>
              </div>
              <div id="financial-summary">
                <Spkapexcharts chartOptions={FinancialOptions} chartSeries={FinancialSeries} type={"bar"} height={340} width={"100%"} />
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Body className="p-3">
              <div className="d-flex align-items-center gap-3 p-3 border border-primary border-dashed border-opacity-10 rounded bg-light bg-opacity-50 flex-wrap">
                <div className="flex-fill d-flex gap-2 align-items-center">
                  <div className="avatar avatar-lg bg-success bg-opacity-25 avatar-rounded">
                    <div className="avatar avatar-md bg-primary avatar-rounded">
                      <i className="ri-opera-fill fs-5"></i>
                    </div>
                  </div>
                  <div>
                    <div className="fw-medium mb-0">New Visitors </div>
                    <div className="fw-semibold fs-20">
                      6,986
                    </div>
                  </div>
                </div>
                <div className="text-end ms-auto">
                  <div id="new-visitors">
                    <Spkapexcharts chartOptions={VisitorsOptions} chartSeries={VisitorsSeries} type={"bar"} height={25} width={100} />
                  </div>
                  <div className="d-flex gap-2 align-items-center mt-3">
                    <span className="fs-11 fw-medium text-success d-block"><i className="ti ti-arrow-up"></i>2.95%</span>
                    <span className="fw-medium fs-11 text-muted"> Last Month</span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End::row-1 --> */}

      {/* <!-- Start::row-2 --> */}
      <Row >
        <Col xxl={4} xl={6}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>Monthly Payout Overview</Card.Title>
              <SpkButtongroup Customclass="flex-wrap" Buttongrplabel="Basic example">
                <SpkButton Buttonvariant="primary" Buttontype="button">1M</SpkButton>
                <SpkButton Buttonvariant="primary-light" Buttontype="button">6M</SpkButton>
                <SpkButton Buttonvariant="primary-light" Buttontype="button">1Y</SpkButton>
              </SpkButtongroup>
            </Card.Header>
            <div className="card-body pb-2">
              <div id="course-payouts">
                <Spkapexcharts chartOptions={MonthlyOptions} chartSeries={MonthlySeries} height={318} width={"100%"} />
              </div>
            </div>
          </Card>
        </Col>
        <Col xxl={4} xl={6}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title>New Students</Card.Title>
              <div>
                <SpkButton Buttonvariant='light' Customclass='btn-sm' Buttontype="button">View All</SpkButton>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables tableClass='text-nowrap' >
                  {NewStudentss.map((user) => (
                    <tr key={user.id}>
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <div className="me-2">
                            <span className="avatar avatar-md avatar-rounded">
                              <Image width={40} height={40} src={user.avatar} alt={user.name} />
                            </span>
                          </div>
                          <div>
                            <div className="fw-semibold">{user.name}</div>
                            <div className="fw-normal text-muted">{user.email}</div>
                          </div>
                        </div>
                      </th>
                      <td>{user.coursesCount} Courses</td>
                      <td>
                        <div className="hstack gap-2 fs-15 justify-content-end">
                          <Link aria-label="Edit" scroll={false} href="#!" className="btn btn-sm btn-success-transparent">
                            <i className="ri-edit-line me-1"></i> Edit
                          </Link>
                          <Link aria-label="Delete" scroll={false} href="#!" className="btn btn-sm btn-danger-transparent btn-icon">
                            <i className="ri-delete-bin-line"></i>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title>Trending Courses</Card.Title>
              <div>
                <SpkButton Buttonvariant='light' Customclass='btn-sm' Buttontype="button">View All</SpkButton>
              </div>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled courses-instructors mb-0">
                {Trendingcourses.map((course) => (
                  <li className={course.class} key={course.id}>
                    <div className="d-flex flex-wrap">
                      <div className="d-flex gap-3 flex-fill align-items-center latest-courses flex-wrap">
                        <Image width={64} height={45.2} src={course.image} alt="Course Image" />
                        <div>
                          <div className="fw-semibold mb-1">{course.name}</div>
                          <span className="text-muted fs-12">Category:</span>
                          <span className={`badge bg-${course.color} ms-1 rounded-pill`}>
                            {course.category}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex gap-2 align-items-center justify-content-between flex-fill">
                        <div>
                          <p className="mb-0 fw-semibold">{course.classes}</p>
                          <span>Classes</span>
                        </div>
                        <div className="text-end">
                          <p className="text-success mb-0 fs-14">${course.fee}</p>
                          <span className="fs-12 text-muted">{course.feeText}</span>
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
      {/* <!-- End::row-2 --> */}

      {/* <!-- Start::row-3 --> */}
      <Row >
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                All Courses
              </Card.Title>
              <div className="d-flex flex-wrap">
                <div className="me-3 my-1">
                  <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                </div>
                <SpkDropdown Customclass="my-1" Id="dropdownMenuButton1" Togglevariant="primary" Menulabel="dropdownMenuButton1" Toggletext="Sort By" Customtoggleclass="btn-sm btn-wave waves-effect waves-light">
                  <Dropdown.Item as="li" href="#!">New</Dropdown.Item>
                  <Dropdown.Item as="li" href="#!">Popular</Dropdown.Item>
                  <Dropdown.Item as="li" href="#!">Relevant</Dropdown.Item>
                </SpkDropdown>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <SpkTables tableClass='text-nowrap table-bordered' header={[{ title: 'S.No' }, { title: 'Course' }, { title: 'Category' }, { title: 'Classes' }, { title: 'Last Updated' }, { title: 'Instructor' }, { title: 'Students' }, { title: 'Actions' }]} >
                  {CoursesCard.map((course) => (
                    <tr key={course.id}>
                      <td>{course.id}</td>
                      <td>
                        <div className="d-flex align-items-center lh-1">
                          <div className="me-2">
                            <span className="avatar avatar-xs">
                              <Image width={20} height={20} src={course.img} alt="Course Image" />
                            </span>
                          </div>
                          <div>{course.name}</div>
                        </div>
                      </td>
                      <td>
                        <span className={`badge bg-${course.categoryColor}-transparent`}>
                          {course.category}
                        </span>
                      </td>
                      <td>{course.participants}</td>
                      <td>{course.date}</td>
                      <td>
                        <div className="d-flex gap-2 align-items-center">
                          <span className="avatar avatar-xs avatar-rounded">
                            <Image fill src={course.instructor.avatar} alt="" />
                          </span>
                          {course.instructor.name}
                        </div>
                      </td>
                      <td>{course.enrolled}</td>
                      <td>
                        <div className="hstack gap-2 fs-1">
                          <Link aria-label="edit" href="#!" scroll={false} className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                            <i className="ri-edit-line"></i>
                          </Link>
                          <Link aria-label="delete" href="#!" scroll={false} className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                            <i className="ri-delete-bin-line"></i>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex flex-wrap align-items-center">
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

export default Courses;
