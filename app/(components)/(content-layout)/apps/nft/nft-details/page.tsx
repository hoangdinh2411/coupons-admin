"use client"

import SpkTrendcard from "@/shared/@spk-reusable-components/reusable-dashboards/spk-trendcard";
import SpkSwiperJs from "@/shared/@spk-reusable-components/reusable-plugins/spk-swiperjs";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { MarketplaceAll } from "@/shared/data/apps/nft/marketplacedata";
import { Bidsdata, ListData, NftSwiper, Swiperdata } from "@/shared/data/apps/nft/nftdetailsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

interface NftDetailsProps {}

const NftDetails: React.FC<NftDetailsProps> = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const threeNFTs = MarketplaceAll.slice(0, 4);

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-NFT Details" />

            <Pageheader title="Apps" currentpage="NFT Details" activepage="NFT Details" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Card className=" custom-card overflow-hidden">
                <Card.Body>
                    <Row className=" mx-0 justify-content-center gy-3 gy-xxl-0">
                        <Col xxl={4} xl={8} className="p-4 bg-light rounded">
                            <SpkSwiperJs slides={Swiperdata} spaceBetween={30} navigation={true} centeredSlides={true} autoplay={true} thumb={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                className="mySwiper swiper-preview-details bg-light product-details-page" />
                            <SpkSwiperJs slides={Swiperdata} onswiper={setThumbsSwiper} autoplay={true} spaceBetween={10} slidesPerView={4} freemode={true} watchslide={true}
                                className="swiper swiper-view-details mt-2" />
                            <div className="d-flex gap-1 mt-4">
                                <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="mb-0 btn-wave flex-fill me-1">Place a bid</SpkButton>
                                <SpkButton Buttonvariant="success" Buttontype="button" Customclass="mb-0 btn-wave flex-fill">Buy Now</SpkButton>
                            </div>
                        </Col>
                        <Col xxl={8} xl={12}>
                            <Card className=" custom-card shadow-none border mb-0 overflow-hidden">
                                <Card.Body>
                                    <Row>
                                        <Col xl={12} xxl={0} className="">
                                            <div className="d-flex gap-2 align-items-center justify-content-between mb-3 flex-wrap">
                                                <div>
                                                    <h4 className="fw-medium mb-1">Ethereal Landscapes - NFT Digital Art</h4>
                                                    <span className="mb-0 fs-14 fw-medium text-info bg-info-transparent px-1 rounded me-2">Artistic NFT </span>
                                                    <SpkTooltips placement="top" title="Verified">
                                                        <i className="bi bi-patch-check-fill text-success align-middle lh-1 fs-15"></i>
                                                    </SpkTooltips>
                                                </div>
                                                <div className="ms-auto">
                                                    <div className="d-flex gap-2 align-items-center flex-wrap">
                                                        <div className="fw-medium">Sales ends in:</div>
                                                        <p className="mb-0 border border-success border-opacity-75 bg-success-transparent fw-medium nft-auction-time ms-auto px-2 rounded fs-15 flex-shrink-0">02hrs : 45m : 12s</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <p className="fs-15 fw-medium mb-1">Description :</p>
                                                <p className="text-muted mb-0">
                                                    "Ethereal Landscapes” is a captivating NFT artwork crafted by a celebrated digital artist. This distinctive piece transports viewers into a breathtaking realm where soft hues intertwine with abstract elements. The artwork serves as a digital expression of the artist's vision, fusing surrealism with a hint of futuristic design.
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center gap-xxl-5 gap-3 mb-3 justify-content-between flex-wrap">
                                                <div>
                                                    <div className="mb-2">Price<i className="ri-price-tag-line text-pink lh-1 mx-1"></i> :</div>
                                                    <h5 className="fw-semibold mb-0 bid-amt align-middle mb-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 40 65">
                                                            <g fill="none" fillRule="evenodd">
                                                                <g fillRule="nonzero" transform="translate(-227 -93)">
                                                                    <g transform="translate(227 93)"><g>
                                                                        <path fill="#8A92B2" d="M20.1.8v23.3c0 .1-.1.2-.2.2-.7.3-1.3.6-2 .9-.9.4-1.9.8-2.8 1.3L11.8 28l-2.7 1.2-3.3 1.5c-.9.4-1.8.8-2.8 1.3-.7.3-1.5.7-2.2 1-.1 0-.1.1-.2 0H.5c.3-.5.6-.9.9-1.4 1.6-2.7 3.3-5.4 4.9-8.1 1.7-2.9 3.5-5.8 5.2-8.7 1.6-2.7 3.2-5.4 4.8-8 1.2-2 2.4-3.9 3.5-5.9.2 0 .2-.1.3-.1-.1 0 0 0 0 0z"></path>
                                                                        <path fill="#454A75" d="M39.5 33c-1.5 1-3.1 1.9-4.6 2.8-4.9 2.9-9.7 5.7-14.6 8.6-.1 0-.1.1-.2.1s-.1-.1-.1-.1v-.3-19.5-.3c0-.1.1-.1.2-.1.4.2.8.4 1.3.6 1.2.6 2.5 1.1 3.7 1.7 1.1.5 2.1 1 3.2 1.4 1.1.5 2.1 1 3.2 1.5.9.4 1.9.8 2.8 1.3.9.4 1.9.8 2.8 1.3.7.3 1.4.7 2.2 1 0-.1 0 0 .1 0z"></path>
                                                                        <path fill="#8A92B2" d="M20.1 64.1s-.1 0 0 0c-.1 0-.1 0-.2-.1-2-2.8-3.9-5.5-5.9-8.3l-6-8.4c-1.9-2.7-3.9-5.4-5.8-8.2L.7 37c0-.1-.1-.1-.1-.2.1 0 .1.1.2.1 2.7 1.6 5.5 3.2 8.2 4.8 3.1 1.9 6.3 3.7 9.4 5.6.5.3 1.1.6 1.6.9.1 0 .1.1.1.2V64.1z"></path><path fill="gray" d="M.6 33s.1 0 0 0c.1 0 .1 0 0 0 0 .1 0 .1 0 0z"></path>
                                                                        <path fill="#62688F" d="M.7 33.1c0-.1 0-.1 0 0 1-.5 2-.9 3-1.4l3.9-1.8c1-.5 2-.9 3-1.4 1.4-.7 2.9-1.3 4.3-2 1-.4 2-.9 3-1.3.7-.3 1.4-.6 2.1-1 .1 0 .1-.1.2-.1V44.5c-.1.1-.1 0-.2 0-.3-.2-.6-.3-.8-.5L.9 33.2c-.1-.1-.2-.1-.2-.1zM39.4 36.8c0 .1 0 .1-.1.2-5.8 8.2-11.6 16.3-17.4 24.5-.6.9-1.2 1.7-1.8 2.6V64v-.2-15.3-.3c1.3-.8 2.6-1.6 3.9-2.3l15.3-9c0-.1.1-.1.1-.1z"></path>
                                                                        <path fill="#62688F" d="M20.1 24.2V24 1.1.9l19.2 31.8c.1.1.2.2.2.3-.4-.2-.8-.4-1.3-.6-.5-.2-1-.5-1.5-.7-.3-.1-.6-.3-1-.4-.5-.2-1.1-.5-1.6-.7-.3-.1-.6-.3-.9-.4l-2.1-.9c-.4-.2-.7-.3-1.1-.5-.5-.2-1-.5-1.5-.7-.3-.1-.6-.3-.9-.4l-2.1-.9c-.4-.2-.7-.3-1.1-.5-.5-.2-1-.5-1.5-.7-.3-.2-.7-.3-1-.5l-1.8-.9z"></path></g></g></g>
                                                            </g>
                                                        </svg>
                                                        15.325000ETH
                                                    </h5>
                                                </div>
                                                <div>
                                                    <div className="fw-normal mb-2">Collection<i className="ri-nft-line text-pink lh-1 fs-14 mx-1"></i> :</div>
                                                    <div className="d-flex align-items-center fw-medium gap-1">
                                                        <span className="avatar avatar-xs avatar-rounded lh-1"><Image width={20} height={20} src="../../../assets/images/nft-images/2.png" alt="" /></span>
                                                        Landscapes NFT
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mb-2">Published<i className="ri-article-line text-pink lh-1 fs-14 mx-1"></i> :</p>
                                                    <div><i className="ri-calendar-event-line text-primary me-1"></i>14, Sep 2024 - 05:22AM</div>
                                                </div>
                                                <div className="me-3">
                                                    <div className="fw-normal mb-2">Owned By<i className="ri-vip-crown-2-line text-pink lh-1 fs-14 mx-1"></i> :</div>
                                                    <div className="d-flex align-items-center fw-medium gap-1">
                                                        <span className="avatar avatar-xs avatar-rounded lh-1"><Image width={20} height={20} src="../../../assets/images/faces/9.jpg" alt="" /></span>
                                                        Christopher
                                                    </div>
                                                </div>
                                            </div>
                                            <Row className=" mb-3 gy-3 gy-xl-0">
                                                <Col xl={6}>
                                                    <h6 className="mb-3">Details: </h6>
                                                    <div className="table-responsive">
                                                        <SpkTables tableClass="table-bordered text-nowrap">
                                                            <tr>
                                                                <th scope="row" className="fw-medium">
                                                                    Artist Name
                                                                </th>
                                                                <td>Evelyn Carter</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" className="fw-medium">
                                                                    Royalty
                                                                </th>
                                                                <td>
                                                                    12% royalty paid to the artist on secondary sales
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" className="fw-medium">
                                                                    Total Bids
                                                                </th>
                                                                <td>
                                                                    45
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" className="fw-medium">
                                                                    Current Owner
                                                                </th>
                                                                <td>
                                                                    Adrian Blake
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" className="fw-medium">
                                                                    NFT Type
                                                                </th>
                                                                <td>
                                                                    Ethereal Digital Artwork
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" className="fw-medium">
                                                                    Dimensions
                                                                </th>
                                                                <td>
                                                                    4000 x 3000 pixels
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" className="fw-medium">
                                                                    File Size
                                                                </th>
                                                                <td>
                                                                    25 MB
                                                                </td>
                                                            </tr>
                                                        </SpkTables>
                                                    </div>
                                                </Col>
                                                <Col xl={6}>
                                                    <h6 className="mb-3">Features: </h6>
                                                    <ul className="mb-0 list-unstyled">
                                                        {ListData.map((item, index) => (
                                                            <li key={index} className={index === ListData.length - 1 ? 'mb-1' : 'mb-3'}>
                                                                <span className="fw-medium">{item.label}:</span> {item.value}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </Col>
                                            </Row>
                                            <div className="p-2 mt-2 rounded bg-light d-flex align-items-center flex-wrap gap-2">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded avatar-md p-1 bg-success bg-opacity-50 border">
                                                        <Image width={40} height={40} src="../../../assets/images/faces/12.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="mb-0  fw-medium">Manistics NFT <i className="bi bi-patch-check-fill text-secondary align-middle lh-1 ms-1 d-inline-block"></i> </p>
                                                    <p className="fs-11 text-muted mb-0">#manistics454</p>
                                                </div>
                                                <div className="ms-auto d-flex gap-3 align-items-center flex-wrap">
                                                    <span className="fw-medium fs-12"><i className="ri-eye-fill me-1 align-middle d-inline-block text-primary"></i>16 Views</span>
                                                    <span className="fw-medium fs-12"><i className="ri-thumb-up-fill me-1 align-middle d-inline-block text-danger"></i>24 Likes</span>
                                                    <span className="fw-medium fs-12"><i className="ri-share-fill me-1 align-middle d-inline-block text-success"></i> Share</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {/* <!--End::row-1 --> */}

            {/* <!--Start::row-3 --> */}
            <Row>
                <Col xxl={4}>
                    <Card className=" custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Reviews & Ratings
                            </Card.Title>
                            <Link scroll={false} href="#!" className="btn btn-light btn-sm text-muted ms-auto">
                                View All
                            </Link>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
                                    <div className="d-flex align-items-center mb-3 flex-wrap gap-2">
                                        <div className="me-2 lh-1">
                                            <i className="ri-star-fill fs-14 text-warning"></i>
                                            <i className="ri-star-fill fs-14 text-warning"></i>
                                            <i className="ri-star-fill fs-14 text-warning"></i>
                                            <i className="ri-star-fill fs-14 text-warning"></i>
                                            <i className="ri-star-half-fill fs-14 text-warning"></i>
                                        </div>
                                        <div className="lh-1">
                                            <p className="mb-0 fw-medium">4.7 out of 5<span className="mb-0 text-muted fs-11 fw-normal"> Based on (1.5k) ratings</span></p>
                                        </div>
                                    </div>
                                    <SpkSwiperJs slides={NftSwiper} className="crypto-swiper swiper-basic" spaceBetween={30} centeredSlides={true} autoplay={true} />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={8} sm={12}>
                    <Card className=" custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Bids :
                            </Card.Title>
                            <Link scroll={false} href="#!" className="btn btn-primary btn-sm ms-auto">
                                View All
                            </Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="text-nowrap">
                                    {Bidsdata.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <div className="d-flex align-items-top">
                                                        <div className="avatar me-2">
                                                            <Image fill src={item.imageSrc} alt={item.title} />
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-1 fs-14 fw-medium similar-product-name text-truncate">{item.title}</p>
                                                            <span className="fw-medium fs-12">
                                                                <i className="ri-thumb-up-fill me-1 align-middle d-inline-block text-danger"></i>
                                                                {item.likes} Likes
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td className="text-center">
                                                <div className="d-flex gap-1 align-items-center">
                                                    <span className="avatar avatar-xs avatar-rounded lh-1">
                                                        <Image width={20} height={20} src={item.avatarSrc} alt={item.artist} />
                                                    </span>
                                                    By {item.artist}
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <i className="ri-calendar-event-line text-primary me-1"></i>{item.date}
                                            </td>
                                            <td>
                                                <div className="justify-content-center d-flex gap-2">
                                                    <p className="mb-0 fs-19 fw-medium">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <Image width={20} height={20}  src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="Ethereum"/>
                                                        </span>
                                                        {item.price} ETH
                                                    </p>
                                                    <p className="mb-0 text-muted">
                                                        (<s>
                                                            <span className="avatar avatar-xs avatar-rounded p-1">
                                                                <Image width={20} height={20} src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="Ethereum"/>
                                                            </span>
                                                            {item.oldPrice} ETH
                                                        </s>)
                                                    </p>
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
            {/* <!--End::row-3 --> */}

            {/* <!--Start::row-2 --> */}
            <Row>
                <Col xxl={12}>
                    <div className="d-flex gap-1 align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium mb-0">NFT Collection:</h6>
                        <Link scroll={false} href="#!" className="btn btn-primary btn-sm ms-auto">
                            Explore More
                        </Link>
                    </div>
                    <Row className="trendy-card">
                        {threeNFTs.map((idx, index) => (
                            <Col xxl={3} xl={6} lg={6} md={6} sm={6} key={index} className="col-12">
                                <SpkTrendcard btnClass="btn-w-lg" trend={idx} showLikes={true} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            {/* <!--End::row-2 --> */}
        </Fragment>
    );
};

export default NftDetails;