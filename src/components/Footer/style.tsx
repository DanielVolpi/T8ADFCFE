import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { stylingData } from '@/configuration/stylingData';

const StyledFooterData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  ${mediaQueries.smallResolution} {
    flex-direction: column-reverse;
    align-items: center;
    padding: 20px;
    min-width: ${stylingData.minWidth}px;
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledFooterData;
