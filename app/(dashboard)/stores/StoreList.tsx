'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Card, Col, Row } from 'react-bootstrap';

import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import { StoreData } from '@/types/store.type';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { APP_ROUTE } from '@/constants/route';
import SearchBar from '@/shared/layouts-components/searchbar/SearchBar';
import toast from 'react-hot-toast';
import { deleteById } from '@/services/store.service';
import UseAppStore from '@/store/useAppStore';
import CustomPagination from '@/shared/layouts-components/pagination/CustomPagination';
import Filter from '@/shared/layouts-components/filter/Filter';
import { Rating } from '@mui/material';
type Props = {
  data: StoreData[];
  total: number;
  currentPage: number;
};
const HEADER = [
  { title: 'Store ID' },
  { title: 'Name' },
  { title: 'Image' },
  { title: 'keywords' },
  { title: 'Category' },
  { title: 'Rating' },
  { title: 'Actions' },
];
export default function StoreList({
  data = [],
  total = 0,
  currentPage = 1,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const { setStores, stores } = UseAppStore((state) => state);
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const handleRatingChange = (id: string | number, value: number) => {
    setRatings((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  //TODO: handle modal
  const handleOpenUpdateStore = (storeId: number) => {
    router.push(`${pathname}/update/${storeId}`);
  };
  //TODO: handle modal
  const handleDelete = (storeId: number) => {
    toast.promise(deleteById(storeId), {
      loading: 'Deleting...!',
      success: (res) => {
        if (res.success) {
          setStores(stores.filter((s) => s.id !== storeId));
          return 'Deleted success';
        }
        throw res.message;
      },
    });
  };

  return (
    <Card className="custom-card">
      <Card.Header className="justify-content-between">
        <Card.Title>All Stores</Card.Title>
      </Card.Header>

      <Card.Body>
        <Row className="align-items-center g-2 flex-wrap">
          <Col xs="12" md>
            <Filter byCategory />
          </Col>
          <Col xs="12" md>
            <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
              <SearchBar placeholder="Search store..." />
              <Link href={APP_ROUTE.ADD_STORE}>
                <SpkButton Buttonvariant="primary" Customclass="w-auto">
                  Add Store
                </SpkButton>
              </Link>
            </div>
          </Col>
        </Row>

        {/* Table */}
        <div className="table-responsive mt-3">
          <SpkTables tableClass="table-hover text-nowrap" header={HEADER}>
            {data.map((store: StoreData) => (
              <tr
                key={store.id}
                onDoubleClick={() => router.push(`${pathname}/${store.id}`)}
              >
                <td>{store.id}</td>
                <td>{store.name}</td>
                <td>
                  <Image
                    src={store.image_bytes || '/assets/images/empty.png'}
                    alt={store.name}
                    width={40}
                    height={40}
                    className="rounded"
                  />{' '}
                </td>
                <td>
                  {store.keywords?.map((k: string, index: number) => (
                    <span key={index} className="badge bg-primary me-1">
                      {k}
                    </span>
                  ))}
                </td>
                <td>{store.category?.name || 'N/A'}</td>
                <td>
                <Rating
                    key={store.id}
                    value={ratings[store.id] || 0}
                    onChange={(_, newValue: number | null) => {
                      if (newValue !== null) {
                        handleRatingChange(store.id, newValue);
                      }
                    }}
                  />
                </td>
                <td>
                  <Button
                    variant="success-light"
                    size="sm"
                    className="btn btn-sm btn-primary-light"
                    onClick={() => handleOpenUpdateStore(store.id)}
                  >
                    <i className="ri-edit-line"></i> Edit
                  </Button>
                  <Button
                    variant="danger-light"
                    size="sm"
                    className="btn btn-sm btn-primary-light mx-2"
                    onClick={() => handleDelete(store.id)}
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
