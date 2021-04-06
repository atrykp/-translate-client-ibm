import styled from "styled-components";
import { useState } from "react";
import Header from "../../Atoms/Header/Header";
import Button from "../../Atoms/Button/Button";
import RoundButton from "../../Atoms/RoundButton/RoundButton";
import { useDispatch, useSelector } from "react-redux";
import { removeFlashCard, updateFlashCard } from "../../../actions/actions";

const StyledWrapper = styled.div`
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
  background-color: ${({ status }) => (status ? "green" : "#929297")};
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

const FlashCard = ({ cardContent }) => {
  const { currentWord, translation, iCan, id } = cardContent;

  const [frontSide, setFrontSide] = useState(true);
  const handleClick = () => setFrontSide((prevValue) => !prevValue);
  const dispatch = useDispatch();

  const removeCard = () => {
    dispatch(removeFlashCard(id));
  };

  const updateCardStatus = () => {
    dispatch(updateFlashCard(id));
  };
  return (
    <>
      <StyledWrapper isFront={frontSide}>
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
          <StyledButton onClick={updateCardStatus} status={iCan}>
            <span className="material-icons">done_all</span>
          </StyledButton>
        </StyledButtonsWrapper>
      </StyledWrapper>
    </>
  );
};

export default FlashCard;
