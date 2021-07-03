import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import useReduxStore from "../../hooks/useReduxStore";
import MainTemplate from "../../templates/MainTemplate";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Paragraph from "../../components/Atoms/Paragraph/Paragraph";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  align-content: center;
  justify-content: center;
`;
const StyledLink = styled(Link)`
  padding: 20px;
  margin: 30px 0;
  font-size: ${({ theme }) => theme.fontSize.large};
  text-decoration: none;
  text-align: center;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
  color: ${({ theme }) => theme.colors.darkTxt};
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryLight};
`;

const User = () => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const {
    userLoginReducer: {
      user: { token },
    },
  } = useReduxStore();

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const getUser = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/users/user`,
          config
        );
        console.log(data);
        if (data) {
          setUserInfo(data);
          setIsUserLogin(true);
        }
      } catch (error) {
        setIsUserLogin(false);
      }
    };
    if (!userInfo._id) {
      getUser();
    }
  }, [userInfo, token]);

  return (
    <div>
      {!isUserLogin ? (
        <>
          <StyledWrapper>
            <StyledLink to="/login">Login</StyledLink>
            <StyledParagraph>or</StyledParagraph>
            <StyledLink to="/register">Sign Up</StyledLink>
          </StyledWrapper>
        </>
      ) : (
        <h1>Witaj {userInfo.name}!</h1>
      )}

      <MainTemplate />
    </div>
  );
};

export default User;
