"use client"

import SpkSwiperJs from '@/shared/@spk-reusable-components/reusable-plugins/spk-swiperjs';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import { Featuredproducts, Featuresdata, ProductDetails, ProductDetailsSwiper, ProductDetailsSwiperthumb, Reviwsdata, SwiperProducts } from '@/shared/data/pages/ecommerce/productdetailsdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react'
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';

interface ProductdetailsProps {}

const Productdetails: React.FC<ProductdetailsProps> = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const breakpoints = {
    500: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1800: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  }


  function dec(el: any) {
    let unit = el.currentTarget.parentElement.querySelector("input");
    let currentValue = Number(unit.value);

    if (currentValue <= 0) {
      return;
    } else {
      unit.value = currentValue - 1;
    }
  }
  function inc(el: any) {
    el.currentTarget.parentElement.querySelector("input").value++;
  }

  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <Seo title="Pages-Product Details" />

      <Pageheader title="Pages" currentpage="Product Details" activepage="Product Details" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start:: Row-1 --> */}
      <Row>
        <Col xxl={4}>
          <Card className="custom-card">
            <div className="sale-badge">Sale <span className="fs-10 op-8">30%OFF</span> </div>
            <Card.Body className="p-2 p-sm-5">
              <SpkSwiperJs slides={ProductDetailsSwiper} spaceBetween={30} navigation={true} centeredSlides={true} autoplay={true} thumb={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                className="mySwiper swiper-preview-details bg-light product-details-page" />
              <SpkSwiperJs slides={ProductDetailsSwiperthumb} onswiper={setThumbsSwiper} autoplay={true} spaceBetween={10} slidesPerView={4} freemode={true} watchslide={true}
                className="swiper swiper-view-details mt-2" />
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={8}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <p className="fs-20 fw-semibold mb-3">RoyaliX Elegance Series - Premium Stainless Steel Wrist Chain Watch</p>
                <p className="fs-16 mb-3">
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star-half text-warning"></i>
                  <span className="fw-medium ms-1 fs-13">4.7<Link className="text-muted ms-2" href="#!">(2.5k Reviews)</Link></span>
                </p>
                <Row className="gy-3 gy-xl-0">
                  <Col xl={7}>
                    <Link href="/pages/ecommerce/wishlist" className="btn btn-outline-primary btn-w-lg me-2 mb-3"><i className="ri-heart-line fs-16 align-middle lh-1"></i> Add to Wishlist</Link>
                    <div className="mb-1"><span className="text-pink fw-semibold">Save Upto 30% Off</span> on M.R.P price</div>
                    <div className="d-flex gap-3 align-items-center flex-wrap mb-1">
                      <h2 className="fw-semibold">$578</h2>
                      <div className="mb-0 text-muted fs-12">
                        <p className="mb-0"> <s>$879</s></p>
                      </div>
                    </div>
                    <div className="mb-3 text-muted">Sale Ends in <span className="text-danger fw-semibold">: 3 Days Hurry Up!!!</span> </div>
                    <div className="mb-3">
                      <p className="fs-15 fw-semibold mb-1">Description :</p>
                      <p className="text-muted mb-0 fs-13">
                        Experience the luxury of the RoyalX Elegance Series wristwatch, crafted with a premium stainless steel chain, sapphire glass, and water-resistant technology. Perfect for formal and casual occasions.
                      </p>
                    </div>
                    <div className="d-flex gap-2 align-items-center mb-3">
                      <p className="mb-1 text-success py-1 px-2 bg-success-transparent rounded-pill fs-12"><i className="ri-checkbox-circle-fill me-1 align-middle d-inline-block"></i> Instock</p>
                      <p className="mb-1 text-success py-1 px-2 bg-success-transparent rounded-pill fs-12"><i className="ri-checkbox-circle-fill me-1 align-middle d-inline-block"></i> 1-Year Warranty</p>
                    </div>
                    <div className="d-flex gap-4 align-items-center mb-3 justify-content-between flex-wrap">
                      <div className="d-flex gap-3 align-items-center flex-wrap">
                        <p className="fs-15 fw-semibold mb-1">Product Material :</p>
                        <div className="btn btn-light">Stainless Steel</div>
                        <div className="btn btn-light">Leather</div>
                      </div>
                    </div>
                    <div className="d-flex gap-5 align-items-center mb-4">
                      <div className="d-flex gap-4 align-items-center">
                        <p className="fs-15 fw-semibold mb-1">Quantity :</p>
                        <div className="product-quantity-container ecommerce-page-quantity">
                          <div className="input-group flex-nowrap rounded-pill cart-input-group">
                            <SpkButton Buttonvariant='primary' onClickfunc={dec} Customclass='btn-icon btn-wave btn-sm product-quantity-minus waves-effect waves-light' Buttontype="button">
                              <i className="ri-subtract-line"></i>
                            </SpkButton>
                            <input type="text" className="form-control form-control-sm text-center p-0" aria-label="quantity" defaultValue="1" />
                            <SpkButton Buttonvariant='primary' onClickfunc={inc} Customclass='btn-icon btn-wave btn-sm product-quantity-minus waves-effect waves-light' Buttontype="button">
                              <i className="ri-add-line"></i>
                            </SpkButton>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-3 align-items-center flex-shrink-0 flex-wrap mb-4">
                      <p className="fs-15 fw-semibold mb-0">Colors :</p>
                      <p className="mb-0 d-flex align-items-center flex-wrap">
                        <Link className="color-1 product-colors flex-shrink-0 selected" href="#!" scroll={false}>
                          <i className="ri-checkbox-blank-circle-fill"></i>
                        </Link>
                        <Link className="color-2 product-colors flex-shrink-0" href="#!" scroll={false}>
                          <i className="ri-checkbox-blank-circle-fill"></i>
                        </Link>
                        <Link className="color-3 product-colors flex-shrink-0" href="#!" scroll={false}>
                          <i className="ri-checkbox-blank-circle-fill"></i>
                        </Link>
                        <Link className="color-4 product-colors flex-shrink-0" href="#!" scroll={false}>
                          <i className="ri-checkbox-blank-circle-fill"></i>
                        </Link>
                        <Link className="color-5 product-colors flex-shrink-0" href="#!" scroll={false}>
                          <i className="ri-checkbox-blank-circle-fill"></i>
                        </Link>
                      </p>
                    </div>
                    <div className="d-flex gap-2 align-items-center flex-wrap">
                      <Link href="/pages/ecommerce/checkout" className="btn btn-primary btn-w-lg"><i className="bx bx-credit-card fs-16 align-middle"></i> Buy Now</Link>
                      <Link href="/pages/ecommerce/cart" className="btn btn-success btn-w-lg"><i className="bx bx-cart-add fs-16 align-middle"></i> Add to Cart</Link>
                    </div>
                  </Col>
                  <Col xl={5}>
                    <div className="p-xl-3 text-center">
                      <div className="list-group list-group-flush p-2 bg-light rounded mb-3">
                        <div className="list-group-item d-flex align-items-center justify-content-between">
                          <div className="text-muted">Free Shipping anywhere</div>
                          <div className="lh-1 text-danger fs-14"><i className="ri-shake-hands-line"></i></div>
                        </div>
                        <div className="list-group-item d-flex align-items-center justify-content-between">
                          <div className="text-muted">100% secure payments</div>
                          <div className="lh-1 fs-14 text-success"><i className="ri-secure-payment-line"></i></div>
                        </div>
                        <div className="list-group-item d-flex align-items-center justify-content-between">
                          <div className="text-muted">5-star rated product in good condition</div>
                          <div className="lh-1 fs-14 text-warning"><i className="ri-star-fill"></i></div>
                        </div>
                      </div>
                      <div className="d-flex gap-1 justify-content-between flex-wrap mb-3 align-items-center p-2 bg-light rounded">
                        <div className="fw-medium">Get a Coupon :</div>
                        <span className="badge bg-pink fs-11 ms-3"><i className="ri-coupon-2-line me-1 align-middle d-inline-block"></i> Coupon</span>
                      </div>
                      <div className="p-3 border border-dashed rounded">
                        <h3 className="mb-1">30% Off <span className="fs-13 text-danger"> Special off on cauals</span>
                        </h3>
                        <div className="text-muted fs-12 mb-3">check below some of the offers on </div>
                        <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
                          <span className="avatar avatar-xl p-1 bg-primary-transparent">
                            <Image width={64} height={64} src="../../../assets/images/ecommerce/png/17.png" alt="" />
                          </span>
                          <span className="avatar avatar-xl p-1 bg-primary-transparent">
                            <Image width={64} height={64} src="../../../assets/images/ecommerce/png/16.png" alt="" />
                          </span>
                          <span className="avatar avatar-xl p-1 bg-light">
                            <Image width={64} height={64} src="../../../assets/images/ecommerce/png/18.png" alt="" />
                          </span>
                          <span className="avatar avatar-xl p-1 bg-light">
                            <Image width={64} height={64} src="../../../assets/images/ecommerce/png/28.png" alt="" />
                          </span>
                        </div>
                        <Link href="#!" className="btn btn-secondary-light d-grid">
                          Check More Offers Now
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Featured Products
              </Card.Title>
              <Link href="#!" className="btn btn-sm btn-primary-light">View All</Link>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables tableClass='text-nowrap' >
                  {Featuredproducts.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <div className="d-flex align-items-top">
                          <div className="similar-products-image me-2">
                            <Image width={74.4} height={74.4} src={product.imageUrl} alt={product.name} />
                          </div>
                          <div className="flex-fill">
                            <p className="mb-0 fs-14 fw-semibold similar-product-name text-truncate">{product.name}</p>
                            <div className="mb-2">
                              <i className="ri-star-half-s-fill me-1 text-warning"></i>
                              {product.rating}
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <div className="fw-semibold fs-17 text-pink">
                                ${product.price}
                              </div>
                              <s className="text-muted fs-12">
                                ${product.originalPrice.toFixed(2)}
                              </s>
                            </div>
                          </div>
                          <div className="ms-auto align-self-end">
                            <Link href="/pages/ecommerce/cart" className="btn btn-primary btn-sm">Add To Cart</Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </SpkTables>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={6}>
          <Tab.Container defaultActiveKey="product">
            <Card className="custom-card">
              <Card.Header className="border-bottom-0">
                <Nav className="nav nav-tabs tab-style-8 scaleX profile-settings-tab gap-2" id="myTab4" role="tablist">
                  <Nav.Item className="" role="presentation">
                    <Nav.Link eventKey="product" className="bg-primary-transparent px-4" id="product-details" data-bs-toggle="tab" data-bs-target="#product-details-pane" type="button" role="tab" aria-controls="product-details-pane" aria-selected="true">Product Details</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="" role="presentation">
                    <Nav.Link eventKey="features" className="bg-primary-transparent px-4" id="key-features-tab" data-bs-toggle="tab" data-bs-target="#key-features-tab-pane" type="button" role="tab" aria-controls="key-features-tab-pane" aria-selected="false" tabIndex={-1}>Key Features</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Tab.Content className="card-body">
                <Tab.Pane eventKey="product" className="overflow-hidden p-0 border-0 rounded-0" id="product-details-pane" role="tabpanel" aria-labelledby="product-details" tabIndex={0}>
                  <div className="table-responsive">
                    <SpkTables tableClass='text-nowrap table-bordered'>
                      {ProductDetails.map((detail, index) => (
                        <tr key={index}>
                          <th scope="row" className="fw-semibold">
                            {detail.label}
                          </th>
                          <td>{detail.value}</td>
                        </tr>
                      ))}
                    </SpkTables>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="features" className="overflow-hidden border-0" id="key-features-tab-pane" role="tabpanel" aria-labelledby="key-features-tab" tabIndex={1}>
                  <ul className="mb-0 ps-0 list-unstyled">
                    {Featuresdata.map((feature, index) => (
                      <li key={index} className={`mb-${index === Featuresdata.length - 1 ? '0' : '3'}`}>
                        <span className="fw-semibold">{feature.label}:</span> {feature.description}
                      </li>
                    ))}
                  </ul>
                </Tab.Pane>
              </Tab.Content>
            </Card>
          </Tab.Container>
          <Card className="custom-card">
            <div className="p-3">
              <div className="mb-3 fw-semibold fs-16">Reviews</div>
              <SpkSwiperJs slides={Reviwsdata} spaceBetween={30} centeredSlides={true} autoplay={true} className="mySwiper swiper-reviews" />
            </div>
          </Card>
        </Col>
        <Col xxl={3}>
          <Card className="custom-card border">
            <Card.Header>
              <Card.Title>
                Additional Features
              </Card.Title>
            </Card.Header>
            <Card.Body className="bg-light">
              <div className="list-group list-group-flush bg-light rounded">
                <div className="list-group-item">
                  <div className="text-muted"><span className="text-default fw-semibold">Waterproof Rating:</span> Rated for water resistance up to 50 meters, making it suitable for swimming and light diving.</div>
                </div>
                <div className="list-group-item">
                  <div className="text-muted"><span className="text-default fw-semibold">Scratch-Resistant Glass:</span> Equipped with a durable, scratch-resistant sapphire crystal to maintain its clear and polished appearance.</div>
                </div>
                <div className="list-group-item">
                  <div className="text-muted"><span className="text-default fw-semibold">Adjustable Bracelet:</span> The stainless steel wrist chain features an adjustable clasp for a secure and custom fit.</div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <div className="d-flex gap-2 justify-content-between card-body flex-wrap">
              <div className="flex-fill">
                <div className="mb-3 fw-semibold fs-16">Rating</div>
                <div className="mb-2 fw-medium">
                  <span className="me-1">5 Star</span> <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                </div>
                <div className="mb-2 fw-medium">
                  <span className="me-1">4 Star</span> <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star text-warning"></i>
                </div>
                <div className="mb-2 fw-medium">
                  <span className="me-1">3 Star</span> <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star text-warning me-1"></i>
                  <i className="bi bi-star text-warning"></i>
                </div>
                <div className="mb-2 fw-medium">
                  <span className="me-1">2 Star</span> <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star text-warning me-1"></i>
                  <i className="bi bi-star text-warning me-1"></i>
                  <i className="bi bi-star text-warning"></i>
                </div>
                <div className="mb-0 fw-medium">
                  <span className="me-1">1 Star</span> <i className="bi bi-star-fill text-warning me-1"></i>
                  <i className="bi bi-star text-warning me-1"></i>
                  <i className="bi bi-star text-warning me-1"></i>
                  <i className="bi bi-star text-warning me-1"></i>
                  <i className="bi bi-star text-warning"></i>
                </div>
              </div>
              <div className="text-center bg-light rounded p-3 pt-2 flex-fill">
                <div className="fs-2">
                  4.3
                </div>
                <span className="text-muted fs-13">(out of 5)</span>
                <p className="mb-3 mt-2">
                  <i className="bi bi-star-fill me-1 text-warning"></i>
                  <i className="bi bi-star-fill me-1 text-warning"></i>
                  <i className="bi bi-star-fill me-1 text-warning"></i>
                  <i className="bi bi-star-fill me-1 text-warning"></i>
                  <i className="bi bi-star-half text-warning"></i>
                </p>
                <Link className="btn btn-success btn-sm w-100" href="#!" scroll={false}>Leave Us a Review</Link>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      {/* <!-- End:: Row-1 --> */}

      {/* <!-- Start:: Row-2 --> */}
      <h5>Related Products</h5>
      <p className="">Discover more products similar to this one and elevate your style.</p>
      <SpkSwiperJs slides={SwiperProducts} breakpoint={breakpoints} spaceBetween={30} slidesPerView={1} navigation={true} autoplay={true} loop={true} className="mySwiper swiper-related-products" />
      {/* <!-- End:: Row-2 --> */}

    </Fragment>
  )
}

export default Productdetails;
