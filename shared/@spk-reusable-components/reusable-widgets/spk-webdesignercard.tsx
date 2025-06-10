import Image from 'next/image';
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

interface SpkWebdesignercardProps {
    img?: string;
    userName?: string;
    role?: string;
    detailButton?: string;
}
const SpkWebdesignercard: React.FC<SpkWebdesignercardProps> = ({ img, userName, role, detailButton }) => {
    return (
        <Fragment>
            <Card className="custom-card overflow-hidden">
                <div className="p-5 bg-primary mb-5 widget-profile-bg">
                    <Image width={112} height={112} src={img as string} alt="" className="img-fluid rounded-circle widget-profile shadow" />
                </div>
                <Card.Body className=" text-center mt-2">
                    <h5 className="mb-1 fw-semibold">{userName}</h5>
                    <p className="text-muted fs-14">{role}</p>
                    <p className="px-3 text-gray-6">Leading with passion, delivering with purpose. I'm here to make a difference, one innovative step.</p>
                    <div className="btn-list mb-1">
                        <div className="btn btn-icon rounded-circle btn-primary-light"><i className="ri-facebook-fill fs-17"></i></div>
                        <div className="btn btn-icon rounded-circle btn-orange-light"><i className="ri-instagram-fill fs-17"></i></div>
                        <div className="btn btn-icon rounded-circle btn-teal-light"><i className="ri-twitter-x-fill fs-17"></i></div>
                    </div>
                </Card.Body>
                <Card.Body className=" bg-light bg-opacity-75 text-center border-top border-block-start-dashed">
                    <div className="btn btn-primary rounded-pill btn-w-lg">{detailButton}</div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkWebdesignercard;