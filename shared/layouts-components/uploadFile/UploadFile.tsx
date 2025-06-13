import { decodeBase64, encodeFileToBase64 } from "@/helper/image";
import React, { Fragment, useState } from "react";
import { Form } from "react-bootstrap";

export type ImageByte = {
  filename: string;
  type: string;
  data: string;
};
type Props = {
  onUploadFile: (data: ImageByte) => void;
  filename: string;
  id: string;
};

export default function UploadFile({ onUploadFile, filename, id }: Props) {
  const [error, setError] = useState("");
  const handleSelectFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      try {
        const encodedFile = await encodeFileToBase64(file);
        if (error) {
          setError("");
        }

        const data = {
          filename: file.name,
          type: file.type,
          data: encodedFile,
        };
        onUploadFile({
          ...data,
          data: decodeBase64(data),
        });
        e.target.value = "";
      } catch (error) {
        if (typeof error === "string") {
          setError(error as string);
        }
        console.log(error);
      }
    }
  };

  const handleDeleteSelectedFile = () => {
    onUploadFile({
      filename: "",
      type: "",
      data: "",
    });
  };

  return (
    <Fragment>
      <label
        htmlFor={id}
        className="form-control text-muted mar my-2 "
        style={{ cursor: "pointer" }}
      >
        Choose an image...
        <input
          type="file"
          accept="image/*"
          id={id}
          hidden
          onChange={handleSelectFile}
          style={{
            opacity: 0,
            position: "absolute",
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        />
      </label>
      {!error && filename && (
        <span>
          <small
            className="text-danger mx-2"
            onClick={handleDeleteSelectedFile}
            style={{ cursor: "pointer" }}
          >
            X
          </small>
          {filename}{" "}
        </span>
      )}
      {error && <span className="text-danger">{error}</span>}
    </Fragment>
  );
}
