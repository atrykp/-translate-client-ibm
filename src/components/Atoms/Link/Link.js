import styled from "styled-components";

const Link = styled.a`
  text-align: center;
  padding: 10px 0;
  display: block;
  color: ${({ theme }) => theme.colors.lightTxt};
  cursor: pointer;
  transition: 0.3s;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-decoration: none;

  &:active {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    border-radius: 10px;
  }
`;

export default Link;
