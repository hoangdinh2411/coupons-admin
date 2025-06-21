'use client';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { APP_ROUTE } from '@/constants/route';
import SearchBar from '@/shared/layouts-components/searchbar/SearchBar';
import toast from 'react-hot-toast';
import {
  deleteCouponById,
  submitCouponById,
} from '@/app/services/coupon.service';
import CustomPagination from '@/shared/layouts-components/pagination/CustomPagination';
import { CouponData } from '@/types/coupon.type';
import { CouponType } from '@/types/enum';
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
  { title: 'Expire Date' },
  { title: 'Type' },
  { title: 'Actions' },
];
export default function CouponSubmitList({
  data = [],
  total = 0,
  currentPage = 1,
}: Props) {
  //TODO: handle modal
  const handleAccept = (id: number) => {
    toast.promise(submitCouponById(id), {
      loading: 'Pending...',
      success: (res) => {
        if (res.success) {
          return 'Submitted coupon';
        }
        throw res.message;
      },
    });
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

  const getBackgroundForType = (type: CouponType) => {
    switch (type) {
      case CouponType.CODE:
        return 'bg-secondary';
      case CouponType.ONLINE_AND_IN_STORE:
        return 'bg-success';
      case CouponType.SALE:
        return 'bg-info';
      default:
        'bg-primary';
    }
  };
  return (
    <Card className="custom-card">
      <Card.Header className="justify-content-between">
        <Card.Title>All Coupons</Card.Title>
      </Card.Header>

      <Card.Body>
        <Row className="align-items-center g-2 flex-wrap">
          <Col xs="12" md>
            <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
              <SearchBar placeholder="Search coupon..." />
            </div>
          </Col>
        </Row>
        <div className="table-responsive mt-3">
          <SpkTables tableClass="table-hover text-nowrap" header={HEADER}>
            {data.map((coupon: CouponData) => (
              <tr key={coupon.id}>
                <td>{coupon.title}</td>
                <td>{coupon.code}</td>
                <td>{coupon.store?.name || 'N/A'}</td>
                <td>{coupon.category?.name || 'N/A'}</td>
                <td>{coupon.expire_date}</td>
                <td>
                  <p
                    className={`badge ${getBackgroundForType(coupon.type)} mb-2 `}
                  >
                    {coupon.type}
                  </p>
                </td>

                <td>
                  <Button
                    variant="success-light"
                    size="sm"
                    className="btn btn-sm btn-primary-light"
                    onClick={() => handleAccept(coupon.id)}
                  >
                    <i className="bi bi-check-lg"></i> Accept
                  </Button>
                  <Button
                    variant="danger-light"
                    size="sm"
                    className="btn btn-sm btn-primary-light mx-2"
                    onClick={() => handleDelete(coupon.id)}
                  >
                    <i className="ri-delete-bin-line"></i> Decline
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
