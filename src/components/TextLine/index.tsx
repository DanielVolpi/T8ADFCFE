'use client';

import React from 'react';

const StyledTextLine = React.lazy(() => import('./style'));

function TextLine({ text, main }: { text: string; main?: boolean }) {
  return <StyledTextLine $main={main}>{text}</StyledTextLine>;
}

export default TextLine;
