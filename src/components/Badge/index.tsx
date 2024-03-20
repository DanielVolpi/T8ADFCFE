'use client';

import React from 'react';
const StyledBadge = React.lazy(() => import('./style'));

function Badge({ text }: { text: string }) {
  return (
    <StyledBadge>
      <div>{text}</div>
    </StyledBadge>
  );
}

export default Badge;
