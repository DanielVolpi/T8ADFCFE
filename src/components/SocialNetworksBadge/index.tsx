import React from 'react';

import ISocialNetworksBadge from '@/interfaces/ISocialNetworksBadge';

const StyledSocialNetworksBadge = React.lazy(() => import('./style'));

function SocialNetworksBadge({ src, alt }: ISocialNetworksBadge) {
  return (
    <StyledSocialNetworksBadge src={src} alt={alt}></StyledSocialNetworksBadge>
  );
}

export default SocialNetworksBadge;
