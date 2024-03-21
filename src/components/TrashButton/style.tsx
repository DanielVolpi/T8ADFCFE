import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';

const StyledTrashButton = styled.button`
  border: 0;

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(-5px);
    }
    40% {
      transform: translateX(5px);
    }
    60% {
      transform: translateX(-5px);
    }
    80% {
      transform: translateX(5px);
    }
    100% {
      transform: translateX(0);
    }
  }

  &:hover {
    animation: shake 0.5s ease-in-out infinite;
  }

  ${mediaQueries.smallResolution} {
  }

  ${mediaQueries.mediumResolution} {
  }

  ${mediaQueries.largeResolution} {
  }
`;

export default StyledTrashButton;
