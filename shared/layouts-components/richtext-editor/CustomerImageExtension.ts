import { mergeAttributes } from '@tiptap/core';
import { ResizableImage } from 'mui-tiptap';
import ResizableImageNodeView from './ResizableImageNodeView';
import { ReactNodeViewRenderer } from '@tiptap/react';

export const CustomResizableImage = ResizableImage.extend({
  name: 'image',

  addAttributes() {
    return {
      ...this.parent?.(), // giữ lại các attr gốc như src, alt, width, height
      caption: {
        default: '',
        parseHTML: (element) => {
          const figcaption = element.querySelector('figcaption');
          return figcaption?.innerText || '';
        },
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
      ['figcaption', { class: 'image-caption' }, caption || ''],
    ];
  },
  addNodeView() {
    return ReactNodeViewRenderer(ResizableImageNodeView);
  },
  parseHTML() {
    return [
      {
        tag: 'div.image-wrapper',
        getAttrs: (element) => {
          const el = element as HTMLElement;
          const img = el.querySelector('img');
          const figcaption = el.querySelector('figcaption');

          return {
            src: img?.getAttribute('src') || '',
            alt: img?.getAttribute('alt') || '',
            width: img?.getAttribute('width') || '',
            height: img?.getAttribute('height') || '',
            caption: figcaption?.innerText || '',
          };
        },
      },
    ];
  },
});
