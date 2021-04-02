import styled from "styled-components";
import Header from "../../Atoms/Header/Header";
import RoundButton from "../../Atoms/RoundButton/RoundButton";
import Paragraph from "../../Atoms/Paragraph/Paragraph";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 0.3fr;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  width: 95%;
  margin: 10px auto;
  border-radius: 10px;
  padding: 15px 10px;
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
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 10px;
  margin-bottom: 2px;
  padding-left: 3px;
  color: white;
`;
const StyledCounter = styled(Paragraph)`
  position: absolute;
  top: 3%;
  right: 3%;
`;

const TranslationElement = () => {
  return (
    <>
      <StyledWrapper>
        <StyledTranslationWrapper>
          <StyledHeader>hello</StyledHeader>
          <StyledHeader>witaj</StyledHeader>
        </StyledTranslationWrapper>
        <StyledElementsWrapper>
          <StyledCounter>counter</StyledCounter>
          <RoundButton>
            <span className="material-icons">playlist_add</span>
          </RoundButton>
        </StyledElementsWrapper>
      </StyledWrapper>
    </>
  );
};

export default TranslationElement;
