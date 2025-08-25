'use client';
import { RichTextEditor, type RichTextEditorRef } from 'mui-tiptap';
import { Box } from '@mui/system';
import EditorMenuController from './EditorMenuController';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import useExtensions from './useExtensions';
import { Button } from '@mui/material';
import { isSemanticallyEmptyHTML, replaceImageDomain, sanitizeTrustcouponAnchors } from '@/helper/editorHelper';

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


    const [editorReady, setEditorReady] = useState(false);

    const rteRef = useRef<RichTextEditorRef>(null);
    const handleBlur = () => {
      const editor = getEditor();
      if (!editor) return;
      const raw = editor.getHTML() || '';
      const cleaned = sanitizeTrustcouponAnchors(raw);
      // (tuỳ chọn) nếu muốn đồng bộ lại content đã sạch vào editor:
      if (cleaned !== raw) {
        // Không emit update để tránh side-effect khi blur
        editor.commands.setContent(cleaned, false);
      }
      const isEmpty = (editor as any).isEmpty === true || isSemanticallyEmptyHTML(cleaned);
      const result = isEmpty ? "" : cleaned;
      onBlur(result);
    };

    const getEditor = () => {
      const editor = rteRef.current?.editor;
      return editor && !editor.isDestroyed ? editor : null;
    };
    useEffect(() => {
      if (rteRef.current?.editor) {
        console.log('Initial HTML:', rteRef.current.editor.getHTML());
      }
    }, [editorReady]);

    useImperativeHandle(ref, () => ({
      editor: rteRef.current?.editor,
      setContent: (html: string) => {
        const editor = getEditor()
        if (!editor) return;
        Promise.resolve().then(() => {
          if (!editor.isDestroyed) editor.commands.setContent(html, false); // emitUpdate=false
        });
      },
      clearIfEmpty: () => {
        const editor = getEditor()
        if (!editor) return;
        editor.commands.clearContent();

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
        const raw = editor.getHTML() ?? '';
        const cleaned = sanitizeTrustcouponAnchors(raw);
        const isEmpty = (editor as any).isEmpty === true || isSemanticallyEmptyHTML(cleaned);
        const result = isEmpty ? "" : cleaned;
        const formatImageUrlResult = replaceImageDomain(result);
        return formatImageUrlResult
      },
    }));
    useEffect(() => {
      if (rteRef.current?.editor && !rteRef.current.editor.isDestroyed) {
        setEditorReady(true); // Trigger re-render
      }
    }, [rteRef.current?.editor]);


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
          content={''} // Initial content for the editor
          // Optionally include `renderControls` for a menu-bar atop the editor:
          renderControls={() =>
            editorReady && rteRef.current?.editor ? (
              <EditorMenuController
                editor={rteRef.current.editor}
                imageFolder={imageFolder}
              />
            ) : null
          }
        />



        {error && <div className="text-danger">{helpText}</div>}
        <Button onClick={() => {
          const raw = rteRef.current?.editor?.getHTML() || ''
          const cleaned = sanitizeTrustcouponAnchors(raw)
          const isEmpty = (rteRef.current?.editor)?.isEmpty === true || isSemanticallyEmptyHTML(cleaned);
          const result = isEmpty ? "" : cleaned;
          const formatImageUrlResult = replaceImageDomain(result);
          console.log(formatImageUrlResult)
        }}>
          Log HTML
        </Button>

      </Box >

    );
  },
);

export default CustomRichTextEditor;
