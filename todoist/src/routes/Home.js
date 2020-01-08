import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { ReactComponent as TodoList } from '../assets/images/todolist.svg';

const Home = () => {
  const theme = useTheme();

  return <div css={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '70vh'
  }}>
    <TodoList/>
    <p css={{
      textAlign: 'center',
      margin: '2rem',
      lineHeight: '1.5rem',
      fontSize: '0.875rem'
    }}>
      Todoist clone is built using React(Hooks, Context)<br/>Firebase & React Testing library.
    </p>
  </div>
}

export default Home;
