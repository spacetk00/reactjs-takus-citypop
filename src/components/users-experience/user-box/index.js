import React from "react";
import * as UB from "./styled";

export default function UserBox(props) {
  return (
    <>
      <UB.UserBoxContainer data-aos={props.animation}>
        <UB.UserAvatarContainer>
          <UB.UserAvatar srcSet={props.user_avatar} alt="An avatar of the user" />
        </UB.UserAvatarContainer>
        <UB.TextBox>
          <UB.UserName>{props.user_name}</UB.UserName>
          <UB.UserText>{props.user_text}</UB.UserText>
        </UB.TextBox>
      </UB.UserBoxContainer>
    </>
  );
}
