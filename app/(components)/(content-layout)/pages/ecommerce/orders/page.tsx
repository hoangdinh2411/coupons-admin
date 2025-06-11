"use client"

import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkBadge from '@/shared/@spk-reusable-components/reusable-uiElements/spk-badge';
import SpkDropdown from '@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown';
import { Orderdata, orderStats } from '@/shared/data/pages/ecommerce/ordersdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react'
import { Card, Col, Dropdown, Pagination, Row } from 'react-bootstrap';

interface OrdersProps {}

const Orders: React.FC<OrdersProps> = () => {

  const [Orders, setOrders] = useState(Orderdata);

  const handleRemove = (id: number) => {
    const OrdeList = Orders.filter((idx) => idx.id !== id)
    setOrders(OrdeList);
  }
  return (
    <Fragment>

      {/* <!-- Page Header --> */}
      <Seo title="Ecommerce-Orders" />

      <Pageheader title="Pages" currentpage="Orders" activepage="Orders" />

      {/* <!-- Page Header Close --> */}


      {/* <!-- Start::row-1 --> */}
      <Row>
        {orderStats.map((idx, index) => (
          <Col xl={3} key={index} >
            <Card className={`custom-card ${idx.cardClass}`}>
              <Card.Body className="d-flex align-items-center gap-2">
                <span> <i className={`fs-5 lh-1 ${idx.iconClass} `}></i></span>
                <h6 className="mb-0">{idx.title}</h6>
                <SpkBadge variant={''} Customclass={`${idx.badgeClass} ms-auto`}>{idx.orderCount} Orders</SpkBadge>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Card className="custom-card">
        <Card.Header className="justify-content-between">
          <Card.Title>
            All Orders List
          </Card.Title>
          <SpkDropdown Togglevariant="primary" Toggletext="Sort By" Customclass="mb-2" Id="navbarScrollingDropdown"
            Customtoggleclass="nav-link dropdown-toggle" Menulabel="navbarScrollingDropdown">
            <Dropdown.Item as="li" className="dropdown-item">Created Date</Dropdown.Item>
            <Dropdown.Item as="li" className="dropdown-item">Status</Dropdown.Item>
            <Dropdown.Item as="li" className="dropdown-item">Orders</Dropdown.Item>
            <Dropdown.Item as="li" className="dropdown-item">Product Name</Dropdown.Item>
            <Dropdown.Item as="li" className="dropdown-item">Newest</Dropdown.Item>
            <Dropdown.Item as="li" className="dropdown-item">Oldest</Dropdown.Item>
          </SpkDropdown>
          <div className="input-group p-3 bg-light rounded">
            <input type="text" className="form-control" placeholder="Search your Orders with Order Id.." aria-label="Recipient's username" aria-describedby="button-addon2" />
            <Link href="#!" className="btn btn-primary"><i className="ti ti-search"></i></Link>
          </div>
        </Card.Header>
        <Card.Body className="p-0">
          <div className="table-responsive">
            <SpkTables tableClass="table-hover text-nowrap" header={[{ title: 'Order Id' }, { title: 'Product' }, { title: 'Customer' }, { title: 'Mobile Number' }, { title: 'Ordered Date' }, { title: 'Status' }, { title: 'Payment Mode' }, { title: 'Cost' }, { title: 'Action' }]} >
              {Orders.map((order, index) => (
                <tr className="order-list" key={index}>
                  <td>{order.orderId}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm avatar-square bg-gray-300">
                        <Image height={28} width={28} src={order.productImage} className="w-100 h-100" alt={order.productName} />
                      </span>
                      <div className="ms-2">
                        <p className="fw-semibold mb-0 d-flex align-items-center">
                          <Link href="/pages/ecommerce/order-details">{order.productName}</Link>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm me-2 avatar-rounded">
                        <Image height={28} width={28} src={order.customerAvatar} alt={order.customerName} />
                      </span>
                      {order.customerName}
                    </div>
                  </td>
                  <td>{order.customerPhone}</td>
                  <td>{order.orderDate}</td>
                  <td>
                    <span className={`badge ${order.orderStatus === 'Delivered' || order.orderStatus === 'Shipped' ? 'bg-success' : order.orderStatus === 'Processing' ? 'bg-warning' : 'bg-danger'}`}>
                      {order.orderStatus}
                    </span>
                  </td>
                  <td>{order.paymentMethod}</td>
                  <td className="fw-semibold">{order.orderAmount}</td>
                  <td>
                    <Link scroll={false} href="/pages/ecommerce/order-details" className="btn btn-icon me-2 btn-sm btn-primary-light btn-wave waves-effect waves-light">
                      <i className="ri-eye-line"></i>
                    </Link>
                    <Link scroll={false} href="#!" className="btn btn-icon me-2 btn-sm btn-success-light btn-wave waves-effect waves-light">
                      <i className="ri-download-line"></i>
                    </Link>
                    <Link scroll={false} href="#!" onClick={() => handleRemove(order.id)} className="order-delete-btn btn btn-icon me-2 btn-sm btn-danger-light btn-wave waves-effect waves-light">
                      <i className="ri-delete-bin-line"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </SpkTables>
          </div>
        </Card.Body>
        <div className="card-footer border-top-0">
          <div className="d-flex align-items-center flex-wrap overflow-auto">
            <div className="mb-2 mb-sm-0">
              Showing <b>1</b> to <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
            </div>
            <div className="ms-auto">
              <Pagination className="mb-0 overflow-auto">
                <Pagination.Item className="disabled">Prev</Pagination.Item>
                <Pagination.Item className="active">1</Pagination.Item>
                <Pagination.Item className="">2</Pagination.Item>
                <Pagination.Item className="">3</Pagination.Item>
                <Pagination.Item className="">4</Pagination.Item>
                <Pagination.Item className="">5</Pagination.Item>
                <Pagination.Item className="">next</Pagination.Item>
              </Pagination>
            </div>
          </div>
        </div>
      </Card>
      {/* <!--End::row-1 --> */}

    </Fragment>
  )
}

export default Orders;
