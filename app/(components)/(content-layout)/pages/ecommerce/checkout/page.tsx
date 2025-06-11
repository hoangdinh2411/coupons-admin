"use client"

import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons'
import { MasterData } from '@/shared/data/pages/ecommerce/productsdata'
import Pageheader from '@/shared/layouts-components/pageheader/pageheader'
import Seo from '@/shared/layouts-components/seo/seo'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { Card, Col, Modal, ModalBody, ModalHeader, ModalTitle, Nav, Row, Tab, TabContainer } from 'react-bootstrap'

interface CheckoutProps {}

const Checkout: React.FC<CheckoutProps> = () => {

  const [localCheckout, setLocalCheckout] = useState(MasterData);
  const checkoutData = [...localCheckout.slice(3, 7)];

  const handleToRemove = (id: any) => {
    setLocalCheckout(localCheckout.filter((item: any) => item.id !== id))
  }

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [key, setKey] = useState('first');

  const handleTabSelect = (selectedKey: any) => {
    setKey(selectedKey);
  };

  const handleNext = () => {
    switch (key) {
      case 'first':
        setKey('second');
        break;
      case 'second':
        setKey('third');
        break;
      case 'third':
        setKey('fourth');
        break;
      default:
        break;
    }
  }

  const handlePrevious = () => {
    switch (key) {
      case 'second':
        setKey('first');
        break;
      case 'third':
        setKey('second');
        break;
      case 'fourth':
        setKey('third');
      default:
        break;
    }
  }

  return (
    <Fragment>

      {/* <!-- Page Header --> */}
      <Seo title="Pages-Check Out" />

      <Pageheader title="Pages" currentpage="Check Out" activepage="Check Out" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start:: Row-1 --> */}
      <Row>
        <Col xxl={9}>
          <Card className="custom-card">
            <Card.Body className=" product-checkout">
              <TabContainer defaultActiveKey="first" activeKey={key} onSelect={handleTabSelect} >
                <Row>
                  <Col xl={3}>
                    <div className="p-3 border border-dashed rounded mb-5">
                      <Nav className="nav-tabs flex-column nav-style-5 gap-3 checkout-tabs" id="myTab1" role="tablist">
                        <Nav.Item className="m-0 flex-fill" role="presentation">
                          <Nav.Link eventKey="first" className="w-100 fw-medium fs-13 d-flex align-items-center gap-2" id="order-tab" data-bs-toggle="tab"
                            data-bs-target="#order-tab-pane" type="button" role="tab"
                            aria-controls="order-tab" aria-selected="true">
                            <i className="ri-truck-line align-middle p-2 lh-1 rounded-circle checkout-tab-icon"></i>
                            Shipping
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="m-0 flex-fill" role="presentation">
                          <Nav.Link eventKey="second" className="w-100 fw-medium fs-13 d-flex align-items-center gap-2 flex-wrap" id="confirmed-tab" data-bs-toggle="tab"
                            data-bs-target="#confirm-tab-pane" type="button" role="tab"
                            aria-controls="confirmed-tab" aria-selected="false">
                            <i className="ri-user-3-line align-middle p-2 lh-1 rounded-circle checkout-tab-icon"></i>
                            Personal Details
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="m-0 flex-fill" role="presentation">
                          <Nav.Link eventKey="third" className="w-100 fw-medium fs-13 d-flex align-items-center gap-2 flex-wrap" id="shipped-tab" data-bs-toggle="tab"
                            data-bs-target="#shipped-tab-pane" type="button" role="tab"
                            aria-controls="shipped-tab" aria-selected="false">
                            <i className="ri-bank-card-line align-middle p-2 lh-1 rounded-circle checkout-tab-icon"></i>
                            Payment
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item m-0 flex-fill" role="presentation">
                          <Nav.Link eventKey="fourth" className="w-100 fw-medium fs-13 d-flex align-items-center gap-2 flex-wrap" id="delivered-tab" data-bs-toggle="tab"
                            data-bs-target="#delivery-tab-pane" type="button" role="tab"
                            aria-controls="delivered-tab" aria-selected="false">
                            <i className="ri-checkbox-circle-line align-middle p-2 lh-1 rounded-circle checkout-tab-icon"></i>
                            Complete Order
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                    <div className="text-center mx-auto">
                      <Image fill src="../../../assets/images/ecommerce/png/15.png" alt="" className="img-fluid" />
                    </div>
                  </Col>
                  <Col xl={9}>
                    <Tab.Content className="border border-dashed" id="myTabContent">
                      <Tab.Pane eventKey="first" className="fade border-0 p-0" id="order-tab-pane" role="tabpanel"
                        aria-labelledby="order-tab-pane" tabIndex={0}>
                        <div className="p-3">
                          <p className="mb-1 fw-semibold text-muted op-5 fs-20">01</p>
                          <div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                            <div className="text-success" >Shipping Address :</div>
                            <div className="mt-sm-0 mt-2">
                              <SpkButton Buttonvariant='primary' Size='sm' data-bs-toggle="modal" data-bs-target="#modal-new-address" onClickfunc={handleShow} ><i className="ri-add-line me-1 align-middle fs-14 fw-semibold"></i>Add New Address</SpkButton>
                              <Modal centered show={show} size='lg' onHide={handleClose} className="fade" id="modal-new-address" tabIndex={-1} aria-labelledby="modal-new-address" aria-hidden="true">
                                <div className="">
                                  <div className="">
                                    <ModalHeader>
                                      <ModalTitle as="h6" id="staticBackdropLabel">New Address
                                      </ModalTitle>
                                      <SpkButton Buttontype="button" Buttonvariant='' Customclass="btn-close" data-bs-dismiss="modal" aria-label="Close" onClickfunc={handleClose} ></SpkButton>
                                    </ModalHeader>
                                    <ModalBody>
                                      <Row className="gy-3">
                                        <Col xl={6}>
                                          <label htmlFor="fullname-new" className="form-label">Full Name</label>
                                          <input type="text" className="form-control" id="fullname-new" placeholder="Full Name" />
                                        </Col>
                                        <Col xl={6}>
                                          <label htmlFor="email-new" className="form-label">Email</label>
                                          <input type="email" className="form-control" id="email-new" placeholder="email" />
                                        </Col>
                                        <Col xl={6}>
                                          <label htmlFor="phonenumber-new" className="form-label">Phone Number</label>
                                          <input type="number" className="form-control" id="phonenumber-new" placeholder="Phone" />
                                        </Col>
                                        <Col xl={6}>
                                          <label htmlFor="address-new" className="form-label">Address</label>
                                          <input type="text" className="form-control" id="address-new" placeholder="Address" />
                                        </Col>
                                        <Col xl={12}>
                                          <Row className="row gy-3 gy-xl-0">
                                            <Col xl={3}>
                                              <label htmlFor="pincode-new" className="form-label">Pincode</label>
                                              <input type="number" className="form-control" id="pincode-new" placeholder="Pincode" />
                                            </Col>
                                            <Col xl={3}>
                                              <label htmlFor="city-new" className="form-label">City</label>
                                              <input type="text" className="form-control" id="city-new" placeholder="City" />
                                            </Col>
                                            <Col xl={3}>
                                              <label htmlFor="state-new" className="form-label">State</label>
                                              <input type="text" className="form-control" id="state-new" placeholder="State" />
                                            </Col>
                                            <Col xl={3}>
                                              <label htmlFor="country-new" className="form-label">Country</label>
                                              <input type="text" className="form-control" id="country-new" placeholder="Country" />
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </ModalBody>
                                    <div className="modal-footer">
                                      <SpkButton Buttontype="button" Buttonvariant='light' data-bs-dismiss="modal" onClickfunc={handleClose} >Close</SpkButton>
                                      <SpkButton Buttontype="button" Buttonvariant='success'>Save
                                        Address</SpkButton>
                                    </div>
                                  </div>
                                </div>
                              </Modal>
                            </div>
                          </div>
                          <Row className="ps-2">
                            <Col xl={12}>
                              <Card className="custom-card card-style-6 border shadow-none">
                                <Card.Body className=" p-3">
                                  <div className="d-flex gap-2 mb-2">
                                    <input className="form-check-input" type="radio" id="address1" name="default-address" defaultChecked />
                                    <label className="form-check-label cursor-pointer" htmlFor="address1">Set as Default</label>
                                  </div>
                                  <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                                    <div className="flex-grow-1">
                                      <h6 className="fs-16 mb-0 fw-semibold">Shipping Address</h6>
                                    </div>
                                    <div className="ms-auto">
                                      <Link href="#!" scroll={false} className="btn btn-info-light btn-sm me-1"><i className="ri-edit-2-line"></i> Edit</Link>
                                      <Link href="#!" scroll={false} className="btn btn-danger-light btn-sm"><i className="ri-delete-bin-line"></i> Delete</Link>
                                    </div>
                                  </div>
                                  <div className="d-flex gap-5 flex-wrap">
                                    <div>
                                      <p className="mb-1 fw-semibold">Johnathan Williams</p>
                                      <p className="mb-1  fs-13">johnwilliams@example.com</p>
                                      <p className="mb-2  fs-13">+1-234-567-8910</p>
                                    </div>
                                    <p className="mb-0">
                                      1234 Maple Street, Apt 12B,<br />
                                      Downtown, Block 47,<br />
                                      Opp. Grand Plaza Mall, 12345,New York, USA
                                    </p>
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col xl={12}>
                              <Card className="custom-card card-style-6 border shadow-none">
                                <Card.Body className=" p-3">
                                  <div className="d-flex gap-2 mb-2">
                                    <input className="form-check-input" type="radio" id="address2" name="default-address" />
                                    <label className="form-check-label cursor-pointer" htmlFor="address2">Set as Default</label>
                                  </div>
                                  <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                                    <div className="flex-grow-1">
                                      <h6 className="fs-16 mb-0 fw-semibold">Billing Address</h6>
                                    </div>
                                    <div className="ms-auto">
                                      <Link href="#!" scroll={false} className="btn btn-info-light btn-sm me-1"><i className="ri-edit-2-line"></i> Edit</Link>
                                      <Link href="#!" scroll={false} className="btn btn-danger-light btn-sm"><i className="ri-delete-bin-line"></i> Delete</Link>
                                    </div>
                                  </div>
                                  <div className="d-flex gap-5 flex-wrap">
                                    <div>
                                      <p className="mb-1 fw-semibold">Sophia Mitchell</p>
                                      <p className="mb-1  fs-13">sophiamitchell@billing.mail</p>
                                      <p className="mb-0  fs-13">+44-7896-123456</p>
                                    </div>
                                    <p className="mb-0">
                                      55B Baker Street, Suite 22,<br />
                                      Kensington Square,<br />
                                      Near City Tower, 45678, London, UK
                                    </p>
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                          <p className="fs-15 fw-semibold mb-3 text-success">Shipping Methods :</p>
                          <Row className="gy-3 ps-2 mb-4">
                            <Col xl={6}>
                              <div className="border rounded border-dashed p-2 bg-light">
                                <div className="form-check mb-0">
                                  <input id="shipping-method1" name="shipping-methods" type="radio" className="form-check-input mt-3" defaultChecked />
                                  <div className="form-check-label">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                      <div className="me-2">
                                        <span className="avatar avatar-lg">
                                          <Image width={48} height={48} src="../../../assets/images/ecommerce/png/22.png" alt="" />
                                        </span>
                                      </div>
                                      <div className="shipping-partner-details me-0">
                                        <p className="mb-0 fw-semibold">Standard Shipping</p>
                                        <p className="text-muted fs-11 mb-0">Delivered within 7 Days</p>
                                      </div>
                                      <div className="fw-semibold ms-auto">
                                        $0.00
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col xl={6}>
                              <div className="border rounded border-dashed p-2 bg-light">
                                <div className="form-check mb-0">
                                  <input id="shipping-method2" name="shipping-methods" type="radio" className="form-check-input mt-3" />
                                  <div className="form-check-label">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                      <div className="me-2">
                                        <span className="avatar avatar-lg">
                                          <Image fill src="../../../assets/images/ecommerce/png/23.png" alt="" />
                                        </span>
                                      </div>
                                      <div className="shipping-partner-details me-sm-5 me-0">
                                        <p className="mb-0 fw-semibold">Expedited Shipping</p>
                                        <p className="text-muted fs-11 mb-0">Delivered within 1 Day</p>
                                      </div>
                                      <div className="fw-semibold ms-auto">
                                        $10.49
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <div className="text-end" >
                            <SpkButton Buttonvariant='success' Id="personal-details-trigger" onClickfunc={handleNext}  >Next<i className="ri-arrow-right-fill ms-2 align-middle d-inline-block"></i></SpkButton>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second' className="fade border-0 p-0" id="confirm-tab-pane"
                        role="tabpanel" aria-labelledby="confirm-tab-pane" tabIndex={0}>
                        <div className="p-3">
                          <p className="mb-1 fw-semibold text-muted op-5 fs-20">02</p>
                          <div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                            <div>Personal Details :</div>
                          </div>
                          <Row className="gy-3">
                            <Col xl={6}>
                              <label htmlFor="firstname-personal" className="form-label">First Name</label>
                              <input type="text" className="form-control" id="firstname-personal" placeholder="First Name" defaultValue="Johnathan " />
                            </Col>
                            <Col xl={6}>
                              <label htmlFor="lastname-personal" className="form-label">Last Name</label>
                              <input type="text" className="form-control" id="lastname-personal" placeholder="Last Name" defaultValue="Williams" />
                            </Col>
                            <Col xl={12}>
                              <label htmlFor="email-personal" className="form-label">Email</label>
                              <input type="email" className="form-control" id="email-personal" placeholder="johnathanwilliams@mail.com" defaultValue="" />
                            </Col>
                            <Col xl={12}>
                              <label htmlFor="phoneno-personal" className="form-label">Phone no</label>
                              <input type="text" className="form-control" id="phoneno-personal" placeholder="794-24-8494" defaultValue="" />
                            </Col>
                          </Row>
                        </div>
                        <div className="p-3 border-top border-block-start-dashed d-sm-flex justify-content-between">
                          <SpkButton Buttonvariant='primary' Id="back-shipping-trigger" onClickfunc={handlePrevious} ><i className="ri-arrow-left-fill me-2 align-middle d-inline-block"></i>Back</SpkButton>
                          <SpkButton Buttonvariant='success' Customclass="mt-sm-0 mt-2" Id="payment-trigger" onClickfunc={handleNext} >Continue To Payment<i className="ri-arrow-right-fill align-middle ms-2 d-inline-block"></i></SpkButton>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third' className="fade border-0 p-0" id="shipped-tab-pane" role="tabpanel"
                        aria-labelledby="shipped-tab-pane" tabIndex={0}>
                        <div className="p-3">
                          <p className="mb-1 fw-semibold text-muted op-5 fs-20">03</p>
                          <Row className="row">
                            <Col xl={12}>
                              <div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                <div>Choose Payment Methods </div>
                              </div>
                              <div className="ps-2">
                                <div className="text-success fs-13 fw-semibold mb-3">Express Checkout:</div>
                                <div className="mb-3 ps-3">
                                  <Row className="gy-3">
                                    <Col xl={6}>
                                      <Link href="#!;" className="pay-options-checkout">
                                        <div className="border rounded border-dashed p-1 py-0 text-center py-1 pay-opt">
                                          <span className="w-100 text-center">
                                            <Image fill src="../../../assets/images/ecommerce/png/25.png" alt="" />
                                          </span>
                                        </div>
                                      </Link>
                                    </Col>
                                    <Col xl={6}>
                                      <Link href="#!;" className="pay-options-checkout">
                                        <div className="border rounded border-dashed p-1 py-0 text-center py-1 pay-opt">
                                          <span className="w-100 text-center">
                                            <Image fill src="../../../assets/images/ecommerce/png/14.png" alt="" />
                                          </span>
                                        </div>
                                      </Link>
                                    </Col>
                                  </Row>
                                </div>
                                <div className="text-success fs-13 fw-semibold mb-3">Pay with card(Credit/Debit Card):</div>
                                <div className="ps-3">
                                  <Row className="gy-3 mb-3">
                                    <Col xl={12}>
                                      <label htmlFor="payment-card-number" className="form-label">Card Number</label>
                                      <input type="text" className="form-control" id="payment-card-number" placeholder="Card Number" defaultValue="1245 - 5447 - 8934 - XXXX" />
                                    </Col>
                                    <Col xl={12}>
                                      <label htmlFor="payment-card-name" className="form-label">Name On Card</label>
                                      <input type="text" className="form-control" id="payment-card-name" placeholder="Name On Card" defaultValue="JSON TAYLOR" />
                                    </Col>
                                    <Col xl={4}>
                                      <label htmlFor="payment-cardexpiry-date" className="form-label">Expiration Date</label>
                                      <input type="text" className="form-control" id="payment-cardexpiry-date" placeholder="MM/YY" defaultValue="08/2024" />
                                    </Col>
                                    <Col xl={4}>
                                      <label htmlFor="payment-cvv" className="form-label">CVV</label>
                                      <input type="text" className="form-control" id="payment-cvv" placeholder="XXX" defaultValue="341" />
                                    </Col>
                                    <Col xl={4}>
                                      <label htmlFor="payment-security" className="form-label">O.T.P</label>
                                      <input type="text" className="form-control" id="payment-security" placeholder="XXXXXX" defaultValue="183467" />
                                      <label htmlFor="payment-security" className="form-label mt-1 mb-0 text-danger fs-11"><sup><i className="ri-star-s-fill"></i></sup>Do not share O.T.P with anyone</label>
                                    </Col>
                                    <Col xl={12}>
                                      <div className="form-check">
                                        <input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="payment-card-save" defaultChecked />
                                        <label className="form-check-label" htmlFor="payment-card-save">
                                          Save this card
                                        </label>
                                      </div>
                                    </Col>
                                  </Row>
                                  <div className="p-3 border border-dashed rounded">
                                    <div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                      <div className="lh-1">Saved Cards :</div>
                                    </div>
                                    <Row className="gy-3 justify-content-center">
                                      <Col xxl={4} xl={6} >
                                        <div className="border rounded border-dashed p-1 px-2 bg-light">
                                          <div className="form-check mb-0">
                                            <input id="payment-card1" name="payment-cards" type="radio" className="form-check-input mt-3" defaultChecked />
                                            <div className="form-check-label">
                                              <div className="d-flex align-items-center gap-2 flex-wrap">
                                                <div className="me-2">
                                                  <span className="avatar avatar-lg">
                                                    <Image fill src="../../../assets/images/ecommerce/png/20.png" alt="" />
                                                  </span>
                                                </div>
                                                <p className="mb-0 fw-semibold ms-auto">Master Card</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Col>
                                      <Col xxl={4} xl={6} >
                                        <div className="border rounded border-dashed p-1 px-2 bg-light">
                                          <div className="form-check mb-0">
                                            <input id="payment-card2" name="payment-cards" type="radio" className="form-check-input mt-3" />
                                            <div className="form-check-label">
                                              <div className="d-flex align-items-center gap-2 flex-wrap">
                                                <div className="me-2">
                                                  <span className="avatar avatar-lg">
                                                    <Image fill src="../../../assets/images/ecommerce/png/21.png" alt="" />
                                                  </span>
                                                </div>
                                                <p className="mb-0 fw-semibold ms-auto">VISA Card</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Col>
                                      <Col xxl={4} xl={6} >
                                        <div className="border rounded border-dashed p-1 px-2 bg-light">
                                          <div className="form-check mb-0">
                                            <input id="payment-card3" name="payment-cards" type="radio" className="form-check-input mt-3" />
                                            <div className="form-check-label">
                                              <div className="d-flex align-items-center gap-2 flex-wrap">
                                                <div className="me-2">
                                                  <span className="avatar avatar-lg">
                                                    <Image fill src="../../../assets/images/ecommerce/png/24.png" alt="" />
                                                  </span>
                                                </div>
                                                <p className="mb-0 fw-semibold ms-auto">Discover Card</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Col>
                                    </Row>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="p-3 border-top border-block-start-dashed d-sm-flex justify-content-between">
                          <SpkButton Buttonvariant='primary' Id="back-personal-trigger" onClickfunc={handlePrevious} ><i className="ri-arrow-left-fill me-2 align-middle d-inline-block"></i>Back</SpkButton>
                          <SpkButton Buttonvariant='success' Customclass="mt-sm-0 mt-2" Id="continue-payment-trigger" onClickfunc={handleNext} >Continue Payment<i className="ri-arrow-right-fill align-middle ms-2 d-inline-block"></i></SpkButton>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey='fourth' className="fade border-0 p-0" id="delivery-tab-pane" role="tabpanel"
                        aria-labelledby="delivery-tab-pane" tabIndex={0}>
                        <div className="p-3 checkout-payment-success py-5">
                          <div className="mb-4">
                            <h5 className="text-success fw-semibold">Payment Successful!</h5>
                          </div>
                          <div className="mb-4 p-3 bg-success-transparent d-inline-block rounded-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" id="thumbs-up" width="150" height="150" className="p-4 rounded-circle bg-success bg-opacity-25">
                              <g>
                                <rect width="14" height="40" x="4" y="42" fill="rgb(var(--success-rgb))" rx="1" ry="1"></rect>
                                <path fill="#ffddd4" d="M84,49a6.0066,6.0066,0,0,0-6-6H57.0723A14.7238,14.7238,0,0,0,60,34.209V25a6,6,0,0,0-12,0v5.3428A12.6565,12.6565,0,0,1,35.3433,43H33a1,1,0,0,0-1,1V80a1,1,0,0,0,.4453.832A24.7361,24.7361,0,0,0,46.2109,85H64a5.99,5.99,0,0,0,4.46-10H70a5.99,5.99,0,0,0,4.4393-10.0222,5.9846,5.9846,0,0,0,4-10A6.0034,6.0034,0,0,0,84,49Z"></path>
                                <path fill="#e5b7b1" d="M79.65 57H68a1 1 0 010-2H78.46A5.875 5.875 0 0179.65 57zM75.65 67H64a1 1 0 010-2H74.46A5.875 5.875 0 0175.65 67zM69.65 77H58a1 1 0 010-2H68.46A5.875 5.875 0 0169.65 77z"></path>
                                <rect width="18" height="46" x="16" y="39" fill="rgba(var(--success-rgb), 0.5)" rx="1" ry="1"></rect>
                                <path fill="rgb(var(--success-rgb))" d="M54 15a1 1 0 01-1-1V4a1 1 0 012 0V14A1 1 0 0154 15zM44.8076 18.2217L37.7368 11.15a1 1 0 111.4141-1.4141l7.0708 7.0713a1 1 0 11-1.4141 1.4141zM42 27H32a1 1 0 010-2H42a1 1 0 010 2zM61.7783 18.2217a1 1 0 010-1.4141L68.85 9.7363A1 1 0 0170.2637 11.15l-7.0713 7.0713A1 1 0 0161.7783 18.2217zM76 27H66a1 1 0 010-2H76a1 1 0 010 2z"></path>
                                <circle cx="26" cy="77" r="3" fill="rgb(var(--success-rgb))"></circle>
                              </g>
                            </svg>
                          </div>
                          <div className="mb-4">
                            <p className="mb-1 fs-14">Your payment has been processed successfully. You can track your order with Order ID <b>ORD#123456</b> from <Link className="link-primary" href="#!;"><u>Track Order</u></Link></p>
                            <p className="text-muted">We appreciate your business and look forward to serving you again!</p>
                          </div>
                          <Link scroll={false} href="/pages/ecommerce/products/" className="btn btn-primary">Continue Shopping <i className="bi bi-cart ms-2"></i></Link>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </TabContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title className='lh-base'>
                Checkout Summary
              </Card.Title>
              <div className="badge bg-info">{checkoutData.length} Items</div>
            </Card.Header>
            <Card.Body className=" p-0">
              <div className="p-3 text-center">
                <div className="list-group mb-3 rounded text-start">
                  {checkoutData.map((idx, index) => (
                    <div className="list-group-item" key={index} >
                      <div className="d-flex align-items-center flex-wrap">
                        <span className="avatar avatar-lg bg-secondary-transparent me-2">
                          <Image width={48} height={48} src={idx.image} alt="" />
                        </span>
                        <div className="flex-fill">
                          <p className="mb-1 fw-semibold">{idx.title} <span className="fs-12 fw-normal text-muted"> ({idx.qunatity} qty)</span></p>
                          <span className="badge bg-success-transparent fs-11"><i className="ri-discount-percent-line fs-10"></i>{idx.discountPercentage} OFF</span>
                        </div>
                        <div className="ms-auto">
                          <p className="mb-0 text-end">
                            <Link href="#!" scroll={false} className="close-item" onClick={() => handleToRemove(idx.id)} >
                              <i className="ri-close-line fs-16 text-muted"></i>
                            </Link>
                          </p>
                          <p className="mb-0 fs-14 fw-semibold text-pink">${idx.discountPrice}
                            <span className="ms-1 text-muted fs-11 d-inline-block fw-normal"><s>${idx.originalPrice}</s></span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="d-flex gap-1 justify-content-between mb-3 align-items-center p-3 bg-light rounded">
                  <div className="fw-medium">Coupon Applied :</div>
                  <span className="badge bg-pink fs-11 ms-3">ATYV897G00AA</span>
                </div>
                <div className="list-group list-group-flush p-2 bg-light rounded mb-3">
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
                </div>
                <div className="text-muted mb-2 fs-14">
                  Total:
                </div>
                <h3 className="mb-3">$420.22 <s className="text-muted fs-12 fw-normal"> $680.98</s>
                </h3>
                <Link scroll={false} href="/pages/ecommerce/products/" className="btn btn-primary-light btn-wave d-grid">Continue Shopping</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End:: Row-1 --> */}

    </Fragment>
  )
}

export default Checkout;
