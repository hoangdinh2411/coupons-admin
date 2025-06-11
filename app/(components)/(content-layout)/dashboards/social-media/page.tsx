"use client"

import SpkSocialcard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-socialcard';
import Spkapexcharts from '@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown';
import { AudienceOptions, AudienceSeries, Locationsdata, PostList, ProfitOptions, ProfitSeries, Requestsdata, SocialMediaPerformance, Suggestionsdata, TrafficOptions, TrafficSeries, TrafficSources, socialMediaCard } from '@/shared/data/dashboards/socialmediadata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card, Col, Dropdown, Pagination, Row } from 'react-bootstrap';

interface SocialmediaProps {}

const Socialmedia: React.FC<SocialmediaProps> = () => {

  return (

    <Fragment>

      {/* <!-- Page Header --> */}

      <Seo title="Dashboards-Social Media" />

      <Pageheader title="Dashboards" currentpage="Social Media" activepage="Social Media" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start::Row-1 --> */}
      <Row>
        <Col xxl={9}>
          <Row>
            {socialMediaCard.map((idx, index) => (
              <Col sm={6} xxl={3} key={index}>
                <SpkSocialcard cardClass={`social-media-cards ${idx.bgColor}`} media={idx} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col xl={8}>
              <Card className="custom-card">
                <Card.Header className="justify-content-between flex-wrap">
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
                  <div id="audience" className="">
                    <Spkapexcharts chartOptions={AudienceOptions} chartSeries={AudienceSeries} height={348} width={"100%"} type={"area"} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={4}>
              <Card className="custom-card profit-analysis-card">
                <Card.Body>
                  <div className="mb-4 d-flex gap-2 align-items-center p-3 bg-success bg-opacity-10 rounded-3">
                    <div>
                      <p className="fs-14 mb-2">Profit Earned</p>
                      <div className="d-flex align-items-end gap-2">
                        <h4 className="mb-2 d-flex align-items-center fw-semibold">$32,198 </h4>
                      </div>
                      <span className="text-success fw-semibold fs-12 mb-0 me-1">+ 2.10%</span>
                      <span className="text-muted fw-medium fs-12"> from last month</span>
                    </div>
                    <div className="ms-auto">
                      <div className="avatar avatar-md avatar-rounded bg-primary bg-opacity-25 text-primary"><i className="ti ti-currency-dollar fs-22 fw-medium"></i></div>
                    </div>
                  </div>
                  <div id="profit-earn-social" className="pt-3 pb-2">
                    <Spkapexcharts chartOptions={ProfitOptions} chartSeries={ProfitSeries} type={"bar"} height={258} width={"100%"} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xl={12} xxl={3} >
          <Card className="custom-card media-upgrade-card">
            <Card.Body className="pb-0">
              <div className="text-end">
                <h6 className="fw-semibold mb-1 text-nowrap text-fixed-white">Upgrade Your Plan</h6>
                <p className="mb-3 text-fixed-white op-8">Unlock more features and benefits.</p>
                <SpkButton Buttonvariant='secondary' Customclass='mt-3' Buttontype="button"> Upgrade Now</SpkButton>
              </div>
              <Image fill src="../../assets/images/media/media-26.png" alt="" className="img-fluid media-upgrade-img" />
            </Card.Body>
          </Card>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title className="lh-base">
                Top Locations
              </Card.Title>
              <Link href="#!" scroll={false} className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
            </Card.Header>
            <Card.Body className="p-0">
              <ul className="list-group list-group-flush active-customers-list">
                {Locationsdata.map((country) => (
                  <li key={country.id} className="list-group-item border-0 border-bottom border-block-end-dashed">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div className="d-flex align-items-center gap-2">
                        <div className="lh-1">
                          <span className="avatar avatar-sm p-1 bg-info bg-opacity-10 avatar-rounded">
                            <Image height={28} width={28} src={country.flagImage} alt={country.name} />
                          </span>
                        </div>
                        <div className="fw-medium">{country.name}</div>
                      </div>
                      <div>
                        <span className="fw-semibold">{country.population}</span>
                        <span className={`text-${country.isPositive ? 'success' : 'danger'} fs-12 ms-3`}>
                          <i className={`ri-arrow-${country.isPositive ? 'up' : 'down'}-s-fill me-1 fs-16 lh-1 align-middle`}></i>
                          {country.percentageChange}
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
      {/* <!-- End::Row-1 --> */}

      {/* <!-- Start::Row-2 --> */}
      <Row>
        <Col xxl={3}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Recent Posts
              </Card.Title>
              <Link href="#!" scroll={false} className="btn btn-light btn-sm text-muted">
                View All
              </Link>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled personal-favourite mb-0 list-group list-group-flush">
                {PostList.map((post) => (
                  <li key={post.id} className="list-group-item bg-light mb-1 rounded">
                    <div className="d-flex align-items-start gap-3 flex-wrap flex-sm-nowrap">
                      <span className="avatar avatar-xs bg-pink-transparent avatar-rounded">
                        <i className="ri-arrow-right-s-fill fs-18 lh-1 align-middle"></i>
                      </span>
                      <div className="flex-fill text-truncate">
                        <div className="text-primary fw-semibold fs-16 text-truncate">
                          {post.time} <span className="text-muted fs-11 fw-medium"> {post.date}</span>
                        </div>
                        <p className="w-75 text-truncate mb-0">{post.description}</p>
                      </div>
                      <div className="ms-auto align-self-end flex-shrink-0">
                        <div className="media-posts">
                          <Image width={48} height={40} src={post.mediaUrl} alt={post.mediaAlt} className="img-fluid" />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={6}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Traffic Sources
              </Card.Title>
              <Link href="#!" scroll={false} className="btn btn-light btn-sm text-muted">
                Refresh
              </Link>
            </Card.Header>
            <Card.Body className="p-0">
              <Row className="row p-3 align-items-center gy-3 gy-xl-0">
                <Col xl={7} className="pe-0">
                  <ul className="list-unstyled mb-0">
                    {TrafficSources.map((social) => (
                      <li key={social.id} className={`p-1 rounded-3 social-traffic-list border border-dashed ${social.status}`}>
                        <div className="d-flex align-items-center flex-wrap gap-2">
                          <span className={`avatar avatar-md bg-${social.bgColor}-transparent`}>
                            <i className={`${social.icon} fs-17`}></i>
                          </span>
                          <div className="mb-0">
                            <p className="mb-0 fw-medium">{social.platform}</p>
                          </div>
                          <span className="text-muted fs-12 mt-1">{social.followers}</span>
                          <div className="ms-auto d-flex gap-4 align-items-center">
                            <div className="fw-semibold text-end">{social.growth}</div>
                            <div className="text-end me-1">
                              <span className={`badge ${social.changeDirection === 'up' ? 'bg-success-transparent' : 'bg-danger-transparent'}`}>
                                <i className={`ri-arrow-${social.changeDirection}-s-fill me-1 lh-1 align-middle`}></i>
                                {social.percentageChange}
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col xl={5} className="px-0">
                  <div id="media-traffic">
                    <Spkapexcharts chartOptions={TrafficOptions} chartSeries={TrafficSeries} type={"donut"} height={209} width={"100%"} />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Suggestions
              </Card.Title>
              <Link href="#!" scroll={false} className="btn btn-light btn-sm text-muted">
                View All
              </Link>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled media-suggestions mb-0">
                {Suggestionsdata.map((user) => (
                  <li key={user.id}>
                    <div className="d-flex align-items-center gap-1">
                      <div className="me-2">
                        <span className="avatar avatar-md p-1 bg-primary-transparent avatar-rounded">
                          <Image width={40} height={40} src={user.profileImage} alt="User Profile" />
                        </span>
                      </div>
                      <div className="flex-fill">
                        <div className="fw-semibold mb-0">{user.name}</div>
                        <span className="text-muted d-block fs-12">{user.mutualFriends} Mutual Friends</span>
                      </div>
                      <div>
                        <SpkButton Buttonvariant={user.following ? 'success-light' : 'primary'} Customclass="btn-sm" Buttontype="button">
                          <i className={`ri-user-${user.following ? 'follow' : 'add'}-line me-1`}></i>
                          {user.following ? 'Following' : 'Follow'}
                        </SpkButton>
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
        <Col xxl={3}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Requests
              </Card.Title>
              <Link href="#!" scroll={false} className="btn btn-light btn-sm text-muted">
                View All
              </Link>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled media-requests mb-0">
                {Requestsdata.map((user) => (
                  <li key={user.id}>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                      <div>
                        <span className="avatar avatar-md p-1 bg-primary-transparent avatar-rounded">
                          <Image width={40} height={40} src={user.profileImage} alt={user.name} />
                        </span>
                      </div>
                      <div className="flex-fill text-truncate">
                        <div className="fw-semibold mb-0">{user.name}</div>
                        <span className="text-muted fs-12 w-75 text-truncate">{user.timeAgo}</span>
                      </div>
                      <div className="btn-list text-nowrap ms-auto">
                        <SpkButton Buttonvariant="success-light" Customclass="btn-sm" Buttontype="button">
                          <i className="ri-check-line"></i> Accept
                        </SpkButton>
                        <SpkButton Buttonvariant="primary-light" Customclass="btn-sm btn-icon me-0" Buttontype="button">
                          <i className="ri-delete-bin-line"></i>
                        </SpkButton>
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
              <Card.Title>
                Social Media Performance
              </Card.Title>
              <div className="d-flex flex-wrap gap-2">
                <div>
                  <input className="form-control form-control-sm" type="text" placeholder="Search Here" />
                </div>
                <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Arrowicon={true} Toggletext="Sort By">
                  <Dropdown.Item href="#!">New</Dropdown.Item>
                  <Dropdown.Item href="#!">Popular</Dropdown.Item>
                  <Dropdown.Item href="#!">Relevant</Dropdown.Item>
                </SpkDropdown>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <SpkTables tableClass='table-bordered text-nowrap' header={[{ title: 'Date Range', headerClassname: 'bg-light' }, { title: 'Platform', headerClassname: 'bg-light' }, { title: 'Posts', headerClassname: 'bg-light' }, { title: 'Reach', headerClassname: 'bg-light' }, { title: 'Impressions', headerClassname: 'bg-light' }, { title: 'Engagements', headerClassname: 'bg-light' }, { title: 'CTR', headerClassname: 'bg-light' }, { title: 'Growth', headerClassname: 'bg-light' },]} >
                  {SocialMediaPerformance.map((data, index) => (
                    <tr key={index}>
                      <td>{data.dateRange}</td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <span className={`avatar avatar-sm bg-${data.color}-transparent`}>
                            <i className={`${data.icon} fs-16`}></i>
                          </span>
                          <span className="fw-medium">{data.platform}</span>
                        </div>
                      </td>
                      <td>{data.posts}</td>
                      <td>{data.impressions}</td>
                      <td className="fw-medium">{data.reach}</td>
                      <td>{data.clicks}</td>
                      <td className="text-success">{data.engagementRate}</td>
                      <td>
                        {data.growth}
                        <span
                          className={`badge bg-${data.growthBadge}-transparent ms-2`}
                        >
                          <i
                            className={`ri-arrow-${data.growthBadge === 'success' ? 'up' : 'down'}-s-fill me-1 lh-1 align-middle`}
                          ></i>
                          {data.growthPercentage}
                        </span>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
            <Card.Footer className="border-top-0 pt-0">
              <div className="d-flex align-items-center">
                <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
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
      {/* <!-- End::Row-3 --> */}

    </Fragment>
  )
}

export default Socialmedia;
