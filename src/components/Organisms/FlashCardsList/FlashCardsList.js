import { useEffect, useState, useLayoutEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCardsListAction } from "../../../thunk-actions/userFlashcardsAction";
import useReduxStore from "../../../hooks/useReduxStore";

import FlashCard from "../../Molecules/FlasCard/FlashCard";
import SideMenu from "../../Organisms/SideMenu/SideMenu";
import Paragraph from "../../Atoms/Paragraph/Paragraph";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding-top: 5%;
  padding-bottom: 20%;
`;
const StyledSideMenuWrapper = styled.div`
  position: fixed;
  z-index: 3;
  right: 10px;
  bottom: 12vh;
  @media (min-width: 600px) {
    right: 10vw;
  }
  @media (min-width: 800px) {
    right: 15vw;
  }
`;
const StyledFilterInfo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
  z-index: 3;
`;
const FlashCardsList = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [cardsListArr, setCardsListArr] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const { userLoginReducer: userLogin } = useReduxStore();
  const {
    getCardsListReducer: { list },
  } = useReduxStore();

  const {
    user: { token },
  } = userLogin;

  useLayoutEffect(() => {
    if (!token) {
      history.push("/login");
      return;
    }
    dispatch(getCardsListAction(token));
  }, [dispatch, history, token]);

  useEffect(() => {
    if (list.length > 0) {
      const listArr = list
        .filter((card) => {
          if (currentFilter === "all") {
            return card;
          } else if (currentFilter === "iCan" && card.iCan) {
            return card;
          } else if (currentFilter === "iCant" && !card.iCan) {
            return card;
          }
          return null;
        })
        .map(
          (element) =>
            element && <FlashCard cardContent={element} key={element._id} />
        );
      setCardsListArr(listArr);
    } else if (list.length === 0 && cardsListArr.length > 0) {
      setCardsListArr([]);
    }
  }, [list, cardsListArr.length, currentFilter]);

  return (
    <>
      <StyledFilterInfo>
        <Paragraph>{`show:  ${currentFilter} ( ${cardsListArr.length} )`}</Paragraph>
      </StyledFilterInfo>
      <StyledSideMenuWrapper>
        <SideMenu setCurrentFilter={setCurrentFilter} />
      </StyledSideMenuWrapper>
      <StyledWrapper>
        {list.length < 1 ? <p>empty</p> : cardsListArr}
      </StyledWrapper>
    </>
  );
};

export default FlashCardsList;
