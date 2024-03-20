'use client';

import React from 'react';

const StyledFormButton = React.lazy(() => import('./style'));

function FormButton({ type, children }) {
  return <StyledFormButton type={type}>{children}</StyledFormButton>;
}

export default FormButton;
