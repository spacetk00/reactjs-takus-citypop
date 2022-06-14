import React from 'react';
import MainContainer from './styled';
import SectionContainer from '../global/section/styled';
import PageTitle from '../global/pagetitle';
import Toshiki from '../../images/titles/toshiki.webp'

export default function Main() {
 return (
   <MainContainer>
    <SectionContainer>
      <PageTitle big_title="home" title_avatar={Toshiki} title_avatar_alt="CityPop Title Image"/>
    </SectionContainer>
   </MainContainer>
 );
}