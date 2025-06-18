"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Pagination,
  Row,
} from "react-bootstrap";

import Seo from "@/shared/layouts-components/seo/seo";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import UpdateStoreModal from "./UpdateStoreModal";
import { DUMMY_STORES_TABLE } from "@/constants/dummy.table";
import { IStore } from "@/types/store.type";
import { redirect } from "next/navigation";

const HEADER = [
  { title: "Store ID" },
  { title: "Name" },
  { title: "Image" },
  { title: "keywords" },
  { title: "Category ID" },
  { title: "Actions" },
];

const StoreTemplate: React.FC = () => {
  const [stores, setStore] = useState(DUMMY_STORES_TABLE);
  const [search, setSearch] = useState("");
  const [openCreateStore, setOpenCreateStore] = useState(false);
  const [updateStore, setUpdateStore] = useState<{
    isOpen: boolean;
    item: IStore | null;
  }>({
    isOpen: false,
    item: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [letterFilter, setLetterFilter] = useState<string | null>(null);

  const handleRemove = (id: number) => {
    setStore(stores.filter((st) => st.id !== id));
  };

  const filteredSTORE = stores.filter((st) => {
    const nameLower = st.name.toLowerCase();
    const matchesSearch = nameLower.includes(search.toLowerCase());
    const matchesLetter = letterFilter
      ? nameLower.startsWith(letterFilter.toLowerCase())
      : true;
    return matchesSearch && matchesLetter;
  });

  const totalPages = Math.ceil(filteredSTORE.length / itemsPerPage);
  const paginatedSTORE = filteredSTORE.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  //TODO: handle modal
  const handleOpenUpdateStore = (Store: IStore) => {
    setUpdateStore({
      item: Store,
      isOpen: true,
    });
  };
  const handleCloseUpdateStore = () => {
    setUpdateStore((pre) => ({
      item: null,
      isOpen: false,
    }));
  };
  return (
    <>
      <Seo title="Ecommerce - STORE" />
      <Card className="custom-card">
        <Card.Header className="justify-content-between">
          <Card.Title>All Stores</Card.Title>

        </Card.Header>

        <Card.Body>
          <Row className="align-items-center g-2 flex-wrap">
            <Col xs="12" md>
              <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
                <InputGroup style={{ flex: 1, minWidth: "240px" }}>
                  <Form.Control
                    placeholder="Search store by name..."
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                  <Button variant="primary" id="button-search">
                    <i className="ri-search-line"></i>
                  </Button>
                </InputGroup>

                <SpkButton
                  onClickfunc={() => redirect("/stores/create")}
                  Buttonvariant="primary"
                  Customclass="w-auto"
                >
                  Add Store
                </SpkButton>
              </div>
            </Col>
          </Row>

          {/* Table */}
          <div className="table-responsive mt-3">
            <SpkTables tableClass="table-hover text-nowrap" header={HEADER}>
              {paginatedSTORE.map((store: any) => (
                <tr key={store.id}>
                  <td>{store.id}</td>
                  <td>{store.name}</td>
                  <td>
                    {/* <Image
                      src={store.image_bytes || '/default-image.png'}
                      alt={store.name}
                      width={40}
                      height={40}
                      className="rounded"
                    /> */}
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
                      onClick={() => handleRemove(store.id)}
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
            Showing <b>{(currentPage - 1) * itemsPerPage + 1}</b> to{" "}
            <b>
              {Math.min(currentPage * itemsPerPage, filteredSTORE.length)}
            </b>{" "}
            of <b>{filteredSTORE.length}</b> entries
          </div>

          <Pagination className="mb-0">
            <Pagination.Item
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </Pagination.Item>
            {Array.from({ length: totalPages }, (_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Item
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </Pagination.Item>
          </Pagination>
        </Card.Footer>
      </Card>

      <UpdateStoreModal
        item={updateStore.item}
        open={updateStore.isOpen}
        onClose={handleCloseUpdateStore}
      />
    </>
  );
};

export default StoreTemplate;
