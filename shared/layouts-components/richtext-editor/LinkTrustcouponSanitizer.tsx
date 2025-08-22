import { mergeAttributes } from '@tiptap/core';
import Link from '@tiptap/extension-link';

const LinkTrustcouponSanitizer = Link.extend({
    addAttributes() {
        // Kế thừa các attr mặc định rồi sửa behavior cho target/rel/ref
        const parent = this.parent?.() ?? {};

        return {
            ...parent,
            target: {
                default: null,
                parseHTML: (el: Element) => {
                    const href = el.getAttribute('href') || '';
                    if (href.includes('trustcoupon.com')) return null;
                    return el.getAttribute('target');
                },
                renderHTML: (attrs: any) => {
                    const href = attrs.href || '';
                    if (href.includes('trustcoupon.com')) return {};
                    return attrs.target ? { target: attrs.target } : {};
                },
            },
            rel: {
                default: null,
                parseHTML: (el: Element) => {
                    const href = el.getAttribute('href') || '';
                    if (href.includes('trustcoupon.com')) return null;
                    return el.getAttribute('rel');
                },
                renderHTML: (attrs: any) => {
                    const href = attrs.href || '';
                    if (href.includes('trustcoupon.com')) return {};
                    return attrs.rel ? { rel: attrs.rel } : {};
                },
            },
            // Trường hợp bạn thật sự có attr "ref" trên <a> (ít gặp), cũng remove luôn:
            ref: {
                default: null,
                parseHTML: (el: Element) => {
                    const href = el.getAttribute('href') || '';
                    if (href.includes('trustcoupon.com')) return null;
                    return el.getAttribute('ref');
                },
                renderHTML: (attrs: any) => {
                    const href = attrs.href || '';
                    if (href.includes('trustcoupon.com')) return {};
                    return attrs.ref ? { ref: attrs.ref } : {};
                },
            },
        };
    },

    // Thêm một lớp đảm bảo cuối cùng trước khi render ra DOM
    renderHTML({ HTMLAttributes }) {
        const attrs: Record<string, any> = { ...HTMLAttributes };
        const href = (attrs.href as string) || '';
        if (href.includes('trustcoupon.com')) {
            delete attrs.target;
            delete attrs.rel;
            delete attrs.ref;
        }
        return ['a', mergeAttributes(this.options.HTMLAttributes, attrs), 0];
    },
});

export default LinkTrustcouponSanitizer;
