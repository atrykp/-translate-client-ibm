import styled from "styled-components";
import FlashCard from "../../Molecules/FlasCard/FlashCard";
import SideMenu from "../../Organisms/SideMenu/SideMenu";
import { useSelector } from "react-redux";
import { useState } from "react";
import Paragraph from "../../Atoms/Paragraph/Paragraph";
import Header from "../../Atoms/Header/Header";
const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding-top: 5%;
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
      <StyledFilterInfo>
        <Paragraph>{`active filter: ${currentFilter} ( ${arr.length} )`}</Paragraph>
      </StyledFilterInfo>

      <StyledSideMenuWrapper>
        <SideMenu setCurrentFilter={setCurrentFilter} />
      </StyledSideMenuWrapper>
      <StyledWrapper>{cardsArr.length < 1 ? <p>empty</p> : arr}</StyledWrapper>
    </>
  );
};

export default FlashCardsList;
