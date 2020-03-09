import React from 'react';
import PageNotFound from './PageNotFound'
export const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home/>
  },
  {
    path: '',
    exact: false,
    main: () => <PageNotFound/>
  }
]