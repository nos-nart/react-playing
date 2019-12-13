import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import style from 'styled-theming';
import { light, dark } from './theme';

const bgs = style('mode', {
  light: `${light.bg}`,
  dark: `${dark.bg}`
})

const cls = style('mode', {
  light: `${light.text}`,
  dark: `${dark.text}`
})

export default createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');

  body {
    font-family: 'Inconsolata', monospace;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${bgs};
    color: ${cls};
  }
`;
