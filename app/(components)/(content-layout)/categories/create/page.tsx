import Breadcrumb from "@/container/CreateCategoryPage/Breadcrumb";
import FormCreateCategory from "@/container/CreateCategoryPage/Form";
import { Box } from "@mui/material";
import React from "react";

function CreateCategoryTemplate() {
  return (
    <Box component={"section"}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <h5 className="mb-3 fw-bold">Create category</h5>
        <Breadcrumb />
      </Box>
      <FormCreateCategory />
    </Box>
  );
}

export default CreateCategoryTemplate;
