import styled from "styled-components";

const UserBoxContainer = styled.div`
  width: 600px;
  height: 200px;
  border-radius: 15px;
  background-color: red;
  margin: 1%;
  display: flex;
`;

const UserAvatar = styled.img`
  width: 35%;
`;

const TextBox = styled.div`
  width: 65%;
  margin: 2%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const UserName = styled.h4`
  color: white;
  text-align: center;
  margin-bottom: 10%;
`;

const UserText = styled.p`
  color: white;
  align-self: center;
`;

export {UserBoxContainer, UserAvatar, TextBox, UserName, UserText}