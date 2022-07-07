import styled from "styled-components";
import COLORS from "../../../constants/colors";
import SIZES from "../../../constants/sizes"
import TYPOS from "../../../constants/typos";

const Container = styled.div`
  width: 70%;
  margin-bottom: 5%;

  @media (max-width: ${SIZES.generic_laptop_width}) {
    width: 92%;
  }
`;

const Text = styled.p`
  color: ${COLORS.text_default_color};
  font-size: ${TYPOS.box_text_size};
  text-align: justify;
  text-justify: distribute;
  padding: 2%;
`;

export { Container, Text };
