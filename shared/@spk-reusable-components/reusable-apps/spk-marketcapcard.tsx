import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import Spkapexcharts from '../reusable-plugins/spk-apexcharts'
import Image from 'next/image';

interface MarketCap {
  imgSrc?: string | any;
  title?: string;
  rank?: string;
  value?: string;
  market?: string;
  percent?: string;
  chartOptions?: any;
  chartSeries?: any;
  type?: string;
  chartId?: string;
  color?: string;
}

interface SpkMarketCapcardProps {
  cap: MarketCap;
  cardClass?: string;
  bodyClass?: string;
}

const SpkMarketCapcard: React.FC<SpkMarketCapcardProps> = ({ cap, cardClass, bodyClass }) => {
  return (
    <Fragment>
      <Card className={`custom-card ${cardClass}`}>
        <Card.Body className={bodyClass}>
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <div className="me-2">
                <span className="avatar avatar-md avatar-rounded">
                  <Image width={40} height={40} src={cap.imgSrc} alt={cap.title as string} />
                </span>
              </div>
              <div>
                <h6 className="mb-1">{cap.title}</h6>
                <span className="text-muted">{cap.rank}</span>
              </div>
            </div>
            <div className="ms-auto text-end">
              <div>
                <span className="fs-20 fw-medium text-primary">{cap.value}</span>
                <p className="mb-0 fw-medium">  {cap.market}
                  <span className={`text-${cap.color} fw-medium`}>  {cap.percent}</span>
                </p>
              </div>
            </div>
          </div>
        </Card.Body>
        <div id={cap.chartId}>
          <Spkapexcharts chartOptions={cap.chartOptions} chartSeries={cap.chartSeries} height={"40"} type={cap.type} />
        </div>
      </Card>
    </Fragment>
  )
}

export default SpkMarketCapcard;
