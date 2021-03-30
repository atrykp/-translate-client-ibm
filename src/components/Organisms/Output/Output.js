import styled from "styled-components";
import Header from "../../Atoms/Header/Header";
import { useState } from "react";

const StyledOutput = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  border-radius: 10px;
  min-height: 250px;
  width: 95%;
  max-width: 500px;
  justify-self: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
const StyledSpan = styled.span`
  position: absolute;
  color: ${({ theme, active }) =>
    active ? theme.colors.secondary : theme.colors.mediumTxt};
  top: 10px;
  right: 15px;
  font-size: 4rem;
  cursor: pointer;
`;

const Output = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledOutput>
      <Header>helo</Header>
      <StyledSpan className="material-icons helo" active={isActive}>
        playlist_add
      </StyledSpan>
    </StyledOutput>
  );
};

export default Output;
