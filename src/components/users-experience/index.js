import React from "react";
import * as U from "./styled";
import SectionTitle from "../global/section-title";
import UserBox from "./user-box/index";

import emposto from "../../images/users/emposto.webp";
import kotaro from "../../images/users/kotaro.webp";
import mark from "../../images/users/mark.webp";
import gooney from "../../images/users/gooney.webp";

export default function UsersExperience() {
  return (
    <U.ExperiencesContainer>
      <SectionTitle text="Our members's experiences"/>
      <U.UsersContainer>
        <UserBox
          animation="fade-right"
          user_text='"This server is eggcellent!"'
          user_name="Gooney"
          user_avatar={gooney}
        />
        <UserBox
          animation="fade-left"
          user_text="“if Taku dies who gets server privilege's first?”"
          user_name="MarkOfApproval"
          user_avatar={mark}
        />
        <UserBox
          animation="fade-right"
          user_text="“This server is cool, but I would like to evade more taxes.”"
          user_name="EmPostoeRobo"
          user_avatar={emposto}
        />
        <UserBox
          animation="fade-left"
          user_text="“I like the music and i’m just here for the chaos.”"
          user_name="Kotaro"
          user_avatar={kotaro}
        />
      </U.UsersContainer>
    </U.ExperiencesContainer>
  );
}
