import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { stylingData } from '@/configuration/stylingData';

const StyledMainContainer = styled.div`
  //Dimensions
  width: 100vw;

  //Bounds
  margin: 0 auto;
  box-sizing: border-box;

  //Layout
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  ${mediaQueries.smallResolution} {
    padding: 0 20px;
  }

  ${mediaQueries.mediumResolution} {
    padding: 0 75px;
  }

  ${mediaQueries.largeResolution} {
    max-width: ${stylingData.maxWidth}px;
    padding: 0 100px;
  }
`;

export default StyledMainContainer;
