import MainTemplate from "../../templates/MainTemplate";
import styled from "styled-components";
import Dropdown from "../../components/Organisms/Dropdown/Dropdown";
import Input from "../../components/Atoms/Input/Input";
import Button from "../../components/Atoms/Button/Button";
import RoundButton from "../../components/Atoms/RoundButton/RoundButton";
import Output from "../../components/Organisms/Output/Output";
import swap from "../../assets/Icons/swap.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import findInMyArray from "../../helpers/findInMyArray";
import {
  updateCurrentTranslation,
  updateWordCounter,
  removeUnseved,
} from "../../actions/actions";
import useReduxStore from "../../hooks/useReduxStore";

const StyledWrapper = styled.div`
  min-height: 95vh;
  display: grid;
  grid-template-rows: 2fr 1fr 1fr 5fr 1fr;
  align-items: center;
  padding-bottom: 2%;
`;
const StyledDropdownWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr 1fr;
  justify-self: center;
  min-height: 50px;
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
  const [fromLanguage, setFromLanguage] = useState("en");
  const [toLanguage, setToLanguage] = useState("pl");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const { listReducer: listArr } = useReduxStore();

  const handleClick = async () => {
    setIsLoading(true);
    let response = await fetch(
      `https://translate-app-serv.herokuapp.com/translator/translate/${currentWord}/${fromLanguage}/${toLanguage}`
      // `http://localhost:5000/translator/translate/${currentWord}/${fromLanguage}/${toLanguage}`
    );
    let translateObj = await response.json();
    let backTxt = translateObj.result.translations[0].translation;
    if (listArr.length > 0) {
      dispatch(removeUnseved());
    }
    // fromWord, toWord, fromLang, toLang, _id, counter
    const translatedObj = {
      currentWord,
      translation: backTxt,
      fromLanguage,
      toLanguage,
      counter: 0,
    };

    const translated = findInMyArray(translatedObj, listArr);

    if (translated) {
      dispatch(updateWordCounter(translated.id, translated.counter + 1));
      dispatch(updateCurrentTranslation(translated));
    } else {
      dispatch(updateCurrentTranslation(translatedObj));
    }
    setIsLoading(false);
  };

  const handleChange = ({ target }) => {
    setCurrentWord(target.value);
  };
  const switchLanguages = () => {
    setFromLanguage(toLanguage);
    setToLanguage(fromLanguage);
  };

  return (
    <>
      <StyledWrapper>
        <StyledDropdownWrapper>
          <Dropdown setLanguage={setFromLanguage} language={fromLanguage} />
          <StyledRoundButton onClick={switchLanguages} />
          <Dropdown setLanguage={setToLanguage} language={toLanguage} />
        </StyledDropdownWrapper>
        <StyledInput onChange={(e) => handleChange(e)} />
        <StyledButton onClick={handleClick}>Translate</StyledButton>
        <Output isLoading={isLoading} setIsLoading={setIsLoading} />
      </StyledWrapper>
      <MainTemplate />
    </>
  );
};
export default MainPage;
