import { mergeAttributes } from '@tiptap/core';
import { ResizableImage } from 'mui-tiptap';
import ResizableImageNodeView from './ResizableImageNodeView';
import { ReactNodeViewRenderer } from '@tiptap/react';

export const CustomResizableImage = ResizableImage.extend({
  addAttributes() {
    return {
      ...this.parent?.(), // giữ lại các attr gốc như src, alt, width, height
      caption: {
        default: '',
        parseHTML: (element) => element.querySelector('p')?.innerText || '',
        renderHTML: (attrs) => ({ caption: attrs.caption }),
      },
    };
  },
  renderHTML({ HTMLAttributes }) {
    const { caption, ...imgAttrs } = HTMLAttributes;
    return [
      'div',
      { 'data-type': 'image-wrapper', class: 'image-wrapper' },
      ['img', mergeAttributes(imgAttrs)],
      ['p', { class: 'image-caption' }, String(caption ?? '')],
    ];
  },
  addNodeView() {
    return ReactNodeViewRenderer(ResizableImageNodeView);
  },
});
