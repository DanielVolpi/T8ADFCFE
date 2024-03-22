'use client';

import React from 'react';

import ITrashButton from '@/interfaces/ITrashButton';

const StyledTrashButton = React.lazy(() => import('./style'));

function TrashButton({ onClick }: ITrashButton) {
  return (
    <StyledTrashButton type='button' onClick={onClick}>
      <img
        src={'/images/trashButton.png'}
        alt={'Delete User'}
        width={'50px'}
        height={'50px'}
      />
    </StyledTrashButton>
  );
}

export default TrashButton;
