import { useEffect, useState } from "react";
import GlobalStyle from "../../Theme/GlobalStyles";
import Dropdown from "../../components/Organisms/Dropdown/Dropdown";
import { ThemeProvider } from "styled-components";
import theme from "../../Theme/MainTheme";
import Button from "../../components/Atoms/Button/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "../MainPage/MainPage";

function App() {
  const [word, setWord] = useState("");
  const [transleted, setTransleted] = useState("");
  useEffect(() => {
    getLanguages();
  }, []);
  let languagesArr = [];
  const getLanguages = async () => {
    let response = await fetch(`http://localhost:5000/`);
    let languagesObj = await response.json();
    console.log(languagesObj);
    languagesObj.result.languages.forEach((element) =>
      languagesArr.push(element.language)
    );
    console.log(languagesArr);
  };

  const handleChange = (e) => {
    setWord(e.target.value);
  };
  const handleClick = async () => {
    let response = await fetch(`http://localhost:5000/translate/${word}`);
    let translateObj = await response.json();
    let backTxt = translateObj.result.translations[0].translation;
    setTransleted(backTxt);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Route path="/" component={MainPage} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
