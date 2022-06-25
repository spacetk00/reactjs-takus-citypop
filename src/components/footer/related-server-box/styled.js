import styled from "styled-components";
import COLORS from "../../../constants/colors";
import SIZES from "../../../constants/sizes";

const RelatedServerContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${SIZES.ipad_width}) {
    width: 100%;
    height: 50%;
  }

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    height: 50%;
  }
`;

const ContainerTitle = styled.h4`
  text-align: center;
  color: white;
  font-size: 1.2em;
  margin-top: 5%;

  @media (max-width: ${SIZES.ipad_width}) {
    margin-top: 2%;
    font-size: 1em;
  }
`;

const ServerInfo = styled.div`
  width: 70%;
  height: 50%;
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

  @media (max-width: ${SIZES.ipad_width}) {
    height: 40%;
  }

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    height: 50%;
  }
`;

const ServerImgBox = styled.picture`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;

  :hover {
    transform: rotate(180deg) scale(.7)
  }
`;

const ServerImg = styled.img`
  width: 80%;
  border-radius: 50%;

  @media (max-width: ${SIZES.ipad_width}) {
    width: 60%;
  }

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    width: 80%;
  }
`;

const TextBox = styled.div`
  width: 55%;
  height: 80%;
  border-radius: 20px;
  background-image: linear-gradient(to bottom right,
    ${COLORS.server_textbox_color_1},
    ${COLORS.server_textbox_color_2}
  );
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2%;
  transition: 1s;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: ${SIZES.ipad_width}) {
    justify-content: center;
  }
  @media (max-width: ${SIZES.iphone_proMax_width}) {
    height: 90%;
  }
`;

const BoxTitle = styled.h4`
  text-align: center;
  color: white;
  font-size: 1em;
  margin-bottom: 5%;

`;

const BoxText = styled.p`
  font-size: 1.1em;
  color: white;
  text-align: center;

  @media (max-width: ${SIZES.monitor_1366_width}) {
    font-size: 0.8em;
  }

  @media (max-width: ${SIZES.iphoneX_width}) {
    font-size: 0.5em;
  }
`;

export {
  RelatedServerContainer,
  ContainerTitle,
  ServerInfo,
  ServerImgBox,
  ServerImg,
  TextBox,
  BoxTitle,
  BoxText,
};
