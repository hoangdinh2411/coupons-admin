'use client';
import React, { Fragment, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import { PageData } from '@/types/page.type';
import SearchBar from '@/shared/layouts-components/searchbar/SearchBar';
import CustomPagination from '@/shared/layouts-components/pagination/CustomPagination';
import UseAppStore from '@/store/useAppStore';
import CreatePageModal from './CreatePageModal';
import UpdatePageModal from './UpdatePageModal';

type Props = {
  data: PageData[];
  total: number;
  currentPage: number;
};
const HEADER = [{ title: 'Page' }, { title: 'Type' }, { title: 'Actions' }];
export default function PageList({
  data = [],
  total = 1,
  currentPage = 1,
}: Props) {
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
  const handleRemove = (cat: PageData) => {
    // toast.promise(deleteById(cat.id), {
    //   loading: 'Deleting...!',
    //   success: (res) => {
    //     if (res.success) {
    //       setPage(categories.filter((c) => c.id !== cat.id));
    //       refreshCacheClient({
    //         paths: [`/coupons/${cat.slug}`],
    //         tags: ['categories-data', 'menu-data'],
    //       });
    //       return 'Deleted success';
    //     }
    //     throw res.message;
    //   },
    //   error: (err) => err ?? 'Cannot remove',
    // });
  };

  const handleOpenCreatePageModal = () => {
    setPageModal({
      item: null,
      isOpen: true,
    });
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
                  onClickfunc={handleOpenCreatePageModal}
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
                data?.map((cat) => (
                  <tr key={cat.id}>
                    <td>{cat.id}</td>
                    <td>{cat.name}</td>

                    <td className="">
                      <Button
                        variant="success-light"
                        size="sm"
                        className="btn btn-sm btn-primary-light"
                        onClick={() => handleOpenUpdatePage(cat)}
                      >
                        <i className="ri-edit-line me-1"></i> Edit
                      </Button>
                      <Button
                        variant="danger-light"
                        size="sm"
                        className="btn btn-sm btn-primary-light mx-2"
                        onClick={() => handleRemove(cat)}
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
      <CreatePageModal
        open={PageModal.item === null && PageModal.isOpen}
        onClose={handelCloseModal}
      />
      <UpdatePageModal
        item={PageModal.item}
        open={PageModal.isOpen && PageModal.item !== null}
        onClose={handelCloseModal}
      />
    </Fragment>
  );
}
