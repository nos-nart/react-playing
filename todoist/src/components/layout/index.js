import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { Header } from './Header/index';
import { SideBar } from './SideBar';
import { mq } from '../../styles/theme';
import { useTheme } from 'emotion-theming';
import { TodayProvider } from '../../hooks/use-today';

export const AppLayout = ({ children }) => {
  const theme = useTheme();

  const content = css(mq({
    width: ['100%', '100%', '992px'],
    margin: '0 auto',
    padding: ['0 1em', '0 2em', '0 3em', '0 4em'],
  }));

  return <>
    <Header />
    <div css={content}>
      <SideBar />
      <TodayProvider>
        <div css={{
          marginLeft: '266px',
          minHeight: '100vh',
          background: theme.content_bg,
          borderRight: theme.content_border
        }}>
          <div css={{
            verticalAlign: 'top',
            paddingLeft: '44px',
            paddingRight: '20px',
            paddingTop: '80px',
            paddingBottom: '84px'
          }}>
            { children }
          </div>
        </div>
      </TodayProvider>
    </div>
  </>
};
