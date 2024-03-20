import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';

const StyledHeader = styled.div`
  //Background
  background-image: url('/backgrounds/header.svg');
  background-size: cover;
  background-repeat: no-repeat;

  //Alignment
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  //Container
  width: 100vw;
  height: 25vw;
  margin: 0 auto;

  ${mediaQueries.smallResolution} {
    min-width: 500px;
    min-height: 150px;
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
    max-width: 1920px;
    max-height: 400px;
  }
`;

export default StyledHeader;
