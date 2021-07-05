import styled from "styled-components";
import Header from "../../Atoms/Header/Header";
import { useState } from "react";
import Paragraph from "../../Atoms/Paragraph/Paragraph";
import Loading from "../../Atoms/Loading/Loading";
import { useDispatch } from "react-redux";
import { updateModalStatus } from "../../../actions/actions";
import { useEffect } from "react";
import useReduxStore from "../../../hooks/useReduxStore";
import { useHistory } from "react-router-dom";
import {
  removeWordAction,
  saveWordAction,
} from "../../../thunk-actions/userTListAction";
import { addFlashCardAction } from "../../../thunk-actions/userFlashcardsAction";

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
  color: ${({ theme, active }) =>
    active ? theme.colors.secondary : theme.colors.mediumTxt};
  font-size: ${({ secondary }) => (secondary ? "3rem" : "4rem")};
  margin-bottom: ${({ secondary }) => secondary && "5px"};
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:active {
    color: ${({ theme }) => theme.colors.secondary};
  }
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

const StyledLabel = styled.p`
  color: ${({ theme }) => theme.colors.mediumTxt};
  font-size: 1.2rem;
  margin-top: 2px;
`;

const StyledListWrapper = styled.div`
  text-align: center;
  position: absolute;
  right: 10px;
  display: grid;
  flex-direction: row;
`;
const StyledCardWrapper = styled.div`
  text-align: center;
  position: absolute;
  right: 10px;
  display: grid;
  flex-direction: row;
  bottom: 10px;
`;

const Output = ({
  isLoading,
  setIsLoading,
  translatedObj,
  setTranslatedObj,
}) => {
  const [isActive, setIsActive] = useState(false);

  const history = useHistory();

  const {
    userLoginReducer: {
      user: { token },
    },
  } = useReduxStore();

  const { counter, toWord, _id, fromLang, toLang, fromWord } =
    translatedObj || {};

  const dispatch = useDispatch();

  useEffect(() => {
    if (counter < 1) {
      setIsActive(false);
    } else if (counter > 1) {
      setIsActive(true);
    }
  }, [counter]);

  useEffect(() => {
    if (counter < 1) {
      setIsActive(false);
    } else if (counter > 1) {
      setIsActive(true);
    }
  }, [counter]);

  const handleClick = () => {
    if (!token) {
      history.push("/login");
      return;
    }

    if (counter === 0) {
      dispatch(saveWordAction(token, { ...translatedObj, counter: 1 }));
      setIsActive(true);
      dispatch(
        updateModalStatus("notification", {
          content: "added to list",
          isActive: true,
        })
      );
    } else {
      dispatch(removeWordAction(token, _id));
      const translatedObj = {
        fromWord,
        toWord,
        fromLang,
        toLang,
        counter: 0,
      };
      setTranslatedObj(translatedObj);
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
    if (!token) {
      history.push("/login");
      return;
    }
    const flashCard = { ...translatedObj, iCan: false };
    delete flashCard.counter;
    dispatch(addFlashCardAction(token, flashCard));
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
          <StyledListWrapper>
            <StyledSpan
              onClick={handleClick}
              className="material-icons"
              active={isActive}
            >
              playlist_add
            </StyledSpan>
            <StyledLabel>add to list</StyledLabel>
          </StyledListWrapper>
          <StyledCardWrapper>
            <StyledSpan className="material-icons" secondary onClick={addCard}>
              library_add
            </StyledSpan>
            <StyledLabel>add flashcard</StyledLabel>
          </StyledCardWrapper>
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
      {isActive && counter > 0 && (
        <StyledCounterWrapper>
          <Paragraph>counter</Paragraph>
          <Paragraph>{counter}</Paragraph>
        </StyledCounterWrapper>
      )}
    </StyledOutput>
  );
};

export default Output;
