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
  background-image: linear-gradient(${(props) => props.color});
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
    margin-top: 1%;
    width: 150px;
    height: 50px;
  }
`;

const ButtonText = styled.p`
  color: ${COLORS.text_default_color};
  text-align: center;
  font-size: ${TYPOS.button_text_size};
  font-family: ${TYPOS.button_font}, sans-serif;

  @media (max-width: ${SIZES.ipad_width}) {
    font-size: ${TYPOS.button_text_md_size};
  }
`;
export { ButtonText, LinkButton };
