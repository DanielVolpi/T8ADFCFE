import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';

const StyledForm = styled.form`
  max-width: 463px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 50px;

  ${mediaQueries.smallResolution} {
    padding: 0 30px;
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledForm;
