import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const Inbox = () => {
  return <div css={{
    display: 'flex',
    flexDirection: 'column'
  }}>
    <p css={{ fontWeight: 600, fontSize: '1.5rem' }}>Inbox</p>
  </div>
}

export default Inbox;
