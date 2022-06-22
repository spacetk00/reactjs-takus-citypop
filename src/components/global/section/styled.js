import styled from "styled-components";
import SIZES from '../../../constants/sizes'
const SectionContainer = styled.section`
  width: 80%;
  background-color: #181818;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;

  @media (max-width: ${SIZES.iphoneX_width}) {
    width: 95%;
  }
`;

export default SectionContainer;