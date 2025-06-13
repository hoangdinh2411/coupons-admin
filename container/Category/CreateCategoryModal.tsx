"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Box, Paper } from "@mui/material";
import { Modal, Form } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import {
  encodeFileToBase64,
  decodeBase64,
  generateImageBytesObjectFromBase64,
} from "@/helper";
import { ImageByte } from "@/helper";
import { schema } from "@/context/CategoryContext";

type FormData = z.infer<typeof schema>;

interface CreateCategoryModalPropsType {
  open: boolean;
  onClose: () => void;
}

export default function CreateCategoryModal({
  open,
  onClose,
}: CreateCategoryModalPropsType) {
  const [imagePreview, setImagePreview] = useState<string>("");
  const [imageData, setImageData] = useState<ImageByte | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const file = data.image[0];
    const base64 = await encodeFileToBase64(file);
    const fullBase64 = `data:${file.type};base64,${base64}`;
    const imgBytes = generateImageBytesObjectFromBase64(
      fullBase64,
      data.name || file.name
    );

    setImagePreview(decodeBase64(imgBytes));
    setImageData(imgBytes);
    onClose();
    handleReset();
  };

  const handleReset = () => {
    reset();
    setImagePreview("");
    setImageData(null);
  };

  return (
    <Modal
      centered
      show={open}
      onHide={() => {
        onClose();
        handleReset();
      }}
      keyboard={false}
      className="modal fade"
    >
      <Modal.Header closeButton>
        <Modal.Title as="h6">Create Category</Modal.Title>
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
                {imagePreview && (
                  <Box>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{
                        width: 60,
                        height: 60,
                        objectFit: "cover",
                        borderRadius: 4,
                      }}
                    />
                  </Box>
                )}
                <Box position="relative" flex={1}>
                  <Controller
                    control={control}
                    name="image"
                    render={({ field }) => (
                      <>
                        <Form.Control
                          type="file"
                          accept="image/*"
                          id="upload-image"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            const file = (e.target as HTMLInputElement)
                              ?.files?.[0];
                            if (file) {
                              encodeFileToBase64(file)
                                .then((base64) => {
                                  const fullBase64 = `data:${file.type};base64,${base64}`;
                                  const imgBytes =
                                    generateImageBytesObjectFromBase64(
                                      fullBase64,
                                      file.name
                                    );
                                  setImagePreview(decodeBase64(imgBytes));
                                  setImageData(imgBytes);
                                })
                                .catch((err) => alert(err));
                            }
                          }}
                          style={{
                            opacity: 0,
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            cursor: "pointer",
                          }}
                        />
                        <label
                          htmlFor="upload-image"
                          className="form-control text-muted"
                          style={{ pointerEvents: "none" }}
                        >
                          {imageData?.file_name || "Choose an image..."}
                        </label>
                      </>
                    )}
                  />
                  {typeof errors.image?.message === "string" && (
                    <small className="text-danger">
                      {errors.image.message}
                    </small>
                  )}
                </Box>
              </Box>
            </Box>

            <Box display="flex" justifyContent="end" mt={4} gap={1}>
              <SpkButton Buttonvariant="primary" Buttontype="submit">
                Create Category
              </SpkButton>
              <SpkButton
                Buttonvariant="light"
                Buttontype="reset"
                onClickfunc={handleReset}
              >
                Reset
              </SpkButton>
            </Box>
          </Form>
        </Paper>
      </Modal.Body>
    </Modal>
  );
}
