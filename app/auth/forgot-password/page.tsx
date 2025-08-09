'use client';
import { Box } from '@mui/material';
import { useState } from 'react';
import RightSection from './RightSection';
import ForgotForm from './ForgotForm';
import { Card, Col, Row } from 'react-bootstrap';
import VerifyForm from './VerifyForm';
import ResetPassworForm from './ResetPasswordForm';
export interface ForgotPagePropsType {
  onChangeEmail?: (email: string) => void;
  onUpdateToken?: (token: string) => any;
  email: string;
  onChangeCurrentForm: (form: number) => void;
}
export const TYPE_FORM = {
  FORGOT: 0,
  VERIFY: 1,
  RESET: 2,
};

function ForgotPasswordTemplate() {
  const [currentForm, setCurrentForm] = useState(TYPE_FORM.FORGOT);
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  const onChangeCurrentForm = (type: number) => {
    setCurrentForm(type);
  };
  const onChangeEmail = (email: string) => {
    setEmail(email);
  };
  const onUpdateToken = (token: string) => {
    setToken(token);
  };
  return (
    <>
      <Row className=" justify-content-center authentication authentication-ForgotPassword align-items-center h-100">
        <Col xxl={7} sm={8} className="col-12">
          <Card className="custom-card my-4 border">
            <Card.Body>
              <Row className=" mx-0 align-items-center">
                <Col xl={6}>
                  {currentForm === TYPE_FORM.FORGOT && (
                    <ForgotForm
                      onChangeEmail={onChangeEmail}
                      onChangeCurrentForm={onChangeCurrentForm}
                      email={email}
                    />
                  )}
                  {currentForm === TYPE_FORM.VERIFY && (
                    <VerifyForm
                      onUpdateToken={onUpdateToken}
                      onChangeCurrentForm={onChangeCurrentForm}
                      email={email}
                    />
                  )}
                  {currentForm === TYPE_FORM.RESET && (
                    <ResetPassworForm token={token} />
                  )}
                </Col>
                <RightSection />
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ForgotPasswordTemplate;
