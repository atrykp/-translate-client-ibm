import styled from "styled-components";
import TranslationElement from "../../Molecules/TranslationElement/TranslationElement";
import { useSelector } from "react-redux";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 10px auto;
`;

const TranslationList = () => {
  const translationList = useSelector((state) => state.listReducer);
  const arr = translationList.map((element) => element.translation);

  return (
    <>
      <StyledWrapper>
        <TranslationElement></TranslationElement>
      </StyledWrapper>
    </>
  );
};

export default TranslationList;
