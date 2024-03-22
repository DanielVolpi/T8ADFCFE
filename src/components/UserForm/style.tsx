import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';

const StyledForm = styled.form`
  width: 463px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQueries.smallResolution} {
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledForm;
