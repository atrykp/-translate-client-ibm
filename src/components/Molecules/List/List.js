import styled from "styled-components";
import Link from "../../Atoms/Link/Link";
import Input from "../../Atoms/Input/Input";

const StyledListWrapper = styled.div`
  display: grid;

  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 10px;
`;

const List = () => {
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
