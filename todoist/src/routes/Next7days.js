import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const Next7days = () => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <p css={{ fontWeight: 600, fontSize: '1.5rem' }}>Next 7 days</p>
    </div>
  );
};

export default Next7days;
