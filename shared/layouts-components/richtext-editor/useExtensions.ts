import { useMemo } from 'react';
import { TextStyle } from '@tiptap/extension-text-style';
import { FontFamily } from '@tiptap/extension-font-family';
import { Underline } from '@tiptap/extension-underline';
import { CodeBlock } from '@tiptap/extension-code-block';
import { Color } from '@tiptap/extension-color';
import { Highlight } from '@tiptap/extension-highlight';
import { TextAlign } from '@tiptap/extension-text-align';
import { TaskList } from '@tiptap/extension-task-list';
import { TaskItem } from '@tiptap/extension-task-item';
import { Link } from '@tiptap/extension-link';
import { BulletList } from '@tiptap/extension-bullet-list';
import { OrderedList } from '@tiptap/extension-ordered-list';
import { ListItem } from '@tiptap/extension-list-item';
import StarterKit from '@tiptap/starter-kit';
import { FontSize, LinkBubbleMenuHandler, ResizableImage } from 'mui-tiptap';
import { EditorOptions } from '@tiptap/core';
import History from '@tiptap/extension-history';
import Placeholder from '@tiptap/extension-placeholder';
export default function useExtensions(): EditorOptions['extensions'] {
  return useMemo(() => {
    return [
      StarterKit.configure({
        history: false,
      }),
      Placeholder.configure({
        // Use a placeholder:
        placeholder: 'Write something here …',
      }),
      TextStyle,
      FontSize,
      FontFamily,
      Underline,
      CodeBlock,
      Link,
      ResizableImage.configure({
        HTMLAttributes: {
          class: 'editor-image',
        },
      }),
      LinkBubbleMenuHandler,
      Color,
      TextAlign.configure({
        defaultAlignment: 'left',
        types: ['heading', 'paragraph', 'image'],
      }),

      Highlight,
      TaskList,
      BulletList,
      OrderedList,
      ListItem,
      TaskItem,
      History,
    ];
  }, []);
}
