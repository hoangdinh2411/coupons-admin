'use client';
import { Button } from '@mui/material';
import StarterKit from '@tiptap/starter-kit';
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuButtonRedo,
  MenuButtonUndo,
  MenuSelectHeading,
  MenuButtonBlockquote,
  RichTextEditor,
  MenuButtonUnderline,
  FontSize,
  MenuSelectFontSize,
  MenuSelectFontFamily,
  type RichTextEditorRef,
  MenuButtonCodeBlock,
  MenuButtonEditLink,
  LinkBubbleMenu,
  MenuButtonColorPicker,
  MenuButtonHighlightColor,
  MenuButtonImageUpload,
  MenuButtonAlignLeft,
  MenuButtonAlignCenter,
  MenuButtonAlignRight,
  MenuButtonTaskList,
  MenuButtonBulletedList,
  MenuButtonOrderedList,
} from 'mui-tiptap';

import { useRef, useState } from 'react';
import { extensions } from './extensions';
import { Box } from '@mui/system';

function RickTextEditor({
  content,
  onBlur,
}: {
  content: string;
  onBlur: (value: string) => void;
}) {
  const rteRef = useRef<RichTextEditorRef>(null);
  const [color, setColor] = useState('');

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    rteRef.current?.editor?.chain().focus().setColor(newColor).run(); // <- apply to selection
  };

  const handleBlur = () => {
    const value = rteRef.current?.editor?.getHTML() || '';
    console.log(value);
    onBlur(value);
  };

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
        },
      }}
    >
      <RichTextEditor
        ref={rteRef}
        onBlur={handleBlur}
        extensions={extensions} // Or any Tiptap extensions you wish!
        content={content} // Initial content for the editor
        // Optionally include `renderControls` for a menu-bar atop the editor:
        renderControls={() => (
          <MenuControlsContainer>
            <MenuButtonUndo />
            <MenuButtonRedo />
            <MenuDivider />

            <MenuSelectHeading />
            <MenuSelectFontFamily
              autoWidth
              options={[
                {
                  value: 'Albert Sans',
                  label: 'Albert San',
                },
              ]}
            />
            <MenuSelectFontSize
              options={[
                {
                  value: '10px',
                  label: '10',
                },
                {
                  value: '12px',
                  label: '12',
                },
                {
                  value: '16px',
                  label: '16',
                },
                {
                  value: '18px',
                  label: '18',
                },
                {
                  value: '24px',
                  label: '24',
                },
                {
                  value: '32px',
                  label: '32',
                },
                {
                  value: '48px',
                  label: '48',
                },
                {
                  value: '64px',
                  label: '64',
                },
              ]}
              aria-label="Font sizes"
              tooltipTitle="Change font size"
              unsetOptionLabel="Reset"
            />
            <MenuDivider />
            <MenuButtonBlockquote />
            <MenuButtonBold />
            <MenuButtonItalic />
            <MenuButtonUnderline />
            <MenuButtonCodeBlock />
            <MenuDivider />
            {/*  */}
            <MenuButtonColorPicker
              tooltipLabel="Text color"
              value={color}
              onChange={handleColorChange}
            >
              <b>A</b>
              <i className="bi bi-caret-down-fill mx-2"></i>
            </MenuButtonColorPicker>

            <MenuButtonHighlightColor />
            <MenuDivider />

            <MenuButtonAlignLeft />
            <MenuButtonAlignCenter />
            <MenuButtonAlignRight />
            <MenuDivider />

            {/* Link bubble will be opened when clicking on button edit  */}
            <MenuButtonEditLink />
            <LinkBubbleMenu />
            {/* <MenuButtonImageUpload  /> */}

            <MenuDivider />
            <MenuButtonBulletedList />
            <MenuButtonOrderedList />
            <MenuButtonTaskList />
          </MenuControlsContainer>
        )}
      />

      {/* <Button onClick={() => console.log(rteRef.current?.editor?.getHTML())}>
        Log HTML
      </Button> */}
    </Box>
  );
}

export default RickTextEditor;
