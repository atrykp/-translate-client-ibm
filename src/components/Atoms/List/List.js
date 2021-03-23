import styled from "styled-components";

const StyledListWrapper = styled.div`
  display: grid;
  background-color: #c1b8ed;
  width: 20%;
  border-radius: 10px;
`;
const StyledLink = styled.a`
  text-align: center;
  padding: 1%;
  display: block;
`;

const List = () => {
  return (
    <StyledListWrapper>
      <StyledLink>Język jeden</StyledLink>
      <StyledLink>Język dwa</StyledLink>
      <StyledLink>Język trzy</StyledLink>
      <StyledLink>Język cztery</StyledLink>
      <StyledLink>Język pięć</StyledLink>
    </StyledListWrapper>
  );
};

export default List;
