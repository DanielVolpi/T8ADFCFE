'use client';

import React from 'react';

const StyledBadge = React.lazy(() => import('./style'));

function Badge({ text }: { text: string }) {
  return <StyledBadge>{text}</StyledBadge>;
}

export default Badge;
