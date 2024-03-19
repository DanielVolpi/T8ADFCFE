'use client';

import ISpecialist from '@/interfaces/ISpecialist';
import StyledListingItem from './style';

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
