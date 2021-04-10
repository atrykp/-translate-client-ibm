import styled from "styled-components";
import TranslationElement from "../../Molecules/TranslationElement/TranslationElement";
import { useSelector } from "react-redux";
import EditModal from "../../Molecules/EditModal/EditModal";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 10px auto;
  padding-bottom: 300px;
`;

const TranslationList = () => {
  const translationList = useSelector((state) => state.listReducer);
  const arr = translationList.map((element) => (
    <TranslationElement translationObj={element} key={element.id} />
  ));
  const [editModal] = useSelector((state) => state.modalsReducer).filter(
    (element) => element.id === "editModal"
  );
  return (
    <>
      {editModal?.isActive && <EditModal />}
      <StyledWrapper>
        {translationList.length < 1 ? <p>there is nothing here yet</p> : arr}
      </StyledWrapper>
    </>
  );
};

export default TranslationList;
