import Image from 'next/image';
import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

interface SpkReviewStyleProps {
  style: {
    imgSrc?: string;
    description?: string;
    name?: string;
    role?: string;
    rating?: number;
    icon?: string;
    bgColor?: string
  };
  cardClass?: string;
  bodyClass?: string;
}

const SpkReviewStyle: React.FC<SpkReviewStyleProps> = ({ style, cardClass, bodyClass }) => {
  return (
    <Fragment>
      <Card className={`custom-card ${cardClass}`}>
        <Card.Body className={bodyClass}>
          <div className="d-flex gap-3 align-items-start flex-wrap flex-sm-nowrap">
            <div className={`border shadow-sm flex-shrink-0 p-2 bg-${style.bgColor} rounded-circle bg-opacity-50`}>
              <Image fill src={style.imgSrc as string} alt="img" className="rounded-circle shadow-sm img-fluid w-auto"/>
            </div>
            <div className="text-wrap">
              <i className="bx bxs-quote-alt-left fs-30 mb-2 text-primary"></i><br />
              <div className="ps-3 fw-medium">
                <i>{style.description}</i>
              </div>
              <div className="ps-3 mt-3">
                <p className="mb-0 fw-semibold fs-14">{style.name}</p>
                <div className="fw-normal text-muted fs-12 mb-2">{style.role}</div>
                <span>
                  <i className="ri-star-fill me-1 text-warning"></i>
                  <i className="ri-star-fill me-1 text-warning"></i>
                  <i className="ri-star-fill me-1 text-warning"></i>
                  <i className="ri-star-fill me-1 text-warning"></i>
                  <i className={`ri-star-${style.icon} text-warning`}></i>
                  <span className="ms-2">{style.rating}</span>
                </span>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default SpkReviewStyle;
