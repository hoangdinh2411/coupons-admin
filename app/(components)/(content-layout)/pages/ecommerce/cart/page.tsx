"use client"

import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import SpkBadge from '@/shared/@spk-reusable-components/reusable-uiElements/spk-badge';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkTooltips from '@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips';
import { MasterData } from '@/shared/data/pages/ecommerce/productsdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import { addToWishList, removeCart } from '@/shared/redux/action';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

interface CartProps {}

const Cart: React.FC<CartProps> = () => {

  const maxDisplayItems = 5;

  const cart = useSelector((state: any) => state.cart.items);
  const [localCart, setLocalCart] = useState(MasterData);
  const cartData = [...localCart.slice(0, 5), ...cart]
  const dispatch = useDispatch();

  const handleToRemove = (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Item has been deleted.",
          icon: "success"
        });
        setLocalCart(localCart.filter((item: any) => item.id !== id))
        dispatch(removeCart(id))
      }
    })
  }

  // add to wishList  
  const handleWishList = (item: any) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Item added in wishList",
      showConfirmButton: false,
      timer: 1500
    });
    dispatch(addToWishList(item))
  }

  function dec(el: any) {
    let unit = parseInt(el.currentTarget.parentElement.querySelector("input").value, 10);
    if (unit <= 0) {
      return false;
    } else {
      el.currentTarget.parentElement.querySelector("input").value = unit - 1;
    }
  }

  function inc(el: any) {
    let unit = parseInt(el.currentTarget.parentElement.querySelector("input").value, 10);
    el.currentTarget.parentElement.querySelector("input").value = unit + 1;
  }

  return (
    <Fragment>

      {/* <!-- Page Header --> */}
      <Seo title="Pages-Cart" />

      <Pageheader title="Pages" currentpage="Cart" activepage="Cart" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start:: Row-1 --> */}
      <Row>
        <Col xl={9}>
          <Card className=" custom-card overflow-hidden" id="cart-container-delete">
            <Card.Header>
              <Card.Title>
                Cart Items <span className="text-pink fs-11">({cartData.length} Items)</span>
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <SpkTables tableClass="text-nowrap" header={[{ title: 'Product Name' }, { title: 'Price' }, { title: 'Availability' }, { title: 'Quantity' }, { title: 'Total' }, { title: 'Actions' },]}>
                  {cartData.slice(0, maxDisplayItems).map((idx, index) => (
                    <tr key={index} >
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="me-3">
                            <Image width={112} height={112} src={idx.image} alt="" className={`product-img p-2 bg-${idx.bgColor}-transparent`} />
                          </div>
                          <div className="flex-fill">
                            <div className="mb-2 fs-16 fw-semibold">
                              <Link href="#!" scroll={false} >{idx.title}</Link>
                            </div>
                            <span className="badge bg-success-transparent fs-11"><i className="ri-discount-percent-line fs-10"></i>{idx.discountPercentage} OFF</span>
                            <div className="my-2">
                              <span className="me-1 fw-medium text-muted">Color:</span><span className="fw-medium">{idx.color}</span>
                            </div>
                            <div>
                              <span className="me-1 fw-medium text-muted">Size:</span><span className="fw-medium">{idx.size}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex gap-2 align-items-center">
                          <div className="fw-semibold fs-20 text-pink">
                            ${idx.discountPrice}
                          </div>
                          <s className="text-muted fs-12">
                            ${idx.originalPrice}
                          </s>
                        </div>
                      </td>
                      <td>
                        <SpkBadge variant={idx.stockColor}>{idx.stock}</SpkBadge>
                      </td>
                      <td className="product-quantity-container">
                        <div className="input-group flex-nowrap rounded-pill cart-input-group">
                          <SpkButton Buttonvariant='primary' Customclass='btn-icon btn-wave btn-sm product-quantity-minus waves-effect waves-light' Buttontype="button" onClickfunc={dec} > <i className="ri-subtract-line"></i></SpkButton>
                          <input type="text" className="form-control form-control-sm text-center p-0" aria-label="quantity" defaultValue={idx.qunatity} readOnly />
                          <SpkButton Buttonvariant='primary' Customclass='btn-icon btn-wave btn-sm product-quantity-minus waves-effect waves-light' Buttontype="button" onClickfunc={inc} > <i className="ri-add-line"></i></SpkButton>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="fs-15 fw-semibold">
                          ${idx.discountPrice}
                        </div>
                      </td>
                      <td>
                        <SpkTooltips placement='top' title='Move To Wishlist' >
                          <Link href="/pages/ecommerce/wishlist" className="btn btn-icon btn-secondary btn-sm me-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Move To Wishlist" onClick={() => handleWishList(idx)} ><i className="ri-heart-line"></i></Link>
                        </SpkTooltips>
                        <SpkTooltips placement='top' title='Save For Later' >
                          <Link href="#!" className="btn btn-icon btn-success btn-sm me-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Save For Later"><i className="ri-bookmark-line"></i></Link>
                        </SpkTooltips>
                        <SpkTooltips placement='top' title='Remove From cart' >
                          <Link href="#!" className="btn btn-icon btn-info btn-sm btn-delete" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Remove From cart" onClick={() => handleToRemove(idx.id)} >
                            <i className="ri-delete-bin-line" ></i>
                          </Link>
                        </SpkTooltips>
                      </td>
                    </tr>
                  ))}

                </SpkTables>
                {cartData.length === 0 &&
                  <div className="cart-empty text-center">
                    <span className="svg-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" viewBox="0 0 24 24"><path d="M18.6 16.5H8.9c-.9 0-1.6-.6-1.9-1.4L4.8 6.7c0-.1 0-.3.1-.4.1-.1.2-.1.4-.1h17.1c.1 0 .3.1.4.2.1.1.1.3.1.4L20.5 15c-.2.8-1 1.5-1.9 1.5zM5.9 7.1 8 14.8c.1.4.5.8 1 .8h9.7c.5 0 .9-.3 1-.8l2.1-7.7H5.9z"></path><path d="M6 10.9 3.7 2.5H1.3v-.9H4c.2 0 .4.1.4.3l2.4 8.7-.8.3zM8.1 18.8 6 11l.9-.3L9 18.5z"></path><path d="M20.8 20.4h-.9V20c0-.7-.6-1.3-1.3-1.3H8.9c-.7 0-1.3.6-1.3 1.3v.5h-.9V20c0-1.2 1-2.2 2.2-2.2h9.7c1.2 0 2.2 1 2.2 2.2v.4z"></path><path d="M8.9 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3zM18.6 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-.9 2.2-2.2 2.2zm0-3.5c-.8 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3z"></path></svg>
                    </span>
                    <h3 className="fw-bold mb-1">Your Cart is Empty</h3>
                    <h5 className="mb-3">Add some items to make me happy :)</h5>
                    <Link href="/pages/ecommerce/products" className="btn btn-primary btn-wave m-3 waves-effect waves-light" data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></Link>
                  </div>
                }

              </div>
            </Card.Body>
          </Card>
          <Card className=" custom-card d-none" id="cart-empty-cart">
            <Card.Header>
              <Card.Title>
                Empty Cart
              </Card.Title>
            </Card.Header>
            <Card.Body className="card-body">
              <div className="cart-empty text-center">
                <span className="svg-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" viewBox="0 0 24 24"><path d="M18.6 16.5H8.9c-.9 0-1.6-.6-1.9-1.4L4.8 6.7c0-.1 0-.3.1-.4.1-.1.2-.1.4-.1h17.1c.1 0 .3.1.4.2.1.1.1.3.1.4L20.5 15c-.2.8-1 1.5-1.9 1.5zM5.9 7.1 8 14.8c.1.4.5.8 1 .8h9.7c.5 0 .9-.3 1-.8l2.1-7.7H5.9z" /><path d="M6 10.9 3.7 2.5H1.3v-.9H4c.2 0 .4.1.4.3l2.4 8.7-.8.3zM8.1 18.8 6 11l.9-.3L9 18.5z" /><path d="M20.8 20.4h-.9V20c0-.7-.6-1.3-1.3-1.3H8.9c-.7 0-1.3.6-1.3 1.3v.5h-.9V20c0-1.2 1-2.2 2.2-2.2h9.7c1.2 0 2.2 1 2.2 2.2v.4z" /><path d="M8.9 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3zM18.6 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-.9 2.2-2.2 2.2zm0-3.5c-.8 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3z" /></svg>
                </span>
                <h3 className="fw-bold mb-1">Your Cart is Empty</h3>
                <h5 className="mb-3">Add some items to make me happy :)</h5>
                <Link href="/pages/ecommerce/products" className="btn btn-primary btn-wave m-3" data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3}>
          <Card className=" custom-card">
            <Card.Header>
              <Card.Title>
                Order Summary
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="p-3 text-center border-bottom border-block-end-dashed">
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
                <div className="text-muted mb-2 fs-15">
                  Total:
                </div>
                <h3 className="mb-3">$420.22    <s className="text-muted fs-12 fw-normal">$680.98
                </s>
                </h3>
                <Link href="/pages/ecommerce/checkout" className="btn btn-primary d-grid">
                  Checkout
                </Link>
              </div>
              <div className="p-3 border-bottom border-block-end-dashed">
                <label htmlFor="promo-code" className="fw-semibold fs-15 mb-0">Coupon Code</label>
                <div className="fs-12 text-success mb-3"><i className="ri-checkbox-circle-fill"></i> Coupon Code Applied <span className="text-pink">*SAVE UPTO 20%</span></div>
                <div className="input-group mb-0 p-2 bg-light rounded">
                  <input type="text" className="form-control form-control-sm fw-medium" id="promo-code" name="promo-code" placeholder="Enter Promo Code" aria-label="Enter Promo Code" aria-describedby="coupons" defaultValue="ATYV897G00AA" />
                  <SpkButton Buttonvariant='primary' Customclass='' Buttontype="button"> Apply</SpkButton>
                </div>
              </div>
              <div className="p-3 border-bottom border-block-end-dashed">
                <p className="fs-15 mb-2 fw-semibold">Choose Delivery:</p>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="shipping" id="shipping1" />
                    <label className="form-check-label fw-medium" htmlFor="shipping1">
                      Standard Shipping
                    </label>
                  </div>
                  <div>
                    <div className="fw-medium mb-1 text-end"><span className="text-muted">Charges:</span> $5.00</div>
                    <div className="fs-11 text-muted text-end">Within 5-7 Days</div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="shipping" id="shipping2" defaultChecked />
                    <label className="form-check-label fw-medium" htmlFor="shipping2">
                      Express Shipping
                    </label>
                  </div>
                  <div>
                    <div className="fw-medium mb-1 text-end"><span className="text-muted">Charges:</span> $20.00</div>
                    <div className="fs-11 text-muted text-end">1 Day</div>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <Link href="/pages/ecommerce/products" className="btn btn-success-light btn-wave d-grid">Continue Shopping</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End:: Row-1 --> */}


    </Fragment>
  )
}

export default Cart;
