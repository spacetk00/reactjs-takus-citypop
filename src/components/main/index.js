import React from "react";
import { MainContainer } from "./styled";
import SectionContainer from "../global/section/styled";
import PageTitle from "../global/pagetitle";
import HighLight from "../highlight/index";
import Features from "../features";
import UsersExperience from "../users-experience";
import Break from "../break";

import Toshiki from "../../images/titles/toshiki.webp";

export default function Main() {
  return (
    <MainContainer>
      <SectionContainer>
        <PageTitle
          big_title="home"
          title_avatar={Toshiki}
          title_avatar_alt="CityPop Title Image"
        />
        <HighLight />
      </SectionContainer>

      <SectionContainer>
        <Features />
      </SectionContainer>

      <SectionContainer>
        <UsersExperience />
      </SectionContainer>

      <Break />
    </MainContainer>
  );
}
