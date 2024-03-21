import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { themeData } from '@/configuration/themeData';

const StyledUsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${themeData.deepBlack};
  border-radius: 5px;
  margin: 5%;
  padding: 5%;
  background-color: ${themeData.nyanza};
  min-width: 400px;

  ${mediaQueries.smallResolution} {
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledUsersContainer;
