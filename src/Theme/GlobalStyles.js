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
  .edit{
    font-size:20px;
    cursor: pointer;
  }
  .save{
    font-weight: bold;
    margin-left: 2%;
    border-bottom: 1px solid gray;
    cursor: pointer;
  }


`;

export default GlobalStyle;
