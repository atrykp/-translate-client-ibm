import styled from "styled-components";

const Notification = styled.p`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff050d6;
  color: black;
  padding: 20px;
  border-radius: 10px;
  animation: appear 1.5s ease-in-out;

  @keyframes appear {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default Notification;
