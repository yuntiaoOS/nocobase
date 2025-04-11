/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { genStyleHook } from '../__builtins__';
import { css } from '@emotion/css';
/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
export const useStyles = genStyleHook('nb-doc-json-editor', (token) => {
  const { componentCls } = token;

  return {
    [componentCls]: {
      editor: css`
        .ProseMirror {
          min-height: 200px;
          border: 1px solid #d9d9d9;
          border-radius: 2px;
          padding: 4px 11px;
          &:hover {
            border-color: #40a9ff;
          }
          &:focus {
            border-color: #40a9ff;
            box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
            outline: none;
          }
        }
        .toolbar {
          margin-bottom: 8px;
        }
      `,
    },
  };
});
