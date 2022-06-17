import styled from "styled-components";

const FeaturesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:nth-child(even) {
    align-self: flex-start;
  }

  & > div:nth-child(odd) {
    align-self: flex-end;
  }

  & > div:last-child {
    margin-bottom: 5%;
  }

  @media (max-width: 1200px) {
    & > div:nth-child(n){
      align-self: center;
    }
  }

  @media (max-width: 700px) {
    & > div:nth-child(n){
      align-self: center;
    }
  }
`;

const ContainerTitle = styled.h4`
  font-size: 3.5em;
  color: white;
  text-align: center;
  font-family: "Kenzo", sans-serif;
  font-variant: initial;
`;

export { FeaturesContainer, ContainerTitle };
