'use client';

import getText from '../../services/getText';
import StyledSide from './style';
import useFetch from '@/hooks/useFetchSpecialists';
import ISpecialist from '@/interfaces/ISpecialist';
import SpecialistListing from '@/components/SpecialistListing';

function Side() {
  const { mainText1, mainText2, mainText3, mainText4, mainText5 } = getText();
  const { data } = useFetch<ISpecialist[]>('http://localhost:4000/specialists');

  return (
    <StyledSide>
      <div>{mainText1}</div>
      <div>{mainText2}</div>
      <div>{mainText3}</div>
      {data && data.length > 0 && <SpecialistListing entries={data} />}
      <div>{mainText4}</div>
      <div>{mainText5}</div>
    </StyledSide>
  );
}

export default Side;
