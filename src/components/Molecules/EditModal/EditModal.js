import { useEffect, useState } from "react";
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
import {
  EDIT_MODAL,
  FLASH_CARDS,
  TRANSLATION_ELEMENTS,
  NOTIFICATION,
} from "../../../reducers/modalsReducer";
import { editWordAction } from "../../../thunk-actions/userTListAction";
import { updateCardAction } from "../../../thunk-actions/userFlashcardsAction";
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
  const dispatch = useDispatch();
  const [fromContent, setFromContent] = useState("");
  const [toContent, setToContent] = useState("");

  const [editModal] = useReduxStore(EDIT_MODAL);
  const { userLoginReducer: user } = useReduxStore();

  const { fromWord, toWord, _id, section } = editModal;

  useEffect(() => {
    setFromContent(fromWord);
    setToContent(toWord);
  }, []);

  const closeEditModal = () => {
    dispatch(
      updateModalStatus(EDIT_MODAL, {
        fromWord: "",
        toWord: "",
        isActive: false,
        _id: "",
        section: "",
      })
    );
  };

  const removeNotification = () => {
    setTimeout(() => {
      dispatch(
        updateModalStatus(NOTIFICATION, {
          content: "",
          isActive: false,
        })
      );
    }, 1450);
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
      dispatch(
        editListElementContent(_id, {
          currentWord: fromContent,
          translation: toContent,
        })
      );
    }
    dispatch(
      updateModalStatus(EDIT_MODAL, {
        from: "",
        to: "",
        isActive: false,
        _id: "",
        section: "",
      })
    );
    dispatch(
      updateModalStatus(NOTIFICATION, {
        content: "Saved",
        isActive: true,
      })
    );
    removeNotification();
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
