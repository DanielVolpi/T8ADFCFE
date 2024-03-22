import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { stylingData } from '@/configuration/stylingData';

const StyledEventDetails = styled.div`
  max-width: 565px;

  ${mediaQueries.smallResolution} {
    padding: 15px;
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledEventDetails;
