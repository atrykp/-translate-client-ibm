import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";

import Input from "../../components/Atoms/Input/Input";
import Button from "../../components/Atoms/Button/Button";
import RoundButton from "../../components/Atoms/RoundButton/RoundButton";
import Dropdown from "../../components/Organisms/Dropdown/Dropdown";
import Output from "../../components/Organisms/Output/Output";
import MainTemplate from "../../templates/MainTemplate";
import ErrorBar from "../../components/Atoms/ErrorBar/ErrorBar";

import findInMyArray from "../../helpers/findInMyArray";
import useReduxStore from "../../hooks/useReduxStore";

import {
  getWordByIdAction,
  updateWordCouterAction,
  userTListAction,
} from "../../thunk-actions/userTListAction";
import { getWordByIdReset } from "../../actions/tList-actions";

import swap from "../../assets/Icons/swap.svg";

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

const variants = {
  open: { opacity: 1, y: 0 },
  close: { opacity: 0, y: -40 },
};

const MainPage = () => {
  const [fromLang, setFromLang] = useState("en");
  const [toLang, setToLang] = useState("pl");
  const [translatedObj, setTranslatedObj] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const translateInput = useRef(null);

  const { userLoginReducer: user } = useReduxStore();
  const {
    user: { token },
  } = user;

  let translationList = useSelector((state) => state.tListReducer);
  const wordById = useSelector((state) => state.getWordByIdReducer);

  useEffect(() => {
    if (token) {
      setTranslatedObj(wordById.sentence);
      dispatch(userTListAction(token));
    }
  }, [wordById, dispatch, token]);

  useEffect(() => {
    dispatch(getWordByIdReset());
  }, [dispatch]);

  const handleTranslate = async () => {
    if (!translateInput.current.value) {
      setIsError(true);
      return;
    }
    dispatch(getWordByIdReset());
    setIsLoading(true);

    let response = await fetch(
      `https://translate-app-serv.herokuapp.com/translator/translate/${translateInput.current.value}/${fromLang}/${toLang}`
    );

    let translateObj = await response.json();

    let toWord = translateObj.result.translations[0].translation;

    const translatedObj = {
      fromWord: translateInput.current.value,
      toWord,
      fromLang,
      toLang,
      counter: 0,
    };

    let translated;

    if (translationList.userTList) {
      translated = await findInMyArray(
        translatedObj,
        translationList.userTList
      );
    }

    if (translated && token) {
      const translationId = translated._id;
      try {
        await dispatch(updateWordCouterAction(token, translationId));
        await dispatch(getWordByIdAction(token, translationId));
      } catch (error) {
        console.log(error);
      }
    } else {
      setTranslatedObj(translatedObj);
    }
    setIsLoading(false);
  };

  const handleChange = () => {
    if (isError) {
      setIsError(false);
    }
  };
  const switchLanguages = () => {
    setFromLang(toLang);
    setToLang(fromLang);
  };

  return (
    <>
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, scale: 0.95 }}
      >
        <StyledWrapper>
          <StyledDropdownWrapper>
            <Dropdown setLanguage={setFromLang} language={fromLang} />
            <StyledRoundButton
              as={motion.button}
              animate={{
                scale: [1, 1.1, 1, 1],
                rotate: [0, 360, 360, 0],
              }}
              transition={{ duration: 1.6 }}
              onClick={switchLanguages}
            />
            <Dropdown setLanguage={setToLang} language={toLang} />
          </StyledDropdownWrapper>
          <StyledInput onChange={() => handleChange()} ref={translateInput} />

          <ErrorBar animate={isError ? "open" : "close"} variants={variants}>
            input is required
          </ErrorBar>

          <StyledButton onClick={handleTranslate}>Translate</StyledButton>
          <Output
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            translatedObj={translatedObj}
            setTranslatedObj={setTranslatedObj}
          />
        </StyledWrapper>
      </motion.div>
      <MainTemplate />
    </>
  );
};
export default MainPage;
