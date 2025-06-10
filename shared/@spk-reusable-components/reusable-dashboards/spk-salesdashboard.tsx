import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

interface SalesDashboardProps {
  object: {
    title?: string;
    iconClass: string;
    iconBg?: string;
    badgeClass?: string;
    percentage: string;
    badgeIconClass: string;
    linkText: string;
    value: string;
  };
  cardClass?: string;
  bodyClass?: string;
}

const SpkSalesdashboard: React.FC<SalesDashboardProps> = ({ object, cardClass, bodyClass }) => {
  return (
    <Fragment>
      <Card className={`custom-card ${cardClass}`}>
        <Card.Body className={bodyClass} >
          <div className="d-flex align-items-start gap-3 flex-wrap">
            <div>
              <span className={`avatar avatar-md avatar-rounded bg-${object.iconBg} shadow shadow-${object.iconBg}`}>
                <i className={object.iconClass}></i>
              </span>
            </div>
            <div className="flex-fill">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="d-block">{object.title}</span>
                <span className={`badge bg-${object.badgeClass}-transparent rounded-pill`}>{object.percentage}<i className={object.badgeIconClass}></i></span>
              </div>
              <h4 className="fw-semibold mb-3 lh-1">{object.value}</h4>
              <Link href="#!" className="fs-12 text-muted text-decoration-underline">{object.linkText}</Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default SpkSalesdashboard;
