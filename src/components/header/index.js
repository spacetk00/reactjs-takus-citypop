import React, {useState} from "react";
import {
  HeaderContainer,
  HeaderCenterContainer,
  HeaderTitle,
  NavContainer,
} from "./styled";
import BigButton from "../global/button";

export default function Header() {
  const [title, setTitle] = useState("taku's citypop")
  return (
    <HeaderContainer>
      <NavContainer>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Roulette</a>
      </NavContainer>
      <HeaderCenterContainer>
        <HeaderTitle onClick={() => setTitle("tatsimps land")}>{title}</HeaderTitle>
        <BigButton />
      </HeaderCenterContainer>
    </HeaderContainer>
  );
}