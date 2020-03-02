import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';

const Overdue = ({ overdueTasks, toggleDone, remove }) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        color: ${theme.text};
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <span
          css={css`
            font-weight: 600;
            margin-right: 10px;
          `}
        >
          Overdue
        </span>
        <button
          css={css`
            border: none;
            outline: none;
            background: none;
            color: ${theme.primary};
            text-transform: capitalize;
            padding: 0;
            cursor: pointer;
            position: relative;
            overflow: hidden;

            &:hover {
              span:last-child {
                left: 0%;
              }
            }
          `}
        >
          <span>reschedule</span>
          <span
            css={css`
              width: 100%;
              height: 1px;
              background: ${theme.primary};
              transition: all 0.2s linear;
              position: absolute;
              left: -105%;
              bottom: 0px;
            `}
          ></span>
        </button>
      </div>
      {overdueTasks.map(item => (
        <li
          key={item.id}
          data-id={item.id}
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0.2rem 0;
            padding: 0.3rem 0;
            transition: all 0.1s linear;
            cursor: pointer;
          `}
        >
          <div
            css={css`
              flex: 1 1 0%;
              display: flex;
              align-items: center;
            `}
          >
            <IoIosCheckmarkCircle
              size={24}
              onClick={() => toggleDone(item.id)}
              css={css`
                fill: ${item.isDone ? '#25b84c' : '#92929226'};
              `}
            />
            <span
              css={css`
                margin-left: 10px;
                text-decoration: ${item.isDone ? 'line-through' : 'none'};
                flex: 1 1 0%;
              `}
            >
              {item.name}
            </span>
          </div>
          <button
            onClick={() => remove(item.id)}
            css={css`
              outline: none;
              border: none;
              padding: 2px 4px;
              border-radius: 3px;
              background: transparent;
              color: ${theme.text};
              cursor: pointer;
              transition: all 0.2s linear;
              &:hover {
                color: ${theme.red};
                background: #92929226;
              }
            `}
          >
            <FiTrash2 size={20} stroke="currentColor" />
          </button>
          <button
            css={css`
              outline: none;
              border: none;
              padding: 2px 4px;
              border-radius: 3px;
              background: transparent;
              color: ${theme.text};
              cursor: pointer;
              &:hover {
                color: ${theme.orange};
                background: #92929226;
              }
            `}
          >
            <FiEdit3 size={20} stroke="currentColor" />
          </button>
        </li>
      ))}
    </div>
  );
};

export default Overdue;
