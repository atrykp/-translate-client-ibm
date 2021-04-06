import styled, { css } from "styled-components";
import RoundButton from "../../Atoms/RoundButton/RoundButton";
import Paragraph from "../../Atoms/Paragraph/Paragraph";
import { useState } from "react";
const StyledRoundButton = styled(RoundButton)`
  justify-self: end;
  display: grid;
  justify-content: center;
  align-content: center;
  z-index: 100;
  ${({ first }) =>
    first &&
    css`
      justify-self: center;
      width: 55px;
      height: 55px;
    `}
  ${({ second }) =>
    second &&
    css`
      justify-self: center;
      width: 50px;
      height: 50px;
    `}
    ${({ third }) =>
    third &&
    css`
      justify-self: center;
      width: 45px;
      height: 45px;
    `};
`;
const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 7px;
`;
const StyledParagraph = styled(Paragraph)`
  display: grid;
  justify-content: center;
  align-content: center;
  margin-right: 5px;
  opacity: ${({ active }) => (active ? "1" : "0")};
  transition: 0.3s ease-in-out 0.01s;
`;
const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px;
  justify-items: center;
  align-items: center;

  transition: 0.3s ease-in-out;

  ${({ first, active }) =>
    first &&
    css`
      transform: ${active ? "translateY(0)" : "translateY(117%)"};
    `}
  ${({ second, active }) =>
    second &&
    css`
      transform: ${active ? "translateY(0)" : "translateY(240%)"};
    `}
    ${({ third, active }) =>
    third &&
    css`
      transform: ${active ? "translateY(0)" : "translateY(387%)"};
    `}
`;
const filtersArr = ["all", "iCan", "iCant"];
const SideMenu = ({ setCurrentFilter }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive((prevValue) => !prevValue);

  const changeFilter = (filter) => {
    console.log("działam");

    setCurrentFilter(filter);
  };
  return (
    <>
      <StyledWrapper>
        <StyledRow third active={isActive}>
          <StyledParagraph active={isActive}>i cant</StyledParagraph>
          <StyledRoundButton onClick={() => changeFilter(filtersArr[2])} third>
            <span class="material-icons">close</span>
          </StyledRoundButton>
        </StyledRow>
        <StyledRow second active={isActive}>
          <StyledParagraph active={isActive}>i can</StyledParagraph>
          <StyledRoundButton second onClick={() => changeFilter(filtersArr[1])}>
            <span class="material-icons">done</span>
          </StyledRoundButton>
        </StyledRow>
        <StyledRow first active={isActive}>
          <StyledParagraph active={isActive}>all</StyledParagraph>
          <StyledRoundButton first onClick={() => changeFilter(filtersArr[0])}>
            <span class="material-icons">rule</span>
          </StyledRoundButton>
        </StyledRow>
        <StyledRoundButton onClick={handleClick}>
          <span className="material-icons">menu</span>
        </StyledRoundButton>
      </StyledWrapper>
    </>
  );
};

export default SideMenu;
