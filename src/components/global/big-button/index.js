import React from "react";
import { LinkButton, ButtonText } from "./styled";

export default function BigButton(props) {
  return (
    <div data-aos="slide-up">
      <LinkButton
        href={props.link}
        target="_blank"
        rel="noreferrer"
        color={props.color}
      >
        <ButtonText>{props.text}</ButtonText>
      </LinkButton>
    </div>
  );
}
