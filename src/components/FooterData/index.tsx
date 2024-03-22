'use client';

import React from 'react';

import IFooterData from '@/interfaces/IFooterData';

const StyledFooterData = React.lazy(() => import('./style'));

function FooterData({ data }: IFooterData) {
  return <StyledFooterData>{data}</StyledFooterData>;
}

export default FooterData;
