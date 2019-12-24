import facepaint from 'facepaint';

// blue: '#5297ff',
// green: '#25b84c',
// violet: '#a970ff',
// orange: '#de4c4a',

export const day = {
  text: '#333',
  text_muted: '#808080',
  page_bg: '#f7f7f7',
  content_bg: '#fff',
  content_border: '1px solid #f1f1f1',
  toggle_bg: 'linear-gradient(to right, #f09819, #edde5d)',
  link_border: '2px solid #5297ff',
  btn_bg: '#dddddd',
  hover_color: '#ffffff33'
};

export const night = {
  text: '#ffffffde',
  text_muted: '#808080',
  page_bg: '#282828',
  content_bg: '#1f1f1f',
  content_border: '1px solid #1f1f1f',
  toggle_bg: 'linear-gradient(to right, #56ccf2, #2f80ed)',
  link_border: '2px solid #25b84c',
  btn_bg: '#535353',
  hover_color: '#ffffff33'
};

export const mq = facepaint([
  '@media(min-width: 420px)',
  '@media(min-width: 768px)',
  '@media(min-width: 920px)',
  '@media(min-width: 1120px)'
]);
