import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

interface Trend {
  imgSrc?: string;
  title?: string;
  time?: string;
  avatarSrc?: any;
  avatarTitle?: string;
  avatarId?: string;
  svgPrice?: string;
  likes?: string;
  avatarClass?: string;
}

interface SpkTrendcardProps {
  trend: Trend;
  showLikes?: boolean
  btnClass?: string;
}

const SpkTrendcard: React.FC<SpkTrendcardProps> = ({ trend, showLikes, btnClass }) => {
  return (
    <Fragment>
      <Card className="custom-card">
        <Card.Body>
          <div className="position-relative overflow-hidden rounded">
            <Image fill src={trend.imgSrc as string} className="card-img mb-3" alt="..." />
          </div>
          <div className="d-flex align-items-start gap-2 mb-3 pb-1 flex-wrap justify-content-between">
            <div className="text-truncate">
              <p className="fs-16 mb-0 fw-semibold text-truncate">{trend.title}</p>
            </div>
            <p className="mb-0 border border-success border-opacity-75 bg-success-transparent fw-medium nft-auction-time px-2 rounded fs-15 flex-shrink-0">
              {trend.time}
            </p>
          </div>
          <div className="p-2 rounded bg-light d-flex mb-3 align-items-center flex-wrap gap-2 justify-content-between">
            <div className="lh-1">
              <span className={trend.avatarClass}>
                <Image width={28} height={28} src={trend.avatarSrc} alt="" />
              </span>
            </div>
            <div className="flex-fill">
              <p className="mb-0 fw-medium">
                {trend.avatarTitle}
                <i className="bi bi-patch-check-fill text-secondary align-middle lh-1 ms-1 d-inline-block"></i>
              </p>
              <p className="fs-11 text-muted mb-0">{trend.avatarId}</p>
            </div>
            {showLikes &&
              <span className="ms-auto fw-medium fs-12"><i className="ri-thumb-up-fill me-1 align-middle d-inline-block text-danger"></i>{trend.likes}</span>
            }
          </div>
          <div className="d-flex justify-content-between align-items-center pt-1 gap-3 flex-wrap">
            <h6 className="fw-semibold mb-0 bid-amt align-middle">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 40 65"> <g fill="none" fillRule="evenodd"> <g fillRule="nonzero" transform="translate(-227 -93)"> <g transform="translate(227 93)"><g> <path fill="#8A92B2" d="M20.1.8v23.3c0 .1-.1.2-.2.2-.7.3-1.3.6-2 .9-.9.4-1.9.8-2.8 1.3L11.8 28l-2.7 1.2-3.3 1.5c-.9.4-1.8.8-2.8 1.3-.7.3-1.5.7-2.2 1-.1 0-.1.1-.2 0H.5c.3-.5.6-.9.9-1.4 1.6-2.7 3.3-5.4 4.9-8.1 1.7-2.9 3.5-5.8 5.2-8.7 1.6-2.7 3.2-5.4 4.8-8 1.2-2 2.4-3.9 3.5-5.9.2 0 .2-.1.3-.1-.1 0 0 0 0 0z"></path> <path fill="#454A75" d="M39.5 33c-1.5 1-3.1 1.9-4.6 2.8-4.9 2.9-9.7 5.7-14.6 8.6-.1 0-.1.1-.2.1s-.1-.1-.1-.1v-.3-19.5-.3c0-.1.1-.1.2-.1.4.2.8.4 1.3.6 1.2.6 2.5 1.1 3.7 1.7 1.1.5 2.1 1 3.2 1.4 1.1.5 2.1 1 3.2 1.5.9.4 1.9.8 2.8 1.3.9.4 1.9.8 2.8 1.3.7.3 1.4.7 2.2 1 0-.1 0 0 .1 0z"></path> <path fill="#8A92B2" d="M20.1 64.1s-.1 0 0 0c-.1 0-.1 0-.2-.1-2-2.8-3.9-5.5-5.9-8.3l-6-8.4c-1.9-2.7-3.9-5.4-5.8-8.2L.7 37c0-.1-.1-.1-.1-.2.1 0 .1.1.2.1 2.7 1.6 5.5 3.2 8.2 4.8 3.1 1.9 6.3 3.7 9.4 5.6.5.3 1.1.6 1.6.9.1 0 .1.1.1.2V64.1z"></path><path fill="gray" d="M.6 33s.1 0 0 0c.1 0 .1 0 0 0 0 .1 0 .1 0 0z"></path> <path fill="#62688F" d="M.7 33.1c0-.1 0-.1 0 0 1-.5 2-.9 3-1.4l3.9-1.8c1-.5 2-.9 3-1.4 1.4-.7 2.9-1.3 4.3-2 1-.4 2-.9 3-1.3.7-.3 1.4-.6 2.1-1 .1 0 .1-.1.2-.1V44.5c-.1.1-.1 0-.2 0-.3-.2-.6-.3-.8-.5L.9 33.2c-.1-.1-.2-.1-.2-.1zM39.4 36.8c0 .1 0 .1-.1.2-5.8 8.2-11.6 16.3-17.4 24.5-.6.9-1.2 1.7-1.8 2.6V64v-.2-15.3-.3c1.3-.8 2.6-1.6 3.9-2.3l15.3-9c0-.1.1-.1.1-.1z"></path> <path fill="#62688F" d="M20.1 24.2V24 1.1.9l19.2 31.8c.1.1.2.2.2.3-.4-.2-.8-.4-1.3-.6-.5-.2-1-.5-1.5-.7-.3-.1-.6-.3-1-.4-.5-.2-1.1-.5-1.6-.7-.3-.1-.6-.3-.9-.4l-2.1-.9c-.4-.2-.7-.3-1.1-.5-.5-.2-1-.5-1.5-.7-.3-.1-.6-.3-.9-.4l-2.1-.9c-.4-.2-.7-.3-1.1-.5-.5-.2-1-.5-1.5-.7-.3-.2-.7-.3-1-.5l-1.8-.9z"></path></g></g></g> </g> </svg>
              {trend.svgPrice}
            </h6>
            <Link scroll={false} href="#!" className={`btn btn-primary ${btnClass} mb-md-0 mb-4`}>
              Place a Bid
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default SpkTrendcard;
