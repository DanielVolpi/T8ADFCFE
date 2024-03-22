import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { stylingData } from '@/configuration/stylingData';
import { themeData } from '@/configuration/themeData';

const StyledFooterData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 15px 20px 40px 20px;
  background-color: ${themeData.paleGrey};

  ${mediaQueries.smallResolution} {
    flex-direction: column-reverse;
    align-items: center;
    padding: 20px;
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledFooterData;
