import React from "react";
import * as S from "./styled";

export default function SingleTextBox(props) {
  return (
    <S.Container data-aos="fade-left">
      <S.Text>
        {props.text}
      </S.Text>
    </S.Container>
  );
}
