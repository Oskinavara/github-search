import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    font-family: inherit;
  }
  body {
    font-family: 'Open Sans';
  }
  input,button {
    background: transparent;
    border: 0;
    &:focus {
      outline: 0;
    }
  }
`;

export default GlobalStyle;
