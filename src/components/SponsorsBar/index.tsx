import React from 'react';

const StyledSponsorsBar = React.lazy(() => import('./style'));

function SponsorsBar() {
  return (
    <StyledSponsorsBar>
      <img
        src='/images/sponsors.jpg'
        alt='Sponsors: Cluster Financiero, asobanca, IPBF, hightelecom, EBANX and zendesk'
      />
    </StyledSponsorsBar>
  );
}

export default SponsorsBar;
