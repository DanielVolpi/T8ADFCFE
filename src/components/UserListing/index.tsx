'use client';

import React from 'react';

import IUser from '@/interfaces/ISpecialist';
import IUserListingEntry from '@/interfaces/IUserListingEntry';

const UserListingItem = React.lazy(
  () => import('@/components/UserListingItem')
);

function UserListing({ entries, deleteCallback }: IUserListingEntry) {
  return (
    <>
      {entries.map((entry: IUser) => (
        <UserListingItem
          key={entry._id}
          id={entry._id}
          firstname={entry.firstname}
          lastname={entry.lastname}
          position={entry.position}
          country={entry.country}
          phoneNumber={entry.phoneNumber}
          email={entry.email}
          deleteCallback={deleteCallback}
        />
      ))}
    </>
  );
}

export default UserListing;
