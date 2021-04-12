import styled from "styled-components";
import TranslationElement from "../../Molecules/TranslationElement/TranslationElement";
import EditModal from "../../Molecules/EditModal/EditModal";
import useReduxStore from "../../../hooks/useReduxStore";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 10px auto;
  padding-bottom: 300px;
`;

const TranslationList = () => {
  const { listReducer: translationList } = useReduxStore();

  const arr = translationList.map((element) => (
    <TranslationElement translationObj={element} key={element.id} />
  ));
  const [editModal] = useReduxStore("editModal");
  return (
    <>
      {editModal?.isActive && <EditModal />}
      <StyledWrapper>
        {translationList.length < 1 ? (
          <p>there is nothing here yet</p>
        ) : (
          arr.sort(function (a, b) {
            console.log(a);

            return (
              b.props.translationObj.counter - a.props.translationObj.counter
            );
          })
        )}
      </StyledWrapper>
    </>
  );
};

export default TranslationList;
