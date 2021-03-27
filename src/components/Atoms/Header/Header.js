import styled from "styled-components";

const Header = styled.p`
  color: ${({ theme }) => theme.colors.darkTxt};
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export default Header;
