import MainTemplate from "../../templates/MainTemplate";
import styled from "styled-components";
import Dropdown from "../../components/Organisms/Dropdown/Dropdown";
import Input from "../../components/Atoms/Input/Input";
import Button from "../../components/Atoms/Button/Button";
import RoundButton from "../../components/Atoms/RoundButton/RoundButton";
import Header from "../../components/Atoms/Header/Header";
import swap from "../../assets/Icons/swap.svg";
import { useState } from "react";
import { useSelector } from "react-redux";

const StyledWrapper = styled.div`
  min-height: 100vh;
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
  justify-self: center;
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
const Output = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  border-radius: 10px;
  min-height: 250px;
  width: 95%;
  max-width: 500px;
  justify-self: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const MainPage = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [transleted, setTransleted] = useState("");
  const [fromLanguage, setFromLanguage] = useState("en");
  const [toLanguage, setToLanguage] = useState("pl");

  const tryStore = useSelector((state) => console.log(state.listReducer));

  const handleClick = async () => {
    let response = await fetch(
      `https://translate-app-serv.herokuapp.com/translate/${currentWord}/${fromLanguage}/${toLanguage}`
    );
    let translateObj = await response.json();
    let backTxt = translateObj.result.translations[0].translation;
    setTransleted(backTxt);
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
      <Output>
        <Header>{transleted}</Header>
      </Output>
      <StyledBottonBarWrapper>
        <MainTemplate />
      </StyledBottonBarWrapper>
    </StyledWrapper>
  );
};
export default MainPage;
