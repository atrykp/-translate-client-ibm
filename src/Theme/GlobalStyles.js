import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
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
    min-height: 100vh;

  }

`;

export default GlobalStyle;
