import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { day, night } from './styles/theme';
import { Global, css } from "@emotion/core";
import emotionReset from 'emotion-reset';
import {AppLayout} from './components/layout/index';
import { useMode } from './hooks/use-theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from './helpers/history';
import { routes } from './routes/index';

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
      <Router history={history}>
        <AppLayout>
          <Switch>
            { routes.length && routes.map((r, index) => <Route key={index} component={r.main} path={r.path} exact={r.exact}/>)}
          </Switch>
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
}
