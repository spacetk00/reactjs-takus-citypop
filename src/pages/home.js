import React from "react";
import {Container, SectionContainer} from "./styled";

import PageTitle from "../components/global/pagetitle";
import HighLight from "../components/highlight";
import Features from "../components/features";
import UsersExperience from "../components/users-experience";
import Break from "../components/break";

import Toshiki from "../images/titles/toshiki.webp";

const Home = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Home;
