'use client';

import React from 'react';

import IUsersContainer from '@/interfaces/IUsersContainer';

const StyledUsersContainer = React.lazy(() => import('./style'));

function UsersContainer({ children }: IUsersContainer) {
  return <StyledUsersContainer>{children}</StyledUsersContainer>;
}

export default UsersContainer;
