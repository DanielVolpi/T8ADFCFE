'use client';

import React from 'react';

import IRegistrationSection from '@/interfaces/IRegistrationSection';

const StyledRegistrationSection = React.lazy(() => import('./style'));

const UserForm = React.lazy(() => import('@/components/UserForm'));
import getText from '@/services/getText';
const TextLine = React.lazy(() => import('@/components/TextLine'));

function RegistrationSection({ modalTrigger }: IRegistrationSection) {
  const { formTitle } = getText();
  return (
    <StyledRegistrationSection>
      <TextLine main text={formTitle} />
      <UserForm modalTrigger={modalTrigger} />
    </StyledRegistrationSection>
  );
}

export default RegistrationSection;
