import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { Card, Offcanvas } from 'react-bootstrap';
import SpkButton from '../reusable-uiElements/spk-buttons';
import { OffcanvasProducts } from '@/shared/data/dashboards/posdata';
import Image from 'next/image';

interface Pos {
  badgeShow?: boolean;
  imgSrc?: string;
  title?: string;
  availableColor?: string;
  available?: string;
  fruitName?: string;
  oldPrice?: string;
  newPrice?: string;
  badgeColor?: string;
  bage?: string;
}

interface SpkPoscardProps {
  pos: Pos;
};

const SpkPoscard: React.FC<SpkPoscardProps> = ({ pos }) => {

  //Offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      <Card className="custom-card shadow-none border pos-card-items-card p-3 overflow-hidden">
        {pos.badgeShow && (
          <div className="pos-offer-badge">
            <span className={`badge bg-${pos.badgeColor}`}>{pos.bage}</span>
          </div>
        )}
        <Image fill src={pos.imgSrc as string} className="img-fluid possystem-img card-img-top" alt={pos.fruitName as string}/>
        <div className="card-body bg-white rounded-bottom shadow-sm">
          <div className="mb-3">
            <span className="text-muted">{pos.title}</span>
            <span className={`float-end badge bg-${pos.availableColor}-transparent`}>
              <i className="ti ti-circle-filled me-1"></i>{pos.available}
            </span>
            <br />
            <Link scroll={false} href="#!" className="fw-medium fs-18">
              {pos.fruitName}
            </Link>
          </div>
          <div className="d-flex align-items-center gap-2 justify-content-between flex-wrap">
            <div>
              <SpkButton Buttonvariant="primary" Customclass="btn-sm" onClickfunc={handleShow} Buttontype="button" Buttontoggle="offcanvas" Buttontarget="#viewcart">
                <i className="bx bx-cart fs-18 mb-1 align-middle me-1"></i>Add To Cart
              </SpkButton>
            </div>
            <div>
              <s className="me-2 text-muted fw-medium fs-14">{pos.oldPrice}</s>
              <h4 className="fw-semibold mb-0 d-inline-block">{pos.newPrice}</h4>
            </div>
          </div>
        </div>
      </Card>

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
  );
};

export default SpkPoscard;
