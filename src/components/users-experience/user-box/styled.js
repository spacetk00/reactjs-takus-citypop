import styled from "styled-components";
import {COLORS} from '../../../constants/index';

const UserBoxContainer = styled.div`
  width: 600px;
  height: 200px;
  border-radius: 15px;
  margin: 1%;
  display: flex;
  align-items: center;
  background-image: linear-gradient(
    to bottom right,
    ${COLORS.highlight_color_1},
    ${COLORS.highlight_color_2},
    ${COLORS.highlight_color_3}
  );

  @media (max-width: 1500px) {
    width: 400px;
    height: 150px;
  }

  @media (max-width: 900px) {
    margin: 1%;
  }

  @media (max-width: 600px) {
    margin: 3%;
  }
`;

const UserAvatarContainer = styled.picture`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1100px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 50%;
  }
`

const UserAvatar = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 50%;
  margin-left: 5%;

  @media (max-width: 1300px) {
    width: 70%;
    height: 70%;
  }

  @media (max-width: 900px) {
    width: 60%;
    height: 60%;
  }
`;

const TextBox = styled.div`
  width: 65%;
  margin: 2%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1500px) {
    height: 90%;
  }

  @media (max-width: 1100px) {
    margin-left: 5%;
    width: 60%;
  }

  @media (max-width: 900px) {
    align-self: flex-end;
    padding: 1%;
    width: 50%;
    height: 100%;
    justify-content: center;

  }
`;

const UserName = styled.h4`
  color: white;
  text-align: center;
  margin-bottom: 5%;
`;

const UserText = styled.p`
  color: white;

  @media (max-width: 1500px) {
    font-size: .9em;
  }

  @media (max-width: 900px) {
    font-size: .8em;
    text-align: center;
  }
`;

export { UserBoxContainer, UserAvatarContainer,UserAvatar, TextBox, UserName, UserText };
