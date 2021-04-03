import GlobalStyle from "../../Theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../../Theme/MainTheme";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import ListPage from "../ListPage/ListPage";
import FlashCards from "../FlashCards/FlashCards";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={MainPage} />
        <Route path="/list" component={ListPage} />
        <Route path="/flashcards" component={FlashCards} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
