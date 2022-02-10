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

    .main{
      background: #efefef;
      margin: 1rem;
      padding: 1rem;
    }
    .flex{
      @media (min-width: 900px){
        display: flex;
       }
    }

    h1 {
      font-size: 23px;
      font-weight: 600;
      text-align: center;
      margin: 0;
      padding: 1rem;
      max-width: 1000px;

      @media(min-width: 900px){
        font-size: 28px;
      }
    }

    h2 {
      margin-left: 1rem;
      margin-top: 1rem;
      font-size: 17px;
      text-align: center;

      @media(min-width: 900px){
        text-align: left;
        font-size: 20px;
      }
    }

  }
`;

export default GlobalStyle;
