import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import dayjs from 'dayjs';
import { IoMdAddCircle } from "react-icons/io";
import { FiEdit } from "react-icons/fi";

const Today = () => {
  const theme = useTheme();

  return <div css={{
    display: 'flex',
    flexDirection: 'column'
  }}>
    <p css={{ fontWeight: 600, fontSize: '1.5rem' }}>Today</p>
    {/* Overdue section */}
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      margin: '1rem 0'
    }}>
      <p css={{ display: 'flex', alignItems: 'flex-end' }}>
        <span css={{ fontWeight: 600, marginRight: '10px' }}>Today</span>
        <span css={{ fontSize: '0.875rem' }}>{dayjs().format("ddd DD MMM")}</span>
      </p>
      <ul css={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '1rem'
      }}>
        <li css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #90cdf4',
          padding: '0.5rem 0',
        }}>
          <div>
            <input type="checkbox"/>
            <span css={{ marginLeft: '10px' }}>need to brush my teeth</span>
          </div>
          <button css={{
            outline: 'none',
            border: 'none',
            background: 'transparent',
            color: theme.text,
            cursor: 'pointer'
          }}>
            <FiEdit size={20} stroke="currentColor"/>
          </button>
        </li>
      </ul>
      <button css={{
        height: '3rem',
        outline: 'none',
        border: 'none',
        padding: '0',
        background: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        color: '#5297ff',
        transition: 'all 0.2s linear',
        ':hover': {
          color: '#096dd9'
        }
      }}>
        <IoMdAddCircle size={20}/>
        <span css={{ marginLeft: '10px' }}>Add task</span>
      </button>
    </div>
  </div>
}

export default Today;
