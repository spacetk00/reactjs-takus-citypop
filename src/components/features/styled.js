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
  font-size: 3.5em;
  color: white;
  text-align: center;
  font-family: "Kenzo", sans-serif;
  font-variant: initial;
`;

export { FeaturesContainer, ContainerTitle };
