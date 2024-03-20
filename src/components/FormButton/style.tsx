import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { themeData } from '@/configuration/themeData';
import { fontData } from '@/configuration/fontData';

const StyledFormButton = styled.button`
  //Dimensions
  width: 390px;
  height: 50px;

  //Borders
  border: 0;

  //Background
  background-color: ${themeData.deepBlack};

  //Text
  font-family: ${fontData.sharpSansSemiBold};
  font-size: 19px;
  color: ${themeData.white};
  line-height: normal;
  vertical-align: middle;

  //Alignment
  margin-top: 15px;

  ${mediaQueries.smallResolution} {
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledFormButton;
