import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';

const StyledRegistrationSection = styled.div`
  max-width: 463px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  ${mediaQueries.smallResolution} {
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledRegistrationSection;
