import React from "react";
import * as H from "./styled";

import city1 from "../../images/highlight/city-1.webp";
import city2 from "../../images/highlight/city-2.webp";
import city1_md from "../../images/highlight/city-1_cut.webp";
import city2_md from "../../images/highlight/city-2_cut.webp";
export default function Highlight() {
  return (
    <H.HighlightContainer>
      <H.ImageBox data-aos="fade-right">
        <source
          media="(max-width: 1280px)"
          type="image/webp"
          srcSet={city1_md}
        />
        <H.Image src={city1} alt="An image of a japanese city" />
      </H.ImageBox>

      <H.TextBox>
        <H.BoxTitle>What the Pop!</H.BoxTitle>
        <H.BoxText>
          Taku's City-Pop is the best place to share and discuss old-school
          J-pop and City-Pop music with other members in a chill environment and
          channels for finding new music in the genre or even music similar to
          City-Pop from other countries.
        </H.BoxText>
      </H.TextBox>

      <H.ImageBox data-aos="fade-left">
        <source
          media="(max-width: 1280px)"
          type="image/webp"
          srcSet={city2_md}
        />
        <H.Image src={city2} alt="An image of a japanese city" />
      </H.ImageBox>
    </H.HighlightContainer>
  );
}
