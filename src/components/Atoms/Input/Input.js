import styled from "styled-components";

const Input = styled.input`
  font-size: 1.6rem;
  border-radius: 10px;
  padding: 10px 20px;
  border: 1px solid gray;
  outline: none;

  &:focus {
    border: 2px solid #9489cc;
  }
`;

export default Input;
