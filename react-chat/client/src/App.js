import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppLayout from './layout/index';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import useTheme from './hooks/use-theme';
import Loadable from 'react-loadable';
import Loader from './components/Loader/index';

const DynamicJoin = Loadable({
  loader: () => import('./components/Join'),
  loading: Loader
})

const DynamicChat = Loadable({
  loader: () => import('./components/Chat'),
  loading: Loader
})

export default function App() {
  const t = useTheme();
  return (
    <ThemeProvider theme={{ mode: t.theme, toggle: t.setTheme }}>
      <GlobalStyle/>
      <AppLayout>
        <Router>
          <Route path="/" exact component={DynamicJoin} />
          <Route path="/chat" component={DynamicChat} />
        </Router>
      </AppLayout>
    </ThemeProvider>
  )
};
