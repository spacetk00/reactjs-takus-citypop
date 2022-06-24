import styled from "styled-components";
import COLORS from "../../../constants/colors";
import SIZES from "../../../constants/sizes";

const RelatedServerContainer = styled.div`
  width: 80%;
  height: 60%;
  border-radius: 20px;
  background-image: linear-gradient(
    to bottom right,
    ${COLORS.sever_box_color_1},
    ${COLORS.sever_box_color_2}
  );
  margin-top: 3%;
  margin-bottom: 3%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${SIZES.generic_laptop_width}) {
    width: 90%;
    height: 60%;
  }
`;

const ServerImgBox = styled.picture`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServerImg = styled.img`
  width: 80%;
  border-radius: 50%;
`;

const TextBox = styled.div`
  width: 55%;
  height: 80%;
  background-color: blueviolet;
  padding: 2%;

  @media (max-width: ${SIZES.monitor_1366_width}) {
  }
`;

const BoxTitle = styled.h4`
  text-align: center;
  color: white;
  font-size: 1em;
  margin-top: 2%;
  margin-bottom: 5%;
`;

const BoxText = styled.p`
  font-size: 1.1em;
  color: white;
  text-align: center;

  @media (max-width: ${SIZES.monitor_1366_width}) {
    font-size: .8em;
  }

  @media (max-width: ${SIZES.iphoneX_width}) {
    font-size: .5em;
  }
`;

export {
  RelatedServerContainer,
  ServerImgBox,
  ServerImg,
  TextBox,
  BoxTitle,
  BoxText,
};