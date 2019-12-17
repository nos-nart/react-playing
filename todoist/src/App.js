import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { day, night } from './styles/theme';
import { Global, css } from "@emotion/core";
import emotionNormalize from 'emotion-normalize';

export const App = () => {

  return (
    <ThemeProvider theme={night}>
      <Global
        styles={theme =>
          css`
            @import url('https://fonts.googleapis.com/css?family=Gochi+Hand|Inconsolata&display=swap');
            ${emotionNormalize}
            html,
            body {
              padding: 0;
              margin: 0;
              background: ${theme.bg};
              color: ${theme.text};
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              font-family: 'Inconsolata', monospace;
            }
          `}
      />
      <p>Hello world</p>
    </ThemeProvider>
  );
}
