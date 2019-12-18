import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { useMode } from '../../../hooks/use-theme';
import { FiSun, FiMoon } from "react-icons/fi";

export const ToggleMode = () => {
  const theme = useTheme();
  const {mode, toggleMode} = useMode();
  const isDay = Object.is(mode, 'day') ? true : false;
  let _mode = Object.is(mode, 'day') ? 'night' : 'day';
  return <button onClick={() => toggleMode(_mode)}
    css={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '3rem',
      height: '1.2rem',
      borderRadius: '30px',
      border: 'none',
      cursor: 'pointer',
      outline: 'none',
      background: theme.toggle_bg,
      overflow: 'hidden'
    }}
  >
    <span
      css={{
        position: 'absolute',
        transition: 'all 0.5s linear',
        left: '5px',
        transform: isDay ? 'translateY(1px)' : 'translateY(100px)',
        color: '#fff'
      }}
    >
      <FiSun size={15} />
    </span>
    <span
      css={{
        position: 'absolute',
        transition: 'all 0.5s linear',
        right: '5px',
        transform: isDay ? 'translateY(-100px)' : 'translateY(1px)',
        color: '#fff'
      }}
    >
      <FiMoon size={15} />
    </span>
  </button>
};
