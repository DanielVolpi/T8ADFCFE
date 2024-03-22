'use client';

import IFormButton from '@/interfaces/IFormButton';
import React from 'react';

const StyledFormButton = React.lazy(() => import('./style'));

function FormButton({ type, children }: IFormButton) {
  return <StyledFormButton type={type}>{children}</StyledFormButton>;
}

export default FormButton;
