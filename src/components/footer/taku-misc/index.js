import React from "react";
import * as T from "./styled";

import takulogo from "../../../images/footer/taku_logo.webp";
import tkpinterest from "../../../images/footer/logo_pn.webp";
import tktiktok from "../../../images/footer/logo_tk.webp";
import tktwitter from "../../../images/footer/logo_tw.webp";
import tkyoutube from "../../../images/footer/logo_yt.webp";

export default function TakuMisc() {
  return (
    <>
      <T.TakuBox>
        <T.LogoBox>
          <T.Logo src={takulogo} alt="Takuromi Logo" data-aos="zoom-in" />
        </T.LogoBox>
        <T.SocialBox data-aos="fade-left">
          <T.SocialLinkContainer
            href="https://www.pinterest.com"
            target="_blank"
            rel="noreferrer"
          >
            <T.SocialLogo src={tkpinterest} alt="Taku's Pinterest" />
          </T.SocialLinkContainer>
          <T.SocialLinkContainer
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noreferrer"
          >
            <T.SocialLogo src={tktiktok} alt="Taku's TikTok" />
          </T.SocialLinkContainer>
          <T.SocialLinkContainer
            href="https://twitter.com/TakuCitypop"
            target="_blank"
            rel="noreferrer"
          >
            <T.SocialLogo src={tktwitter} alt="Taku's Twitter" />
          </T.SocialLinkContainer> 
          <T.SocialLinkContainer
            href="https://www.youtube.com/channel/UCdNx7RSpJQcqfwnWBy7dFeQ"
            target="_blank"
            rel="noreferrer"
          >
            <T.SocialLogo src={tkyoutube} alt="Taku's Youtube Channel" />
          </T.SocialLinkContainer>
        </T.SocialBox>
      </T.TakuBox>
    </>
  );
}
