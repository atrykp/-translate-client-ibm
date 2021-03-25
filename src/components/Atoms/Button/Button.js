import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.lightTxt};
  border-radius: 40px;
  padding: 10px 30px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-style: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export default Button;
