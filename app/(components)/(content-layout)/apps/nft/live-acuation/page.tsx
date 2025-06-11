"use client"

import SpkTrendcard from "@/shared/@spk-reusable-components/reusable-dashboards/spk-trendcard";
import { Categories, TopNfts } from "@/shared/data/apps/nft/liveauctiondata";
import { MarketplaceAll } from "@/shared/data/apps/nft/marketplacedata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Pagination, Row } from "react-bootstrap";

interface LiveAuctionProps {}

const LiveAuction: React.FC<LiveAuctionProps> = () => {

    const threeNFTs = MarketplaceAll.slice(0, 6);

    const [activeTag, setActiveTag] = useState<number>(0);
    const handleTagClick = (index: number) => {
        setActiveTag(index);
    };

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-Live Auction" />

            <Pageheader title="Apps" currentpage="Live Auction" activepage="Live Auction" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={3} xl={4}>
                    <Card className="custom-card products-navigation-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Filter
                            </Card.Title>
                            <Link href="#!" className="text-secondary text-decoration-underline">Clear All</Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="p-3 border-bottom">
                                <div className="fw-medium mb-0">Creator Status</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Creator-Verified" defaultChecked />
                                        <label className="form-check-label" htmlFor="Creator-Verified">
                                            Verified Creators
                                        </label>
                                        <span className="badge bg-light text-default float-end">20</span>
                                    </div>
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Creator-NonVerified" />
                                        <label className="form-check-label" htmlFor="Creator-NonVerified">
                                            Non-Verified Creators
                                        </label>
                                        <span className="badge bg-light text-default float-end">40</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <div className="fw-medium mb-0">NFT Categories</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Category-Art" defaultChecked />
                                        <label className="form-check-label" htmlFor="Category-Art">
                                            Digital Art
                                        </label>
                                        <span className="badge bg-light text-default float-end">60</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Category-Music" />
                                        <label className="form-check-label" htmlFor="Category-Music">
                                            Music
                                        </label>
                                        <span className="badge bg-light text-default float-end">25</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Category-Collectibles" />
                                        <label className="form-check-label" htmlFor="Category-Collectibles">
                                            Collectibles
                                        </label>
                                        <span className="badge bg-light text-default float-end">35</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <div className="fw-medium mb-0">Price Brackets</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Price-Under-0-5ETH" defaultChecked />
                                        <label className="form-check-label" htmlFor="Price-Under-0-5ETH">
                                            Under 0.5 ETH
                                        </label>
                                        <span className="badge bg-light text-default float-end">70</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Price-0-5-2ETH" />
                                        <label className="form-check-label" htmlFor="Price-0-5-2ETH">
                                            0.5 - 2 ETH
                                        </label>
                                        <span className="badge bg-light text-default float-end">45</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Price-2-5ETH" />
                                        <label className="form-check-label" htmlFor="Price-2-5ETH">
                                            2 - 5 ETH
                                        </label>
                                        <span className="badge bg-light text-default float-end">25</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <div className="fw-medium mb-0">Blockchain Standards</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Token-BSC" />
                                        <label className="form-check-label" htmlFor="Token-BSC">
                                            Binance Smart Chain
                                        </label>
                                        <span className="badge bg-light text-default float-end">30</span>
                                    </div>
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Token-Polygon" />
                                        <label className="form-check-label" htmlFor="Token-Polygon">
                                            Polygon
                                        </label>
                                        <span className="badge bg-light text-default float-end">20</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <div className="fw-medium mb-0">Auction States</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Auction-Live" defaultChecked />
                                        <label className="form-check-label" htmlFor="Auction-Live">
                                            Live Auctions
                                        </label>
                                        <span className="badge bg-light text-default float-end">75</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Auction-Closed" />
                                        <label className="form-check-label" htmlFor="Auction-Closed">
                                            Closed Auctions
                                        </label>
                                        <span className="badge bg-light text-default float-end">20</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <div className="fw-medium mb-0">Ownership Types</div>
                                <div className="px-0 py-3 pb-1">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Ownership-Listed" />
                                        <label className="form-check-label" htmlFor="Ownership-Listed">
                                            Listed for Sale
                                        </label>
                                        <span className="badge bg-light text-default float-end">50</span>
                                    </div>
                                    <div className="form-check mb-1">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Ownership-NotListed" />
                                        <label className="form-check-label" htmlFor="Ownership-NotListed">
                                            Not Listed for Sale
                                        </label>
                                        <span className="badge bg-light text-default float-end">40</span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Top NFT's
                            </Card.Title>
                            <div>
                                <Link scroll={false} href="#!" className="text-secondary text-decoration-underline">Explore More</Link>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <ul className="list-group list-group-flush">
                                {TopNfts.map((item, index) => (
                                    <li key={index} className="list-group-item">
                                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div className="d-flex align-items-center">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-md avatar-rounded me-2">
                                                        <Image width={40} height={40} src={item.imageSrc} alt={item.altText} className="nft-image" />
                                                    </span>
                                                </div>
                                                <div className="align-items-center">
                                                    <p className="mb-0 fw-medium">{item.title} <i className="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                    <span className="fs-12 text-muted">{item.creator} ({item.username})</span>
                                                </div>
                                            </div>
                                            <div className="text-end ms-auto">
                                                <p className="current-bid mb-0"><span className="text-muted">Bid:</span> <span className="fw-medium">{item.bidAmount}</span></p>
                                                <p className="remaining-time mb-0"><span className="text-muted">Time:</span> <span className="fw-medium text-primary">{item.remainingTime}</span></p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9} xl={8}>
                    <Card className="custom-card">
                        <Card.Header className="bg-white p-3">
                            <Card.Title>
                                Categories
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" d-flex align-items-center justify-content-between flex-wrap gap-2">
                            {Categories.map((tag, index) => (
                                <div key={index} className={`nft-tag p-1 ${tag.className} ${activeTag === index ? ' active' : ''}`}
                                    onClick={() => handleTagClick(index)}>
                                    <Link href="#!" className="stretched-link"></Link>
                                    <span>
                                        <i className={`${tag.icon} lh-1 fs-18 align-middle nft-tag-icon`}></i>
                                    </span>
                                    <span className="nft-tag-text">{tag.text}</span>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                    <Card.Body className="">
                        <Row className="trendy-card">
                            <h6 className="fw-medium mb-3">Live Auction:</h6>
                            {threeNFTs.map((idx, index) => (
                                <Col xxl={4} xl={6} lg={6} md={6} sm={6} key={index} className="col-12">
                                    <SpkTrendcard btnClass="btn-w-lg" trend={idx} showLikes={true} />
                                </Col>
                            ))}
                            <nav aria-label="Page navigation" className="pagination-style-4">
                                <Pagination className="text-center justify-content-end gap-1">
                                    <Pagination.Item className="disabled">Prev</Pagination.Item>
                                    <Pagination.Item className="active">1</Pagination.Item>
                                    <Pagination.Item className="">2</Pagination.Item>
                                    <Pagination.Item className=""><i className="bi bi-three-dots"></i></Pagination.Item>
                                    <Pagination.Item className="">16</Pagination.Item>
                                    <Pagination.Item className="">17</Pagination.Item>
                                    <Pagination.Item className="text-primary">next</Pagination.Item>
                                </Pagination>
                            </nav>
                        </Row>
                    </Card.Body>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default LiveAuction;