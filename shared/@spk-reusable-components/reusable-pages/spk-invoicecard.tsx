import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

interface InvoiceProps {
  invoice: {
    bgColor: string;
    icon: string;
    value: string;
    total: string;
    price: string;
    inc: string;
    percent: string;
    iconColor: string;
    percentIcon: string;
  };
  cardClass?: string;
  bodyClass?: string;
}

const SpkInvoicecard: React.FC<InvoiceProps> = ({ invoice, cardClass, bodyClass }) => {
  return (
    <Fragment>
      <Card className={`custom-card ${cardClass}`}>
        <Card.Body className={bodyClass}>
          <div className="d-flex align-items-start gap-3">
            <div className={`avatar avatar-xl bg-${invoice.bgColor} border border-${invoice.bgColor} border-opacity-10 avatar-rounded flex-shrink-0`}>
              <div className="avatar avatar-md bg-white avatar-rounded">
                <i className={`ti ti-${invoice.icon} text-${invoice.bgColor} fs-25`}></i>
              </div>
            </div>
            <div className="flex-fill text-end">
              <h3 className="fw-medium mb-3">{invoice.value}</h3>
              <h6 className="mb-2 fs-12">{invoice.total}</h6>
              <div className="pb-0 mt-0">
                <div className="d-flex gap-2 align-items-center justify-content-end">
                  <span className={`badge bg-${invoice.bgColor}`}>{invoice.price}</span>
                  <div className="text-muted fs-13">
                    {invoice.inc}
                    <span className={`text-${invoice.iconColor}`}>
                      {invoice.percent}
                      <i className={`ti ti-arrow-narrow-${invoice.percentIcon} fs-16`}></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default SpkInvoicecard
