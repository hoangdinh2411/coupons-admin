'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Pagination,
  Row,
} from 'react-bootstrap';

import Seo from '@/shared/layouts-components/seo/seo';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import UpdateStoreModal from './UpdateStoreModal';
import { DUMMY_STORES_TABLE } from '@/constants/dummy.table';
import { StoreData } from '@/types/store.type';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { APP_ROUTE } from '@/constants/route';
import SearchBar from '@/shared/layouts-components/searchbar/SearchBar';
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
  { title: 'Category ID' },
  { title: 'Actions' },
];
export default function StoreList({
  data = [],
  total = 0,
  currentPage = 1,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [updateStore, setUpdateStore] = useState<{
    isOpen: boolean;
    item: StoreData | null;
  }>({
    isOpen: false,
    item: null,
  });
  const handleChangePage = (selectedPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', selectedPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  //TODO: handle modal
  const handleOpenUpdateStore = (Store: StoreData) => {
    setUpdateStore({
      item: Store,
      isOpen: true,
    });
  };

  const pagination = total ? [...Array(total)].map((_, i) => i + 1) : [1];
  return (
    <Card className="custom-card">
      <Card.Header className="justify-content-between">
        <Card.Title>All Stores</Card.Title>
      </Card.Header>

      <Card.Body>
        <Row className="align-items-center g-2 flex-wrap">
          <Col xs="12" md>
            <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
              <SearchBar />
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
            {data.map((store: any) => (
              <tr key={store.id}>
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
                <td>{store.category || 'N/A'}</td>
                <td>
                  <Button
                    variant="success-light"
                    size="sm"
                    className="btn-icon"
                    onClick={() => handleOpenUpdateStore(store)}
                  >
                    <i className="ri-edit-line"></i>
                  </Button>
                  <Button
                    variant="danger-light"
                    size="sm"
                    className="btn-icon mx-2"
                    // onClick={() => handleRemove(store.id)}
                  >
                    <i className="ri-delete-bin-line"></i>
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

        <Pagination className="mb-0">
          <Pagination.Item
            disabled={currentPage === 1}
            onClick={() => handleChangePage(currentPage - 1)}
          >
            Prev
          </Pagination.Item>
          {pagination.map((number) => (
            <Pagination.Item
              key={number}
              active={number === currentPage}
              onClick={() => handleChangePage(number)}
            >
              {number}
            </Pagination.Item>
          ))}
          <Pagination.Item
            disabled={currentPage >= total}
            onClick={() => handleChangePage(currentPage + 1)}
          >
            Next
          </Pagination.Item>
        </Pagination>
      </Card.Footer>
    </Card>
  );
}
