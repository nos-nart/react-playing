import React from 'react'
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { NavLink } from 'react-router-dom';
import styles from './style.module.css';

export default function AuthPage({ routes, children }) {
  return (
    <div css={css`
      border-radius: 3px;
      width: 20rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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
