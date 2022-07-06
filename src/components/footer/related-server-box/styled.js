import styled from "styled-components";
import COLORS from "../../../constants/colors";
import SIZES from "../../../constants/sizes";
import TYPOS from "../../../constants/typos";

const RelatedServerContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${SIZES.ipad_width}) {
    width: 100%;
    height: 60%;
  }
`;

const ContainerTitle = styled.h5`
  text-align: center;
  margin-bottom: 3%;
  color: ${COLORS.text_default_color};
  font-family: ${TYPOS.related_title_font};
  font-size: ${TYPOS.related_title_size};

  @media (max-width: ${SIZES.generic_laptop_width}) {
    width: 70%;
    margin-top: 2%;
    font-size: ${TYPOS.related_title_md_size};
  }

  @media (max-width: ${SIZES.ipad_width}) {
    margin-bottom: 2%;
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
  margin-bottom: 3%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${SIZES.generic_laptop_width}) {
    width: 90%;
    height: 60%;
  }

  @media (max-width: ${SIZES.ipad_width}) {
    margin-top: 1%;
    width: 90%;
    height: 50%;
  }

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    height: 70%;
  }

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    flex-direction: column;
    justify-content: space-evenly;
    height: 60%;
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
    transform: rotate(180deg) scale(0.7);
  }

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    height: 35%;
  }
`;

const ServerImg = styled.img`
  width: 70%;
  border-radius: 50%;

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    width: unset;
    height: 80%;
  }
`;

const TextBox = styled.div`
  width: 55%;
  height: 80%;
  border-radius: 20px;
  background-image: linear-gradient(
    to bottom right,
    ${COLORS.server_textbox_color_1},
    ${COLORS.server_textbox_color_2}
  );
  box-shadow: 5px 3px 4px ${COLORS.textbox_shadow_color};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 2%;
  transition: 1s;

  @media (max-width: ${SIZES.ipad_width}) {
    width: 50%;
    padding: 5% 3% 5% 3%;
  }

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    height: 50%;
    width: 90%;
  }
`;

const BoxTitle = styled.h5`
  text-align: center;
  color: ${COLORS.text_default_color};
  font-family: ${TYPOS.box_title_font};
  font-size: ${TYPOS.box_title_size};
  margin-bottom: 5%;

  @media (max-width: ${SIZES.ipad_width}) {
    margin-top: 1%;
    margin-bottom: 2%;
  }
`;

const BoxText = styled.p`
  font-size: ${TYPOS.box_text_size};
  color: ${COLORS.text_default_color};
  text-align: center;

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    font-size: ${TYPOS.box_text_md_size};
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
