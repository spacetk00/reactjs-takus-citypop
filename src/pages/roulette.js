import React from "react";
import { Container, SectionContainer } from "./styled";
import PageTitle from "../components/global/pagetitle";
import SingleTextBox from "../components/global/single-text-box";
import RouletteBox from "../components/roulette-box";
import Break from "../components/break";

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
        <SingleTextBox text="Test your luck and find a jpop singer to listen to today, maybe you can find your new favorite singer. Use this roulette at your own risk, by using this tool you agree to the spying terms on this website. If you find any bugs report them to Taku via Discord." />
        <RouletteBox />
      </SectionContainer>
      <Break />
    </Container>
  );
}
