import styled from "styled-components";
import wall from '../../images/body/wall.jpg';

const MainContainer = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  //background-color: #171717;
  background-image: url(${wall});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
`;

export {MainContainer};