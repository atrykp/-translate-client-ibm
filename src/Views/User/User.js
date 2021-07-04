import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import useReduxStore from "../../hooks/useReduxStore";
import { userLogoutAction } from "../../thunk-actions/userLoginAction";

import MainTemplate from "../../templates/MainTemplate";
import { Link, useHistory } from "react-router-dom";
import Paragraph from "../../components/Atoms/Paragraph/Paragraph";
import Input from "../../components/Atoms/Input/Input";

const StyledWrapper = styled(motion.div)`
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
  grid-template-rows: 15vh 35vh 20vh 10vh;
  grid-template-columns: 1fr;
  align-content: flex-start;
`;
const StyledUserInfoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  height: 100%;
  display: grid;
  align-content: center;
  position: relative;
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
const StyledIcon = styled.span`
  font-size: 20px;
  position: absolute;
  right: 10px;
`;

const StyledUserInfoHeader = styled.div`
  position: relative;
`;

const StyledInput = styled(Input)`
  width: 80%;
  max-width: 350px;
  height: 40px;
  margin: 5px;
  font-size: 1.9rem;
`;

const User = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isEdit, setIsEdit] = useState(false);
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

  const onSubmit = async (data, e) => {};

  return (
    <div>
      {isUserLogin ? (
        <StyledUserWrapper>
          <StyledHeader>
            Hello <StyledHeaderSpan>{userInfo.name}</StyledHeaderSpan>!
          </StyledHeader>
          <StyledUserInfoWrapper>
            <StyledUserInfoHeader>
              <StyledSecondHeader>
                UserInfo:
                <StyledIcon
                  className="material-icons edit"
                  // onClick={() => setIsEdit((prev) => !prev)}
                >
                  edit
                </StyledIcon>
              </StyledSecondHeader>
            </StyledUserInfoHeader>
            {isEdit ? (
              <div>
                <StyledInput
                  placeholder="name"
                  {...register("name", {
                    required: true,
                  })}
                />
                <StyledInput
                  placeholder="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                />
                <StyledInput
                  placeholder="new password"
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/,
                  })}
                />
                <span onClick={handleSubmit(onSubmit)} className="save">
                  save
                </span>
              </div>
            ) : (
              <>
                <StyledParagraphMain>
                  name: <StyledSpan>{userInfo.name}</StyledSpan>
                </StyledParagraphMain>
                <StyledParagraphMain>
                  email: <StyledSpan>{userInfo.email}</StyledSpan>
                </StyledParagraphMain>
                <StyledParagraphMain>
                  password: <StyledSpan>****</StyledSpan>
                </StyledParagraphMain>
              </>
            )}
          </StyledUserInfoWrapper>
          <StyledTranslationWrapper>
            <StyledSecondHeader>Stats:</StyledSecondHeader>
            <StyledParagraphMain>
              flashcards:{" "}
              <StyledSpan>{list.length ? list.length : 0}</StyledSpan>
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
      ) : (
        <StyledWrapper
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StyledLink to="/login">Login</StyledLink>
          <StyledParagraph>or</StyledParagraph>
          <StyledLink to="/register">Sign Up</StyledLink>
        </StyledWrapper>
      )}

      <MainTemplate />
    </div>
  );
};

export default User;
