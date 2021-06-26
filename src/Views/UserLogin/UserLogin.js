import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Loading from "../../components/Atoms/Loading/Loading";
import Input from "../../components/Atoms/Input/Input";
import Paragraph from "../../components/Atoms/Paragraph/Paragraph";
import Button from "../../components/Atoms/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import userLoginAction from "../../thunk-actions/userLoginAction";
import MainTemplate from "../../templates/MainTemplate";

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
const StyledLoadingWrapper = styled.div`
  justify-self: center;
  align-self: center;
  width: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
`;
const StyledUserWarning = styled.p`
  font-size: 2.5rem;
  background-color: darkred;
  color: white;
  text-align: center;
`;

const UserLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const history = useHistory();

  const dispatch = useDispatch();
  const userLoginState = useSelector((state) => state.userLoginReducer);

  const { loading, user, error } = userLoginState;

  useEffect(() => {
    if (user._id) {
      history.goBack();
    }
  }, [user, history]);

  const onSubmit = async (data) => {
    dispatch(userLoginAction(data));
  };

  return (
    <StyledWrapper>
      <StyledFormWrapper>
        {loading ? (
          <StyledLoadingWrapper>
            <Loading />
          </StyledLoadingWrapper>
        ) : (
          <>
            <StyledParagraph>Login</StyledParagraph>
            {error && <StyledUserWarning>{error}</StyledUserWarning>}
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
              <StyledButton onClick={handleSubmit(onSubmit)}>
                Login
              </StyledButton>
              <StyledLink to="/register">Sign Up</StyledLink>
            </StyledButtonsWrapper>
          </>
        )}
      </StyledFormWrapper>
      <MainTemplate />
    </StyledWrapper>
  );
};

export default UserLogin;
