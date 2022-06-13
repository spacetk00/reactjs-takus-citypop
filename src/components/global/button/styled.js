import styled from "styled-components";

const ButtonContainer = styled.a`
  text-decoration: none;
  width: 12%;
  height: 20%;
  border-radius: 30px;
  background-image: linear-gradient(#ee63fa, #5200ff);
  display: flex;
  justify-content: center;
  align-items: center;

	@media (max-width: 900px) {
    width: 20%;
		height: 15%;
		font-size: .8em;
  }

  @media (max-width: 700px) {
    width: 20%;
		height: 15%;
		font-size: .8em;
  }
`;

const ButtonText = styled.p`
  color: white;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
`;
export { ButtonText, ButtonContainer };
