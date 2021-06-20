import styled from "styled-components";
import Header from "../../Atoms/Header/Header";
import { useState } from "react";
import Paragraph from "../../Atoms/Paragraph/Paragraph";
import Loading from "../../Atoms/Loading/Loading";
import { useDispatch } from "react-redux";
import {
  addFlashCard,
  addWord,
  removeWord,
  updateModalStatus,
  updateWordCounter,
  updateCurrentTranslation,
} from "../../../actions/actions";
import { useEffect } from "react";
import findInMyArray from "../../../helpers/findInMyArray";
import useReduxStore from "../../../hooks/useReduxStore";
import { useHistory } from "react-router-dom";
import { saveWordAction } from "../../../thunk-actions/userTListAction";

const StyledOutput = styled.div`
  position: relative;
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
const StyledSpan = styled.span`
  position: absolute;
  color: ${({ theme, active }) =>
    active ? theme.colors.secondary : theme.colors.mediumTxt};
  right: ${({ secondary }) => (secondary ? "20px" : "15px")};
  font-size: ${({ secondary }) => (secondary ? "3rem" : "4rem")};
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
  ${({ secondary }) => (secondary ? "bottom:10px" : "top:10px")}
`;

const StyledSpeaker = styled(StyledSpan)`
  right: 50%;
  transform: translateX(50%);
`;

const StyledCounterWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Output = ({ isLoading, setIsLoading }) => {
  const history = useHistory();
  const { currentTranslationReducer: translationObj } = useReduxStore();
  const { listReducer: translationArr } = useReduxStore();
  const { userLoginReducer: user } = useReduxStore();
  const { counter, id, toWord, fromLang, toLang } = translationObj;

  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (counter < 1) {
      setIsActive(false);
    } else if (counter > 1) {
      setIsActive(true);
    }
  }, [translationObj, counter]);

  const handleClick = () => {
    const token = user.user?.token;
    if (!token) {
      history.push("/login");
    }

    if (counter === 0) {
      dispatch(saveWordAction(token, translationObj));
      dispatch(updateWordCounter(id, 1));
      setIsActive(true);
      dispatch(
        updateModalStatus("notification", {
          content: "added to list",
          isActive: true,
        })
      );
    } else {
      translationObj.counter = 0;
      dispatch(updateCurrentTranslation(translationObj));
      dispatch(updateWordCounter(id, 0));
      const translated = findInMyArray(translationObj, translationArr);
      dispatch(removeWord(translated.id));
      setIsActive(false);
      dispatch(
        updateModalStatus("notification", {
          content: "removed from list",
          isActive: true,
        })
      );
    }
    removeNotification();
  };
  const removeNotification = () => {
    setTimeout(() => {
      dispatch(
        updateModalStatus("notification", {
          content: "",
          isActive: false,
        })
      );
    }, 1450);
  };

  const addCard = () => {
    const flashCard = { ...translationObj, iCan: false };

    dispatch(addFlashCard(flashCard));
    dispatch(
      updateModalStatus("notification", {
        content: "added new card",
        isActive: true,
      })
    );
    removeNotification();
  };
  const handleListen = async () => {
    setIsLoading(true);
    let response = await fetch(
      `https://translate-app-serv.herokuapp.com/translator/translate/listen/${toWord}/${fromLang}/${toLang}`
      // `http://localhost:5000/translator/translate/listen/${toWord}/${fromLang}/${toLang}`
    );
    let listenTranslation = await response.blob();
    const url = window.URL.createObjectURL(listenTranslation);
    window.audio = new Audio();
    window.audio.src = url;
    window.audio.play();
    setIsLoading(false);
  };

  return (
    <StyledOutput>
      {isLoading && <Loading />}
      <Header>{!isLoading && toWord}</Header>
      {toWord && (
        <>
          <StyledSpan
            onClick={handleClick}
            className="material-icons"
            active={isActive}
          >
            playlist_add
          </StyledSpan>
          <StyledSpan className="material-icons" secondary onClick={addCard}>
            library_add
          </StyledSpan>
          {toLang === "en" && (
            <StyledSpeaker
              className="material-icons"
              secondary
              onClick={handleListen}
            >
              volume_up
            </StyledSpeaker>
          )}
        </>
      )}
      {isActive && (
        <StyledCounterWrapper>
          <Paragraph>counter</Paragraph>
          <Paragraph>{counter}</Paragraph>
        </StyledCounterWrapper>
      )}
    </StyledOutput>
  );
};

export default Output;
