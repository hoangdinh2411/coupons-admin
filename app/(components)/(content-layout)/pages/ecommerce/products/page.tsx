"use client"

import SpkTooltips from '@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips';
import LabeledTwoThumbs1 from '@/shared/data/pages/ecommerce/productsdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import { addCart } from '@/shared/redux/action';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react'
import { Card, Col, Collapse, Dropdown, Pagination, Row } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

interface ProductsProps {}

const Products: React.FC<ProductsProps> = ({ local_varaiable }: any) => {

  const { data } = useSelector((state:any) => state.product)
  const [filteredData, setFiltredData] = useState(data);
  const [search, setSearch] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);


  const dispatch = useDispatch()
  useEffect(() => {
    setFiltredData(data)
  }, [data])

  const handleSearch = () => {
    const updateSearch = data.filter((item: { title: string; category: string; }) => item.title.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()))
    setFiltredData(updateSearch)
  }

  useEffect(() => {
    const updateSearch = data.filter((item: { title: string; category: string; }) => item.title.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()))
    setFiltredData(updateSearch)
  }, [search])

  const filterSetSuggestion = data.filter((item: { title: string; }) => item.title.toLowerCase().includes(search.toLowerCase()));
  const suggestions = filterSetSuggestion.map((item: { title: any; }) => item.title)

  const handleToChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setSearch(value)
    setShowSuggestions(value.length > 0)
  }

  const handleSuggestionCLick = (suggestion: React.SetStateAction<string>) => {
    setSearch(suggestion);
    setShowSuggestions(false);
    // handleSearch()
  }

  const handleAddToCart = (item: any) => {
    dispatch(addCart(item))
  }

  const [activeColor, setActiveColor] = useState("color-4");

  const handleColorClick = (color: React.SetStateAction<string>) => {
    setActiveColor(color);
  };

  return (
    <Fragment>

      {/* <!-- Page Header --> */}
      <Seo title="Ecommerce-Products" />

      <Pageheader title="Pages" currentpage="Products" activepage="Products" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start:: Row-1 --> */}


      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Products
              </Card.Title>
              <Dropdown>
                <Dropdown.Toggle className="btn btn-primary dropdown-toggle">
                  <i className="ti ti-sort-descending-2 me-1 d-inline-block"></i> Sort By
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as="li" className="dropdown-item">Created Date</Dropdown.Item>
                  <Dropdown.Item as="li" className="dropdown-item">Status</Dropdown.Item>
                  <Dropdown.Item as="li" className="dropdown-item">Orders</Dropdown.Item>
                  <Dropdown.Item as="li" className="dropdown-item">Product Name</Dropdown.Item>
                  <Dropdown.Item as="li" className="dropdown-item">Newest</Dropdown.Item>
                  <Dropdown.Item as="li" className="dropdown-item">Oldest</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Header>
            <Card.Body>
              <div className="input-group p-3 bg-light rounded mb-3">
                <input type="text" className="form-control" placeholder="Search your Orders with Order Id.." onChange={handleToChange} aria-label="Recipient's username" aria-describedby="button-addon2" />
                <Link href="#!" scroll={false} onClick={handleSearch} className="btn btn-primary"><i className="ti ti-search"></i></Link>
              </div>
              <h6 className="mb-0"> Showing <span className="fw-semibold text-PRIMARY">87,949</span>  products found matching your search.</h6>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={9}>
          <Row>
            {filteredData.map((idx:any, index: React.Key | null | undefined) => (
              <Col xxl={3} lg={6} xl={4} sm={6} key={index}>
                <Card className="custom-card card-style-2">
                  <Card.Body className="p-0">
                    <div className="top-left-badge">
                      <div className={`badge bg-${idx.badgeClass} d-inline-block`}>{idx.discountPercentage}% Off</div>
                    </div>
                    <div className="card-img-top">
                      <div className="btns-container-1 align-items-center gap-1">
                        <SpkTooltips placement='top' title="Add to Wishlist" >
                          <Link href="/pages/ecommerce/wishlist" scroll={false} className="btn btn-icon btn-success rounded-circle" data-bs-toggle="tooltip" aria-label="Add to Wishlist" data-bs-original-title="Add to Wishlist"><i className="bx bx-heart align-center"></i>
                          </Link>
                        </SpkTooltips>
                        <SpkTooltips placement="top" title="Compare" >
                          <Link href="#!" scroll={false} className="btn btn-icon btn-info  rounded-circle" data-bs-toggle="tooltip" aria-label="Compare" data-bs-original-title="Compare"><i className="bx bx-adjust"></i></Link>
                        </SpkTooltips>
                      </div>
                      <div className="img-box-2">
                        <Link href="/pages/ecommerce/product-details">
                          <Image fill src={idx.image} alt="img" className="scale-img img-fluid w-100 bg-gray-400 rounded-top p-3" />
                        </Link>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="d-flex justify-content-between">
                        <Link href="#!" className="text-muted fs-12">{idx.category}</Link>
                        <div className="min-w-fit-content fs-11">
                          <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                          <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                          <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                          <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                          <span className="text-warning"><i className="bi bi-star"></i></span>
                        </div>
                      </div>
                      <h6 className="mt-1 mb-2 fw-semibold fs-14"><Link href="/pages/ecommerce/product-details">{idx.title} </Link></h6>
                      <div className="d-flex gap-2 align-items-center mb-2">
                        <div className="fw-semibold fs-20 text-pink">
                          ${idx.discountPrice}
                        </div>
                        <s className="text-muted fs-12">
                          ${idx.originalPrice}
                        </s>
                      </div>
                      <div className="d-flex gap-1 justify-content-between flex-wrap">
                        <Link href="/pages/ecommerce/checkout" className="btn btn-success-light btn-sm">
                          <i className="bx bx-credit-card-alt"></i> Buy Now
                        </Link>
                        <Link href="/pages/ecommerce/cart" className="btn btn-primary btn-sm" onClick={() => handleAddToCart(idx)} >
                          <i className="bx bxs-cart-add"></i> Add to Cart
                        </Link>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <Col md={12}>
              {/* <!-- Start::pagination --> */}
              <nav aria-label="Page navigation" className="pagination-style-4 mt-3">
                <Pagination className="text-center justify-content-center gap-1">
                  <Pagination.Item className="disabled">Prev</Pagination.Item>
                  <Pagination.Item className="active">1</Pagination.Item>
                  <Pagination.Item className="">2</Pagination.Item>
                  <Pagination.Item className=""><i className="bi bi-three-dots"></i></Pagination.Item>
                  <Pagination.Item className="">16</Pagination.Item>
                  <Pagination.Item className="">17</Pagination.Item>
                  <Pagination.Item className="">next</Pagination.Item>
                </Pagination>
              </nav>
              {/* <!-- End::pagination --> */}
            </Col>
          </Row>
        </Col>
        <Col xl={3}>
          <Card className="custom-card products-navigation-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Filter
              </Card.Title>
              <div className="ms-auto">
                <Link scroll={false} href="#!" className="text-decoration-underline fw-medium text-Secondary">Clear All</Link>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="p-3 border-bottom">
                <h6 className="fw-semibold mb-0">Categories</h6>
                <div className="py-3 pb-0">
                  <div className="form-check mb-2 p-0">
                    <input className="form-check-input float-end" type="checkbox" value="" id="c-1" defaultChecked />
                    <label className="form-check-label text-wrap pe-3" htmlFor="c-1">
                      Home Appliances <span className="fs-11 fw-normal text-muted">(5,894)</span>
                    </label>
                  </div>
                  <div className="form-check mb-2 p-0">
                    <input className="form-check-input float-end" type="checkbox" value="" id="c-2" />
                    <label className="form-check-label text-wrap pe-3" htmlFor="c-2">
                      Fashion & Accessories <span className="fs-11 fw-normal text-muted">(3,120)</span>
                    </label>
                  </div>
                  <div className="form-check mb-2 p-0">
                    <input className="form-check-input float-end" type="checkbox" value="" id="c-3" defaultChecked />
                    <label className="form-check-label text-wrap pe-3" htmlFor="c-3">
                      Furniture & Decor <span className="fs-11 fw-normal text-muted">(9,432)</span>
                    </label>
                  </div>
                  <div className="form-check mb-2 p-0">
                    <input className="form-check-input float-end" type="checkbox" value="" id="c-4" defaultChecked />
                    <label className="form-check-label text-wrap pe-3" htmlFor="c-4">
                      Beauty & Wellness <span className="fs-11 fw-normal text-muted">(6,589)</span>
                    </label>
                  </div>
                  <div className="form-check mb-2 p-0">
                    <input className="form-check-input float-end" type="checkbox" value="" id="c-5" />
                    <label className="form-check-label text-wrap pe-3" htmlFor="c-5">
                      Outdoor & Sports Equipment <span className="fs-11 fw-normal text-muted">(4,786)</span>
                    </label>
                  </div>
                  <Collapse in={open} className="collapse"  >
                    <div id="category-more">
                      <div className="form-check mb-2 p-0">
                        <input className="form-check-input float-end" type="checkbox" value="" id="c-6" />
                        <label className="form-check-label text-wrap pe-3" htmlFor="c-6">
                          Books & Stationery <span className="fs-11 fw-normal text-muted">(3,512)</span>
                        </label>
                      </div>
                      <div className="form-check mb-2 p-0">
                        <input className="form-check-input float-end" type="checkbox" value="" id="c-7" />
                        <label className="form-check-label text-wrap pe-3" htmlFor="c-7">
                          Food & Beverages <span className="fs-11 fw-normal text-muted">(1,987)</span>
                        </label>
                      </div>
                    </div>
                  </Collapse>
                  <Link className="ecommerce-more-link mt-3 d-block" scroll={false} data-bs-toggle="collapse" href="#" role="button" aria-expanded={open ? 'true' : 'false'} aria-controls="category-more" onClick={() => setOpen(!open)} >MORE</Link>
                </div>
              </div>

              <div className="p-3 border-bottom">
                <h6 className="fw-semibold mb-0">Price Range</h6>
                <div className="py-3 pb-0">
                  <div id="nonlinear">
                    <LabeledTwoThumbs1 rtl={local_varaiable.dir == 'rtl'} />
                  </div>
                </div>
              </div>
              <div className="p-3 border-bottom">
                <h6 className="fw-semibold mb-0">Colors</h6>
                <div className="py-3 pb-0">
                  <p className="mb-0 d-flex align-items-center">
                    <Link scroll={false} className={`color-1 product-colors flex-shrink-0 ${activeColor === 'color-1' ? 'selected' : ''}`} href="#!" onClick={() => handleColorClick('color-1')}><i className="ri-checkbox-blank-circle-fill"></i></Link>
                    <Link scroll={false} className={`color-2 product-colors flex-shrink-0 ${activeColor === 'color-2' ? 'selected' : ''}`} href="#!" onClick={() => handleColorClick('color-2')}>
                      <i className="ri-checkbox-blank-circle-fill"></i></Link>
                    <Link scroll={false} className={`color-3 product-colors flex-shrink-0 ${activeColor === 'color-3' ? 'selected' : ''}`} href="#!" onClick={() => handleColorClick('color-3')}>
                      <i className="ri-checkbox-blank-circle-fill"></i></Link>
                    <Link scroll={false} className={`color-4 product-colors flex-shrink-0 ${activeColor === 'color-4' ? 'selected' : ''}`} href="#!" onClick={() => handleColorClick('color-4')}>
                      <i className="ri-checkbox-blank-circle-fill"></i></Link>
                    <Link scroll={false} className={`color-5 product-colors flex-shrink-0 ${activeColor === 'color-5' ? 'selected' : ''}`} href="#!" onClick={() => handleColorClick('color-5')}>
                      <i className="ri-checkbox-blank-circle-fill"></i></Link>
                  </p>
                </div>
              </div>
              <div className="p-3 border-bottom">
                <h6 className="fw-semibold mb-0">Brand</h6>
                <div className="py-3 pb-0">
                  <div className="form-check mb-2 p-0">
                    <input className="form-check-input float-end" type="checkbox" value="" id="j-1" defaultChecked />
                    <label className="form-check-label text-wrap pe-3" htmlFor="j-1">
                      Zenith <span className="fs-11 fw-normal text-muted">(1,223)</span>
                    </label>
                  </div>
                  <div className="form-check mb-2 p-0">
                    <input className="form-check-input float-end" type="checkbox" value="" id="j-2" defaultChecked />
                    <label className="form-check-label text-wrap pe-3" htmlFor="j-2">
                      FlexWear <span className="fs-11 fw-normal text-muted">(3,145)</span>
                    </label>
                  </div>
                  <div className="form-check mb-2 p-0">
                    <input className="form-check-input float-end" type="checkbox" value="" id="j-3" defaultChecked />
                    <label className="form-check-label text-wrap pe-3" htmlFor="j-3">
                      OmegaTech <span className="fs-11 fw-normal text-muted">(895)</span>
                    </label>
                  </div>
                  <div className="form-check mb-2 p-0">
                    <input className="form-check-input float-end" type="checkbox" value="" id="j-4" />
                    <label className="form-check-label text-wrap pe-3" htmlFor="j-4">
                      ProActive <span className="fs-11 fw-normal text-muted">(512)</span>
                    </label>
                  </div>
                  <div className="form-check mb-0 p-0">
                    <input className="form-check-input float-end" type="checkbox" value="" id="j-5" />
                    <label className="form-check-label text-wrap pe-3" htmlFor="j-5">
                      Griffin & Co. <span className="fs-11 fw-normal text-muted">(1,894)</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <h6 className="fw-semibold mb-0">Sizes</h6>
                <div className="py-3 pb-0">
                  <div className="form-check mb-2 p-0">
                    <input className="form-check-input float-end" type="checkbox" value="" id="e-1" defaultChecked />
                    <label className="form-check-label text-wrap pe-3" htmlFor="e-1">
                      Petite (P) <span className="fs-11 fw-normal text-muted">(432)</span>
                    </label>
                  </div>
                  <div className="form-check mb-2 p-0">
                    <input className="form-check-input float-end" type="checkbox" value="" id="e-2" />
                    <label className="form-check-label text-wrap pe-3" htmlFor="e-2">
                      Small (S) <span className="fs-11 fw-normal text-muted">(1,219)</span>
                    </label>
                  </div>
                  <div className="form-check mb-2 p-0">
                    <input className="form-check-input float-end" type="checkbox" value="" id="e-3" defaultChecked />
                    <label className="form-check-label text-wrap pe-3" htmlFor="e-3">
                      Regular Medium (M) <span className="fs-11 fw-normal text-muted">(10,842)</span>
                    </label>
                  </div>
                  <Collapse in={open1}>
                    <div id="sizes-more">
                      <div className="form-check mb-2 p-0">
                        <input className="form-check-input float-end" type="checkbox" value="" id="e-4" defaultChecked />
                        <label className="form-check-label text-wrap pe-3" htmlFor="e-4">
                          Large (L) <span className="fs-11 fw-normal text-muted">(897)</span>
                        </label>
                      </div>
                      <div className="form-check mb-2 p-0">
                        <input className="form-check-input float-end" type="checkbox" value="" id="s-5" />
                        <label className="form-check-label text-wrap pe-3" htmlFor="s-5">
                          Extra Large (XL) <span className="fs-11 fw-normal text-muted">(1,025)</span>
                        </label>
                      </div>
                      <div className="form-check mb-2 p-0">
                        <input className="form-check-input float-end" type="checkbox" value="" id="s-6" />
                        <label className="form-check-label text-wrap pe-3" htmlFor="s-6">
                          XXL <span className="fs-11 fw-normal text-muted">(156)</span>
                        </label>
                      </div>
                      <div className="form-check mb-0 p-0">
                        <input className="form-check-input float-end" type="checkbox" value="" id="s-7" />
                        <label className="form-check-label text-wrap pe-3" htmlFor="s-7">
                          XXXL <span className="fs-11 fw-normal text-muted">(402)</span>
                        </label>
                      </div>
                    </div>
                  </Collapse>
                  <Link scroll={false} className="ecommerce-more-link mt-3 d-block" data-bs-toggle="collapse" href="#" role="button" aria-expanded={open1 ? 'true' : 'false'} aria-controls="sizes-more" onClick={() => setOpen1(!open1)}>MORE</Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End:: Row-1 --> */}
    </Fragment>
  )
};
const mapStateToProps = (state: any) => ({
  local_varaiable: state
});
export default connect(mapStateToProps,)(Products);
