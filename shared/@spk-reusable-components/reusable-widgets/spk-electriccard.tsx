import Image from 'next/image';
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

interface SpkElectriccardProps {
    title: string;
    newPrice: string;
    oldPrice: string;
}
const SpkElectriccard: React.FC<SpkElectriccardProps> = ({ title, newPrice, oldPrice }) => {

    return (
        <Fragment>
            <Card className="custom-card card-style-2">
                <Card.Body className=" p-0 d-flex align-items-start">
                    <div className="p-2 m-3 me-1 rounded-3 bg-primary-transparent flex-shrink-0">
                        <Image width={64} height={64} src="../assets/images/ecommerce/png/8.png" alt="img" className="img-fluid card-img-top widget-product-img avatar avatar-xl" />
                    </div>
                    <div className="p-3 flex-grow-1 text-truncate">
                        <div className="d-flex justify-content-between gap-2 align-items-center flex-wrap">
                            <Link href="#!" className="text-muted fs-12">{title}</Link>
                            <div className="min-w-fit-content">
                                <span className="text-muted fw-medium">Rating: </span>
                                <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                <span className="text-warning"><i className="bi bi-star-fill me-1"></i></span>
                                <span className="text-warning"><i className="bi bi-star me-1"></i></span>
                                <span className="text-warning"><i className="bi bi-star"></i></span>
                            </div>
                        </div>
                        <h6 className="mt-1 mb-1 fw-semibold fs-16 text-truncate"><Link scroll={false} href="/pages/ecommerce/product-details">Steel Electric Kettle inside copper coat</Link></h6>
                        <div className="d-flex gap-2 align-items-center flex-wrap">
                            <div className="fw-semibold fs-20 text-pink">
                                {newPrice}
                            </div>
                            <s className="text-muted">
                                {oldPrice}
                            </s>
                            <div className="ms-auto d-flex gap-2">
                                <Link scroll={false} href="/pages/ecommerce/checkout" className="btn btn-icon btn-success rounded-circle">
                                    <i className="bx bx-credit-card-alt align-middle"></i>
                                </Link>
                                <Link scroll={false} href="/pages/ecommerce/cart" className="btn btn-icon btn-primary rounded-circle">
                                    <i className="bx bxs-cart-add align-middle"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkElectriccard;