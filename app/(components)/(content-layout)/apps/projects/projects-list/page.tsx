"use client"

import SpkGridcard from "@/shared/@spk-reusable-components/reusable-apps/spk-gridcard";
import SpkProjectListcard from "@/shared/@spk-reusable-components/reusable-apps/spk-projectlistcard";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { ProjectData, Projectselectdata } from "@/shared/data/apps/projects/projectlistsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";

interface ProjectsListProps {}

const ProjectsList: React.FC<ProjectsListProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-Projects List" />

            <Pageheader title="Apps" currentpage="Projects List" activepage="Projects List" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Tab.Container defaultActiveKey="1">
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex gap-xxl-5 gap-3 flex-wrap align-items-center">
                                    <div className="d-flex flex-grow-1" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search Project" aria-label="Search" />
                                        <SpkButton Buttontype="submit" Buttonvariant="secondary" Customclass="="> Search </SpkButton>
                                    </div>
                                    <Nav as="ul" className="nav-tabs p-0 tab-style-6">
                                        <Nav.Item as="li" role="presentation">
                                            <Nav.Link as="button" eventKey="1" id="listview" data-bs-toggle="tab"
                                                data-bs-target="#listview-pane" type="button" role="tab"
                                                aria-controls="listview-pane" aria-selected="true"><i className="ti ti-list"></i> List View</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li" role="presentation">
                                            <Nav.Link as="button" eventKey="2" id="gridview" data-bs-toggle="tab"
                                                data-bs-target="#gridview-pane" type="button" role="tab"
                                                aria-controls="gridview-pane" aria-selected="false"><i className="ti ti-layout-grid"></i> Grid View</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <div className="d-flex mt-3 mt-sm-0 choices-tab">
                                        <label className="me-2 my-auto">Sort By:</label>
                                        <SpkSelect name="colors" option={Projectselectdata} mainClass="projects-sort basic-multi-select" menuplacement='auto' classNameprefix="Select2" defaultvalue={[Projectselectdata[0]]}/>
                                    </div>
                                    <Link href="/apps/projects/create-project" className="btn btn-success"><i className="ri-add-line me-1 fw-semibold align-middle lh-1"></i>Create New Project</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <!-- End::row-1 --> */}
                <Tab.Content>
                    <Tab.Pane eventKey="1" className="fade p-0 border-bottom-0 overflow-hidden border-0" id="listview-pane" role="tabpanel" aria-labelledby="listview" tabIndex={0}>
                        {ProjectData.map((idx, index) => (
                            <SpkProjectListcard key={index} obj={idx} />
                        ))}
                    </Tab.Pane>
                    <Tab.Pane eventKey="2" className="fade p-0 border-bottom-0 border-0 overflow-hidden" id="gridview-pane" role="tabpanel" aria-labelledby="gridview">
                        <Row>
                            {ProjectData.map((idx, index) => (
                                <div className="col-xl-4" key={index}>
                                    <SpkGridcard obj={idx} />
                                </div>
                            ))}
                        </Row>
                    </Tab.Pane>
                </Tab.Content>

            </Tab.Container>
        </Fragment>
    );
};

export default ProjectsList;