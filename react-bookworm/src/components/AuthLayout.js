import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';

export default function AuthLayout({children}) {
  return <div css={css`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `}>
    { children }
  </div>
}
