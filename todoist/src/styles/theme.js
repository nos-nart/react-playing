import facepaint from 'facepaint';

export const day = {
  text: '#333',
  text_muted: '#808080',
  page_bg: '#fff',
  content_bg: '#f7f7f7',
  toggle_bg: 'linear-gradient(to right, #f09819, #edde5d)',
  blue: '#5297ff',
  green: '#25b84c',
  violet: '#a970ff',
  orange: '#de4c4a',
  hover_color: '#ffffff33'
};

export const night = {
  text: '#ffffffde',
  page_bg: '#282828',
  content_bg: '#1f1f1f',
  toggle_bg: 'linear-gradient(to right, #56ccf2, #2f80ed)',
  blue: '#5297ff',
  green: '#25b84c',
  violet: '#a970ff',
  orange: '#de4c4a',
  hover_color: '#ffffff33'
};

export const mq = facepaint([
  '@media(min-width: 420px)',
  '@media(min-width: 920px)',
  '@media(min-width: 1120px)'
]);
