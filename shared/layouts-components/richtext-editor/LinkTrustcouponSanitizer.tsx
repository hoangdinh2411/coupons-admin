import { mergeAttributes } from '@tiptap/core';
import Link from '@tiptap/extension-link';

const LinkTrustcouponSanitizer = Link.extend({
    renderHTML({ HTMLAttributes }) {
        const attrs = { ...HTMLAttributes }
        const href = attrs.href ?? ''

        try {
            const url = new URL(href)
            if (url.protocol === "https:" && url.hostname === "trustcoupon.com" && !url.port && url.pathname === "/") {
                delete attrs.target
                delete attrs.rel
            } else {
                attrs.target = "_blank"
                attrs.rel = "noopener noreferrer nofollow"
            }
        } catch { }

        return ['a', mergeAttributes(this.options.HTMLAttributes, attrs), 0]
    },

    addCommands() {
        return {
            ...this.parent?.(),
            setLink:
                attrs =>
                    ({ tr, state, dispatch }) => {
                        const { from, to, empty } = state.selection
                        const markType = state.schema.marks.link

                        if (!markType) return false

                        if (empty) {
                            // 👉 Nếu không bôi đen text nào → chèn text href mới ở caret
                            tr.insertText(attrs.href, from, to)
                            tr.addMark(from, from + attrs.href.length, markType.create(attrs))
                        } else {
                            // 👉 Nếu có bôi đen → chỉ áp link trong selection, không extend ra ngoài
                            tr.addMark(from, to, markType.create(attrs))
                        }

                        if (dispatch) {
                            dispatch(tr)
                        }
                        return true
                    },
        }
    },
});

export default LinkTrustcouponSanitizer;
