import styled from "styled-components";

const Link = styled.a`
  text-align: center;
  padding: 10px 0;
  display: block;
  color: ${({ theme }) => theme.colors.lightTxt};
  cursor: pointer;
  transition: 0.3s;
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    border-radius: 10px;
  }
`;

export default Link;
