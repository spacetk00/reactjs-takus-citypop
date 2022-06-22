import styled from "styled-components";
import COLORS from '../../constants/colors';
import SIZES from '../../constants/sizes';

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
  font-weight: bold;

  @media (max-width: ${SIZES.ipad_width}) {
    font-size: .9em;
  }

  @media (max-width: ${SIZES.iphoneX_width}) {
    font-size: .7em;
  }
`

export {FooterContainer, FooterContent, FooterInfo, InfoText}