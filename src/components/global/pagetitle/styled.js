import styled from "styled-components";
import COLORS from "../../../constants/colors";
import SIZES from "../../../constants/sizes";
import TYPOS from "../../../constants/typos";

const PageTitleContainer = styled.div`
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AvatarBox = styled.picture`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleAvatar = styled.img`
  width: 50%;
  border-radius: 50%;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1%;
`;

const SmallTitle = styled.h3`
  font-family: "Kenzo", Arial, sans-serif;
  font-size: ${TYPOS.page_title_sm_size};
  color: white;
  box-sizing: content-box;
  margin-top: 4%;

  @media (max-width: ${SIZES.generic_laptop_width}) {
    font-size: ${TYPOS.page_title_sm_size_res};
  }
`;

const BigTitle = styled.h2`
  font-family: ${TYPOS.page_title_font}, Arial, sans-serif;
  font-size: ${TYPOS.page_title_bg_size};
  font-variant: small-caps;
  color: ${COLORS.page_title_color};

  @media (max-width: ${SIZES.generic_laptop_width}) {
    font-size: ${TYPOS.page_title_bg_size_res};
  }
`;

export {
  PageTitleContainer,
  AvatarBox,
  TitleAvatar,
  TitleContainer,
  SmallTitle,
  BigTitle,
};
