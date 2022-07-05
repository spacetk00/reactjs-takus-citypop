import styled from "styled-components";
import COLORS from "../../../constants/colors";
import TYPOS from "../../../constants/typos";
import SIZES from "../../../constants/sizes";

const Title = styled.h4`
  margin-top: 2%;
  color: ${COLORS.text_default_color};
  text-align: center;
  font-family: ${TYPOS.section_title_font}, sans-serif;
  font-size: ${TYPOS.section_title_size};
  font-variant: initial;

  @media (max-width: ${SIZES.ipad_width}) {
    font-size: ${TYPOS.section_title_md_size};
  }
`;

export default Title;