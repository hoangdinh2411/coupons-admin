'use client';

import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import Image from 'next/image';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

function VerifyEmailPage() {
  const [verificationCode, setVerificationCode] = useState();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(verificationCode);
  };

  const onSubmit = async () => {
    // await (verificationCode);
  };

  return (
    <Row className="justify-content-center authentication authentication-basic align-items-center h-100">
      <div className="col-xxl-7 col-sm-8 col-12">
        <div className="card custom-card my-4 border">
          <div className="card-body">
            <Row className="mx-0 align-items-center gx-0">
              <Col xl={6}>
                <div className="p-3">
                  <p className="fs-14 mb-4 fw-medium">Enter Verification Code : </p>
                  <Row className="gy-3">
                    <Col xl={12} className="mb-2">
                      <Row>
                        <Col className="col-12">
                          <input
                            type="text"
                            className="form-control fw-bold text-center"
                            value={verificationCode}
                            onChange={(e) => handleInputChange(e)}
                          />
                        </Col>
                      </Row>
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label className="form-check-label fs-14" htmlFor="defaultCheck1">
                          Didn't receive a code?{' '}
                        </label>
                      </div>
                    </Col>
                    <Col xl={12} className="d-grid mt-3">
                      <SpkButton onClickfunc={onSubmit} Customclass="btn btn-primary">
                        Verify
                      </SpkButton>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xl={6} className="border rounded  border-secondary border-opacity-10">
                <div className="d-flex align-items-center justify-content-around flex-column gap-4 h-100">
                  <Image
                    fill
                    src="../../../assets/images/authentication/5.png"
                    alt="Verification Image"
                    className="img-fluid m-auto mb-3 flex-fill mt-2"
                  />
                  <div className="flex-fill text-center">
                    <h6 className="mb-2">Verification in Progress</h6>
                    <p className="mb-0 text-muted fw-normal fs-12">
                      Please enter the code sent to your Email or phone.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Row>
  );
}

export default VerifyEmailPage;
