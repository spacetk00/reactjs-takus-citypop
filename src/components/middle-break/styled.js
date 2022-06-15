import styled from "styled-components";
import background from "../../images/header/background.webp";

const Container = styled.div`
  width: 100vw;
  height: 40vh;
  margin-top: 5%;
  margin-bottom: 5%;
  background-image: url(${background});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export default Container;