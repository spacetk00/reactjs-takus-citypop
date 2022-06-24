import styled, { keyframes } from "styled-components";
import COLORS from "../../../constants/colors";

const MoveInBottom = keyframes`
    0% {
      opacity: 0;
      transform: translateY(3rem);
    }
  
    100% {
      opacity: 1;
      transform: translate(0);
    }
 `;

const LinkButton = styled.a`
  text-decoration: none;
  width: 12%;
  height: 20%;
  border-radius: 30px;
  padding: 1%;
  background-image: linear-gradient(
    ${COLORS.button_header_color_1},
    ${COLORS.button_header_color_2}
  );
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: ${MoveInBottom};
  animation-duration: 2s;

  @media (max-width: 1200px) {
    min-width: 20%;
    min-height: 15%;
    font-size: 0.8em;
    padding: 0.5%;
  }

  @media (max-width: 700px) {
    margin-top: 2%;
    min-width: 30%;
    height: 10%;
    font-size: 0.8em;
    padding: 0.5%;
  }
`;

const ButtonText = styled.p`
  color: white;
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
`;
export { ButtonText, LinkButton };
