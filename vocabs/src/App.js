import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import ListWords from './ListWords';

function App() {
  return (
    <div css={{
      maxWidth: '30vw',
      margin: '1rem auto',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      padding: '1rem'
    }}>
      <p css={{
        fontWeight: '600',
        fontSize: '1.5rem',
        textAlign: 'center'
      }}>Hello world</p>
      <ListWords/>
    </div>
  );
}

export default App;
