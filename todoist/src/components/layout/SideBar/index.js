import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import TodayIcon from './today-icon';
import InboxIcon from './ibox-icon';
import CalendarIcon from './calendar-icon';
import { Route } from 'react-router-dom';
import { SidebarLink } from './sidebar-link';
import { FiPlus, FiChevronRight } from "react-icons/fi";

const menus = [
  {
    to: '/inbox',
    exact: false,
    label: 'Inbox',
    icon: <InboxIcon/>
  },
  {
    to: '/today',
    exact: false,
    label: 'Today',
    icon: <TodayIcon/>
  },
  {
    to: '/next-7-days',
    exact: false,
    label: 'Next 7 days',
    icon: <CalendarIcon/>
  }
];

const CustomMenuLink = ({ to, activeOnlyWhenExact, label, icon }) => {
  return <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({match}) => {
      let active = match ? 'active' : '';
      return <SidebarLink active={active} to={to}>
        {icon}
        <span css={{ marginLeft: '0.5rem' }}>{label}</span>
      </SidebarLink>
    }}
  />
};

const showMenus = menus => {
  return menus.map((m, index) => {
    return <CustomMenuLink key={index} to={m.to} activeOnlyWhenExact={m.exact} label={m.label} icon={m.icon}/>
  })
};

export const SideBar = () => {
  const theme = useTheme();

  return <div data-testid="sidebar"
    css={{
      display: 'flex',
      flexDirection: 'column',
      height: `calc(100vh - 50px)`,
      position: 'fixed',
      width: '266px',
      background: theme.page_bg,
      paddingTop: '74px',
      borderRight: theme.content_border
    }}>
      {showMenus(menus)}
      <div css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 16px 10px 5px',
        cursor: 'pointer',
        borderBottom: `1px solid ${theme.project_border}`
      }}>
        <div css={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <FiChevronRight size={20}/>
          <span css={{ marginLeft: '5px' }}>Projects</span>
        </div>
        <button css={{
          border: 'none',
          outline: 'none',
          borderRadius: '3px',
          background: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: theme.text,
          padding: '3px',
          cursor: 'pointer'
        }}>
          <FiPlus size={20}/>
        </button>
      </div>
  </div>
};
