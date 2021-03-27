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
`;

const StyledLink = styled(Link)`
  display: grid;
  align-items: center;
  color: white;
  height: 100%;
  width: 50%;
  transition: transform 0.2s ease-in;
  font-size: ${({ theme }) => theme.fontSize.medium};
  background-image: url(${({ image }) => image});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
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
        lista
      </StyledLink>
      <StyledLink as={NavLink} exact to="/" image={translator}></StyledLink>
      <StyledLink as={NavLink} to="/flashcards">
        fiszki
      </StyledLink>
    </StyledWrapper>
  );
};

export default BottomBar;
