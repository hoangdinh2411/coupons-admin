import React, { Fragment } from 'react';
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import SpkTooltips from '../reusable-uiElements/spk-tooltips';
import Image from 'next/image';

interface Details {
  imgSrc: string;
  title: string;
  job: string;
  location: string;
  salary: string;
  type: string;
  badges: any;
}

interface SpkDetailsCardProps {
  details: Details;
  cardClass?: string;
  bodyClass?: string;
}

const SpkDetailsCard: React.FC<SpkDetailsCardProps> = ({ details, cardClass, bodyClass }) => {
  return (
    <Fragment>
      <Card className={`custom-card ${cardClass}`}>
        <Card.Body className={bodyClass}>
          <div className="float-end">
            <Link href="#!" scroll={false} className="btn btn-sm btn-icon btn-success-light me-1">
              <i className="ri-eye-line fs-13 lh-1 align-middle"></i>
            </Link>
            <Link href="#!" scroll={false} className="btn btn-sm btn-icon btn-danger-light">
              <i className="ri-bookmark-line fs-13 lh-1 align-middle"></i>
            </Link>
          </div>
          <div className="d-flex align-items-start flex-wrap gap-2 mb-2">
            <span className="avatar avatar-lg bg-light shadow-sm border border-primary border-opacity-10 p-1 avatar-rounded">
              <Image width={48} height={48} src={details.imgSrc} alt="Profile Picture" />
            </span>
            <div className="ms-2">
              <h6 className="fw-medium mb-1 d-flex align-items-center">
                {details.title} <SpkTooltips placement='top' title="Verified">
                  <i className="bi bi-patch-check-fill text-success align-middle lh-1 mx-1"></i>
                </SpkTooltips>
              </h6>
              <div className="d-flex gap-2 align-items-center">
                <div className="fw-medium fs-12">
                  <i className="ri-briefcase-line text-muted fs-13"></i> Job:
                  <span className="fw-normal">  {details.job}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="popular-tags d-flex gap-1 flex-wrap flex-xxl-nowrap mb-2 mt-3">
            {details.badges}
          </div>
          <div className="d-flex gap-3 mb-4">
            <div className="fw-medium">
              <i className="ri-map-pin-line text-danger fs-15"></i>
              <span className="fw-normal">  {details.location}</span>
            </div>
            <div className="fw-medium">
              <i className="ri-wallet-3-line text-info fs-15"></i>
              <span className="fw-normal">  {details.salary}</span>
            </div>
            <div className="fw-medium">
              <i className="ri-time-line text-pink fs-15"></i> Type:
              <span className="fw-normal">  {details.type}</span>
            </div>
          </div>
          <Link href="#!" scroll={false} className="btn btn-primary-light btn-sm w-100">
            <i className="ri-download-cloud-line fs-14 me-2 d-inline-block"></i>
            Download Resume
          </Link>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default SpkDetailsCard;
