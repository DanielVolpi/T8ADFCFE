'use client';

import React from 'react';

import IProfilePicture from '@/interfaces/IProfilePicture';

const StyledProfilePicture = React.lazy(() => import('./style'));

function ProfilePicture({ src, alt }: IProfilePicture) {
  return <StyledProfilePicture src={src} alt={alt} />;
}

export default ProfilePicture;
