import styled from "styled-components";
import SIZES from "../../constants/sizes";
import TYPOS from '../../constants/typos';
import COLORS from "../../constants/colors";

const FeaturesContainer = styled.div`
  width: 100%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:nth-child(even) {
    align-self: flex-end;
  }

  & > div:nth-child(2) > picture {
    :hover {
      cursor: pointer;
      transform: scale(1.1) rotate(10deg);
    }
  }

  & > div:nth-child(odd) {
    align-self: flex-start;
    flex-direction: row-reverse;
  }

  @media (max-width: ${SIZES.generic_laptop_width}) {
    & > div:nth-child(n) {
      align-self: center;
    }
  }

  @media (max-width: ${SIZES.ipad_width}) {
    & > div:nth-child(odd) {
      flex-direction: column;
    }
  }
`;

const ContainerTitle = styled.h4`
  margin-top: 2%;
  font-size: ${TYPOS.section_title_size};
  color: ${COLORS.text_default_color};
  text-align: center;
  font-family: ${TYPOS.section_title_font}, sans-serif;
  font-variant: initial;

  @media (max-width: ${SIZES.ipad_width}) {
    font-size: ${TYPOS.section_title_md_size};
  }
`;

const StrongWord = styled.strong`
  font-family: "Roboto Bold", sans-serif;
  transition: .5s;
  cursor: pointer;
  padding-left: 5px;
  padding-right: 5px;

  :hover {
    background-color: orangered;
    border-radius: 2px;
  }
`

const MeaningWord = styled.abbr`
  font-family: "Roboto Bold", sans-serif;
  transition: .5s;
  cursor: pointer;
  padding-left: 1px;
  padding-right: 1px;

  :hover {
    background-color: orangered;
    border-radius: 2px;
  }
`

export { FeaturesContainer, ContainerTitle, StrongWord, MeaningWord };
