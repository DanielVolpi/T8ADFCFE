'use client';

import React from 'react';

import IParagraph from '@/interfaces/IParagraph';

const StyledParagraph = React.lazy(() => import('./style'));

function Paragraph({ children }: IParagraph) {
  return <StyledParagraph>{children}</StyledParagraph>;
}

export default Paragraph;
