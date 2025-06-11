"use client"

import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import { ProductsList } from '@/shared/data/pages/ecommerce/productlistdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react'
import { Col, Pagination, Row } from 'react-bootstrap';

interface ProductslistProps {}

const Productslist: React.FC<ProductslistProps> = () => {

  const [selectedProducts, setSelectedProducts] = useState<any>([]);

  const handleCheckboxChange = (productId: any) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id: any) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };
  const handleSelectAllChange = () => {
    if (selectedProducts.length === ProductsList.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(ProductsList.map(product => product.id));
    }
  };

  const [products, setProducts] = useState(ProductsList)
  const handleRemove = (id: number) => {
    const ProductList = products.filter((idx) => idx.id !== id)
    setProducts(ProductList)
  }

  return (
    <Fragment>

      {/* <!-- Page Header --> */}
      <Seo title="Pages-Products List" />

      <Pageheader title="Pages" currentpage="Products List" activepage="Products List" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start::row-1 --> */}
      <Row>
        <Col xl={12}>
          <div className="table-responsive">
            <SpkTables tableClass='table-striped text-nowrap' showCheckbox={true} checked={selectedProducts.length === ProductsList.length}
              onChange={handleSelectAllChange} Customcheckclass='check-all' header={[{ title: 'Product' }, { title: 'Price' }, { title: 'Stock' }, { title: 'Status' }, { title: 'Category' }, { title: 'Publisher' }, { title: 'Published On' }, { title: 'Actions' }]} >
              {products.map((product) => (
                <tr className="product-list" key={product.id}>
                  <td className="me-3 product-checkbox">
                    <input className="form-check-input" type="checkbox" value="" aria-label="..." checked={selectedProducts.includes(product.id)}
                      onChange={() => handleCheckboxChange(product.id)} />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-md avatar-square bg-light">
                        <Image width={40} height={40} src={product.image} className="w-100 h-100" alt={product.title} />
                      </span>
                      <div className="ms-3">
                        <div className="mb-1 fw-medium text-truncate product-title-text">
                          <Link href="#!">{product.title}</Link>
                        </div>
                        <p className="fs-12 text-muted mb-0">Brand: {product.brand}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="mb-2 fs-15 fw-semibold text-pink">{product.price}</p>
                  </td>
                  <td>
                    <p className="mb-2 fw-medium">{product.quantity}</p>
                  </td>
                  <td>
                    <span className="badge bg-primary mb-2">{product.status}</span>
                  </td>
                  <td>
                    <p className="fw-medium mb-2">{product.category}</p>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm p-1 bg-light me-2 avatar-rounded">
                        <Image height={28} width={28} src={product.sellerAvatar} alt={product.sellerName} />
                      </span>
                      <Link href="#!" scroll={false}>{product.sellerName}</Link>
                    </div>
                  </td>
                  <td>
                    <p className="fs-12 text-muted mb-0">{product.addedDate}</p>
                  </td>
                  <td>
                    <div className="hstack gap-2 fs-15">
                      <Link scroll={false} href="/pages/ecommerce/edit-products" className="btn btn-sm btn-primary-light">
                        <i className="ri-edit-line me-1"></i> Edit Product
                      </Link>
                      <Link href="#!" scroll={false} onClick={() => handleRemove(product.id)} className="btn btn-sm btn-danger-light product-btn">
                        <i className="ri-delete-bin-line me-1"></i> Remove
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </SpkTables>
          </div>
          <div className="my-3 px-3">
            <div className="d-flex align-items-center flex-wrap overflow-auto">
              <div className="mb-2 mb-sm-0">
                Showing <b>1</b> to <b>8</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
              </div>
              <div className="ms-auto">
                <Pagination className="mb-0 overflow-auto">
                  <Pagination.Item className="disabled">Prev</Pagination.Item>
                  <Pagination.Item className="active">1</Pagination.Item>
                  <Pagination.Item className="">2</Pagination.Item>
                  <Pagination.Item className="">next</Pagination.Item>
                </Pagination>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/* <!--End::row-1 --> */}

    </Fragment>
  )
}

export default Productslist;
