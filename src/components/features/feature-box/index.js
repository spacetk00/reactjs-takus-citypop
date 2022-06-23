import React, { useState } from "react";
import * as FB from "./styled";
import djDogue from "../../../images/features/dj_dogue.webp";
import djOcy from "../../../images/features/dj_ocy.webp";
export default function FeatureBox(props) {
  const [image, setImage] = useState(props.box_img);
  console.log(typeof image);

  let changeImage = (image) => {
    let imgIsDogue = image.includes("dj_dogue")
    let imgIsOcy = image.includes("dj_ocy")

    if (imgIsOcy) {
      setImage(djDogue);
    } else if (imgIsDogue) {
      setImage(djOcy);
    }
  };
  return (
    <>
      <FB.FeatureBox>
        <FB.FeatureImageBox>
          <FB.Image
            src={image}
            alt={props.box_img_alt}
            onClick={() => changeImage(image)}
          />
        </FB.FeatureImageBox>
        <FB.TextBox>
          <FB.BoxTitle>{props.box_title}</FB.BoxTitle>
          <FB.BoxText>{props.box_text}</FB.BoxText>
        </FB.TextBox>
      </FB.FeatureBox>
    </>
  );
}
