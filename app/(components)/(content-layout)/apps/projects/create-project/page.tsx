"use client"

import SpkDatepickr from "@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkSunEditor from "@/shared/@spk-reusable-components/reusable-plugins/spk-suneditor";
import { Multipleselectdata, StatusSelect } from "@/shared/data/apps/projects/createprojectdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { FilePond } from "react-filepond";
import CreatableSelect from 'react-select/creatable';

interface CreateProjectProps {}

const CreateProject: React.FC<CreateProjectProps> = () => {

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

    const [files, setFiles] = useState<{ [key: string]: File[] }>({});
    const handleFileUpdate = (fileItems: any, pondName: string) => {
        setFiles((prevFiles) => ({
            ...prevFiles,
            [pondName]: fileItems.map((fileItem: any) => fileItem.file),
        }));
    };

    const components = {
        DropdownIndicator: null,
    };

    const createOption = (label: string) => ({
        label,
        value: label,
    });

    const [inputValue, setInputValue] = useState('');
    const [value1, setValue1] = useState([
        createOption("Project Management"),
        createOption("Quality Assurance"),
        createOption("User Experience"),
        createOption("Implementation"),
        createOption("Strategy"),

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

    const defaultContent = `<p>Contrary to popular belief, Lorem Ipsum is not SPK simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, "consectetur," from a Lorem Ipsum passage. By examining the citations of this word in classical literature, he discovered the undeniable source. Lorem Ipsum originates from sections 1.10.32 and 1.10.33 of this ancient text.</p>
    <p><br /></p>

    <ol>
        <li>Develop a secure and compliant framework to meet all relevant regulations.</li>
        <li>Train the team on the updated system within two weeks of implementation.</li>
        <li>Create a scalable infrastructure to support future expansion.</li>
        <li>Cut down the time needed for inventory audits by 50%.</li>
        <li>Reduce excess inventory costs by 10%.</li>
    </ol>`;

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Apps-Create Project" />

            <Pageheader title="Apps" currentpage="Create Project" activepage="Create Project" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Create Project
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-2 mb-md-0 mt-2">Project Name :</label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" className="" placeholder="Enter Project Name" />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-2 mb-md-0 mt-2">Project Manager :</label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" className="" placeholder="Project Manager Name" />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-2 mb-md-0 mt-2">Project Description :</label>
                                </Col>
                                <Col md={10}>
                                    <div id="project-descriptioin-editor">
                                        <SpkSunEditor height={'200px'} defaulContent={defaultContent} />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-2 mb-md-0 mt-2">Start Date :</label>
                                </Col>
                                <Col md={10}>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <SpkDatepickr className="form-control flatpickr-input" Timeinput="Time:" dateFormat="yy/MM/dd h:mm aa" placeholderText='Choose date with time' showTimeInput selected={dates["startDate"] ? new Date(dates["startDate"]) : null} onChange={(date: Date | null) => handleDateChange("startDate", date)} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-2 mb-md-0 mt-2">End Date :</label>
                                </Col>
                                <Col md={10}>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <SpkDatepickr className="form-control flatpickr-input" Timeinput="Time:" dateFormat="yy/MM/dd h:mm aa" placeholderText='Choose date with time' showTimeInput selected={dates["endDate"] ? new Date(dates["endDate"]) : null} onChange={(date: Date | null) => handleDateChange("endDate", date)} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-2 mb-md-0 mt-2">Team Members :</label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect multi name="colors" option={Multipleselectdata} mainClass="default basic-multi-select" id="choices-multiple-default" menuplacement='auto' classNameprefix="Select2" defaultvalue={[Multipleselectdata[0], Multipleselectdata[10], Multipleselectdata[4]]} />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-2 mb-md-0 mt-2">Status : </label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect name="colors" option={StatusSelect} mainClass="default basic-multi-select" id="choices-multiple-default" menuplacement='auto' classNameprefix="Select2" defaultvalue={[StatusSelect[1]]} />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-2 mb-md-0 mt-2">Priority :</label>
                                </Col>
                                <div className="col-md-10 d-flex gap-xxl-5 gap-3 flex-wrap flex-xxl-nowrap">
                                    <div className="form-check">
                                        <input type="radio" id="priority-high" name="priority" value="High" className="form-check-input" required />
                                        <label htmlFor="priority-high" className="form-check-label">High</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" id="priority-medium" name="priority" value="Medium" className="form-check-input" />
                                        <label htmlFor="priority-medium" className="form-check-label">Medium</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" id="priority-low" name="priority" value="Low" className="form-check-input" />
                                        <label htmlFor="priority-low" className="form-check-label">Low</label>
                                    </div>
                                </div>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label className="form-label mb-2 mb-md-0 mt-2">Attachments :</label>
                                </Col>
                                <Col md={10}>
                                    <FilePond className="multiple-filepond" files={files['dropzone'] || []} onupdatefiles={(fileItems) => handleFileUpdate(fileItems, 'dropzone')} allowMultiple={true} maxFiles={3} server="/api" name="files" labelIdle='Drag & Drop your file here or click ' />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <label className="form-label mb-2 mb-md-0 mt-2">Tags :</label>
                                </Col>
                                <Col md={10}>
                                    <CreatableSelect className="tags-data" components={components} classNamePrefix='react-select' inputValue={inputValue} isClearable isMulti menuIsOpen={false} onChange={(newValue) => {
                                        if (Array.isArray(newValue)) {
                                            setValue1(newValue);
                                        } else {
                                            setValue1([]);
                                        }
                                    }} onInputChange={(newValue) => setInputValue(newValue)} onKeyDown={handleKeyDown} placeholder="Type something and press enter..." value={value1} />
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <button className="btn btn-success btn-wave ms-auto float-end">Create Project</button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default CreateProject;