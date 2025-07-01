'use client';
import { Editor } from '@tiptap/core';
import { useRef } from 'react';

export default function useRickTextEditor() {
  const rteRef = useRef<{
    editor: Editor | null;
    clearIfEmpty: () => void;
    clearAll: () => void;
    getContent: () => string;
    setContent: (html: string) => void;
  }>(null);
  return {
    rteRef: rteRef,
    get editor() {
      return rteRef.current?.editor || null;
    },
    getContent: () => rteRef.current?.getContent?.() ?? '',
    setContent: (html: string) => rteRef.current?.setContent?.(html),
    clearAll: () => rteRef.current?.clearAll?.(),
    clearIfEmpty: () => rteRef.current?.clearIfEmpty?.(),
  };
}
