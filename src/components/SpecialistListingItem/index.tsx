'use client';

import React from 'react';

import ISpecialist from '@/interfaces/ISpecialist';

const StyledListingItem = React.lazy(() => import('./style'));

function SpecialistListingItem({
  _id,
  firstname,
  lastname,
  position,
}: ISpecialist) {
  return (
    <StyledListingItem>
      <div>X</div>
      <div>{`${firstname} ${lastname}`}</div>
      <div>{position}</div>
    </StyledListingItem>
  );
}

export default SpecialistListingItem;
