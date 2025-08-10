'use client';
import { ForgotPagePropsType, TYPE_FORM } from './page';
import { Col, Row, Form } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { verifyFormSchema } from '@/helper/schemas/auth.schema';
import { verify } from '@/services/auth.service';
import { VerifyCodeType } from '@/types/enum';
import toast from 'react-hot-toast';

type VerifyFormData = z.infer<typeof verifyFormSchema>;
function VerifyForm({
  email,
  onChangeCurrentForm,
  onUpdateToken,
}: ForgotPagePropsType) {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<VerifyFormData>({
    resolver: zodResolver(verifyFormSchema),
    defaultValues: {
      verificationCode: '',
    },
  });

  const onSubmit = async (data: VerifyFormData) => {
    try {
      const response = await verify({
        email: email,
        code: parseInt(data.verificationCode),
        type: VerifyCodeType.FORGET_PASSWORD,
      });
      if (response && response.success) {
        toast.success('Verify OTP success !');
        onChangeCurrentForm(TYPE_FORM.RESET);
        onUpdateToken?.(response.data.token ?? '');
      } else {
        toast.error(response.message);
        resetField('verificationCode');
      }
    } catch (error) {
      toast.error('Error coding');
    } finally {
    }
  };

  return (
    <Col xl={12}>
      <div className="p-3">
        <Form.Label className="fs-14  fw-medium">
          Enter Verification Code:
        </Form.Label>
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Row className="gy-3">
            <Col xl={12} className="mb-2">
              <Row>
                <Col className="col-12">
                  <Form.Control
                    type="text"
                    className={`form-control fw-bold text-center ${
                      errors.verificationCode ? 'is-invalid' : ''
                    }`}
                    id="verification-code"
                    placeholder="Enter verification code"
                    {...register('verificationCode')}
                  />
                  {errors.verificationCode && (
                    <div className="invalid-feedback">
                      {errors.verificationCode.message}
                    </div>
                  )}
                </Col>
              </Row>
              <div className="form-check mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <Form.Label
                  className="form-check-label fs-14"
                  htmlFor="defaultCheck1"
                >
                  Didn't receive a code?
                </Form.Label>
              </div>
            </Col>
            <Col xl={12} className="d-grid mt-3">
              <SpkButton
                Buttontype="submit"
                Buttonvariant="primary"
                Customclass="btn"
              >
                Verify
              </SpkButton>
            </Col>
          </Row>
        </Form>
      </div>
    </Col>
  );
}

export default VerifyForm;
