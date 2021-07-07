import Paragraph from "../../Atoms/Paragraph/Paragraph";
import Button from "../../Atoms/Button/Button";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: gray;
`;
const StyledModal = styled.div`
  position: absolute;
  z-index: 4;
  display: grid;
  width: 90%;
  height: 50vh;
  max-height: 400px;
  max-width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: lightgray;
  border-radius: 10px;
  padding: 20px;
`;
const StyledButtonsWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100%;
  align-content: space-around;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;
`;

const StyledParagraph = styled(Paragraph)`
  justify-self: center;
  align-self: center;
  font-size: 3rem;
`;

const StyledConfirmParagraph = styled(Paragraph)`
  font-size: 2rem;
  text-decoration: underline;
  justify-self: center;
  align-self: center;
  cursor: pointer;
`;

const ConfirmModal = ({ text }) => {
  return (
    <StyledWrapper>
      <StyledModal>
        <StyledParagraph>{text}</StyledParagraph>
        <StyledButtonsWrapper>
          <Button>No</Button>
          <StyledConfirmParagraph>YES</StyledConfirmParagraph>
        </StyledButtonsWrapper>
      </StyledModal>
    </StyledWrapper>
  );
};

export default ConfirmModal;
