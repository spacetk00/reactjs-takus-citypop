import React from "react";
import * as F from "./styled";

import RelatedServerBox from "./related-server-box";
import TakuMisc from "./taku-misc";

export default function Footer() {
  return (
    <F.FooterContainer>
      <F.FooterContent>
        <RelatedServerBox />
        <TakuMisc />
      </F.FooterContent>

      <F.FooterInfo>
        <F.InfoText>
          @2022 - Taku's City Pop, Web site made with heart by Silvaero{" "}
        </F.InfoText>
      </F.FooterInfo>
    </F.FooterContainer>
  );
}
