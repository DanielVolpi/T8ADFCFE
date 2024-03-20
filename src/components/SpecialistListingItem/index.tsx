'use client';

import React from 'react';

import ISpecialist from '@/interfaces/ISpecialist';

const StyledListingItem = React.lazy(() => import('./style'));

const ProfilePicture = React.lazy(() => import('@/components/ProfilePicture'));
const TextLine = React.lazy(() => import('@/components/TextLine'));

function SpecialistListingItem({
  _id,
  firstname,
  lastname,
  position,
}: ISpecialist) {
  return (
    <StyledListingItem>
      <ProfilePicture
        src='/images/profilePicture.png'
        alt={`${firstname} ${lastname}'s Profile Picture`}
      />
      <div style={{ padding: '20px' }}>
        <TextLine main text={`${firstname} ${lastname}`} />
        <TextLine text={`${position}`} />
      </div>
    </StyledListingItem>
  );
}

export default SpecialistListingItem;
