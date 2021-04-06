import styled from "styled-components";
import FlashCard from "../../Molecules/FlasCard/FlashCard";
import SideMenu from "../../Organisms/SideMenu/SideMenu";
import { useSelector } from "react-redux";
import { useState } from "react";
const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
const StyledSideMenuWrapper = styled.div`
  position: fixed;
  right: 10px;
  bottom: 12vh;
  @media (min-width: 600px) {
    right: 10vw;
  }
  @media (min-width: 800px) {
    right: 15vw;
  }
`;
const FlashCardsList = () => {
  const cardsArr = useSelector((state) => state.flashCardsReducer);
  const [currentFilter, setCurrentFilter] = useState("all");
  console.log(currentFilter);

  const arr = cardsArr
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
        element && <FlashCard cardContent={element} key={element.id} />
    );
  return (
    <>
      <StyledSideMenuWrapper>
        <SideMenu setCurrentFilter={setCurrentFilter} />
      </StyledSideMenuWrapper>
      <StyledWrapper>{cardsArr.length < 1 ? <p>empty</p> : arr}</StyledWrapper>
    </>
  );
};

export default FlashCardsList;
