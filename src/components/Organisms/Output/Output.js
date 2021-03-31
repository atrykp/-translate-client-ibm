import styled from "styled-components";
import Header from "../../Atoms/Header/Header";
import { useState } from "react";
import Paragraph from "../../Atoms/Paragraph/Paragraph";
import { useDispatch, useSelector } from "react-redux";
import {
  addWord,
  removeWord,
  updateWordCounter,
} from "../../../actions/actions";
import { useEffect } from "react";

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
  top: 10px;
  right: 15px;
  font-size: 4rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;
`;

const StyledCounterWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Output = ({ translationId }) => {
  const translationArr = useSelector((state) => state.listReducer);

  let translationObj = translationArr.filter(
    (element) => element.id === translationId
  );
  if (translationId) {
    translationObj = translationObj[0];
  }

  const { translation, id } = translationObj;
  let { counter } = translationObj;
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (translationObj.counter < 1) {
      setIsActive(false);
    } else if (translationObj.counter > 1) {
      setIsActive(true);
    }
  }, [translationArr]);

  const handleClick = () => {
    if (translationObj.counter === 0) {
      dispatch(updateWordCounter(id, 1));
    } else {
      dispatch(updateWordCounter(id, 0));
    }
  };

  return (
    <StyledOutput>
      <Header>{translationObj.translation}</Header>
      {translation && (
        <StyledSpan
          onClick={handleClick}
          className="material-icons"
          active={isActive}
        >
          playlist_add
        </StyledSpan>
      )}
      {isActive && (
        <StyledCounterWrapper>
          <Paragraph>counter</Paragraph>
          <Paragraph>{counter ? counter : 1}</Paragraph>
        </StyledCounterWrapper>
      )}
    </StyledOutput>
  );
};

export default Output;
