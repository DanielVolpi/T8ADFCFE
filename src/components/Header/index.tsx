'use client';

import React from 'react';
import getText from '@/services/getText';
import StyledHeader from './style';

function Header() {
  const { headerType, headerTitle1, headerTitle2, headerDate } = getText();
  return (
    <StyledHeader>
      <div>{headerType}</div>
      <div>{headerTitle1}</div>
      <div>{headerTitle2}</div>
      <div>{headerDate}</div>
    </StyledHeader>
  );
}

export default Header;
