"use client"

import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import React, { Fragment, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
const SpkSelect = dynamic(() => import('@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect'), { ssr: false });
import dynamic from "next/dynamic";
import { BlogCategory, Publish, Published } from '@/shared/data/pages/blog/createblogdata';
import SpkSunEditor from "@/shared/@spk-reusable-components/reusable-plugins/spk-suneditor";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import SpkDatepickr from '@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker';
import Seo from '@/shared/layouts-components/seo/seo';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

interface CreateblogProps {}

const Createblog: React.FC<CreateblogProps> = () => {

  const [dates, setDates] = useState<{ [key: string]: Date | string | null }>({});
  const handleDateChange = (key: string, date: Date | null) => {
    if (date) {
      setDates((prevDates) => ({
        ...prevDates,
        [key]: date,
      }));
    } else {
      setDates((prevDates) => {
        const { [key]: removedKey, ...rest } = prevDates;
        return rest;
      });
    }
  };

  const [files, setFiles] = useState<any>([]);

  return (
    <Fragment>

      {/* <!-- Start::page-header --> */}
      <Seo title="Pages-Create Blog" />

      <Pageheader title="Pages" currentpage="Create Blog" activepage="Create Blog" />

      {/* <!-- End::page-header --> */}

      {/* <!-- Start --> */}
      <Card className="custom-card">
        <Card.Header>
          <Card.Title>New Blog</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col md={2}>
              <label className="form-label mb-md-0 mt-2"> Blog Title :</label>
            </Col>
            <Col md={10}>
              <input type="text" className="form-control" placeholder="Blog Title" />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={2}>
              <label className="form-label mb-md-0 mt-2"> Email :</label>
            </Col>
            <Col md={10}>
              <input type="text" className="form-control" placeholder="Enter email" />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={2}>
              <label htmlFor="blog-category" className="form-label">Blog Category :</label>
            </Col>
            <Col md={10}>
              <SpkSelect name="colors" option={BlogCategory} mainClass="basic-multi-select" menuplacement='auto' classNameprefix="Select2" placeholder="Select Category" />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={2}>
              <label className="form-label mb-md-0 mt-2"> Blog Author :</label>
            </Col>
            <Col md={10}>
              <input type="text" className="form-control" placeholder="Enter Name" />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={2}>
              <label className="form-label mb-md-0 mt-2"> Publish Time :</label>
            </Col>
            <Col md={10} className="custom-picker">
              <SpkDatepickr className="form-control" selected={dates["limitPicker"] ? new Date(dates["limitPicker"]) : null} onChange={(date: Date | null) => handleDateChange("limitPicker", date)} showTimeSelect showTimeSelectOnly timeIntervals={15} Caption="Time" dateFormat="h:mm aa" placeholderText='Choose Time' />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={2}>
              <label htmlFor="blog-tags" className="form-label">Blog Tags :</label>
            </Col>
            <Col md={10}>
              <SpkSelect multi name="colors" option={Publish} mainClass="basic-multi-select" menuplacement='auto' classNameprefix="Select2" placeholder="Select Category" defaultvalue={[Publish[0], Publish[3]]} />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={2}>
              <label htmlFor="publish-date" className="form-label">Publish Date :</label>
            </Col>
            <Col md={10} className="custom-picker">
              <SpkDatepickr className="form-control flatpickr-input" placeholderText='Choose date' selected={dates["publisjdate"] ? new Date(dates["publisjdate"]) : null} onChange={(date: Date | null) => handleDateChange("publisjdate", date)} />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={2}>
              <label htmlFor="product-status-add" className="form-label">Published Status :</label>
            </Col>
            <Col md={10}>
              <SpkSelect name="colors" option={Published} mainClass="basic-multi-select" menuplacement='auto' classNameprefix="Select2" placeholder="Select" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={2}>
              <label htmlFor="blog-author-email" className="form-label">Blog Images :</label>
            </Col>
            <Col md={10}>
              <FilePond id="blog-author-email" className="blog-images" files={files} onupdatefiles={setFiles} allowMultiple={true} maxFiles={6} server="/api" name="filepond" labelIdle='Drag & Drop your file here or click' />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={2}>
              <label className="form-label">Blog Content :</label>
            </Col>
            <Col md={10}>
              <div id="blog-content">
                <SpkSunEditor height={'200px'} />
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={2}>
              <label className="form-label">Blog Type :</label>
            </Col>
            <Col md={10}>
              <div className="d-flex align-items-center">
                <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="blog-type" id="blog-free1" defaultChecked />
                  <label className="form-check-label" htmlFor="blog-free1">
                    Free
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="blog-type" id="blog-paid1" />
                  <label className="form-check-label" htmlFor="blog-paid1">
                    Paid
                  </label>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
        <div className="card-footer">
          <div className="btn-list text-end">
            <SpkButton Buttonvariant='success' Customclass='' Buttontype="button">
              Save As Draft
            </SpkButton>
            <SpkButton Buttonvariant='primary' Customclass=' me-0' Buttontype="button">
              Post Blog
            </SpkButton>
          </div>
        </div>
      </Card>
      {/* <!--End --> */}

    </Fragment>
  )
}

export default Createblog;
