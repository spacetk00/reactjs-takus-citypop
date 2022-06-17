import styled from "styled-components";
import background from "../../images/header/background.webp";

const Container = styled.div`
  width: 100vw;
  height: 30vh;
  margin-top: 5%;
  margin-bottom: 5%;
  background-image: url(${background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  @media (max-width: 700px) {
    background-position: center top;
    background-attachment: unset;
  }
`;

export default Container;