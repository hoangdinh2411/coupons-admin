import React, { Fragment } from 'react';
import SpkTooltips from '../reusable-uiElements/spk-tooltips';
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import Image from 'next/image';

interface Job {
  imgSrc: string;
  title: string;
  company: string;
  location: string;
  infoTag: string;
  secondaryTag: string;
  successTag: string;
  salary: string;
}

interface SpkJobdetailscardProps {
  job: Job;
  cardClass?: string;
}

const SpkJobdetailscard: React.FC<SpkJobdetailscardProps> = ({ job, cardClass }) => {

  return (
    <Fragment>
      <Card className={`custom-card featured-jobs mb-3 ${cardClass}`}>
        <Card.Body>
          <div className="d-flex mb-3 flex-wrap gap-2 flex-xxl-nowrap">
            <div>
              <span className="avatar avatar-md border bg-primary-transparent avatar-rounded p-1">
                <Image width={40} height={40} src={job.imgSrc} alt="" />
              </span>
            </div>
            <div className="ms-1 flex-grow-1 w-75 text-truncate">
              <h6 className="fw-medium mb-1 d-flex align-items-center text-truncate w-75">
                <Link href="#!" scroll={false} className="text-truncate">{job.title}</Link>
              </h6>
              <div className="fs-12 fw-normal text-muted mb-0 text-truncate">{job.company} <SpkTooltips placement="top" title='Verified'>
                <i className="bi bi-patch-check-fill text-success align-middle lh-1"></i>
              </SpkTooltips></div>
            </div>
            <div className="ms-auto d-flex gap-1 flex-wrap flex-xxl-nowrap">
              <SpkTooltips placement="top" tooltipClass="" title="Add to Bookmark ">
                <Link href="#!" scroll={false} className="btn btn-sm btn-icon btn-danger-light">
                  <span><i className="ri-bookmark-line fs-13 lh-1 align-middle"></i></span>
                </Link>
              </SpkTooltips>
              <SpkTooltips placement="top" tooltipClass="" title="View Details ">
                <Link href="#!" scroll={false} className="btn btn-sm btn-icon btn-success-light">
                  <span><i className="ri-eye-line fs-13 lh-1 align-middle"></i></span>
                </Link>
              </SpkTooltips>
            </div>
          </div>
          <div className="text-muted fs-13">
            <i className="ri-pushpin-fill text-danger me-1"></i>
            <span className="fw-medium text-default me-1">Location:</span> {job.location}
          </div>
          <div className="mt-2 mb-3">
            <div className="popular-tags d-flex gap-1 flex-wrap flex-xxl-nowrap">
              <span className="badge rounded-pill bg-info fs-11">{job.infoTag}</span>
              <span className="badge rounded-pill bg-secondary fs-11">{job.secondaryTag}</span>
              <span className="badge rounded-pill bg-success fs-11">{job.successTag}</span>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-between flex-wrap align-items-center">
            <h6 className="fw-medium mb-0 p-2 bg-light rounded fs-13">{job.salary}</h6>
            <Link href="#!" scroll={false} className="fw-medium btn btn-sm btn-primary btn-w-md d-grid text-nowrap ms-auto">
              Apply Now
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default SpkJobdetailscard;
