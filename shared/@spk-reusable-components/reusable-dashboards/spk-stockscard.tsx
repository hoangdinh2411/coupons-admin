import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

interface Stock {
  title?: string;
  subTitle?: string;
  value?: string;
  arrowColor?: string;
  arrowIcon?: string;
  percent?: string;
  avatarColor?: string;
  avatarIcon?: string;
  color?: string;
  percentage?: string;
  icon?: string;
  price?: string;
  capIcon?: string;
  capColor?: string;
}

interface SpkStockscardProps {
  stock: Stock;
}

const SpkStockscard: React.FC<SpkStockscardProps> = ({ stock }) => {
  return (
    <Fragment>
      <Card className="custom-card overflow-hidden">
        <Card.Body>
          <div className="d-flex gap-2 flex-wrap align-items-start justify-content-between mb-1">
            <div>
              <div className="fs-14 mb-1">
                {stock.title} <span className="text-muted">{stock.subTitle}</span>
              </div>
              <div className="fw-semibold fs-18">
                {stock.value}
                <span className={`fs-12 fw-normal ms-1 d-inline-block text-${stock.arrowColor}`}>
                  <i className={`ti ti-trending-${stock.arrowIcon}`}></i> {stock.percent}
                </span>
              </div>
            </div>
            <div className="ms-auto">
              <span className={`avatar avatar-rounded bg-${stock.avatarColor} avatar-md`}>
                <i className={`bi ${stock.avatarIcon} fs-22 lh-1`}></i>
              </span>
            </div>
          </div>
          <div className="d-flex flex-fill align-items-end gap-2 justify-content-between">
            <div>
              <span className={`text-${stock.color} fw-semibold`}>
                {stock.percentage}
                <i className={`ri-arrow-${stock.icon}-line lh-1 align-center fs-14 fw-normal`}></i>
              </span>
              <span className="fw-medium fs-12 text-muted"> From Last Month</span>
            </div>
            <div className="text-end">
              <div className="text-muted fs-12 fw-medium">Market Cap:</div>
              <div className="ms-auto fs-16 fw-semibold">
                {stock.price}
                <i className={`ri-${stock.capIcon} text-${stock.capColor} lh-1 align-middle fs-20 ms-1`}></i>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default SpkStockscard;
