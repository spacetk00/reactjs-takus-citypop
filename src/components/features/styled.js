import styled from "styled-components";
import SIZES from "../../constants/sizes";

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

export { FeaturesContainer, StrongWord, MeaningWord };
