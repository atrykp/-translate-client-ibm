import styled from "styled-components";
import FlashCard from "../../Molecules/FlasCard/FlashCard";
const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
const FlashCardsList = () => {
  return (
    <>
      <StyledWrapper>
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <FlashCard />
      </StyledWrapper>
    </>
  );
};

export default FlashCardsList;
