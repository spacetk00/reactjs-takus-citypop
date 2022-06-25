import styled from "styled-components";
import SIZES from "../../constants/sizes";
import TYPOS from '../../constants/typos';

const FeaturesContainer = styled.div`
  width: 100%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:nth-child(even) {
    align-self: flex-end;
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
  color: white;
  text-align: center;
  font-family: ${TYPOS.section_title_font}, sans-serif;
  font-variant: initial;

  @media (max-width: ${SIZES.ipad_width}) {
    font-size: ${TYPOS.section_title_md_size};
  }
`;

export { FeaturesContainer, ContainerTitle };
