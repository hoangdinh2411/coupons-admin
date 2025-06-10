import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import Spkapexcharts from '../reusable-plugins/spk-apexcharts';

interface ActiveProject {
  title?: string;
  value?: string;
  color?: string;
  arrowColor?: string;
  percentage?: string;
  arrowIcon?: string;
  chartOptions?: any;
  cardtype?: string;
  chartSeries?: React.ReactNode;
  type?: string;
}

interface SpkActivepojectcardProps {
  active: ActiveProject
};

const SpkActivepojectcard: React.FC<SpkActivepojectcardProps> = ({ active }) => {
  return (
    <Fragment>
      <Card className="custom-card">
        <Card.Body className="card-body">
          <div className={`text-center p-3 border border-${active.color} border-opacity-10 rounded-3 projects-${active.cardtype}-card`}>
            <span className={`avatar avatar-lg avatar-rounded bg-${active.color} mb-3`}>
              <i className="ri-file-list-3-line fs-20"></i>
            </span>
            <div className="mb-3">
              <div className="text-muted mb-2 fs-16">{active.title}</div>
              <h4 className="fw-semibold">{active.value}</h4>
            </div>
            <div className="text-muted fs-12">
              <span className="fw-medium">From Last Month</span>
              <span className={`text-${active.arrowColor} fw-semibold`}>  {active.percentage}{' '}
                <i className={`ri-arrow-${active.arrowIcon}-line lh-1 align-center fs-14 fw-normal`}></i>
              </span>
            </div>
            <div id="projects-active" className="mt-3 mb-3">
              <Spkapexcharts chartOptions={active.chartOptions} chartSeries={active.chartSeries} type={active.type} height="230" width="100%" />
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default SpkActivepojectcard;
