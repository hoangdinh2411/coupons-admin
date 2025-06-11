"use client"

import SpkTrendcard from "@/shared/@spk-reusable-components/reusable-dashboards/spk-trendcard";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { MarketplaceAll, MarketplaceArt, MarketplaceAvatar, MarketplaceDomain, MarketplaceFashion, MarketplaceGaming, MarketplaceMemes, MarketplaceMusic, MarketplaceReal, MarketplaceSports } from "@/shared/data/apps/nft/marketplacedata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Nav, Pagination, Row, Tab } from "react-bootstrap";

interface MarketPlaceProps {}

const MarketPlace: React.FC<MarketPlaceProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-Market Place" />

            <Pageheader title="Apps" currentpage="Market Place" activepage="Market Place" />

            {/* <!-- Page Header Close --> */}

            <Tab.Container defaultActiveKey="all">
                {/* <!-- Start::row-1 --> */}
                <Row className=" justify-content-center">
                    <Col xl={11}>
                        <Card className=" custom-card">
                            <Card.Body className="">
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <div>
                                        <Nav as="ul" className="nav-tabs nav-tabs-header mb-0" role="tablist">
                                            <Nav.Item as="li" role="presentation">
                                                <Nav.Link as="a" eventKey="all" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-all" aria-selected="true">All</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li" role="presentation">
                                                <Nav.Link as="a" eventKey="art" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-art" aria-selected="false" tabIndex={-1}>Art</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li" role="presentation">
                                                <Nav.Link as="a" eventKey="gaming" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-gaming" aria-selected="false" tabIndex={-1}>Gaming</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li" role="presentation">
                                                <Nav.Link as="a" eventKey="domain" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-domain" aria-selected="false" tabIndex={-1}>Domain</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li" role="presentation">
                                                <Nav.Link as="a" eventKey="music" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-music" aria-selected="false" tabIndex={-1}>Music</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li" role="presentation">
                                                <Nav.Link as="a" eventKey="realestate" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-realestate" aria-selected="false" tabIndex={-1}>Real Estate</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li" role="presentation">
                                                <Nav.Link as="a" eventKey="sports" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-sports" aria-selected="false" tabIndex={-1}>Sports</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li" role="presentation">
                                                <Nav.Link as="a" eventKey="fashion" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-fashion" aria-selected="false" tabIndex={-1}>Fashion</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li" role="presentation">
                                                <Nav.Link as="a" eventKey="avatars" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-avatars" aria-selected="false" tabIndex={-1}>Avatars</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li" role="presentation">
                                                <Nav.Link as="a" eventKey="memes" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-memes" aria-selected="false" tabIndex={-1}>Memes</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <SpkButton Buttonvariant="secondary" Size="sm" Buttontype="button" Customclass="">Filters</SpkButton>
                                        <SpkDropdown toggleas="a" Navigate="#!" Customtoggleclass="btn btn-sm btn-wave btn-primary waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                            <li><Link className="dropdown-item" scroll={false} href="#!">New Collection</Link></li>
                                            <li><Link className="dropdown-item" scroll={false} href="#!">High - Low</Link></li>
                                            <li><Link className="dropdown-item" scroll={false} href="#!">Low - High</Link></li>
                                        </SpkDropdown>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <!--End::row-1 --> */}

                {/* <!-- Start:: row-2 --> */}
                <Row className=" justify-content-center">
                    <Col xl={11} className="col-xl-11">
                        <Tab.Content>
                            <Tab.Pane eventKey="all" className="p-0 border-0" id="nft-all" role="tabpanel">
                                <Row className="">
                                    {MarketplaceAll.map((idx, index) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} key={index} className="col-12">
                                            <SpkTrendcard btnClass="btn-w-lg" trend={idx} showLikes={true} />
                                        </Col>
                                    ))}
                                    <nav aria-label="Page navigation">
                                        <Pagination className="mb-4 justify-content-end">
                                            <Pagination.Item className="disabled">Prev</Pagination.Item>
                                            <Pagination.Item className="">1</Pagination.Item>
                                            <Pagination.Item className="">2</Pagination.Item>
                                            <Pagination.Item className="">3</Pagination.Item>
                                            <Pagination.Item className="text-primary">next</Pagination.Item>
                                        </Pagination>
                                    </nav>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="art" className="p-0 border-0" id="nft-art" role="tabpanel">
                                <Row className="">
                                    {MarketplaceArt.map((idx, index) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} key={index} className="col-12">
                                            <SpkTrendcard btnClass="btn-w-lg" trend={idx} showLikes={true} />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="gaming" className="p-0 border-0" id="nft-gaming" role="tabpanel">
                                <Row className="">
                                    {MarketplaceGaming.map((idx, index) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} key={index} className="col-12">
                                            <SpkTrendcard btnClass="btn-w-lg" trend={idx} showLikes={true} />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="domain" className="p-0 border-0" id="nft-domain" role="tabpanel">
                                <Row className="">
                                    {MarketplaceDomain.map((idx, index) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} key={index} className="col-12">
                                            <SpkTrendcard btnClass="btn-w-lg" trend={idx} showLikes={true} />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="music" className="p-0 border-0" id="nft-music" role="tabpanel">
                                <Row className="">
                                    {MarketplaceMusic.map((idx, index) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} key={index} className="col-12">
                                            <SpkTrendcard btnClass="btn-w-lg" trend={idx} showLikes={true} />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="realestate" className="p-0 border-0" id="nft-realestate" role="tabpanel">
                                <Row className="">
                                    {MarketplaceReal.map((idx, index) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} key={index} className="col-12">
                                            <SpkTrendcard btnClass="btn-w-lg" trend={idx} showLikes={true} />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="sports" className="p-0 border-0" id="nft-sports" role="tabpanel">
                                <Row className="">
                                    {MarketplaceSports.map((idx, index) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} key={index} className="col-12">
                                            <SpkTrendcard btnClass="btn-w-lg" trend={idx} showLikes={true} />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fashion" className="p-0 border-0" id="nft-fashion" role="tabpanel">
                                <Row className="">
                                    {MarketplaceFashion.map((idx, index) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} key={index} className="col-12">
                                            <SpkTrendcard btnClass="btn-w-lg" trend={idx} showLikes={true} />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="avatars" className="p-0 border-0" id="nft-avatars" role="tabpanel">
                                <Row className="">
                                    {MarketplaceAvatar.map((idx, index) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} key={index} className="col-12">
                                            <SpkTrendcard btnClass="btn-w-lg" trend={idx} showLikes={true} />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="memes" className="p-0 border-0" id="nft-memes" role="tabpanel">
                                <Row className="">
                                    {MarketplaceMemes.map((idx, index) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} key={index} className="col-12">
                                            <SpkTrendcard btnClass="btn-w-lg" trend={idx} showLikes={true} />
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
                {/* <!-- End:: row-2 --> */}

            </Tab.Container>
        </Fragment>
    );
};

export default MarketPlace;