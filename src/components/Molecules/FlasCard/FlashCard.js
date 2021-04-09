import styled from "styled-components";
import { useState } from "react";
import Header from "../../Atoms/Header/Header";
import Button from "../../Atoms/Button/Button";
import RoundButton from "../../Atoms/RoundButton/RoundButton";
import { useDispatch } from "react-redux";
import {
  removeFlashCard,
  updateFlashCard,
  updateModalStatus,
} from "../../../actions/actions";

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
  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
    cursor: pointer;
  }
`;

const FlashCard = ({ cardContent }) => {
  const { currentWord, translation, iCan, id } = cardContent;

  const [frontSide, setFrontSide] = useState(true);
  const handleClick = () => setFrontSide((prevValue) => !prevValue);
  const dispatch = useDispatch();

  const removeCard = () => {
    dispatch(removeFlashCard(id));
    dispatch(
      updateModalStatus("notification", {
        content: "removed",
        isActive: true,
      })
    );
    removeNotification();
  };

  const updateCardStatus = () => {
    dispatch(updateFlashCard(id));
    if (iCan) {
      dispatch(
        updateModalStatus("notification", {
          content: "I can't",
          isActive: true,
        })
      );
    } else {
      dispatch(
        updateModalStatus("notification", {
          content: "I can",
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
  return (
    <>
      <StyledWrapper isFront={frontSide}>
        <StyledSpanWrapper>
          <span class="material-icons">edit</span>
        </StyledSpanWrapper>

        <StyledTxtWrapper>
          <StyledHeader>{frontSide ? translation : currentWord}</StyledHeader>
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
