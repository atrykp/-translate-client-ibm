import styled from "styled-components";
import Header from "../../Atoms/Header/Header";
import RoundButton from "../../Atoms/RoundButton/RoundButton";
import Paragraph from "../../Atoms/Paragraph/Paragraph";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.2fr;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  width: 95%;
  margin: 10px auto;
  border-radius: 10px;
  padding: 15px 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
const TranslationElement = () => {
  return (
    <>
      <StyledWrapper>
        <StyledTranslationWrapper>
          <StyledWordsWrapper>
            <StyledHeader>hello</StyledHeader>
            <StyledParagraph>en</StyledParagraph>
          </StyledWordsWrapper>
          <StyledWordsWrapper>
            <StyledHeader>witaj</StyledHeader>
            <StyledParagraph>pl</StyledParagraph>
          </StyledWordsWrapper>
        </StyledTranslationWrapper>
        <StyledElementsWrapper>
          <StyledCounter>17</StyledCounter>
          <StyledRoundButton>
            <span class="material-icons">clear</span>
          </StyledRoundButton>
        </StyledElementsWrapper>
      </StyledWrapper>
    </>
  );
};

export default TranslationElement;
