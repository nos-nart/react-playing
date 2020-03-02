import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`