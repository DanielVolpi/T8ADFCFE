import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';

const StyledBody = styled.div`
  //Dimensions
  width: 100%;

  //Layout
  display: flex;
  justify-content: space-around;
  padding: 100px 0;

  ${mediaQueries.smallResolution} {
    padding: 40px 0;
    flex-direction: column;
    align-items: center;
  }

  ${mediaQueries.mediumResolution} {
    flex-direction: column;
    align-items: center;
  }

  ${mediaQueries.largeResolution} {
    flex-direction: row;
  }
`;

export default StyledBody;
