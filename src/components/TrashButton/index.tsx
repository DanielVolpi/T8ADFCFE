'use client';

import React from 'react';

const StyledTrashButton = React.lazy(() => import('./style'));

function TrashButton({ onClick }) {
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
