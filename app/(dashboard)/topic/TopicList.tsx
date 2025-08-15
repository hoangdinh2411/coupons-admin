'use client';
import React, { Fragment, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import SpkTables from '@/shared/@spk-reusable-components/reusable-tables/spk-tables';
import toast from 'react-hot-toast';
import Image from 'next/image';
import SearchBar from '@/shared/layouts-components/searchbar/SearchBar';
import CustomPagination from '@/shared/layouts-components/pagination/CustomPagination';
import { TopicData } from '@/types/topic.type';
import UpdateTopicModal from './UpdateTopicModal';
import CreateTopicModal from './CreateTopicModal';
import { deleteById } from '@/services/topic.service';
import UseAppStore from '@/store/useAppStore';
import { refreshCacheClient } from '@/services/share.service';
type Props = {
  data: TopicData[];
  total: number;
  currentPage: number;
};
const HEADER = [{ title: 'Name' }, { title: 'Image' }, { title: 'Actions' }];
export default function TopicList({
  data = [],
  total = 1,
  currentPage = 1,
}: Props) {
  const [modal, setModal] = useState<{
    isOpen: boolean;
    item: TopicData | null;
  }>({
    isOpen: false,
    item: null,
  });
  const { topics, setTopics } = UseAppStore((state) => state);

  const handleOpenUpdateModal = (item: TopicData) => {
    setModal({
      item,
      isOpen: true,
    });
  };

  const handelCloseModal = () => {
    setModal(() => ({
      item: null,
      isOpen: false,
    }));
  };
  const handleRemove = (topic: TopicData) => {
    toast.promise(deleteById(topic.id), {
      loading: 'Deleting...!',
      success: (res) => {
        if (res.success) {
          setTopics(topics.filter((t) => t.id !== topic.id));
          refreshCacheClient({
            paths: [`/topics/${topic.slug}`],
            tags: ['menu-data', 'topic-data']
          })
          return 'Deleted success';
        }
        throw res.message;
      },
    });
  };

  const handleOpenCreateModal = () => {
    setModal({
      item: null,
      isOpen: true,
    });
  };

  return (
    <Fragment>
      <Card className="custom-card">
        <Card.Header className="justify-content-between">
          <Card.Title>All Topic List</Card.Title>
        </Card.Header>

        <Card.Body>
          <Row className="align-items-center g-2 flex-wrap">
            <Col xs="12" md>
              <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
                <SearchBar placeholder="Search topic by name" />
                <SpkButton
                  onClickfunc={handleOpenCreateModal}
                  Buttonvariant="primary"
                  Customclass="w-auto"
                >
                  Add Topic
                </SpkButton>
              </div>
            </Col>
          </Row>

          {/* Table */}
          <div className="table-responsive mt-3">
            <SpkTables tableClass="table-hover text-nowrap" header={HEADER}>
              {data && data?.map((topic) => (
                <tr key={topic.id}>
                  <td>{topic.name}</td>
                  <td>
                    <Image
                      src={
                        topic?.image.url
                          ? topic?.image?.url
                          : '/assets/images/empty.png'
                      }
                      alt={topic.name}
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
                      onClick={() => handleOpenUpdateModal(topic)}
                    >
                      <i className="ri-edit-line me-1"></i> Edit
                    </Button>
                    <Button
                      variant="danger-light"
                      size="sm"
                      className="btn btn-sm btn-primary-light mx-2"
                      onClick={() => handleRemove(topic)}
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
      <CreateTopicModal
        open={modal.item === null && modal.isOpen}
        onClose={handelCloseModal}
      />
      <UpdateTopicModal
        item={modal.item}
        open={modal.isOpen && modal.item !== null}
        onClose={handelCloseModal}
      />
    </Fragment>
  );
}
