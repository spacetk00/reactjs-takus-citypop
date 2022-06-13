import React from "react";
import {
  HeaderContainer,
  HeaderCenterContainer,
  HeaderTitle,
  NavContainer,
} from "./styled";
import BigButton from "../global/button";

export default function Header() {
  return (
    <HeaderContainer>
      <NavContainer>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Roulette</a>
      </NavContainer>
      <HeaderCenterContainer>
        <HeaderTitle>taku's citypop</HeaderTitle>
        <BigButton />
      </HeaderCenterContainer>
    </HeaderContainer>
  );
}
