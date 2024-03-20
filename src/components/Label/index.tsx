'use client';

import React, { ReactElement } from 'react';

const StyledLabel = React.lazy(() => import('./style'));

function Label({ text, children }: { text: string; children: ReactElement }) {
  return (
    <StyledLabel>
      {text}
      <div>{children}</div>
    </StyledLabel>
  );
}

export default Label;
