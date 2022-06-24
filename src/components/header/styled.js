import styled, { keyframes } from "styled-components";
import background from "../../images/header/background.webp";

import TYPOS from "../../constants/typos";

const MoveInLeft = keyframes`
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }
  
  
    100% {
      opacity: 1;
      transform: translate(0);
    }
 `;

const HeaderContainer = styled.header`
  width: 100vw;
  height: 40vh;
  background-image: url(${background});
  background-position: center 90%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
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
    font-size: ${TYPOS.nav_link_size};
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
  font-family: ${TYPOS.header_title_font}, sans-serif;
  font-variant: small-caps;
  font-size: ${TYPOS.header_title_size};
  transition: 2s;
  animation-name: ${MoveInLeft};
  animation-duration: 2s;

  @media (max-width: 900px) {
    font-size: 4em;
  }

  @media (max-width: 700px) {
    font-size: 3em;
  }
`;

export { HeaderContainer, NavContainer, HeaderCenterContainer, HeaderTitle };
