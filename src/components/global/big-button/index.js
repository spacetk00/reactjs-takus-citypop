import React from "react";
import { LinkButton, ButtonText } from "./styled";

export default function BigButton(props) {
  return (
    <div data-aos="zoom-in">
      <LinkButton
        href={props.link}
        target="_blank"
        rel="noreferrer"
        color={props.color}
        onClick={props.action}
      >
        <ButtonText>{props.text}</ButtonText>
      </LinkButton>
    </div>
  );
}
