import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'

interface spkObject {
    obj: any
}

const SpkTeamCards: React.FC<spkObject> = ({ obj }) => {
    return (
        <Card className="custom-card team-member text-center">
            <div className="team-shape1"></div>
            <div className="team-shape2"></div>
            <Card.Body className="py-4">
                <div className="mb-3 lh-1 d-flex gap-2 justify-content-center">
                    <span className={`rounded-circle p-2 bg-${obj.bgColor} bg-opacity-25 shadow-sm`}>
                        <Image fill src={obj.imgSrc} className="card-img rounded-circle" alt="..." />
                    </span>
                </div>
                <div>
                    <h6 className="mb-2 fw-medium">{obj.title}</h6>
                    <p className="mb-0 text-primary fw-semibold">{obj.role}</p>
                    <hr className="bg-success border-success border-2 border-top" />
                    <p className="text-muted fs-12 pt-1 px-2">{obj.description}</p>
                    <div className="d-flex justify-content-center">
                        <Link aria-label="anchor" href="#!" className="btn btn-icon rounded-circle btn-primary btn-wave btn-sm waves-effect waves-light"><i className="ri-twitter-x-fill"></i></Link>
                        <Link aria-label="anchor" href="#!" className="btn btn-icon rounded-circle btn-secondary btn-wave btn-sm ms-2 waves-effect waves-light"><i className="ri-facebook-fill"></i></Link>
                        <Link aria-label="anchor" href="#!" className="btn btn-icon rounded-circle btn-success btn-wave btn-sm ms-2 waves-effect waves-light"><i className="ri-instagram-line"></i></Link>
                        <Link aria-label="anchor" href="#!" className="btn btn-icon rounded-circle btn-info btn-wave btn-sm ms-2 waves-effect waves-light"><i className="ri-linkedin-fill"></i></Link>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default SpkTeamCards