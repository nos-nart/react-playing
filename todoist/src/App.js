import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { day, night } from './styles/theme';
import { Global, css } from "@emotion/core";
import emotionReset from 'emotion-reset';
import {AppLayout} from './components/layout/index';
import { useMode } from './hooks/use-theme';

export const App = () => {
  const { mode } = useMode();
  const theme = Object.is(mode, 'day') ? day : night;
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={theme =>
          css`
            @import url('https://fonts.googleapis.com/css?family=Gochi+Hand|Inconsolata&display=swap');
            ${emotionReset}
            html,
            body {
              box-sizing: border-box;
              background: ${theme.page_bg};
              color: ${theme.text};
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              font-family: 'Inconsolata', monospace;
            }
          `}
      />
      <AppLayout>
        <p>hello world</p>
      </AppLayout>
    </ThemeProvider>
  );
}
