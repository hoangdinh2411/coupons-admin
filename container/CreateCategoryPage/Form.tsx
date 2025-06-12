"use client";

import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  encodeFileToBase64,
  decodeBase64,
  generateImageBytesObjectFromBase64,
} from "@/helper";
import { ImageByte } from "@/helper";

function FormCreateCategory() {
  const [categoryName, setCategoryName] = useState("");
  const [imagePreview, setImagePreview] = useState<string>("");
  const [imageData, setImageData] = useState<ImageByte | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const base64 = await encodeFileToBase64(file);
        const fullBase64 = `data:${file.type};base64,${base64}`;
        const imgBytes = generateImageBytesObjectFromBase64(
          fullBase64,
          categoryName || file.name
        );

        setImagePreview(decodeBase64(imgBytes));
        setImageData(imgBytes);
      } catch (error: any) {
        alert(error.toString());
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Category Name:", categoryName);
    console.log("Image Data:", imageData);
  };

  return (
    <Paper sx={{ px: 2, py: 2 }}>
      <Form onSubmit={handleSubmit}>
        <Box className="mb-3">
          <Form.Label className="fw-bold  text-default">
            Category Name
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </Box>

        <Box mb={2}>
          <Form.Label className="fw-bold  text-default">Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          {imagePreview && (
            <Box mt={2}>
              <img
                src={imagePreview}
                alt="Preview"
                style={{
                  width: 120,
                  height: 120,
                  objectFit: "cover",
                  borderRadius: 4,
                }}
              />
            </Box>
          )}
        </Box>

        <Box display={"flex"} mt={4} gap={1}>
          <SpkButton Buttonvariant="primary" Buttontype="submit">
            Create category
          </SpkButton>
          <SpkButton
            Buttonvariant="light"
            Buttontype="reset"
            onClickfunc={() => {
              setCategoryName("");
              setImagePreview("");
              setImageData(null);
            }}
          >
            Reset
          </SpkButton>
        </Box>
      </Form>
    </Paper>
  );
}

export default FormCreateCategory;
