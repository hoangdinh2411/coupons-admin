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
import CustomPagination from '@/shared/layouts-components/pagination/CustomPagination';
import Filter from '@/shared/layouts-components/filter/Filter';
import { Rating, Switch } from '@mui/material';
import { BlogData } from '@/types/blog.type';
import { deleteBlogById, updateBlog } from '@/services/blog';
type Props = {
  data: BlogData[];
  total: number;
  currentPage: number;
};
const HEADER = [
  { title: 'Title' },
  { title: 'Topic' },
  { title: 'Rating' },
  { title: 'Keywords' },
  { title: 'Publish' },
  { title: 'Index' },
  { title: 'Actions' },
];

export default function BlogList({
  data = [],
  total = 0,
  currentPage = 1,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleRatingChange = (id: number, value: number) => {
    toast.promise(updateBlog(id, { rating: value }), {
      loading: 'Updating...',
      success: (res) => {
        if (res.success) {
          return 'Updated rating success';
        }
        throw res.message;
      },
      error: (err) => err,
    });
  };
  //TODO: handle modal
  const handleOpenUpdate = (id: number) => {
    router.push(`${pathname}/update/${id}`);
  };
  //TODO: handle modal
  const handleDelete = (id: number) => {
    toast.promise(deleteBlogById(id), {
      loading: 'Deleting...!',
      success: (res) => {
        if (res.success) {
          return 'Deleted success';
        }
        throw res.message;
      },
    });
  };
  const handleUpdateSwitch = (
    id: number,
    field: 'is_published' | 'is_indexed',
    value: boolean,
  ) => {
    toast.promise(
      updateBlog(id, {
        [field]: value,
      }),
      {
        loading: 'Updating...!',
        success: (res) => {
          if (res.success) {
            if (value === true) {
              return 'On success';
            } else {
              return 'Off success';
            }
          }
          throw res.message;
        },
      },
    );
  };

  return (
    <Card className="custom-card">
      <Card.Header className="justify-content-between">
        <Card.Title>All Blogs</Card.Title>
      </Card.Header>

      <Card.Body>
        <Row className="align-items-center g-2 flex-wrap">
          <Col xs="12">
            <Filter byTopic byRating />
          </Col>
          <Col xs="12" md>
            <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
              <SearchBar placeholder="Search coupon..." />
              <Link href={APP_ROUTE.CREATE_BLOG}>
                <SpkButton Buttonvariant="primary" Customclass="w-auto">
                  Add New Blog
                </SpkButton>
              </Link>
            </div>
          </Col>
        </Row>

        {/* Table */}
        <div className="table-responsive mt-3">
          <SpkTables tableClass="table-hover text-nowrap" header={HEADER}>
            {data && data?.map((blog: BlogData) => (
              <tr key={blog.id}>
                <td>{blog.title}</td>
                <td>{blog.topic?.name || 'N/A'}</td>
                <td>
                  <Rating
                    key={blog.id}
                    size="small"
                    value={blog.rating ?? 0}
                    onChange={(_, newValue: number | null) => {
                      if (newValue !== null) {
                        handleRatingChange(blog.id, newValue);
                      }
                    }}
                  />
                </td>
                <td >
                  <div style={{
                    maxWidth: 300,
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 4
                  }}>
                    {blog.keywords
                      ? blog.keywords.map((k: string, index: number) => (
                        <span key={index} className="badge bg-dark me-1 ">
                          {k}
                        </span>
                      ))
                      : 'N/A'}

                  </div>
                </td>
                <td>
                  <Switch
                    size="small"
                    checked={blog.is_published}
                    color="info"
                    onChange={() => {
                      handleUpdateSwitch(
                        blog.id,
                        'is_published',
                        !blog.is_published,
                      );
                    }}
                  />
                </td>
                <td>
                  <Switch
                    size="small"
                    checked={blog.is_indexed}
                    color="warning"
                    onChange={() => {
                      handleUpdateSwitch(
                        blog.id,
                        'is_indexed',
                        !blog.is_indexed,
                      );
                    }}
                  />
                </td>
                <td>
                  <Button
                    variant="success-light"
                    size="sm"
                    className="btn btn-sm btn-primary-light"
                    onClick={() => handleOpenUpdate(blog.id)}
                  >
                    <i className="ri-edit-line"></i> Edit
                  </Button>
                  <Button
                    variant="danger-light"
                    size="sm"
                    className="btn btn-sm btn-primary-light mx-2"
                    onClick={() => handleDelete(blog.id)}
                  >
                    <i className="ri-delete-bin-line"></i> Delete
                  </Button>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_CLIENT_DOMAIN}/blogs/${blog.slug}`}
                    target="_blank"
                  >
                    <Button
                      variant="link"
                      size="sm"
                      className="btn btn-sm btn-primary-light mx-2"
                    >
                      <i className="bi bi-eye">View</i>
                    </Button>
                  </Link>
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
