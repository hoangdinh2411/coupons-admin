'use client'
import React, { useRef } from 'react'
import { NodeViewWrapper, NodeViewProps } from '@tiptap/react'

const ResizableImageNodeView = ({ node, updateAttributes }: NodeViewProps) => {
  const { src, alt, caption, width, height } = node.attrs
  const captionRef = useRef<HTMLParagraphElement>(null)

  return (
    <NodeViewWrapper className="image-wrapper" data-type="image-wrapper">
      <img
        src={src}
        alt={alt}
        style={{
          width: width || '300px',
          height: height || 'auto',
          display: 'block',
        }}
      />
      <figcaption
        ref={captionRef}
        className="image-caption"
        contentEditable
        suppressContentEditableWarning
        onBlur={() =>
          updateAttributes({ caption: captionRef.current?.innerText ?? '' })
        }
      >
        {caption}
      </figcaption>
    </NodeViewWrapper>
  )
}

export default ResizableImageNodeView
