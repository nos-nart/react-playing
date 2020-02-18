import React, { useState } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import dayjs from 'dayjs';
import { IoMdAddCircle } from 'react-icons/io';
import { FiInbox } from 'react-icons/fi';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { useTodo } from '../hooks/use-today';
import Loader from '../components/loader';
import AddToday from '../components/add-today';
import Overdue from '../components/overdue';

const Today = () => {
  const theme = useTheme();
  const {
    today,
    loading,
    isAdding,
    toggleAdd,
    remove,
    toggleDone
  } = useTodo();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <p
        css={css`
          font-weight: 600;
          font-size: ${theme.font2Xl};
        `}
      >
        Today
      </p>
      <Overdue />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          margin: 1rem 0;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
          `}
        >
          <div>
            <span
              css={css`
                font-weight: 600;
                margin-right: 10px;
              `}
            >
              Today
            </span>
            <span
              css={css`
                font-size: ${theme.fontSm};
              `}
            >
              {dayjs().format('ddd DD MMM')}
            </span>
          </div>
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <span
              css={css`
                color: ${theme.muted};
                text-transform: uppercase;
                font-size: ${theme.fontXs};
              `}
            >
              sort by
            </span>
          </div>
        </div>
        {loading ? (
          <div
            css={css`
              display: flex;
              justify-content: center;
              padding: 1rem 0;
            `}
          >
            <Loader size={24} />
          </div>
        ) : (
          <ul
            css={css`
              display: flex;
              flex-direction: column;
              margin-top: 1rem;
              li:not(:last-child) {
                border-bottom: 1px solid ${theme.project_border};
              }
            `}
          >
            {today.length < 0 ? (
              <div
                css={css`
                  display: flex;
                  justify-content: center;
                  padding: 2rem 0;
                `}
              >
                <FiInbox size={24} />
              </div>
            ) : (
              today.map(item => (
                <li
                  key={item.id}
                  data-id={item.id}
                  css={css`
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin: 0.2rem 0;
                    padding: 0.6rem 0;
                    transition: all 0.1s linear;
                    cursor: pointer;
                  `}
                >
                  <div
                    css={css`
                      flex: 1 1 0%;
                    `}
                  >
                    <input type="checkbox" defaultChecked={item.isDone} />
                    <span
                      css={css`
                        margin-left: 10px;
                        text-decoration: ${item.isDone
                          ? 'line-through'
                          : 'none'};
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
                      background: transparent;
                      color: ${theme.text};
                      cursor: pointer;
                      transition: all 0.2s linear;
                      &:hover {
                        color: ${theme.red};
                      }
                    `}
                  >
                    <AiOutlineDelete size={20} stroke="currentColor" />
                  </button>
                  <button
                    css={css`
                      outline: none;
                      border: none;
                      background: transparent;
                      color: ${theme.text};
                      cursor: pointer;
                      &:hover {
                        color: ${theme.orange};
                      }
                    `}
                  >
                    <AiOutlineEdit size={20} stroke="currentColor" />
                  </button>
                </li>
              ))
            )}
          </ul>
        )}
        <div
          css={css`
            padding: 1rem 0;
          `}
        >
          {!isAdding ? (
            <button
              onClick={() => toggleAdd()}
              css={css`
                outline: none;
                border: none;
                padding: 0;
                background: none;
                cursor: pointer;
                display: flex;
                align-items: center;
                color: #5297ff;
                transition: all 0.2s linear;
                &:hover {
                  color: #096ddd;
                }
              `}
            >
              <IoMdAddCircle size={20} />
              <span
                css={css`
                  margin-left: 10px;
                `}
              >
                Add task
              </span>
            </button>
          ) : (
            <AddToday />
          )}
        </div>
      </div>
    </div>
  );
};

export default Today;
