import styled, { keyframes } from "styled-components";
import highlightImage from "../../images/body/highlight/highlight2.webp";
import { COLORS } from "../../constants/index";

const MoveInLeft = keyframes`
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }
  
  
    100% {
      opacity: 1;
      transform: translate(0);
    }
 `;

const HighlightContainer = styled.div`
  height: 600px;
  width: 70%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    width: 100%;
    margin-bottom: 10%;
  }

  @media (max-width: 1366px) {
    width: 100%;
  }
`;

const ImageBox = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  background-image: url(${highlightImage});
  background-repeat: no-repeat;
  background-size: cover;
  flex: 2;
  animation-name: ${MoveInLeft};
  animation-duration: 2s;

  @media (max-width: 900px) {
    background-position: center bottom;
    width: 100%;
  }
`;
const TextBox = styled.div`
  width: 60%;
  min-height: 30%;
  padding: 3%;
  background-image: linear-gradient(
    to bottom right,
    ${COLORS.highlight_color_1},
    ${COLORS.highlight_color_2},
    ${COLORS.highlight_color_3}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: .5s;

  :hover {
    transform: scale(1.2);
  }

  @media (max-width: 900px) {
    border-top-left-radius: 20%;
    border-top-right-radius: 20%;
    width: 100%;
    flex-grow: .5;
    padding: 1%;

    :hover {
      transform: scale(1);
    }
  }
`;

const BoxTitle = styled.h4`
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  margin: 2%;
`;

const BoxText = styled.p`
  color: white;
  text-align: justify;
  margin: 2%;

  @media (max-width: 700px) {
    font-size: 0.9em;
  }
`;

export { HighlightContainer, ImageBox, TextBox, BoxTitle, BoxText };
