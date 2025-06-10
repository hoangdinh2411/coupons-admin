import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import SpkButton from '../reusable-uiElements/spk-buttons';
import Image from 'next/image';

interface Wallet {
  title?: string;
  imgSrc?: string;
  available?: string;
  value?: string;
  amount?: string;
  transactions?: string;
  value1?: string;
  date?: string;
  address?: string;
}

interface SpkWalletCardProps {
  cardClass?: string;
  bodyClass?: string;
  wallet: Wallet;
}

const SpkWalletCard: React.FC<SpkWalletCardProps> = ({ cardClass, bodyClass, wallet }) => {
  return (
    <Fragment>
      <Card className={`custom-card ${cardClass}`}>
        <Card.Header>
          <Card.Title>{wallet.title}</Card.Title>
        </Card.Header>
        <Card.Body className={bodyClass}>
          <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <div className="lh-1">
                <span className="avatar avatar-rounded">
                  <Image fill src={wallet.imgSrc as string} alt={wallet.title as string} />
                </span>
              </div>
              <div>
                <span className="d-block text-muted fs-12 fw-normal">{wallet.available}</span>
                <span className="fw-medium fs-18">{wallet.value}</span>
              </div>
            </div>
            <div className="text-end">
              <span className="fw-medium fs-18">{wallet.amount}</span>
              <span className="d-block text-muted fs-12 fw-normal">Value in USD</span>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3 flex-wrap">
            <div>
              <span className="d-block text-muted fs-12 fw-normal">Total Transactions:</span>
              <span className="fw-medium fs-15">{wallet.transactions}</span>
            </div>
            <div>
              <span className="d-block text-muted fs-12 fw-normal">Last Transaction:</span>
              <span className="fw-medium fs-15">{wallet.value1}</span>
              <span className="text-muted fs-12">{wallet.date}</span>
            </div>
            <div className="text-break">
              <span className="d-block text-muted fs-12 fw-normal">Wallet Address:</span>
              <span className="fw-medium fs-15">{wallet.address}</span>
            </div>
          </div>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex gap-2 flex-wrap">
            <SpkButton Buttonvariant="primary" Size="sm" Customclass="btn-w-lg btn-wave flex-fill">
              <i className="ti ti-coins me-1 fs-14"></i>Transfer
            </SpkButton>
            <SpkButton Buttonvariant="success" Size="sm" Customclass="btn-w-lg btn-wave flex-fill">
              <i className="ri-wallet-3-line me-1 fs-14"></i>Withdraw
            </SpkButton>
            <SpkButton Buttonvariant="info" Size="sm" Customclass="btn-w-lg btn-wave flex-fill">
              <i className="ri-history-line me-1 fs-14"></i>Transaction History
            </SpkButton>
          </div>
        </Card.Footer>
      </Card>
    </Fragment>
  );
};

export default SpkWalletCard;
