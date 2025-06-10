import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

interface MedicalCardProps {
  medical: {
    color: string;
    title: string;
    value: string | number;
    svgIcon: React.ReactNode;
    iconColor: string;
    icon: string;
    percent: string;
  };
}

const SpkMedicalcard: React.FC<MedicalCardProps> = ({ medical }) => {
  return (
    <Fragment>
      <Card className="custom-card rounded-md overflow-hidden p-2">
        <Card.Body className={`bg-${medical.color} bg-opacity-10 rounded-2 ps-4 medical-cards ${medical.color}`}>
          <div className="d-flex gap-2 align-items-center ps-2">
            <div className="align-self-start">
              <div className="fw-medium mb-2">{medical.title}</div>
              <h4 className="fw-semibold mb-0 lh-1">{medical.value}</h4>
            </div>
            <div className="ms-auto text-end align-self-end">
              <div className={`avatar avatar-md avatar-rounded bg-${medical.color} shadow shadow-${medical.color} mb-2`}>
                {medical.svgIcon}
              </div>
              <div>
                <span className="text-muted fw-medium fs-12 opacity-1">from last month</span>
                <span className={`text-${medical.iconColor} fw-medium fs-13 mb-2`}>
                  <i className={`ti ti-arrow-${medical.icon}`}></i>{medical.percent}
                </span>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default SpkMedicalcard;
