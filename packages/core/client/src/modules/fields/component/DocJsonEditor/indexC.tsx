/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */
import React from 'react';
import { useField } from '@formily/react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Button, Space } from 'antd';
import {
  BoldOutlined,
  ItalicOutlined,
  StrikethroughOutlined,
  OrderedListOutlined,
  UnorderedListOutlined,
  CodeOutlined,
  UndoOutlined,
  RedoOutlined,
} from '@ant-design/icons';
import { useStyles } from './style';

const DocJsonEditor = (props) => {
  const field = useField();
  const { editor } = useStyles();
  const editorInstance = useEditor({
    extensions: [StarterKit],
    content: field.value || '',
    onUpdate: ({ editor }) => {
      field.onInput(editor.getJSON());
    },
  });

  if (!editorInstance) {
    return null;
  }

  return (
    <div className={editor}>
      <Space className="toolbar">
        <Button
          type={editorInstance.isActive('bold') ? 'primary' : 'default'}
          icon={<BoldOutlined />}
          onClick={() => editorInstance.chain().focus().toggleBold().run()}
        />
        <Button
          type={editorInstance.isActive('italic') ? 'primary' : 'default'}
          icon={<ItalicOutlined />}
          onClick={() => editorInstance.chain().focus().toggleItalic().run()}
        />
        <Button
          type={editorInstance.isActive('strike') ? 'primary' : 'default'}
          icon={<StrikethroughOutlined />}
          onClick={() => editorInstance.chain().focus().toggleStrike().run()}
        />
        <Button
          type={editorInstance.isActive('bulletList') ? 'primary' : 'default'}
          icon={<UnorderedListOutlined />}
          onClick={() => editorInstance.chain().focus().toggleBulletList().run()}
        />
        <Button
          type={editorInstance.isActive('orderedList') ? 'primary' : 'default'}
          icon={<OrderedListOutlined />}
          onClick={() => editorInstance.chain().focus().toggleOrderedList().run()}
        />
        <Button
          type={editorInstance.isActive('code') ? 'primary' : 'default'}
          icon={<CodeOutlined />}
          onClick={() => editorInstance.chain().focus().toggleCode().run()}
        />
        <Button
          icon={<UndoOutlined />}
          onClick={() => editorInstance.chain().focus().undo().run()}
          disabled={!editorInstance.can().undo()}
        />
        <Button
          icon={<RedoOutlined />}
          onClick={() => editorInstance.chain().focus().redo().run()}
          disabled={!editorInstance.can().redo()}
        />
      </Space>
      <EditorContent editor={editorInstance} />
    </div>
  );
};

export default DocJsonEditor;
