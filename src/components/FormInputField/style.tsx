import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { themeData } from '@/configuration/themeData';
import { fontData } from '@/configuration/fontData';

const StyledFormInputField = styled.input`
  //Dimensions
  width: 368px;
  height: 50px;
  box-sizing: border-box;

  //Borders
  border: 2px solid ${themeData.lightGrey};
  border-radius: 2px;

  //Text
  font-family: ${fontData.ProximaNovaRegular};
  font-size: 16px;
  color: ${themeData.lightGrey};
  line-height: normal;
  vertical-align: middle;
  padding-left: 16px;
  margin-top: 5px;

  &:hover {
    border-color: ${themeData.deepGrey};
    transform: scale(1.02);
  }

  ${mediaQueries.smallResolution} {
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledFormInputField;
