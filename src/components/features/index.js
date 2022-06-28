import React from "react";
import * as F from "./styled";
import FeatureBox from "./feature-box";
import djOcy from "../../images/features/dj_ocy.webp";
import gang from "../../images/features/gang_fight.webp";
import albuns from "../../images/features/albuns.webp";

export default function Features() {
  return (
    <F.FeaturesContainer>
      <F.ContainerTitle data-aos="zoom-in-up">We Have</F.ContainerTitle>

      <FeatureBox
        animation="fade-right"
        box_title="Music Events"
        box_text={[
          "On some weekends we have music events organized by ",
          <F.StrongWord>Dj Ocy</F.StrongWord>,
          " and ",
          <F.StrongWord>Dj Dogue</F.StrongWord>,
          ", where we use the server's own bot to play great citypop music, members can also participate by adding songs.",
        ]}
        box_img={djOcy}
        box_img_alt="A picture of Dj"
      />

      <FeatureBox
        animation="fade-left"
        box_title="Gang Wars"
        box_text="The server members like to split into opposing gangs to argue about which food or singer is better, you can participate in this or just ignore these fools."
        box_img={gang}
        box_img_alt="A picture of dumb gangs on Taku's server"
      />

      <FeatureBox
        animation="fade-right"
        box_title="Fun Events"
        box_text={[
          "There are some fun events that happen occasionally on the server, the most famous are ",
          <F.MeaningWord title="An event hosted by Taku, which consists of guessing what music is playing">
            Guess the City Pop
          </F.MeaningWord>,
          " and ",
          <F.MeaningWord title="An event hosted by Gatito, where the participants enter a tournament using their favorite music">
            Save Your Fave
          </F.MeaningWord>,
          ".",
        ]}
        box_img={albuns}
        box_img_alt="A image of albuns"
      />
    </F.FeaturesContainer>
  );
}
