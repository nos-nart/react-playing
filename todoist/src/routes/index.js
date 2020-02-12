import React from 'react';
import Home from './Home';
import Today from './Today';
import Inbox from './Inbox';
import PageNotFound from './PageNotFound';

export const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />
  },
  {
    path: '/today',
    exact: false,
    main: () => <Today />
  },
  {
    path: '/inbox',
    exact: false,
    main: () => <Inbox />
  },
  {
    path: '',
    exact: false,
    main: () => <PageNotFound />
  }
]