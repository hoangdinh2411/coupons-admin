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
        ? await Promise.all(
          res?.data.map(async (image) => {
            const defaultAlt = getAltFromImageName(image.file_name);
            const caption = window.prompt(
              `Enter caption for image "${defaultAlt}"`,
              defaultAlt
            ); // 👈 Nhập caption tại đây

            return {
              src: image.url,
              alt: defaultAlt,
              caption: caption || '', // 👈 Thêm caption
              width: '300px',
              height: 'auto',
            };
          })
        )
        : [];
    }
    return [];
  };
  return (
    <MenuButtonImageUpload
      onUploadFiles={handleUploadImage}
      insertImages={({ images, editor }) => {
        images.forEach((img :any) => {
          editor?.chain().focus().insertContent({
            type: 'image',
            attrs: {
              ...img,
              caption: img.caption || img.alt
            },
          }).run()
        })
      }}
      inputProps={{
        multiple: false,
      }}
    />
  );
}
