'use client';

import React, { ReactElement } from 'react';

import ILabel from '@/interfaces/ILabel';

const StyledLabel = React.lazy(() => import('./style'));

function Label({ text, forId }: ILabel) {
  return <StyledLabel htmlFor={forId}>{text}</StyledLabel>;
}

export default Label;
