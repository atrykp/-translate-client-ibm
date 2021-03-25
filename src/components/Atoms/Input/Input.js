import styled, { css } from "styled-components";

const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSize.large};
  border-radius: 10px;
  padding: 10px 20px;
  border: 1px solid gray;
  outline: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  }
  ${({ secondary }) =>
    secondary &&
    css`
      width: 100%;
      padding: 5px 10px;
      font-size: ${({ theme }) => theme.fontSize.small};
    `}
`;

export default Input;
