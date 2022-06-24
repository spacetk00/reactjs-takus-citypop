import React from "react";
import * as F from "./styled";

import RelatedServerBox from "./related-server-box";

import takulogo from "../../images/footer/taku_logo.webp";
import tkpinterest from "../../images/footer/logo_pn.webp";
import tktiktok from "../../images/footer/logo_tk.webp";
import tktwitter from "../../images/footer/logo_tw.webp";
import tkyoutube from "../../images/footer/logo_yt.webp";


export default function Footer() {
  return (
    <F.FooterContainer>
      <F.FooterContent>
        <F.ExtraBox>
          <F.ExtraTitle>
            If you're a gamer who doesn't like games, take a look into this
            server
          </F.ExtraTitle>
          <RelatedServerBox />
        </F.ExtraBox>

        <F.TakuBox>
          <F.LogoBox>
            <F.Logo src={takulogo} alt="Takuromi Logo" />
          </F.LogoBox>
          <F.SocialBox>
            <F.SocialLinkContainer
              href="https://www.pinterest.com"
              target="_blank"
              rel="noreferrer"
            >
              <F.SocialLogo src={tkpinterest} alt="Taku's Pinterest" />
            </F.SocialLinkContainer>
            <F.SocialLinkContainer href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
              <F.SocialLogo src={tktiktok} alt="Taku's TikTok" />
            </F.SocialLinkContainer>
            <F.SocialLinkContainer
              href="https://twitter.com/TakuCitypop"
              target="_blank"
              rel="noreferrer"
            >
              <F.SocialLogo src={tktwitter} alt="Taku's Twitter" />
            </F.SocialLinkContainer>
            <F.SocialLinkContainer
              href="https://www.youtube.com/channel/UCdNx7RSpJQcqfwnWBy7dFeQ"
              target="_blank"
              rel="noreferrer"
            >
              <F.SocialLogo src={tkyoutube} alt="Taku's Youtube Channel" />
            </F.SocialLinkContainer>
          </F.SocialBox>
        </F.TakuBox>
      </F.FooterContent>

      <F.FooterInfo>
        <F.InfoText>
          @2022 - Taku's City Pop, Web site made with heart by Silvaero{" "}
        </F.InfoText>
      </F.FooterInfo>
    </F.FooterContainer>
  );
}
