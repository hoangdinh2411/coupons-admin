"use client"

import SpkTeamCards from "@/shared/@spk-reusable-components/reusable-pages/spk-teamcards";
import { TeamMembers, TeamMembers1, TeamMembers2, TeamMembers3 } from "@/shared/data/pages/teamsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

interface TeamProps {}

const Team: React.FC<TeamProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Pages-Team" />

            <Pageheader title="Pages" currentpage="Team" activepage="Team" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row className="bg-primary-transparent py-3 px-1 mb-3">
                <Col xl={3} md={6} sm={6} className="col-12">
                    {TeamMembers.map((idx, index) => (
                        <SpkTeamCards key={index} obj={idx} />
                    ))}
                </Col>
                <Col xl={3} md={6} sm={6} className="col-12 mt-sm-5">
                    {TeamMembers1.map((idx, index) => (
                        <SpkTeamCards key={index} obj={idx} />
                    ))}
                </Col>
                <Col xl={3} md={6} sm={6} className="col-12">
                    {TeamMembers2.map((idx, index) => (
                        <SpkTeamCards key={index} obj={idx} />
                    ))}
                </Col>
                <Col xl={3} md={6} sm={6} className="col-12 mt-sm-5">
                    {TeamMembers3.map((idx, index) => (
                        <SpkTeamCards key={index} obj={idx} />
                    ))}
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    );
};

export default Team;