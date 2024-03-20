import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { themeData } from '@/configuration/themeData';
import { fontData } from '@/configuration/fontData';

import IStyledTextLine from '@/interfaces/IStyledTextLine';

const StyledTextLine = styled.p<IStyledTextLine>`
  //Text
  line-height: 8px;

  font-family: ${({ $main }) =>
    $main ? fontData.sharpSansSemiBold : fontData.sharpSansBasic};
  font-size: ${({ $main }) => ($main ? '20px' : '16px')};
  color: ${({ $main }) => ($main ? themeData.deepBlack : themeData.deepGrey)};

  ${mediaQueries.smallResolution} {
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledTextLine;
