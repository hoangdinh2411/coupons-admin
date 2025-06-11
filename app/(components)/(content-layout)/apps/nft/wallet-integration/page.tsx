"use client"

import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { BlockchainData, WalletData, WalletFeatures, WalletFeaturesdata } from "@/shared/data/apps/nft/walletintegrationdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";

interface WalletIntegrationProps {}

const WalletIntegration: React.FC<WalletIntegrationProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-Wallet Integration" />

            <Pageheader title="Apps" currentpage="Wallet Integration" activepage="Wallet Integration" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row className=" justify-content-center">
                <Col xxl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Connect Your Wallet
                            </Card.Title>
                            <div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row className=" justify-content-center gy-3">
                                {WalletData.map((wallet, index) => (
                                    <Col key={index} xxl={3}>
                                        <Card className={`custom-card nft-wallet mb-0 ${wallet.customClass}`}>
                                            <Card.Body className="py-1 px-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded p-1 bg-primary-transparent">
                                                            <Image fill src={wallet.imageSrc} alt={wallet.title} />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-medium mb-0">{wallet.title}</h6>
                                                    </div>
                                                    <Link scroll={false} href="#!" className={`btn btn-sm btn-${wallet.btnColor} ms-auto`}>
                                                        {wallet.buttonLabel}
                                                    </Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                        <Card.Body className=" border-top">
                            <div className="mt-3 mb-4 fs-15 fw-semibold">Choose Your Blockchain Network :</div>
                            <ul className="list-group list-group-flush nft-list d-flex align-items-center gap-4 flex-row flex-wrap">
                                {BlockchainData.map((blockchain, index) => (
                                    <li key={index} className={`list-group-item rounded border-bottom-0 ${index === 0 ? "active" : "bg-light"}`}>
                                        <Link href="#!" scroll={false} className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <Image width={28} height={28} src={blockchain.imageSrc} alt={blockchain.name} />
                                                </span> 
                                            </div>
                                            <div className="fs-14 fw-medium">{blockchain.name}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                        <Card.Body className=" border-top">
                            <div className="mb-4 fs-15 fw-semibold">Wallet Features :</div>
                            <Row className=" gy-3 gy-xl-0">
                                <Col xl={8}>
                                    <Tab.Container defaultActiveKey="transactions">
                                        <Nav as="ul" className="nav-tabs tab-style-8 scaleX nft-tab gap-2 mb-3" id="myTab4" role="tablist">
                                            <Nav.Item as="li" role="presentation">
                                                <Nav.Link as="button" eventKey="transactions" className="bg-light px-4" id="transactions" data-bs-toggle="tab" data-bs-target="#transactions-pane" type="button" role="tab" aria-controls="transactions-pane" aria-selected="true">Wallet Transactions</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li" role="presentation">
                                                <Nav.Link as="button" eventKey="YourNFT" className="bg-light px-4" id="YourNFT" data-bs-toggle="tab" data-bs-target="#YourNFTpane" type="button" role="tab" aria-controls="YourNFTpane" aria-selected="false" tabIndex={-1}>NFT Gallery</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="p-0">
                                            <Tab.Pane eventKey="transactions" className="overflow-hidden p-0 border-0" id="transactions-pane" role="tabpanel" aria-labelledby="transactions" tabIndex={0}>
                                                <ul className="list-group list-group-flush border rounded">
                                                    {WalletFeatures.map((transaction, index) => (
                                                        <li key={index} className="list-group-item">
                                                            <div className="d-flex gap-3 align-items-center flex-wrap">
                                                                <div className="lh-1">
                                                                    <span className="avatar avatar-sm avatar-rounded bg-primary-transparent">
                                                                        <i className="bi bi-arrow-left-right fs-15"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="flex-fill">
                                                                    <div className="mb-1 d-flex justify-content-between gap-1">
                                                                        <span className="fw-medium">{transaction.type}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-fill">
                                                                    <div className="fs-13">
                                                                        {transaction.direction}: <span className="text-primary fw-medium">{transaction.user}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-fill">
                                                                    <div className="fs-13">
                                                                        Amount: <span className={transaction.amountClass}>&nbsp;{transaction.amount} {transaction.amountType}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="fs-12 text-muted ms-auto">{transaction.time}</div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="YourNFT" className="overflow-hidden p-0 border-0" id="YourNFTpane" role="tabpanel" aria-labelledby="YourNFT" tabIndex={1}>
                                                <Row className=" g-2">
                                                    {WalletFeaturesdata.map((image, index) => (
                                                        <Col key={index} xxl={3} className="col-6">
                                                            <Image fill src={image.src} className="card-img" alt={image.alt} />
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Col>
                                <Col xl={4}>
                                    <Card className="custom-card overflow-hidden bg-primary nft-wallet-card">
                                        <Card.Body className=" d-flex gap-2 align-items-center">
                                            <div className="fw-medium mb-0 text-fixed-white op-8">
                                                NFT Wallet Balance
                                            </div>
                                            <h5 className="fw-bold text-fixed-white ms-auto mb-0">$42,150</h5>
                                        </Card.Body>
                                    </Card>
                                    <Card className="custom-card mb-0 border shadow-none bg-light">
                                        <Card.Body>
                                            <div className="mb-4 fs-15 fw-semibold"><i className="ri-lightbulb-flash-fill text-secondary me-1 lh-1"></i>Security Tips: </div>
                                            <ul className="list-unstyled ps-3 mb-0">
                                                <li className="mb-3"><i className="ri-shield-check-fill me-2 text-success lh-1 fs-15"></i><strong>Use Strong Passwords:</strong> Create a unique and complex password for your wallet.</li>
                                                <li><i className="ri-shield-check-fill me-2 text-success lh-1 fs-15"></i><strong>Enable Two-Factor Authentication:</strong> Use 2FA for added security when accessing your wallet.</li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="card-footer d-flex justify-content-between gap-2">
                            <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="btn-wave">Import More Wallets</SpkButton>
                            <SpkButton Buttonvariant="success" Buttontype="button" Customclass="btn-wave">Add New Wallet</SpkButton>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default WalletIntegration;