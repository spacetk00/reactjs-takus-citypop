import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
  HeaderContainer,
  HeaderCenterContainer,
  HeaderTitle,
  NavContainer,
} from "./styled";
import BigButton from "./button/index";;

console.log(<HeaderContainer/>)
export default function Header() {
  const [title, setTitle] = useState("taku's citypop")
  return (
    <HeaderContainer>
      <NavContainer>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </NavContainer>
      <HeaderCenterContainer>
        <HeaderTitle onClick={() => setTitle("tatsimps land")} data-aos="fade-right">{title}</HeaderTitle>
        <BigButton/>
      </HeaderCenterContainer>
    </HeaderContainer>
  );
}
