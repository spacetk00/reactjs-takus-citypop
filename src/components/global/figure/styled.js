import styled from "styled-components";
import TYPOS from "../../../constants/typos";
import COLORS from "../../../constants/colors";
import SIZES from "../../../constants/sizes"

const FigureBox = styled.figure`
  width: 50%;
  height: 30%;
  //background-color: blanchedalmond;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${SIZES.ipad_width}) {
    width: 70%;
  }

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    width: 100%;
    height: 80%;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Caption = styled.caption`
  background-image: linear-gradient(${COLORS.highlight_color_1}, ${COLORS.highlight_color_2});
  font-size: ${TYPOS.box_text_size};
  color: ${COLORS.text_default_color};
  margin-top: 2%;
  margin-bottom: 2%;
  padding: 2%;
  border-radius: 30px;

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    font-size: ${TYPOS.box_text_sm_size};
  }
`

export { FigureBox, Image, Caption };
