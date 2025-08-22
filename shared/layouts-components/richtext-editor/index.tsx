'use client';
import { RichTextEditor, type RichTextEditorRef } from 'mui-tiptap';
import { Box } from '@mui/system';
import EditorMenuController from './EditorMenuController';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import useExtensions from './useExtensions';
import { Button } from '@mui/material';
function sanitizeTrustcouponAnchors(html: string): string {
  // Parse HTML rồi loại target/rel/ref khỏi mọi <a href*="trustcoupon.com">
  const doc = new DOMParser().parseFromString(html, 'text/html');
  doc.querySelectorAll<HTMLAnchorElement>('a[href*="trustcoupon.com"]').forEach(a => {
    a.removeAttribute('target');
    a.removeAttribute('rel');
    a.removeAttribute('ref');
  });
  return doc.body.innerHTML;
}

function isSemanticallyEmptyHTML(html: string): boolean {
  if (!html) return true;

  // Loại ký tự zero-width & khoảng trắng
  const cleaned = html.replace(/[\u200B-\u200D\uFEFF]/g, "").trim();
  if (!cleaned) return true;

  // Một số pattern rỗng phổ biến
  const emptyPatterns = new Set(["<p></p>", "<p><br></p>", "<p>&nbsp;</p>"]);
  if (emptyPatterns.has(cleaned)) return true;

  const doc = new DOMParser().parseFromString(cleaned, "text/html");
  const text = (doc.body.textContent || "").replace(/\s|\u00A0/g, "");
  const hasMeaningfulText = text.length > 0;

  // Nếu có các node “nội dung thực” thì không rỗng
  const hasNonTextContent =
    doc.body.querySelector(
      "img,video,audio,iframe,embed,table,hr,ul,ol,li,pre,code,blockquote,figure"
    ) !== null;

  return !hasMeaningfulText && !hasNonTextContent;
}
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

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
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
        return result
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
          console.log(result)
        }}>
          Log HTML
        </Button>

      </Box >

    );
  },
);

export default CustomRichTextEditor;
