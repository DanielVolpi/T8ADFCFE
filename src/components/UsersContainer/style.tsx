import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { themeData } from '@/configuration/themeData';

const StyledUsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${themeData.deepBlack};
  border-radius: 5px;
  margin: 5% auto;
  padding: 2% 1%;
  background-color: ${themeData.lightGreen};
  min-width: 300px;
  max-width: 700px;

  ${mediaQueries.smallResolution} {
    max-width: 350px;
  }

  ${mediaQueries.mediumResolution} {
    max-width: 600px;
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledUsersContainer;
