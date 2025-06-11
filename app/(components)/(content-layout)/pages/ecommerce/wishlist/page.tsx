"use client"

import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkBadge from '@/shared/@spk-reusable-components/reusable-uiElements/spk-badge';
import { MasterData } from '@/shared/data/pages/ecommerce/productsdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import { removeCart } from '@/shared/redux/action';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react'
import { Card, Col, Pagination, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

interface WishlistProps {}

const Wishlist: React.FC<WishlistProps> = () => {

  const wishList = useSelector((state:any) => state.wishList.items);
  const [localWishList, setLocalWishList] = useState(MasterData);
  const wishListdata = [...localWishList.slice(0, 8), ...wishList];
  const dispatch = useDispatch();

  const handleToRemove = (id: number) => {
    setLocalWishList(localWishList.filter((item) => item.id !== id))
    dispatch(removeCart(id))

  }

  const [areAllChecked, setAreAllChecked] = useState(false);
  const handleHeaderCheckboxChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setAreAllChecked(e.target.checked);
  };

  const [checkboxes, setCheckboxes] = useState(false);
  const handleRowCheckboxChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setCheckboxes(e.target.checked)
  };

  return (
    <Fragment>

      {/* <!-- Page Header --> */}
      <Seo title="Pages-Wishlist" />

      <Pageheader title="Pages" currentpage="Wishlist" activepage="Wishlist" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start::row-1 --> */}
      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>
                Wishlist
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <SpkTables tableClass="text-nowrap table-bordered" showCheckbox={true} checked={areAllChecked} onChange={handleHeaderCheckboxChange} header={[{ title: 'Product' }, { title: 'Category' }, { title: 'Price' }, { title: 'Items' }, { title: 'Stock' }, { title: 'Rating' }, { title: 'Action' },]}>
                  {wishListdata.map((idx, index) => (
                    <tr className="wishlist-list" key={index} >
                      <td className="wishlist-checkbox">
                        <input className="form-check-input" type="checkbox" id="product3" defaultChecked={areAllChecked} aria-label="..." /></td>
                      <td>
                        <div className="d-flex">
                          <span className="avatar avatar-md avatar-square bg-light"><Image width={40} height={40} src={idx.image} className="w-100 h-100" alt="..." /></span>
                          <div className="ms-2">
                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link href="#!"> {idx.title}</Link></p>
                            <p className="fs-12 text-muted mb-0">{idx.category}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>{idx.category}</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 align-items-center">
                          <div className="fw-semibold fs-17 text-pink">
                            ${idx.discountPrice}
                          </div>
                          <s className="text-muted fs-12">
                            ${idx.originalPrice}
                          </s>
                        </div>
                      </td>
                      <td>{idx.discountPrice}</td>
                      <td><SpkBadge variant={idx.stockColor} >{idx.stock}</SpkBadge></td>
                      <td>
                        <div className="min-w-fit-content">
                          <span className="text-warning"><i className="me-1 bi bi-star-fill"></i></span>
                          <span className="text-warning"><i className="me-1 bi bi-star-fill"></i></span>
                          <span className="text-warning"><i className="me-1 bi bi-star-fill"></i></span>
                          <span className="text-warning"><i className="me-1 bi bi-star"></i></span>
                          <span className="text-warning"><i className="bi bi-star"></i></span>
                        </div>
                      </td>
                      <td>
                        <div className="hstack gap-2 fs-15">
                          <Link scroll={false} href="/pages/ecommerce/cart" className="btn btn-sm btn-primary-light"><i className="ri-shopping-cart-line"></i></Link>
                          <Link scroll={false} href="#!" className="btn btn-sm btn-info-light"><i className="ri-eye-line me-1"></i></Link>
                          <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light wishlist-btn" onClick={() => handleToRemove(idx.id)} ><i className="ri-delete-bin-line"></i></Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </SpkTables>

              </div>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex align-items-center flex-wrap overflow-auto">
                <div className="mb-2 mb-sm-0">
                  Showing <b>1</b> to <b>8</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
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
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      {/* <!--End::row-1 --> */}

    </Fragment>
  )
}

export default Wishlist;
