// FigureExtension.ts
import { Node, mergeAttributes } from '@tiptap/core';

export const ImageWrapper = Node.create({
  name: 'imageWrapper',
  group: 'block',
  content: 'inline*',
  atom: true,
  parseHTML() {
    return [{ tag: 'div.image-wrapper' }];
  },
  renderHTML({ node }) {
    const { src, alt, caption } = node.attrs;
    return [
      'div',
      { class: 'image-wrapper' },
      ['img', { src, alt }],
      ['figcaption', { class: 'image-caption' }, caption || ''],
    ];
  },
  addAttributes() {
    return {
      src: {},
      alt: { default: null },
      caption: { default: '' },
    };
  },
});

export const Figure = Node.create({
  name: 'figure',
  group: 'block',
  content: 'image figcaption',
  defining: true,

  parseHTML() {
    return [{ tag: 'figure' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ['figure', mergeAttributes(HTMLAttributes), 0];
  },
});

export const FigCaption = Node.create({
  name: 'figcaption',
  group: 'block',
  content: 'inline*',
  defining: true,
  parseHTML() {
    return [
      {
        tag: 'figcaption',
        getAttrs: (node) => ({
          class: (node as HTMLElement).getAttribute('class'),
        }),
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ['figcaption', mergeAttributes(HTMLAttributes), 0];
  },
});
