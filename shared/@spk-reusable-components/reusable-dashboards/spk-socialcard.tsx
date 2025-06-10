import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

interface Media {
  bgColor: string;
  icon: string;
  title: string;
  percent: string;
  arrowColor: string;
  arrowIcon: string;
  value: string;
}

interface SpkSocialcardProps {
  media: Media;
  cardClass?: string;
}

const SpkSocialcard: React.FC<SpkSocialcardProps> = ({ media, cardClass }) => {
  return (
    <Fragment>
      <Card className={`custom-card ${cardClass}`}>
        <Card.Body>
          <div className="d-flex flex-wrap gap-1 flex-xxl-nowrap mb-2">
            <div className="flex-fill">
              <div className={`flex-shrink-0 avatar avatar-lg p-1 border border-${media.bgColor} border-opacity-25 bg-${media.bgColor}-transparent avatar-rounded mb-3`}>
                <div className={`avatar avatar-md bg-${media.bgColor} avatar-rounded`}>
                  <i className={`ri-${media.icon} fs-5 lh-1`}></i>
                </div>
              </div>
              <div>
                <p className="mb-0 fw-medium">{media.title}</p>
              </div>
            </div>
            <div className="text-end ms-auto">
              <div className="text-muted fw-medium mb-2 fs-12">from last month</div>
              <span className={`badge bg-${media.arrowColor}-transparent`}>
                {media.percent}
                <i className={`ti ti-caret-${media.arrowIcon} fs-14 lh-1 align-middle`}></i>
              </span>
            </div>
          </div>
          <div className="d-flex gap-2 align-items-center flex-wrap">
            <h4 className="mb-0 fw-semibold">{media.value}</h4>
            <span className="text-muted align-middle">Followers</span>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default SpkSocialcard;
