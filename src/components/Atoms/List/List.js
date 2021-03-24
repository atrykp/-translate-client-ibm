import styled from "styled-components";

const StyledListWrapper = styled.div`
  display: grid;
  background-color: #c1b8ed;
  width: 100%;
  border-radius: 10px;
`;
const StyledLink = styled.a`
  text-align: center;
  padding: 10px 0;
  display: block;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  &:hover {
    background-color: lightcoral;
    border-radius: 10px;
  }
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
