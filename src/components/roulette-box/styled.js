import styled from "styled-components";
import COLORS from "../../constants/colors";
import TYPOS from "../../constants/typos";
import SIZES from "../../constants/sizes";

const Container = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 5%;
  background-image: linear-gradient(to bottom right, ${COLORS.roulette_box_colors});
  border-radius: 20px;

  @media (max-width: ${SIZES.ipad_width}) {
    width: 90%;
  }
`

const ImgSection = styled.picture`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  `

const Img = styled.img`
  height: 90%;
  border-radius: 50%;
`

const Box = styled.div`
  width: 70%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Name = styled.h4`
  text-align: center;
  font-family: ${TYPOS.box_title_font};
  font-size: 2.5em;
  color: ${COLORS.text_default_color};
`

const LinkBox = styled.a`
  width: 30%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ClickGif = styled.img`
  height: 100%;
  transition: .7s;

  :hover {
    transform: scale(1.2);
    filter: contrast(150%);
    
  }
`

export {Container, ImgSection, Img, Box, Name, LinkBox, ClickGif}