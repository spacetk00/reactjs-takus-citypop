import React from "react";
import { LinkButton, ButtonText } from "./styled";

export default function BigButton(props) {
  return (
    <LinkButton href="https://discord.com/invite/RHvyaAh" target="_blank" rel="noreferrer">
      <ButtonText>JOIN</ButtonText>
    </LinkButton>
  );
}
