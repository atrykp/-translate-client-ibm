import styled from "styled-components";
import FlashCard from "../../Molecules/FlasCard/FlashCard";
import { useSelector } from "react-redux";
const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
const FlashCardsList = () => {
  const cardsArr = useSelector((state) => state.flashCardsReducer);
  console.log(cardsArr);

  return (
    <>
      <StyledWrapper>
        <h1>soon</h1>
      </StyledWrapper>
    </>
  );
};

export default FlashCardsList;
