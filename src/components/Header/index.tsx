'use client';

import React from 'react';

import getText from '@/services/getText';

const StyledHeader = React.lazy(() => import('./style'));

const Badge = React.lazy(() => import('@/components/Badge'));
const MainHeaderLine = React.lazy(() => import('@/components/MainHeaderLine'));
const SubHeader = React.lazy(() => import('@/components/SubHeader'));

function Header() {
  const { headerType, headerTitle1, headerTitle2, headerDate } = getText();
  return (
    <StyledHeader>
      <Badge text={headerType} />
      <div>
        <MainHeaderLine text={headerTitle1} />
        <MainHeaderLine secondary text={headerTitle2} />
      </div>
      <SubHeader text={headerDate} />
    </StyledHeader>
  );
}

export default Header;
