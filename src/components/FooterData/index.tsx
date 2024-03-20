'use client';

import React from 'react';

const StyledFooterData = React.lazy(() => import('./style'));

function FooterData({ data }: { data: string }) {
  return <StyledFooterData>{data}</StyledFooterData>;
}

export default FooterData;
