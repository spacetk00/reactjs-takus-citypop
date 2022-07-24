import styled from "styled-components";
import background from "../../images/header/background.webp";

import TYPOS from "../../constants/typos";
import SIZES from '../../constants/sizes';

const HeaderContainer = styled.header`
  width: 100vw;
  height: 40vh;
  background-image: url(${background});
  background-position: center 90%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    background-attachment: scroll;
  }
`;

const NavContainer = styled.nav`
  height: 15%;
  background-color: rgba(23, 23, 23, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    position: relative;
    color: white;
    text-decoration: none;
    margin: 0 5%;
    font-weight: bold;
    font-family: ${TYPOS.nav_link_font};
    font-size: ${TYPOS.nav_link_size};

    @media (max-width: ${SIZES.ipad_width}) {
      font-size: ${TYPOS.nav_link_md_size};
    }
  }

  a:hover {
    color: white;
  }

  a::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  a:hover::before {
    transform: scaleX(1);
  }
`;

const HeaderCenterContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  color: white;
  text-align: center;
  font-family: ${TYPOS.header_title_font}, Arial, sans-serif;
  font-variant: small-caps;
  font-size: ${TYPOS.header_title_size};
  transition: 2s;

  :hover {
    cursor: pointer;
  }

  @media (max-width: ${SIZES.ipad_width}) {
    font-size: ${TYPOS.header_title_md_size};
  }

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    font-size: ${TYPOS.header_title_sm_size};
  }
`;

export { HeaderContainer, NavContainer, HeaderCenterContainer, HeaderTitle };
