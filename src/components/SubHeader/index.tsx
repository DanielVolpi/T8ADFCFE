'use client';

import React from 'react';

const StyledSubHeader = React.lazy(() => import('./style'));

function SubHeader({ text }: { text: string }) {
  return (
    <StyledSubHeader>
      <div>{text}</div>
    </StyledSubHeader>
  );
}

export default SubHeader;
