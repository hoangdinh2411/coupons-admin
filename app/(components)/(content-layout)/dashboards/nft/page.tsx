"use client"

import SpkAcuationcard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-acuationcard'
import SpkNftcard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-nftcard'
import SpkTrendcard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-trendcard'
import Spkapexcharts from '@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts'
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables'
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons'
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown'
import { AuctionsData, BalanceOptions, BalanceSeries, Collectionsdata, Creatorsdata, Latestdata, NFTCard, RecentActivity, SellingOptions, SellingSeries, Trendingdata } from '@/shared/data/dashboards/nftdata'
import Pageheader from '@/shared/layouts-components/pageheader/pageheader'
import Seo from '@/shared/layouts-components/seo/seo'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card, Col, Dropdown, Pagination, Row } from 'react-bootstrap'

interface NftProps {}

const Nft: React.FC<NftProps> = () => {

  return (

    <Fragment>

      {/* <!-- Page Header --> */}

      <Seo title="Dashboards-NFT" />

      <Pageheader title="Dashboards" currentpage="NFT" activepage="NFT" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start::row-1 --> */}
      <Row>
        <Col xxl={7} xl={12} lg={12}>
          <Card className="custom-card overflow-hidden nft-main-card">
            <Card.Body>
              <Row className="gap-3 gap-sm-0 mx-0 py-3 rounded-3">
                <Col xxl={8} xl={6} lg={8} className="col-12">
                  <div className="p-2">
                    <h6 className="fw-semibold mb-3 op-9 text-fixed-white"> Welcome Back, Anthony to our NFT page! &#128075;</h6>
                    <h4 className="fw-semibold mb-2  text-fixed-white"> Unleash your creativity by minting your own <span className="text-secondary">NFT's</span> directly</h4>
                    <p className="mb-4 text-fixed-white op-7 fs-12">
                      Easily mint your own NFTs with our intuitive platform, empowering you to showcase your creativity. Join the vibrant NFT marketplace and turn your digital art into valuable assets!
                    </p>
                    <div className="d-flex gap-2 flex-wrap">
                      <SpkButton Buttonvariant='success' Customclass='btn-wave waves-effect waves-light' Buttontype="button">Explore NFTs </SpkButton>
                      <SpkButton Buttonvariant='secondary' Customclass='btn-wave waves-effect waves-light' Buttontype="button">Launch Your NFT</SpkButton>
                    </div>
                  </div>
                </Col>
                <Col xxl={4} xl={6} lg={4} className="my-auto text-end">
                  <div className="featured-nft text-end">
                    <Image fill src="../../assets/images/nft-images/15.png" alt="" className="img-fluid nft-cardimg rounded-3" />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={5}>
          <Card className="custom-card">
            <Card.Body>
              <Row className="gy-3 gy-sm-0">
                <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12">
                  {NFTCard.map((idx, index) => (
                    <SpkNftcard key={index} nft={idx} />
                  ))}
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12 nft-bal-col p-2 rounded-3 border border-dashed d-flex align-items-start flex-column">
                  <div className="d-flex p-3 border border-dashed rounded-3 align-items-center gap-2 bg-primary bg-opacity-10 mb-auto flex-wrap w-100">
                    <i className="ti ti-coins fs-1 text-primary"></i>
                    <div>
                      <p className="mb-1 text-muted">Total Balance: </p>
                      <p className="mb-0 fw-semibold ms-2 fs-15"> $66,875.4</p>
                    </div>
                    <div className="ms-auto text-end">
                      <span className="badge bg-success">+ 0.125%</span>
                      <div className="text-muted fw-medium fs-12 mt-1">from last month</div>
                    </div>
                  </div>
                  <div id="nft-balance" className="w-100">
                    <Spkapexcharts chartOptions={BalanceOptions} chartSeries={BalanceSeries} type={"area"} height={"115"} width={"100%"} />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End::row-1 --> */}

      {/* <!-- Start::row-2 --> */}
      <Row>
        <Col xxl={5} xl={12} lg={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Live Auctions
              </div>
              <Link scroll={false} href="#!" className="btn btn-sm btn-light text-muted">
                Explore More
              </Link>
            </Card.Header>
            <Card.Body>
              <Row>
                {AuctionsData.map((idx, index) => (
                  <Col sm={4} key={index}>
                    <SpkAcuationcard acuation={idx} />
                  </Col>
                ))}
              </Row>
              <div className="p-1 rounded bg-success-transparent text-center">
                <p className="mb-0 border border-success border-opacity-25 bg-success-transparent fw-medium nft-auction-time p-1 rounded">02hrs : 45m : 12s</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4} xl={8} lg={7} md={12} sm={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between flex-wrap">
              <div className="card-title">
                Recent Activity
              </div>
              <Link scroll={false} href="#!" className="text-muted fw-medium">View All</Link>
            </Card.Header>
            <Card.Body className="p-0 py-2">
              <ul className="list-group list-group-flush mb-2 mt-1">
                {RecentActivity.map((item, index) => (
                  <li className="list-group-item border-0" key={index}>
                    <div className="d-flex gap-2 align-items-center flex-wrap">
                      <div className={`avatar avatar-md ${item.avatarColor} avatar-rounded flex-shrink-0 align-self-start`}>
                        <div className="fs-15">{item.number}</div>
                      </div>
                      <div className="flex-fill text-truncate">
                        <p className="fw-semibold mb-0">{item.username}
                          {item.images && item.images.length > 0 && (
                            <span className="avatar-list-stacked ms-1">
                              {item.images.map((img, idx) => (
                                <span className="avatar avatar-xs avatar-rounded" key={idx}>
                                  <Image width={20} height={20} src={img} alt="" />
                                </span>
                              ))}
                            </span>
                          )}
                        </p>
                        <p className="text-muted mb-0 fs-12 w-75 text-truncate">
                          {item.text}{' '}
                          {item.linkText && item.linkUrl && (
                            <Link scroll={false} href={item.linkUrl} className="text-primary fw-medium">
                              {item.linkText}
                            </Link>
                          )}
                        </p>
                      </div>
                      <div className="ms-auto text-end text-muted fw-medium flex-shrink-0 fs-11">
                        <i className="ri-calendar-schedule-line text-pink fs-14 me-1 d-inline-block"></i>
                        {item.timestamp}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={4} lg={5} md={12} sm={12} >
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Top Selling NFTs (%)
              </div>
              <div>
                <SpkButton Buttonvariant='primary-light' Customclass=' btn-sm btn-wave waves-effect waves-light' Buttontype="button">View Stats</SpkButton>
              </div>
            </Card.Header>
            <Card.Body>
              <div id="sales-nft" className="rounded-3 mb-2">
                <Spkapexcharts chartOptions={SellingOptions} chartSeries={SellingSeries} type={"radialBar"} height={"283"} width={"100%"} />
              </div>
              <div className="d-flex p-3 border border-dashed rounded bg-light align-items-center gap-2">
                <i className="ti ti-coins fs-1 text-primary"></i>
                <div>
                  <p className="mb-1 fw-semibold">Total NFTs Sold: </p>
                  <p className="mb-0 text-pink fw-semibold ms-2"> 2,879</p>
                </div>
                <div className="ms-auto text-end">
                  <p className="text-success fw-semibold mb-0">+ 0.14%</p>
                  <span className="text-muted fw-medium fs-12">from last month</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End::row-2 --> */}

      {/* <!-- Start::row-3 --> */}
      <Row>
        <Col xxl={4} xl={12} lg={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Header>
              <div className="card-title">
                Top NFTs Collections
              </div>
            </Card.Header>
            <Card.Body className="p-0" id="top-collector">
              <div className="table-responsive">
                <SpkTables tableClass='table-hover text-nowrap' >
                  {Collectionsdata.map((row, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="me-2">
                            <span className={`avatar avatar-md p-1 ${row.avatarColor}`}>
                              <Image width={40} height={40} src={row.avatarImage} alt={row.name} />
                            </span>
                          </div>
                          <div>
                            <p className="fw-semibold mb-0">{row.name}</p>
                            <p className="mb-0 text-muted fs-12">{row.collection}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avatar-list-stacked">
                          {row.nftImages.map((nftImage, idx) => (
                            <span className="avatar avatar-sm avatar-rounded" key={idx}>
                              <Image src={nftImage} alt={`NFT ${idx + 1}`} height={28} width={28} />
                            </span>
                          ))}
                          {row.spanClass}
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 fw-semibold fs-14">{row.price}</p>
                        <span className="fs-11 fw-normal text-success">{row.ethAmount}</span>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={8} xl={12} lg={12}>
          <div className="mb-4 d-flex align-items-center justify-content-between">
            <h5 className="fw-semibold mb-0">Trending Collections :</h5>
            <div>
              <Link scroll={false} href="#!" className="text-primary fw-medium">View All</Link>
            </div>
          </div>
          <Row className='trendy-card'>
            {Trendingdata.map((idx, index) => (
              <Col xxl={3} xl={3} lg={3} md={3} sm={6} key={index} className="col-12">
                <SpkTrendcard btnClass='w-100' trend={idx} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      {/* <!-- End::row-3 --> */}

      {/* <!-- Start::row-4 --> */}
      <Row>
        <Col xl={3}>
          <div className="d-flex gap-2 justify-content-between align-items-center mb-3">
            <h6 className="mb-0">Featured Creators</h6>
          </div>
          <Card className="custom-card overflow-hidden bg-transparent">
            <Card.Body className="p-0">
              <ul className="list-group list-group-flush">
                {Creatorsdata.map((user, index) => (
                  <li className="list-group-item mb-3 rounded-3" key={index}>
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="me-2 lh-1">
                          <span className="avatar avatar-lg">
                            <Image width={48} height={48} src={user.avatarImage} alt={user.name} />
                          </span>
                        </div>
                        <div className="align-items-center">
                          <p className="mb-0 fw-semibold">
                            {user.name}
                            <i className="bi bi-patch-check-fill text-success ms-2"></i>
                          </p>
                          <span className="fs-12 text-muted">{user.email}</span>
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="text-muted fs-12 mb-1 fw-medium">Sold: {user.soldCount}</div>
                        <SpkButton
                          Buttonvariant={user.buttonVariant}
                          Customclass="btn-sm btn-wave waves-effect waves-light"
                          Buttontype="button"
                        >
                          {user.buttonText}
                        </SpkButton>
                      </div>
                    </div>
                  </li>
                ))}
                <li className="list-group-item rounded-3 text-center">
                  <Link scroll={false} href="#!" className="btn btn-success btn-sm w-100 text-nowrap">
                    View All
                  </Link>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={9}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Latest Bids
              </div>
              <div className="d-flex">
                <div className="me-3">
                  <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                </div>
                <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-primary btn-sm no-caret" Arrowicon={true} Toggletext="Sort By">
                  <Dropdown.Item href="#!">New</Dropdown.Item>
                  <Dropdown.Item href="#!">Popular</Dropdown.Item>
                  <Dropdown.Item href="#!">Relevant</Dropdown.Item>
                </SpkDropdown>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <SpkTables tableClass='table-hover table-bordered text-nowrap nft-table' headerClass="border border-dashed" header={[{ title: 'Bid Item', headerClassname: 'bg-light' }, { title: 'Amount', headerClassname: 'bg-light' }, { title: 'Current Offer', headerClassname: 'bg-light' }, { title: 'Submitted By', headerClassname: 'bg-light' }, { title: 'Status', headerClassname: 'bg-light' }, { title: 'Time Remaining', headerClassname: 'bg-light' }, { title: 'Actions', headerClassname: 'bg-light' }]} >
                  {Latestdata.map((nft, index) => (
                    <tr key={index} className="border border-dashed">
                      <td className="border border-dashed">
                        <div className="d-flex align-items-center">
                          <div className="me-2 lh-1">
                            <span className="avatar avatar-md avatar-rounded">
                              <Image width={40} height={40} src={nft.nftImage} alt={nft.nftName} />
                            </span>
                          </div>
                          <div>
                            <p className="mb-0 fw-semibold">
                              <Link scroll={false} href="#!" title={nft.nftName}>{nft.nftName}</Link>
                            </p>
                            <Link scroll={false} href="#!" className="fs-12 text-muted fw-normal" title={nft.creator}>{nft.creator}</Link>
                          </div>
                        </div>
                      </td>
                      <td className="border border-dashed">
                        <div className="d-flex align-items-center">
                          <div className="me-2 lh-1">
                            <span className="avatar avatar-xs avatar-rounded">
                              <Image width={20} height={20} src="../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="Ethereum" />
                            </span>
                          </div>
                          <div>
                            <p className="mb-0 fw-semibold">{nft.originalPrice}</p>
                          </div>
                        </div>
                      </td>
                      <td className="border border-dashed">
                        <div className="d-flex align-items-center">
                          <div className="me-2 lh-1">
                            <span className="avatar avatar-xs avatar-rounded">
                              <Image width={20} height={20} src="../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="Ethereum" />
                            </span>
                          </div>
                          <div>
                            <p className="mb-0 fw-semibold text-success">{nft.currentPrice}</p>
                          </div>
                        </div>
                      </td>
                      <td className="border border-dashed">
                        <div className="d-flex align-items-center">
                          <div className="lh-1">
                            <span className="avatar avatar-sm avatar-rounded me-2">
                              <Image width={28} height={28} src={nft.sellerImage} alt={nft.sellerName} />
                            </span>
                          </div>
                          <div className="align-items-center">
                            <p className="mb-0 fw-medium">{nft.sellerName}</p>
                          </div>
                        </div>
                      </td>
                      <td className="border border-dashed">
                        <span className={`badge ${nft.status === 'Open' ? 'bg-primary' : nft.status === 'Pending' ? 'bg-warning' : 'bg-danger'}`}>{nft.status}</span>
                      </td>
                      <td className="border border-dashed">
                        <span className="text-muted fs-medium">{nft.timeRemaining}</span>
                      </td>
                      <td className="border border-dashed">
                        <div className="d-flex gap-2 align-items-center pt-1">
                          <SpkButton Buttonvariant="success-light" Customclass="btn-sm btn-icon" Buttontype="button">
                            <i className="ri-pencil-line lh-1 align-middle"></i>
                          </SpkButton>
                          <SpkButton Buttonvariant="danger-light" Customclass="btn-sm btn-icon" Buttontype="button">
                            <i className="ri-delete-bin-line lh-1 align-middle"></i>
                          </SpkButton>
                        </div>
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
      {/* <!-- End::row-4 --> */}

    </Fragment>
  )
}

export default Nft;
