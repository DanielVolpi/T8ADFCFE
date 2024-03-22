import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';

const StyledMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  ${mediaQueries.smallResolution} {
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledMainContainer;
