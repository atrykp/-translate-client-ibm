import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Link from "../../Atoms/Link/Link";
import { useDispatch } from "react-redux";
import { updateCurrentTranslation } from "../../../actions/actions";

const StyledWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 60px;
  border-radius: 10px 10px 0 0;
  justify-items: center;
  box-shadow: 0 -7px 10px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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

const BottomBar = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateCurrentTranslation({}));
  };
  return (
    <StyledWrapper>
      <StyledLink as={NavLink} to="/list" onClick={handleClick}>
        <span className="material-icons">list</span>
      </StyledLink>
      <StyledLink as={NavLink} exact to="/">
        <span className="material-icons">translate</span>
      </StyledLink>

      <StyledLink as={NavLink} to="/flashcards">
        <span className="material-icons">quiz</span>
      </StyledLink>
    </StyledWrapper>
  );
};

export default BottomBar;
