import React from 'react';
import {MainContainer} from './styled';
import SectionContainer from '../global/section/styled';
import PageTitle from '../global/pagetitle';
import Toshiki from '../../images/titles/toshiki.webp'
import HighLight from '../highlight/index'; 
import ReverseHighlight from '../reverse-highlight';
import MiddleBreak from '../middle-break';

export default function Main() {
 return (
   <MainContainer>
    <SectionContainer>
      <PageTitle big_title="home" title_avatar={Toshiki} title_avatar_alt="CityPop Title Image"/>
      <HighLight />
      <ReverseHighlight />
      <MiddleBreak />
    </SectionContainer>
   </MainContainer>
 );
}