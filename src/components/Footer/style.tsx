import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { stylingData } from '@/configuration/stylingData';

const StyledFooterData = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  ${mediaQueries.smallResolution} {
    min-width: ${stylingData.minWidth}px;
    padding: 0 20px;
  }

  ${mediaQueries.mediumResolution} {
    padding: 0 75px;
  }

  ${mediaQueries.largeResolution} {
    max-width: ${stylingData.maxWidth}px;
    padding: 0 150px;
  }
`;

export default StyledFooterData;
