// 3rd parties
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background: white;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-width: 320px;

    div{
      background: #efefef;
      margin: 1rem;
    }

    h1 {
      font-size: 28px;
      font-weight: 600;
      text-align: center;
      margin: 0;
      padding: 1rem;
    }

    h2 {
      font-size: 24px;
    }

  }
`;

export default GlobalStyle;
