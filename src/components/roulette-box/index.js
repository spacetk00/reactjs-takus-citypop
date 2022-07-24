import React, { useState } from "react";
import BigButton from "../global/big-button";
import COLORS from "../../constants/colors";
import singers from "../../db/singers";
import * as R from "./styled";

import Undef from "../../images/singers/undef.webp";
import rollGif from "../../images/singers/roll.webp";
import WClick from "../../images/body/click.gif";

export default function RouletteBox() {
  const [avatar, setAvatar] = useState(Undef);
  const [name, setName] = useState("Name");
  const [isRolling, setIsRolling] = useState(false);
  const [hasData, setHasData] = useState(false);
  let singersArray = singers;
  let prevRollName = "";
  let link = "";

  const rollSinger = () => {
    setIsRolling(true);
    setHasData(false);
    setName("???");
    setAvatar(rollGif);

    singersArray = singersArray.sort(() => Math.random() - 0.5);

    setTimeout(() => {
      setName(singersArray[0].name);
      setAvatar(require(`../../images/singers/${singersArray[0].image}`));
      setIsRolling(false);
      setHasData(true);
      prevRollName = singersArray[0].name;
      console.log(prevRollName);
    }, 3000);
  };

  if (singersArray[0].name === "リックロール") {
    link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  } else if (singersArray[0].name === "Chika Takami") {
    link = `https://www.youtube.com/results?search_query=高見 知佳 album`;
  } else {
    link = `https://www.youtube.com/results?search_query=${
      singersArray[0].name + " album"
    }`;
  }

  const buttonActive = (
    <BigButton
      color={COLORS.button_roulette_colors}
      text="roll"
      action={() => rollSinger()}
    />
  );

  const buttonInactive = (
    <BigButton color={COLORS.button_roulette_off_colors} text="roll" />
  );

  const linkYT = (
    <R.LinkBox href={link} target="_blank" rel="noreferrer">
      <R.ClickGif src={WClick} alt="click button gif" />
    </R.LinkBox>
  );

  return (
    <R.Container data-aos="flip-down">
      <R.ImgSection>
        <R.Img src={avatar} alt="Singer avatar" />
      </R.ImgSection>
      <R.Box>
        <R.Name>{name}</R.Name>
        {hasData ? linkYT : <></>}
        {!isRolling ? buttonActive : buttonInactive}
      </R.Box>
    </R.Container>
  );
}
