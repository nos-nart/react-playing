import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { useTodo } from '../hooks/use-today';

const Overdue = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        color: ${theme.text};
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <span
          css={css`
            font-weight: 600;
            margin-right: 10px;
          `}
        >
          Overdue
        </span>
        <button
          css={css`
            border: none;
            outline: none;
            background: none;
            color: ${theme.primary};
            text-transform: capitalize;
            padding: 0;
            cursor: pointer;
            position: relative;
            overflow: hidden;

            &:hover {
              span:last-child {
                left: 0%;
              }
            }
          `}
        >
          <span>reschedule</span>
          <span
            css={css`
              width: 100%;
              height: 1px;
              background: ${theme.primary};
              transition: all 0.2s linear;
              position: absolute;
              left: -105%;
              bottom: 0px;
            `}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Overdue;
