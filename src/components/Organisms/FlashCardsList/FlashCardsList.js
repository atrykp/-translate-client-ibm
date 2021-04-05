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

  const arr = cardsArr.map((element) => (
    <FlashCard cardContent={element} key={element.id} />
  ));
  console.log(arr);

  return (
    <StyledWrapper>{cardsArr.length < 1 ? <p>empty</p> : arr}</StyledWrapper>
  );
};

export default FlashCardsList;
