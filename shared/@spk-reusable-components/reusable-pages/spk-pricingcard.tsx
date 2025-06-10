import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import SpkButton from '../reusable-uiElements/spk-buttons';

interface Feature {
  isAvailable: boolean;
  type?: string;
  name: string;
}

interface PriceDetails {
  planName?: string;
  description?: string;
  price?: string;
  priceDetails?: string;
  bgClass?: string;
  showBadge?: boolean;
  websiteCount?: string;
  website?: string;
  support?: string;
  licenseCount?: string;
  optimize?: string;
  liveSupport?: string;
  offerBadge?: string;
  buttonClass?: string;
  buttonVariant?: string;
  features?: Feature[];
}

interface SpkPricingCardProps {
  price: PriceDetails;
  cardClass?: string;
}

const SpkPricingCard: React.FC<SpkPricingCardProps> = ({ price, cardClass }) => {
  return (
    <Fragment>
      <Card className={`custom-card overflow-hidden ${cardClass}`}>
        <Card.Body className={`pricing-first-card position-relative ${price.bgClass}`}>
          <h6 className="text-fixed-white">{price.planName}</h6>
          <div className="mb-1 text-fixed-white op-7">{price.description}</div>
          <div className="fs-30 fw-bold mb-1 text-fixed-white">
            <sup className="fs-16 op-7 align-middle fw-normal me-1 d-inline-block">$</sup>
            {price.price}
            <span className="op-7 fw-semibold fs-12 ms-1 align-end d-inline-block">
              {price.priceDetails}
            </span>
          </div>
          {price.showBadge && <div className="offer-badge1">{price.offerBadge}</div>}
        </Card.Body>

        <Card.Body className="p-0">
          <div className="p-4">
            <ul className="list-unstyled mb-0">
              {price.features?.map((feature, index) => (
                <li className="d-flex align-items-center mb-3" key={index}>
                  <span className={"me-2"}>
                    <i className={`fa-regular ${feature.isAvailable ? 'fa-circle-check text-success' : 'fa-circle-xmark text-danger'
                      } fs-15`}
                    ></i>
                  </span>
                  <strong className="me-1 d-inline-block">{feature.type}</strong>
                  <span>{feature.name}</span>
                </li>
              ))}
              <li className="d-grid">
                <SpkButton Buttontype="button" Buttonvariant={`${price.buttonVariant}`} Customclass={`btn-wave ${price.buttonClass}`}>
                  Select Now
                </SpkButton>
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default SpkPricingCard;
