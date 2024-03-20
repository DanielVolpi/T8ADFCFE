import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { themeData } from '@/configuration/themeData';
import { fontData } from '@/configuration/fontData';

const StyledFooterData = styled.div`
  //Text
  font-family: ${fontData.ProximaNovaRegular};
  font-size: 16px;
  color: ${themeData.grey};
  letter-spacing: 0;

  //Alignment
  margin: 0;
  display: flex;
  align-items: center;

  ${mediaQueries.smallResolution} {
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledFooterData;
