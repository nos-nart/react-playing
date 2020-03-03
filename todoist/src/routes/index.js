import React from 'react';
import Home from './Home';
import Today from './Today';
import Inbox from './Inbox';
import Next7days from './Next7days';
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
    path: '/next-7-days',
    exact: false,
    main: () => <Next7days />
  },
  {
    path: '',
    exact: false,
    main: () => <PageNotFound />
  }
];
