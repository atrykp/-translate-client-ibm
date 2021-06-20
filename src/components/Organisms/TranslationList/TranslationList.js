import styled from "styled-components";
import TranslationElement from "../../Molecules/TranslationElement/TranslationElement";
import EditModal from "../../Molecules/EditModal/EditModal";
import useReduxStore from "../../../hooks/useReduxStore";
import { useDispatch } from "react-redux";
import { userTListAction } from "../../../thunk-actions/userTListAction";
import { useEffect } from "react";
import { useHistory } from "react-router";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 10px auto;
  padding-bottom: 300px;
`;

const TranslationList = () => {
  const { tListReducer: tList } = useReduxStore();
  const { userLoginReducer: userLogin } = useReduxStore();
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    if (userLogin.user?.token) {
      dispatch(userTListAction(userLogin.user.token));
    } else {
      history.push("/login");
    }
  }, [userLogin, dispatch, history]);

  const arr = tList.userTList.map((element) => (
    <TranslationElement translationObj={element} key={element._id} />
  ));

  const [editModal] = useReduxStore("editModal");
  return (
    <>
      {editModal?.isActive && <EditModal />}
      <StyledWrapper>
        {tList.userTList.length < 1 ? (
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
