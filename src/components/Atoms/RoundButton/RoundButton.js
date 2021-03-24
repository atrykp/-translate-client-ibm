import styled from "styled-components";

const RoundButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #c1b8ed;
  border: none;
  border: 1px solid transparent;
  color: white;
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  transition: 0.2s linear;
  &:hover {
    background-color: #9489cc;
  }
  &:active {
    border-color: gray;
  }
`;

export default RoundButton;
