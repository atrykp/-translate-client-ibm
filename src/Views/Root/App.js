import { useEffect, useState } from "react";
import GlobalStyle from "../../Theme/GlobalStyles";

function App() {
  const [word, setWord] = useState("");
  const [transleted, setTransleted] = useState("");
  useEffect(() => {
    getLanguages();
  }, []);
  const getLanguages = async () => {
    let response = await fetch(`http://localhost:5000/`);
    let languagesObj = await response.json();
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
    </>
  );
}

export default App;
