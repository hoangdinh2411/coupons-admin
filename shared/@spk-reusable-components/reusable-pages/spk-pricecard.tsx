import React, { Fragment } from 'react';
import SpkTooltips from '../reusable-uiElements/spk-tooltips';

interface Feature {
  type?: string;
  name: string;
  isNew?: boolean;
  tooltip?: string;
  badgeText?: string;
  listClass?: string;
  iconClass?: string;
  iconClass1?: string;
}

interface PricingDetails {
  bgClass?: string;
  planClass?: string;
  ribbonText?: string;
  ribbonClass?: string;
  svg?: React.ReactNode;
  planName?: string;
  description?: string;
  price?: string;
  price1?: string;
  priceDetails?: string;
  planClass1?: string;
  textColorClass?: string;
  buttonClass?: string;
  footerClass?: string;
  footerText?: string;
  features: any[];
}

interface SpkPriceCardProps {
  pricing: PricingDetails;
}

const SpkPriceCard: React.FC<SpkPriceCardProps> = ({ pricing }) => {
  return (
    <Fragment>
      <div className={`card custom-card text-center ${pricing.bgClass}`}>
        <div className={`card-body p-4 ${pricing.planClass}`}>
          {pricing.ribbonText && (
            <div className={`ribbon-4 ${pricing.ribbonClass}`}>
              <span>{pricing.ribbonText}</span>
            </div>
          )}
          <div>
            {pricing.svg && <div>{pricing.svg}</div>}
          </div>
          <h6 className={`mb-1 ${pricing.planClass}`}>{pricing.planName}</h6>
          <p className={`fs-12 text-muted ${pricing.planClass1} ${pricing.textColorClass}`}>
            {pricing.description}
          </p>
          <div className={`fs-1 fw-semibold lh-1 ${pricing.planClass}`}>
            <sup className={`fs-16 text-muted align-middle fw-medium me-1 d-inline-block ${pricing.planClass1}`}>
              $
            </sup>
            {pricing.price}
            <span className={`text-muted fw-semibold fs-12 ms-1 align-end d-inline-block ${pricing.planClass1}`}>
              {pricing.price1}
            </span>
            <span className={`text-muted fw-normal fs-12 ms-1 align-end d-inline-block ${pricing.planClass1}`}>
              {pricing.priceDetails}
            </span>
          </div>
          <ul className="list-group mt-3 mb-3 py-1 px-2">
            {pricing.features.map((feature) => (
              <li className={`list-group-item ${feature.listClass}`} key={Math.random()}>
                <div className="d-flex align-items-center">
                  <span className="me-2 fs-14 lh-1">
                    <i className={`ri-check-double-line fw-medium fs-18 ${feature.iconClass}`} />
                  </span>
                  {feature.type && <strong className="me-1 d-inline-block">{feature.type}</strong>}
                  <span>{feature.name}</span>

                  {feature.tooltip && (
                    <SpkTooltips placement='top' title={feature.tooltip}>
                      <span className="align-middle ms-auto">
                        <i className={`fe fe-info fw-medium ${feature.iconClass1}`} />
                      </span>
                    </SpkTooltips>
                  )}

                  {feature.isNew && (
                    <div className="ms-auto">
                      <div className="badge bg-pink rounded-pill">{feature.badgeText}</div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <p className={`fs-12 px-2 mb-4 ${pricing.footerClass}`}>{pricing.footerText}</p>
          <button type="button" className={`btn btn-wave waves-effect waves-light rounded-pill ${pricing.buttonClass}`}>
            Choose Plan
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default SpkPriceCard;
