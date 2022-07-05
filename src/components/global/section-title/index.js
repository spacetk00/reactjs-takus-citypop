import React from 'react';
import Title from './styled';

export default function SectionTitle(props) {
 return (
  <Title data-aos="zoom-in-up">{props.text}</Title>
 );
}