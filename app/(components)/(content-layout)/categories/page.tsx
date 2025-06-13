"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  InputGroup,
  Pagination,
  Row,
} from "react-bootstrap";

import Seo from "@/shared/layouts-components/seo/seo";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import CreateCategoryModal from "@/container/Category/CreateCategoryModal";
import UpdateCategoryModal from "@/container/Category/UpdateCategoryModal";
import { ImageByte } from "@/helper";

const FAKE_CATEGORIES = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Category ${i + 1}`,
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmqr9md-E5f51zftunUbkQVrqgnHbb-hjwrw&s`,
}));

const HEADER = [
  { title: "Category ID" },
  { title: "Name" },
  { title: "Image" },
  { title: "Actions" },
];

const CategoryTemplate: React.FC = () => {
  const [categories, setCategories] = useState(FAKE_CATEGORIES);
  const [search, setSearch] = useState("");
  const [openCreateCategory, setOpenCreateCategory] = useState(false);
  const [updateCategory, setUpdateCategory] = useState({
    isOpen: false,
    defaultValues: {
      name: "",
      image: "",
      id: "",
    },
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [letterFilter, setLetterFilter] = useState<string | null>(null);

  const handleRemove = (id: number) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  const filteredCategories = categories.filter((cat) => {
    const nameLower = cat.name.toLowerCase();
    const matchesSearch = nameLower.includes(search.toLowerCase());
    const matchesLetter = letterFilter
      ? nameLower.startsWith(letterFilter.toLowerCase())
      : true;
    return matchesSearch && matchesLetter;
  });

  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const paginatedCategories = filteredCategories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  //TODO: handle modal
  const handleOpenUpdateCategory = (defaultValues: {
    name: string;
    image: string;
    id: string | number;
  }) => {
    setUpdateCategory({
      defaultValues: {
        ...defaultValues,
        id: String(defaultValues.id),
      },
      isOpen: true,
    });
  };
  const handleCloseUpdateCategory = () => {
    setUpdateCategory((pre) => ({
      ...pre,
      isOpen: false,
    }));
  };
  return (
    <>
      <Seo title="Ecommerce - Categories" />

      <Card className="custom-card">
        <Card.Header className="justify-content-between">
          <Card.Title>All Categories List</Card.Title>
          <SpkDropdown
            Togglevariant="primary"
            Toggletext="Sort By"
            Customclass="mb-2"
            Id="navbarScrollingDropdown"
            Customtoggleclass="nav-link dropdown-toggle"
            Menulabel="navbarScrollingDropdown"
          >
            <Dropdown.Item>Name</Dropdown.Item>
            <Dropdown.Item>Newest</Dropdown.Item>
            <Dropdown.Item>Oldest</Dropdown.Item>
          </SpkDropdown>
        </Card.Header>

        <Card.Body>
          <Row className="align-items-center g-2 flex-wrap">
            <Col xs="12" md>
              <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
                <InputGroup style={{ flex: 1, minWidth: "240px" }}>
                  <Form.Control
                    placeholder="Search categories by name..."
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
                  onClickfunc={() => setOpenCreateCategory(true)}
                  Buttonvariant="primary-light"
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
              {paginatedCategories.map((cat) => (
                <tr key={cat.id}>
                  <td>{cat.id}</td>
                  <td>{cat.name}</td>
                  <td>
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      width={40}
                      height={40}
                      className="rounded"
                    />
                  </td>
                  <td>
                    <Button
                      variant="danger-primary"
                      size="sm"
                      className="btn-icon"
                      onClick={() => handleOpenUpdateCategory(cat)}
                    >
                      <i className="ri-edit-line"></i>
                    </Button>
                    <Button
                      variant="danger-light"
                      size="sm"
                      className="btn-icon"
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
            Showing <b>{(currentPage - 1) * itemsPerPage + 1}</b> to{" "}
            <b>
              {Math.min(currentPage * itemsPerPage, filteredCategories.length)}
            </b>{" "}
            of <b>{filteredCategories.length}</b> entries
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

      <CreateCategoryModal
        open={openCreateCategory}
        onClose={() => setOpenCreateCategory(false)}
      />
      <UpdateCategoryModal
        key={updateCategory.defaultValues.id}
        defaultValues={updateCategory.defaultValues}
        open={updateCategory.isOpen}
        onClose={handleCloseUpdateCategory}
      />
    </>
  );
};

export default CategoryTemplate;
