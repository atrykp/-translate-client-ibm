import styled from "styled-components";
import RoundButton from "../Atoms/RoundButton/RoundButton";
import List from "../Atoms/List/List";

const StyledWrapper = styled.div`
  text-align: center;
  max-width: 150px;
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
