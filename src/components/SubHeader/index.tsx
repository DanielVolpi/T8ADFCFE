'use client';

import React from 'react';

import ISubHeader from '@/interfaces/ISubHeader';

const StyledSubHeader = React.lazy(() => import('./style'));

function SubHeader({ text }: ISubHeader) {
  return (
    <StyledSubHeader>
      <div>{text}</div>
    </StyledSubHeader>
  );
}

export default SubHeader;
