"use client"

import SpkActivepojectcard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-activepojectcard';
import SpkProjectscard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-projectscard';
import Spkapexcharts from '@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown';
import { ActiveProjectsdata, ProjectAnalayticsOptions, ProjectAnalayticsSeries, ProjectCardsData, ProjectStatuses, ProjectsSummary, RecentTransactions, TeamMembers, TeamTasks, Tododata } from '@/shared/data/dashboards/projectsdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card, Col, Dropdown, Pagination, ProgressBar, Row } from 'react-bootstrap';

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {

  return (

    <Fragment>

      {/* <!-- Page Header --> */}

      <Seo title="Dashboards-Projects" />

      <Pageheader title="Dashboards" currentpage="Projects" activepage="Projects" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start::row-1 --> */}
      <Row>
        {ProjectCardsData.map((idx, index) => (
          <Col xxl={3} xl={6} key={index}>
            <SpkProjectscard projects={idx} />
          </Col>
        ))}
      </Row>
      {/* <!-- End::row-1 --> */}

      {/* <!-- Start::row-2 --> */}
      <Row>
        <Col xxl={5}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Project Analysis
              </div>
              <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="View All" Customtoggleclass="btn-sm btn-light btn-wave fs-12 text-muted">
                <Dropdown.Item as="li" href="#!">Download</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Import</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Export</Dropdown.Item>
              </SpkDropdown>
            </Card.Header>
            <Card.Body className="pb-0">
              <div id="projectAnalysis">
                <Spkapexcharts chartOptions={ProjectAnalayticsOptions} chartSeries={ProjectAnalayticsSeries} type={"line"} height={"356"} width={"100%"} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Projects Overview
              </div>
            </Card.Header>
            <Card.Body className="pb-2">
              <div className="mb-3 d-flex justify-content-between gap-2 align-items-center">
                <div>
                  <div className="fw-medium mb-1">Percentage of Project Completion</div>
                  <span className="text-danger fw-semibold"> 2.1% <i className="ri-arrow-down-line lh-1 align-center fs-14 fw-normal"></i></span>
                  <span className="fw-medium fs-11 text-muted">From Last Month</span>
                </div>
                <span className="fw-semibold fs-16">75%</span>
              </div>
              <ProgressBar className="progress progress-lg mb-4">
                <ProgressBar className="progress-bar progress-bar-striped progress-bar-animated bg-primary" label="75%" role="progressbar" now={75} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</ProgressBar>
              </ProgressBar>
              <ul className="list-group list-group-flush">
                {ProjectStatuses.map((status, index) => (
                  <li className="list-group-item border-0 px-1 py-1 p-0 mb-2" key={index}>
                    <div className="d-flex gap-2 align-items-center flex-wrap">
                      <span className={`avatar avatar-sm  bg-${status.color}-transparent avatar-rounded me-2`}>
                        <i className={`${status.icon} fw-medium fs-18`}></i>
                      </span>
                      <span className="fw-medium">{status.title}</span>
                      <div className="ms-auto">
                        <span className={`text-${status.percentage > 0 ? 'success' : 'danger'} fw-medium fs-11`}>
                          {Math.abs(status.percentage)}%{' '}
                          <i className={`ri-arrow-${status.arrowDirection}-line lh-1 align-center fs-14 fw-normal`}
                          ></i>
                        </span>
                        <span className={`badge bg-${status.color} ms-1`}>{status.count}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4}>
          <Row>
            {ActiveProjectsdata.map((idx, index) => (
              <Col xl={6} key={index}>
                <SpkActivepojectcard active={idx} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      {/* <!--End::row-2 --> */}

      {/* <!-- Start::row-3 --> */}
      <Row>
        <Col xxl={4}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Todo Projects List
              </div>
              <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle btn-sm"><i className="ri-add-line lh-1 align-middle"></i></Link>
            </Card.Header>
            <Card.Body className="card-body">
              <ul className="list-unstyled projects-maintask-card mb-0">
                {Tododata.map((task) => (
                  <li key={task.id} className={task.class}>
                    <div className="d-flex align-items-top flex-wrap">
                      <div className="d-flex align-items-top flex-fill">
                        <span className="me-3">
                          <input className="form-check-input" type="checkbox" id={`checkboxNoLabel${task.id}`} value="" aria-label="..." defaultChecked={task.checkboxChecked} />
                        </span>
                        <div className="flex-fill">
                          <span className={`fw-medium fs-14  ${task.titleClass}`}>{task.title}</span>
                          <p className="mb-0 text-muted fs-12 mt-2">
                            <span className="avatar avatar-xs avatar-rounded align-middle">
                              <Image width={20} height={20} src={task.assignedToImg} alt="img" />
                            </span>  {task.assignedTo}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex gap-2 align-items-center ms-auto">
                        <div>
                          <span className="d-block mt-1">
                            <span className="avatar-list-stacked">
                              {task.additionalAvatars.map((avatar, idx) => (
                                <span key={idx} className="avatar avatar-xs avatar-rounded">
                                  <Image width={20} height={20} src={avatar} alt="img" />
                                </span>
                              ))}
                            </span>
                          </span>
                          <span className="fw-medium fs-11 text-muted">{task.dueDate}</span>
                        </div>
                        <div>
                          <span className={`badge bg-${task.status === 'in-progress' ? 'primary' : task.status === 'completed' ? 'success' : 'danger'}-transparent ms-2`}
                          >
                            {task.status === 'in-progress'
                              ? 'In progress'
                              : task.status === 'completed'
                                ? 'Completed'
                                : 'Removed list'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Team Members
              </div>
              <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="View All" Customtoggleclass="p-2 py-1 fs-12 text-muted">
                <Dropdown.Item as="li" href="#!">Download</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Import</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Export</Dropdown.Item>
              </SpkDropdown>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <table className="table table-borderless text-nowrap">
                  <tbody>
                    {TeamMembers.map((user) => (
                      <tr key={user.id}>
                        <td>
                          <div className="d-flex align-items-top">
                            <span className="avatar avatar-sm  flex-shrink-0 lh-1">
                              <Image width={28} height={28} src={user.image} alt={user.name} />
                            </span>
                            <div className="ms-3 lh-1">
                              <span className="fw-semibold">{user.name}</span>
                              <span className="d-block fs-11 text-muted mt-2">{user.role}</span>
                            </div>
                          </div>
                        </td>
                        <td className="fs-11 text-muted">{user.email}</td>
                        <td>
                          <button className="btn btn-sm btn-icon btn-primary-light me-2" type="button">
                            <i className="ri-eye-line"></i>
                          </button>
                          <button className="btn btn-sm btn-icon btn-success-light" type="button">
                            <i className="ri-edit-line"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Team Tasks
              </div>
              <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="View All" Customtoggleclass="p-2 py-1 fs-12 text-muted">
                <Dropdown.Item as="li" href="#!">Download</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Import</Dropdown.Item>
                <Dropdown.Item as="li" href="#!">Export</Dropdown.Item>
              </SpkDropdown>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables tableClass='table-borderless table-hover text-nowrap' header={[{ title: 'Tasks', headerClassname: 'bg-light' }, { title: 'Team', headerClassname: 'bg-light' }, { title: 'Timeline', headerClassname: 'bg-light' }, { title: 'Status', headerClassname: 'bg-light' }]} >
                  {TeamTasks.map((task) => (
                    <tr key={task.id}>
                      <td className="fw-medium">{task.name}</td>
                      <td>
                        <span className="avatar-list-stacked">
                          {task.avatars.map((avatar, index) => (
                            <span key={index} className="avatar avatar-xs avatar-rounded">
                              <Image width={20} height={20} src={avatar} alt="team-member" />
                            </span>
                          ))}
                        </span>
                      </td>
                      <td>
                        <span className="fs-11 text-muted me-2">Track Time:</span>
                        <span className="fw-medium fs-12">{task.trackTime}</span>
                        <ProgressBar className="progress progress-animate progress-xs w-100" role="progressbar" aria-valuenow={task.progress} aria-valuemin={0} aria-valuemax={100}>
                          <ProgressBar className={`progress-bar progress-bar-striped progress-bar-animated bg-${task.progressBg}`} now={task.progress} />
                        </ProgressBar>
                      </td>
                      <td>
                        <span className={`badge bg-${task.status === 'Completed' ? 'success' : task.status === 'In Progress' ? 'warning' : task.status === 'Pending' ? 'danger' : 'info'}-transparent`}>
                          {task.status}
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
      {/* <!-- End::row-3 --> */}

      {/* <!-- Start::row-4 --> */}
      <Row>
        <Col xxl={9}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Projects Summary
              </div>
              <div className="d-flex flex-wrap">
                <div className="me-3 my-1">
                  <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                </div>
                <SpkDropdown Id="dropdownMenuButton1" Customclass="my-1" Togglevariant="primary" Menulabel="dropdownMenuButton1" Toggletext="Sort By" Customtoggleclass="btn-sm btn-wave waves-effect waves-light">
                  <Dropdown.Item as="li" href="#!">New</Dropdown.Item>
                  <Dropdown.Item as="li" href="#!">Popular</Dropdown.Item>
                  <Dropdown.Item as="li" href="#!">Relevant</Dropdown.Item>
                </SpkDropdown>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables tableClass='table-striped text-nowrap' header={[{ title: 'Project ID' }, { title: 'Project Name' }, { title: 'Team' }, { title: 'Start Date' }, { title: 'Progress (%)' }, { title: 'End Date' }, { title: 'Status' }, { title: 'Budget' }, { title: 'Actions' }]}>
                  {ProjectsSummary.map((task) => (
                    <tr key={task.id}>
                      <td>{task.id}</td>
                      <td>{task.name}</td>
                      <td>
                        <div className="avatar-list-stacked">
                          {task.avatars.map((avatar, index) => (
                            <span key={index} className="avatar avatar-xs avatar-rounded">
                              <Image width={20} height={20} src={avatar} alt="team-member" />
                            </span>
                          ))}
                          {task.badge}
                        </div>
                      </td>
                      <td>{task.startDate}</td>
                      <td>
                        {task.progress}%
                        <ProgressBar className="progress progress-animate progress-sm w-100" role="progressbar" aria-valuenow={task.progress} aria-valuemin={0} aria-valuemax={100}>
                          <ProgressBar className={`progress-bar progress-bar-striped progress-bar-animated bg-${task.status === 'Completed' ? 'success' : task.status === 'In Progress' ? 'primary' : task.status === 'On Hold' ? 'primary' : 'info'}`} now={task.progress} />
                        </ProgressBar>
                      </td>
                      <td className="fw-medium text-pink">{task.endDate}</td>
                      <td>
                        <span className={`badge bg-${task.status === 'Completed' ? 'success' : task.status === 'In Progress' ? 'warning' : task.status === 'On Hold' ? 'danger' : 'info'}-transparent`}>
                          {task.status}
                        </span>
                      </td>
                      <td className="fw-semibold">{task.budget}</td>
                      <td>
                        <SpkButton Buttonvariant="primary-light" Customclass="btn-sm btn-icon me-2" Buttontype="button">
                          <i className="ri-eye-line"></i>
                        </SpkButton>
                        <SpkButton Buttonvariant="success-light" Customclass="btn-sm btn-icon me-2" Buttontype="button">
                          <i className="ri-edit-line"></i>
                        </SpkButton>
                        <SpkButton Buttonvariant="danger-light" Customclass="btn-sm btn-icon" Buttontype="button">
                          <i className="ri-delete-bin-line"></i>
                        </SpkButton>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
            <Card.Footer className="border-top-0">
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
          <Row>
            <Col xxl={12} >
              <Card className="custom-card">
                <Card.Header className="justify-content-between">
                  <div className="card-title">
                    Recent Transactions
                  </div>
                  <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-sm btn-light no-caret" Arrowicon={true} Toggletext="View All">
                    <Dropdown.Item><Link scroll={false} href="#!">Download</Link></Dropdown.Item>
                    <Dropdown.Item><Link scroll={false} href="#!">Import</Link></Dropdown.Item>
                    <Dropdown.Item><Link scroll={false} href="#!">Export</Link></Dropdown.Item>
                  </SpkDropdown>
                </Card.Header>
                <Card.Body className="card-body">
                  <ul className="list-unstyled project-transactions-card mb-0">
                    {RecentTransactions.map((transaction, index) => (
                      <li key={index} className={transaction.class}>
                        <div className="d-flex align-items-top">
                          <div className="me-3">
                            <span className={`avatar avatar-rounded fw-bold avatar-md ${transaction.avatarBg}`}>
                              {transaction.avatar}
                            </span>
                          </div>
                          <div className="flex-fill">
                            <span className="d-block fw-semibold">{transaction.name}</span>
                            <span className="d-block text-muted fs-11">{transaction.date}</span>
                          </div>
                          <div>
                            <h6 className="fw-semibold">{transaction.amount}</h6>
                          </div>
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
      {/* <!-- End::row-4 --> */}

    </Fragment>
  )
}

export default Projects;
