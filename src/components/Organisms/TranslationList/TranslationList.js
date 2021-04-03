import styled from "styled-components";
import TranslationElement from "../../Molecules/TranslationElement/TranslationElement";
import { useSelector } from "react-redux";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 10px auto;
  padding-bottom: 300px;
`;

const TranslationList = () => {
  const translationList = useSelector((state) => state.listReducer);
  const arr = translationList.map((element) => (
    <TranslationElement translationObj={element} key={element.id} />
  ));
  console.log(translationList);

  return (
    <>
      <StyledWrapper>
        {translationList.length < 1 ? <p>there is nothing here</p> : arr}
      </StyledWrapper>
    </>
  );
};

export default TranslationList;
