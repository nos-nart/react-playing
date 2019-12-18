import React from 'react';
import Logo from './logo';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { mq } from '../../../styles/theme';
import {ToggleMode} from './toggle-mode';
import { FiPlus, FiMenu } from "react-icons/fi";

export const Header = () => {
  const theme = useTheme();

  const nav = css(mq({
    width: ['100%', '100%', '992px'],
    margin: '0 auto',
    padding: ['0 1em', '0 2em', '0 4em', '0 4em'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }));

  const logo = css(mq({
    display: ['none', 'none', 'block', 'block']
  }));

  const menu__icon = css(mq({
    display: ['block', 'block', 'none', 'none']
  }));

  return <header data-testid="header">
    <div css={{
      height: '44px',
      width: '100vw',
      boxShadow: '0 1px 2px #00000026',
      display: 'flex',
      alignItems: 'center'
    }}>
      <nav css={nav}>
        <div css={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <Logo css={logo}/>
          <FiMenu size={23} css={menu__icon}/>
        </div>
        <div css={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <button css={{
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
            marginRight: '1rem',
            padding: '3px 4px',
            borderRadius: '3px',
            transition: 'all 0.3s ease-in',
            background: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ':hover': {background: theme.btn_bg}
          }}>
            <FiPlus size={23} css={{
              color: theme.text
            }}/>
          </button>
          <ToggleMode/>
        </div>
      </nav>
    </div>
  </header>
};

