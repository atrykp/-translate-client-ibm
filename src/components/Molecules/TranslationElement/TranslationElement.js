import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "../../Atoms/Header/Header";
import RoundButton from "../../Atoms/RoundButton/RoundButton";
import Paragraph from "../../Atoms/Paragraph/Paragraph";
import { useDispatch } from "react-redux";
import { updateModalStatus } from "../../../actions/actions";
import { removeWordAction } from "../../../thunk-actions/userTListAction";
import useReduxStore from "../../../hooks/useReduxStore";

const StyledWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 0.8fr 0.2fr;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  width: 95%;
  margin: 10px auto;
  border-radius: 10px;
  padding: 15px 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;
  animation: appear 0.3s ease-in;
`;
const StyledTranslationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const StyledElementsWrapper = styled.div`
  display: grid;
  position: relative;
  justify-content: center;
  align-content: center;
`;
const StyledHeader = styled(Header)`
  width: 100%;
  text-align: start;
  padding: 3%;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.large};
`;
const StyledCounter = styled(Paragraph)`
  position: absolute;
  top: 0;
  right: 6%;
  color: ${({ theme }) => theme.colors.mediumTxt};
  font-size: ${({ theme }) => theme.fontSize.large};
`;
const StyledWordsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.9fr 0.1fr;
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const StyledParagraph = styled(Paragraph)`
  display: grid;
  justify-content: center;
  color: ${({ theme }) => theme.colors.mediumTxt};
`;

const StyledRoundButton = styled(RoundButton)`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 50px;
  height: 50px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.24);
`;
const StyledSpanWrapper = styled.span`
  position: absolute;
  right: 1%;
  bottom: 1%;
  color: ${({ theme }) => theme.colors.mediumTxt};
  transform: scale(0.7);
  z-index: 2;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
    cursor: pointer;
  }
`;

const TranslationElement = ({ translationObj }) => {
  const { userLoginReducer: user } = useReduxStore();
  const dispatch = useDispatch();
  const { fromWord, toWord, fromLang, toLang, _id, counter } = translationObj;

  const removeItem = () => {
    dispatch(removeWordAction(user.user.token, _id));
    dispatch(
      updateModalStatus("notification", {
        content: "removed",
        isActive: true,
      })
    );
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

  const changeEditModalStatus = () => {
    dispatch(
      updateModalStatus("editModal", {
        fromWord,
        toWord,
        isActive: true,
        _id,
        section: "translationElements",
      })
    );
  };
  return (
    <>
      <StyledWrapper
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
      >
        <StyledSpanWrapper onClick={changeEditModalStatus}>
          <span className="material-icons">edit</span>
        </StyledSpanWrapper>
        <StyledTranslationWrapper>
          <StyledWordsWrapper>
            <StyledHeader>{fromWord}</StyledHeader>
            <StyledParagraph>{fromLang}</StyledParagraph>
          </StyledWordsWrapper>
          <StyledWordsWrapper>
            <StyledHeader>{toWord}</StyledHeader>
            <StyledParagraph>{toLang}</StyledParagraph>
          </StyledWordsWrapper>
        </StyledTranslationWrapper>
        <StyledElementsWrapper>
          <StyledCounter>{counter}</StyledCounter>
          <StyledRoundButton onClick={removeItem}>
            <span className="material-icons">clear</span>
          </StyledRoundButton>
        </StyledElementsWrapper>
      </StyledWrapper>
    </>
  );
};

export default TranslationElement;
