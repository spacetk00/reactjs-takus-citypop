import styled from "styled-components";
import wall from '../images/body/wall.jpg';
import SIZES from "../constants/sizes";

const Container = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgrey;
  background-image: url(${wall});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
`;

const SectionContainer = styled.section`
  width: 80%;
  background-color: #181818;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;

  @media (max-width: ${SIZES.iphoneX_width}) {
    width: 95%;
  }
`;

export {Container, SectionContainer};