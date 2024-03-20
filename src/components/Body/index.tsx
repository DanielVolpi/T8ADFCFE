'use client';

import React, { ReactNode } from 'react';

const StyledBody = React.lazy(() => import('./style'));

function Body({ children }: { children: ReactNode }) {
  return <StyledBody>{children}</StyledBody>;
}

export default Body;
