import facepaint from 'facepaint';

const commonStyle = {
  fontXxs: '0.5rem',
  fontXs: '0.75rem',
  fontSm: '0.875rem',
  fontLg: '1.125rem',
  fontXl: '1.25rem',
  font2Xl: '1.5rem',
  fwSemiBold: '600',
  fwBold: '700',
  fwExtraBold: '800',
  muted: '#777',
  green: '#25b84c',
  red: '#f5222d',
  purple: '#722ed1',
  yellow: '#fadb14',
  orange: '#ff4f21'
};

export const day = {
  text: '#333',
  primary: '#5297ff',
  text_muted: '#808080',
  page_bg: '#f7f7f7',
  content_bg: '#fff',
  content_border: '1px solid #f1f1f1',
  toggle_bg: 'linear-gradient(to right, #f09819, #edde5d)',
  link_border: '2px solid #096dd9',
  btn_bg: '#dddddd',
  hover_color: '#ffffff33',
  project_border: '#d5d5d5',
  ...commonStyle
};

export const night = {
  text: '#ffffffde',
  primary: '#25b84c',
  text_muted: '#808080',
  page_bg: '#282828',
  content_bg: '#1f1f1f',
  content_border: '1px solid #1f1f1f',
  toggle_bg: 'linear-gradient(to right, #56ccf2, #2f80ed)',
  link_border: '2px solid #25b84c',
  btn_bg: '#535353',
  hover_color: '#ffffff33',
  project_border: '#3e3e3e',
  ...commonStyle
};

export const mq = facepaint([
  '@media(min-width: 420px)',
  '@media(min-width: 768px)',
  '@media(min-width: 920px)',
  '@media(min-width: 1120px)'
]);
