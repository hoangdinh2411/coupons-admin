"use client";
import { Box } from "@mui/material";
import React from "react";
import SearchCategory from "@/container/Category/Search";
import TableCategoryManagement from "@/container/Category/Table";
import { DUMMY_CATEGORY } from "@/dummy/Category.dummy";
import Breadcrumb from "@/container/Category/Breadcrumb";

function CategoriesTemplate() {
  return (
    <Box component={"section"}>
      <Box
        display={"flex"}
        mt={1}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <h5 className="mb-3 fw-bold">Create category</h5>
        <Breadcrumb />
      </Box>
      <SearchCategory />
      <TableCategoryManagement rows={DUMMY_CATEGORY} />
    </Box>
  );
}

export default CategoriesTemplate;
