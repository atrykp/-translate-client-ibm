import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import useReduxStore from "../../hooks/useReduxStore";
import MainTemplate from "../../templates/MainTemplate";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Paragraph from "../../components/Atoms/Paragraph/Paragraph";
import { userLogoutAction } from "../../thunk-actions/userLoginAction";
import { useDispatch, useSelector } from "react-redux";

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

const StyledUserWrapper = styled(StyledWrapper)`
  grid-template-rows: 15vh 25vh 30vh 10vh;
  grid-template-columns: 1fr;
  align-content: flex-start;
`;
const StyledUserInfoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  height: 100%;
  display: grid;
  align-content: center;
`;
const StyledTranslationWrapper = styled(StyledUserInfoWrapper)`
  background-color: white;
`;
const StyledHeader = styled.h1`
  color: ${({ theme }) => theme.colors.darkTxt};
  align-self: center;
  justify-self: center;
`;
const StyledSecondHeader = styled.h3`
  color: ${({ theme }) => theme.colors.mediumTxt};
  margin: 7px;
  font-weight: normal;
  border-bottom: 1px solid gray;
`;
const StyledHeaderSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledParagraphMain = styled.h3`
  color: ${({ theme }) => theme.colors.darkTxt};
  font-weight: bold;
  margin: 5px;
  padding: 2px;
`;
const StyledSpan = styled.span`
  font-weight: normal;
  margin-left: 5px;
`;
const StyledButton = styled.button`
  border: none;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  width: 50%;
  justify-self: center;
  font-size: 1.8rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.mediumTxt};
`;

const User = () => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  let translationList = useSelector((state) => state.tListReducer);
  const history = useHistory();
  const {
    getCardsListReducer: { list },
  } = useReduxStore();
  const {
    userLoginReducer: {
      user: { token },
    },
  } = useReduxStore();
  const dispatch = useDispatch();

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
          `https://translate-app-serv.herokuapp.com/api/users/user`,
          config
        );
        if (data) {
          setUserInfo(data);
          setIsUserLogin(true);
        } else {
          dispatch(userLogoutAction());
        }
      } catch (error) {
        setIsUserLogin(false);
      }
    };
    if (!userInfo._id) {
      getUser();
    }
  }, [userInfo, token, dispatch]);

  return (
    <div>
      {!isUserLogin ? (
        <StyledWrapper>
          <StyledLink to="/login">Login</StyledLink>
          <StyledParagraph>or</StyledParagraph>
          <StyledLink to="/register">Sign Up</StyledLink>
        </StyledWrapper>
      ) : (
        <StyledUserWrapper>
          <StyledHeader>
            Hello <StyledHeaderSpan>{userInfo.name}</StyledHeaderSpan>!
          </StyledHeader>
          <StyledUserInfoWrapper>
            <StyledSecondHeader>UserInfo:</StyledSecondHeader>
            <StyledParagraphMain>
              name: <StyledSpan>{userInfo.name}</StyledSpan>
            </StyledParagraphMain>
            <StyledParagraphMain>
              email: <StyledSpan>{userInfo.email}</StyledSpan>
            </StyledParagraphMain>
          </StyledUserInfoWrapper>
          <StyledTranslationWrapper>
            <StyledSecondHeader>Stats:</StyledSecondHeader>
            <StyledParagraphMain>
              flashcards: <StyledSpan>{list?.length}</StyledSpan>
            </StyledParagraphMain>
            <StyledParagraphMain>
              list: <StyledSpan>{translationList?.userTList.length}</StyledSpan>
            </StyledParagraphMain>
          </StyledTranslationWrapper>
          <StyledButton
            onClick={() => {
              dispatch(userLogoutAction());
              history.push("/");
            }}
          >
            Logout
          </StyledButton>
        </StyledUserWrapper>
      )}

      <MainTemplate />
    </div>
  );
};

export default User;
