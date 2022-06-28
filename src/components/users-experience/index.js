import React from "react";
import * as U from "./styled";
import UserBox from "./user-box/index";

import emposto from "../../images/users/emposto.webp";
import kotaro from "../../images/users/kotaro.webp";
import mark from "../../images/users/mark.webp";
import space from "../../images/users/space.webp";

import empostoMedium from "../../images/users/emposto_med.webp";
import kotaroMedium from "../../images/users/kotaro_med.webp";
import markMedium from "../../images/users/mark_med.webp";
import spaceMedium from "../../images/users/space.webp";

export default function UsersExperience() {
  return (
    <U.ExperiencesContainer>
      <U.ContainerTitle data-aos="zoom-in-up">Our members's experiences</U.ContainerTitle>
      <U.UsersContainer>
        <UserBox
          animation="fade-right"
          user_text='"I really like this sever, even though Taku has abandoned it, we have other mods that take care of the place very well."'
          user_name="Space"
          user_avatar={space}
          user_avatar_medium={spaceMedium}
        />
        <UserBox
          animation="fade-left"
          user_text="“if Taku dies who gets server privilege's first?”"
          user_name="MarkOfApproval"
          user_avatar={mark}
          user_avatar_medium={markMedium}
        />
        <UserBox
          animation="fade-right"
          user_text="“This server is cool, but I would like to evade more taxes.”"
          user_name="EmPostoeRobo"
          user_avatar={emposto}
          user_avatar_medium={empostoMedium}
        />
        <UserBox
          animation="fade-left"
          user_text="“I like the music and i’m just here for the chaos.”"
          user_name="Kotaro"
          user_avatar={kotaro}
          user_avatar_medium={kotaroMedium}
        />
      </U.UsersContainer>
    </U.ExperiencesContainer>
  );
}
