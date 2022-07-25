import React from "react";
import { Container, SectionContainer, Box, StrongWord } from "./styled";
import COLORS from "../constants/colors";

import PageTitle from "../components/global/pagetitle";
import SingleTextBox from "../components/global/single-text-box";
import Figure from "../components/global/figure";
import SectionTitle from "../components/global/section-title";
import StaffCard from "../components/staff-card";
import Break from "../components/break";

import Akina from "../images/titles/akinator.webp";
import Taku from "../images/staff/taku.webp";
import SirDoge from "../images/staff/doge.webp";
import Riri from "../images/staff/riri.webp";
import Gatito from "../images/staff/gatito.webp";
import Meenik from "../images/staff/meenik.webp";
import AkinaChan from "../images/body/akinachan.webp";

export default function About() {
  return (
    <Container>
      <SectionContainer>
        <PageTitle
          big_title="about"
          title_avatar={Akina}
          title_avatar_alt="CityPop Title Image"
        />

        <SingleTextBox
          text={["The story of this server begins just before 2020, when a british guy named ", <StrongWord>Taku</StrongWord>, " started listening to the albums of a japanese singer know as ", <StrongWord>Akina Nakamori</StrongWord>, " and immediately became an obsessed fan. After days of worshipping his new deity he wondered if there were people who love Akina like he does. After searching on the web he found another Akina fans, he also found some japanese music fan communities and discovers more music of the same style. At a certain moment he had the idea to create his own community for fans addicted to Plastic Love, and thus ", <StrongWord>Taku's City-Pop</StrongWord>, " was born. However, due to the popularity of ", <StrongWord>Tatsuro Yamashita</StrongWord>,", the server has become a place for his fans and today this place is called", <StrongWord>Tatsu Fans Island</StrongWord>, "."]}
        />

        <Figure
          image={AkinaChan}
          caption="A picture of Takumori by Rayi Sakamoto"
        />

        <SectionTitle text="Our Staff" />
        <Box>
          <StaffCard
            image={Taku}
            name="Taku"
            about="Takumori is the owner of this server and takes good care of it. He likes katanas and plays piano sometimes after fixing routers at work. Currently he owns a VR Chat server where he pretends to be a Seiko Matsuda fan."
            color={COLORS.staff_1_colors}
          />
          <StaffCard
            image={SirDoge}
            name="Sir John The Doge III"
            about='Sir John is the minister of shitpost and the biggest Hidemi Ishikawa fan. He received the title "Sir" due to his loyalty and efficient problem-solving skills. The server was invaded? use flex tape on it.'
            color={COLORS.staff_3_colors}
          />
          <StaffCard
            image={Riri}
            name="Riri"
            about="Riri is one of the most dangerous mods on Taku's server, step out of line and you will be banned quickly. She likes VERY old music and is almost always bored, also she runs a server dedicated to 80's japanese idols."
            color={COLORS.staff_4_colors}
          />
          <StaffCard
            image={Gatito}
            name="Gatito"
            about='Gatito is a Venezuelan cat who loves R&B and Lettering. She is the creator of the famous event known as "Save Your Fave". In her spare time she writes stories about relationships.'
            color={COLORS.staff_5_colors}
          />
          <StaffCard
            image={Meenik}
            name="Meenik"
            about='Accumulating a lot of moderation experience on other servers, Meenik has become an important ally for Taku, helping to manage the Citypop and VR Chat servers. He recently founded a biker gang on VR Chat, composed of Yukiko Okada fans, their name is "Yukiko Guardians".'
            color={COLORS.staff_6_colors}
          />
        </Box>
      </SectionContainer>
      <Break />
    </Container>
  );
}
