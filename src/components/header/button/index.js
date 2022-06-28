import React from "react";
import { LinkButton, ButtonText } from "./styled";

export default function BigButton() {
  return (
    <div data-aos="slide-up">
      <LinkButton
        href="https://discord.com/invite/RHvyaAh"
        target="_blank"
        rel="noreferrer"
      >
        <ButtonText>JOIN</ButtonText>
      </LinkButton>
    </div>
  );
}
