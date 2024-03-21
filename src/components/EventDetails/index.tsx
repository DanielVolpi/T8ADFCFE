'use client';

import React from 'react';

import useFetch from '@/hooks/useFetch';
import getText from '@/services/getText';

import ISpecialist from '@/interfaces/ISpecialist';
const StyledEventDetails = React.lazy(() => import('./style'));

const Paragraph = React.lazy(() => import('@/components/Paragraph'));
const SponsorsBar = React.lazy(() => import('@/components/SponsorsBar'));
const SpecialistListing = React.lazy(
  () => import('@/components/SpecialistListing')
);

function EventDetails() {
  const { mainText1, mainText2, mainText3, mainText4, mainText5 } = getText();
  const { data } = useFetch<ISpecialist[]>(
    `${process.env.BACKEND_URL}/specialists`
  );

  return (
    <StyledEventDetails>
      <SponsorsBar />
      <Paragraph>{mainText1}</Paragraph>
      <Paragraph>{mainText2}</Paragraph>
      <Paragraph>{mainText3}</Paragraph>
      {data && data.length > 0 && <SpecialistListing entries={data} />}
      <Paragraph>{mainText4}</Paragraph>
      <Paragraph>{mainText5}</Paragraph>
      <SponsorsBar />
    </StyledEventDetails>
  );
}

export default EventDetails;
