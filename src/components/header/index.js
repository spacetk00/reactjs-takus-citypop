import React from "react";
import {
  HeaderContainer,
  HeaderCenterContainer,
  HeaderTitle,
  NavContainer,
} from "./styled";

export default function Header() {
  return (
    <HeaderContainer>
      <NavContainer>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Roulette</a>
      </NavContainer>
      <HeaderCenterContainer>
        <HeaderTitle>TAKU'S CITYPOP</HeaderTitle>
        <hr></hr>
        <button>Join</button>
      </HeaderCenterContainer>
    </HeaderContainer>
  );
}
