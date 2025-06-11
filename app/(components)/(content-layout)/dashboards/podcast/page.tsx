"use client"

import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown';
import { ActivitybyWeeks, Artistss, Categories, FavouritesList, PlayListdata, Popularpodcasts, RecentlyPlayed } from '@/shared/data/dashboards/podcastdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card, Col, Dropdown, Pagination, ProgressBar, Row } from 'react-bootstrap';

interface PodcastProps {}

const Podcast: React.FC<PodcastProps> = () => {

  return (

    <Fragment>

      {/* <!-- Page Header --> */}

      <Seo title="Dashboards-Podcast" />

      <Pageheader title="Dashboards" currentpage="Podcast" activepage="Podcast" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start Row-1 --> */}

      <Row>
        <Col xxl={9}>
          <Row>
            <Col xxl={4}>
              <Card className="custom-card">
                <Card.Header>
                  <Card.Title>
                    Favourites list
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled podcast-recently-played-list mb-0">
                    {FavouritesList.map((podcast, index) => (
                      <li key={index} className="fav-pod-list">
                        <div className="d-flex align-items-center gap-2">
                          <div className="lh-1">
                            <span className="fav-podcast">
                              <Image width={48} height={45.6} src={podcast.imageSrc} className={`bg-${podcast.iconColor} bg-opacity-25`} alt={podcast.title}/>
                            </span>
                          </div>
                          <div className="flex-fill">
                            <Link scroll={false} href="#!" className="fw-semibold">
                              {podcast.title}
                            </Link>
                            <p className="mb-0 text-muted mt-1">{podcast.host}</p>
                          </div>
                          <div className="text-end">
                            <div className="text-muted">{podcast.duration}</div>
                            <div className="d-flex gap-2 align-items-center mt-1">
                              <div className="fw-semibold me-1">
                                {podcast.likes}{" "}
                                <Link scroll={false} href="#!" className="fw-medium text-primary">
                                  <i className="ti ti-thumb-up-filled fs-13 lh-1"></i>
                                </Link>
                              </div>
                              <div className="fw-semibold">
                                {podcast.hearts}{" "}
                                <Link scroll={false} href="#!" className="fw-medium text-pink">
                                  <i className="ti ti-heart-filled fs-13 lh-1"></i>
                                </Link>
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
            <Col xxl={8}>
              <Card className="custom-card overflow-hidden podcast-banner">
                <Card.Body className="p-4">
                  <Row className="gy-3 gy-xl-0">
                    <Col lg={10} className="my-auto">
                      <h5 className="fw-semibold text-fixed-white">
                        Manage Your <span className="text-secondary">Podcast</span> Effectively
                      </h5>
                      <p className="fw-medium mb-4 pb-1 text-fixed-white op-7">Effortlessly manage, distribute, and track your podcast episodes to maximize reach and engagement.</p>
                      <div className="btn-list">
                        <SpkButton Buttonvariant='success' Customclass='shadow' Buttontype="button">
                          <i className="ri-volume-up-line me-2 fs-20 lh-1 align-middle"></i> Preview Your Latest Episodes
                        </SpkButton>
                      </div>
                    </Col>
                    <Col lg={2}>
                      <div className="podcast-img text-end">
                        <Image fill src="../../assets/images/podcast/11.jpg" className="img-fluid rounded-3" alt="" />
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="custom-card">
                <Card.Header className="justify-content-between">
                  <Card.Title>
                    Popular Artists
                  </Card.Title>
                  <SpkButton Buttonvariant='primary' Customclass='btn-sm' Buttontype="button">  View All</SpkButton>
                </Card.Header>
                <Card.Body>
                  <div className="list-unstyled row mt-1">
                    {Artistss.map((podcast, index) => (
                      <Col key={index} xl={3} sm={6} className={podcast.class}>
                        <div className={`border border-${podcast.borderColor} border-opacity-10 align-items-center gap-2 p-3 text-center rounded-3 pod-artist`}>
                          <div className="lh-1 mb-3">
                            <span className={`podcast-author ${podcast.textColor} rounded-circle d-inline-block`}>
                              <span className="avatar avatar-xxl p-1 bg-white avatar-rounded">
                                <Image width={80} height={80} src={podcast.imageSrc} alt={podcast.title} />
                              </span>
                            </span>
                          </div>
                          <div>
                            <Link scroll={false} href="#!" className="fw-semibold">
                              {podcast.title}
                            </Link>
                            <p className="text-muted mb-2">{podcast.author}</p>
                            <span className={`text-${podcast.textColor} fw-semibold`}>
                              {podcast.postsCount} Posts
                            </span>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xxl={3}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>Activity by Week</Card.Title>
              <SpkButton Buttonvariant='light' Customclass='btn-sm' Buttontype="button">  View All</SpkButton>
            </Card.Header>
            <Card.Body className="mt-1">
              {ActivitybyWeeks.map((episode, index) => (
                <div className={`d-flex align-items-start ${episode.parentClass}`} key={index}>
                  <div className="me-3">
                    <span className={`avatar avatar-md p-2 bg-${episode.avatarColor}-transparent border border-${episode.avatarColor} border-opacity-25 avatar-rounded`}>
                      {episode.avatarInitials}
                    </span>
                  </div>
                  <div className="flex-fill mt-1">
                    <div className="d-flex align-items-top justify-content-between mb-2">
                      <div>
                        <div className="fw-semibold mb-1 lh-1">Episode {episode.episodeNumber}</div>
                        <p className="mb-0 text-muted">{episode.title}</p>
                      </div>
                      <div className="text-muted fw-medium fs-12">Last Played</div>
                    </div>
                    <div className="d-flex align-items-top gap-3 justify-content-between">
                      <ProgressBar className="progress progress-lg p-1 rounded-pill progress-animate custom-progress-4 flex-fill" role="progressbar" aria-valuenow={episode.progress} aria-valuemin={0} aria-valuemax={100}>
                        <ProgressBar className={`progress-bar progress-bar-striped bg-${episode.avatarColor}`} now={episode.progress} />
                      </ProgressBar>
                      <div>
                        <strong>{episode.duration}</strong>
                        <span className="text-muted"> mins</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End::Row-1 --> */}

      {/* <!-- Start::Row-2 --> */}
      <Row>
        <Col xxl={8}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Most Popular
              </Card.Title>
              <SpkButton Buttonvariant='light' Customclass='btn-sm' Buttontype="button">  View All</SpkButton>
            </Card.Header>
            <Card.Body>
              <Row className="gy-4">
                {Popularpodcasts.map((podcast, index) => (
                  <Col xxl={4} sm={6} key={index}>
                    <Card className="custom-card shadow-none border bg-primary-transparent overflow-hidden mb-0">
                      <Row className="g-0">
                        <Col md={4}>
                          <Image fill src={podcast.imageSrc} className="img-fluid h-100 w-100" alt={podcast.title} />
                        </Col>
                        <Col md={8}>
                          <Card.Body>
                            <div className="d-flex justify-content-between align-items-start gap-2 flex-wrap">
                              <div>
                                <Link scroll={false} href="#!">
                                  <h6 className="fw-semibold mb-0">{podcast.title}</h6>
                                </Link>
                                <p className="text-muted fs-12">{podcast.author}</p>
                                <span className="fw-medium">{podcast.likes.toLocaleString()} likes</span>
                              </div>
                              <SpkButton Buttonvariant="primary" Customclass="btn-sm btn-icon rounded-circle" Buttontype="button"> <i className="ri-play-fill lh-1 align-middle"></i>
                              </SpkButton>
                            </div>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4} className="col-xxl-4">
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>
                Recently Played
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled podcast-played-list mb-2">
                {RecentlyPlayed.map((podcast, index) => (
                  <li className="played-list" key={index}>
                    <div className="d-flex align-items-center gap-3 flex-wrap">
                      <div className="lh-1">
                        <span className="avatar avatar-md">
                          <Image width={40} height={40} src={podcast.imageSrc} alt={podcast.title} />
                        </span>
                      </div>
                      <div className="flex-fill">
                        <Link scroll={false} href="#!" className="fw-semibold">
                          {podcast.title}
                        </Link>
                        <span className="d-block fs-13 text-muted">By {podcast.author}</span>
                      </div>
                      <div className="flex-fill text-center">
                        <div className="text-muted fw-medium">
                          <i className="ri-star-fill text-warning me-1 align-end lh-1"></i>
                          {podcast.rating}
                        </div>
                      </div>
                      <div className="text-end">
                        <Link scroll={false} href="#!" className={`fw-medium ${podcast.liked ? 'text-danger' : 'text-gray-3'}`}>
                          <i className={`ri-heart-fill fs-18 lh-1 ${podcast.liked ? 'text-danger' : 'text-gray-3'}`}></i>
                        </Link>
                        <span className="d-block fs-13 text-muted">{podcast.duration}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <Link scroll={false} href="#!" className="btn btn-sm btn-primary-light d-grid">View More</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End::Row-2 --> */}

      {/* <!-- Start::Row-3 --> */}
      <Row>
        <div className="col-12">
          <Card className="custom-card">
            <Card.Body>
              <div className="mb-4 d-flex align-items-center justify-content-between bg-light p-2 px-3 rounded-3">
                <h6 className="fw-semibold mb-0">Categories :</h6>
                <SpkButton Buttonvariant='primary' Customclass='btn-sm' Buttontype="button">
                  View All
                </SpkButton>
              </div>
              <Row className="row-cols-md-4 row-cols-sm-3 row-cols-xxl-auto personal-favourite-contacts mb-0 gap-2 flex-wrap">
                {Categories.map((category, index) => (
                  <Col className="flex-fill" key={index}>
                    <div className={`d-flex align-items-center ${category.bgColor}-transparent rounded-pill p-2 pe-5`}>
                      <div className="me-2">
                        <span className={`avatar avatar-md avatar-rounded ${category.iconColor} p-2`}>
                          <i className={`${category.icon} fs-18 lh-1`}></i>
                        </span>
                      </div>
                      <div className="flex-fill">
                        <div className="fw-semibold mb-0 text-default">{category.title}</div>
                        <span className="text-muted">{category.count}</span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </div>
        <Col xl={9}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Play List
              </Card.Title>
              <div className="d-flex flex-wrap gap-2">
                <div>
                  <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                </div>
                <SpkDropdown Id="dropdownMenuButton1" Togglevariant="primary" Menulabel="dropdownMenuButton1" Toggletext="Sort By" Customtoggleclass="btn-sm btn-wave waves-effect waves-light">
                  <Dropdown.Item as="li" href="#!">New</Dropdown.Item>
                  <Dropdown.Item as="li" href="#!">Popular</Dropdown.Item>
                  <Dropdown.Item as="li" href="#!">Relevant</Dropdown.Item>
                </SpkDropdown>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables tableClass='text-nowrap' header={[{ title: 'Podcast Name', headerClassname: 'bg-light' }, { title: 'duration', headerClassname: 'bg-light' }, { title: 'Category', headerClassname: 'bg-light' }, { title: 'Latest Episode', headerClassname: 'bg-light' }, { title: 'Rating', headerClassname: 'bg-light' }, { title: 'Favourites', headerClassname: 'bg-light' }, { title: 'Action', headerClassname: 'bg-light' },]} >
                  {PlayListdata.map((podcast, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex gap-2">
                          <span className="avatar avatar-md">
                            <Image width={40} height={40} src={podcast.imageSrc} alt={podcast.title} />
                          </span>
                          <div>
                            <Link scroll={false} href="#!" className="fw-semibold mb-0 d-flex align-items-center">
                              {podcast.title}
                            </Link>
                            <span className="fs-12 d-block text-muted">{podcast.author}</span>
                          </div>
                        </div>
                      </td>
                      <td>{podcast.duration}</td>
                      <td>
                        <span className={`badge ${podcast.category === 'Technology' ? 'bg-secondary-transparent' : ''} ${podcast.category === 'Wellness' ? 'bg-primary-transparent' : ''} ${podcast.category === 'History' ? 'bg-success-transparent' : ''} ${podcast.category === 'Business' ? 'bg-info-transparent' : ''}`}>
                          {podcast.category}
                        </span>
                      </td>
                      <td>{podcast.episodeTitle}</td>
                      <td>
                        <span className="text-success fs-15 fw-semibold">{podcast.rating}</span>
                      </td>
                      <td>
                        <Link scroll={false} aria-label="anchor" href="#!">
                          <i className="ri-heart-fill fs-16 lh-1 text-danger me-2"></i>
                          {podcast.added ? 'Added' : 'Add'}
                        </Link>
                      </td>
                      <td>
                        <SpkDropdown Id="dropdownMenuButton1" Togglevariant="light" Menulabel="dropdownMenuButton1" IconClass="fe fe-more-vertical" Icon={true} Toggletext="" Customtoggleclass="btn-icon btn-sm no-caret">
                          <Dropdown.Item as="li" href="#!">Download</Dropdown.Item>
                          <Dropdown.Item as="li" href="#!">Import</Dropdown.Item>
                          <Dropdown.Item as="li" href="#!">Export</Dropdown.Item>
                        </SpkDropdown>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
            <Card.Footer className="border-top-0">
              <div className="d-flex align-items-center">
                <div> Showing 4 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
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
        <Col xl={3}>
          <Card className="custom-card overflow-hidden bg-playing-image">
            <Card.Body className="p-4 text-fixed-white">
              <h5 className="fw-semibold text-fixed-white mb-1 mt-2">Player</h5>
              <p className="op-8 fs-12 mb-4">Enjoy the unlimited music tracks</p>
              <div className="text-center mb-4">
                <div className="mb-4 pod-player-img">
                  <Image fill src="../../assets/images/podcast/1.jpg" alt="" className="rounded-circle shadow-sm" />
                </div>
                <Link scroll={false} href="#!"><h6 className="fw-semibold mb-1 text-fixed-white">Mindful Living</h6></Link>
                <span className=" op-8 fs-12">By Wanderlost Explorers</span>
              </div>
              <div className="d-flex gap-3 align-items-center mb-4">
                <div className="fs-12">12.25</div>
                <ProgressBar className="progress progress-xs progress-custom progress-animate podcast-playing-progress" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                  <ProgressBar className="progress-bar bg-secondary" now={50} />
                </ProgressBar>
                <div className="fs-12">23.45</div>
              </div>
              <div className="d-flex align-items-center justify-content-center pt-3 mb-2 flex-wrap gap-3 lh-1">
                <Link scroll={false} aria-label="anchor" href="#!">
                  <i className="ri-repeat-2-line fs-18 p-3 rounded-circle text-fixed-white pod-icons shadow-sm"></i>
                </Link>
                <Link scroll={false} aria-label="anchor" href="#!">
                  <i className="ri-skip-back-line fs-18 p-3 rounded-circle text-fixed-white pod-icons shadow-sm"></i>
                </Link>
                <Link scroll={false} aria-label="anchor" href="#!">
                  <i className="ri-pause-line fs-18 p-3 rounded-circle text-fixed-white pod-icons shadow-sm"></i>
                </Link>
                <Link scroll={false} aria-label="anchor" href="#!">
                  <i className="ri-skip-forward-line fs-18 p-3 rounded-circle text-fixed-white pod-icons shadow-sm"></i>
                </Link>
                <Link scroll={false} aria-label="anchor" href="#!">
                  <i className="ri-shuffle-line fs-18 p-3 rounded-circle text-fixed-white pod-icons shadow-sm"></i>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End::Row-3 --> */}

    </Fragment>
  )
}

export default Podcast;
