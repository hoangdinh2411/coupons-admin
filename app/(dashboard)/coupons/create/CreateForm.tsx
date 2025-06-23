'use client';
import React, { Fragment, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Col, Form, Row } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import toast from 'react-hot-toast';
import UseAppStore from '@/store/useAppStore';
import { createCoupon } from '@/services/coupon.service';
import { CouponType } from '@/types/enum';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { CouponPayload } from '@/types/coupon.type';
const types = Object.values(CouponType);

export const schema = z
  .object({
    title: z.string().min(1, 'Coupon title is required'),
    code: z.string().min(1, 'Code is required'),
    offer_detail: z.string().min(1, 'Offer detail is required'),
    is_exclusive: z.boolean(),
    expire_date: z.date({
      message: 'Expire date is required',
    }),
    start_date: z.date({
      message: 'Start date is required',
    }),
    category_id: z.number({
      message: 'Select category',
    }),
    store_id: z.number({
      message: 'Select store',
    }),
    type: z.string({
      message: 'Coupon type is required',
    }),
  })
  .refine((data) => dayjs(data.expire_date).isAfter(dayjs(data.start_date)), {
    message: 'Expire date must be after start date',
    path: ['expire_date'],
  });

export const defaultValues: CouponFormData = {
  title: '',
  code: '',
  offer_detail: '',
  is_exclusive: false,
  start_date: new Date(),
  expire_date: new Date(),
  category_id: 0,
  store_id: 0,
  type: '',
};
export type CouponFormData = z.infer<typeof schema>;

export default function CreateForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<CouponFormData>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onChange',
  });

  const { categories, stores } = UseAppStore((state) => state);
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValues);
    }
  }, [isSubmitSuccessful]);

  const onSubmit = async (data: CouponFormData) => {
    const payload: CouponPayload = {
      ...data,
      is_exclusive: Number(data.is_exclusive) === 0,
      expire_date: dayjs(data.expire_date).format('YYYY/MM/DD'),
      start_date: dayjs(data.start_date).format('YYYY/MM/DD'),
      type: data.type as CouponType,
    };
    toast.promise(createCoupon(payload), {
      loading: 'Pending...!',
      success: (res) => {
        if (res.success && res.data) {
          return 'Created success';
        }

        throw res.message;
      },
      error: (err) => err || 'Something wrong',
    });
  };

  console.log(errors);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ my: 3 }}>
        <Form.Label id="demo-radio-buttons-group-label">
          Is the coupon exclusive?
        </Form.Label>
        <Controller
          name="is_exclusive"
          control={control}
          render={({ field }) => (
            <fieldset>
              <RadioGroup
                row
                value={field.value ? '0' : '1'}
                onChange={(e) => field.onChange(e.target.value === '0')}
                name="is_exclusive"
              >
                <FormControlLabel
                  value={'0'}
                  control={<Radio size="small" />}
                  label="Exclusive"
                />
                <FormControlLabel
                  value={'1'}
                  control={<Radio size="small" />}
                  label="In-exclusive"
                />
              </RadioGroup>
            </fieldset>
          )}
        />
        {errors.is_exclusive && (
          <small className="text-danger">{errors.is_exclusive.message}</small>
        )}
      </Box>
      {/* Store Name */}
      <Box className="mb-3">
        <Form.Label className="text-default">Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter coupon title"
          {...register('title')}
        />
        {errors.title && (
          <small className="text-danger">{errors.title.message}</small>
        )}
      </Box>

      {/* Description */}
      <Box className="mb-3">
        <Form.Label className="text-default">Offer detail</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Enter Store description"
          {...register('offer_detail')}
        />
        {errors.offer_detail && (
          <small className="text-danger">{errors.offer_detail.message}</small>
        )}
      </Box>

      {/* Code */}
      <Box className="mb-3">
        <Form.Label className="text-default">Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter coupon title"
          {...register('code')}
        />
        {errors.code && (
          <small className="text-danger">{errors.code.message}</small>
        )}
      </Box>

      <Row className="g-3">
        {/* Expired date */}
        <Col xl={6}>
          <Form.Label className="text-default">Start Date</Form.Label>
          <Controller
            control={control}
            name="start_date"
            render={({ field }) => (
              <div className="custom-date-picker">
                <DatePicker
                  timeIntervals={30}
                  isClearable
                  dateFormat="YYYY/MM/dd"
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                  placeholderText="Select start date"
                  className="form-control flatpickr-input"
                  selected={field.value ? field.value : null}
                />
              </div>
            )}
          />

          {errors.start_date && (
            <small className="text-danger">{errors.start_date.message}</small>
          )}
        </Col>
        <Col xl={6}>
          <Form.Label className="text-default">Expire Date</Form.Label>
          <Controller
            control={control}
            name="expire_date"
            render={({ field }) => (
              <div className="custom-date-picker">
                <DatePicker
                  timeIntervals={30}
                  isClearable
                  dateFormat="YYYY/MM/dd"
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                  placeholderText="Select expire date"
                  className="form-control flatpickr-input"
                  selected={field.value ? field.value : null}
                />
              </div>
            )}
          />

          {errors.expire_date && (
            <small className="text-danger">{errors.expire_date.message}</small>
          )}
        </Col>

        <Col xl={6}>
          <Form.Label className="text-default">Coupon type</Form.Label>
          <Controller
            control={control}
            name="type"
            render={({ field: { onChange, value, ref } }) => {
              return (
                <Fragment>
                  <Form.Select ref={ref} value={value} onChange={onChange}>
                    <option value={''}>Select type</option>
                    {types &&
                      types.map((t: string, idx: number) => (
                        <option key={idx} value={t}>
                          {t}
                        </option>
                      ))}
                  </Form.Select>
                  {errors.type && (
                    <small className="text-danger">{errors.type.message}</small>
                  )}
                </Fragment>
              );
            }}
          />
        </Col>
        {/* Category */}

        {/* Store select */}
        <Col xl={6}>
          <Form.Label className="text-default">Category</Form.Label>
          <Controller
            control={control}
            name="category_id"
            render={({ field: { onChange, value, ref } }) => {
              return (
                <Fragment>
                  <Form.Select
                    ref={ref}
                    value={Number(value ?? 0)}
                    onChange={(e) => onChange(Number(e.target.value))}
                  >
                    <option value={0}>Select category</option>
                    {categories &&
                      categories.map((cat) => (
                        <option key={cat.id} value={Number(cat.id)}>
                          {cat.name}
                        </option>
                      ))}
                  </Form.Select>
                  {errors.category_id && (
                    <small className="text-danger">
                      {errors.category_id.message}
                    </small>
                  )}
                </Fragment>
              );
            }}
          />
        </Col>
        <Col xl={6}>
          <Form.Label className="text-default">Store</Form.Label>
          <Controller
            control={control}
            name="store_id"
            render={({ field: { onChange, value, ref } }) => {
              return (
                <Fragment>
                  <Form.Select
                    ref={ref}
                    value={Number(value ?? 0)}
                    onChange={(e) => onChange(Number(e.target.value))}
                  >
                    <option value={0}>Select store</option>
                    {stores &&
                      stores.map((cat) => (
                        <option key={cat.id} value={Number(cat.id)}>
                          {cat.name}
                        </option>
                      ))}
                  </Form.Select>
                  {errors.store_id && (
                    <small className="text-danger">
                      {errors.store_id.message}
                    </small>
                  )}
                </Fragment>
              );
            }}
          />
        </Col>
        {/* Type select */}
      </Row>

      {/* Submit */}
      <Box display="flex" justifyContent="end" mt={4} gap={1}>
        <SpkButton Buttonvariant="primary" Buttontype="submit">
          Create Coupon
        </SpkButton>
      </Box>
    </Form>
  );
}
