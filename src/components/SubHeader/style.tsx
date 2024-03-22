import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { themeData } from '@/configuration/themeData';
import { fontData } from '@/configuration/fontData';

const StyledSubHeader = styled.div`
  //Text
  font-family: ${fontData.sharpSansSemiBold};
  font-size: 21px;
  line-height: 40px;
  text-transform: uppercase;

  //Coloring
  color: ${themeData.softBlack};

  ${mediaQueries.smallResolution} {
    font-size: 9px;
    line-height: 10px;
  }

  ${mediaQueries.mediumResolution} {
    font-size: 17px;
    line-height: 20px;
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledSubHeader;
