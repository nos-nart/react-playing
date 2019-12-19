import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import TodayIcon from './today-icon';

const menus = [
  {
    to: '/today',
    exact: 'false',
    name: 'Today'
  },
  {
    to: '/next-7-days',
    exact: 'false',
    name: 'Next 7 days'
  },
  {
    to: '/today',
    exact: 'false',
    name: 'Today'
  },
  {
    to: '/today',
    exact: 'false',
    name: 'Today'
  },
]


export const SideBar = () => {
  const theme = useTheme();

  return <div data-testid="sidebar"
    css={{
      height: `calc(100vh - 50px)`,
      position: 'fixed',
      width: '266px',
      background: theme.page_bg,
      paddingTop: '74px',
      borderRight: theme.content_border
    }}>
      <TodayIcon />
  </div>
};
