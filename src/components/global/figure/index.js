import React from "react";
import { FigureBox, Image, Caption } from "./styled";

export default function Figure(props) {
  return (
    <FigureBox>
      <Image src={props.image} data-aos="zoom-in"></Image>
      <Caption data-aos="zoom-out">{props.caption}</Caption>
    </FigureBox>
  );
}
