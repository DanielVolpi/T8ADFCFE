'use client';

import getSpecialists from '../../services/getSpecialists';
import getText from '../../services/getText';
import StyledSide from './style';
import ISpecialist from '@/interfaces/ISpecialist';
import SpecialistListing from '@/components/SpecialistListing';
import { useEffect, useState } from 'react';

function Side() {
  const { mainText1, mainText2, mainText3, mainText4, mainText5 } = getText();
  const [specialists, setSpecialists] = useState<ISpecialist[]>([]);

  useEffect(() => {
    const fetchSpecialists = async () => {
      setSpecialists(await getSpecialists());
    };

    fetchSpecialists();
  }, []);

  return (
    <StyledSide>
      <div>{mainText1}</div>
      <div>{mainText2}</div>
      <div>{mainText3}</div>
      {specialists && specialists.length > 0 && (
        <SpecialistListing entries={specialists} />
      )}
      <div>{mainText4}</div>
      <div>{mainText5}</div>
    </StyledSide>
  );
}

export default Side;
