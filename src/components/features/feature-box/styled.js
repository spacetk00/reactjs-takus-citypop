import styled from "styled-components";
import COLORS from "../../../constants/colors";
import SIZES from "../../../constants/sizes";

const FeatureBox = styled.div`
  width: 900px;
  height: 300px;
  border: 5px solid #171717;
  border-radius: 0px;
  border-radius: 5px;
  background-image: linear-gradient(
    to bottom right,
    ${COLORS.features_color_1},
    ${COLORS.features_color_2},
    ${COLORS.features_color_3}
  );
  margin-top: 5%;
  margin-left: 12%;
  margin-right: 12%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: 1s;
    border: 5px solid;
    border-radius: 0px;
    border-image: linear-gradient(
        45deg,
        ${COLORS.border_color_1},
        ${COLORS.border_color_2}
      )
      2;
  }

  @media (max-width: ${SIZES.monitor_1366_width}) {
    width: 700px;
  }

  @media (max-width: ${SIZES.ipad_width}) {
    flex-direction: column;
    width: 500px;
    height: 450px;
  }

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    flex-direction: column;
    width: 350px;
    height: 400px;
  }
`;

const FeatureImageBox = styled.picture`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2%;

  @media (max-width: ${SIZES.ipad_width}) {
    width: 100%;
    height: 60%;
  }
`;
const Image = styled.img`
  width: 80%;

  @media (max-width: ${SIZES.ipad_width}) {
    width: 70%;
  }
`;

const TextBox = styled.div`
  width: 50%;
  height: 70%;
  border-left: 10px solid #00000080;
  border-right: 10px solid #00000080;
  background-color: ${COLORS.features_textbox_color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;

  :hover {
    transform: translate(0deg);
  }

  @media (max-width: ${SIZES.ipad_width}) {
    width: 100%;
    height: 40%;
    border-top: 10px solid #00000080;
    border-bottom: 10px solid #00000080;
    border-left: 0px;
    border-right: 0px;
  }
`;

const BoxTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 7%;
  font-size: 1.5em;
  color: white;

  @media (max-width: 1200px) {
    font-size: 1.2em;
    align-self: center;
    margin-bottom: 3%;
  }

  @media (max-width: ${SIZES.ipad_width}) {
    font-size: 1.2em;
    align-self: center;
  }
`;

const BoxText = styled.p`
  font-size: 1em;
  text-align: center;
  color: white;

  @media (max-width: 700px) {
    font-size: 1em;
  }
`;

export { FeatureBox, FeatureImageBox, Image, TextBox, BoxTitle, BoxText };
