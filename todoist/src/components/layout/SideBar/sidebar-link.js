import React from 'react';
import { Link } from 'react-router-dom';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

export const SidebarLink = ({active}) => {
  const theme = useTheme();

  return <Link css={{
    padding: '1rem 2rem',
    color: theme.text,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.2s cubic-bezier(0.19, 1, 0.22, 1)',
    ${active ? }
  }}/>
};
