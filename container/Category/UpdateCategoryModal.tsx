"use client";

import React, { useState, useEffect, memo } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Modal, Button, Form, Image, CloseButton } from "react-bootstrap";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import {
  encodeFileToBase64,
  decodeBase64,
  generateImageBytesObjectFromBase64,
} from "@/helper";
import { ImageByte } from "@/helper";
import { schema } from "@/context/CategoryContext";

type FormData = z.infer<typeof schema>;

interface UpdateCategoryModalProps {
  defaultValues?: { name: string; image: string; id: string | number };
  open: boolean;
  onClose: () => void;
}

function UpdateCategoryModal({
  defaultValues,
  open,
  onClose,
}: UpdateCategoryModalProps) {
  const [imagePreview, setImagePreview] = useState<string>(
    defaultValues?.image || ""
  );
  const [imageData, setImageData] = useState<ImageByte | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues
      ? { name: defaultValues.name, image: defaultValues.image }
      : { name: "", image: "" },
  });

  const onFormSubmit = async (data: FormData) => {
    let imgBytes: ImageByte | string = data.image;
    if (data.image instanceof FileList && data.image[0]) {
      const file = data.image[0];
      const base64 = await encodeFileToBase64(file);
      const fullBase64 = `data:${file.type};base64,${base64}`;
      imgBytes = generateImageBytesObjectFromBase64(
        fullBase64,
        data.name || file.name
      );
      setImagePreview(decodeBase64(imgBytes));
      setImageData(imgBytes);
    } else if (open && typeof data.image === "string") {
      imgBytes = data.image;
    }
    onClose();
  };

  const handleReset = () => {
    reset(defaultValues || { name: "", image: "" });
    setImagePreview(defaultValues?.image || "");
    setImageData(null);
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
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Category Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your category name"
              {...register("name")}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Image</Form.Label>
            <div className="d-flex align-items-center gap-2">
              {imagePreview && (
                <Image
                  src={imagePreview}
                  alt="Preview"
                  style={{
                    width: 60,
                    height: 60,
                    objectFit: "cover",
                    borderRadius: 4,
                  }}
                />
              )}
              <div className="position-relative flex-grow-1">
                <Controller
                  control={control}
                  name="image"
                  render={({ field }) => (
                    <>
                      <Form.Control
                        type="file"
                        accept="image/*"
                        id="upload-image"
                        ref={field.ref}
                        onChange={(e) => {
                          const input = e.target as HTMLInputElement;
                          const fileList = input.files;
                          field.onChange(fileList);
                          const file = fileList?.[0];
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
                          zIndex: 1,
                        }}
                      />
                      <Form.Control
                        type="text"
                        readOnly
                        value={imageData?.file_name}
                        className="text-muted"
                      />
                    </>
                  )}
                />
                {typeof errors.image?.message === "string" && (
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {errors.image.message}
                  </Form.Control.Feedback>
                )}
              </div>
            </div>
          </Form.Group>

          <div className="d-flex justify-content-end mt-4 gap-2">
            <SpkButton Buttonvariant="primary" Buttontype="submit">
              Update category
            </SpkButton>
            <SpkButton
              Buttonvariant="light"
              Buttontype="reset"
              onClickfunc={handleReset}
            >
              Reset
            </SpkButton>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default memo(UpdateCategoryModal);
