'use client';
import React, { useState } from 'react';
import {
  Accordion,
  Button,
  Card,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { APP_ROUTE } from '@/constants/route';
import SearchBar from '@/shared/layouts-components/searchbar/SearchBar';
import toast from 'react-hot-toast';
import { deleteCouponById } from '@/services/coupon.service';
import CustomPagination from '@/shared/layouts-components/pagination/CustomPagination';
import { CouponData } from '@/types/coupon.type';
import {
  couponStatus,
  getBackgroundForType,
  getStatus,
} from '@/helper/coupons';
import UseAppStore from '@/store/useAppStore';
import Filter from '@/shared/layouts-components/filter/Filter';
type Props = {
  data: CouponData[];
  total: number;
  currentPage: number;
};
const HEADER = [
  { title: 'Title' },
  { title: 'Code' },
  { title: 'Store' },
  { title: 'Category' },
  { title: 'Start Date' },
  { title: 'Expire Date' },
  { title: 'Type' },
  { title: 'Status' },
  { title: 'Actions' },
];

export default function CouponList({
  data = [],
  total = 0,
  currentPage = 1,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  //TODO: handle modal
  const handleOpenUpdate = (id: number) => {
    router.push(`${pathname}/update/${id}`);
  };
  //TODO: handle modal
  const handleDelete = (id: number) => {
    toast.promise(deleteCouponById(id), {
      loading: 'Deleting...!',
      success: (res) => {
        if (res.success) {
          return 'Deleted success';
        }
        throw res.message;
      },
    });
  };

  return (
    <Card className="custom-card">
      <Card.Header className="justify-content-between">
        <Card.Title>All Coupons</Card.Title>
      </Card.Header>

      <Card.Body>
        <Row className="align-items-center g-2 flex-wrap">
          <Col xs="12">
            <Filter byCategory byStatus byStore />
          </Col>
          <Col xs="12" md>
            <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
              <SearchBar placeholder="Search coupon..." />
              <Link href={APP_ROUTE.ADD_COUPON}>
                <SpkButton Buttonvariant="primary" Customclass="w-auto">
                  Add Coupon
                </SpkButton>
              </Link>
            </div>
          </Col>
        </Row>

        {/* Table */}
        <div className="table-responsive mt-3">
          <SpkTables tableClass="table-hover text-nowrap" header={HEADER}>
            {data.map((coupon: CouponData) => (
              <tr key={coupon.id}>
                <td>{coupon.title}</td>
                <td>{coupon.code}</td>
                <td>{coupon.store?.name || 'N/A'}</td>
                <td>{coupon.category?.name || 'N/A'}</td>
                <td>{coupon.start_date}</td>
                <td>{coupon.expire_date}</td>
                <td>
                  <p
                    className={`badge ${getBackgroundForType(coupon.type)} mb-2 `}
                  >
                    {coupon.type}
                  </p>
                </td>
                <td>
                  <p
                    className={`badge ${getStatus(coupon.start_date, coupon.expire_date)?.color} mb-2 `}
                  >
                    {getStatus(coupon.start_date, coupon.expire_date)?.label ||
                      'N/A'}
                  </p>
                </td>

                <td>
                  <Button
                    variant="success-light"
                    size="sm"
                    className="btn btn-sm btn-primary-light"
                    onClick={() => handleOpenUpdate(coupon.id)}
                  >
                    <i className="ri-edit-line"></i> Edit
                  </Button>
                  <Button
                    variant="danger-light"
                    size="sm"
                    className="btn btn-sm btn-primary-light mx-2"
                    onClick={() => handleDelete(coupon.id)}
                  >
                    <i className="ri-delete-bin-line"></i> Delete
                  </Button>
                </td>
              </tr>
            ))}
          </SpkTables>
        </div>
      </Card.Body>
      <Card.Footer className="border-top-0 d-flex justify-content-between flex-wrap">
        <div>
          Showing <b>{data.length}</b> of {total}
        </div>

        <CustomPagination currentPage={currentPage} total={total} />
      </Card.Footer>
    </Card>
  );
}
