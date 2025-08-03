'use client';
import React, { Fragment, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Box,
  FormControlLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { Col, Form, FormControl, Row } from 'react-bootstrap';
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
    title: z.string().min(1, 'Coupon title is required').trim(),
    code: z.string().trim(),
    offer_detail: z.string().min(1, 'Offer detail is required').trim(),
    is_exclusive: z.boolean(),
    expire_date: z.date({
      message: 'Expire date is required',
    }),
    start_date: z.date({
      message: 'Start date is required',
    }),
    categories: z
      .array(z.number())
      .min(1, 'Need to select at least one category'),
    store_id: z.number({
      message: 'Select store',
    }),
    offer_link: z.string().trim().optional(),
    type: z.enum(Object.values(CouponType) as [string, ...string[]]),
    discount: z.coerce
      .string()
      .regex(/^[0-9]+$/, { message: 'Please enter numbers only' })
      .refine((value) => Number(value) >= 0 && Number(value) <= 100, {
        message: 'Between 0 -100 ',
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
  categories: [],
  store_id: -1,
  type: '',
  offer_link: '',
  discount: '',
};
export type CouponFormData = z.infer<typeof schema>;

export default function CreateForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CouponFormData>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onChange',
  });

  const { categories, stores } = UseAppStore((state) => state);

  console.log(stores)
  const onSubmit = async (data: CouponFormData) => {
    const payload: CouponPayload = {
      ...data,
      discount: data.discount ? Number(data.discount) : 0,
      is_exclusive: Number(data.is_exclusive) === 0,
      expire_date: dayjs(data.expire_date).format('YYYY/MM/DD'),
      start_date: dayjs(data.start_date).format('YYYY/MM/DD'),
      type: data.type as CouponType,
    };
    toast.promise(createCoupon(payload), {
      loading: 'Pending...!',
      success: (res) => {
        if (res.success && res.data) {
          reset(defaultValues);
          return 'Created success';
        }

        throw res.message;
      },
      error: (err) => err || 'Something wrong',
    });
  };

  const type = watch('type');

  const handleChange = (
    e: SelectChangeEvent,
    onChange: (...event: any[]) => void,
  ) => {
    const selectedType = e.target.value;

    // Gọi onChange để cập nhật 'type' trong form state
    onChange(e);

    // Xử lý logic liên quan
    if (selectedType !== CouponType.CODE) {
      setValue('code', '');
    }
  };

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
      <Box className="mb-3">
        <Form.Label className="text-default">Discount</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter discount 1-100"
          {...register('discount')}
        />
        {errors.discount && (
          <small className="text-danger">{errors.discount.message}</small>
        )}
      </Box>
      <Box className="mb-3">
        <Form.Label className="text-default">Coupon type</Form.Label>
        <Controller
          control={control}
          name="type"
          render={({ field: { onChange, value, ref } }) => {
            return (
              <Fragment>
                <Select
                  fullWidth
                  size="small"
                  id="coupon-type"
                  ref={ref}
                  value={value}
                  onChange={(e) => handleChange(e, onChange)}
                >
                  <MenuItem value={''} disabled>
                    <em>Select type</em>
                  </MenuItem>
                  {types &&
                    types.map((t: string, idx: number) => (
                      <MenuItem key={idx} value={t}>
                        {t}
                      </MenuItem>
                    ))}
                </Select>
                {errors.type && (
                  <small className="text-danger">{errors.type.message}</small>
                )}
              </Fragment>
            );
          }}
        />
      </Box>
      {type === CouponType.CODE && (
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
      )}
      <Box className="mb-3">
        <Form.Label className="text-default">Offer link</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter offer link"
          {...register('offer_link')}
        />
        {errors.offer_link && (
          <small className="text-danger">{errors.offer_link.message}</small>
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

        {/* Category */}

        {/* Store select */}
        <Col xl={6}>
          <Form.Label className="text-default">Categories</Form.Label>
          <Controller
            control={control}
            name="categories"
            render={({ field }) => {
              return (
                <div>
                  <Select
                    fullWidth
                    size="small"
                    id="demo-multiple-name"
                    multiple
                    value={field.value ?? []}
                    onChange={(e) => {
                      const value = e.target.value;
                      field.onChange(
                        typeof value === 'string' ? value.split(',') : value,
                      );
                    }}
                    input={<OutlinedInput placeholder="Select categories" />}
                  >
                    <MenuItem disabled value={[]}>
                      <em>Select multi categories</em>
                    </MenuItem>
                    {categories.map((name) => (
                      <MenuItem key={name.id} value={name.id}>
                        {name.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.categories && (
                    <small className="text-danger">
                      {errors.categories.message}
                    </small>
                  )}
                </div>
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
                  <Select
                    fullWidth
                    size="small"
                    id="coupon-store"
                    ref={ref}
                    value={Number(value ?? 0)}
                    onChange={onChange}
                  >
                    <MenuItem disabled value={Number('-1')}>
                      <em>Select store</em>
                    </MenuItem>
                    {stores &&
                      stores.map((store) => (
                        <MenuItem key={store.id} value={store.id}>
                          {store.name}
                        </MenuItem>
                      ))}
                  </Select>
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
