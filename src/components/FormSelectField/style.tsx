import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';

const StyledFormSelectField = styled.select`
  ${mediaQueries.smallResolution} {
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledFormSelectField;
