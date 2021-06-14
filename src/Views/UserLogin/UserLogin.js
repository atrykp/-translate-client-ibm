import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";
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
  padding: 50px 0;
  border-radius: 10px;
  background-color: lightgray;
`;
const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.secondaryDark};
  text-align: center;
  margin-bottom: 2%;
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
const StyledErrorParagraph = styled(Paragraph)`
  margin: 0 auto;
  color: darkred;
  text-align: center;
`;

const UserLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => console.log(data);

  return (
    <StyledWrapper>
      <StyledFormWrapper>
        <StyledParagraph>Login</StyledParagraph>
        <StyledLabelParagraph>Email:</StyledLabelParagraph>
        <StyledInput
          type="emial"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />
        <StyledErrorParagraph>
          {errors.email?.type === "required" && "Email is required"}
          {errors.email?.type === "pattern" && "Invalid email value"}
        </StyledErrorParagraph>
        <StyledLabelParagraph>Password:</StyledLabelParagraph>
        <StyledInput
          type="password"
          {...register("password", {
            required: true,
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/,
          })}
        />
        <StyledButtonsWrapper>
          <StyledErrorParagraph>
            {errors.password?.type === "required" && "Password is required"}
            {errors.password?.type === "pattern" &&
              "Minimum five characters, at least one letter and one number"}
          </StyledErrorParagraph>
          <StyledButton onClick={handleSubmit(onSubmit)}>Login</StyledButton>
          <StyledLink to="/register">Sign Up</StyledLink>
        </StyledButtonsWrapper>
      </StyledFormWrapper>
    </StyledWrapper>
  );
};

export default UserLogin;
