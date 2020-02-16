import React, { useState } from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import dayjs from 'dayjs';
import { IoMdAddCircle } from "react-icons/io";
import { FiEdit, FiInbox } from "react-icons/fi";
import { useToday } from "../hooks/use-today";
import Loader from '../components/loader';
import AddToday from '../components/add-today';

const Today = () => {
  const theme = useTheme();
  const { today, loading } = useToday();
  const [isAdding, setIsAdding] = useState(true);

  return <div css={css`
    display: flex;
    flex-direction: column;
  `}>
    <p css={css`
      font-weight: 600;
      font-size: ${theme.font2Xl}`}>Today</p>
    {/* Overdue section */}
    <div css={css`
      display: flex;
      flex-direction: column;
      margin: 1rem 0;
    `}>
      <p css={css` display: flex; align-items: flex-end; `}>
        <span css={css` font-weight: 600; margin-right: 10px; `}>Today</span>
        <span css={css` font-size: ${theme.fontSm} `}>{dayjs().format("ddd DD MMM")}</span>
      </p>
      { loading ? <div css={css`
          display: flex;
          justify-content: center;
          padding: 1rem 0
        `}>
          <Loader size={24}/>
        </div> : <ul css={css`
          display: flex;
          flex-direction: column;
          margin-top: 1rem
        `}>
          { today.length < 0 ? <div css={css`
            display: flex;
            justify-content: center;
            padding: 2rem 0;
          `}><FiInbox size={24}/></div> :
            today.map(item => <li key={item.id} css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
              border-bottom: 1px solid ${theme.project_border};
              margin: 0.2rem 0;
              padding: 0.8rem 0;
              transition: all 0.1s linear;
              cursor: pointer;
              &:hover {
                background: ${theme.project_border}
              }
          `}>
            <div css={css`
              flex: 1 1 0%
            `}>
              <input type="checkbox"/>
              <span css={css`
                margin-left: 10px;
                text-decoration: ${item.isDone ? 'line-through' : 'none'}
              `}>{item.name}</span>
            </div>
            <span css={css`
              font-size: ${theme.fontSm};
              width: 10%
            `}>{item.timeSpend} mins</span>
            <button css={css`
              width: 10%;
              outline: none;
              border: none;
              background: transparent;
              color: ${theme.text};
              cursor: pointer;
            `}>
              <FiEdit size={16} stroke="currentColor"/>
            </button>
          </li>)}
        </ul>
      }
      <div css={css`
        padding: 1rem 0;
      `}>
        {
          !isAdding ? <button css={css`
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
          `}>
            <IoMdAddCircle size={20}/>
            <span css={css` margin-left: 10px `}>Add task</span>
          </button> : <AddToday />
        }
      </div>
    </div>
  </div>
}

export default Today;
