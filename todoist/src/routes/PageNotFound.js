import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { createPortal } from 'react-dom';
import { useTheme } from 'emotion-theming';
import usePortal from '../hooks/use-portal';
import { ReactComponent as NotFound } from '../assets/images/404.svg';
import { Link } from 'react-router-dom';

const Portal = ({ id, children }) => {
  const target = usePortal(id);
  return createPortal(children, target);
};

export default function PageNotFound() {
  const theme = useTheme();

  return (
    <Portal id="modal-root">
      <div
        css={{
          position: 'fixed',
          zIndex: '1',
          left: '0',
          top: '0',
          width: '100vw',
          height: '100vh',
          overflow: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          background: theme.page_bg
        }}
      >
        <span
          css={css`
            font-size: 2rem;
          `}
        >
          404
        </span>
        <span
          css={css`
            margin: 1rem 0;
          `}
        >
          Looks like page doesn't exist
        </span>
        <NotFound />
        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1rem'
          }}
        >
          <Link to="/">
            <button
              css={{
                border: 'none',
                borderRadius: '3px',
                outline: 'none',
                padding: '5px 15px',
                cursor: 'pointer',
                fontWeight: '700',
                fontFamily: 'Inconsolata',
                background: '#28b561',
                color: '#fff'
              }}
            >
              take me{' '}
              <span role="img" aria-label="house">
                🏠
              </span>
            </button>
          </Link>
        </div>
      </div>
    </Portal>
  );
}
