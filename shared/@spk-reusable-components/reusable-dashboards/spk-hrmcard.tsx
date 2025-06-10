import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

interface HrmCardProps {
  cardClass?: string;
  icon?: string;
  title?: string;
  value?: string | number;
  arrowColor?: string;
  percent?: string | number;
  arrowIcon?: 'up' | 'down';
}

interface SpkHrmcardProps {
  hrm: HrmCardProps;
}

const SpkHrmcard: React.FC<SpkHrmcardProps> = ({ hrm }) => {
  return (
    <Fragment>
      <Card className={`custom-card hrm-main-card ${hrm.cardClass}`}>
        <Card.Body>
          <div className="d-flex gap-3">
            <div className={`avatar bg-${hrm.cardClass} mb-3 avatar-rounded shadow-sm flex-shrink-0`}>
              <i className={`ti ${hrm.icon} fs-20`}></i>
            </div>
            <div>
              <p className="fw-medium text-muted mb-2">{hrm.title}</p>
              <h4 className="fw-semibold mb-2">{hrm.value}</h4>
              <div>
                <span className={`text-${hrm.arrowColor} fw-semibold`}>
                  {hrm.percent} <i className={`ri-arrow-${hrm.arrowIcon}-line lh-1 align-center fs-14 fw-normal`}></i>
                </span>
                <span className="fw-medium fs-12 text-muted"> From Last Month</span>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default SpkHrmcard;
