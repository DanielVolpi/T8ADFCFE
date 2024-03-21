import styled from 'styled-components';

import { mediaQueries } from '@/configuration/mediaQueryData';
import { themeData } from '@/configuration/themeData';

const StyledListingItem = styled.div`
  display: flex;
  justify-content: space-between;

  border: 2px solid ${themeData.black};
  border-radius: 20px;
  padding: 2% 5%;
  background-color: white;

  box-shadow: 5px 4px 5px rgba(0, 0, 0, 0.4);

  @keyframes beat {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.98);
    }
    100% {
      transform: scale(1);
    }
  }

  &:hover {
    animation: beat 1s linear infinite;
  }

  ${mediaQueries.smallResolution} {
    width: 250px;
    margin: 10px;
  }

  ${mediaQueries.mediumResolution} {
    width: 300px;
    margin: 15px;
  }

  ${mediaQueries.largeResolution} {
    width: 350px;
    margin: 25px;
  }
`;

export default StyledListingItem;
