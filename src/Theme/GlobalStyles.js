import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}
html{
    font-size: 0.625rem;
    font-family: 'Montserrat', sans-serif;
  }
 body {

    font-size:1.6rem;
    max-width:1000px;
    margin:0 auto;


  }
  .material-icons {
    font-size:36px;
  }


`;

export default GlobalStyle;
