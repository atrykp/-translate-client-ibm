import styled from "styled-components";

const Notification = styled.p`
  position: fixed;
  display: block;
  width: auto;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff050d6;
  color: black;
  padding: 20px;
  border-radius: 10px;
  animation: appearnotification 1.5s ease-in-out;

  @keyframes appearnotification {
    0% {
      opacity: 0;
    }
    2% {
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
