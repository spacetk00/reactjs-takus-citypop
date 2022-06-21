import styled from "styled-components";
import background from "../../images/header/background.webp";

const Container = styled.div`
  width: 100vw;
  height: 40vh;
  margin-top: 2%;
  background-image: url(${background});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export default Container;