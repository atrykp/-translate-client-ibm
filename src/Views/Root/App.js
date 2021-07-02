import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import theme from "../../Theme/MainTheme";
import GlobalStyle from "../../Theme/GlobalStyles";

import MainPage from "../MainPage/MainPage";
import ListPage from "../ListPage/ListPage";
import FlashCards from "../FlashCards/FlashCards";
import UserLogin from "../UserLogin/UserLogin";
import UserRegister from "../UserRegister/UserRegister";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/list" component={ListPage} />
          <Route path="/flashcards" component={FlashCards} />
          <Route path="/register" component={UserRegister} />
          <Route path="/login" component={UserLogin} />
          <Redirect to="/" />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
