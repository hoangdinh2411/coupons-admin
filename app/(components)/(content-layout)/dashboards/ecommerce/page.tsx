"use client"

import SpkEcommercecard from '@/shared/@spk-reusable-components/reusable-dashboards/spk-ecommercecard';
import Spkapexcharts from '@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown';
import SpkTooltips from '@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips';
import { CarouselItems, CarouselItems1, Recentorders, Sellingproducts, TopPartnersdata, cardData, customerData, earningOptions, earningSeries, newCutomersOptions, newCutomersSeries } from '@/shared/data/dashboards/ecommercedata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card, Carousel, Col, Dropdown, Pagination, Row } from 'react-bootstrap';

interface EcommerceProps {}

const Ecommerce: React.FC<EcommerceProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}

            <Seo title="Dashboards-Ecommerce" />

            <Pageheader title="Dashboards" currentpage="Ecommerce" activepage="Ecommerce" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={4}>
                    <Row>
                        {cardData.map((idx, index) => (
                            <Col lg={6} xl={6} key={index} >
                                <SpkEcommercecard showIncreaseLabel={true} showMonthLabel={false} object={idx} />
                            </Col>
                        ))}
                    </Row>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Top Customers
                            </div>
                            <Link scroll={false} href="#!" className="text-primary text-decoration-underline link-offset-1">
                                View All
                            </Link>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled mb-0">
                                {customerData.map((idx, index) => (
                                    <li className={`${idx.liclass}`} key={index}>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-end gap-2 flex-wrap">
                                                <div className="d-flex align-items-top justify-content-start flex-grow-1">
                                                    <div className={`avatar avatar-md avatar-rounded ${idx.avatarBgColor} me-2`}>
                                                        {idx.avatar ? (
                                                            <Image width={40} height={40} src={idx.avatar} alt="Natalie Brown" />
                                                        ) : (
                                                            idx.name[0]
                                                        )}
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">{idx.name} <i className="ri-checkbox-circle-line text-success fw-normal fs-14 lh-1 fw-medium"></i></p>
                                                        <p className="mb-0 text-muted fs-12"><i className="ri ri-map-pin-line me-1 lh-1 align-end d-inline-block"></i>{idx.location}</p>
                                                    </div>
                                                </div>
                                                <div className="text-muted me-4">Purchases {idx.purchases}</div>
                                                <div className="text-end ms-auto">
                                                    <div className="fs-14 fw-medium">${idx.totalSpend} <i className="ti ti-coins text-warning fw-normal"></i></div>
                                                    <div className="mt-1 text-muted fs-11">Last Order: {idx.lastOrder}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={5} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Earnings</div>
                            <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="View All" Customtoggleclass="btn-sm btn-light btn-wave fs-12 text-muted">
                                <Dropdown.Item as="li" href="#!">Download</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Import</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Export</Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="pb-0">
                            <Row className="text-center mb-3 gy-sm-0 gy-3">
                                <Col xl={4} lg={4} md={4} sm={4}>
                                    <div className="mb-1">
                                        <span className="mt-1 fs-16 fw-semibold">8.56k</span>
                                        <span className="badge bg-success-transparent text-success rounded-pill mx-1 mx-1"><i className="fa fa-caret-up me-2"></i>0.25%</span>
                                    </div>
                                    <div><i className="ti ti-chart-bar text-primary fs-15 align-middle lh-1 me-1 d-inline-block"></i>Total Orders </div>
                                </Col>
                                <Col xl={4} lg={4} md={4} sm={4}>
                                    <div className="mb-1">
                                        <span className="mt-1 fs-16 fw-semibold">$38.15k</span>
                                        <span className="badge bg-success-transparent text-success rounded-pill mx-1"><i className="fa fa-caret-up me-2"></i>0.33%</span>
                                    </div>
                                    <div><i className="ti ti-chart-bar text-secondary fs-15 align-middle lh-1 me-1 d-inline-block"></i>Total Revenue </div>
                                </Col>
                                <Col xl={4} lg={4} md={4} sm={4}>
                                    <div className="mb-1">
                                        <span className="mt-1 fs-16 fw-semibold">$58.5k</span>
                                        <span className="badge bg-danger-transparent text-danger rounded-pill mx-1"><i className="fa fa-caret-up me-2"></i>0.15%</span>
                                    </div>
                                    <div><i className="ti ti-chart-bar text-success fs-15 align-middle lh-1 me-1 d-inline-block"></i>Total Profit </div>
                                </Col>
                            </Row>
                            <div id="earnings">
                                <Spkapexcharts chartSeries={earningSeries} chartOptions={earningOptions} width={"100%"} height={414} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card border border-success border-opacity-50 ecommerce-sellercard">
                        <Card.Body>
                            <div className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                    <Image fill src="../../assets/images/ecommerce/png/29.png" alt="" className="img-fluid ecommerce-invite-card" />
                                </div>
                                <div className="ms-auto text-end">
                                    <h5 className="fw-semibold"> Invite New Seller</h5>
                                    <p className="text-muted fs-13 mb-4">Connect with potential sellers to expand your marketplace and grow your community.</p>
                                    <SpkButton Buttonvariant='primary' Customclass='btn-wave waves-effect waves-light' Buttontype="button">
                                        <i className="ri-mail-add-line me-2 d-inline-block lh-1"></i>Invite Now
                                    </SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Premier Product Selections</div>
                        </Card.Header>
                        <Card.Body className="row gx-3 gy-3 gy-sm-0">
                            <Col sm={6}>
                                <div id="carouselpremier1" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2800">
                                    <Carousel indicators={false} className='custom-slide-carousel'>
                                        {CarouselItems.map((item, index) => (
                                            <Carousel.Item key={index}>
                                                <div className={`border border-${item.borderColor} border-opacity-10 p-3 rounded-2 align-items-center d-block gap-2 text-center bg-${item.borderColor}-transparent position-relative overflow-hidden`}>
                                                    <div className={`ribbon-sale ribbon-success ${item.borderColor} top-right`}>Sale</div>
                                                    <Image width={80} height={80}  src={item.imageSrc} alt="Product" className="img-fluid avatar avatar-xxl mb-4" />
                                                    <div className="text-center ms-auto">
                                                        <span className="text-success">{item.discount}</span>
                                                        <p className="fw-medium mb-1">{item.description}</p>
                                                        <div className="ratings mb-3">
                                                            <span className="text-warning fs-10 lh-1">
                                                                {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
                                                                    <i key={i} className="ri-star-fill"></i>
                                                                ))}
                                                                {item.rating % 1 !== 0 && <i className="ri-star-half-fill me-1"></i>}
                                                            </span>
                                                            <span className="text-muted fs-12">({item.reviews} reviews)</span>
                                                        </div>
                                                        <Link scroll={false} href={item.link} className="btn btn-primary btn-sm">
                                                            View Product
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div id="carouselpremier2" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3200">
                                    <Carousel indicators={false} className='custom-slide-carousel'>
                                        {CarouselItems1.map((item, index) => (
                                            <Carousel.Item key={index}>
                                                <div className={`border border-${item.borderColor} border-opacity-10 p-3 rounded-2 align-items-center d-block gap-2 text-center bg-${item.borderColor}-transparent position-relative overflow-hidden`}>
                                                    <div className={`ribbon-sale ${item.ribbonColor} top-right`}>Offer</div>
                                                    <Image width={80} height={80} src={item.imageSrc} alt="Product" className="img-fluid avatar avatar-xxl mb-4" />
                                                    <div className="text-center ms-auto">
                                                        <span className="text-success">{item.discount}</span>
                                                        <p className="fw-medium mb-1">{item.description}</p>
                                                        <div className="ratings mb-3">
                                                            <span className="text-warning fs-10 lh-1">
                                                                {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
                                                                    <i key={i} className="ri-star-fill"></i>
                                                                ))}
                                                                {item.rating % 1 !== 0 && <i className="ri-star-half-fill me-1"></i>}
                                                            </span>
                                                            <span className="text-muted fs-12">({item.reviews} reviews)</span>
                                                        </div>
                                                        <Link scroll={false} href={item.link} className="btn btn-primary btn-sm">
                                                            View Product
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </div>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                New Customers
                            </div>
                            <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" IconClass="fe fe-more-vertical" Icon={true} Toggletext="" Customtoggleclass="btn-icon btn-sm btn-light no-caret">
                                <Dropdown.Item as="li" href="#!">Action</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Another action</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Something else here</Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="pb-0">
                            <div id="newCutomers">
                                <Spkapexcharts chartSeries={newCutomersSeries} chartOptions={newCutomersOptions} type={'bar'} width={"100%"} height={225} />
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <span className="avatar avatar-md avatar-rounded p-1 bg-primary text-fixed-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-users-plus p-1"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4c.96 0 1.84 .338 2.53 .901" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                                    </span>
                                </div>
                                <div>
                                    <p className="mb-0 fw-semibold">New Customers </p>
                                    <p className="mb-0 text-muted fs-12">Increased by<span className="badge bg-success-transparent rounded-pill ms-2 d-inline-block">+ 2.3%</span></p>
                                </div>
                                <div className="ms-auto">
                                    <h5 className="text-dark mb-0 fw-semibold">
                                        34,784<i className="ri-arrow-up-s-fill text-success ms-1 d-inline-block lh-1 fw-normal align-text-bottom"></i>
                                    </h5>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between d-flex gap-2 flex-wrap">
                            <div className="card-title">
                                Top Partners
                            </div>
                            <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="View All" Customtoggleclass="btn-sm btn-light btn-wave fs-12 text-muted">
                                <Dropdown.Item as="li" href="#!">Download</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Import</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Export</Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass='card-table text-nowrap mb-0' header={[{ title: 'Partner Name' }, { title: 'Sales (%)' }, { title: 'Total Sales' }, { title: 'Share (%)' }]}>
                                    {TopPartnersdata.map((company, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="avatar avatar-sm">
                                                        <Image src={company.logo} height={28} width={28} alt={company.name} />
                                                    </span>
                                                    <div>{company.name}</div>
                                                </div>
                                            </td>
                                            <td className={`text-center text-${company.color1}`}>
                                                {company.growth}%
                                            </td>
                                            <td>{company.revenue}</td>
                                            <td className={`text-center text-${company.color}`}>
                                                {company.clientGrowth}%
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={5} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between d-flex gap-2 flex-wrap">
                            <div className="card-title">
                                Top Selling Products
                            </div>
                            <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="View All" Customtoggleclass="btn-sm btn-light btn-wave fs-12 text-muted">
                                <Dropdown.Item as="li" href="#!">Download</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Import</Dropdown.Item>
                                <Dropdown.Item as="li" href="#!">Export</Dropdown.Item>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tBodyClass="top-selling" tableClass='text-nowrap mb-0' header={[{ title: 'S.no', headerClassname: 'text-center' }, { title: 'Product Name' }, { title: 'Category' }, { title: 'Stock' }, { title: 'Total Sales' }]}>
                                    {Sellingproducts.map((product, index) => (
                                        <tr key={index}>
                                            <td className="text-center lh-1">
                                                <span className="avatar avatar-md">
                                                    <Image width={40} height={40} src={product.imageUrl} className="rounded-pill bg-light" alt={product.name} />
                                                </span>
                                            </td>
                                            <td>{product.name}</td>
                                            <td>{product.category}</td>
                                            <td>
                                                <span className={`badge badge-sm ${product.stockStatus === 'In Stock' ? 'bg-success-transparent text-success' : 'bg-danger-transparent text-danger'}`}>
                                                    {product.stockStatus}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">{product.quantity}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between border-bottom-0">
                            <div className="card-title">
                                Recent Orders
                            </div>
                            <div className="d-flex flex-wrap ms-auto gap-2">
                                <div className="me-1">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown Id="dropdownMenuButton1" Togglevariant="" Menulabel="dropdownMenuButton1" Toggletext="Sort By" Customtoggleclass="btn-primary btn-sm btn-wave waves-effect waves-light">
                                    <Dropdown.Item as="li" href="#!">New</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Popular</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">Relevant</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass='text-nowrap table-bordered' header={[{ title: 'Order Id' }, { title: 'Product Title' }, { title: 'Category' }, { title: 'Status' }, { title: 'Price' }, { title: 'Ordered Date' }, { title: 'Actions' }]} >
                                    {Recentorders.map((order, index) => (
                                        <tr key={index}>
                                            <td>
                                                <span className="fw-medium">{order.orderId}</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm">
                                                            <Image src={order.productImage} alt={order.productName} height={28} width={28} />
                                                        </span>
                                                    </div>
                                                    <div className="fs-14">{order.productName}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-medium">{order.category}</span>
                                            </td>
                                            <td>
                                                <span
                                                    className={`badge ${order.status === 'Delivered'
                                                        ? 'bg-success-transparent text-success'
                                                        : order.status === 'Shipped'
                                                            ? 'bg-info-transparent text-info'
                                                            : order.status === 'Cancelled'
                                                                ? 'bg-danger-transparent text-danger'
                                                                : order.status === 'Pending'
                                                                    ? 'bg-warning-transparent text-warning'
                                                                    : 'bg-primary-transparent text-primary'
                                                        }`}
                                                >
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="fw-medium">${order.amount.toFixed(2)}</td>
                                            <td>
                                                <span>{order.date}</span>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkTooltips placement="top" title="Edit">
                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-success-light rounded-circle">
                                                            <i className="ri-pencil-line"></i>
                                                        </Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Delete">
                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-danger-light rounded-circle">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Link>
                                                    </SpkTooltips>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <Pagination className="pagination mb-0 overflow-auto">
                                            <Pagination.Item disabled>Prev</Pagination.Item>
                                            <Pagination.Item active>1</Pagination.Item>
                                            <Pagination.Item>2</Pagination.Item>
                                            <Pagination.Item className="pagination-next text-primary">next</Pagination.Item>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

        </Fragment >
    )
}

export default Ecommerce;
