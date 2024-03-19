'use client';

import StyledFooter from './style';
import getText from '@/services/getText';

function Footer() {
  const { footer } = getText();
  return (
    <StyledFooter>
      <div>{footer}</div>
    </StyledFooter>
  );
}

export default Footer;
