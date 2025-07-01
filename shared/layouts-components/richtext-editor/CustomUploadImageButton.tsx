'use client';
import { uploadFile } from '@/services/file.service';
import { MenuButtonImageUpload } from 'mui-tiptap';
import React from 'react';
import { ImageType } from '../uploadFile/UploadFile';
import { validateFile } from '@/helper/file';

export default function CustomUploadImageButton({
  uploadedImages,
  setUploadedImages,
  imageFolder,
}: {
  uploadedImages: ImageType[];
  imageFolder: string;
  setUploadedImages: React.Dispatch<React.SetStateAction<ImageType[]>>;
}) {
  function getAltFromImageName(fileName: string) {
    const words = fileName
      .toLowerCase()
      .split('.')[0]
      .split(/[-_\s]+/);
    if (words.length > 0) {
      words[0] =
        words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
    }
    return words.join(' ');
  }
  const handleUploadImage = async (files: File[]) => {
    const formData = new FormData();
    let isValid;
    for (let index = 0; index < files.length; index++) {
      isValid = validateFile(files[index]);
      formData.append('files', files[index]);
    }

    if (isValid) {
      formData.append('folder', imageFolder);
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
            alt: getAltFromImageName(image.file_name),
            width: '300px', // ✅ optionally set width
            height: 'auto',
          }))
        : [];
    }
    return [];
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
