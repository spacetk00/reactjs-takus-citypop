import styled from "styled-components";
import {COLORS} from '../../../constants/index'
const PageTitleContainer = styled.div`
  margin: 5%;
  padding: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleAvatar = styled.img`
  width: 25%;
  border-radius: 50%;

  @media (max-width: 700px) {
    width: 30%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const SmallTitle = styled.h3`
  font-family: "Kenzo", sans-serif;
  font-size: 2em;
  color: white;
  box-sizing: content-box;

  @media (max-width: 700px) {
    font-size: 1em;
  }
`

const BigTitle = styled.h2`
  font-family: "Kenzo", sans-serif;
  font-size: 9em;
  font-variant: small-caps;
  background-image: linear-gradient(to right, ${COLORS.page_title_color_1}, ${COLORS.page_title_color_2});
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 700px) {
    font-size: 7em;
  }
`

export {PageTitleContainer, TitleAvatar, TitleContainer, SmallTitle, BigTitle};