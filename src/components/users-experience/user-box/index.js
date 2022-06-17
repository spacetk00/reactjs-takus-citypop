import React from "react";
import * as UB from "./styled";

export default function UserBox(props) {
  return (
    <>
      <UB.UserBoxContainer>
        <UB.UserAvatar />
        <UB.TextBox>
          <UB.UserName>{props.user_name}</UB.UserName>
          <UB.UserText>{props.user_text}</UB.UserText>
        </UB.TextBox>
      </UB.UserBoxContainer>
    </>
  );
}
