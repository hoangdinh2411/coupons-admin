"use client"

import Spkapexcharts from '@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts'
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown'
import SpkbudgetCard from '@/shared/@spk-reusable-components/reusable-widgets/spk-budgetcard'
import SpkCustomercard from '@/shared/@spk-reusable-components/reusable-widgets/spk-customercard'
import SpkNumbercard from '@/shared/@spk-reusable-components/reusable-widgets/spk-numbercard'
import SpkOverviewcard from '@/shared/@spk-reusable-components/reusable-widgets/spk-overviewcard'
import SpkRevenuecard from '@/shared/@spk-reusable-components/reusable-widgets/spk-revenuecard'
import { Audienceoptions, Audienceseries, Budgetsdata, Customerdata, Incomedata, Profitoptions, Profitseries, RestOrderdata, Revenuedata, Teamdata, Transactionsdata, Visitoroptions, Visitorseries } from '@/shared/data/widgets/widgetsdata'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card, Col, Dropdown, ProgressBar, Row } from 'react-bootstrap'
import SpkRestordercard from '@/shared/@spk-reusable-components/reusable-widgets/spk-restordercard'
import SpkWebdesignercard from '@/shared/@spk-reusable-components/reusable-widgets/spk-webdesignercard'
import SpkEventscard from '@/shared/@spk-reusable-components/reusable-widgets/spk-eventscard'
import SpkTemperaturecard from '@/shared/@spk-reusable-components/reusable-widgets/spk-temperaturecard'
import IncomeCard from '@/shared/@spk-reusable-components/reusable-widgets/spk-incomecard'
import SpkElectriccard from '@/shared/@spk-reusable-components/reusable-widgets/spk-electriccard'
import Pageheader from '@/shared/layouts-components/pageheader/pageheader'
import Seo from '@/shared/layouts-components/seo/seo'
import Image from 'next/image'

interface WidgetsProps {}

const Widgets: React.FC<WidgetsProps> = () => {

    return (

        <Fragment>

            <Seo title="Widgets" />

            <Pageheader title="Widgets" currentpage="Widgets" activepage="Widgets" />

            {/* <!-- Start Row-1 --> */}

            <Row>
                {Budgetsdata.map((idx, index) => (
                    <Col xxl={3} xl={6} key={index}>
                        <SpkbudgetCard widget={idx} />
                    </Col>
                ))}
            </Row>

            {/* <!-- End Row-1 --> */}

            {/* <!-- Start:: Row-2 --> */}
            <Row>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between flex-wrap">
                            <Card.Title>
                                Audience Statistics
                            </Card.Title>
                            <div className="d-flex gap-2">
                                <div className="btn btn-outline-light border btn-full btn-sm">Today</div>
                                <div className="btn btn-outline-light border btn-full btn-sm">Weakly</div>
                                <div className="btn btn-light border btn-full btn-sm">Yearly</div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="widget-chart-7">
                                <Spkapexcharts chartOptions={Audienceoptions} chartSeries={Audienceseries} type="area" height={355} width={"100%"} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Team Members
                            </Card.Title>
                            <Link href="#!" className="btn btn-light btn-sm text-muted">
                                View All
                            </Link>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled media-requests mb-0">
                                {Teamdata.map((idx, index) => (
                                    <li key={index}>
                                        <div className="d-flex align-items-center gap-1">
                                            <div className="me-2">
                                                <span className={`avatar avatar-md p-1 bg-${idx.avatarClass}-transparent avatar-rounded`}>
                                                    <Image width={40} height={40} src={idx.image} alt="Team Member" />
                                                </span>
                                            </div>
                                            <div className="flex-fill text-truncate">
                                                <div className="fw-semibold mb-0">{idx.name}</div>
                                                <span className="text-muted fs-12 w-75 text-truncate">{idx.role}</span>
                                            </div>
                                            <div className="btn-list text-nowrap">
                                                <button aria-label="button" type="button" className={`btn btn-sm btn-${idx.buttonClass}-light`}>
                                                    <i className="ri-message-line"></i> Message
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                    {Customerdata.map((idx, index) => (
                        <SpkCustomercard key={index} widget={idx} />
                    ))}
                </Col>
                <Col xxl={3}>
                    <SpkNumbercard cardNumber="CARD NUMBER" number="0000 1234 1234 25 " holderName="Card Holder Name" title="Ashwin Seth " valid="Valid Till" date="01/01" />
                    <SpkOverviewcard />
                </Col>
            </Row>
            {/* <!-- End:: Row-2 --> */}

            {/* <!-- Start:: Row-3 --> */}
            <Row>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <Card.Body className=" d-flex gap-2 align-items-start justify-content-between flex-wrap pb-0">
                            <div className="flex-shrink-0 d-flex flex-column justify-content-between gap-5">
                                <div className="pt-2 ps-2">
                                    <h4 className="mb-1 d-flex align-items-center fw-semibold">$32,198 </h4>
                                    <p className="fs-14 mb-2">Profit Earned</p>
                                    <div className="">
                                        <span className="text-success fw-semibold"> 5.3% <i className="ri-arrow-up-line lh-1 align-center fs-14 fw-normal"></i></span>
                                        <span className="fw-medium fs-12 text-muted">From Last Month</span>
                                    </div>
                                </div>
                                <div className="btn bottom-0 mt-3 d-grid btn-primary rounded-pill"> View Details</div>
                            </div>
                            <div id="widget-profit">
                                <Spkapexcharts chartOptions={Profitoptions} chartSeries={Profitseries} height={200} width={'100%'} type="line" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Row>
                        {Revenuedata.map((idx, index) => (
                            <Col xl={6} key={index}>
                                <SpkRevenuecard widget={idx} />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" border-bottom border-block-end-dashed">
                            <div>
                                <h6 className="mb-0">Transactions</h6>
                                <span className="fs-11 text-muted">Go through the lastest transactions</span>
                            </div>
                            <div className="ms-auto">
                                <div className="btn btn-icon btn-light"><i className="ri-search-line"></i></div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className=" p-2 bg-light bg-opacity-75 rounded-3">
                                {Transactionsdata.map((transaction, index) => (
                                    <div className={`d-flex gap-3 justify-content-between align-items-center flex-wrap ${transaction.divClass}`} key={index}>
                                        <div>
                                            <span className={`avatar avatar-sm ${transaction.type === 'Receive' ? 'bg-success-transparent' : 'bg-primary-transparent'} avatar-rounded`}>
                                                <i className={`ri-arrow-${transaction.type === 'Receive' ? 'left-down' : 'right-up'}-line fs-18`}></i>
                                            </span>
                                            <span className="align-center fw-medium ms-1">{transaction.type}</span>
                                        </div>
                                        <div>
                                            <div className="fw-semibold mb-1 d-inline-block">{transaction.coinName}</div>
                                            <span className="text-muted mb-0 ms-1 d-inline-block"> ({transaction.coinSymbol})</span>
                                        </div>
                                        <h6 className="fw-semibold">${transaction.amount.toLocaleString()}</h6>
                                        <span className={`badge ${transaction.isPositiveChange ? 'bg-success' : 'bg-danger'} rounded-pill`}>
                                            {transaction.percentage > 0 && '+'}{transaction.percentage}%
                                            <i className={`ti ti-arrow-${transaction.isPositiveChange ? 'up' : 'down'}`}></i>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: Row-3 --> */}

            {/* <!-- Start:: Row-4 --> */}
            <Row>
                {RestOrderdata.map((idx, index) => (
                    <Col xxl={4} key={index}>
                        <SpkRestordercard widget={idx} />
                    </Col>
                ))}
            </Row>
            {/* <!-- End:: Row-4 --> */}

            {/* <!-- Start:: Row-5 --> */}
            <Row>
                <Col xxl={3}>
                    <SpkWebdesignercard img="../assets/images/faces/14.jpg" userName="Annie Brunie" role="CEO & MD" detailButton="View Details" />
                </Col>
                <Col xxl={4}>
                    <Row>
                        <Col xl={6}>
                            <SpkEventscard eventTitle="Upcoming Events" clientName="Meeting with clients in zoom" startTime="Starts in 20mins" />
                        </Col>
                        <Col xl={6}>
                            <SpkTemperaturecard />
                        </Col>
                    </Row>
                    <Card className="custom-card">
                        <Card.Body className=" p-4">
                            <div className="d-flex gap-2 justify-content-between mb-2">
                                <div>
                                    <div className="text-muted">
                                        Total Revenue
                                    </div>
                                    <div className="fw-semibold align-self-end fs-4 mb-2 d-inline-block">
                                        $2.2K
                                    </div>
                                    <span className="fw-medium fs-12 text-muted ms-1"> From Last Month </span> <span className="text-muted fw-medium fs-12"><i className="ri-arrow-up-s-fill fs-15 lh-1 align-midddle text-success"></i> 4.5% </span>
                                </div>
                                <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-light border btn-icon no-caret" IconClass="ri-more-2-fill fs-16 text-muted" Icon={true}>
                                    <Dropdown.Item href="#!">Week</Dropdown.Item>
                                    <Dropdown.Item href="#!">Day</Dropdown.Item>
                                    <Dropdown.Item href="#!">Year</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                            <Row className=" gy-3 gy-sm-0">
                                {Incomedata.map((item, index) => (
                                    <IncomeCard key={index} {...item} />
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={5}>
                    <SpkElectriccard title="Kitchen Essentials" newPrice=" $45.00 " oldPrice=" $65.00 " />
                    <Card className="custom-card">
                        <div className="p-3 d-flex gap-2 justify-content-between border-bottom border-block-end-dashed bg-light bg-opacity-75 align-items-center">
                            <div>
                                <h6 className="mb-1">Visitors By Country</h6>
                                <div className="text-muted mb-0">Across all regions.</div>
                            </div>
                            <button className="btn btn-primary-light btn-sm">View All<i className="ti ti-arrow-narrow-right ms-1"></i></button>
                        </div>
                        <Card.Body>
                            <Row className=" align-items-center">
                                <Col xl={6}>
                                    <div id="widget-visitors">
                                        <Spkapexcharts chartOptions={Visitoroptions} chartSeries={Visitorseries} type="radar" height="165" width="100%" />
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <ul className="list-unstyled country-stats-list">
                                        <li>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-md bg-primary bg-opacity-10 p-2 avatar-rounded">
                                                        <Image width={40} height={40} src="../assets/images/flags/us_flag.jpg" alt="" className="rounded-circle" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex mb-2 justify-content-between align-items-center">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="fw-semibold d-block">US</span>
                                                        </div>
                                                        <div className="fw-medium fs-12"><span className="text-danger me-1"><i className="ti ti-arrow-down align-middle"></i></span><span>$32K</span> (65%)</div>
                                                    </div>
                                                    <ProgressBar className="progress progress-sm progress-animate" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                                                        <ProgressBar className="progress-bar" now={65}></ProgressBar>
                                                    </ProgressBar>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-md bg-secondary bg-opacity-10 p-2 avatar-rounded">
                                                        <Image width={40} height={40} src="../assets/images/flags/french_flag.jpg" alt="" className="rounded-circle" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex mb-2 justify-content-between align-items-center">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="fw-semibold d-block">France</span>
                                                        </div>
                                                        <div className="fw-medium fs-12"><span className="text-success me-1"><i className="ti ti-arrow-up align-middle"></i></span><span>$22K</span> (55%)</div>
                                                    </div>
                                                    <ProgressBar className="progress progress-xs progress-animate" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                                                        <ProgressBar className="progress-bar bg-secondary" now={65}></ProgressBar>
                                                    </ProgressBar>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-md bg-success bg-opacity-10 p-2 avatar-rounded">
                                                        <Image width={40} height={40} src="../assets/images/flags/germany_flag.jpg" alt="" className="rounded-circle" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex mb-2 justify-content-between align-items-center">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <span className="fw-semibold d-block">Germany</span>
                                                        </div>
                                                        <div className="fw-medium fs-12"><span className="text-danger me-1"><i className="ti ti-arrow-down align-middle"></i></span><span>$21</span> (45%)</div>
                                                    </div>
                                                    <ProgressBar className="progress progress-xs progress-animate" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                                                        <ProgressBar className="progress-bar bg-success" now={65}></ProgressBar>
                                                    </ProgressBar>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: Row-5 --> */}
        </Fragment>
    )
}

export default Widgets
