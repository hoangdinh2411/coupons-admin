'use client';
import { RichTextEditor, type RichTextEditorRef } from 'mui-tiptap';
import { Box } from '@mui/system';
import { ImageType } from '../uploadFile/UploadFile';
import { filterUsedImageForEditor } from '@/helper/file';
import EditorMenuController from './EditorMenuController';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import useExtensions from './useExtensions';

const CustomRichTextEditor = forwardRef(
  (
    {
      onBlur,
      error = false,
      helpText = '',
    }: {
      onBlur: (value: string) => void;
      error?: boolean;
      helpText?: string;
    },
    ref,
  ) => {
    const [uploadedImages, setUploadedImages] = useState<ImageType[]>([]);
    const rteRef = useRef<RichTextEditorRef>(null);
    const handleBlur = async () => {
      const value = rteRef.current?.editor?.getHTML() || '';
      const cleanedAllUnusedImages = await filterUsedImageForEditor(
        value,
        uploadedImages,
      );
      if (cleanedAllUnusedImages) {
        setUploadedImages([]);
        onBlur(value);
      }
    };
    useImperativeHandle(ref, () => ({
      editor: rteRef.current?.editor,
      setContent: (html: string) => {
        const editor = rteRef.current?.editor;
        if (editor) {
          editor.commands.setContent(html);
        }
      },
      clearIfEmpty: () => {
        const editor = rteRef.current?.editor;
        if (!editor) return;

        const html = editor
          .getHTML()
          .replace(/<p><br><\/p>/g, '')
          .trim();
        if (!html || html === '<p></p>') {
          editor.commands.clearContent();
        }
      },
      clearAll: () => {
        const editor = rteRef.current?.editor;
        if (editor) {
          editor.commands.clearContent();
        }
      },
      getContent: () => {
        return rteRef.current?.editor?.getHTML() ?? '';
      },
    }));
    return (
      <Box
        marginBottom={2}
        sx={{
          '.MuiTiptap-FieldContainer-root': {
            borderRadius: 1,
            '&.MuiTiptap-FieldContainer-focused': {
              borderColor: '#e9edf6',
              '& .MuiTiptap-FieldContainer-notchedOutline': {
                borderColor: '#e9edf6',
                borderWidth: '1px',
              },
            },
            '& .MuiTiptap-FieldContainer-notchedOutline': {
              borderColor: '#e9edf6',
              borderWidth: '1px',
            },
            '& .MuiTiptap-RichTextContent-root': {
              minHeight: 300,
              maxHeight: 800,
              overflowY: 'scroll',
            },
            '& .tiptap.ProseMirror': {
              height: '100% !important',
            },
          },
        }}
      >
        <RichTextEditor
          ref={rteRef}
          onBlur={handleBlur}
          // editable={true}
          extensions={useExtensions()} // Or any Tiptap extensions you wish!
          content={'<p></p>'} // Initial content for the editor
          // Optionally include `renderControls` for a menu-bar atop the editor:
          renderControls={() => (
            <EditorMenuController
              editor={rteRef.current && rteRef.current?.editor}
              setUploadedImages={setUploadedImages}
              uploadedImages={uploadedImages}
            />
          )}
        />
        {error && <div className="text-danger">{helpText}</div>}
        {/* <Button onClick={() => console.log(rteRef.current?.editor?.getHTML())}>
        Log HTML
      </Button> */}
      </Box>
    );
  },
);

export default CustomRichTextEditor;
