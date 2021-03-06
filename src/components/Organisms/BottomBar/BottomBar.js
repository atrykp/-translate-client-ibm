import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Link from "../../Atoms/Link/Link";

const StyledWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 60px;
  border-radius: 10px 10px 0 0;
  justify-items: center;
  box-shadow: 0 -7px 10px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  align-self: end;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  display: grid;
  align-items: center;
  color: white;
  min-height: 100%;
  width: 50%;
  transition: transform 0.2s ease-in;
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding: 0;

  &.active {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;
const StyledLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xsmall};
`;

const BottomBar = () => {
  return (
    <StyledWrapper>
      <StyledLink as={NavLink} to="/user">
        <span className="material-icons">person</span>
        <StyledLabel>user</StyledLabel>
      </StyledLink>
      <StyledLink as={NavLink} exact to="/">
        <span className="material-icons">translate</span>
        <StyledLabel>translator</StyledLabel>
      </StyledLink>
      <StyledLink as={NavLink} to="/flashcards">
        <span className="material-icons">quiz</span>
        <StyledLabel>flash cards</StyledLabel>
      </StyledLink>
      <StyledLink as={NavLink} to="/list">
        <span className="material-icons">list</span>
        <StyledLabel>translation list</StyledLabel>
      </StyledLink>
    </StyledWrapper>
  );
};

export default BottomBar;
