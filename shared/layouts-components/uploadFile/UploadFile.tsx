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
  newFile: ImageType;
  id: string;
  folder: string;
  multiple?: boolean;
};

export default function UploadFile({
  onUploadFile,
  newFile,
  id,
  multiple = false,
  folder = 'default',
}: Props) {
  const handleSelectFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files && e.target.files;
    console.log(files)
    if (files) {
      let isValid;
      if (multiple) {
        for (const f of files) {
          isValid = validateFile(f);
        }
      } else {
        isValid = validateFile(files[0]);
      }
      if (isValid) {
        const formData = new FormData();
        for (let index = 0; index < files.length; index++) {
          formData.append('files', files[index]);
        }
        formData.append('folder', folder);
        toast.promise(uploadFile(formData), {
          loading: 'Uploading image...!',
          success: (res) => {
            if (!res.success && res.message) {
              throw res.message;
            }
            if (!res.data) {
              throw 'Missing data on response';
            }
            onUploadFile(res.data);
            return 'Uploaded success';
          },
          error: (err) => err,
        });
      }

      // try {
      //   const encodedFile = await encodeFileToBase64(file);
      //   if (error) {
      //     setError('');
      //   }
      //   const data = {
      //     filename: file.name,
      //     type: file.type,
      //     data: encodedFile,
      //   };
      //   onUploadFile({
      //     ...data,
      //     data: decodeBase64(data),
      //   });
      //   e.target.value = '';
      // } catch (error) {
      //   if (typeof error === 'string') {
      //     setError(error as string);
      //   }
      //   console.log(error);
      // }
    }
    e.target.value = ''
  };

  const handleDeleteSelectedFile = async () => {
    if (newFile.public_id) {
      toast.promise(deleteFiles([newFile.public_id]), {
        loading: 'Deleting image...!',
        success: (res) => {
          if (!res.success && res.message) {
            throw res.message;
          }
          onUploadFile([
            {
              file_name: '',
              url: '',
              public_id: '',
            },
          ]);
          return 'Deleted success';
        },
        error: (err) => err,
      });
    }
  };

  return (
    <div className="d-flex flex-column w-100">
      <label
        htmlFor={id}
        className="form-control text-muted mar my-2 "
        style={{ cursor: 'pointer' }}
      >
        Choose an image...
        <input
          type="file"
          accept="image/*"
          id={id}
          hidden
          multiple={multiple}
          onChange={handleSelectFile}
          style={{
            opacity: 0,
            position: 'absolute',
            width: '100%',
            height: '100%',
            cursor: 'pointer',
          }}
        />
      </label>
      {newFile && newFile.file_name && (
        <span>
          <small
            className="text-danger mx-2"
            onClick={handleDeleteSelectedFile}
            style={{ cursor: 'pointer' }}
          >
            X
          </small>
          {newFile.file_name}{' '}
        </span>
      )}
    </div>
  );
}
