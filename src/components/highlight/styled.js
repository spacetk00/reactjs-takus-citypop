import styled from "styled-components";
import COLORS from "../../constants/colors";
import SIZES from "../../constants/sizes";

const HighlightContainer = styled.div`
  width: 90%;
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${SIZES.generic_laptop_width}) {
    flex-direction: column;
  }

  @media (max-width: ${SIZES.ipad_width}) {
    width: 100%;
  }
`;

const ImageBox = styled.picture`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${SIZES.generic_laptop_width}) {
    width: 100%;
  }

  @media (max-width: ${SIZES.ipad_width}) {
    height: 25%;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const TextBox = styled.div`
  transform: skew(-20deg);
  width: 40%;
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
    transform: scale(1.5);
    > * {
      transform: skew(0);
    }
  }

  @media (max-width: ${SIZES.generic_laptop_width}) {
    width: 100%;
    transform: skew(0deg);
    :hover {
      transform: scale(1.1);
    }
  }
`;

const BoxTitle = styled.h4`
  transform: skew(20deg);
  color: white;
  font-size: 1.5em;
  text-align: center;
  margin: 2%;

  @media (max-width: ${SIZES.generic_laptop_width}) {
    transform: skew(0deg);
  }
`;

const BoxText = styled.p`
  transform: skew(20deg);
  color: white;
  text-align: justify;
  margin-top: 2%;

  @media (max-width: ${SIZES.generic_laptop_width}) {
    transform: skew(0deg);
  }
`;

export { HighlightContainer, ImageBox, Image, TextBox, BoxTitle, BoxText };
