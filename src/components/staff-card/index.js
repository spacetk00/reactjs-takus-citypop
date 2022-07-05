import React from "react";
import * as S from "./styled";

export default function StaffCard(props) {
  return (
    <S.CardContainer color={props.color} data-aos="flip-left">
      <S.AvatarBox>
        <S.Avatar src={props.image} />
      </S.AvatarBox>
      <S.InfoBox>
        <S.StaffName>{props.name}</S.StaffName>
        <S.AboutText>{props.about}</S.AboutText>
      </S.InfoBox>
    </S.CardContainer>
  );
}
