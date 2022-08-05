import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: #000;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #fff;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
    background: inherit;
    border:none;
    box-shadow:none;
    border-radius:0;
    padding:0;
    overflow:visible;
  }
`;

export default GlobalStyle;
