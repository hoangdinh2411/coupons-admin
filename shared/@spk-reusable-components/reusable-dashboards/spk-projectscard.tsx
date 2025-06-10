import React, { Fragment, JSX } from 'react'
import { Card } from 'react-bootstrap'

interface Project {
  svgIcon?: JSX.Element;
  title?: string;
  price?: string;
  percentage?: string;
  arrowColor?: string;
  arrowIcon?: 'up' | 'down';
  avatarColor?: string;
  avatarIcon?: string;
}

interface SpkProjectscardProps {
  projects: Project;
}

const SpkProjectscard: React.FC<SpkProjectscardProps> = ({ projects }) => {
  return (
    <Fragment>
      <Card className="custom-card project-cards">
        {projects.svgIcon}
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className="mb-2 fs-14">{projects.title}</p>
              <h4 className="mb-2 fw-semibold">{projects.price}</h4>
              <div>
                <span className={`text-${projects.arrowColor} fw-semibold`}>
                  {projects.percentage}
                  <i
                    className={`ri-arrow-${projects.arrowIcon}-line lh-1 align-center fs-14 fw-normal`}
                  ></i>
                </span>
                <span className="fw-medium fs-12 text-muted"> From Last Month</span>
              </div>
            </div>
            <div>
              <span
                className={`avatar avatar-lg bg-${projects.avatarColor} avatar-rounded p-2 shadow-sm`}
              >
                <i className={`ti ${projects.avatarIcon} fs-21`}></i>
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default SpkProjectscard
