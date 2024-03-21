'use client';

import React from 'react';

import IUserListingItem from '@/interfaces/IUserListingItem';

import deleteUser from '@/services/deleteUser';

const StyledListingItem = React.lazy(() => import('./StyledListingItem'));
const StyledUserContainer = React.lazy(() => import('./StyledUserContainer'));

const ProfilePicture = React.lazy(() => import('@/components/ProfilePicture'));
const TextLine = React.lazy(() => import('@/components/TextLine'));
const TrashButton = React.lazy(() => import('@/components/TrashButton'));

function UserListingItem({
  id,
  firstname,
  lastname,
  email,
  country,
  phoneNumber,
  position,
  deleteCallback,
}: IUserListingItem) {
  const removeUser = async () => {
    if (await deleteUser(id)) {
      deleteCallback(id);
    }
  };

  return (
    <StyledListingItem>
      <StyledUserContainer>
        <div>
          <TextLine main text={`${firstname} ${lastname}`} />
          <TextLine text={`${email}`} />
          <TextLine text={`${country}`} />
          <TextLine text={`${phoneNumber}`} />
          <TextLine text={`${position}`} />
        </div>
      </StyledUserContainer>
      <TrashButton onClick={removeUser} />
    </StyledListingItem>
  );
}

export default UserListingItem;
