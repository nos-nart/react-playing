import React, { useState } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Overdue from '../components/overdue';
import TodayTasks from '../components/today-tasks';
import { useTodo } from '../hooks/use-today';

const Today = () => {
  const theme = useTheme();
  const {
    today,
    loading,
    isAdding,
    toggleAdd,
    remove,
    toggleDone,
    overdue
  } = useTodo();

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
      {overdue && overdue.length ? (
        <Overdue
          remove={remove}
          overdueTasks={overdue}
          toggleDone={toggleDone}
        />
      ) : (
        <></>
      )}
      <TodayTasks
        todayTasks={today}
        loading={loading}
        isAdding={isAdding}
        toggleAdd={toggleAdd}
        remove={remove}
        toggleDone={toggleDone}
      />
    </div>
  );
};

export default Today;
