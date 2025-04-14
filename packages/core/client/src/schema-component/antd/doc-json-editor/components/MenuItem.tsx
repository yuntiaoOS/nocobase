/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import './MenuItem.scss';
import React from 'react';
import 'remixicon/fonts/remixicon.css';

export default function MenuItem({
  icon,
  title,
  action,
  isActive = null,
}: {
  icon?: string;
  title?: string;
  action?: () => void;
  isActive?: (() => boolean) | null;
}) {
  return (
    <button className={`menu-item${isActive && isActive() ? ' is-active' : ''}`} onClick={action} title={title}>
      <i className={`ri-${icon}`} />;
    </button>
  );
}
