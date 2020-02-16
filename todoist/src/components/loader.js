import React from 'react';
/** @jsx jsx */ import { jsx, css, keyframes } from '@emotion/core';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`

function Loader({size}) {
  return <svg css={css`
      animation: ${rotate} 2s linear infinite;
    `}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle css={css`
      animation: ${dash} 1.5s ease-in-out infinite;
    `} cx="12" cy="12" r="10" />
  </svg>
}

export default Loader;
