import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Link from "../../Atoms/Link/Link";
import translator from "../../../assets/Icons/translation.svg";

const StyledWrapper = styled.div`
  display: flex;

  background-color: ${({ theme }) => theme.colors.primary};
  height: 10vh;
  border-radius: 10px;
  justify-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const StyledLink = styled(Link)`
  display: grid;
  align-items: center;
  color: white;
  height: 100%;
  width: 50%;
  transition: transform 0.2s ease-in;
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding: 0;

  &.active {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const BottomBar = () => {
  return (
    <StyledWrapper>
      <StyledLink as={NavLink} to="/list">
        <span class="material-icons">list</span>
      </StyledLink>
      <StyledLink as={NavLink} exact to="/">
        <span class="material-icons">translate</span>
      </StyledLink>

      <StyledLink as={NavLink} to="/flashcards">
        <span class="material-icons">quiz</span>
      </StyledLink>
    </StyledWrapper>
  );
};

export default BottomBar;
