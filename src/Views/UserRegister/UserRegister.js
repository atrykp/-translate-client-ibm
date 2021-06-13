import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../../components/Atoms/Input/Input";
import Paragraph from "../../components/Atoms/Paragraph/Paragraph";
import Button from "../../components/Atoms/Button/Button";

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  height: 100vh;
  width: 100%;
  display: grid;
`;
const StyledInput = styled(Input)`
  width: 90%;
  margin: 10px auto;
`;
const StyledFormWrapper = styled.div`
  justify-self: center;
  align-self: center;
  display: grid;
  width: 95%;
  max-width: 400px;
  padding: 30px 0;
  border-radius: 10px;
  background-color: lightgray;
`;
const StyledParagraph = styled(Paragraph)`
  position: absolute;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.secondaryDark};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -1000%);
`;
const StyledLabelParagraph = styled(Paragraph)`
  margin-left: 5%;
  margin-top: 2%;
`;
const StyledButtonsWrapper = styled.div`
  display: grid;
  justify-self: center;
  justify-content: space-between;
`;
const StyledLink = styled(Link)`
  text-align: center;
  margin-top: 20px;
`;
const StyledButton = styled(Button)`
  margin-top: 10px;
`;

const UserRegister = () => {
  return (
    <StyledWrapper>
      <StyledParagraph>Register</StyledParagraph>
      <StyledFormWrapper>
        <StyledLabelParagraph>Name:</StyledLabelParagraph>
        <StyledInput type="text" />
        <StyledLabelParagraph>Email:</StyledLabelParagraph>
        <StyledInput type="email" />
        <StyledLabelParagraph>Password:</StyledLabelParagraph>
        <StyledInput type="password" />
        <StyledButtonsWrapper>
          <StyledButton>Sign Up</StyledButton>
          <StyledLink to="/login">Login</StyledLink>
        </StyledButtonsWrapper>
      </StyledFormWrapper>
    </StyledWrapper>
  );
};

export default UserRegister;
