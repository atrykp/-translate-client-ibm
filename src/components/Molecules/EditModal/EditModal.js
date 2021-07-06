import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Paragraph from "../../Atoms/Paragraph/Paragraph";
import Button from "../../Atoms/Button/Button";
import Input from "../../Atoms/Input/Input";

import useReduxStore from "../../../hooks/useReduxStore";
import { editWordAction } from "../../../thunk-actions/userTListAction";
import { updateCardAction } from "../../../thunk-actions/userFlashcardsAction";

import { updateModalStatus } from "../../../actions/actions";
import {
  EDIT_MODAL,
  FLASH_CARDS,
  TRANSLATION_ELEMENTS,
  NOTIFICATION,
} from "../../../reducers/modalsReducer";
import { useRemoveNotification } from "../../../hooks/useRemoveNotification";

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
    width: 50%;
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
  const [fromContent, setFromContent] = useState("");
  const [toContent, setToContent] = useState("");

  const dispatch = useDispatch();
  const removeNotification = useRemoveNotification();

  const [editModal] = useReduxStore(EDIT_MODAL);
  const { fromWord, toWord, _id, section } = editModal;

  const { userLoginReducer: user } = useReduxStore();

  useEffect(() => {
    setFromContent(fromWord);
    setToContent(toWord);
  }, [fromWord, toWord]);

  const closeEditModal = () => {
    dispatch(updateModalStatus(EDIT_MODAL, { isActive: false }));
  };

  const saveNewContent = () => {
    if (section === FLASH_CARDS) {
      dispatch(
        updateCardAction(user.user.token, _id, {
          fromWord: fromContent,
          toWord: toContent,
        })
      );
    } else if (section === TRANSLATION_ELEMENTS) {
      const data = { fromWord: fromContent, toWord: toContent };
      dispatch(editWordAction(user.user.token, _id, data));
    }
    dispatch(updateModalStatus(EDIT_MODAL, { isActive: false }));
    dispatch(
      updateModalStatus(NOTIFICATION, {
        content: "Saved",
        isActive: true,
      })
    );
    removeNotification(1450);
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
