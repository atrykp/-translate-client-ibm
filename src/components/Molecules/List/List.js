import styled from "styled-components";
import Link from "../../Atoms/Link/Link";
import Input from "../../Atoms/Input/Input";

const StyledListWrapper = styled.div`
  display: ${({ visible }) => (visible ? "grid" : "none")};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
`;

const List = ({ visible = null }) => {
  return (
    <StyledListWrapper>
      <Input secondary placeholder="search" />
      <Link>Język jeden</Link>
      <Link>Język dwa</Link>
      <Link>Język trzy</Link>
      <Link>Język cztery</Link>
      <Link>Język pięć</Link>
    </StyledListWrapper>
  );
};

export default List;
