"use client"

import SpkPoscard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-poscard';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import { OffcanvasProducts, PosCardItems } from '@/shared/data/dashboards/posdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, SetStateAction, useState } from 'react'
import { Card, Col, Nav, Offcanvas, Pagination, Row, Tab } from 'react-bootstrap';

interface PossystemProps {}

const Possystem: React.FC<PossystemProps> = () => {

  //Offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const filteredProducts = PosCardItems.filter(PosCardItems => PosCardItems.id === 1 || PosCardItems.id === 12);
  const filteredProducts1 = PosCardItems.filter(PosCardItems => PosCardItems.id === 2 || PosCardItems.id === 10);
  const filteredProducts2 = PosCardItems.filter(PosCardItems => PosCardItems.id === 5 || PosCardItems.id === 11);
  const filteredProducts3 = PosCardItems.filter(PosCardItems => PosCardItems.id === 4 || PosCardItems.id === 6);
  const filteredProducts4 = PosCardItems.filter(PosCardItems => PosCardItems.id === 3 || PosCardItems.id === 7);
  const filteredProducts5 = PosCardItems.filter(PosCardItems => PosCardItems.id === 8 || PosCardItems.id === 9);


  function dec(el: any) {
    let unit = el.currentTarget.parentElement.querySelector("input").value;
    if (Number(unit) === 0) {
      return (false);
    }
    else {
      let unit = el.currentTarget.parentElement.querySelector("input").value--
    }
  }

  function inc(el: any) {
    let unit = el.currentTarget.parentElement.querySelector("input").value++
  }

  return (

    <Fragment>

      {/* <!-- Page Header --> */}

      <Seo title="Dashboards-POS System" />

      <Pageheader title="Dashboards" currentpage="POS System" activepage="POS System" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start Row-1 --> */}

      <Tab.Container defaultActiveKey="allproducts">
        <Row>
          <div className="d-flex align-Items-center justify-content-between mb-3">
            <h6 className="fw-medium mb-0">Categories</h6>
            <SpkButton Buttonvariant='pink' Customclass='btn-sm' Buttontype="button">View All<i className="ti ti-arrow-narrow-right ms-1"></i></SpkButton>
          </div>
          <Col xxl={12}>
            <Row className="pos-category" id="filter">
              <Col xl={4} md={6} xxl>
                <Nav.Item>
                  <Nav.Link as="div" eventKey="allproducts" onClick={() => handleTabClick('tab1')}>
                    <Card className={`custom-card ${activeTab === 'tab1' ? 'active' : ''}`}>
                      <Card.Body className="p-3">
                        <Link scroll={false} href="#!" className="stretched-link categories" data-filter="*">
                          <div className="d-flex gap-2 flex-column justify-content-center text-center categories-content">
                            <span className="avatar avatar-lg menu-icon mx-auto bg-transparent rounded-circle">
                              <Image width={48} height={48} src="../../assets/images/pos-system/1.png" alt="" />
                            </span>
                            <div>
                              <span className="fw-medium">All Products</span>
                              <span className="d-block op-7 fs-12">200 Items</span>
                            </div>
                          </div>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col xl={4} md={6} xxl>
                <Nav.Item>
                  <Nav.Link as="div" eventKey="fruits" onClick={() => handleTabClick('tab2')}>
                    <Card className={`custom-card ${activeTab === 'tab2' ? 'active' : ''}`}>
                      <Card.Body className="p-3">
                        <Link scroll={false} href="#!" className="stretched-link categories" data-filter=".fruits">
                          <div className="d-flex gap-2 flex-column justify-content-center text-center categories-content">
                            <span className="avatar avatar-lg menu-icon mx-auto bg-transparent rounded-circle">
                              <Image width={48} height={48} src="../../assets/images/pos-system/2.png" alt="" />
                            </span>
                            <div>
                              <span className="fw-medium">Fruits</span>
                              <span className="d-block op-7 fs-12">45 Items</span>
                            </div>
                          </div>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col xl={4} md={6} xxl>
                <Nav.Item>
                  <Nav.Link as="div" eventKey="vegetables" onClick={() => handleTabClick('tab3')}>
                    <Card className={`custom-card ${activeTab === 'tab3' ? 'active' : ''}`}>
                      <Card.Body className="p-3">
                        <Link scroll={false} href="#!" className="stretched-link categories" data-filter=".vegetables">
                          <div className="d-flex gap-2 flex-column justify-content-center text-center categories-content">
                            <span className="avatar avatar-lg menu-icon mx-auto bg-transparent rounded-circle">
                              <Image width={48} height={48} src="../../assets/images/pos-system/3.png" alt="" />
                            </span>
                            <div>
                              <span className="fw-medium">Vegetables</span>
                              <span className="d-block op-7 fs-12">60 Items</span>
                            </div>
                          </div>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col xl={4} md={6} xxl>
                <Nav.Item>
                  <Nav.Link as="div" eventKey="categories" onClick={() => handleTabClick('tab4')}>
                    <Card className={`custom-card ${activeTab === 'tab4' ? 'active' : ''}`}>
                      <Card.Body className="p-3">
                        <Link scroll={false} href="#!" className="stretched-link categories" data-filter=".daily-products">
                          <div className="d-flex gap-2 flex-column justify-content-center text-center categories-content">
                            <span className="avatar avatar-lg menu-icon mx-auto bg-transparent rounded-circle">
                              <Image width={48} height={48} src="../../assets/images/pos-system/4.png" alt="" />
                            </span>
                            <div>
                              <span className="fw-medium">Dairy Products</span>
                              <span className="d-block op-7 fs-12">30 Items</span>
                            </div>
                          </div>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col xl={4} md={6} xxl>
                <Nav.Item>
                  <Nav.Link as="div" eventKey="bakery" onClick={() => handleTabClick('tab5')}>
                    <Card className={`custom-card ${activeTab === 'tab5' ? 'active' : ''}`}>
                      <Card.Body className="p-3">
                        <Link scroll={false} href="#!" className="stretched-link categories" data-filter=".bakery">
                          <div className="d-flex gap-2 flex-column justify-content-center text-center categories-content">
                            <span className="avatar avatar-lg menu-icon mx-auto bg-transparent rounded-circle">
                              <Image width={48} height={48} src="../../assets/images/pos-system/5.png" alt="" />
                            </span>
                            <div>
                              <span className="fw-medium">Bakery</span>
                              <span className="d-block op-7 fs-12">25 Items</span>
                            </div>
                          </div>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col xl={4} md={6} xxl>
                <Nav.Item>
                  <Nav.Link as="div" eventKey="beverages" onClick={() => handleTabClick('tab6')}>
                    <Card className={`custom-card ${activeTab === 'tab6' ? 'active' : ''}`}>
                      <Card.Body className="p-3">
                        <Link scroll={false} href="#!" className="stretched-link categories" data-filter=".beverages">
                          <div className="d-flex gap-2 flex-column justify-content-center text-center categories-content">
                            <span className="avatar avatar-lg menu-icon mx-auto bg-transparent rounded-circle">
                              <Image width={48} height={48} src="../../assets/images/pos-system/7.png" alt="" />
                            </span>
                            <div>
                              <span className="fw-medium">Beverages</span>
                              <span className="d-block op-7 fs-12">35 Items</span>
                            </div>
                          </div>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col xxl className="col-12">
                <Nav.Item>
                  <Nav.Link as="div" eventKey="snacks" onClick={() => handleTabClick('tab7')}>
                    <Card className={`custom-card ${activeTab === 'tab7' ? 'active' : ''}`}>
                      <Card.Body className="p-3">
                        <Link scroll={false} href="#!" className="stretched-link categories" data-filter=".snacks">
                          <div className="d-flex gap-2 flex-column justify-content-center text-center categories-content">
                            <span className="avatar avatar-lg menu-icon mx-auto bg-transparent rounded-circle">
                              <Image width={48} height={48} src="../../assets/images/pos-system/6.png" alt="" />
                            </span>
                            <div>
                              <span className="fw-medium">Snacks</span>
                              <span className="d-block op-7 fs-12">50 Items</span>
                            </div>
                          </div>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Nav.Link>
                </Nav.Item>
              </Col>
            </Row>
            <Row>
              <Col xl={12}>
                <div className="d-flex align-items-center justify-content-between mb-3 p-3 bg-white rounded-3 flex-wrap gap-2">
                  <div className="flex-fill">
                    <h5 className="fw-medium mb-1">Items List</h5>
                    <p className="mb-0 text-muted fs-12">Get your list below</p>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex gap-2 rounded-3 flex-fill align-items-center flex-wrap flex-sm-nowrap">
                      <input type="text" className="form-control" placeholder="Search Here ..." />
                      <div className="btn btn-primary">Search</div>
                      <div className="btn btn-success">Filter</div>
                      <Link scroll={false} href="#viewcart" className="btn btn-info-light text-nowrap" onClick={handleShow} data-bs-toggle="offcanvas" aria-controls="viewcart"> View Cart<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                    </div>
                  </div>
                </div>
                <Tab.Content className='pos_system'>
                  <Tab.Pane eventKey="allproducts" className="p-0 border-0">
                    <Row className="list-wrapper bg-white rounded-3 py-4 mx-0 row-cols-xxl-4">
                      {PosCardItems.map((idx, index) => (
                        <Col xxl xl={4} md={6} key={index} className={`card-item ${idx.title}`} data-category="fruits">
                          <SpkPoscard pos={idx} />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fruits" className="p-0 border-0">
                    <Row className="list-wrapper bg-white rounded-3 py-4 mx-0 row-cols-xxl-4">
                      {filteredProducts.map((idx, index) => (
                        <Col xxl xl={4} md={6} key={index} className={`card-item ${idx.title}`} data-category="fruits">
                          <SpkPoscard pos={idx} />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="vegetables" className="p-0 border-0">
                    <Row className="list-wrapper bg-white rounded-3 py-4 mx-0 row-cols-xxl-4">
                      {filteredProducts1.map((idx, index) => (
                        <Col xxl xl={4} md={6} key={index} className={`card-item ${idx.title}`} data-category="fruits">
                          <SpkPoscard pos={idx} />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="categories" className="p-0 border-0">
                    <Row className="list-wrapper bg-white rounded-3 py-4 mx-0 row-cols-xxl-4">
                      {filteredProducts2.map((idx, index) => (
                        <Col xxl xl={4} md={6} key={index} className={`card-item ${idx.title}`} data-category="fruits">
                          <SpkPoscard pos={idx} />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="bakery" className="p-0 border-0">
                    <Row className="list-wrapper bg-white rounded-3 py-4 mx-0 row-cols-xxl-4">
                      {filteredProducts3.map((idx, index) => (
                        <Col xxl xl={4} md={6} key={index} className={`card-item ${idx.title}`} data-category="fruits">
                          <SpkPoscard pos={idx} />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="beverages" className="p-0 border-0">
                    <Row className="list-wrapper bg-white rounded-3 py-4 mx-0 row-cols-xxl-4">
                      {filteredProducts4.map((idx, index) => (
                        <Col xxl xl={4} md={6} key={index} className={`card-item ${idx.title}`} data-category="fruits">
                          <SpkPoscard pos={idx} />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="snacks" className="p-0 border-0">
                    <Row className="list-wrapper bg-white rounded-3 py-4 mx-0 row-cols-xxl-4">
                      {filteredProducts5.map((idx, index) => (
                        <Col xxl xl={4} md={6} key={index} className={`card-item ${idx.title}`} data-category="fruits">
                          <SpkPoscard pos={idx} />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
                <nav aria-label="Page navigation">
                  <Pagination className="pagination overflow-auto justify-content-end my-3">
                    <Pagination.Item disabled>Prev</Pagination.Item>
                    <Pagination.Item active>1</Pagination.Item>
                    <Pagination.Item>2</Pagination.Item>
                    <Pagination.Item className="pagination-next text-primary">next</Pagination.Item>
                  </Pagination>
                </nav>
              </Col>
            </Row>
          </Col>
        </Row>
      </Tab.Container>
      {/* <!-- End::Row-1 --> */}

      {/* <!-- Start::offcanvas viewcart --> */}
      <Offcanvas placement="end" show={show} onHide={handleClose} className="offcanvas-end pos-cart-summary" tabIndex={-1} id="viewcart" aria-labelledby="viewcartLabel">
        <Offcanvas.Header className="border-bottom">
          <h6 className="offcanvas-title" id="viewcartLabel">Cart <span className="badge bg-success-transparent ms-2">05 items</span></h6>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleClose}></button>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <ul className="list-group mb-0 border-0 rounded-0">
            {OffcanvasProducts.map((product) => (
              <li key={product.id} className={product.listClass}>
                <div className="d-flex gap-3 align-items-start flex-wrap">
                  <div className="lh-1">
                    <span className="avatar avatar-lg bg-success bg-opacity-25 avatar-rounded p-1">
                      <Image width={48} height={48} src={product.imageSrc} alt={product.imageAlt} />
                    </span>
                  </div>
                  <div className="flex-fill">
                    <p className="fw-semibold mb-0 fs-15">
                      {product.name}
                      <span className={`badge bg-${product.discountColor}-transparent ms-2 fs-9 align-middle`}>
                        {product.discount}
                      </span>
                    </p>
                    <p className="text-muted fs-12 mb-2">{product.category}</p>
                    <div className="product-quantity-container">
                      <div className="input-group flex-nowrap">
                        <button type="button" aria-label="button" onClick={dec} className="btn btn-icon btn-sm btn-wave btn-primary product-quantity-minus border-end-0">
                          <i className="ri-subtract-line"></i>
                        </button>
                        <input type="text" className="form-control form-control-sm text-center p-0" aria-label="quantity" value="2" />
                        <button type="button" aria-label="button" onClick={inc} className="btn btn-icon btn-sm btn-wave btn-primary product-quantity-plus border-start-0">
                          <i className="ri-add-line"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <p className="text-end">
                      <a aria-label="anchor" href="javascript:void(0)" onClick={dec}>
                        <i className="ri-close-line fs-14 p-1 text-danger lh-1 bg-danger-transparent rounded-circle align-middle"></i>
                      </a>
                    </p>
                    <h5 className="mb-0 fw-medium mt-auto pt-3">
                      <s className="text-muted fs-12">${product.price}</s> ${product.discountedPrice}
                    </h5>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="p-3 border-top border-block-start-dashed mt-5 bg-light">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="text-muted">Total Items</div>
              <div className="fw-medium fs-14">05</div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="text-muted">Sub Total</div>
              <div className="fw-medium fs-14">$389.00</div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="text-muted">Discount</div>
              <div className="fw-medium fs-14">15% - $58.35</div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="text-muted">GST (12%)</div>
              <div className="fw-medium fs-14">+ $16.68</div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="text-muted">Service Tax (18%)</div>
              <div className="fw-medium fs-14">- $22.05</div>
            </div>
          </div>
          <div className="p-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="fw-medium fs-15">Total :</div>
              <div className="fw-semibold fs-16 text-dark">$340.28</div>
            </div>
            <div className="mt-4">
              <Link scroll={false} href="/pages/ecommerce/checkout" className="btn btn-success btn-wave d-grid waves-effect waves-light">Proceed to Pay</Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* <!-- End::offcanvas viewcart --> */}

    </Fragment>
  )
}

export default Possystem;
