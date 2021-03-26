import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Link from "../../Atoms/Link/Link";
import translator from "../../../assets/Icons/translation.svg";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 100px;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  height: 10vh;
  border-radius: 10px;
  justify-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  width: 80px;
  height: 80px;
  transition: transform 0.2s ease-in;
  border-radius: 50px;
  background-image: url(${({ image }) => image});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  &.active {
    transform: scale(1.3) translateY(-30%);
    border-radius: 50px;
    border: 5px solid white;
  }
`;

const BottomBar = () => {
  return (
    <StyledWrapper>
      <StyledLink as={NavLink} exact to="/" image={translator}></StyledLink>
      <StyledLink as={NavLink} to="/list">
        lista
      </StyledLink>
      <StyledLink as={NavLink} to="/flashcards">
        fiszki
      </StyledLink>
    </StyledWrapper>
  );
};

export default BottomBar;
