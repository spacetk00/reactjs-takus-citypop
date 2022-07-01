import styled from "styled-components";
import COLORS from "../../../constants/colors";

const Container = styled.div`
  background-color: purple;
  width: 60%;
  margin-bottom: 5%;
`;

const Text = styled.p`
  color: ${COLORS.text_default_color};
  font-size: 20px;
  text-align: justify;
  padding: 2%;
`;

export { Container, Text };
