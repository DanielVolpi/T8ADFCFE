'use client';

import React from 'react';

import ISpecialistListingItem from '@/interfaces/ISpecialistListingItem';

const StyledListingItem = React.lazy(() => import('./style'));

const ProfilePicture = React.lazy(() => import('@/components/ProfilePicture'));
const TextLine = React.lazy(() => import('@/components/TextLine'));

function SpecialistListingItem({
  firstname,
  lastname,
  position,
}: ISpecialistListingItem) {
  return (
    <StyledListingItem>
      <ProfilePicture
        src='/images/profilePicture.png'
        alt={`${firstname} ${lastname}'s Profile Picture`}
      />
      <div style={{ padding: '8px 0 8px 30px' }}>
        <TextLine main text={`${firstname} ${lastname}`} />
        <TextLine text={`${position}`} />
      </div>
    </StyledListingItem>
  );
}

export default SpecialistListingItem;
