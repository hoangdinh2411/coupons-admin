import React, { Fragment, JSX } from 'react'
import { Card } from 'react-bootstrap'
import SpkBadge from '../reusable-uiElements/spk-badge';

interface SpkEcommercecardProps {
  cardClass?: string;
  bodyClass?: string;
  object: {
    title: string;
    icon: JSX.Element | string;
    value: string;
    percentageChange: string;
    badgeColor: string
    iconColor: string;
    percentageText: string;
    changeDirection?: string | undefined;
  };
  showIncreaseLabel: boolean;
  showMonthLabel: boolean;
}

const SpkEcommercecard: React.FC<SpkEcommercecardProps> = ({ cardClass, bodyClass, object, showIncreaseLabel, showMonthLabel }) => {
  return (
    <Fragment>
      <Card className={`custom-card ${cardClass}`}>
        {showIncreaseLabel && (
          <Card.Body className={bodyClass}>
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-1">
              <div>
                <div className="fs-13 align-middle text-muted mb-1">{object.title}</div>
                <div className="text-muted fs-12 mb-1">
                  <span className="text-dark fw-semibold fs-18">
                    {object.value}
                  </span>
                </div>
                <div className="d-flex gap-2 justify-content-between flex-wrap align-items-center">
                  <div className="fs-12 mb-0">{object.percentageText} </div>
                  <div className={`badge bg-${object.badgeColor} rounded-pill`}>{object.percentageChange}</div>
                </div>
              </div>
              <div className={`text-${object.iconColor} p-1 rounded-circle border border-${object.iconColor} border-opacity-25 shadow-sm ms-auto`}>
                {object.icon}
              </div>
            </div>
          </Card.Body>
        )}
        {showMonthLabel && (
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div>
                <div className="flex-fill fs-13 text-muted mb-2">{object.title}</div>
                <h4 className="fw-semibold mb-0">{object.value}</h4>
              </div>
              <div className={`avatar avatar-md avatar-rounded bg-${object.badgeColor} shadow-${object.badgeColor} flex-shrink-0`}>
                <i className={`ti ${object.icon} fs-18`}></i>
              </div>
            </div>
            <p className="mb-0 mt-2">{object.percentageText} <SpkBadge variant='' Customclass={`badge bg-${object.iconColor}-transparent rounded-pill`}><i className={`${object.changeDirection} fs-11`}></i> 0.8%</SpkBadge></p>
          </Card.Body>
        )}
      </Card>
    </Fragment>
  );
}

export default SpkEcommercecard;
