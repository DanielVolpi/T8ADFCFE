'use client';

import React from 'react';

import ITextLine from '@/interfaces/ITextLine';

const StyledTextLine = React.lazy(() => import('./style'));

function TextLine({ text, main }: ITextLine) {
  return <StyledTextLine $main={main}>{text}</StyledTextLine>;
}

export default TextLine;
