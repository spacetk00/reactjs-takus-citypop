import styled from "styled-components";
import COLORS from "../../../constants/colors";
import SIZES from "../../../constants/sizes";
import TYPOS from "../../../constants/typos";

const LinkButton = styled.a`
  text-decoration: none;
  width: 220px;
  height: 70px;
  border-radius: 50px;
  padding: 1%;
  background-image: linear-gradient(
    ${COLORS.button_footer_color_1},
    ${COLORS.button_footer_color_2}
  );
  box-shadow: 3px 5px 10px ${COLORS.textbox_shadow_color};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s;

  :hover {
    transform: translateY(-10%);
    filter: contrast(150%);
  }

  :active {
    transform: translateY(10%);
    filter: blur(5px);
  }

  @media (max-width: ${SIZES.monitor_1366_width}) {
    margin-bottom: 2%;
    width: 150px;
    height: 50px;
  }

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    margin-top: 2%;
  }
`;

const ButtonText = styled.p`
  color: white;
  text-align: center;
  font-family: ${TYPOS.button_font}, sans-serif;
  font-size: ${TYPOS.button_text_size};
  font-weight: bold;

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    font-size: ${TYPOS.button_text_md_size};
  }
`;
export { ButtonText, LinkButton };
