import styled from "styled-components";

const Header = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkTxt};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
`;

export default Header;
