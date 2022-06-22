import styled from "styled-components";
import COLORS from '../../../constants/colors';
import SIZES from '../../../constants/sizes';

const UserBoxContainer = styled.div`
  width: 600px;
  height: 200px;
  border-radius: 15px;
  margin: 2%;
  display: flex;
  align-items: center;
  background-image: linear-gradient(
    to bottom right,
    ${COLORS.highlight_color_1},
    ${COLORS.highlight_color_2},
    ${COLORS.highlight_color_3}
  );

  @media (max-width: ${SIZES.monitor_1366_width}) {
    width: 400px;
    height: 150px;
  }

  @media (max-width: ${SIZES.iphoneX_width}) {
    margin: 3%;
  }
`;

const UserAvatarContainer = styled.picture`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width:  ${SIZES.iphoneX_width}) {
    width: 40%;
  }
`

const UserAvatar = styled.img`
  width: 75%;
  border-radius: 50%;

  @media (max-width: ${SIZES.ipad_width}) {
    width: 80%;
  }
`;

const TextBox = styled.div`
  width: 65%;
  height: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${SIZES.ipad_width}) {
    padding: 2%;
    height: 100%;
  }
`;

const UserName = styled.h4`
  color: white;
  text-align: center;
  margin-bottom: 5%;
`;

const UserText = styled.p`
  color: white;

  @media (max-width: ${SIZES.monitor_1366_width}) {
    font-size: .9em;
  }

  @media (max-width: ${SIZES.iphoneX_width}) {
    font-size: .8em;
    text-align: center;
  }
`;

export { UserBoxContainer, UserAvatarContainer,UserAvatar, TextBox, UserName, UserText };
