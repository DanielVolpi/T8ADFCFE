'use client';

import React from 'react';

import getText from '@/services/getText';

const StyledFooter = React.lazy(() => import('./style'));

const SocialNetworksBar = React.lazy(
  () => import('@/components/SocialNetworksBar')
);
const FooterData = React.lazy(() => import('@/components/FooterData'));

function Footer() {
  const { footer } = getText();
  return (
    <StyledFooter>
      <FooterData data={footer} />
      <SocialNetworksBar />
    </StyledFooter>
  );
}

export default Footer;
