import styled from "styled-components";
const PageTitleContainer = styled.div`
  margin: 5%;
  padding: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleAvatar = styled.img`
  width: 25%;
  border-radius: 50%;

  @media (max-width: 700px) {
    width: 40%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const SmallTitle = styled.h3`
  font-family: "Kenzo", sans-serif;
  font-size: 2em;
  color: white;
  box-sizing: content-box;
`

const BigTitle = styled.h2`
  font-family: "Kenzo", sans-serif;
  font-size: 9em;
  font-variant: small-caps;
  background-image: linear-gradient(to right, #6200DE, #0094FF);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

export {PageTitleContainer, TitleAvatar, TitleContainer, SmallTitle, BigTitle};