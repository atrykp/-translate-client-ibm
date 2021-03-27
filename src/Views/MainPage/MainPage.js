import MainTemplate from "../../templates/MainTemplate";
import styled from "styled-components";
import Dropdown from "../../components/Organisms/Dropdown/Dropdown";
import Input from "../../components/Atoms/Input/Input";
import Button from "../../components/Atoms/Button/Button";
import RoundButton from "../../components/Atoms/RoundButton/RoundButton";
import swap from "../../assets/Icons/swap.svg";

const StyledWrapper = styled.div`
  height: 100vh;
  display: grid;
  align-items: center;
`;
const StyledDropdownWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr 1fr;
`;
const StyledBottonBarWrapper = styled.div`
  align-self: end;
`;
const StyledRoundButton = styled(RoundButton)`
  background-image: url(${swap});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
`;
const StyledButton = styled(Button)`
  width: 80%;
  justify-self: center;
  align-self: start;
  height: 35%;
`;
const StyledInput = styled(Input)`
  width: 90%;
  justify-self: center;
  align-self: start;
  height: 35%;
`;

const MainPage = () => {
  return (
    <StyledWrapper>
      <StyledDropdownWrapper>
        <Dropdown />
        <StyledRoundButton />
        <Dropdown />
      </StyledDropdownWrapper>
      <StyledInput />
      <StyledButton>tłumacz</StyledButton>
      <StyledBottonBarWrapper>
        <MainTemplate />
      </StyledBottonBarWrapper>
    </StyledWrapper>
  );
};
export default MainPage;
