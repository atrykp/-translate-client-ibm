import MainTemplate from "../../templates/MainTemplate";
import styled from "styled-components";
import Dropdown from "../../components/Organisms/Dropdown/Dropdown";
import Input from "../../components/Atoms/Input/Input";
import Button from "../../components/Atoms/Button/Button";
import RoundButton from "../../components/Atoms/RoundButton/RoundButton";
import Output from "../../components/Organisms/Output/Output";
import swap from "../../assets/Icons/swap.svg";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import findInMyArray from "../../helpers/findInMyArray";
import {
  updateWordCounter,
  removeUnseved,
  addWord,
} from "../../actions/actions";

const StyledWrapper = styled.div`
  height: 100vh;
  min-height: -webkit-fill-available;
  display: grid;
  grid-template-rows: 2fr 1fr 1fr 5fr 1fr;
  align-items: center;
`;
const StyledDropdownWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr 1fr;
  justify-self: center;
  min-height: 50px;
`;
const StyledBottonBarWrapper = styled.div`
  align-self: end;
  width: 100%;
  max-width: 600px;

  margin: 0 auto;
`;
const StyledRoundButton = styled(RoundButton)`
  background-image: url(${swap});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const StyledButton = styled(Button)`
  width: 80%;
  max-width: 300px;
  justify-self: center;
  min-height: 45px;
  max-height: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const StyledInput = styled(Input)`
  width: 90%;
  max-width: 600px;
  justify-self: center;
  align-self: start;
  height: 50px;
`;

const MainPage = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [fromLanguage, setFromLanguage] = useState("en");
  const [toLanguage, setToLanguage] = useState("pl");
  const dispatch = useDispatch();

  const listArr = useSelector((state) => state.listReducer);
  console.log(listArr);

  const makeId = () => {
    let ID = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 12; i++) {
      ID += characters.charAt(Math.floor(Math.random() * 36));
    }
    return ID;
  };
  const handleClick = async () => {
    let response = await fetch(
      `https://translate-app-serv.herokuapp.com/translate/${currentWord}/${fromLanguage}/${toLanguage}`
      // `http://localhost:5000/translate/${currentWord}/${fromLanguage}/${toLanguage}`
    );
    let translateObj = await response.json();
    let backTxt = translateObj.result.translations[0].translation;
    dispatch(removeUnseved());
    const translatedObj = {
      currentWord,
      translation: backTxt,
      fromLanguage,
      toLanguage,
      id: makeId(),
      counter: 0,
    };

    const translated = findInMyArray(translatedObj, listArr);

    if (translated) {
      dispatch(updateWordCounter(translated.id, translated.counter + 1));
      setTranslation(translatedObj);
    } else {
      dispatch(addWord(translatedObj));
      setTranslation(translatedObj);
    }
  };

  const handleChange = ({ target }) => {
    setCurrentWord(target.value);
  };
  const switchLanguages = () => {
    setFromLanguage(toLanguage);
    setToLanguage(fromLanguage);
  };

  return (
    <StyledWrapper>
      <StyledDropdownWrapper>
        <Dropdown setLanguage={setFromLanguage} language={fromLanguage} />
        <StyledRoundButton onClick={switchLanguages} />
        <Dropdown setLanguage={setToLanguage} language={toLanguage} />
      </StyledDropdownWrapper>
      <StyledInput onChange={(e) => handleChange(e)} />
      <StyledButton onClick={handleClick}>tłumacz</StyledButton>
      <Output translationId={translation.id} />
      <StyledBottonBarWrapper>
        <MainTemplate />
      </StyledBottonBarWrapper>
    </StyledWrapper>
  );
};
export default MainPage;
