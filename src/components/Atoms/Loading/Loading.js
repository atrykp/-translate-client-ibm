import styled from "styled-components";
import loading from "../../../assets/Icons/loading.png";

const Loading = styled.div`
  background-image: url(${loading});
  background-size: contain;
  width: 60px;
  height: 60px;
  animation: spin 0.7s infinite linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
