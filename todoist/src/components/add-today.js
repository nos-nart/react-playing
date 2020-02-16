import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
// import { useTheme } from 'emotion-theming';

const placeholders = [
  'eg. Family lunch on Sunday 11 am #Personal',
  'eg. Hang out with friends on Sat',
  'eg. Having an appointment with Mr.X on Tue',
  'eg. Go to the dentist clinic on Wed'
]

const randomPlaceholder = arr => arr[Math.floor(Math.random() * arr.length)]

const addToday = () => {

  return <form css={css`
    display: flex;
    flex-direction: column;
  `}>
    <div css={css`
      display: flex;
      align-items: center;
    `}>
      <input css={css`
        flex: 1 1 0%;
        border: 1px solid #ddd;
        padding: 0.5rem 1rem;
        outline: none;
        &:focus {
          border-color: #40a9ff;
          box-shadow: 0 0 0 2px rgba(24,144,255,0.2);
        }
      `}
        placeholder={randomPlaceholder(placeholders)}
      />
      <input css={css`
        width: 3rem;
        border: 1px solid #ddd;
        padding: 0.5rem 1rem;
      `}
        placeholder={dayjs().format("ddd DD")}
        disabled
      />
    </div>
    <div css={css`
      display: flex;
      align-items: center;
      margin: 0.3rem 0;
    `}>
      <button css={css`

      `}>Add</button>
    </div>
  </form>
}

export default addToday;
