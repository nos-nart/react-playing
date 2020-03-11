import React from 'react'
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { NavLink } from 'react-router-dom';
import styles from './style.module.css';

export default function AuthPage({ routes, children }) {
  return (
    <div css={css`
      border-radius: 3px;
      width: 25rem;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
      display: flex;
      flex-direction: column;
      margin-left: 4rem;
    `}>
      <div css={css`
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, .06);
        text-decoration: none;
      `}>
        {routes.map(route => (
          <NavLink
            key={route.name}
            to={route.path}
            activeClassName={styles.active}
            className={styles.navlink}
          >
            {route.name}
          </NavLink>
        ))}
      </div>
      <div css={css`
        display: flex;
        justify-content: center;
      `}>
        {children}
      </div>
    </div>
  )
}
