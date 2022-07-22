import React from "react";
import { Container, SectionContainer } from "./styled";
import PageTitle from "../components/global/pagetitle";
import SingleTextBox from "../components/global/single-text-box";
import RouletteBox from "../components/roulette-box";

import Roulett from "../images/titles/roulette.webp";

export default function Roulette() {
  return (
    <Container>
      <SectionContainer>
        <PageTitle
          big_title="roulette"
          title_avatar={Roulett}
          title_avatar_alt="CityPop Title Image"
        />
        <SingleTextBox
          text="Test your luck and find a jpop singer to listen to today, maybe you can find your new favorite singer."
        />
        <RouletteBox/>
      </SectionContainer>
    </Container>
  );
}
