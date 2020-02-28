import React, { useState } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Overdue from '../components/overdue';
import TodayTasks from '../components/today-tasks';

const Today = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <p
        css={css`
          font-weight: 600;
          font-size: ${theme.font2Xl};
        `}
      >
        Today
      </p>
      <Overdue />
      <TodayTasks />
    </div>
  );
};

export default Today;
