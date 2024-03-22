'use client';

import React from 'react';

import IMainHeaderLine from '@/interfaces/IMainHeaderLine';

const StyledMainHeaderLine = React.lazy(() => import('./style'));

function MainHeaderLine({ text, secondary }: IMainHeaderLine) {
  return (
    <StyledMainHeaderLine $secondary={secondary}>{text}</StyledMainHeaderLine>
  );
}

export default MainHeaderLine;
