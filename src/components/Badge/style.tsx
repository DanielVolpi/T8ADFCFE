import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { themeData } from '@/configuration/themeData';
import { fontData } from '@/configuration/fontData';

const StyledBadge = styled.div`
  //Alignment
  display: flex;
  align-items: center;
  justify-content: center;

  //Text
  font-family: ${fontData.sharpSansBold};
  font-size: 13px;
  letter-spacing: 0.93px;

  //Coloring
  color: ${themeData.white};
  background-color: ${themeData.alertOrange};

  //Container
  width: 90px;
  height: 30px;
  border-radius: 3px;

  ${mediaQueries.smallResolution} {
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledBadge;
