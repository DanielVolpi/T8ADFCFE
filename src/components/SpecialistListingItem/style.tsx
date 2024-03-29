import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';

const StyledListingItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;

  ${mediaQueries.smallResolution} {
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledListingItem;
