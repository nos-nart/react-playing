import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import * as ROUTES from '../../../constants/routes';
import AuthPage from '../../Pages/AuthPage'
import { ReactComponent as Working } from '../../../assets/images/working.svg';

export default function AuthLayout({children}) {
  const routes = [
    {
      path: ROUTES.LOGIN,
      name: 'Login'
    },
    {
      path: ROUTES.REGISTER,
      name: 'Register'
    }
  ]

  return <div css={css`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
  `}>
    <div css={css`
      display: flex;
      align-items: center;
    `}>
      <Working/>
      <AuthPage routes={routes}>
        { children }
      </AuthPage>
    </div>
  </div>
}
