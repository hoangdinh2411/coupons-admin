"use client"

import SpkSwiperJs from "@/shared/@spk-reusable-components/reusable-plugins/spk-swiperjs";
import { Reviewstyle1data, Reviewstyle2data, Reviewstyle3data } from "@/shared/data/pages/reviewsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

interface ReviewsProps {}

const Reviews: React.FC<ReviewsProps> = () => {

    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1112: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }

    const breakpoints1 = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1300: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }

    const breakpoints2 = {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 1,
            spaceBetween: 30,
        }
    }
    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Pages-Reviews" />

            <Pageheader title="Pages" currentpage="Reviews" activepage="Reviews" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row className=" justify-content-center">
                <Col xl={9}>
                    <h6 className="mb-3">Reviews Style 1 :</h6>
                    <SpkSwiperJs slides={Reviewstyle1data} breakpoint={breakpoints} slidesPerView={3} spaceBetween={30} className="swiper testimonialSwiper1" autoplay={true} />
                </Col>
                <Col xl={9}>
                    <h6 className="mb-3">Reviews Style 2 :</h6>
                    <SpkSwiperJs slides={Reviewstyle2data} breakpoint={breakpoints1} slidesPerView={2} spaceBetween={30} className="swiper testimonialSwiper2" autoplay={true} />
                </Col>
                <Col xl={9}>
                    <h6 className="mb-3">Reviews Style 3 :</h6>
                    <SpkSwiperJs slides={Reviewstyle3data} breakpoint={breakpoints2} slidesPerView={1} spaceBetween={30} className="swiper testimonialSwiper2" autoplay={true} />
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default Reviews;