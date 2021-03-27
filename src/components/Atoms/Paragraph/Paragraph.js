import styled from "styled-components";

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.darkTxt};
  font-size: ${({ theme }) => theme.fontSize.normal};
`;

export default Paragraph;
