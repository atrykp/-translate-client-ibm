import styled from "styled-components";

const RoundButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.lightTxt};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.medium};
  cursor: pointer;
  outline: none;
  transition: 0.2s linear;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }
  &:active {
    border-color: gray;
  }
`;

export default RoundButton;
