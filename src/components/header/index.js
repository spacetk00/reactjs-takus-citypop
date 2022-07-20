import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderCenterContainer,
  HeaderTitle,
  NavContainer,
} from "./styled";
import BigButton from "../global/big-button";
import COLORS from "../../constants/colors";

export default function Header() {
  const [title, setTitle] = useState("taku's citypop");
  return (
    <HeaderContainer>
      <NavContainer>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/roulette">Roulette</Link>
      </NavContainer>
      <HeaderCenterContainer>
        <HeaderTitle
          onClick={() => setTitle("tatsimps land")}
          data-aos="fade-right"
        >
          {title}
        </HeaderTitle>
        <BigButton
          link="https://discord.com/invite/RHvyaAh"
          color={COLORS.button_header_colors}
          text="join"
        />
      </HeaderCenterContainer>
    </HeaderContainer>
  );
}
