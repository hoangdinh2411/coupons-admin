'use client';
import React, { useEffect, useState } from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  DraftHandleValue,
  DraftEditorCommand,
  convertToRaw,
  RawDraftContentState,
  convertFromRaw,
} from 'draft-js';
import 'draft-js/dist/Draft.css';

type StyleButtonProps = {
  label: string;
  style: string;
  onToggle: (style: string) => void;
};

const StyleButton: React.FC<StyleButtonProps> = ({
  label,
  style,
  onToggle,
}) => {
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onToggle(style);
  };

  return (
    <button
      type="button"
      onMouseDown={handleMouseDown}
      style={{
        marginRight: '4px',
        border: 'none',
        background: 'rgba(233, 237, 246, 0.2)',
        cursor: 'pointer',
        padding: '4px 8px',
      }}
    >
      {label}
    </button>
  );
};

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },
];

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];

export interface RichTextEditorProps {
  placeholder?: string;
  content?: RawDraftContentState;
  onChange?: (raw: RawDraftContentState) => void;
}
const RichTextEditor: React.FC = ({
  placeholder,
  content,
  onChange,
}: RichTextEditorProps) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleChange = (state: EditorState) => {
    setEditorState(state);
  };
  useEffect(() => {
    if (content) {
      setEditorState(EditorState.createWithContent(convertFromRaw(content)));
    }
  }, [content]);

  const handleKeyCommand = (
    command: DraftEditorCommand,
    state: EditorState,
  ): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(state, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const toggleInlineStyle = (style: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  return (
    <div
      style={{
        border: '1px solid rgb(233, 237, 246)',
        padding: '6px 12px',
        borderRadius: 6,
      }}
    >
      <div style={{ marginBottom: '8px' }}>
        {BLOCK_TYPES.map((type) => (
          <StyleButton
            key={type.label}
            label={type.label}
            style={type.style}
            onToggle={toggleBlockType}
          />
        ))}
      </div>
      <div style={{ marginBottom: '8px' }}>
        {INLINE_STYLES.map((type) => (
          <StyleButton
            key={type.label}
            label={type.label}
            style={type.style}
            onToggle={toggleInlineStyle}
          />
        ))}
      </div>
      <div
        style={{
          borderTop: '1px solid #ccc',
          paddingTop: '10px',
          height: '150px',
        }}
      >
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={handleChange}
          placeholder={placeholder || 'Type your content here...'}
          onBlur={() => {
            const raw = convertToRaw(editorState.getCurrentContent());
            if (onChange) {
              onChange(raw);
            }
          }}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
