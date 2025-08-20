'use client';
import { validateFile } from '@/helper/file';
import { deleteFiles, uploadFile } from '@/services/file.service';
import React from 'react';
import toast from 'react-hot-toast';

export type ImageType = {
  file_name: string;
  url: string;
  public_id: string;
};

type Props = {
  onUploadFile: (data: ImageType[]) => void;
  files: ImageType[];
  id: string;
  folder: string;
  maxFiles?: number;
  label?: string;
};

export default function UploadMultiFiles({
  onUploadFile,
  files = [],
  id,
  maxFiles = 10,
  folder = 'default',
  label = 'Choose images...',
}: Props) {
  const handleSelectFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;

    if (selectedFiles) {
      if (files.length + selectedFiles.length > maxFiles) {
        toast.error(`Maximum ${maxFiles} files allowed`);
        e.target.value = '';
        return;
      }
      let isValid = true;
      for (const file of selectedFiles) {
        if (!validateFile(file)) {
          isValid = false;
          break;
        }
      }

      if (isValid) {
        const formData = new FormData();
        for (let index = 0; index < selectedFiles.length; index++) {
          formData.append('files', selectedFiles[index]);
        }
        formData.append('folder', folder);

        toast.promise(uploadFile(formData), {
          loading: 'Uploading images...!',
          success: (res) => {
            if (!res.success && res.message) {
              throw res.message;
            }
            if (!res.data) {
              throw 'Missing data on response';
            }
            const updatedFiles = [...files, ...res.data];
            onUploadFile(updatedFiles);
            return 'Uploaded successfully';
          },
          error: (err) => err,
        });
      }
    }
    e.target.value = '';
  };

  const handleDeleteFile = async (fileToDelete: ImageType) => {
    if (fileToDelete.public_id) {
      toast.promise(deleteFiles([fileToDelete.public_id]), {
        loading: 'Deleting image...!',
        success: (res) => {
          if (!res.success && res.message) {
            throw res.message;
          }
          const updatedFiles = files.filter(
            (file) => file.public_id !== fileToDelete.public_id,
          );
          onUploadFile(updatedFiles);
          return 'Deleted successfully';
        },
        error: (err) => err,
      });
    }
  };

  const handleClearAll = async () => {
    const publicIds = files
      .filter((file) => file.public_id)
      .map((file) => file.public_id);

    if (publicIds.length > 0) {
      toast.promise(deleteFiles(publicIds), {
        loading: 'Deleting all images...!',
        success: (res) => {
          if (!res.success && res.message) {
            throw res.message;
          }
          onUploadFile([]);
          return 'All files deleted successfully';
        },
        error: (err) => err,
      });
    } else {
      onUploadFile([]);
    }
  };

  return (
    <div className="d-flex flex-column w-100">
      <label
        htmlFor={id}
        className="form-control text-muted my-2 d-flex align-items-center justify-content-between"
        style={{ cursor: 'pointer' }}
      >
        <span>{label}</span>
        <small className="text-muted">
          ({files.length}/{maxFiles})
        </small>
        <input
          type="file"
          accept="image/*"
          id={id}
          hidden
          multiple
          onChange={handleSelectFile}
          disabled={files.length >= maxFiles}
        />
      </label>

      {files.length > 0 && (
        <div className="mt-2">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <small className="text-muted">Selected files:</small>
            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              onClick={handleClearAll}
            >
              Clear All
            </button>
          </div>

          <div
            className="border rounded p-2 max-height-200"
            style={{ maxHeight: '200px', overflowY: 'auto' }}
          >
            {files.map((file, index) => (
              <div
                key={`${file.public_id}-${index}`}
                className="d-flex justify-content-between align-items-center py-1 border-bottom"
              >
                <div className="d-flex align-items-center">
                  {file.url && (
                    <img
                      src={file.url}
                      alt={file.file_name}
                      className="me-2"
                      style={{
                        width: '40px',
                        height: '40px',
                        objectFit: 'cover',
                        borderRadius: '4px',
                      }}
                    />
                  )}
                  <small
                    className="text-truncate"
                    style={{ maxWidth: '200px' }}
                  >
                    {file.file_name}
                  </small>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger ms-2"
                  onClick={() => handleDeleteFile(file)}
                  style={{ minWidth: '24px', padding: '2px 6px' }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
