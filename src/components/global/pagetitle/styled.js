import styled from "styled-components";
import COLORS from "../../../constants/colors";
import SIZES from "../../../constants/sizes";
import TYPOS from "../../../constants/typos";

const PageTitleContainer = styled.div`
  margin: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: aliceblue;
`;

const AvatarBox = styled.picture`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const TitleAvatar = styled.img`
  width: 55%;
  border-radius: 50%;

  @media (max-width: ${SIZES.generic_laptop_width}) {
    width: 40%;
  }

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    width: 70%;
  }
`;

const TitleContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  //background-color: orange;
  margin-left: 2%;
`;

const SmallTitle = styled.h3`
  font-family: ${TYPOS.page_title_font}, sans-serif;
  font-size: ${TYPOS.page_title_sm_size};
  color: white;
  box-sizing: content-box;

  @media (max-width: ${SIZES.generic_laptop_width}) {
    font-size: ${TYPOS.page_title_sm_size_res};
  }
`;

const BigTitle = styled.h2`
  font-family: ${TYPOS.page_title_font}, sans-serif;
  font-size:  ${TYPOS.page_title_bg_size};
  font-variant: small-caps;
  background-color: cadetblue;
  background-image: linear-gradient(
    to right,
    ${COLORS.page_title_color_1},
    ${COLORS.page_title_color_2}
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${SIZES.generic_laptop_width}) {
    font-size:  ${TYPOS.page_title_bg_size_res};
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
