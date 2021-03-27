import { useState } from "react";
import styled from "styled-components";
import RoundButton from "../../Atoms/RoundButton/RoundButton";
import List from "../../Molecules/List/List";

const StyledWrapper = styled.div`
  text-align: center;
  width: 180px;
  position: relative;
`;
const Dropdown = ({ setLanguage, language }) => {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

  return (
    <StyledWrapper>
      <RoundButton onClick={() => setIsActive((prevValue) => !prevValue)}>
        {language}
      </RoundButton>
      <List setLanguage={setLanguage} isActive={isActive} />
    </StyledWrapper>
  );
};

export default Dropdown;
