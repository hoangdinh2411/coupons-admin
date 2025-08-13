'use client';
import { uploadFile } from '@/services/file.service';
import { MenuButtonImageUpload } from 'mui-tiptap';
import React, { useState } from 'react';
import { validateFile } from '@/helper/file';
import toast from 'react-hot-toast';
import { Form, Modal } from 'react-bootstrap';
import { Box } from '@mui/system';
import { Editor } from '@tiptap/core';

export default function CustomUploadImageButton({
  imageFolder,
  editor
}: {
  imageFolder: string;
  editor: Editor | null;
}) {
  const [pendingImages, setPendingImages] = useState<any[]>([]);
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
      const images = res?.data
        ? await Promise.all(
          res?.data.map(async (image) => {
            const defaultAlt = getAltFromImageName(image.file_name);
            return {
              src: image.url,
              alt: defaultAlt,
              caption: '', // 👈 Thêm caption
              width: '300px',
              height: 'auto',
            };
          })
        )
        : []

      setPendingImages(images)
      return images
    }
    return []
  };

  const handleConfirmInsert = () => {
    if (!editor) {
      toast.error('Editor not ready');
      return;
    }
    if (!editor || pendingImages.length === 0) return;
    const isEmpty = editor.state.doc.content.size === 0;
    let nodes = [];

    if (isEmpty) {
      nodes.push({ type: 'paragraph' }); // 👈 giữ lại <p></p> đầu tiên
    }

    const pos = editor.state.selection.to;
    pendingImages.forEach((img) => {
      nodes.push({
        type: 'image',
        attrs: {
          ...img,
          caption: img.caption || img.alt,
        },
      });
      nodes.push({ type: 'paragraph' }); // 👈 đẩy con trỏ xuống dưới ảnh
    });

    editor.chain().focus().insertContentAt(pos, nodes).run();
    setPendingImages([]);
    toast.success('Đã chèn ảnh vào bài viết');
  };

  return (
    <>
      <MenuButtonImageUpload
        onUploadFiles={handleUploadImage}
        // insertImages={({ images, editor }) => {
        //   if (!editor) return
        //   const pos = editor.state.selection.to;
        //   const nodes = images.flatMap((img: any) => ([
        //     {
        //       type: 'image',
        //       attrs: {
        //         ...img,
        //         caption: img.caption || img.alt,
        //       },
        //     },
        //     { type: 'paragraph' }, // push cursor after the image
        //   ]));

        //   // Insert in one shot to avoid schema conflicts
        //   editor.chain().focus().insertContentAt(pos, nodes).run();
        // }}
        insertImages={() => { }}
        inputProps={{
          multiple: false,
        }}
      />
      <Modal
        centered
        show={pendingImages.length > 0}
        className="modal fade"
      >

        <Modal.Header closeButton>
          <Modal.Title as="h6">Create Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='px-4'>
          <h4>Enter caption for images:</h4>
          {pendingImages.map((img, idx) => (
            <Box key={idx} className="flex gap-2 items-center mb-2" display='flex' gap={2} flexDirection={'column'} alignItems='center' mb={2}>
              <img src={img.src} alt={img.alt} style={{
                width: 400,
                height: 400,
                objectFit: "cover"
              }} />

              <Form.Control
                type="text"
                placeholder="Caption..."
                value={img.caption}
                onChange={(e) => {
                  const updated = [...pendingImages];
                  updated[idx].caption = e.target.value;
                  setPendingImages(updated);
                }}
              />

            </Box>
          ))}
          <Box display='flex' justifyContent="right" gap={2}>
            <button
              onClick={() => setPendingImages([])}
              className="px-3 py-1 rounded border"
              type="button"
            >
              Hủy
            </button>
            <button
              onClick={handleConfirmInsert}
              className="px-3 py-1 rounded bg-black text-white"
              type="button"
            >
              Add image
            </button>
          </Box>
        </Modal.Body>
      </Modal >
    </>
  );
}
