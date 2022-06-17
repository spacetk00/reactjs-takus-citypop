import React from "react";
import * as F from "./styled";
import FeatureBox from "./feature-box";
import djOcy from "../../images/features/dj_ocy.webp";
import gang from "../../images/features/gang_fight.webp";
import albuns from "../../images/features/albuns.webp";

export default function Features() {

  return (
    <F.FeaturesContainer>
      <F.ContainerTitle>We Have</F.ContainerTitle>
      <FeatureBox
        box_title="Music Events"
        box_text="On some weekends we have music events organized by Dj Dogue and Dj Ocy, where we use the server's own bot to play great citypop music, members can also participate by adding songs."
        box_img={djOcy}
        box_img_alt="A picture of Dj"
      />
      <FeatureBox
        box_title="Gang Wars"
        box_text="The server members like to split into opposing gangs to argue about which food or singer is better, you can participate in this or just ignore these fools."
        box_img={gang}
        box_img_alt="A picture of dumb gangs on Taku's server"
      />
      <FeatureBox
        box_title="Fun Events"
        box_text='There are some fun events that happen occasionally on the server, the most famous are "Guess the City Pop" and "Save Your Fave".'
        box_img={albuns}
        box_img_alt="A image of albuns"
      />
    </F.FeaturesContainer>
  );
}
