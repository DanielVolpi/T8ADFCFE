'use client';

import React from 'react';

import IMainContainer from '@/interfaces/IMainContainer';

const StyledMainContainer = React.lazy(() => import('./style'));

function MainContainer({ children }: IMainContainer) {
  return <StyledMainContainer>{children}</StyledMainContainer>;
}

export default MainContainer;
