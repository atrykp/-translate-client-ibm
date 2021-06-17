import styled from "styled-components";
import TranslationElement from "../../Molecules/TranslationElement/TranslationElement";
import EditModal from "../../Molecules/EditModal/EditModal";
import useReduxStore from "../../../hooks/useReduxStore";
import { useDispatch } from "react-redux";
import { userTListAction } from "../../../thunk-actions/userTListAction";
import { useEffect } from "react";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 10px auto;
  padding-bottom: 300px;
`;

const TranslationList = () => {
  const { listReducer: translationList } = useReduxStore();
  const { tListReducer: tList } = useReduxStore();
  const dispatch = useDispatch();
  console.log(tList);

  useEffect(() => {
    dispatch(
      userTListAction(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYzc3NTQyY2VlNWQzMjA4NDdlOTgzNCIsImlhdCI6MTYyMzkwNTkwMCwiZXhwIjoxNjIzOTA5NTAwfQ.b3AYvrLMSWTpzyY6v1gHBTqLpXm6dqfUG0N8AMPu3k8"
      )
    );
  }, []);

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
