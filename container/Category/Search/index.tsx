"use client";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { Box } from "@mui/material";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

function SearchCategory() {
  const [keywords, setKeywords] = useState<string>("");

  // useEffect(() => {
  //   if (keywords.trim().length > 0) alert(keywords);
  // }, [keywords]);
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"white"}
        p={2}
        mb={2}
        className="rounded-3 "
        gap={2}
      >
        <div className="input-group  rounded">
          <input
            className="form-control"
            placeholder="Search your Orders with Order Id.."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
          <a className="btn btn-primary" href="#!">
            <i className="ti ti-search"></i>
          </a>
        </div>
        <Box width={"7.8rem"}>
          <SpkButton
            onClickfunc={() => redirect("/categories/create")}
            Buttonvariant="primary-light"
            Customclass="me-2 w-100"
          >
            Add category
          </SpkButton>
        </Box>
      </Box>
    </Box>
  );
}

export default SearchCategory;
