import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { stylingData } from '@/configuration/stylingData';

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
  width: 100%;
  height: 25vw;
  margin: 0 auto;

  ${mediaQueries.smallResolution} {
    min-width: ${stylingData.minWidth}px;
    min-height: 150px;
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
    max-width: ${stylingData.maxWidth}px;
    max-height: 400px;
  }
`;

export default StyledHeader;
