"use client"

import SpkWalletCard from "@/shared/@spk-reusable-components/reusable-apps/spk-walletcard";
import { WalletCardsdata } from "@/shared/data/apps/crypto/walletdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

interface WalletProps {}

const Wallet: React.FC<WalletProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps- Crypto Wallet" />

            <Pageheader title="Apps" currentpage=" Crypto Wallet" activepage=" Crypto Wallet" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                {WalletCardsdata.map((idx, index) => (
                    <Col xxl={6} lg={6} key={index}>
                        <SpkWalletCard wallet={idx} />
                    </Col>
                ))}
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default Wallet;