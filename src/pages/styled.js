import styled from "styled-components";
import wall from '../images/body/wall2.webp';
import COLORS from "../constants/colors";
import SIZES from "../constants/sizes";

const Container = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${COLORS.transparent_background_main} url(${wall});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-blend-mode: darken;

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    background: #17101f none;
  }
`;

const SectionContainer = styled.section`
  width: 80%;
  background-color: #181818;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;

  @media (max-width: ${SIZES.iphoneX_width}) {
    width: 95%;
  }
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 2%;
`

const StrongWord = styled.strong`
  font-family: "Roboto Bold", Arial, sans-serif;
  color: #bb87ff;
  transition: .5s;
  padding-left: 3px;
  padding-right: 3px;
`


export {Container, SectionContainer, Box, StrongWord};