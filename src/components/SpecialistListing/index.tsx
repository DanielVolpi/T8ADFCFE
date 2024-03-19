'use client';

import React from 'react';
import SpecialistListingItem from '../SpecialistListingItem';
import ISpecialist from '@/interfaces/ISpecialist';
import ISpecialistListingEntry from '@/interfaces/ISpecialistListingEntry';

function SpecialistListing({ entries }: ISpecialistListingEntry) {
  return (
    <div>
      {entries.map((entry: ISpecialist) => (
        <SpecialistListingItem
          key={entry._id}
          firstname={entry.firstname}
          lastname={entry.lastname}
          position={entry.position}
        />
      ))}
    </div>
  );
}

export default SpecialistListing;
