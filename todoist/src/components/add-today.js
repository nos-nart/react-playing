import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { useTheme } from 'emotion-theming';
import { useToday } from '../hooks/use-today';

const placeholders = [
  'eg. Family lunch on Sunday 11 am #Personal',
  'eg. Hang out with friends on Sat',
  'eg. Having an appointment with Mr.X on Tue',
  'eg. Go to the dentist clinic on Wed'
];

const randomPlaceholder = arr => arr[Math.floor(Math.random() * arr.length)]

function AddToday() {
  const theme = useTheme();
  const { toggleAdd, add } = useToday();
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = data => {
    add(false, data.name, false, data.time, data.at);
  }

  return <form
    onSubmit={handleSubmit(onSubmit)}
    autoComplete="off"
    css={css`
      display: flex;
      flex-direction: column;
  `}>
    <input css={css`
      flex: 1 1 0%;
      border: 1px solid #ddd;
      padding: 0.6rem 1rem;
      outline: none;
      &:focus {
        border-color: #40a9ff;
        box-shadow: 0 0 0 2px rgba(24,144,255,0.2);
      }
    `}
      name="name"
      ref={register({ required: true, message: 'cannot leave it empty' })}
      placeholder={randomPlaceholder(placeholders)}
    />
    {errors.name && errors.name.message}
    <div css={css`
      display: flex;
      align-items: center;
      margin-top: 0.5rem;
    `}>
      <input css={css`
        flex: 1 1 0%;
        border: 1px solid #ddd;
        padding: 0.6rem 1rem;
        outline: none;
        &:focus {
          border-color: #40a9ff;
          box-shadow: 0 0 0 2px rgba(24,144,255,0.2);
        }
      `}
        name="time"
        ref={register({
          pattern: /\d/i,
          message: 'Invalid type'
        })}
        placeholder="how long does it take? (mins)"
      />
      {errors.time && errors.time.message}
      <input css={css`
        width: 3.5rem;
        border: 1px solid #ddd;
        padding: 0.6rem 1rem;
      `}
        name="at"
        ref={register}
        value={dayjs().format("ddd DD")}
        disabled
      />
    </div>
    <div css={css`
      display: flex;
      align-items: center;
      margin: 0.7rem 0;
    `}>
      <button 
      type="submit"
      css={css`
        outline: none;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
        font-weight: ${theme.fwSemiBold};
        background: ${theme.green};
        color: #fff;
        text-transform: capitalize;
      `}>add task</button>
      <button 
        onClick={() => toggleAdd()}
        css={css`
          outline: none;
          cursor: pointer;
          background: none;
          border: none;
          color: ${theme.text};
          font-weight: ${theme.fwSemiBold};
          margin-left: 10px;
          transition: all 0.2s linear;
          text-transform: capitalize;
          &:hover {
            text-decoration: underline;
          }
      `}>cancel</button>
    </div>
  </form>
}

export default AddToday;
