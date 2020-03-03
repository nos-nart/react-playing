import React from 'react';
import { Link } from 'react-router-dom';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

export const SidebarLink = props => {
  const theme = useTheme();

  return (
    <Link
      {...props}
      css={{
        padding: '10px 16px 10px 5px',
        color: theme.text,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        borderRight: props.active === 'active' ? theme.link_border : '',
        fontWeight: props.active === 'active' ? '600' : '300',
        background: props.active === 'active' ? theme.content_bg : ''
      }}
    />
  );
};
