import { useState } from "react";
import styled from "styled-components";
import Paragraph from "../../Atoms/Paragraph/Paragraph";
import Button from "../../Atoms/Button/Button";
import Input from "../../Atoms/Input/Input";
import { useDispatch } from "react-redux";
import {
  updateModalStatus,
  updateFlashCardContent,
  editListElementContent,
} from "../../../actions/actions";
import useReduxStore from "../../../hooks/useReduxStore";
const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 25;
  background-color: #a9a9a9cc;
`;
const StyledModalWrapper = styled.div`
  display: grid;
  border-radius: 10px;
  width: 90%;
  height: 60vh;
  min-height: 380px;
  position: fixed;
  background-color: #fafafa;
  z-index: 26;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  @media (min-width: 600px) {
    width: 40%;
  } ;
`;
const StyledInput = styled(Input)`
  width: 100%;
  max-height: 60px;
`;
const StyledButton = styled(Button)`
  width: 40%;
  max-width: 300px;
  max-height: 50px;
  min-width: 150px;
`;
const StyledSecondButton = styled(Button)`
  background-color: gray;
  width: 25%;
  min-width: 100px;
  max-width: 200px;
  font-size: ${({ theme }) => theme.fontSize.small};
  height: 40px;
  text-align: center;
  padding: 0;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 5%;
`;
const StyledInputWrapper = styled.div`
  justify-self: center;
  width: 90%;
  display: grid;
`;
const StyledParagraph = styled(Paragraph)`
  align-self: end;
  margin-bottom: 5px;
`;
const EditModal = () => {
  const dispatch = useDispatch();
  const [editModal] = useReduxStore("editModal");
  const { from, to, elementId, section } = editModal;
  const [fromContent, setFromContent] = useState(from);
  const [toContent, setToContent] = useState(to);
  const closeEditModal = () => {
    dispatch(
      updateModalStatus("editModal", {
        from: "",
        to: "",
        isActive: false,
        elementId: "",
        section: "",
      })
    );
  };

  const saveNewContent = () => {
    if (section === "flashCards") {
      dispatch(
        updateFlashCardContent(elementId, {
          currentWord: fromContent,
          translation: toContent,
        })
      );
    } else if (section === "translationElements") {
      dispatch(
        editListElementContent(elementId, {
          currentWord: fromContent,
          translation: toContent,
        })
      );
    }
    dispatch(
      updateModalStatus("editModal", {
        from: "",
        to: "",
        isActive: false,
        elementId: "",
        section: "",
      })
    );
  };
  return (
    <>
      <StyledBackground />
      <StyledModalWrapper>
        <StyledInputWrapper>
          <StyledParagraph>from:</StyledParagraph>
          <StyledInput
            value={fromContent}
            onChange={({ target }) => setFromContent(target.value)}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledParagraph>to:</StyledParagraph>
          <StyledInput
            value={toContent}
            onChange={({ target }) => setToContent(target.value)}
          />
        </StyledInputWrapper>
        <StyledButtonWrapper>
          <StyledButton onClick={saveNewContent}>Save</StyledButton>
          <StyledSecondButton onClick={closeEditModal}>
            Cancel
          </StyledSecondButton>
        </StyledButtonWrapper>
      </StyledModalWrapper>
    </>
  );
};

export default EditModal;
