'use client';

import React, { ReactElement } from 'react';

const StyledLabel = React.lazy(() => import('./style'));

function Label({ text, forId }: { text: string; forId: string }) {
  return <StyledLabel htmlFor={forId}>{text}</StyledLabel>;
}

export default Label;
