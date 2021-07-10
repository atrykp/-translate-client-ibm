import styled from "styled-components";
import { motion } from "framer-motion";

const ErrorBar = styled(motion.p)`
  font-size: 1.2rem;
  position: absolute;
  background-color: red;
  width: 100%;
  color: white;
  text-align: center;
  top: -40px;
  left: 0;
`;

export default ErrorBar;
