import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.lightTxt};
  border-radius: 40px;
  padding: 10px 30px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-style: none;
  transition: 0.3s;
  cursor: pointer;
  @media (min-width: 900px) {
    &:active {
      background-color: ${({ theme }) => theme.colors.secondaryDark};
    }
  }
`;

export default Button;
