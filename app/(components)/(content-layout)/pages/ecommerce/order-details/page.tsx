"use client"

import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap';

interface OrderdetailsProps {}

const Orderdetails: React.FC<OrderdetailsProps> = () => {

  const print = () => {
    window.print();
  };

  return (
    <Fragment>

      {/* <!-- Page Header --> */}
      <Seo title="Pages-Order Details" />

      <Pageheader title="Pages" currentpage="Order Details" activepage="Order Details" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start::row-1 --> */}
      <Row>
        <Col xl={12}>
          <Row>
            <Col xl={12}>
              <Card className="custom-card">
                <Card.Header className="justify-content-between gap-2 align-items-center">
                  <div>
                    <Card.Title className="mb-1">
                      Order Details
                    </Card.Title>
                    <p className="mb-0 fs-12"><span className="text-muted me-1">Ordered Date:</span> 5th Mar,2024</p>
                  </div>
                  <Link href="/pages/ecommerce/orders" className="btn btn-primary btn-sm rounded-pill btn-w-md py-2"> Go to List</Link>
                </Card.Header>
                <Card.Body className="">
                  <Row className="mb-3">
                    <Col xl={6}>
                      <div className="fs-15 fw-semibold mb-2">Customer Details: </div>
                      <div className="d-flex gap-5 flex-wrap">
                        <div>
                          <p className="mb-1 fw-semibold">Sophia Mitchell</p>
                          <span className="text-muted mb-1 fs-12"> Phone Number:</span>
                          <div>+44-7896-123456</div>
                        </div>
                        <div className="mb-0">
                          <span className="text-muted mb-1 fs-12"> Email ID:</span>
                          <div>sophiamitchell@mail.mail</div>
                        </div>
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className="fs-15 fw-semibold mb-2">Shipping Address: </div>
                      <div className="d-flex gap-5 flex-wrap">
                        <div>
                          <p className="mb-1 fw-semibold">Sophia Mitchell</p>
                          <p className="mb-1  fs-13">sophiamitchell@mail.mail</p>
                          <p className="mb-0  fs-13">+44-7896-123456</p>
                        </div>
                        <p className="mb-0">
                          55B Baker Street, Suite 22,<br />
                          Kensington Square,<br />
                          Near City Tower, 45678, London, UK
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3 gy-3 gy-xl-0">
                    <Col xl={6}>
                      <div className="fs-15 fw-semibold mb-2">Order Summary: </div>
                      <div className="list-group list-group-flush p-2 bg-light rounded">
                        <div className="list-group-item d-flex align-items-center justify-content-between">
                          <div className="text-muted">Sub Total</div>
                          <div className="fw-semibold fs-14">$680.98</div>
                        </div>
                        <div className="list-group-item d-flex align-items-center justify-content-between">
                          <div className="text-muted">Discount</div>
                          <div className="fw-semibold fs-14 text-success">20% - $136.20</div>
                        </div>
                        <div className="list-group-item d-flex align-items-center justify-content-between">
                          <div className="text-muted">Delivery Charges</div>
                          <div className="fw-semibold fs-14 text-danger">- $5</div>
                        </div>
                        <div className="list-group-item d-flex align-items-center justify-content-between">
                          <div className="text-muted">Service Tax (18%)</div>
                          <div className="fw-semibold fs-14">- $119.56</div>
                        </div>
                        <div className="list-group-item d-flex align-items-center justify-content-between">
                          <div className="text-muted mb-2 fs-14">Total:</div>
                          <h4 className="mb-0">
                            <s className="text-muted fs-12 fw-normal me-1">
                              $680.98
                            </s> $420.22
                          </h4>
                        </div>
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className="fs-15 fw-semibold mb-2">Order Info: </div>
                      <div className="list-group list-group-flush p-2 bg-light rounded">
                        <div className="list-group-item d-flex align-items-center justify-content-between">
                          <div className="text-muted">Order ID :</div>
                          <div className="fw-semibold fs-14">#477945119</div>
                        </div>
                        <div className="list-group-item d-flex align-items-center justify-content-between">
                          <div className="text-muted">Total Items :</div>
                          <div className="badge bg-info rounded-pill">02 Products</div>
                        </div>
                        <div className="list-group-item d-flex align-items-center justify-content-between">
                          <div className="text-muted">Order Date :</div>
                          <div className="fw-semibold fs-14">05th Mar, 2024</div>
                        </div>
                        <div className="list-group-item d-flex align-items-center justify-content-between">
                          <div className="text-muted">Delivered By:</div>
                          <div className="fw-semibold fs-14">16th Mar, 2024</div>
                        </div>
                        <div className="list-group-item d-flex align-items-center justify-content-between">
                          <div className="text-muted mb-2 fs-14">Status:</div>
                          <div className="badge rounded-pill bg-primary">Shipping...</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="fs-14 fw-semibold mb-4">Order Status: </div>
                  <div className="p-3 bg-light rounded">
                    <Row className="justify-content-between flex-column flex-sm-row">
                      <div className="order-tracking text-center completed">
                        <span className="is-complete mb-3 avatar avatar-sm">
                        </span>
                        <p className="mb-1 fw-semibold">01</p>
                        <p className="mb-1">Order Placed</p>
                        <p>05th, Mar 2024</p>
                      </div>
                      <div className="order-tracking text-center completed">
                        <span className="is-complete mb-3 avatar avatar-sm"></span>
                        <p className="mb-1 fw-semibold">02</p>
                        <p className="mb-1">Comfirmed</p>
                        <p>08th, Mar 2024</p>
                      </div>
                      <div className="order-tracking text-center completed">
                        <span className="is-complete mb-3 avatar avatar-sm"></span>
                        <p className="mb-1 fw-semibold">03</p>
                        <p className="mb-1">Shipped</p>
                        <p>05th, Mar 2024</p>
                      </div>
                      <div className="order-tracking text-center">
                        <span className="is-complete mb-3 avatar avatar-sm"></span>
                        <p className="mb-1 fw-semibold">04</p>
                        <p className="mb-1">Delivered </p>
                        <p>16th, Mar 2024</p>
                      </div>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
              <Card className="custom-card">
                <Card.Header className="d-flex justify-content-between">
                  <div className="card-title">
                    Ordered Products
                  </div>
                </Card.Header>
                <Card.Body className=" p-0">
                  <div className="table-responsive">
                    <table className="table text-nowrap">
                      <thead>
                        <tr>
                          <th>
                            S.no
                          </th>
                          <th>
                            Product Name
                          </th>
                          <th>
                            Price
                          </th>
                          <th>
                            Quantity
                          </th>
                          <th>
                            Tracking ID
                          </th>
                          <th className="text-center">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="fw-semibold">
                            01.
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="me-3">
                                <Image width={112} height={112} src="../../../assets/images/ecommerce/png/1.png" alt="" className="product-img p-2 bg-secondary-transparent" />
                              </div>
                              <div className="flex-fill">
                                <div className="mb-2 fs-16 fw-semibold">
                                  <Link href="#!" scroll={false}>Women's Sling Bag</Link>
                                </div><span className="badge bg-success-transparent fs-11"><i className="ri-discount-percent-line fs-10"></i>20 OFF</span>
                                <div className="my-2">
                                  <span className="me-1 fw-medium text-muted">Color:</span><span className="fw-medium">Grey</span>
                                </div>
                                <div>
                                  <span className="me-1 fw-medium text-muted">Size:</span><span className="fw-medium">Compact</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <div className="fw-semibold fs-20 text-pink">
                                $545
                              </div>
                              <s className="text-muted fs-12"> $854.00</s>
                            </div>
                          </td>
                          <td>
                            01
                          </td>
                          <td>
                            <span className="badge bg-light text-default"> #18A78Y65K62O2P49P</span>
                          </td>
                          <td className="text-center">
                            <div className="fs-15 fw-semibold">
                              $545
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-semibold">
                            02.
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="me-3">
                                <Image width={112} height={112} src="../../../assets/images/ecommerce/png/2.png" alt="" className="product-img p-2 bg-pink-transparent" />
                              </div>
                              <div className="flex-fill">
                                <div className="mb-2 fs-16 fw-semibold">
                                  <Link href="#!" scroll={false}>Beautiful Candle Set</Link>
                                </div>
                                <span className="badge bg-success-transparent fs-11"><i className="ri-discount-percent-line fs-10"></i>15% OFF</span>
                                <div className="my-2">
                                  <span className="me-1 fw-medium text-muted">Color:</span><span className="fw-medium">Blue</span>
                                </div>
                                <div>
                                  <span className="me-1 fw-medium text-muted">Size:</span><span className="fw-medium">42</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex gap-2 align-items-center">
                              <div className="fw-semibold fs-20 text-pink">
                                $85
                              </div>
                              <s className="text-muted fs-12">
                                $100.00
                              </s>
                            </div>
                          </td>
                          <td>
                            02
                          </td>
                          <td>
                            <span className="badge bg-light text-default"> #87492652JTTD8969</span>
                          </td>
                          <td className="text-center">
                            <div className="fs-15 fw-semibold">
                              $85
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card.Body>
                <Card.Footer className="border-top-0 d-flex align-items-center justify-content-between gap-2">
                  <SpkButton onClickfunc={print} Buttonvariant='primary-light' Customclass='btn-wave' Buttontype="button">
                    <i className="ri-printer-line me-1 align-middle d-inline-block"></i>Print
                  </SpkButton>
                  <SpkButton Buttonvariant='primary' Customclass='btn-wave' Buttontype="button">
                    <i className="ri-share-forward-line me-1 align-middle d-inline-block"></i>Share Details
                  </SpkButton>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <!--End::row-1 --> */}
    </Fragment>
  )
}

export default Orderdetails;
