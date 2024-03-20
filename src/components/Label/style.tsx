import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { themeData } from '@/configuration/themeData';
import { fontData } from '@/configuration/fontData';

const StyledLabel = styled.label`
  //Text
  font-family: ${fontData.sharpSansSemiBold};
  font-size: 14px;
  color: ${themeData.deepBlack};
  letter-spacing: 0;
  margin-bottom: 80px;
  display: block;

  //Dimensions
  height: 19px;

  ${mediaQueries.smallResolution} {
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledLabel;
