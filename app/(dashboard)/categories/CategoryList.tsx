'use client';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Pagination,
  Row,
} from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import CreateCategoryModal from './CreateCategoryModal';
import { CategoryData } from '@/types/category.type';
import UpdateCategoryModal from './UpdateCategoryModal';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { deleteById } from '@/app/actions/category.service';
import UseAppStore from '@/store/useAppStore';
import Image from 'next/image';
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
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [categoryModal, setCategoryModal] = useState<{
    isOpen: boolean;
    item: CategoryData | null;
  }>({
    isOpen: false,
    item: null,
  });
  const { setCategory, categories } = UseAppStore((state) => state);

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
          setCategory(categories.filter((cat) => cat.id === id));
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
  const pagination = total ? [...Array(total)].map((_, i) => i + 1) : [1];
  const handleChangePage = (selectedPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', selectedPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSearch = () => {
    if (searchRef.current) {
      const searchText = searchRef.current.value;
      const params = new URLSearchParams(searchParams.toString());
      params.set('search_text', searchText.toString());
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  useEffect(() => {
    if (data) {
      setCategory(data);
    }
  }, [data]);

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
                <InputGroup style={{ flex: 1, minWidth: '240px' }}>
                  <Form.Control
                    placeholder="Search categories by name..."
                    ref={searchRef}
                  />
                  <Button
                    variant="primary"
                    id="button-search"
                    onClick={handleSearch}
                  >
                    <i className="ri-search-line"></i>
                  </Button>
                </InputGroup>

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
              {categories.map((cat) => (
                <tr key={cat.id}>
                  <td>{cat.id}</td>
                  <td>{cat.name}</td>
                  <td>
                    <Image
                      src={cat.image_bytes || '/assets/images/empty.png'}
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
                      className="btn-icon"
                      onClick={() => handleOpenUpdateCategory(cat)}
                    >
                      <i className="ri-edit-line"></i>
                    </Button>
                    <Button
                      variant="danger-light"
                      size="sm"
                      className="btn-icon mx-2"
                      onClick={() => handleRemove(cat.id)}
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
              disabled={currentPage === total}
              onClick={() => handleChangePage(currentPage + 1)}
            >
              Next
            </Pagination.Item>
          </Pagination>
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
