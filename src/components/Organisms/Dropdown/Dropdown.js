import styled from "styled-components";
import RoundButton from "../../Atoms/RoundButton/RoundButton";
import List from "../../Molecules/List/List";

const StyledWrapper = styled.div`
  text-align: center;
  width: 180px;
`;
const Dropdown = () => {
  return (
    <StyledWrapper>
      <RoundButton>PL</RoundButton>
      <List />
    </StyledWrapper>
  );
};

export default Dropdown;
