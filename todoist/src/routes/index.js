import React from 'react';
import Home from './Home';
import Today from './Today';
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
    path: '',
    exact: false,
    main: () => <PageNotFound />
  }
]