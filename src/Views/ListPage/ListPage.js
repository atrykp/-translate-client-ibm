import styled from "styled-components";

import TranslationList from "../../components/Organisms/TranslationList/TranslationList";
import MainTemplate from "../../templates/MainTemplate";
const StyledBottonBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  align-self: end;
  width: 100%;
  max-width: 600px;

  margin: 0 auto;
`;
const ListPage = () => {
  return (
    <>
      <TranslationList></TranslationList>
      <StyledBottonBarWrapper>
        <MainTemplate />
      </StyledBottonBarWrapper>
    </>
  );
};

export default ListPage;
