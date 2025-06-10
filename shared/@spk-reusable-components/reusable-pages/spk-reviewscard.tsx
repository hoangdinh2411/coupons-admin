import Image from 'next/image';
import React from 'react';
import { Card } from 'react-bootstrap';

interface Review {
  title: string;
  description: string;
  imgSrc: string;
  name: string;
  role: string;
}

interface SpkReviewsCardProps {
  review: Review;
  cardClass?: string;
  bodyClass?: string;
}

const SpkReviewsCard: React.FC<SpkReviewsCardProps> = ({ review, cardClass, bodyClass }) => {
  return (
    <Card className={`custom-card ${cardClass}`}>
      <Card.Body className={bodyClass}>
        <div className="fw-semibold fs-17 mb-2">{review.title}</div>
        <p>{review.description}</p>
        <div>
          <span className="avatar avatar-xl rounded-circle mb-2">
            <Image width={64} height={64} src={review.imgSrc} alt={review.name} className="img-fluid rounded-circle" />
          </span>
          <p className="mb-1 fw-bold fs-14">{review.name}</p>
          <p className="mb-0 fs-11 text-muted">{review.role}</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SpkReviewsCard;
