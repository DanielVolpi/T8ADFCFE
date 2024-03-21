import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';

const StyledUserContainer = styled.div`
  display: flex;
  align-items: center;

  ${mediaQueries.smallResolution} {
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledUserContainer;
