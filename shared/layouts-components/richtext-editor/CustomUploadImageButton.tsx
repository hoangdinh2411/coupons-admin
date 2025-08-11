'use client';
import { uploadFile } from '@/services/file.service';
import { MenuButtonImageUpload } from 'mui-tiptap';
import React from 'react';
import { validateFile } from '@/helper/file';
import toast from 'react-hot-toast';

export default function CustomUploadImageButton({
  imageFolder,
}: {
  imageFolder: string;
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
      toast.success('Uploaded success')
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
        if (!editor) return
        const pos = editor.state.selection.to;
        const nodes = images.flatMap((img: any) => ([
          {
            type: 'image',
            attrs: {
              ...img,
              caption: img.caption || img.alt,
            },
          },
          { type: 'paragraph' }, // push cursor after the image
        ]));

        // Insert in one shot to avoid schema conflicts
        editor.chain().focus().insertContentAt(pos, nodes).run();
      }}
      inputProps={{
        multiple: false,
      }}
    />
  );
}
