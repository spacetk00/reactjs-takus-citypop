import styled from "styled-components";
import highlightImage from "../../images/body/highlight/highlight1.webp";
import { COLORS } from "../../constants/index";

const HighlightContainer = styled.div`
  height: 600px;
  width: 70%;
  display: flex;
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
  background-image: url(${highlightImage});
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;

  @media (max-width: 900px) {
    width: 100%;
    background-position: center bottom;
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

  @media (max-width: 900px) {
    width: 100%;
    border-top-left-radius: 20%;
    border-top-right-radius: 20%;
  }
`;

const BoxTitle = styled.h4`
  color: white;
  font-size: 1.5em;
  text-align: center;
  margin: 2%;
`;

const BoxText = styled.p`
  color: white;
  text-align: justify;
  margin-top: 2%;

  @media (max-width: 900px) {
    font-size: .9em;
  }
`;

export { HighlightContainer, ImageBox, TextBox, BoxTitle, BoxText };
