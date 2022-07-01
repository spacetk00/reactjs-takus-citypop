import React from "react";
import {Container, SectionContainer} from "./styled";

import PageTitle from "../components/global/pagetitle";
import SingleTextBox from "../components/global/single-text-box";
import Akina from "../images/titles/akinator.webp";

export default function About() {
  return (
    <Container>
    <SectionContainer>
      <PageTitle
        big_title="about"
        title_avatar={Akina}
        title_avatar_alt="CityPop Title Image"
      />

      <SingleTextBox />
    </SectionContainer>
  </Container>
  );
}
