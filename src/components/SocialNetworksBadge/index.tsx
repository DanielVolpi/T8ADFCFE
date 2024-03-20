import React from 'react';

const StyledSocialNetworksBadge = React.lazy(() => import('./style'));

function SocialNetworksBadge({ src, alt }) {
  return (
    <StyledSocialNetworksBadge src={src} alt={alt}></StyledSocialNetworksBadge>
  );
}

export default SocialNetworksBadge;
