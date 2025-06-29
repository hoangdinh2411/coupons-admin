'use client';
import { Button } from '@mui/material';
import StarterKit from '@tiptap/starter-kit';
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuButtonRedo,
  MenuButtonUndo,
  MenuSelectHeading,
  MenuButtonBlockquote,
  RichTextEditor,
  MenuButtonUnderline,
  FontSize,
  MenuSelectFontSize,
  MenuSelectFontFamily,
  type RichTextEditorRef,
  MenuButtonCodeBlock,
  MenuButtonEditLink,
  LinkBubbleMenu,
  MenuButtonColorPicker,
  MenuButtonHighlightColor,
  MenuButtonImageUpload,
  MenuButtonAlignLeft,
  MenuButtonAlignCenter,
  MenuButtonAlignRight,
  MenuButtonTaskList,
  MenuButtonBulletedList,
  MenuButtonOrderedList,
  ImageNodeAttributes,
} from 'mui-tiptap';
import Placeholder from '@tiptap/extension-placeholder';
import { useRef, useState } from 'react';
import { extensions } from './extensions';
import { Box } from '@mui/system';
import { uploadFile } from '@/services/file.service';
import toast from 'react-hot-toast';
import { ImageType } from '../uploadFile/UploadFile';
import { filterUsedImageForEditor } from '@/helper/file';

function RickTextEditor({
  content,
  onBlur,
  error = false,
  helpText = '',
}: {
  content: string;
  onBlur: (value: string) => void;
  error?: boolean;
  helpText?: string;
}) {
  const rteRef = useRef<RichTextEditorRef>(null);
  const [color, setColor] = useState('');
  const [uploadedImages, setUploadedImages] = useState<ImageType[]>([]);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    rteRef.current?.editor?.chain().focus().setColor(newColor).run(); // <- apply to selection
  };

  const handleBlur = async () => {
    const value = rteRef.current?.editor?.getHTML() || '';
    const cleanedAllUnusedImages = await filterUsedImageForEditor(
      content,
      uploadedImages,
    );
    if (cleanedAllUnusedImages) {
      onBlur(value);
    }
  };

  const handleUploadImage = async (files: File[]) => {
    const editor = rteRef.current?.editor;
    const insertedImages: ImageNodeAttributes[] = [];
    if (editor) {
      const formData = new FormData();
      for (let index = 0; index < files.length; index++) {
        formData.append('files', files[index]);
      }
      formData.append('folder', 'blogs');
      const loading_id = 'loading';
      try {
        toast.loading('Uploading...', {
          id: loading_id,
        });
        const res = await uploadFile(formData);
        toast.dismiss(loading_id);
        toast.success('Uploaded');
        if (!res.success && res.message) {
          throw res.message;
        } else {
          if (res.data) {
            res.data.forEach((image) => {
              const img = {
                src: image.url,
                alt: image.file_name,
                title: image.public_id,
                width: '300px', // ✅ optionally set width
                height: 'auto',
              };
              insertedImages.push(img);
              setUploadedImages &&
                setUploadedImages((prev) => [...prev, image]);
              editor?.commands.insertContent({
                type: 'image',
                attrs: img,
              });
            });
            // Add a paragraph after the last image
            editor?.commands.insertContent({
              type: 'paragraph',
              content: [],
            });
            setTimeout(() => {
              const doc = editor.state.doc;
              let paragraphPos: number | null = null;

              doc.descendants((node, pos) => {
                if (node.type.name === 'paragraph' && node.content.size === 0) {
                  paragraphPos = pos;
                }
              });

              if (paragraphPos !== null) {
                editor
                  .chain()
                  .setTextSelection(paragraphPos + 1)
                  .focus()
                  .run();
              }
            }, 0);
          }
        }
      } catch (err: any) {
        toast.dismiss(loading_id);
        toast.error(typeof err === 'string' ? err : 'Image upload failed');
      }
    }
    return insertedImages;
  };

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
        extensions={[
          ...extensions,
          Placeholder.configure({
            // Use a placeholder:
            placeholder: 'Write something …',
          }),
        ]} // Or any Tiptap extensions you wish!
        content={content} // Initial content for the editor
        // Optionally include `renderControls` for a menu-bar atop the editor:
        renderControls={() => (
          <MenuControlsContainer>
            <MenuButtonUndo />
            <MenuButtonRedo />
            <MenuDivider />

            <MenuSelectHeading />
            <MenuSelectFontFamily
              autoWidth
              options={[
                {
                  value: 'Albert Sans',
                  label: 'Albert San',
                },
              ]}
            />
            <MenuSelectFontSize
              options={[
                {
                  value: '10px',
                  label: '10',
                },
                {
                  value: '12px',
                  label: '12',
                },
                {
                  value: '16px',
                  label: '16',
                },
                {
                  value: '18px',
                  label: '18',
                },
                {
                  value: '24px',
                  label: '24',
                },
                {
                  value: '32px',
                  label: '32',
                },
                {
                  value: '48px',
                  label: '48',
                },
                {
                  value: '64px',
                  label: '64',
                },
              ]}
              aria-label="Font sizes"
              tooltipTitle="Change font size"
              unsetOptionLabel="Reset"
            />
            <MenuDivider />
            <MenuButtonBlockquote />
            <MenuButtonBold />
            <MenuButtonItalic />
            <MenuButtonUnderline />
            <MenuButtonCodeBlock />
            <MenuDivider />
            {/*  */}
            <MenuButtonImageUpload
              onUploadFiles={handleUploadImage}
              inputProps={{
                multiple: false,
              }}
            />
            <MenuButtonColorPicker
              tooltipLabel="Text color"
              value={color}
              onChange={handleColorChange}
            >
              <b>A</b>
              <i className="bi bi-caret-down-fill mx-2"></i>
            </MenuButtonColorPicker>

            <MenuButtonHighlightColor />
            <MenuDivider />

            <MenuButtonAlignLeft />
            <MenuButtonAlignCenter />
            <MenuButtonAlignRight />
            <MenuDivider />

            {/* Link bubble will be opened when clicking on button edit  */}
            <MenuButtonEditLink />
            <LinkBubbleMenu />
            {/* <MenuButtonImageUpload  /> */}

            <MenuDivider />
            <MenuButtonBulletedList />
            <MenuButtonOrderedList />
            <MenuButtonTaskList />
          </MenuControlsContainer>
        )}
      />
      {error && <div className="text-danger">{helpText}</div>}
      {/* <Button onClick={() => console.log(rteRef.current?.editor?.getHTML())}>
        Log HTML
      </Button> */}
    </Box>
  );
}

export default RickTextEditor;
