import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Input from "../../components/Atoms/Input/Input";
import Paragraph from "../../components/Atoms/Paragraph/Paragraph";
import Button from "../../components/Atoms/Button/Button";
import { handleInputChange } from "../../helpers/handleInputChange";

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
  padding: 50px 0;
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

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    console.log(email, password);
  };

  return (
    <StyledWrapper>
      <StyledParagraph>Login</StyledParagraph>
      <StyledFormWrapper>
        <StyledLabelParagraph>Email:</StyledLabelParagraph>
        <StyledInput
          type="email"
          onChange={(e) => handleInputChange(e.target.value, setEmail)}
        />
        <StyledLabelParagraph>Password:</StyledLabelParagraph>
        <StyledInput
          type="password"
          onChange={(e) => handleInputChange(e.target.value, setPassword)}
        />
        <StyledButtonsWrapper>
          <StyledButton onClick={handleSubmit}>Login</StyledButton>
          <StyledLink to="/register">Sign Up</StyledLink>
        </StyledButtonsWrapper>
      </StyledFormWrapper>
    </StyledWrapper>
  );
};

export default UserLogin;
