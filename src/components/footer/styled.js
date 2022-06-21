import styled from "styled-components";
import {COLORS} from '../../constants/index';

const FooterContainer = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: ${COLORS.footer_background};
`

const FooterContent = styled.div`
  width: 100%;
  height: 90%;
`

const FooterInfo = styled.div`
  width: 100%;
  height: 10%;
  padding: .5%;
  background-color: ${COLORS.footer_end};
  display: flex;
  justify-content: center;
  align-items: center;
`

const InfoText = styled.p`
  color: white;

  @media (max-width: 700px) {
    font-size: .8em;
  }
`

export {FooterContainer, FooterContent, FooterInfo, InfoText}