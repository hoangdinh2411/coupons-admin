import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import Spkapexcharts from '../reusable-plugins/spk-apexcharts'

interface AnalyticsData {
  bgColor?: string;
  icon?: string;
  title?: string;
  users?: string;
  percentage?: string;
  chartOptions?: object;
  chartSeries?: object[];
  type?: string;
  textColor?: string;
}

interface SpkAnalyticscardProps {
  analytics: AnalyticsData
};

const SpkAnalyticscard: React.FC<SpkAnalyticscardProps> = ({ analytics }) => {

  return (
    <Fragment>
      <Card className="custom-card">
        <Card.Body className="pb-2">
          <div className="d-flex flex-wrap align-items-start gap-3">
            <div className={`avatar avatar-lg bg-${analytics.bgColor} bg-opacity-25 text-${analytics.bgColor}`}>
              <i className={`ti ${analytics.icon} fs-22 fw-medium`}></i>
            </div>
            <div>
              <p className="text-muted mb-1">{analytics.title}</p>
              <h5 className="fw-semibold mb-0">{analytics.users}</h5>
            </div>
            <div className="text-end ms-auto">
              <span className={`text-${analytics.textColor} fw-semibold fs-12 mb-0 ms-1`}>{analytics.percentage}</span>
              <span className="text-muted fw-medium fs-12"> last month</span>
            </div>
          </div>
        </Card.Body>
        <div id="analytics-users">
          <Spkapexcharts chartOptions={analytics.chartOptions} chartSeries={analytics.chartSeries} type={analytics.type} height={50} />
        </div>
      </Card>
    </Fragment>
  )
}

export default SpkAnalyticscard;
