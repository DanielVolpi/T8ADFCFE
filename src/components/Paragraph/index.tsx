'use client';

import React, { ReactElement } from 'react';

const StyledParagraph = React.lazy(() => import('./style'));

function Paragraph({ children }: { children: ReactElement }) {
  return <StyledParagraph>{children}</StyledParagraph>;
}

export default Paragraph;
