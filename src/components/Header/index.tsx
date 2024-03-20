'use client';

import React from 'react';
import getText from '@/services/getText';
import Badge from '@/components/Badge';
import MainHeaderLine from '@/components/MainHeaderLine';
import SubHeader from '@/components/SubHeader';

const StyledHeader = React.lazy(() => import('./style'));

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
