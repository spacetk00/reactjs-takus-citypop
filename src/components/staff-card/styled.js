import styled from "styled-components";
import COLORS from "../../constants/colors";
import TYPOS from "../../constants/typos";
import SIZES from "../../constants/sizes";

const CardContainer = styled.div`
  background-image: linear-gradient(to right bottom, ${(props) => props.color});
  width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2%;

  @media (max-width: ${SIZES.ipad_width}) {
    height: 350px;
  }
`;

const AvatarBox = styled.picture`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  height: 80%;
  border-radius: 50%;
`;

const InfoBox = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StaffName = styled.h4`
  color: ${COLORS.text_default_color};
  text-align: center;
  margin-top: 2%;
  margin-bottom: 5%;
  font-size: ${TYPOS.staff_name_size};
  font-family: ${TYPOS.box_title_font}, sans-serif;
`;

const AboutText = styled.p`
  color: ${COLORS.text_default_color};
  font-family: "Roboto Bold", sans-serif;
  text-align: center;
`;

export { CardContainer, AvatarBox, Avatar, InfoBox, StaffName, AboutText };
