import styled from "styled-components";
import COLORS from "../../../constants/colors";

const PageTitleContainer = styled.div`
  margin: 5%;
  padding: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: aliceblue;
`;

const TitleAvatar = styled.img`
  align-self: center;
  width: 15%;
  border-radius: 50%;
  margin-bottom: 2%;

  @media (max-width: 700px) {
    width: 30%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 2%;
`;

const SmallTitle = styled.h3`
  font-family: "Kenzo", sans-serif;
  font-size: 1.5em;
  color: white;
  box-sizing: content-box;

  @media (max-width: 700px) {
    font-size: 1em;
  }
`;

const BigTitle = styled.h2`
  font-family: "Kenzo", sans-serif;
  font-size: 7em;
  font-variant: small-caps;
  background-image: linear-gradient(
    to right,
    ${COLORS.page_title_color_1},
    ${COLORS.page_title_color_2}
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 700px) {
    font-size: 5em;
  }
`;

export {
  PageTitleContainer,
  TitleAvatar,
  TitleContainer,
  SmallTitle,
  BigTitle,
};
