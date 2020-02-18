import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { useTheme } from 'emotion-theming';
import { useTodo } from '../hooks/use-today';

const placeholders = [
  'eg. Family lunch on Sunday 11 am #Personal',
  'eg. Hang out with friends on Sat',
  'eg. Having an appointment with Mr.X on Tue',
  'eg. Go to the dentist clinic on Wed'
];

const randomPlaceholder = arr => arr[Math.floor(Math.random() * arr.length)];

function AddToday() {
  const theme = useTheme();
  const { toggleAdd, add } = useTodo();
  const { handleSubmit, register, errors, reset } = useForm();

  const onSubmit = (data, e) => {
    add(data.title, data.at, false, false).then(ref => {
      e.target.reset();
      console.log(ref);
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-top: 0.5rem;
        `}
      >
        <input
          css={css`
            flex: 1 1 0%;
            border: 1px solid #ddd;
            padding: 0.4rem 1rem;
            outline: none;
            &:focus {
              border-color: #40a9ff;
              box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
            }
          `}
          name="title"
          ref={register({ required: true })}
          placeholder={randomPlaceholder(placeholders)}
        />
        <input
          css={css`
            width: 3.5rem;
            border: 1px solid #ddd;
            padding: 0.4rem 1rem;
          `}
          name="at"
          ref={register}
          value={dayjs().format('ddd DD')}
          disabled
        />
      </div>
      {errors.title && (
        <span
          css={css`
            font-size: ${theme.fontXs};
            color: ${theme.red};
            margin: 0.5rem 0;
          `}
        >
          Title is required
        </span>
      )}
      <div
        css={css`
          display: flex;
          align-items: center;
          margin: 0.5rem 0;
        `}
      >
        <button
          type="submit"
          css={css`
            outline: none;
            border: none;
            padding: 0.4rem 1rem;
            border-radius: 3px;
            cursor: pointer;
            font-weight: ${theme.fwSemiBold};
            background: ${theme.green};
            color: #fff;
            text-transform: capitalize;
          `}
        >
          add task
        </button>
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
          `}
        >
          cancel
        </button>
      </div>
    </form>
  );
}

export default AddToday;
