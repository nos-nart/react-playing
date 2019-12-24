import React from 'react';
import Home from './Home';
import PageNotFound from './PageNotFound';

export const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />
  },
  {
    path: '',
    exact: false,
    main: () => <PageNotFound />
  }
]