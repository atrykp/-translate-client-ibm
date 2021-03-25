import styled from "styled-components";

const RoundButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border: none;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.lightTxt};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.large};
  cursor: pointer;
  outline: none;
  transition: 0.2s linear;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
  &:active {
    border-color: gray;
  }
`;

export default RoundButton;
