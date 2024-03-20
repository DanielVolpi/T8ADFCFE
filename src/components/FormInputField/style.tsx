import styled from 'styled-components';
import { mediaQueries } from '@/configuration/mediaQueryData';

const StyledFormInputField = styled.input`
  ${mediaQueries.smallResolution} {
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledFormInputField;
