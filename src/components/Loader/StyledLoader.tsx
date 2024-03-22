import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { themeData } from '@/configuration/themeData';

const StyledLoader = styled.div`
  border-style: solid;
  border-color: ${themeData.spinnerBlue} transparent transparent transparent;
  border-radius: 50%;
  animation: spin 1.5s ease infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  ${mediaQueries.smallResolution} {
    border-width: 10px;
    height: 50px;
    width: 50px;
  }

  ${mediaQueries.mediumResolution} {
    border-width: 15px;
    height: 100px;
    width: 100px;
  }

  ${mediaQueries.largeResolution} {
    border-width: 20px;
    height: 200px;
    width: 200px;
  }
`;

export default StyledLoader;
