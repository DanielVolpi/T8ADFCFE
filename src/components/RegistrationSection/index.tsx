'use client';

import React from 'react';

const StyledRegistrationSection = React.lazy(() => import('./style'));

const UserForm = React.lazy(() => import('@/components/UserForm'));
import getText from '@/services/getText';
const TextLine = React.lazy(() => import('@/components/TextLine'));

function RegistrationSection({ modalTrigger }: { modalTrigger: () => {} }) {
  const { formTitle } = getText();
  return (
    <StyledRegistrationSection>
      <TextLine main text={formTitle} />
      <UserForm modalTrigger={modalTrigger} />
    </StyledRegistrationSection>
  );
}

export default RegistrationSection;
