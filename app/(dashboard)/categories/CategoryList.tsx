'use client';
import React, { Fragment, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import CreateCategoryModal from './CreateCategoryModal';
import { CategoryData } from '@/types/category.type';
import UpdateCategoryModal from './UpdateCategoryModal';
import toast from 'react-hot-toast';
import { deleteById } from '@/services/category.service';
import Image from 'next/image';
import SearchBar from '@/shared/layouts-components/searchbar/SearchBar';
import CustomPagination from '@/shared/layouts-components/pagination/CustomPagination';
import UseAppStore from '@/store/useAppStore';
type Props = {
  data: CategoryData[];
  total: number;
  currentPage: number;
};
const HEADER = [
  { title: 'Category ID' },
  { title: 'Name' },
  { title: 'Image' },
  { title: 'Actions' },
];
export default function CategoryList({
  data = [],
  total = 1,
  currentPage = 1,
}: Props) {
  console.log(data)
  const [categoryModal, setCategoryModal] = useState<{
    isOpen: boolean;
    item: CategoryData | null;
  }>({
    isOpen: false,
    item: null,
  });
  const { categories, setCategory } = UseAppStore((state) => state);

  const handleOpenUpdateCategory = (category: CategoryData) => {
    setCategoryModal({
      item: category,
      isOpen: true,
    });
  };

  const handelCloseModal = () => {
    setCategoryModal((pre) => ({
      ...pre,
      item: null,
      isOpen: false,
    }));
  };
  const handleRemove = (id: number) => {
    toast.promise(deleteById(id), {
      loading: 'Deleting...!',
      success: (res) => {
        if (res.success) {
          setCategory(categories.filter((c) => c.id !== id));
          return 'Deleted success';
        }
        throw res.message;
      },
    });
  };

  const handleOpenCreateCategoryModal = () => {
    setCategoryModal({
      item: null,
      isOpen: true,
    });
  };

  return (
    <Fragment>
      <Card className="custom-card">
        <Card.Header className="justify-content-between">
          <Card.Title>All Categories List</Card.Title>
        </Card.Header>

        <Card.Body>
          <Row className="align-items-center g-2 flex-wrap">
            <Col xs="12" md>
              <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
                <SearchBar placeholder="Search category by name" />
                <SpkButton
                  onClickfunc={handleOpenCreateCategoryModal}
                  Buttonvariant="primary"
                  Customclass="w-auto"
                >
                  Add Category
                </SpkButton>
              </div>
            </Col>
          </Row>

          {/* Table */}
          <div className="table-responsive mt-3">
            <SpkTables tableClass="table-hover text-nowrap" header={HEADER}>
              {data.map((cat) => (
                <tr key={cat.id}>
                  <td>{cat.id}</td>
                  <td>{cat.name}</td>
                  <td>
                    <Image
                      src={
                        cat?.image.url
                          ? cat?.image.url
                          : '/assets/images/empty.png'
                      }
                      alt={cat.name}
                      width={40}
                      height={40}
                      className="rounded"
                    />
                  </td>
                  <td className="">
                    <Button
                      variant="success-light"
                      size="sm"
                      className="btn btn-sm btn-primary-light"
                      onClick={() => handleOpenUpdateCategory(cat)}
                    >
                      <i className="ri-edit-line me-1"></i> Edit
                    </Button>
                    <Button
                      variant="danger-light"
                      size="sm"
                      className="btn btn-sm btn-primary-light mx-2"
                      onClick={() => handleRemove(cat.id)}
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
      <CreateCategoryModal
        open={categoryModal.item === null && categoryModal.isOpen}
        onClose={handelCloseModal}
      />
      <UpdateCategoryModal
        item={categoryModal.item}
        open={categoryModal.isOpen && categoryModal.item !== null}
        onClose={handelCloseModal}
      />
    </Fragment>
  );
}
