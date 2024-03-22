'use client';

import React from 'react';

import IBody from '@/interfaces/IBody';

const StyledBody = React.lazy(() => import('./style'));

function Body({ children }: IBody) {
  return <StyledBody>{children}</StyledBody>;
}

export default Body;
