import styled from "styled-components";
import SIZES from '../../constants/sizes';
import TYPOS from "../../constants/typos";
import COLORS from "../../constants/colors"

const ExperiencesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerTitle = styled.h4`
  margin-top: 2%;
  color: ${COLORS.text_default_color};
  text-align: center;
  font-family: ${TYPOS.section_title_font}, sans-serif;
  font-size: ${TYPOS.section_title_size};
  font-variant: initial;

  @media (max-width: ${SIZES.ipad_width}) {
    font-size: ${TYPOS.section_title_md_size};
  }
`;

const UsersContainer = styled.div`
  width: 90%;
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export { ExperiencesContainer, ContainerTitle, UsersContainer };
