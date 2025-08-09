'use client';
import {
  LinkBubbleMenu,
  MenuButtonAlignCenter,
  MenuButtonAlignLeft,
  MenuButtonAlignRight,
  MenuButtonBlockquote,
  MenuButtonBold,
  MenuButtonBulletedList,
  MenuButtonCodeBlock,
  MenuButtonColorPicker,
  MenuButtonEditLink,
  MenuButtonHighlightColor,
  MenuButtonItalic,
  MenuButtonOrderedList,
  MenuButtonRedo,
  MenuButtonTaskList,
  MenuButtonUnderline,
  MenuButtonUndo,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectFontFamily,
  MenuSelectFontSize,
  MenuSelectHeading,
  MenuSelectTextAlign,
} from 'mui-tiptap';
import React, { useState } from 'react';
import CustomUploadImageButton from './CustomUploadImageButton';
import { ImageType } from '../uploadFile/UploadFile';
import { Editor } from '@tiptap/core';

type Props = {
  editor: Editor | null;
  imageFolder: string;
};

export default function EditorMenuController({
  editor,
  imageFolder,
}: Props) {
  const [color, setColor] = useState('');

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    if (editor) {
      editor?.chain().focus().setColor(newColor).run(); // <- apply to selection
    }
  };

  return (
    <MenuControlsContainer>
      <MenuButtonUndo />
      <MenuButtonRedo />
      <MenuDivider />

      <MenuSelectHeading />
      <MenuSelectFontFamily
        autoWidth
        options={[
          { label: 'Comic Sans', value: 'Comic Sans MS, Comic Sans' },
          { label: 'Cursive', value: 'cursive' },
          { label: 'Monospace', value: 'monospace' },
          { label: 'Serif', value: 'serif' },
        ]}
      />
      <MenuSelectFontSize />
      <MenuDivider />
      <MenuButtonBlockquote />
      <MenuButtonBold />
      <MenuButtonItalic />
      <MenuButtonUnderline />
      <MenuButtonCodeBlock />
      <MenuDivider />
      {/*  */}
      <CustomUploadImageButton
        imageFolder={imageFolder}
      />
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

      <MenuSelectTextAlign />
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
  );
}
