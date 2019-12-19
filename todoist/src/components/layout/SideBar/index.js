import React from 'react';
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import TodayIcon from './today-icon';
import InboxIcon from './ibox-icon';
import CalendarIcon from './calendar-icon';
import { Route } from 'react-router-dom';
import { SidebarLink } from './sidebar-link';

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
]

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
}


export const SideBar = () => {
  const theme = useTheme();

  return <div data-testid="sidebar"
    css={{
      height: `calc(100vh - 50px)`,
      position: 'fixed',
      width: '266px',
      background: theme.page_bg,
      paddingTop: '74px',
      borderRight: theme.content_border
    }}>
      {showMenus(menus)}
  </div>
};
