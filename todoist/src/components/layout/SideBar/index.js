import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

export const SideBar = () => {
  const theme = useTheme();

  return <div data-testid="sidebar"
    css={{
      height: `calc(100vh - 50px)`,
      position: 'fixed',
      width: '266px',
      background: theme.page_bg,
      paddingTop: '74px'
    }}>
      
  </div>
};
