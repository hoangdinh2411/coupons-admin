'use client';
import { uploadFile } from '@/services/file.service';
import { MenuButtonImageUpload } from 'mui-tiptap';
import React from 'react';
import { ImageType } from '../uploadFile/UploadFile';

export default function CustomUploadImageButton({
  uploadedImages,
  setUploadedImages,
}: {
  uploadedImages: ImageType[];
  setUploadedImages: React.Dispatch<React.SetStateAction<ImageType[]>>;
}) {
  const handleUploadImage = async (files: File[]) => {
    const formData = new FormData();
    for (let index = 0; index < files.length; index++) {
      formData.append('files', files[index]);
    }
    formData.append('folder', 'blogs');

    const res = await uploadFile(formData);
    if (!res.success && res.message) {
      return [];
    }
    if (res.data && res.data.length > 0) {
      setUploadedImages([...uploadedImages, ...res.data]);
    }
    return res?.data
      ? res?.data.map((image) => ({
          src: image.url,
          alt: image.file_name,
          width: '300px', // ✅ optionally set width
          height: 'auto',
        }))
      : [];
  };
  return (
    <MenuButtonImageUpload
      onUploadFiles={handleUploadImage}
      inputProps={{
        multiple: false,
      }}
    />
  );
}
