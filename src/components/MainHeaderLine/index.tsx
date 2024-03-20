'use client';

import React from 'react';

const StyledMainHeaderLine = React.lazy(() => import('./style'));

function MainHeaderLine({
  text,
  secondary,
}: {
  text: string;
  secondary?: boolean;
}) {
  return (
    <StyledMainHeaderLine $secondary={secondary}>{text}</StyledMainHeaderLine>
  );
}

export default MainHeaderLine;
