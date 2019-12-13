import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { background, text } from './theme';

export default createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');

  body {
    font-family: 'Inconsolata', monospace;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${background};
    color: ${text};
  }
`;
