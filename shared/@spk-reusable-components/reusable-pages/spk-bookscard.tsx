import Image from 'next/image';
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

interface Book {
    imgSrc: string;
    title: string;
    tags: React.ReactNode;
    description: string;
    date: string;
    author: string;
}

interface SpkBookscardProps {
    book: Book;
    cardClass?: string;
    bodyClass?: string;
}

const SpkBookscard: React.FC<SpkBookscardProps> = ({ book, cardClass, bodyClass }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${cardClass}`}>
                <Card.Body className={bodyClass}>
                    <div className="d-flex align-items-center flex-wrap gap-3">
                        <div className="mb-3">
                            <span className="avatar avatar-xl bg-info bg-opacity-25 border border-opacity-25 p-1 avatar-rounded">
                                <Image width={64} height={64} src={book.imgSrc} alt="Book Cover" />
                            </span>
                        </div>
                        <div className="mb-2">
                            <h6 className="fw-medium mt-1 mb-2"><Link href="#!" scroll={false}> {book.title}</Link></h6>
                            <div className="popular-tags mb-3">
                                {book.tags}
                            </div>
                        </div>
                    </div>
                    <p className="text-muted mb-1 text-start">{book.description}</p>
                    <div className="fs-11 text-center"><span className="text-muted">Published On</span> - <span className="fw-medium mb-0">{book.date}</span></div>
                    <div className="d-flex gap-2 justify-content-between mt-3 align-items-end flex-wrap">
                        <div>
                            <Link href="#!" scroll={false}><span className="fw-semibold">Author:</span> <i className="text-pink fw-medium">{book.author}</i></Link>
                        </div>
                        <div className="btn-list">
                            <Link href="#!" scroll={false} className="btn btn-sm btn-secondary-light"><span><i className="ri-heart-3-line align-middle"></i> Add to Wishlist</span></Link>
                            <Link href="#!" scroll={false} className="btn btn-sm btn-success-light me-0"><span><i className="ri-share-line"></i> Share</span></Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkBookscard;
