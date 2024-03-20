import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { themeData } from '@/configuration/themeData';
import { fontData } from '@/configuration/fontData';

const StyledOverlay = styled.p`
  //Text
  font-family: ${fontData.sharpSansBasic};
  font-size: 18px;
  color: ${themeData.pitchBlack};
  text-align: center;

  //Alignment
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;

  //Details
  cursor: default;

  ${mediaQueries.smallResolution} {
    font-size: 14px;
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledOverlay;
