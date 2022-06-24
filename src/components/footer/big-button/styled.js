import styled from "styled-components";
import COLORS from "../../../constants/colors";
import SIZES from "../../../constants/sizes";

const LinkButton = styled.a`
  text-decoration: none;
  width: 22%;
  height: 12%;
  border-radius: 30px;
  padding: 1%;
  background-image: linear-gradient(
    ${COLORS.button_footer_color_1},
    ${COLORS.button_footer_color_2}
  );
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${SIZES.generic_laptop_width}) {
    margin-bottom: 2%;
    width: 25%;
  }

  @media (max-width: ${SIZES.iphone_proMax_width}) {
    margin-top: 2%;
    width: 30%;
    height: 15%;
  }
`;

const ButtonText = styled.p`
  color: white;
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
`;
export { ButtonText, LinkButton };
