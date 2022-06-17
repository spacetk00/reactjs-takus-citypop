import React from "react";
import * as U from "./styled";
import UserBox from "./user-box/index";

export default function UsersExperience() {
  return (
    <U.ExperiencesContainer>
      <U.ContainerTitle>Our members's experiences</U.ContainerTitle>
      <U.UsersContainer>
        <UserBox
          user_text="I’m so happy to be here! i never get bored. Taku is a crazy Akina fan, just ignore him."
          user_name="Inverse"
        />
        <UserBox
          user_text="“if Taku dies who gets server privilege's first?”"
          user_name="MarkOfApproval"
        />
        <UserBox
          user_text="“This server is cool, but I would like to evade more taxes.”"
          user_name="EmPostoeRobo"
        />
        <UserBox
          user_text="“I like the music and i’m just here for the chaos.”"
          user_name="Kotaro"
        />
      </U.UsersContainer>
    </U.ExperiencesContainer>
  );
}
