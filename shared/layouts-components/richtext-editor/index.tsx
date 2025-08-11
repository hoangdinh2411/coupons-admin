'use client';
import { RichTextEditor, type RichTextEditorRef } from 'mui-tiptap';
import { Box } from '@mui/system';
import EditorMenuController from './EditorMenuController';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import useExtensions from './useExtensions';
import { Button } from '@mui/material';
import { Editor } from '@tiptap/core';

const CustomRichTextEditor = forwardRef(
  (
    {
      imageFolder,
      onBlur,
      error = false,
      helpText = '',
    }: {
      imageFolder: string;
      onBlur: (value: string) => void;
      error?: boolean;
      helpText?: string;
    },
    ref,
  ) => {
    const rteRef = useRef<RichTextEditorRef>(null);
    const handleBlur = () => {
      const editor = rteRef.current?.editor;
      if (!editor || editor.isDestroyed) return;
      const value = rteRef.current?.editor?.getHTML() || '';
      onBlur(value);
    };

    const getEditor = () => {
      const editor = rteRef.current?.editor;
      return editor && !editor.isDestroyed ? editor : null;
    };

    useImperativeHandle(ref, () => ({
      editor: rteRef.current?.editor,
      setContent: (html: string) => {
        const editor = getEditor()
        if (!editor) return;
        if (html) {
          editor.commands.setContent(html);
        }
      },
      clearIfEmpty: () => {
        const editor = getEditor()
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
        const editor = getEditor()
        if (!editor) return;
        if (editor) {
          editor.commands.clearContent();
        }
      },
      getContent: async () => {
        const editor = getEditor()
        if (!editor) return;
        return editor.getHTML() ?? '';
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
          immediatelyRender={false}
          ref={rteRef}
          onBlur={handleBlur}
          // editable={true}
          extensions={useExtensions()} // Or any Tiptap extensions you wish!
          content={'<p></p>'} // Initial content for the editor
          // Optionally include `renderControls` for a menu-bar atop the editor:
          renderControls={() => rteRef.current?.editor && !rteRef.current.editor.isDestroyed ? (
            <EditorMenuController
              editor={rteRef.current && rteRef.current?.editor}
              imageFolder={imageFolder}
            />
          ) : null}

        />
        {error && <div className="text-danger">{helpText}</div>}
        <Button onClick={() => console.log(rteRef.current?.editor?.getHTML())}>
          Log HTML
        </Button>

      </Box>

    );
  },
);

export default CustomRichTextEditor;
