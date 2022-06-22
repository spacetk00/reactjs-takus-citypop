import styled from "styled-components";
import COLORS from "../../constants/colors";
import SIZES from "../../constants/sizes";

const HighlightContainer = styled.div`
  width: 80%;
  height: 600px;
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${SIZES.monitor_1366_width}) {
    width: 100%;
    margin-bottom: 10%;
  }

  @media (max-width: ${SIZES.generic_laptop_width}) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 10%;
  }

  @media (max-width: ${SIZES.ipad_width}) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 10%;
  }
`;

const ImageBox = styled.picture`
  width: 35%;
  height: 100%;
  background-color: aqua;

  @media (max-width: ${SIZES.ipad_width}) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: ${SIZES.generic_laptop_width}) {
    width: 100%;
  }

  @media (max-width: ${SIZES.ipad_width}) {
    width: 100%;
  }
`;

const MiddleBlock = styled.div`
  position: relative;
  width: 30%;
  height: 100%;

  @media (max-width: ${SIZES.generic_laptop_width}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const TextBox = styled.div`
  position: absolute;
  top: 25%;
  left: -35%;
  transform: skew(-20deg);
  width: 600px;
  height: 250px;
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
  transition: 0.5s;

  :hover {
    transform: scale(1.2);
  }

  @media (max-width: ${SIZES.generic_laptop_width}) {
    position: relative;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    
    :hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    width: 100%;
    height: 100%;
    transform: skew(0deg);
  }
`;

const BoxTitle = styled.h4`
  transform: skew(20deg);
  color: white;
  font-size: 1.5em;
  text-align: center;
  margin: 2%;

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    transform: skew(0deg);
  }
`;

const BoxText = styled.p`
  transform: skew(20deg);
  color: white;
  text-align: justify;
  margin-top: 2%;

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    transform: skew(0deg);
  }
`;

export {
  HighlightContainer,
  ImageBox,
  Image,
  MiddleBlock,
  TextBox,
  BoxTitle,
  BoxText,
};
