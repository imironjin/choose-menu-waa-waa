import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
body {
  max-width: 100%;
  overflow-x: hidden;
  
  button,
  a {cursor: pointer};
  }
  body,
  body::before,
  body::after,
  body *,
  body *::before,
  body *::after {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  video {
    width: 100%;
    height: auto;
  }

  :root{
    --black: #000000;
    --white: #ffffff;
    --primary100: #fff3e2;
    --primary200: #ffb32f;
    --primary300: #ffa500;
    --primary400: #ff7300;
  }
`;

export default GlobalStyle;
