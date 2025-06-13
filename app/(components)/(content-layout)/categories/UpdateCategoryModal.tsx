"use client";

import React, { useEffect, memo } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal, Form, CloseButton } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { generateImageBytesObjectFromBase64, parseBase64Image } from "@/helper/image";
import { ImageByte } from "@/helper/image";
import { CategoryFormData, defaultValue, schema } from "./CreateCategoryModal";
import { Category } from "./page";
import { Box, Paper } from "@mui/material";
import UploadFile from "@/shared/layouts-components/uploadFile/UploadFile";

interface UpdateCategoryModalProps {
  item: Category | null;
  open: boolean;
  onClose: () => void;
}

function UpdateCategoryModal({
  item,
  open,
  onClose,
}: UpdateCategoryModalProps) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(schema),
  });
  useEffect(() => {
    if (isSubmitSuccessful || !open) {
      reset(defaultValue);
    }
  }, [isSubmitSuccessful, open]);
  useEffect(() => {
    if (item) {
      setValue("name", item.name);
      if (item.image) {
        setValue("image", generateImageBytesObjectFromBase64(item.image, item.name));
      }
    }
  }, [item]);
  const onSubmit = async (data: CategoryFormData) => {};
  const handleUploadFile = (data: ImageByte) => {
    setValue("image", data);
  };
  return (
    <Modal
      show={open}
      onHide={onClose}
      centered
      aria-labelledby="update-category-modal"
      aria-describedby="modal-to-update-category"
    >
      <Modal.Header className="d-flex justify-content-between align-items-center">
        <Modal.Title as="h6">Update Category</Modal.Title>
        <CloseButton onClick={onClose} aria-label="close" />
      </Modal.Header>
      <Modal.Body>
        <Paper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Box className="mb-3">
              <Form.Label className="fw-bold text-default">
                Category Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your category name"
                {...register("name")}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </Box>

            <Box mb={2}>
              <Form.Label className="fw-bold text-default">Image</Form.Label>
              <Box display="flex" alignItems="center" gap={2}>
                <Box position="relative" flex={1}>
                  <Controller
                    control={control}
                    name="image"
                    render={({ field }) => (
                      <UploadFile
                        filename={field.value?.filename}
                        onUploadFile={handleUploadFile}
                        id="update-category"
                      />
                    )}
                  />
                </Box>
              </Box>
            </Box>

            <Box display="flex" justifyContent="end" mt={4} gap={1}>
              <SpkButton Buttonvariant="primary" Buttontype="submit">
                Update
              </SpkButton>
              <SpkButton
                Buttonvariant="primary-light"
                Buttontype="button"
                onClickfunc={onClose}
              >
                Cancel
              </SpkButton>
            </Box>
          </Form>
        </Paper>
      </Modal.Body>
    </Modal>
  );
}

export default memo(UpdateCategoryModal);
