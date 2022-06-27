import styled from "styled-components";
import COLORS from '../../../constants/colors';
import SIZES from '../../../constants/sizes';
import TYPOS from "../../../constants/typos";

const UserBoxContainer = styled.div`
  width: 600px;
  height: 200px;
  border-radius: 15px;
  margin: 2%;
  display: flex;
  align-items: center;
  background-image: linear-gradient(
    to bottom right,
    ${COLORS.users_color_1},
    ${COLORS.users_color_2},
    ${COLORS.users_color_3}
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
    width: 35%;
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
  background-image: linear-gradient(to right, ${COLORS.user_tbox_color_1}, ${COLORS.user_tbox_color_2});
  box-shadow: 5px 3px 4px ${COLORS.textbox_shadow_color};
  border-radius: 20px;
  width: 60%;
  height: 70%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${SIZES.ipad_width}) {
    height: 80%;
    padding: 2%;
  }

  @media (max-width: ${SIZES.iphoneX_width}) {
    width: 60%;
    padding: 2%;
  }
`;

const UserName = styled.h5`
  color: white;
  text-align: center;
  margin-bottom: 2%;
  font-size: ${TYPOS.box_title_size};
  font-family: ${TYPOS.box_title_font}, sans-serif;

  @media (max-width: ${SIZES.ipad_width}) {
    font-size: ${TYPOS.box_title_md_size};
  }
`;

const UserText = styled.p`
  color: white;

  @media (max-width: ${SIZES.monitor_1366_width}) {
    font-size: ${TYPOS.box_text_md_size};
  }

  @media (max-width: ${SIZES.ipad_width}) {
    text-align: center;
  }
`;

export { UserBoxContainer, UserAvatarContainer,UserAvatar, TextBox, UserName, UserText };
