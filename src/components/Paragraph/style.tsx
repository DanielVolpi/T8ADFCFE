import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { themeData } from '@/configuration/themeData';
import { fontData } from '@/configuration/fontData';

const StyledParagraph = styled.p`
  //Text
  font-family: ${fontData.ProximaNovaRegular};
  font-size: 16px;
  color: ${themeData.grey};
  letter-spacing: 0;
  line-height: 28px;

  ${mediaQueries.smallResolution} {
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledParagraph;
