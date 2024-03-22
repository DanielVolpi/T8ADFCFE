'use client';

import React from 'react';

import IBadge from '@/interfaces/IBadge';

const StyledBadge = React.lazy(() => import('./style'));

function Badge({ text }: IBadge) {
  return <StyledBadge>{text}</StyledBadge>;
}

export default Badge;
