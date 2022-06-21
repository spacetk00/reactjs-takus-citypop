import React from "react";
import * as F from "./styled";

export default function Footer() {
  return (
    <F.FooterContainer>
      <F.FooterContent>
        <div>
          <h4>
            If you're a game who doesn't like games, take a look into this
            server
          </h4>
          <div>
            <figure>
              <img></img>
            </figure>
            <div>
              <h4>VRChat & Relax</h4>
              <p>
                We are a SFW server where our mission is to build lasting
                friendships with other mature individuals. Basically put, no ERP
                and no toxicity! Just purely a place to relax with friends and
                have meaningful conversations.
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </F.FooterContent>

      <F.FooterInfo>
        <F.InfoText>
          @2022 - Taku's City Pop, Web site made with heart by Silvaeroo{" "}
        </F.InfoText>
      </F.FooterInfo>
    </F.FooterContainer>
  );
}
