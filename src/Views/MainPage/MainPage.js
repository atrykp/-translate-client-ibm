import MainTemplate from "../../templates/MainTemplate";
import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 100vh;
  display: grid;
  align-items: flex-end;
`;
const MainPage = () => {
  return (
    <StyledWrapper>
      <MainTemplate></MainTemplate>
    </StyledWrapper>
  );
};
export default MainPage;
