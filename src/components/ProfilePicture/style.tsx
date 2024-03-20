import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';

const StyledProfilePicture = styled.img`
  ${mediaQueries.smallResolution} {
    width: 50px;
    height: 50px;
  }

  ${mediaQueries.mediumResolution} {
    width: 74px;
    height: 74px;
  }

  ${mediaQueries.largeResolution} {
    width: 74px;
    height: 74px;
  }
`;

export default StyledProfilePicture;
