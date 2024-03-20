import styled from 'styled-components';
import { mediaQueries } from '@/configuration/mediaQueryData';
import { themeData } from '@/configuration/themeData';
import { fontData } from '@/configuration/fontData';
import IStyledMainHeaderLine from '@/interfaces/IStyledMainHeader';

const StyledMainHeaderLine = styled.h1<IStyledMainHeaderLine>`
  //Text
  font-family: ${fontData.sharpSansBold};
  font-style: ${({ $secondary }) => ($secondary ? 'italic' : 'regular')};
  font-size: 40px;
  line-height: 52px;
  text-align: center;

  //Alignment
  margin: 0;
  width: 100%;

  //Coloring
  color: ${themeData.deepBlack};

  ${mediaQueries.smallResolution} {
    font-size: 18px;
    line-height: 20px;
  }

  ${mediaQueries.mediumResolution} {
    font-size: 28px;
    line-height: 40px;
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledMainHeaderLine;
