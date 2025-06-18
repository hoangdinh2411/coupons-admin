"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Box, Paper } from "@mui/material";
import { Modal, Form } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";

import UploadFile, {
  ImageByte,
} from "@/shared/layouts-components/uploadFile/UploadFile";

interface CreateStoreModalPropsType {
  open: boolean;
  onClose: () => void;
}

export const schema = z.object({
  name: z.string().min(1, "Store name is required"),
  image: z.object({
    filename: z.string(),
    data: z.string(),
    type: z.string(),
  }),
  description: z.string().min(1, "Description is required"),
  max_discount_pct: z
    .number({ invalid_type_error: "Must be a number" })
    .min(0)
    .max(100),
  keywords: z.string(),
  url: z.string().url("Invalid URL"),
  category: z.number({ invalid_type_error: "Category is required" }),
});

export const defaultValue: StoreFormData = {
  name: "",
  image: {
    filename: "",
    data: "",
    type: "",
  },
  description: "",
  max_discount_pct: 0,
  keywords: "",
  url: "",
  category: 1,
};

export type StoreFormData = z.infer<typeof schema>;


export default function CreateStoreModal({
  open,
  onClose,
}: CreateStoreModalPropsType) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm<StoreFormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (isSubmitSuccessful || !open) {
      reset(defaultValue);
    }
  }, [isSubmitSuccessful,open]);
  const onSubmit = async (data: StoreFormData) => {
    const payload = {
      ...data,
      keywords: data.keywords.split(",").map(k => k.trim()),
    };
    alert(JSON.stringify(payload));
  };
  

  const handleUploadFile = (data: ImageByte) => {
    setValue("image", data);
  };
  return (
    <Modal
      centered
      show={open}
      onHide={() => {
        onClose();
      }}
      keyboard={false}
      className="modal fade"
    >
      <Modal.Header closeButton>
        <Modal.Title as="h6">Create Store</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Paper>
        <Form onSubmit={handleSubmit(onSubmit)}>
  {/* Store Name */}
  <Box className="mb-3">
    <Form.Label className="fw-bold text-default">Store Name</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter your Store name"
      {...register("name")}
    />
    {errors.name && <small className="text-danger">{errors.name.message}</small>}
  </Box>

  {/* Description */}
  <Box className="mb-3">
              <Form.Label className="fw-bold text-default">Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Store description"
                {...register("description")}
              />
              {errors.description && (
                <small className="text-danger">{errors.description.message}</small>
              )}
            </Box>

  {/* Max Discount */}
  <Box className="mb-3">
    <Form.Label className="fw-bold text-default">Max Discount (%)</Form.Label>
    <Form.Control
      type="number"
      step="0.01"
      {...register("max_discount_pct", { valueAsNumber: true })}
    />
    {errors.max_discount_pct && <small className="text-danger">{errors.max_discount_pct.message}</small>}
  </Box>

  {/* Keywords */}
  <Box className="mb-3">
    <Form.Label className="fw-bold text-default">Keywords (comma separated)</Form.Label>
    <Form.Control
      type="text"
      placeholder="e.g., AI, programming"
      {...register("keywords")}
    />
    {errors.keywords && <small className="text-danger">{errors.keywords.message}</small>}
  </Box>

  {/* URL */}
  <Box className="mb-3">
    <Form.Label className="fw-bold text-default">Website URL</Form.Label>
    <Form.Control
      type="text"
      placeholder="https://example.com"
      {...register("url")}
    />
    {errors.url && <small className="text-danger">{errors.url.message}</small>}
  </Box>

  {/* Category */}
  <Box className="mb-3">
    <Form.Label className="fw-bold text-default">Category</Form.Label>
    <Form.Select {...register("category", { valueAsNumber: true })}>
      <option value={1}>Technology</option>
      <option value={2}>Pets</option>
      <option value={3}>Books</option>
    </Form.Select>
    {errors.category && <small className="text-danger">{errors.category.message}</small>}
  </Box>

  {/* Image Upload */}
  <Box mb={2}>
    <Form.Label className="fw-bold text-default">Image</Form.Label>
    <Controller
      control={control}
      name="image"
      render={({ field }) => (
        <UploadFile
          filename={field.value?.filename}
          onUploadFile={handleUploadFile}
          id="create-Store"
        />
      )}
    />
    {errors.image && <small className="text-danger">Image is required</small>}
  </Box>

  {/* Submit */}
  <Box display="flex" justifyContent="end" mt={4} gap={1}>
    <SpkButton Buttonvariant="primary" Buttontype="submit">
      Create Store
    </SpkButton>
  </Box>
</Form>

        </Paper>
      </Modal.Body>
    </Modal>
  );
}
