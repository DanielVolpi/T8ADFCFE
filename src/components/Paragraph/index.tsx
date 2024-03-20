'use client';

import React, { ReactNode } from 'react';

const StyledParagraph = React.lazy(() => import('./style'));

function Paragraph({ children }: { children: ReactNode }) {
  return <StyledParagraph>{children}</StyledParagraph>;
}

export default Paragraph;
