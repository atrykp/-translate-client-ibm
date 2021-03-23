import { useEffect, useState } from "react";
import GlobalStyle from "../../Theme/GlobalStyles";
import Dropdown from "../../components/Molecules/Dropdown";

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
    <>
      <GlobalStyle />
      <p>translator</p>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>translate</button>
      <h1>{transleted}</h1>
      <Dropdown>Pl</Dropdown>
    </>
  );
}

export default App;
