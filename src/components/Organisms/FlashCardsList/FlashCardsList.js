import styled from "styled-components";
import FlashCard from "../../Molecules/FlasCard/FlashCard";
import SideMenu from "../../Organisms/SideMenu/SideMenu";
import { useSelector } from "react-redux";
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
  const arr = cardsArr.map((element) => (
    <FlashCard cardContent={element} key={element.id} />
  ));
  return (
    <>
      <StyledSideMenuWrapper>
        <SideMenu />
      </StyledSideMenuWrapper>
      <StyledWrapper>{cardsArr.length < 1 ? <p>empty</p> : arr}</StyledWrapper>
    </>
  );
};

export default FlashCardsList;
