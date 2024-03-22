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
  margin: 30px 0;

  ${mediaQueries.smallResolution} {
    font-size: 12px;
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledParagraph;
