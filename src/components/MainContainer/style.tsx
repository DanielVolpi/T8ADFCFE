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
    min-width: ${stylingData.minWidth}px;
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
    max-width: ${stylingData.maxWidth}px;
  }
`;

export default StyledMainContainer;
