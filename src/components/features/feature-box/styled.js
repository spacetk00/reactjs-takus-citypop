import styled from "styled-components";
import COLORS from "../../../constants/colors";

const FeatureBox = styled.div`
  width: 50vw;
  height: 35vh;
  border: 5px solid #171717;
  border-radius: 0px;
  border-radius: 5px;
  background-image: linear-gradient(
    to bottom right,
    ${COLORS.highlight_color_1},
    ${COLORS.highlight_color_2},
    ${COLORS.highlight_color_3}
  );
  margin-top: 5%;
  margin-left: 12%;
  margin-right: 12%;
  display: flex;
  justify-content: space-between;

  &:hover {
    transition: 1s;
    border: 5px solid;
    border-radius: 0px;
    border-image: linear-gradient(
        45deg,
        ${COLORS.border_color_1},
        ${COLORS.border_color_2}
      )
      2;
  }

  @media (max-width: 1200px) {
    width: 70vw;
    height: 30vh;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    width: 70vw;
    height: 40vh;
  }
`;

const FeatureImage = styled.img`
  width: 35%;
  height: 80%;
  margin-left: 10%;
  align-self: center;


  @media (max-width: 1200px) {
    margin-left: 7%;
    width: 30%;
    height: 60%;
  }

  @media (max-width: 700px) {
    width: 85%;
    height: 20%;
    margin-left: 0%;
    margin-top: 5%;
    margin-bottom: 1%;
    background-color: aliceblue;
    flex: 1;
  }
`;

const TextBox = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 5%;
  padding: 2%;

  @media (max-width: 700px) {
    width: 100%;
    margin-right: 3%;
  }
`;

const BoxTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 7%;
  font-size: 1.5em;
  color: white;

  @media (max-width: 1200px) {
    font-size: 1.2em;
    align-self: center;
    margin-bottom: 3%;
  }

  @media (max-width: 700px) {
    font-size: 1.2em;
    align-self: center;
  }

`;

const BoxText = styled.p`
  text-align: left;
  font-size: 1em;
  color: white;

  @media (max-width: 700px) {
    font-size: 1em;
    text-align: center;
  }
`;

export { FeatureBox, FeatureImage, TextBox, BoxTitle, BoxText };
