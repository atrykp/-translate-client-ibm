import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import useReduxStore from "../../../hooks/useReduxStore";
import {
  deleteCardAction,
  updateCardAction,
} from "../../../thunk-actions/userFlashcardsAction";
import { updateModalStatus } from "../../../actions/actions";

import Header from "../../Atoms/Header/Header";
import Button from "../../Atoms/Button/Button";
import RoundButton from "../../Atoms/RoundButton/RoundButton";
import {
  NOTIFICATION,
  EDIT_MODAL,
  FLASH_CARDS,
} from "../../../reducers/modalsReducer";
import { useRemoveNotification } from "../../../hooks/useRemoveNotification";

const StyledWrapper = styled.div`
  position: relative;
  max-width: 330px;
  min-height: 250px;
  display: grid;
  grid-template-rows: 1fr 0.2fr;
  background-color: ${({ theme, isFront }) =>
    isFront ? theme.colors.lightBackground : theme.colors.lightTxt};
  width: 95%;
  margin: 10px auto;
  border-radius: 10px;
  padding: 15px 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  z-index: 0;

  animation: ${({ isFront }) => (isFront ? "appear 1s" : "disappear 1s")};

  @keyframes appear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  @keyframes disappear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
const StyledButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33%);
  justify-items: center;
`;
const StyledButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  width: 100%;
  background-color: ${({ status }) => (status ? "#429C38" : "#929297")};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
const StyledTxtWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;
const StyledRoundButton = styled(RoundButton)`
  display: grid;
  justify-content: center;
  align-content: center;
`;

const StyledHeader = styled(Header)`
  font-size: ${({ theme }) => theme.fontSize.xlarge};
`;
const StyledSpanWrapper = styled.span`
  position: absolute;
  right: 2%;
  top: 1%;
  color: ${({ theme }) => theme.colors.mediumTxt};
  transform: scale(0.8);
  &::active {
    color: ${({ theme }) => theme.colors.primaryLight};
    cursor: pointer;
  }
`;
const StyledLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const FlashCard = ({ cardContent }) => {
  const [frontSide, setFrontSide] = useState(true);
  const { fromWord, toWord, iCan, _id } = cardContent;

  const handleClick = () => setFrontSide((prevValue) => !prevValue);
  const dispatch = useDispatch();

  const { userLoginReducer: user } = useReduxStore();
  const removeNotification = useRemoveNotification();

  const removeCard = () => {
    dispatch(deleteCardAction(user.user.token, _id));
    dispatch(
      updateModalStatus(NOTIFICATION, {
        content: "removed",
        isActive: true,
      })
    );
    removeNotification(1450);
  };

  const updateCardStatus = () => {
    dispatch(updateCardAction(user.user.token, _id, { iCan: !iCan }));
    if (iCan) {
      dispatch(
        updateModalStatus(NOTIFICATION, {
          content: "I can't",
          isActive: true,
        })
      );
    } else {
      dispatch(
        updateModalStatus(NOTIFICATION, {
          content: "I can",
          isActive: true,
        })
      );
    }
    removeNotification(1450);
  };

  const changeEditModalActivity = () => {
    dispatch(
      updateModalStatus(EDIT_MODAL, {
        fromWord,
        toWord,
        isActive: true,
        _id,
        section: FLASH_CARDS,
      })
    );
  };
  return (
    <>
      <StyledWrapper isFront={frontSide}>
        <StyledSpanWrapper onClick={changeEditModalActivity}>
          <span className="material-icons">edit</span>
          <StyledLabel>edit</StyledLabel>
        </StyledSpanWrapper>

        <StyledTxtWrapper>
          <StyledHeader>{frontSide ? fromWord : toWord}</StyledHeader>
        </StyledTxtWrapper>
        <StyledButtonsWrapper>
          <StyledButton onClick={removeCard}>
            <span className="material-icons">delete_forever</span>
          </StyledButton>
          <StyledRoundButton>
            <span className="material-icons" onClick={handleClick}>
              loop
            </span>
          </StyledRoundButton>
          <StyledButton status={iCan} onClick={updateCardStatus}>
            <span className="material-icons">done_all</span>
          </StyledButton>
        </StyledButtonsWrapper>
      </StyledWrapper>
    </>
  );
};

export default FlashCard;
