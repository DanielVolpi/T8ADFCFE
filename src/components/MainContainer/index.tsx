'use client';

import React, { ReactNode } from 'react';

const StyledMainContainer = React.lazy(() => import('./style'));

function MainContainer({ children }: { children: ReactNode }) {
  return <StyledMainContainer>{children}</StyledMainContainer>;
}

export default MainContainer;
