import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { themeData } from '@/configuration/themeData';

const StyledRegistrationSection = styled.div`
  max-width: 463px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background-color: ${themeData.paleGrey};

  & > :first-child {
    margin-bottom: 30px;
  }

  ${mediaQueries.smallResolution} {
    padding: 20px 0 40px 0;
  }

  ${mediaQueries.mediumResolution} {
    padding: 20px 0 50px 0;
  }

  ${mediaQueries.largeResolution} {
    margin-bottom: 180px;
  }
`;

export default StyledRegistrationSection;
