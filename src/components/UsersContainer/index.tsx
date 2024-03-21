'use client';

import React, { ReactNode } from 'react';

const StyledUsersContainer = React.lazy(() => import('./style'));

function UsersContainer({ children }: { children: ReactNode }) {
  return <StyledUsersContainer>{children}</StyledUsersContainer>;
}

export default UsersContainer;
