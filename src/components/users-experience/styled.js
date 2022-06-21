import styled from "styled-components";

const ExperiencesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerTitle = styled.h4`
  margin-top: 2%;
  font-size: 3.5em;
  color: white;
  text-align: center;
  font-family: "Kenzo", sans-serif;
  font-variant: initial;
`;

const UsersContainer = styled.div`
  width: 90%;
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export { ExperiencesContainer, ContainerTitle, UsersContainer };
