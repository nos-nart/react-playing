import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Loader from './loader';
import AddToday from './add-today';
import dayjs from 'dayjs';
import { IoMdAddCircle, IoIosCheckmarkCircle } from 'react-icons/io';
import { FiEdit3, FiTrash2, FiInbox } from 'react-icons/fi';

const TodayTasks = ({
  todayTasks,
  loading,
  isAdding,
  toggleAdd,
  remove,
  toggleDone
}) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
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
          {todayTasks.length < 0 ? (
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
            todayTasks.map(item => (
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
            <IoMdAddCircle size={24} />
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
  );
};

export default TodayTasks;
