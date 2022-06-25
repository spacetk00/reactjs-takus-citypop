import styled from "styled-components";
import COLORS from "../../../constants/colors";
import SIZES from "../../../constants/sizes";

const TakuBox = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${SIZES.ipad_width}) {
    width: 100%;
    height: 50%;
  }

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    height: 50%;
  }
`;

const LogoBox = styled.picture`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${SIZES.ipad_width}) {
    height: 90%;
  }
`;

const Logo = styled.img`
  width: 35%;

  @media (max-width: ${SIZES.generic_laptop_width}) {
    width: 40%;
  }

  @media (max-width: ${SIZES.ipad_width}) {
    width: 40%;
  }

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    width: 50%;
  }
`;

const SocialBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${SIZES.ipad_width}) {
    height: 20%;
  }
`;

const SocialLinkContainer = styled.a`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.7s;

  :hover {
    transform: scale(1.5);
    filter: brightness(150%);
  }
`;

const SocialLogo = styled.img`
  height: 60%;
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
  TakuBox,
  LogoBox,
  Logo,
  SocialBox,
  SocialLinkContainer,
  SocialLogo,
  FooterInfo,
  InfoText,
};
