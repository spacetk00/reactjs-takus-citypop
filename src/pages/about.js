import React from "react";
import { Container, SectionContainer, Box } from "./styled";
import COLORS from "../constants/colors";

import PageTitle from "../components/global/pagetitle";
import SingleTextBox from "../components/global/single-text-box";
import SectionTitle from "../components/global/section-title";
import StaffCard from "../components/staff-card";
import Break from "../components/break";

import Akina from "../images/titles/akinator.webp";
import Taku from "../images/staff/taku.webp";
import Ocyrus from "../images/staff/ocy.webp";
import SirDoge from "../images/staff/doge.webp";
import Riri from "../images/staff/riri.webp";
import Gatito from "../images/staff/gatito.webp";
import Meenik from "../images/staff/meenik.webp";

export default function About() {
  return (
    <Container>
      <SectionContainer>
        <PageTitle
          big_title="about"
          title_avatar={Akina}
          title_avatar_alt="CityPop Title Image"
        />

        <SingleTextBox />
        <SectionTitle text="Our Staff"/>
        <Box>
          <StaffCard
            image={Taku}
            name="Taku"
            about="Taku is the owner of the server and takes good care of it. He likes katanas and plays piano sometimes after fixing routers at work. Currently he owns a VR Chat server where he pretends to be a Seiko Matsuda fan."
            color={COLORS.staff_1_colors}
          />
          <StaffCard
            image={Ocyrus}
            name="OcyrusHightop"
            about="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            color={COLORS.staff_2_colors}
          />
          <StaffCard
            image={SirDoge}
            name="Sir John The Doge III"
            about="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            color={COLORS.staff_3_colors}
          />
          <StaffCard
            image={Riri}
            name="Riri"
            about="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            color={COLORS.staff_4_colors}
          />
          <StaffCard
            image={Gatito}
            name="Gatito"
            about="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            color={COLORS.staff_5_colors}
          />
          <StaffCard
            image={Meenik}
            name="Meenik"
            about="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            color={COLORS.staff_6_colors}
          />
        </Box>
      </SectionContainer>
      <Break />
    </Container>
  );
}
