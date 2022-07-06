import styled from "styled-components";
import COLORS from "../../constants/colors";
import SIZES from "../../constants/sizes";

const FooterContainer = styled.div`
  width: 100vw;
  height: 500px;
  background-color: ${COLORS.footer_background};

  @media (max-width: ${SIZES.generic_laptop_width}) {
    height: 400px;
  }

  @media (max-width: ${SIZES.ipad_width}) {
    height: 900px;
  }

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    //height: 700px;
  }
`;

const FooterContent = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${SIZES.ipad_width}) {
    flex-direction: column;
  }
`;

const FooterInfo = styled.div`
  width: 100%;
  height: 10%;
  padding: 0.5%;
  background-color: ${COLORS.footer_end};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoText = styled.p`
  color: white;
  font-weight: bold;

  @media (max-width: ${SIZES.ipad_width}) {
    font-size: 0.9em;
  }

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    font-size: 0.7em;
  }
`;

export {
  FooterContainer,
  FooterContent,
  FooterInfo,
  InfoText,
};
