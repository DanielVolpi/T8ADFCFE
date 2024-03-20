import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { fontData } from '@/configuration/fontData';
import { themeData } from '@/configuration/themeData';

const StyledFormSelectField = styled.select`
  //Dimensions
  width: 368px;
  height: 50px;

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

  //Select Arrow
  -webkit-appearance: none;
  background-image: url('/images/dropdownArrow.png');
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;

  //Details
  cursor: pointer;

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

export default StyledFormSelectField;
