"use client"

import SpkBadge from '@/shared/@spk-reusable-components/reusable-uiElements/spk-badge';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import { LightboxGallery, PopularPosts, badgeItems, blogItems, relatedItems } from '@/shared/data/pages/blog/blogdetailsdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap';

interface BlogdetailsProps {}

const Blogdetails: React.FC<BlogdetailsProps> = () => {

  return (
    <Fragment>

      {/* <!-- Start::page-header --> */}
      <Seo title="Pages-Blog Details" />

      <Pageheader title="Pages" currentpage="Blog Details" activepage="Blog Details" />

      {/* <!-- End::page-header --> */}

      {/* <!-- Start::row-1 --> */}
      <Row>
        <Col xl={9}>
          <Row>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Body className=" p-4">
                  <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-1">
                    <div>
                      <p className="h5 fw-semibold">Deliciously Divine: The Ultimate Guide to Perfecting Your Cake Making Skills and Techniques</p>
                      <p className="text-muted mb-0">Perfecting Your Cake Making Skills:  The Joyful Journey of Cake Making from Classic Recipes to Modern Masterpieces</p>
                    </div>
                    <div className="btn rounded-pill btn-pink btn-sm"><i className="ti ti-share me-1"></i> Share</div>
                  </div>
                  <div className="mt-2 mb-3">
                    <span className="badge bg-success fs-13 me-1">Cakes</span>
                    <span className="badge bg-primary fs-13">Pastries</span>
                  </div>
                  <div className="d-sm-flex align-items-center mb-3">
                    <div className="d-flex align-items-center flex-fill gap-3 flex-wrap">
                      <span className="avatar avatar-sm avatar-rounded">
                        <Image height={28} width={28} src="../../../assets/images/faces/12.jpg" alt="Baker Image" />
                      </span>
                      <p className="mb-0 fw-medium">Sophie Baker</p>
                      <div className="fs-12 text-muted"><i className="ti ti-calendar me-1 d-inline-block"></i>3rd October, 2024</div>
                      <span className="text-muted fs-12"><i className="ti ti-clock me-1 d-inline-block"></i>10:30</span>
                    </div>
                    <div className="btn-list mt-sm-0 mt-2">
                      <div className="d-flex gap-2 fs-11 ms-auto">
                        <div className="btn btn-sm btn-info-light"><i className="ti ti-message me-1 d-inline-block"></i>68 Comments</div>
                        <div className="btn btn-sm btn-danger-light"><i className="ti ti-thumb-up me-1 d-inline-block"></i>34 Likes</div>
                      </div>
                    </div>
                  </div>
                  <Image width={100} height={100} src="../../../assets/images/media/media-19.jpg" className="rounded-3 img-fluid mb-4 w-100" alt="..." />
                  <p className="mb-4">
                    Embark on a delightful journey through the world of cake making, where creativity meets flavor. This blog is a haven for those passionate about baking and indulging in the sweet art of cake design.
                  </p>
                  <p className="mb-4">
                    From classic recipes to modern twists, <span className="fs-14 fw-medium"> "Deliciously Divine" </span> celebrates the joy of creating cakes that not only taste heavenly but also look stunning. Whether you're a seasoned baker or a curious beginner, this blog offers inspiration and guidance to elevate your cake-making skills.
                  </p>

                  <p className="mb-4">Let the aromas of freshly baked cakes fill your kitchen and ignite your passion for baking. "Deliciously Divine" invites you to explore the transformative experience of creating delectable cakes that bring joy and connection to your loved ones. Discover the power of a beautifully crafted cake to celebrate life's special moments.</p>
                  <Row className="align-items-center mb-4 gy-3 gy-xl-0">
                    <Col xl={3}>
                      <span className="avatar-xxl avatar rounded me-1">
                        <Image width={80} height={80} src="../../../assets/images/media/media-33.jpg" alt="" className="img-fluid" />
                      </span>
                      <span className="avatar-xxl avatar rounded me-1">
                        <Image width={80} height={80} src="../../../assets/images/media/media-56.jpg" alt="" className="img-fluid" />
                      </span>
                      <span className="avatar-xxl avatar rounded me-1">
                        <Image width={80} height={80} src="../../../assets/images/media/media-45.jpg" alt="" className="img-fluid" />
                      </span>
                    </Col>
                    <Col xl={9}>
                      <div className="p-1 border border-success rounded">
                        <blockquote className="blockquote custom-blockquote primary text-center mb-0 border border-primary border-opacity-10">
                          <h5 className="lh-base">"A cake is not just a dessert; it's a celebration of life and love." </h5>
                          <footer className="blockquote-footer mt-3 text-primary mb-0">Someone famous as <cite title="Source Title">- Sophie Baker</cite></footer>
                        </blockquote>
                      </div>
                    </Col>
                  </Row>
                  <p className="mb-4">
                    From classic recipes to modern twists, <span className="fs-14 fw-medium"> "Deliciously Divine" </span> celebrates the joy of creating cakes that not only taste heavenly but also look stunning. Whether you're a seasoned baker or a curious beginner, this blog offers inspiration and guidance to elevate your cake-making skills.
                    With step-by-step tutorials, tips on choosing the best ingredients, and insights into the latest baking trends, you will find everything you need to craft the perfect cake for any occasion.
                  </p>

                  <p className="mb-0">
                    Through detailed recipes, creative decorating tips, and heartfelt stories, we delve into the myriad ways in which cakes can enhance our celebrations and bring happiness to our gatherings. Whether you're baking for a birthday, a wedding, or just because, "Deliciously Divine" is your go-to source for all things cake.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Card className=" custom-card overflow-hidden">
                <Card.Header>
                  <Card.Title>
                    Comments <span className="badge bg-info rounded-pill fs-11">02</span>
                  </Card.Title>
                </Card.Header>
                <Card.Body className=" p-0">
                  <ul className="list-group list-group-flush" id="blog-details-comment-list">
                    <li className="list-group-item border-0">
                      <div className="d-flex align-items-start gap-3 flex-wrap">
                        <div>
                          <span className="avatar avatar-lg avatar-rounded">
                            <Image width={48} height={48} src="../../../assets/images/faces/3.jpg" alt="User Image" />
                          </span>
                        </div>
                        <div className="flex-fill w-50">
                          <div className="fw-semibold mb-1">Sarah Johnson</div>
                          <p className="mb-3">I absolutely love this cake recipe! It turned out so delicious, and my family couldn't get enough of it. Thank you for sharing!</p>
                          <div className="btn-list">
                            <SpkButton Buttonvariant='success-light' Customclass='btn-icon btn-sm btn-wave' Buttontype="button">
                              <i className="ti ti-thumb-up fs-14"></i>
                            </SpkButton>
                            <SpkButton Buttonvariant='danger-light' Customclass='btn-icon btn-sm btn-wave' Buttontype="button">
                              <i className="ti ti-thumb-down"></i>
                            </SpkButton>
                          </div>
                        </div>
                        <div className="btn-list">
                          <SpkButton Buttonvariant='primary' Customclass='btn-sm btn-wave' Buttontype="button">
                            Reply<i className="ti ti-send fs-14 ms-1 d-inline-block"></i>
                          </SpkButton>
                          <SpkButton Buttonvariant='secondary' Customclass='btn-sm btn-icon btn-wave' Buttontype="button">
                            <i className="ri-error-warning-line"></i>
                          </SpkButton>
                        </div>
                      </div>
                      <div className="d-flex align-items-start gap-3 flex-wrap ms-5 p-3 mt-3 mb-1 bg-light rounded">
                        <div>
                          <span className="avatar avatar-lg avatar-rounded">
                            <Image width={48} height={48} src="../../../assets/images/faces/13.jpg" alt="User Image" />
                          </span>
                        </div>
                        <div className="flex-fill w-50">
                          <div className="fw-semibold mb-1">James Smith</div>
                          <p className="mb-3">Your cake decoration tips are fantastic! I tried the buttercream technique you mentioned, and it made all the difference. Can't wait to bake again!</p>
                          <div className="btn-list">
                            <SpkButton Buttonvariant='success-light' Customclass='btn-icon btn-sm btn-wave' Buttontype="button">
                              <i className="ti ti-thumb-up fs-14"></i>
                            </SpkButton>
                            <SpkButton Buttonvariant='danger-light' Customclass='btn-icon btn-sm btn-wave' Buttontype="button">
                              <i className="ti ti-thumb-down"></i>
                            </SpkButton>
                          </div>
                        </div>
                        <div className="btn-list">
                          <SpkButton Buttonvariant='primary' Customclass='btn-sm btn-wave' Buttontype="button">
                            Reply<i className="ti ti-send fs-14 ms-1 d-inline-block"></i>
                          </SpkButton>
                          <SpkButton Buttonvariant='secondary' Customclass='btn-sm btn-icon btn-wave' Buttontype="button">
                            <i className="ri-error-warning-line"></i>
                          </SpkButton>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xl={3}>
          <Row>
            <Col xl={12}>
              <Card className=" custom-card overflow-hidden">
                <div className="card-header justify-content-between">
                  <Card.Title>
                    Recent Posts
                  </Card.Title>
                  <Link href="#!" scroll={false} className="fs-12 text-muted"> View More</Link>
                </div>
                <Card.Body className=" p-0">
                  <ul className="list-group list-group-flush">
                    {blogItems.map((idx, index) => (
                      <li className="list-group-item" key={index} >
                        <div className="d-flex gap-3 flex-wrap flex-xl-nowrap align-items-center">
                          <span className="avatar avatar-xl flex-shrink-0">
                            <Image width={64} height={64} src={idx.image} className="img-fluid" alt="Milkshake Recipe" />
                          </span>
                          <div className="flex-fill text-truncate w-75">
                            <Link href="#!" scroll={false} className={`text-decoration-underline ${idx.categoryColor} fs-12`}>{idx.category}</Link>
                            <div className="text-muted fs-11 my-1 text-break d-flex gap-1 flex-wrap align-items-center">
                              <i className="ti ti-calendar me-1 d-inline-block"></i>{idx.date} -
                              <span><i className="ti ti-clock me-1 d-inline-block"></i>{idx.time}</span>
                            </div>
                            <Link href="#!" scroll={false} className="popular-blog-content text-truncate fw-medium fs-15">
                              {idx.contentTitle}
                            </Link>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Header>
                  <Card.Title>
                    Related Topics
                  </Card.Title>
                </Card.Header>
                <Card.Body className="">
                  <ul className="list-group">
                    {relatedItems.map((idx, index) => (
                      <li className={`list-group-item list-group-item-action list-group-item-${idx.listClass} border-${idx.listClass} border-opacity-10`} key={index} >
                        <Link href="#!" scroll={false}>
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div>
                                <i className={`${idx.icon} fs-13 rounded-2 d-inline-block align-middle lh-1 text-${idx.badgeClass}`}></i>
                              </div>
                              <div>
                                <span className="fw-medium ms-2">{idx.category}</span>
                              </div>
                            </div>
                            <div>
                              <SpkBadge variant='' Customclass={`bg-${idx.badgeClass} rounded-pill`}>{idx.badgeCount}</SpkBadge>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Header>
                  <Card.Title>
                    Gallery
                  </Card.Title>
                </Card.Header>
                <Card.Body className="">
                  <LightboxGallery />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Body className=" text-center">
                  <span className="avatar avatar-md bg-success-transparent rounded-circle border border-success border-opacity-25"><i className="ri-send-plane-fill fs-18 lh-1 align-middle"></i></span>
                  <h6 className="mt-3">Join Our Community</h6>
                  <label className="form-check-label mb-3 px-3 text-muted">
                    Subscribe for Delicious Milkshake Recipes and Updates
                  </label>
                  <div className="input-group text-start">
                    <input type="email" className="form-control" placeholder="Enter_Your_Email" aria-label="milkshake-email" aria-describedby="milkshake-subscribe" required />
                    <SpkButton Buttonvariant='primary' Customclass='btn-wave' Buttontype="button" Id="milkshake-subscribe">
                      Subscribe
                    </SpkButton>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Header>
                  <Card.Title>
                    Popular Tags
                  </Card.Title>
                </Card.Header>
                <Card.Body className="">
                  <div className="blog-popular-tags">
                    {badgeItems.map((idx, index) => (
                      <Link scroll={false} href="#!" key={index} >
                        <span className="badge bg-light text-muted">{idx.label}</span>
                      </Link>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <!--End::row-1 --> */}

      {/* <!--Start::row-2 --> */}
      <Row>
        <Col xl={9}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>
                Add Your Comments
              </Card.Title>
            </Card.Header>
            <Card.Body className="">
              <Row className="gy-3">
                <Col xl={12}>
                  <label htmlFor="blog-comment" className="form-label">Write Comment</label>
                  <textarea className="form-control" id="blog-comment" rows={4} placeholder="Write Here......."></textarea>
                </Col>
                <div className="col-xl-6">
                  <label htmlFor="blog-first-name" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="blog-first-name" placeholder="Enter Name" />
                </div>
                <div className="col-xl-6">
                  <label htmlFor="blog-email" className="form-label">Email ID</label>
                  <input type="text" className="form-control" id="blog-email" placeholder="Enter Email" />
                </div>
              </Row>
              <SpkButton Buttonvariant='primary' Customclass='mt-4' Buttontype="button">
                Submit Comment
              </SpkButton>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3}>
          <Card className=" custom-card overflow-hidden">
            <div className="card-header justify-content-between">
              <Card.Title>
                Popular Posts
              </Card.Title>
            </div>
            <Card.Body className=" p-0">
              <ul className="list-group list-group-flush">
                {PopularPosts.map((post, index) => (
                  <li key={index} className="list-group-item">
                    <div className="d-flex gap-3 flex-wrap flex-xl-nowrap align-items-center">
                      <span className="avatar avatar-xl flex-shrink-0">
                        <Image width={64} height={64} src={post.image} className="img-fluid" alt={post.altText} />
                      </span>
                      <div className="flex-fill text-truncate w-75">
                        <Link href="#!" scroll={false} className={`text-decoration-underline ${post.categoryColor} fs-12`}>
                          {post.category}
                        </Link>
                        <div className="text-muted fs-11 my-1 text-break d-flex gap-1 flex-wrap align-items-center">
                          <i className="ti ti-calendar me-1 d-inline-block"></i>{post.date} -
                          <span><i className="ti ti-clock me-1 d-inline-block"></i>{post.time}</span>
                        </div>
                        <Link href="#!" scroll={false} className="popular-blog-content text-truncate fw-medium fs-15">
                          {post.title}
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="text-center pb-3">
                <Link scroll={false} href="#!" className="fs-12 text-success text-decoration-underline text-center fw-medium"> View More Post</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End::row-2 --> */}

    </Fragment>
  )
}

export default Blogdetails;
