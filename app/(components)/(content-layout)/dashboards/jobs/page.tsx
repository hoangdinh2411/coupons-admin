"use client"

import SpkEcommercecard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-ecommercecard';
import Spkapexcharts from '@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown';
import { ApplicantsData, CandidateData, FirmsData, GenderOptions, GenderSeries, JobListings, ProgressData, RecruitmentOptions, RecruitmentSeries, RegistersData, Trendingdata, statsData } from '@/shared/data/dashboards/jobsdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card, Col, Dropdown, Pagination, ProgressBar, Row } from 'react-bootstrap';

interface JobsProps {}

const Jobs: React.FC<JobsProps> = () => {

  return (

    <Fragment>

      {/* <!-- Page Header --> */}

      <Seo title="Dashboards-Jobs" />

      <Pageheader title="Dashboards" currentpage="Jobs" activepage="Jobs" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start::row-1 --> */}
      <Row>
        <Col xl={9}>
          <Row>
            {statsData.map((idx, index) => (
              <Col xl={3} key={index}>
                <SpkEcommercecard showIncreaseLabel={false} showMonthLabel={true} object={idx} />
              </Col>

            ))}
            <Col xl={4}>
              <Card className="custom-card overflow-hidden">
                <Card.Header className="justify-content-between">
                  <div className="card-title">Gender Analysis</div>
                  <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="View All" Customtoggleclass="px-2 py-0 fs-12 text-muted">
                    <Dropdown.Item as="li" href="#!">Today</Dropdown.Item>
                    <Dropdown.Item as="li" href="#!">This Week</Dropdown.Item>
                    <Dropdown.Item as="li" href="#!">Last Week</Dropdown.Item>
                  </SpkDropdown>
                </Card.Header>
                <Card.Body className="p-0">
                  <div id="candidates-chart" className="p-3">
                    <Spkapexcharts chartOptions={GenderOptions} chartSeries={GenderSeries} type={"donut"} height={"248"} width={"100%"} />
                  </div>
                  <Row className="row-cols-12 border-top border-block-start-dashed">
                    {CandidateData.map((item, index) => (
                      <Col key={index}>
                        <div
                          className={`p-3 ${item.label === 'Female Candidates' ? 'border-end border-inline-end-dashed' : ''} text-center mb-2`}
                        >
                          <span className={`avatar avatar-sm ${item.bgClass} mb-2`}>
                            <i className={`${item.iconClass} fs-18`} />
                          </span>
                          <div className="text-muted fs-12 text-center mb-1">{item.label}</div>
                          <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
                            <div className="fs-22 fw-semibold">{item.count}</div>
                            <span className={`${item.textColor} fw-semibold`}>
                              <i
                                className={`ri-arrow-${item.trend}-s-fill align-middle me-1`}
                              ></i>
                              {item.percentage}%
                            </span>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={8}>
              <Card className="custom-card overflow-hidden">
                <Card.Header className="justify-content-between">
                  <div className="card-title">Recruitment Stats</div>
                  <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="View All" Customtoggleclass="px-2 py-0 fs-12 text-muted">
                    <Dropdown.Item as="li" href="#!">Today</Dropdown.Item>
                    <Dropdown.Item as="li" href="#!">This Week</Dropdown.Item>
                    <Dropdown.Item as="li" href="#!">Last Week</Dropdown.Item>
                  </SpkDropdown>
                </Card.Header>
                <Card.Body className="pb-1">
                  <Row className="justify-content-center">
                    <Col md={6} className="col-12">
                      <div className="d-flex gap-3 align-items-center flex-wrap px-3">
                        <div className="avatar avatar-md bg-primary-transparent">
                          <i className="ti ti-news fs-18"></i>
                        </div>
                        <div className="">
                          <p className="mb-0 text-muted">Total Applications</p>
                          <p className="fs-20 fw-semibold mb-0">2,345</p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} className="col-12">
                      <div className="d-flex gap-3 align-items-center flex-wrap px-3">
                        <div className="avatar avatar-md bg-secondary-transparent">
                          <i className="ti ti-ban fs-18"></i>
                        </div>
                        <div className="">
                          <p className="mb-0 text-muted">Total Rejected</p>
                          <p className="fs-20 fw-semibold mb-0">465</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div id="salerevenue" className="mt-3">
                    <Spkapexcharts chartOptions={RecruitmentOptions} chartSeries={RecruitmentSeries} type={"area"} height={"315"} width={"100%"} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xl={3}>
          <Card className="custom-card">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <div className="me-3">
                  <span className="avatar avatar-md p-2 bg-primary avatar-rounded">
                    <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24" height="24px"
                      viewBox="0 0 24 24" width="24px" fill="#000000">
                      <g>
                        <rect fill="none" height="24" width="24" />
                        <g>
                          <path
                            d="M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z" />
                        </g>
                        <path
                          d="M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z" />
                      </g>
                    </svg>
                  </span>
                </div>
                <div className="flex-fill">
                  <p className="mb-1 text-muted">Resume Upload Percentage</p>
                  <div className="d-flex align-items-top justify-content-between">
                    <h5 className="fw-semibold mb-0 lh-1">58%</h5>
                    <div className="text-success fw-semibold">+0.165%
                      <i className="ri-arrow-up-line ms-1 d-inline-block align-middle"></i>
                    </div>
                  </div>
                </div>
              </div>
              <ProgressBar className="progress progress-lg p-1 progress-animate" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                <ProgressBar className="progress-bar progress-bar-striped bg-primary" now={65} />
              </ProgressBar>
              <div className="d-flex align-items-center my-3">
                <div className="me-3">
                  <span className="avatar avatar-md p-2 bg-success avatar-rounded">
                    <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24" height="24px"
                      viewBox="0 0 24 24" width="24px" fill="#000000">
                      <g>
                        <rect fill="none" height="24" width="24" />
                        <g>
                          <path
                            d="M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z" />
                        </g>
                        <path
                          d="M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z" />
                      </g>
                    </svg>
                  </span>
                </div>
                <div className="flex-fill">
                  <p className="mb-1 text-muted">Total Candidate subscribed</p>
                  <div className="d-flex align-items-top justify-content-between">
                    <h5 className="fw-semibold mb-0 lh-1">58%</h5>
                    <div className="text-danger fw-semibold">+0.165%
                      <i className="ri-arrow-up-line ms-1 d-inline-block align-middle"></i>
                    </div>
                  </div>
                </div>
              </div>
              <ProgressBar className="progress progress-lg p-1 progress-animate" role="progressbar" aria-valuenow={72} aria-valuemin={0} aria-valuemax={100}>
                <ProgressBar className="progress-bar progress-bar-striped bg-success" now={72} />
              </ProgressBar>
            </Card.Body>
          </Card>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Recent Jobs
              </div>
              <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="View All" Customtoggleclass="px-2 py-1 fs-12 text-muted">
                <Dropdown.Item as="li" href="#!">Today</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">This Week</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Last Week</Dropdown.Item>
              </SpkDropdown>
            </Card.Header>
            <Card.Body className="p-0">
              <ul className="list-group list-group-flush" id="recent-jobs">
                {JobListings.map((job) => (
                  <li className="list-group-item border-top-0 border-start-0 border-end-0" key={job.id}>
                    <Link scroll={false} href="#!">
                      <div className="d-flex align-items-center flex-wrap gap-1">
                        <div className="me-2 lh-1">
                          <span className={`avatar avatar-md avatar-rounded ${job.iconColor} border ${job.iconColor} border-opacity-10`}>
                            <i className="ti ti-briefcase fs-18"></i>
                          </span>
                        </div>
                        <div className="flex-fill">
                          <p className="mb-0 fw-semibold">{job.title}</p>
                          <p className="fs-11 text-muted mb-0">Posted: {job.postedTime}</p>
                        </div>
                        <div className="text-end ms-auto">
                          <span className={`badge ${job.badgeColor}`}>{job.badge}</span>
                          <p className="mb-0 mt-1 fs-12 fw-medium">
                            {job.applicationsCount} <span className="text-muted fw-normal fs-10">Applied</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End::row-1 --> */}

      {/* <!-- Start::row-2 --> */}
      <Row>
        <Col xl={5}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Trending Job Applicants
              </div>
              <button className="btn btn-primary-light btn-sm">View All<i className="ti ti-arrow-narrow-right ms-1"></i></button>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables tableClass='text-nowrap' header={[{ title: 'Name' }, { title: 'Applications' }, { title: 'Position' }, { title: 'Experience Level' }]}>
                  {Trendingdata.map((person) => (
                    <tr key={person.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-md avatar-rounded me-2">
                            <Image width={40} height={40} src={person.avatar} alt={person.name} />
                          </div>
                          <div>
                            <p className="mb-1 fw-semibold">{person.name}</p>
                            <span className="fs-13 text-muted">{person.role}</span>
                          </div>
                        </div>
                      </td>
                      <td className="fw-semibold fs-15">{person.experience}</td>
                      <td>
                        <span className={`fw-medium badge fs-11 ${person.badgeColor}`}>
                          {person.badge}
                        </span>
                      </td>
                      <td className="fw-medium">
                        {person.roleName}
                        <br />
                        <span className="fs-11 text-muted fw-normal">{person.years}</span>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3}>
          <Card className="custom-card">
            <Card.Header >
              <div className="card-title">
                Acquisitions
              </div>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled mb-2 pt-1">
                {ProgressData.map((item) => (
                  <li key={item.id} className={item.listClass}>
                    <div className="d-flex mb-2 gap-2 align-items-center justify-content-between">
                      <p className="fw-medium mb-0">{`${item.id}. ${item.title}`}</p>
                      <div className={`${item.trend === 'increase' ? 'text-success' : 'text-danger'} fs-11 fw-medium ms-auto`}>
                        <span className="text-muted">{item.trend === 'increase' ? 'Increase:' : 'Decrease:'}</span> {item.change}
                      </div>
                    </div>
                    <ProgressBar className="progress progress-lg p-1 progress-animate">
                      <ProgressBar className={`progress-bar fs-9 align-middle lh-1 progress-bar-striped ${item.bgClass}`} role="progressbar" now={item.percentage} aria-valuenow={item.percentage} aria-valuemin={0} aria-valuemax={100}/>
                    </ProgressBar>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Registers By Country
              </div>
              <button className="btn btn-primary-light btn-sm">View All<i className="ti ti-arrow-narrow-right ms-1"></i></button>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables tableClass='text-nowrap' header={[{ title: 'Country' }, { title: 'Registered' }, { title: '% of Total' }, { title: 'Active' }, { title: 'Action' }]}>
                  {RegistersData.map((country) => (
                    <tr key={country.id}>
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <div className="me-2 lh-1">
                            <span className="avatar avatar-xs avatar-rounded">
                              <Image width={20} height={20} src={country.flag} alt={`${country.name} Flag`} />
                            </span>
                          </div>
                          <div>
                            <span className="fw-semibold">{country.name}</span>
                          </div>
                        </div>
                      </th>
                      <td className="fw-medium">{country.users}</td>
                      <td>
                        <span className={`fw-medium fs-12 ${country.badgeColor}`}>
                          {country.badgeText}{' '}
                          <i
                            className={`ri-arrow-${country.percentageChange > 0 ? 'up' : 'down'}-line lh-1 align-middle`}
                          ></i>
                        </span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="avatar avatar-xs avatar-rounded">
                            <Image width={20} height={20} src="../../assets/images/faces/20.jpg" alt="User" />
                          </div>
                          <p className="mb-0 fw-medium">{country.usersInfo}</p>
                        </div>
                      </td>
                      <td>
                        <button type="button" className="btn btn-info-light btn-icon rounded-circle btn-sm">
                          <i className="ri-arrow-right-up-line fs-14"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End::row-2 --> */}

      {/* <!-- Start::row-3 --> */}
      <Row>
        <Col xl={9}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                New Applicants Overview
              </div>
              <div className="d-flex flex-wrap gap-1">
                <div className="me-2">
                  <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                </div>
                <SpkDropdown toggleas="a" Customtoggleclass="btn btn-primary btn-sm no-caret" Navigate="#!" Arrowicon={true} Toggletext="Sort By" >
                  <Dropdown.Item as="li" href="#!">New</Dropdown.Item>
                  <Dropdown.Item as="li" href="#!">Popular</Dropdown.Item>
                  <Dropdown.Item as="li" href="#!">Relevant</Dropdown.Item>
                </SpkDropdown>
              </div>
            </Card.Header>
            <div className="card-body pb-0">
              <div className="table-responsive">
                <SpkTables tableClass='text-nowrap table-hover border table-bordered' header={[{ title: '#' }, { title: 'Applicant Name' }, { title: 'Role Category' }, { title: 'Position' }, { title: 'Contact Email' }, { title: 'Country' }, { title: 'Type' }, { title: 'Date' }, { title: 'Actions' }]} >
                  {ApplicantsData.map((employee) => (
                    <tr key={employee.id}>
                      <th scope="row">{employee.id}</th>
                      <td>
                        <div className="d-flex align-items-center fw-medium">
                          <span className="avatar avatar-sm me-2 avatar-rounded">
                            <Image src={employee.image} alt={employee.name} height={28} width={28} />
                          </span>
                          {employee.name}
                        </div>
                      </td>
                      <td>
                        <span className={`badge bg-${employee.departmentBgColor}-transparent`}>{employee.department}</span>
                      </td>
                      <td>
                        <span className="fw-medium">{employee.role}</span>
                      </td>
                      <td>{employee.email}</td>
                      <td>
                        <div className="d-inline-flex align-items-center">
                          <i className="ri-map-pin-line text-pink"></i>
                          <span className="ms-1">{employee.location}</span>
                        </div>
                      </td>
                      <td>
                        <span className={`badge bg-${employee.color}`}>{employee.employmentType}</span>
                      </td>
                      <td>{employee.contractEndDate}</td>
                      <td>
                        <div className="hstack gap-2 fs-15">
                          <Link scroll={false} aria-label="Download" href="#!" className="btn btn-icon btn-success-light">
                            <i className="ri-download-2-line"></i>
                          </Link>
                          <Link scroll={false} aria-label="Edit" href="#!" className="btn btn-icon btn-primary-light">
                            <i className="ri-edit-line"></i>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </div>
            <div className="card-footer border-top-0">
              <div className="d-flex align-items-center">
                <div>
                  Showing 4 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
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
        <Col xl={3}>
          <Card className="custom-card overflow-hidden">
            <div className="card-header justify-content-between border-bottom-0">
              <div className="card-title">
                Top Firms
              </div>
              <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="View All" Customtoggleclass="px-2 py-0 fs-12 text-muted">
                <Dropdown.Item as="li" href="#!"  >Today</Dropdown.Item>
                <Dropdown.Item as="li" href="#!"  >This Week</Dropdown.Item>
                <Dropdown.Item as="li" href="#!"  >Last Week</Dropdown.Item>
              </SpkDropdown>
            </div>
            <Card.Body className="p-0">
              <div className="list-group rounded-top-0">
                {FirmsData.map((company) => (
                  <div key={company.id} className="list-group-item d-flex gap-2 align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="me-2">
                        <span className={`avatar avatar-md p-1 ${company.bgColorClass} bg-opacity-10 border border-primary border-opacity-25 avatar-rounded`}>
                          <Image width={40} height={40} src={company.logo} alt="Company Logo" />
                        </span>
                      </div>
                      <div>
                        <p className="fw-semibold mb-0">{company.name}</p>
                        <p className="fs-12 mb-0">
                          <span className="text-muted">Employees:</span> {company.employees}
                        </p>
                      </div>
                    </div>
                    <p className="mb-0">
                      <span className="text-muted">Since:</span> {company.yearFounded}
                    </p>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End::row-3 --> */}
    </Fragment>
  )
}

export default Jobs;
