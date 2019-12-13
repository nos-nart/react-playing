import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppLayout from './layout/index';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import useTheme from './hooks/use-theme';

export default function App() {
  const t = useTheme();
  return (
    <ThemeProvider theme={{ mode: t.theme, toggle: t.setTheme }}>
      <GlobalStyle/>
      <AppLayout>
        <p>hello world</p>
        <Router>
          
        </Router>
      </AppLayout>
    </ThemeProvider>
  )
};
