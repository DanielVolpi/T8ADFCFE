import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { themeData } from '@/configuration/themeData';
import { fontData } from '@/configuration/fontData';

const StyledOverlay = styled.button`
  position: absolute;
  top: 8%;
  right: 5%;
  font-weight: bold;
  font-family: ${fontData.ProximaNovaRegular};
  font-size: 18px;
  color: ${themeData.black};
  border: 0;
  cursor: pointer;

  ${mediaQueries.smallResolution} {
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledOverlay;
