'use client';
import React, { Fragment, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import { PageData } from '@/types/page.type';
import SearchBar from '@/shared/layouts-components/searchbar/SearchBar';
import CustomPagination from '@/shared/layouts-components/pagination/CustomPagination';
import UseAppStore from '@/store/useAppStore';
import UpdateDynamicPageModal from './UpdateDynamicPageModal';
import { useRouter } from 'next/navigation';

const HEADER = [
  { title: 'Type' },
  { title: 'Content' },
  { title: 'Images' },
  { title: 'Thumbnail' },
  { title: 'FAQs' },
  { title: 'Metadata' },
  { title: 'Actions' },
];

type Props = {
  data: PageData[];
  total: number;
  currentPage: number;
};

export default function PageList({ data, total = 1, currentPage = 1 }: Props) {
  const router = useRouter();
  const [PageModal, setPageModal] = useState<{
    isOpen: boolean;
    item: PageData | null;
  }>({
    isOpen: false,
    item: null,
  });
  const { pages, setPages } = UseAppStore((state) => state);

  const handleOpenUpdatePage = (Page: PageData) => {
    setPageModal({
      item: Page,
      isOpen: true,
    });
  };

  const handelCloseModal = () => {
    setPageModal((pre) => ({
      ...pre,
      item: null,
      isOpen: false,
    }));
  };

  const handleRemove = (page: PageData) => {
    alert('Are you sure you want to delete this page?');
  };

  const renderFieldStatus = (value: any) => {
    if (
      value &&
      (typeof value === 'string'
        ? value.trim() !== ''
        : Array.isArray(value)
          ? value.length > 0
          : Object.keys(value).length > 0)
    ) {
      return (
        <i
          className="ri-checkbox-circle-fill w-25 text-success"
          title="Has value"
        ></i>
      );
    }
    return <span>N/A</span>;
  };

  return (
    <Fragment>
      <Card className="custom-card">
        <Card.Header className="justify-content-between">
          <Card.Title>All Pages List</Card.Title>
        </Card.Header>

        <Card.Body>
          <Row className="align-items-center g-2 flex-wrap">
            <Col xs="12" md>
              <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
                <SearchBar placeholder="Search Page by name" />
                <SpkButton
                  onClickfunc={() =>
                    router.push('/dynamic-pages/create')
                  }
                  Buttonvariant="primary"
                  Customclass="w-auto"
                >
                  Add Page
                </SpkButton>
              </div>
            </Col>
          </Row>

          {/* Table */}
          <div className="table-responsive mt-3">
            <SpkTables tableClass="table-hover text-nowrap" header={HEADER}>
              {data &&
                data?.map((page) => (
                  <tr key={page.id}>
                    <td>{page.type}</td>
                    <td>{renderFieldStatus(page.content)}</td>
                    <td>{renderFieldStatus(page.images)}</td>
                    <td>{renderFieldStatus(page.thumbnail)}</td>
                    <td>{renderFieldStatus(page.faqs)}</td>
                    <td>{renderFieldStatus(page.metadata)}</td>
                    <td className="">
                      <Button
                        variant="success-light"
                        size="sm"
                        className="btn btn-sm btn-primary-light"
                        onClick={() => handleOpenUpdatePage(page)}
                      >
                        <i className="ri-edit-line me-1"></i> Edit
                      </Button>
                      <Button
                        variant="danger-light"
                        size="sm"
                        className="btn btn-sm btn-primary-light mx-2"
                        onClick={() => handleRemove(page)}
                      >
                        <i className="ri-delete-bin-line"></i>Delete
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

      <UpdateDynamicPageModal
        item={PageModal.item}
        open={PageModal.isOpen && PageModal.item !== null}
        onClose={handelCloseModal}
      />
    </Fragment>
  );
}
