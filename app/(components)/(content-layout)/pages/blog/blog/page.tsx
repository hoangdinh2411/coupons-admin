"use client"

import SpkCarouselComponent from '@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel';
import SpkBlogCard from '@/shared/@spk-reusable-components/reusable-pages/spk-blog-card';
import SpkBlogCategoryCard from '@/shared/@spk-reusable-components/reusable-pages/spk-blog-category-card';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import { BlogItems, Categories, blogCarouseldata, blogs, blogs1, blogs2 } from '@/shared/data/pages/blog/blogdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card, Col, Pagination, Row } from 'react-bootstrap';

interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {

  return (
    <Fragment>

      {/* <!-- Start::page-header --> */}
      <Seo title="Pages-Blog" />

      <Pageheader title="Pages" currentpage="Blog" activepage="Blog" />

      {/* <!-- End::page-header --> */}

      {/* <!-- Start:: row-1 --> */}
      <Row>
        <Col xxl={8}>
          <Card className="custom-card overflow-hidden">
            <Card.Body className="p-0">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <Link href="/pages/blog/blog-details" className="stretched-link"></Link>
                <div className="carousel-inner rounded-0">
                  <SpkCarouselComponent items={blogCarouseldata} controls={false} interval1={7000} wrap={true} />
                </div>
              </div>
              <div className="p-3">
                <h5 className="fw-semibold"><Link href="/pages/blog/blog-details">Adventure Awaits: Unveiling the Hidden Gems of Travel</Link></h5>
                <p className="mb-3">Travel is more than just visiting new places; it's about immersing yourself in unfamiliar cultures, uncovering hidden treasures, and embracing the beauty.</p>
                <p className="mb-3">Exploring the remote corners of the world, where untouched landscapes and authentic cultures await the curious traveler.</p>
                <p className="mb-3">From the vibrant streets of bustling cities to the serene beauty of hidden gems, every journey offers a new perspective, a deeper connection with nature, and an unforgettable experience.</p>
                <p className="mb-3">As travel writer Pico Iyer beautifully puts it, “The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.”<Link href="#!" className="fw-medium text-primary ms-2 align-middle fs-12 text-Augoration-underline d-inline-block">Read More</Link></p>
                <div className="d-flex align-items-center justify-content-between mb-1 flex-wrap">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm avatar-rounded me-2">
                      <Image height={28} width={28} src="../../../assets/images/faces/5.jpg" alt="Sophia" />
                    </div>
                    <div>
                      <p className="mb-0 fw-semibold"> Sophia<i className="ti ti-writing ms-1 d-inline-block align-middle text-primary"></i></p>
                      <p className="text-muted fs-11 mb-0">3rd October 2024 -
                        <span><i className="ti ti-clock me-1 text-muted d-inline-block"></i>10:30</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2 fs-11 ms-auto flex-wrap">
                    <div className="btn btn-sm btn-info-light"><i className="ti ti-message me-1"></i>42</div>
                    <div className="btn btn-sm btn-danger-light"><i className="ti ti-thumb-up me-1"></i>12</div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Categories :
              </Card.Title>
              <Link href="#!" className="btn btn-light btn-wave btn-sm text-muted waves-effect waves-light">View All<i className="ti ti-arrow-narrow-right ms-1"></i></Link>
            </Card.Header>
            <Card.Body className="p-0">
              <ul className="list-group list-group-flush list-style mb-2">
                {Categories.map((category, index) => (
                  <li key={index} className="list-group-item">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <span className="fw-medium">
                        <i className={`${category.iconClass} fs-14 p-1 rounded-2 me-2 d-inline-block align-middle lh-1 ${category.iconBgClass} ${category.iconTextClass}`}></i>
                        {category.title}
                      </span>
                      <span className={`badge ${category.iconBgClass}`}>{category.count}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="d-flex align-items-center justify-content-between flex-wrap">
              <Card.Title>
                Related Blogs:
              </Card.Title>
              <div>
                <span className="badge bg-primary-transparent rounded-pill">08 Blogs</span>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <ul className="list-group list-group-flush">
                {BlogItems.map((item, index) => (
                  <li key={index} className="list-group-item border-bottom-0">
                    <div className="d-flex flex-wrap text-truncate align-items-center gap-2">
                      <span className="avatar avatar-lg flex-shrink-0 me-1">
                        <Image width={48} height={40} src={item.avatar} className="img-fluid" alt={item.name} />
                      </span>
                      <div className="flex-fill text-wrap w-75">
                        <div className="d-flex gap-2 justify-content-between align-items-start flex-wrap">
                          <Link href="#!" scroll={false} className="fs-14 fw-medium mb-0">{item.name}</Link>
                          <span className={`badge rounded-pill ${item.category === 'Books' ? 'bg-success' : 'bg-pink'}`}>
                            {item.category}
                          </span>
                        </div>
                        <p className="mb-1 popular-blog-content text-truncate text-muted w-75">
                          {item.content}
                        </p>
                        <span className="text-muted fs-10">{item.date}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="p-3 pt-2 mt-1">
                <SpkButton Buttonvariant='primary' Customclass=' mx-auto  btn-loader text-center justify-content-center w-100' Buttontype="button">
                  <span className="me-2">Load More</span>
                  <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                </SpkButton>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End:: row-1 --> */}

      {/* <!-- Start::row-2 --> */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0 fw-semibold">Top Topics:</h5>
        <p className="mb-0 fw-semibold">
          <Link href="#!" scroll={false} className="text-primary"><u>View All</u></Link>
        </p>
      </div>
      <Row>
        {blogs.map((idx, index) => (
          <Col xxl={3} xl={6} key={index} >
            <Card className="custom-card bg-dark overlay-card text-fixed-white border-0 blog-first-cards">
              <Image fill src={idx.image} className="card-img rounded-0" alt="..." />
              <div className="card-img-overlay d-flex flex-column p-0 over-content-top justify-content-between">
                <Card.Body className=" pb-0">
                  <span className={`fs-11 badge ${idx.badgeClass} mb-2`}>{idx.category}</span>
                </Card.Body>
                <Card.Footer className=" border-top-0 text-fixed-white">
                  <Link href="/pages/blog/blog-details" className="text-fixed-white fw-medium mb-2">
                    {idx.title}
                  </Link>
                  <div className="d-flex text-fixed-white op-7 gap-1">
                    <div><i className="ti ti-writing text-secondary me-1 align-middle"></i>By </div>
                    <Link href="#!" className="text-fixed-white"><i className="ti ti-user-circle mx-1 lh-1 text-secondary"></i>{idx.author}</Link>
                  </div>
                  <div className="d-flex gap-2 mt-2 fs-11">
                    <div className="text-fixed-white op-6"><i className="ti ti-message me-1"></i>{idx.comments}</div>
                    <div className="text-fixed-white op-6"><i className="ti ti-thumb-up me-1"></i>{idx.likes}</div>
                    <div className="text-fixed-white op-6"><i className="ti ti-calendar me-1"></i>{idx.date}</div>
                  </div>
                  <Link href="/pages/blog/blog-details" className="text-success text-decoration-underline float-end">Read More
                    <i className="ri-arrow-right-double-line d-inline-block rtl-icon-transform align-middle ms-1 d-inline-block"></i>
                  </Link>
                </Card.Footer>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      {/* <!--End::row-2 --> */}

      {/* <!--Start::row-3 --> */}
      <Row>
        {blogs1.map((idx, index) => (
          <Col className={idx.class} key={index}>
            <SpkBlogCategoryCard obj={idx} />
          </Col>
        ))}
      </Row>
      {/* <!--End::row-3 --> */}

      {/* <!--Start::row-4 --> */}
      <Row>
        {blogs2.map((idx, index) => (
          <Col xl={6} key={index}>
            <SpkBlogCard obj={idx} />
          </Col>
        ))}
      </Row>
      {/* <!--End::row-4 --> */}

      {/* <!-- Start: pagination --> */}
      <div className="float-end mb-4">
        <nav aria-label="Page navigation" className="">
          <Pagination className="mb-0">
            <Pagination.Item className="disabled">Prev</Pagination.Item>
            <Pagination.Item className="active">1</Pagination.Item>
            <Pagination.Item className="">2</Pagination.Item>
            <Pagination.Item className=""><i className="bi bi-three-dots"></i></Pagination.Item>
            <Pagination.Item className="">17</Pagination.Item>
            <Pagination.Item className="text-primary">next</Pagination.Item>
          </Pagination>
        </nav>
      </div>
      {/* <!-- End: pagination --> */}

    </Fragment>
  )
}

export default Blog;
