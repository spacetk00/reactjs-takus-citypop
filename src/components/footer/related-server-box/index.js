import React from "react";
import vrchat from "../../../images/footer/vrchat.webp";
import * as RB from "./styled";

import BigButtonFooter from '../big-button/index';

export default function RelatedServerBox() {
  return (
    <RB.RelatedServerContainer data-aos="fade-right">
      <RB.ContainerTitle>
        If you're a gamer who doesn't like games, take a look into this server
      </RB.ContainerTitle>
      <RB.ServerInfo>
        <RB.ServerImgBox>
          <RB.ServerImg src={vrchat} alt="An image of Taku's VRchat server" />
        </RB.ServerImgBox>
        <RB.TextBox>
          <RB.BoxTitle>VRChat & Relax</RB.BoxTitle>
          <RB.BoxText>
            We are a SFW server where our mission is to build lasting
            friendships with other mature individuals. Basically put, no ERP and
            no toxicity! Just purely a place to relax with friends and have
            meaningful conversations.
          </RB.BoxText>
        </RB.TextBox>
      </RB.ServerInfo>
      <BigButtonFooter />
    </RB.RelatedServerContainer>
  );
}
