/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { connect, mapProps, mapReadPretty } from '@formily/react';
import React from 'react';
import { Input, ReadPretty as InputReadPretty } from '../input';
import { useStyles } from './style';

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

import CharacterCount from '@tiptap/extension-character-count';
import Highlight from '@tiptap/extension-highlight';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';

import MenuBar from './components/MenuBar';

export const DocJsonEditor = connect(
  (props) => {
    const field = useField();
    const { editor } = useStyles();
    const editorInstance = useEditor({
      extensions: [
        StarterKit.configure(),
        Highlight,
        TaskList,
        TaskItem,
        // CharacterCount.configure({
        //   limit: 10000,
        // }),
      ],
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
        {editorInstance && <MenuBar editor={editorInstance} />}
        <EditorContent className="editor__content" editor={editorInstance} />
      </div>
    );
  },
  mapProps({
    initialValue: 'defaultValue',
  }),
  mapReadPretty((props) => {
    const field = useField();
    const { editor } = useStyles();
    const editorInstance = useEditor({
      extensions: [StarterKit],
      content: field.value || '',
      editable: false,
    });

    if (!editorInstance) {
      return null;
    }
    return (
      <div className={editor}>
        {' '}
        <EditorContent editor={editorInstance} />{' '}
      </div>
    );
  }),
);
