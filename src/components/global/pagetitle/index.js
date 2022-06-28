import React from 'react';
import * as T from './styled'

export default function PageTitle(props) {
 return ( 
  <T.PageTitleContainer data-aos="zoom-in">
    <T.TitleAvatar src={props.title_avatar} alt={props.title_avatar_alt}/>
    <T.TitleContainer>
      <T.SmallTitle>Taku's Citypop</T.SmallTitle>
      <T.BigTitle>{props.big_title}</T.BigTitle>
    </T.TitleContainer>
  </T.PageTitleContainer>
 );
}