import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import SpkTooltips from '../reusable-uiElements/spk-tooltips';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  badgeClass?: string;
  discountPercentage?: string;
  image?: string;
  category?: string;
  title?: string;
  discountPrice?: string;
  originalPrice?: string;
}

interface SpkProductscardProps {
  idx: Product;
}

const SpkProductscard: React.FC<SpkProductscardProps> = ({ idx }) => {
  return (
    <Fragment>
      <Card className="custom-card card-style-2">
        <Card.Body className="p-0">
          <div className="top-left-badge">
            <div className={`badge bg-${idx.badgeClass} d-inline-block`}>
              {idx.discountPercentage}% Off
            </div>
          </div>
          <div className="card-img-top">
            <div className="btns-container-1 align-items-center gap-1">
              <SpkTooltips placement="top" title="Add to Wishlist">
                <Link
                  href="/pages/ecommerce/wishlist"
                  scroll={false}
                  className="btn btn-icon btn-success rounded-circle"
                  data-bs-toggle="tooltip"
                  aria-label="Add to Wishlist"
                  data-bs-original-title="Add to Wishlist"
                >
                  <i className="bx bx-heart align-center"></i>
                </Link>
              </SpkTooltips>
              <SpkTooltips placement="top" title="Compare">
                <Link
                  href="#!"
                  scroll={false}
                  className="btn btn-icon btn-info rounded-circle"
                  data-bs-toggle="tooltip"
                  aria-label="Compare"
                  data-bs-original-title="Compare"
                >
                  <i className="bx bx-adjust"></i>
                </Link>
              </SpkTooltips>
            </div>
            <div className="img-box-2">
              <Link href="/pages/ecommerce/product-details">
                <Image fill src={idx.image as string} alt="img" className="scale-img img-fluid w-100 bg-gray-400 rounded-top p-3"/>
              </Link>
            </div>
          </div>
          <div className="p-3">
            <div className="d-flex justify-content-between">
              <Link href="#!" className="text-muted fs-12">
                {idx.category}
              </Link>
              <div className="min-w-fit-content fs-11">
                {[...Array(5)].map((_, index) => (
                  <i
                    key={index}
                    className={`bi bi-star-fill text-warning lh-1 me-1 fw-normal align-middle ${index < 4 ? '' : 'text-muted'
                      }`}
                  ></i>
                ))}
              </div>
            </div>
            <h6 className="mt-1 mb-2 fw-semibold fs-14">
              <Link href="/pages/ecommerce/product-details">{idx.title}</Link>
            </h6>
            <div className="d-flex gap-2 align-items-center mb-2">
              <div className="fw-semibold fs-20 text-pink">
                ${idx.discountPrice}
              </div>
              <s className="text-muted fs-12">${idx.originalPrice}</s>
            </div>
            <div className="d-flex gap-1 justify-content-between flex-wrap">
              <Link href="/pages/ecommerce/checkout" className="btn btn-success-light btn-sm">
                <i className="bx bx-credit-card-alt"></i> Buy Now
              </Link>
              <Link href="/pages/ecommerce/cart" className="btn btn-primary btn-sm">
                <i className="bx bxs-cart-add"></i> Add to Cart
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default SpkProductscard;
