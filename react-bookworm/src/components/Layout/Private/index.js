import React from 'react'
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/images/book.svg';

const { Header } = Layout;

export default function PrivateLayout() {
  return <Header css={css`
    background: #fff;
    box-shadow: 0 2px 8px #f0f1f2;
  `}>
    <nav css={css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}>
      <Link exact='true' to="/" css={css`
        display: flex;
        align-items: center
      `}>
        <Logo/>
        <span css={css` font-weight: 600 `}>Bookworm</span>
      </Link>
    </nav>
  </Header>
}
