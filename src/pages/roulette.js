import React from "react";
import { Container, SectionContainer } from "./styled";
import PageTitle from "../components/global/pagetitle";
import SingleTextBox from "../components/global/single-text-box";

import Roulett from "../images/titles/roulette.webp"
//import SINGERS from '../db/singers';
//console.log(SINGERS.akina.image);

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
          text="okookiojiojiojojiojoijiojiojiojoijoiojjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
          jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"
        />
      </SectionContainer>
    </Container>
  );
}
