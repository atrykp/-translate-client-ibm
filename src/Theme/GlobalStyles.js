import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after{
    box-sizing:border-box;
}
html{
    font-size: 0.625rem;
    font-family: 'Montserrat', sans-serif;
}
 body {
    margin: 0;
    padding: 0;
    font-size:1.6rem;
  }

`;

export default GlobalStyle;
