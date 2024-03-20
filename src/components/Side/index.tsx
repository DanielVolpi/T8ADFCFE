'use client';

import getText from '../../services/getText';
import StyledSide from './style';
import useFetch from '@/hooks/useFetchSpecialists';
import ISpecialist from '@/interfaces/ISpecialist';
import SpecialistListing from '@/components/SpecialistListing';

function Side() {
  const { mainText1, mainText2, mainText3, mainText4, mainText5 } = getText();
  const { data } = useFetch<ISpecialist[]>(
    `${process.env.BACKEND_URL}/specialists`
  );

  return (
    <StyledSide>
      <p>{mainText1}</p>
      <p>{mainText2}</p>
      <p>{mainText3}</p>
      {data && data.length > 0 && <SpecialistListing entries={data} />}
      <p>{mainText4}</p>
      <p>{mainText5}</p>
    </StyledSide>
  );
}

export default Side;
