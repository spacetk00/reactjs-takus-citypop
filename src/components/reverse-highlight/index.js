import React from "react";
import * as RH from "./styled";

export default function ReverseHighlight() {
  return (
    <RH.HighlightContainer>
      <RH.ImageBox />
      <RH.TextBox>
        <RH.BoxTitle>The City Pop Tribe!</RH.BoxTitle>
        <RH.BoxText>
          The members of the City Pop’s Tribe know exactly what they’re doing.
          Even though they don’t look happy they don’t look quite so bad. They
          definitely are singing their version of 'Ride On Time'. It might not be
          perfect, but it’s enough to make you cry.
        </RH.BoxText>
      </RH.TextBox>
    </RH.HighlightContainer>
  );
}
