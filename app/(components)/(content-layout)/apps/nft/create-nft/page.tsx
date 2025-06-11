"use client"

import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
const SpkSelect = dynamic(() => import("@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect"), { ssr: false });
import dynamic from "next/dynamic";
import { MarketplaceAll } from "@/shared/data/apps/nft/marketplacedata";
import SpkTrendcard from "@/shared/@spk-reusable-components/reusable-dashboards/spk-trendcard";
import { BlackChaindata, CraeteNftData, Data1, Data2 } from "@/shared/data/apps/nft/createnftdata";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import CreatableSelect from 'react-select/creatable';
import Image from "next/image";

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

interface CreateNftProps {}

const CreateNft: React.FC<CreateNftProps> = () => {

    const CreatNft = MarketplaceAll.slice(1, 2);

    const components = {
        DropdownIndicator: null,
    };

    const createOption = (label: string) => ({
        label,
        value: label,
    });

    const [inputValue, setInputValue] = useState('');
    const [value1, setValue1] = useState([
        createOption("Digital Art"),
        createOption("Blockchain"),
        createOption("Crypto Collectibles"),
        createOption("Unique Artwork"),
        createOption("NFT Marketplace"),

    ]);

    const handleKeyDown = (event: { key: any; preventDefault: () => void; }) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue1((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-Create Nft" />

            <Pageheader title="Apps" currentpage="Create Nft" activepage="Create Nft" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={9} xl={8}>
                    <Card className=" custom-card">
                        <Card.Header className="">
                            <Card.Title>Create NFT</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className=" mb-3">
                                <Col md={2}>
                                    <label htmlFor="input-placeholder" className="form-label">NFT Title: </label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" className="" id="input-placeholder" placeholder="eg:Abstract Digital Art" />
                                </Col>
                            </Row>
                            <Row className=" mb-3">
                                <Col md={2}>
                                    <label htmlFor="nft-description" className="form-label">NFT Description: </label>
                                </Col>
                                <Col md={10}>
                                    <textarea className="form-control" id="nft-description" rows={3} placeholder="Enter Description"></textarea>
                                </Col>
                            </Row>
                            <Row className=" mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-0 mt-2">Artwork Upload :</label>
                                </Col>
                                <Col md={10}>
                                    <div className="create-nft-item bg-light py-3 rounded">
                                        <FilePond className="filepond" labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
                                            stylePanelLayout='compact circle' styleLoadIndicatorPosition='center bottom'
                                            styleButtonRemoveItemPosition='center bottom' />
                                    </div>
                                </Col>
                            </Row>
                            <Row className=" mb-3">
                                <Col md={2}>
                                    <label htmlFor="nft-collection" className="form-label">Collection:</label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect option={Data2} id="nft-collection" classNameprefix='Select2' placeholder="Select a collection" />
                                </Col>
                            </Row>
                            <Row className=" mb-3">
                                <Col md={2}>
                                    <label htmlFor="nft-royality" className="form-label">Royalties (%):</label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect option={Data1} classNameprefix='Select2' menuplacement='auto' mainClass="multi-select"
                                        placeholder="Choose Royalities" />
                                </Col>
                            </Row>
                            <Row className=" mb-3">
                                <Col md={2}>
                                    <label htmlFor="nft-tags" className="form-label">Tags:</label>
                                </Col>
                                <Col md={10}>
                                    <CreatableSelect className="tags-data" components={components} classNamePrefix='react-select' inputValue={inputValue} isClearable isMulti menuIsOpen={false}
                                        onChange={(newValue) => {
                                            if (Array.isArray(newValue)) {
                                                setValue1(newValue);
                                            } else {
                                                setValue1([]);
                                            }
                                        }} onInputChange={(newValue) => setInputValue(newValue)} onKeyDown={handleKeyDown} placeholder="Type something and press enter..."
                                        value={value1} />
                                </Col>
                            </Row>
                            <Row className=" mb-3">
                                <Col md={2}>
                                    <label htmlFor="nft-properties" className="form-label">Properties:</label>
                                </Col>
                                <Col md={10}>
                                    <textarea className="form-control" id="nft-properties" rows={3} placeholder="Define your NFT properties..."></textarea>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6}>
                                    <Row className=" mb-3">
                                        <Col xl={3} md={2}>
                                            <label htmlFor="blockchain" className="form-label">Blockchain:</label>
                                        </Col>
                                        <Col xl={9} md={10}>
                                            <SpkSelect option={BlackChaindata} id="blockchain" classNameprefix='Select2' placeholder="Select a collection" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={6}>
                                    <Row className=" mb-3">
                                        <Col xl={3} md={2}>
                                            <label htmlFor="editions" className="form-label">No. of Editions:</label>
                                        </Col>
                                        <Col xl={9} md={10}>
                                            <input type="number" className="form-control" id="editions" placeholder="e.g., 1" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6}>
                                    <Row className=" mb-3">
                                        <Col xl={3} md={2}>
                                            <label htmlFor="nft-link" className="form-label">External Link: </label>
                                        </Col>
                                        <Col xl={9} md={10}>
                                            <input type="text" className="form-control" id="nft-link" placeholder="External Link Here" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={6}>
                                    <Row className=" mb-3">
                                        <Col xl={3} md={2}>
                                            <label htmlFor="nft-creator-name" className="form-label">Creator Name: </label>
                                        </Col>
                                        <Col xl={9} md={10}>
                                            <input type="text" className="form-control" id="nft-creator-name" placeholder="Enter Name" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6}>
                                    <Row className=" mb-3">
                                        <Col xl={3} md={2}>
                                            <label htmlFor="nft-creator-name" className="form-label">NFT Price: </label>
                                        </Col>
                                        <Col xl={9} md={10}>
                                            <input type="text" className="form-control" id="nft-price" placeholder="Enter Price" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={6}>
                                    <Row className=" mb-3">
                                        <Col xl={3} md={2}>
                                            <label htmlFor="nft-creator-name" className="form-label">NFT Size: </label>
                                        </Col>
                                        <Col xl={9} md={10}>
                                            <input type="text" className="form-control" id="nft-size" placeholder="Enter Size" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className=" text-end">
                            <Link href="#!" scroll={false} className="btn btn-primary btn-wave waves-effect waves-light me-2">Create NFT</Link>
                            <Link href="#!" scroll={false} className="btn btn-danger btn-wave waves-effect waves-light">Cancel</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} >
                    <Card className=" custom-card">
                        <Card.Header className="">
                            <Card.Title>
                                Preview NFT
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {CreatNft.map((idx, index) => (
                                <SpkTrendcard key={index} btnClass="btn-w-lg" trend={idx} showLikes={true} />
                            ))}
                        </Card.Body>
                    </Card>
                    <Card className=" custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                My Collections :
                            </Card.Title>
                            <Link href="#!" scroll={false} className="text-primary text-decoration-underline ms-auto">
                                View All
                            </Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="text-nowrap">
                                    {CraeteNftData.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <Link href="#!" scroll={false}>
                                                    <div className="d-flex align-items-top">
                                                        <div className="avatar avatar-md me-2">
                                                            <Image width={40} height={40} src={item.imageSrc} alt={item.title} />
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fs-14 fw-medium similar-product-name text-truncate">{item.title}</p>
                                                            <span className="fw-medium text-muted fs-12">
                                                                <i className="ri-thumb-up-fill me-1 align-middle d-inline-block text-success"></i>
                                                                {item.likes} Likes
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td className="text-center">
                                                <i className="ri-calendar-event-line text-primary me-1"></i>{item.date}
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default CreateNft;