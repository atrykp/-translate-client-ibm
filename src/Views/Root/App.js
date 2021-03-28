import GlobalStyle from "../../Theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../../Theme/MainTheme";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Route path="/" component={MainPage} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
