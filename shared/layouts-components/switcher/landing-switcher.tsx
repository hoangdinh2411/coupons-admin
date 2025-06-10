"use client"

import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'
import { Col, Form, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Row } from 'react-bootstrap'
import { data$, getState } from '../services/switcherServices'
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons'
import { Reset1, ThemePrimaryColor, setDirection, setPrimaryColor, updateTheme } from '@/shared/data/switcherdata/switcherdata';

const LandingSwitcher = ({ show, handleClose }: any) => {

    let [variable, setVariable] = useState(getState());

    useEffect(() => {
        const subscription = data$.subscribe((e) => {
            setVariable(e);
        });
        return () => subscription.unsubscribe();
    }, []);

    return (
        <Fragment>
            {/* <!-- Start Switcher --> */}
            <Offcanvas className="offcanvas-end" placement='end' show={show} onHide={handleClose} tabIndex="-1" id="switcher-canvas" aria-labelledby="offcanvasRightLabel">
                <OffcanvasHeader className="offcanvas-header border-bottom d-block p-0">
                    <div className="d-flex align-items-center justify-content-between p-3">
                        <OffcanvasTitle className="offcanvas-title text-default" id="offcanvasRightLabel">Switcher</OffcanvasTitle>
                        <SpkButton Buttonvariant='' Buttontype="button" Customclass="btn-close" onClickfunc={handleClose} data-bs-dismiss="offcanvas" aria-label="Close"></SpkButton>
                    </div>
                </OffcanvasHeader>
                <OffcanvasBody className="offcanvas-body">
                    <div className="border-0 p-0" id="switcher-home" role="tabpanel"
                        aria-labelledby="switcher-home-tab" tabIndex={0}>
                        <div className="">
                            <p className="switcher-style-head">Theme Color Mode:</p>
                            <Row className="switcher-style gx-0">
                                <Col className="col-4">
                                    <Form.Check className="form-check switch-select">
                                        <Form.Check.Label className="form-check-label" htmlFor="switcher-light-theme">
                                            Light
                                        </Form.Check.Label>
                                        <Form.Check.Input className="form-check-input" type="radio" name="theme-style" id="switcher-light-theme" checked={variable.dataThemeMode === 'light'} onChange={(_e) => { }} onClick={() => updateTheme('light', 'clicked')} />
                                    </Form.Check>
                                </Col>
                                <Col className="col-4">
                                    <Form.Check className="form-check switch-select">
                                        <Form.Check.Label className="form-check-label" htmlFor="switcher-dark-theme">
                                            Dark
                                        </Form.Check.Label>
                                        <Form.Check.Input className="form-check-input" type="radio" name="theme-style" id="switcher-dark-theme" checked={variable.dataThemeMode === 'dark'} onChange={(_e) => { }} onClick={() => updateTheme('dark', 'clicked')} />
                                    </Form.Check>
                                </Col>

                            </Row>
                        </div>
                        <div className="">
                            <p className="switcher-style-head">Directions:</p>
                            <Row className="switcher-style gx-0">
                                <Col className="col-4" >
                                    <Form.Check className="form-check switch-select">
                                        <Form.Check.Label className="form-check-label" htmlFor="switcher-ltr">
                                            LTR
                                        </Form.Check.Label>
                                        <Form.Check.Input className="form-check-input" type="radio" name="direction" id="switcher-ltr" checked={variable.dir === 'ltr'} onChange={(_e) => { }} onClick={() => setDirection('ltr')} />
                                    </Form.Check>
                                </Col>
                                <Col className="col-4" >
                                    <Form.Check className="form-check switch-select">
                                        <Form.Check.Label className="form-check-label" htmlFor="switcher-rtl">
                                            RTL
                                        </Form.Check.Label>
                                        <Form.Check.Input className="form-check-input" type="radio" name="direction" id="switcher-rtl" checked={variable.dir === 'rtl'} onChange={(_e) => { }} onClick={() => setDirection('rtl')} />
                                    </Form.Check>
                                </Col>
                            </Row>
                        </div>
                        <div className="theme-colors">
                            <p className="switcher-style-head">Theme Primary:</p>
                            <div className="d-flex flex-wrap align-items-center switcher-style">
                                <Form.Check className="form-check switch-select me-3">
                                    <Form.Check.Input className="form-check-input color-input color-primary-1" type="radio" name="theme-primary" id="switcher-primary" checked={variable.colorPrimaryRgb === '171, 125, 241'} onChange={(_e) => { }} onClick={() => setPrimaryColor('171, 125, 241')} />
                                </Form.Check>
                                <Form.Check className="form-check switch-select me-3">
                                    <Form.Check.Input className="form-check-input color-input color-primary-2" type="radio" name="theme-primary" id="switcher-primary1" checked={variable.colorPrimaryRgb === '69, 184, 224'} onChange={(_e) => { }} onClick={() => setPrimaryColor('69, 184, 224')} />
                                </Form.Check>
                                <Form.Check className="form-check switch-select me-3">
                                    <Form.Check.Input className="form-check-input color-input color-primary-3" type="radio" name="theme-primary" id="switcher-primary2" checked={variable.colorPrimaryRgb === '231, 105, 182'} onChange={(_e) => { }} onClick={() => setPrimaryColor('231, 105, 182')} />
                                </Form.Check>
                                <Form.Check className="form-check switch-select me-3">
                                    <Form.Check.Input className="form-check-input color-input color-primary-4" type="radio" name="theme-primary" id="switcher-primary3" checked={variable.colorPrimaryRgb === '26, 139, 114'} onChange={(_e) => { }} onClick={() => setPrimaryColor('26, 139, 114')} />
                                </Form.Check>
                                <Form.Check className="form-check switch-select me-3">
                                    <Form.Check.Input className="form-check-input color-input color-primary-5" type="radio" name="theme-primary" id="switcher-primary4" checked={variable.colorPrimaryRgb === '10, 106, 169'} onChange={(_e) => { }} onClick={() => setPrimaryColor('10, 106, 169')} />
                                </Form.Check>
                                <Form.Check className="form-check switch-select ps-0 mt-1 color-primary-light">
                                    <div className="theme-container-primary">
                                        <SpkButton Customclass="">nano</SpkButton>
                                    </div>
                                    <div className="pickr-container-primary"  >
                                        <div className='pickr'>
                                            <SpkButton Customclass='pcr-button' onClickfunc={(ele: any) => {
                                                if (ele.target.querySelector("input")) {
                                                    ele.target.querySelector("input").click();
                                                }
                                            }}>
                                                <ThemePrimaryColor />
                                            </SpkButton>
                                        </div>
                                    </div>
                                </Form.Check>
                            </div>
                        </div>
                        <div>
                            <p className="switcher-style-head">Reset:</p>
                            <div className='text-center'>
                                <Link href="javascript:void(0);" id="reset-all" className="btn btn-danger mt-3" onClick={Reset1} >Reset</Link>
                            </div>
                        </div>
                    </div>
                </OffcanvasBody>
            </Offcanvas>
            {/* <!-- End Switcher --> */}
        </Fragment>
    )
}

export default LandingSwitcher